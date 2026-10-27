import { cn, heading, wrap } from '@/lib/styles';
import Reveal from './Reveal';
import ButtonLink from './ui/ButtonLink';
import Eyebrow from './ui/Eyebrow';

/** "What could we build together?" band shown above the footer on most pages. */
export default function Cta() {
  return (
    <section className="border-t border-cta-line bg-cta py-[95px] max-md:py-[75px]">
      <Reveal className={cn(wrap, 'flex items-end justify-between gap-[50px] max-md:block')}>
        <div>
          <Eyebrow className="mb-[25px]">Let’s make it happen</Eyebrow>
          <h2 className={cn(heading, 'max-w-[850px] text-[clamp(48px,6.4vw,95px)]')}>
            What could we
            <br />
            build together?
          </h2>
        </div>
        <div>
          <ButtonLink href="/contact" className="mb-2 max-md:mt-[35px] max-md:mb-0">
            Start a conversation
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
