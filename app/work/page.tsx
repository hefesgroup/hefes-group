import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import InnerHero from '@/components/InnerHero';
import WorkGrid from '@/components/work/WorkGrid';
import { cn, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Our work',
  description:
    'Selected platforms, mobile applications, websites, and open-source products built by Hefes Technology Group.',
};

export default function WorkPage() {
  return (
    <>
      <InnerHero
        eyebrow="Our work"
        title={['The products.', 'The work behind them.']}
        lead="Explore selected platforms, mobile applications, websites, and open-source products. Each story explains the software, the engineering involved, and HTG’s contribution."
      />
      <section className={cn(wrap, 'pb-[110px] max-md:pb-20')}>
        <WorkGrid />
      </section>
      <Cta />
    </>
  );
}
