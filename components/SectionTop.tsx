import { cn, h2, sectionTop } from '@/lib/styles';
import Reveal from './Reveal';
import Eyebrow from './ui/Eyebrow';
import Lines from './ui/Lines';
import TextLink from './ui/TextLink';

type SectionTopProps = {
  eyebrow: string;
  title: readonly string[];
  link?: { href: string; label: string };
};

/** Eyebrow + large heading, with an optional link aligned to the right. */
export default function SectionTop({ eyebrow, title, link }: SectionTopProps) {
  return (
    <Reveal className={sectionTop}>
      <div>
        <Eyebrow className="mb-[22px]">{eyebrow}</Eyebrow>
        <h2 className={cn(h2, 'max-w-[850px]')}>
          <Lines lines={title} />
        </h2>
      </div>
      {link && (
        <TextLink href={link.href} className="shrink-0 max-md:mt-[30px]">
          {link.label}
        </TextLink>
      )}
    </Reveal>
  );
}
