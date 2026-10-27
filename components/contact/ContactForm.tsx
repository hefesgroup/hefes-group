'use client';

import { useEffect, useRef, useState } from 'react';
import { CONTACT_LIMITS, type ContactResponse } from '@/lib/contact';
import { CONTACT_TOPICS } from '@/lib/site';
import { button, buttonBlue, cn, field, heading } from '@/lib/styles';
import Arrow from '../ui/Arrow';
import Eyebrow from '../ui/Eyebrow';
import TextLink from '../ui/TextLink';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const label = 'mb-[25px] block text-[14px]';
const row = 'grid grid-cols-2 gap-x-6 max-xl:grid-cols-1 max-xl:gap-0';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [reference, setReference] = useState('');
  const successRef = useRef<HTMLDivElement>(null);

  // Move focus to the confirmation so screen reader and keyboard users land on it.
  useEffect(() => {
    if (status === 'success') successRef.current?.focus();
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (status === 'submitting' || !form.reportValidity()) return;

    setStatus('submitting');
    setError('');
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => ({}))) as Partial<ContactResponse>;
      if (!response.ok || !('reference' in result) || !result.reference) {
        throw new Error(('error' in result && result.error) || 'We couldn’t send your enquiry.');
      }
      setReference(result.reference);
      setStatus('success');
    } catch (err) {
      setStatus('error');
      setError(
        `${err instanceof Error ? err.message : 'We couldn’t send your enquiry.'} Please try again, or email office@hefesgroup.com.`
      );
    }
  };

  if (status === 'success') {
    return (
      <div ref={successRef} tabIndex={-1} className="py-[55px] outline-none max-md:py-[25px]">
        <span
          aria-hidden="true"
          className="mb-7 grid size-[52px] place-items-center rounded-full border border-blue text-[25px] text-blue"
        >
          ✓
        </span>
        <Eyebrow blue>Enquiry received</Eyebrow>
        <h2 className={cn(heading, 'mt-5 text-[42px] max-md:text-[35px]')}>
          Thank you.
          <br />
          Let’s take it from here.
        </h2>
        <p className="mt-6 text-[16px] text-muted">
          Your enquiry has been sent to the HTG team. We’ll get in touch using the email you provided.
        </p>
        <p className="mt-[14px] text-[12px] text-muted">Reference: {reference}</p>
        <TextLink href="/work" className="mt-[34px]">
          Explore our work
        </TextLink>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form noValidate={false} onSubmit={handleSubmit} className="max-w-[900px]">
      <h2 className={cn(heading, 'text-[37px] leading-[1.12] max-md:text-[34px]')}>
        A little context
        <br />
        goes a long way.
      </h2>
      <p className="mt-[17px] mb-[30px] text-[15px] text-muted max-md:mb-[25px]">
        Start with what you know. We’ll work through the details together.
      </p>

      <div className={row}>
        <label className={label}>
          Your name <span className="sr-only">(required)</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Name and surname"
            maxLength={CONTACT_LIMITS.name}
            required
            className={field}
          />
        </label>
        <label className={label}>
          Your email <span className="sr-only">(required)</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            maxLength={CONTACT_LIMITS.email}
            required
            className={field}
          />
        </label>
      </div>
      <div className={row}>
        <label className={label}>
          Company <span className="text-[12px] text-muted">(optional)</span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Company or organization"
            maxLength={CONTACT_LIMITS.company}
            className={field}
          />
        </label>
        <label className={label}>
          What are you exploring?
          <select name="service" defaultValue={CONTACT_TOPICS[0]} className={cn(field, 'truncate pr-5')}>
            {CONTACT_TOPICS.map((topic) => (
              <option key={topic}>{topic}</option>
            ))}
          </select>
        </label>
      </div>
      <label className={label}>
        A little about the idea <span className="sr-only">(required)</span>
        <textarea
          name="message"
          rows={4}
          placeholder="What would you like to build or improve?"
          maxLength={CONTACT_LIMITS.message}
          required
          className={cn(field, 'min-h-[120px] resize-y')}
        />
      </label>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <button type="submit" disabled={submitting} className={cn(button, buttonBlue)}>
        <span>{submitting ? 'Sending…' : 'Send enquiry'}</span>
        <Arrow />
      </button>
      <p className="mt-5 text-[12px] leading-[1.7] text-muted">
        By sending this form, you agree that HTG can use these details to respond to your enquiry.{' '}
        <a href="/privacy" className="border-b border-current hover:text-blue">
          Privacy policy
        </a>
        .
      </p>
      <p
        role="status"
        aria-live="polite"
        className={cn(
          'mt-5 text-[14px] leading-[1.6] empty:hidden',
          status === 'error' && 'border-l-2 border-error bg-white p-[15px] text-error'
        )}
      >
        {submitting ? 'Sending your enquiry…' : status === 'error' ? error : ''}
      </p>
    </form>
  );
}
