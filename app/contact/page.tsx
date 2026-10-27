import type { Metadata } from 'next';
import ContactForm from '@/components/contact/ContactForm';
import CopyEmailButton from '@/components/contact/CopyEmailButton';
import Arrow from '@/components/ui/Arrow';
import Eyebrow from '@/components/ui/Eyebrow';
import { SITE } from '@/lib/site';
import { cn, heading, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell HTG about the product, platform, or workflow you want to build or improve. Email office@hefesgroup.com or send a short brief.',
};

export default function ContactPage() {
  return (
    <>
      <section
        className={cn(
          wrap,
          'grid grid-cols-[.9fr_1.1fr] grid-rows-[auto_auto_1fr] items-start gap-x-[clamp(36px,6vw,90px)] gap-y-0 pt-[65px] pb-[70px]',
          'max-xl:grid-cols-[.85fr_1.15fr] max-xl:gap-x-9',
          'max-md:flex max-md:flex-col max-md:gap-7 max-md:pt-[30px] max-md:pb-10'
        )}
      >
        <div className="col-start-1 row-start-1">
          <Eyebrow blue withDot className="mb-[22px] max-md:mb-5">
            Let’s talk
          </Eyebrow>
          <h1 className={cn(heading, 'text-[clamp(47px,5.2vw,76px)] max-md:text-[48px] max-xs:text-[43px]')}>
            What would you
            <br />
            like to build?
          </h1>
          <p className="mt-7 max-w-[430px] text-[18px] leading-[1.75] text-muted max-md:mt-6 max-md:text-[17px]">
            A new product. A better platform. A simpler way to work. Tell us where you want to go.
          </p>
        </div>

        <div className="col-start-2 row-span-3 row-start-1 min-w-0 rounded-lg bg-clay p-9 max-xl:p-7 max-md:w-full max-md:p-[26px] max-xs:px-5 max-xs:py-6">
          <ContactForm />
        </div>

        <div className="col-start-1 row-start-2 mt-11 flex min-w-0 flex-col items-start max-md:mt-3">
          <Eyebrow className="mb-2">Prefer a conversation?</Eyebrow>
          <a
            href={`mailto:${SITE.email}`}
            className="group inline-flex max-w-full items-center gap-[15px] border-b border-ink py-[9px] text-[clamp(21px,2.4vw,34px)] font-light tracking-[-.04em] [overflow-wrap:anywhere] hover:text-blue max-md:text-[27px] max-xs:text-[24px]"
          >
            {SITE.email}
            <Arrow className="size-[23px]" />
          </a>
          <CopyEmailButton />
          <a href={SITE.phoneHref} className="mt-[7px] block text-[16px] hover:text-blue">
            {SITE.phone}
          </a>
        </div>

        <div className="col-start-1 row-start-3 mt-[42px] max-w-[430px] border-t border-line pt-[26px] max-md:mt-0 max-md:pt-6">
          <Eyebrow className="mb-3">What happens next</Eyebrow>
          <p className="text-[15px] leading-[1.75] text-muted">
            We’ll review your brief and get in touch to understand the goal, ask a few questions, and
            discuss a useful next step.
          </p>
        </div>
      </section>

      <section className={wrap}>
        <div className="flex justify-between gap-[35px] border-t border-line pt-[30px] pb-[50px] text-[14px] max-md:flex-col max-md:gap-[22px] max-md:pb-[35px]">
          <p>
            Hefes Technology Group
            <br />
            <span className="text-muted">
              {SITE.street} · {SITE.city}
            </span>
          </p>
          <p>
            Product thinking.
            <br />
            <span className="text-muted">From the first idea to working software.</span>
          </p>
        </div>
      </section>
    </>
  );
}
