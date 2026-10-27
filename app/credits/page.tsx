import type { Metadata } from 'next';
import InnerHero from '@/components/InnerHero';
import Prose from '@/components/legal/Prose';
import { CREDITS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Image credits',
  description: 'Sources of the photography and typography used on the Hefes Technology Group website.',
};

export default function CreditsPage() {
  return (
    <>
      <InnerHero eyebrow="Image credits" title={['A note on', 'the photography.']} />
      <Prose blocks={CREDITS} />
    </>
  );
}
