import type { Metadata } from 'next';
import InnerHero from '@/components/InnerHero';
import ButtonLink from '@/components/ui/ButtonLink';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <div className="pb-[70px]">
      <InnerHero
        eyebrow="404 / Page not found"
        title={['Let’s get you', 'back on track.']}
        lead="This page couldn’t be found. There’s plenty to explore from here."
      >
        <div className="mt-[37px] flex flex-wrap items-center gap-[15px]">
          <ButtonLink href="/">Back to HTG</ButtonLink>
          <ButtonLink href="/work" variant="outline">
            Explore our work
          </ButtonLink>
        </div>
      </InnerHero>
    </div>
  );
}
