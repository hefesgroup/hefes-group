import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';
import { SendEmailCommand, SESv2Client } from '@aws-sdk/client-sesv2';
import { CONTACT_LIMITS, type ContactPayload } from '@/lib/contact';
import { CONTACT_TOPICS } from '@/lib/site';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Light per-IP throttle. The site runs as a single Node process on Coolify, so memory is enough.
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };
const attempts = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  attempts.set(ip, recent);
  if (attempts.size > 5000) attempts.clear();
  return recent.length > RATE_LIMIT.max;
}

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const newReference = () => randomBytes(4).toString('hex').toUpperCase();

export async function POST(request: Request) {
  const region = process.env.AWS_REGION;
  const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const debugEnabled =
    process.env.CONTACT_DEBUG === 'true' || process.env.NODE_ENV !== 'production';

  if (!region || !accessKeyId || !secretAccessKey || !fromEmail || !toEmail) {
    return NextResponse.json({ error: 'The contact form is not configured.' }, { status: 500 });
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many enquiries in a short time. Please wait a few minutes.' },
      { status: 429 }
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = (await request.json()) as Partial<ContactPayload>;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const reference = newReference();

  // Bots fill the hidden field. Pretend success so they don't retry.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, reference });
  }

  const name = clean(body.name, CONTACT_LIMITS.name);
  const email = clean(body.email, CONTACT_LIMITS.email);
  const company = clean(body.company, CONTACT_LIMITS.company);
  const service = clean(body.service, 100);
  const message = clean(body.message, CONTACT_LIMITS.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: 'Name, email and a short message are required.' },
      { status: 400 }
    );
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }
  const topic = (CONTACT_TOPICS as readonly string[]).includes(service) ? service : 'Something else';

  const sesClient = new SESv2Client({ region, credentials: { accessKeyId, secretAccessKey } });

  const textBody = [
    'New enquiry from the hefesgroup.com contact form',
    '',
    `Reference: ${reference}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || '—'}`,
    `Topic: ${topic}`,
    '',
    'Message:',
    message,
  ].join('\n');

  try {
    const result = await sesClient.send(
      new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `Enquiry ${reference} · ${name} · ${topic}`, Charset: 'UTF-8' },
            Body: { Text: { Data: textBody, Charset: 'UTF-8' } },
          },
        },
      })
    );

    if (debugEnabled) {
      console.log('SES SendEmail success', {
        reference,
        messageId: result.MessageId,
        requestId: result.$metadata?.requestId,
      });
    }

    return NextResponse.json({
      ok: true,
      reference,
      ...(debugEnabled
        ? {
            debug: {
              provider: 'amazon-ses',
              messageId: result.MessageId ?? null,
              requestId: result.$metadata?.requestId ?? null,
            },
          }
        : {}),
    });
  } catch (error) {
    if (debugEnabled) console.error('SES SendEmail failed', error);
    else console.error('SES SendEmail failed');
    return NextResponse.json({ error: 'We couldn’t send your enquiry.' }, { status: 502 });
  }
}
