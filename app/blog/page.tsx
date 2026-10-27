import type { Metadata } from 'next';
import Image from 'next/image';
import Cta from '@/components/Cta';
import InnerHero from '@/components/InnerHero';
import Reveal from '@/components/Reveal';
import Eyebrow from '@/components/ui/Eyebrow';
import TextLink from '@/components/ui/TextLink';
import { cn, heading, section, wrap } from '@/lib/styles';
import workspace from '@/public/images/workspace.webp';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Ideas, observations, and lessons from building digital products. The HTG journal is taking shape.',
};

export default function BlogPage() {
  return (
    <>
      <InnerHero
        eyebrow="The HTG journal"
        title={['A space for', 'what we learn.']}
        lead="Ideas, observations, and lessons from building digital products. Our journal is taking shape."
      />
      <section className={cn(section, 'bg-clay')}>
        <Reveal
          className={cn(
            wrap,
            'grid grid-cols-[1.1fr_1fr] items-center gap-[90px] max-md:grid-cols-1 max-md:gap-[45px]'
          )}
        >
          <div>
            <Eyebrow blue>Our first notes are still in the making</Eyebrow>
            <h2 className={cn(heading, 'my-[25px] text-[49px] max-md:text-[43px]')}>
              There’s always
              <br />
              more to explore.
            </h2>
            <p className="mb-[30px] text-[17px] text-muted">
              Until our first articles are ready, take a closer look at the products, platforms, and
              websites behind our work.
            </p>
            <TextLink href="/work">Explore our work</TextLink>
          </div>
          <Image
            src={workspace}
            alt="A calm workspace with natural light; editorial stock photograph"
            sizes="(width < 761px) 100vw, 600px"
            className="h-[440px] w-full rounded-lg object-cover saturate-30 max-md:h-[350px]"
          />
        </Reveal>
      </section>
      <Cta />
    </>
  );
}
