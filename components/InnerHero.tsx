import { cn, compactH1, innerH1, wrap } from '@/lib/styles';
import Eyebrow from './ui/Eyebrow';
import Lines from './ui/Lines';

type InnerHeroProps = {
  eyebrow: string;
  title: readonly string[];
  lead?: string;
  /** Tighter spacing and a smaller title (Products page). */
  compact?: boolean;
  children?: React.ReactNode;
};

/** Opening section of every page except Home, Contact and case studies. */
export default function InnerHero({ eyebrow, title, lead, compact = false, children }: InnerHeroProps) {
  return (
    <section
      className={cn(
        wrap,
        compact
          ? 'pt-[45px] pb-[38px] max-md:py-[30px]'
          : 'pt-[52px] pb-[58px] max-md:pt-[35px] max-md:pb-[38px]'
      )}
    >
      <Eyebrow withDot className="mb-5 max-md:mb-[17px]">
        {eyebrow}
      </Eyebrow>
      <h1 className={cn(compact ? compactH1 : innerH1, 'max-w-[1100px]')}>
        <Lines lines={title} />
      </h1>
      {lead && (
        <p
          className={cn(
            'mt-[26px] max-w-[710px] text-[18px] leading-[1.7] text-muted max-md:mt-[22px] max-md:text-[17px]',
            compact && 'max-md:text-[16px] max-md:leading-[1.65]'
          )}
        >
          {lead}
        </p>
      )}
      {children}
    </section>
  );
}
