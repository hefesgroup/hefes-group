import type { Metadata } from 'next';
import InnerHero from '@/components/InnerHero';
import Prose from '@/components/legal/Prose';
import { PRIVACY } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How Hefes Technology Group handles the information you share through this website.',
};

export default function PrivacyPage() {
  return (
    <>
      <InnerHero eyebrow="Privacy" title={['A straightforward', 'approach to privacy.']} />
      <Prose blocks={PRIVACY} />
    </>
  );
}
