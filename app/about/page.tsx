import type { Metadata } from 'next';
import Image from 'next/image';
import Cta from '@/components/Cta';
import InnerHero from '@/components/InnerHero';
import Reveal from '@/components/Reveal';
import SectionTop from '@/components/SectionTop';
import Eyebrow from '@/components/ui/Eyebrow';
import Lines from '@/components/ui/Lines';
import TextLink from '@/components/ui/TextLink';
import { ABOUT, FOUNDERS } from '@/lib/about';
import { getProject } from '@/lib/projects';
import { cn, h2, heading, section, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Founded in Niš, Serbia, in 2020, HTG helps founders launch digital products and businesses improve their operations.',
};

const kiddlyImage = getProject('kiddly')!.image;

export default function AboutPage() {
  return (
    <>
      <InnerHero eyebrow={ABOUT.hero.eyebrow} title={ABOUT.hero.title} lead={ABOUT.hero.lead} />

      <Reveal
        as="section"
        className={cn(
          wrap,
          'grid grid-cols-[1.1fr_1fr] items-center gap-[70px] pt-5 pb-[45px] max-xl:gap-10 max-md:grid-cols-1 max-md:gap-[30px] max-md:pt-0 max-md:pb-5'
        )}
      >
        <div className="overflow-hidden rounded-[6px] bg-clay">
          <Image
            src={kiddlyImage}
            alt={ABOUT.craft.imageAlt}
            sizes="(width < 761px) 100vw, 700px"
            className="h-auto w-full"
          />
        </div>
        <div>
          <Eyebrow blue>{ABOUT.craft.eyebrow}</Eyebrow>
          <h2 className={cn(heading, 'mt-[23px] text-[clamp(36px,4vw,58px)] max-md:text-[40px]')}>
            <Lines lines={ABOUT.craft.title} />
          </h2>
          <p className="my-[26px] text-[17px] leading-[1.75] text-muted">{ABOUT.craft.copy}</p>
          <TextLink href="/products">Explore our products</TextLink>
        </div>
      </Reveal>

      <section className={cn(wrap, section)}>
        <Reveal className="grid grid-cols-2 gap-20 max-md:grid-cols-1 max-md:gap-[35px]">
          <h2 className={cn(h2, 'max-w-[500px]')}>
            <Lines lines={ABOUT.prose.title} />
          </h2>
          <div>
            {ABOUT.prose.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mb-[25px] text-[18px] text-muted max-md:text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        <div
          id="htg-at-a-glance"
          className="mt-[70px] grid grid-cols-4 gap-x-[clamp(24px,3vw,48px)] gap-y-8 border-t border-line pt-[35px] max-xl:grid-cols-2 max-sm:gap-x-5 max-sm:gap-y-[30px] max-sm:pt-7"
        >
          {ABOUT.facts.map((fact, i) => (
            <Reveal key={fact.value} delay={i * 70} className="min-w-0">
              <p className="mb-4 text-[clamp(30px,3vw,44px)] leading-[1.15] font-light tracking-[-.05em] whitespace-nowrap max-xl:text-[clamp(30px,4.5vw,44px)] max-sm:mb-3 max-sm:text-[clamp(22px,6vw,32px)] max-sm:tracking-[-.04em]">
                {fact.value}
              </p>
              <p className="text-[13px] leading-[1.65] text-muted max-sm:text-[12px]">{fact.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="founders" aria-labelledby="founders-heading" className={cn(wrap, section, 'pt-0 max-xs:pt-0')}>
        <div className="grid grid-cols-[.72fr_1.28fr] items-start gap-[clamp(35px,5vw,75px)] max-xl:grid-cols-1 max-xl:gap-[35px]">
          <Reveal>
            <Eyebrow blue withDot className="mb-[23px]">
              The founders
            </Eyebrow>
            <h2 id="founders-heading" className={cn(heading, 'text-[clamp(38px,4vw,58px)]')}>
              The people
              <br className="max-xl:hidden" /> behind HTG.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-7 max-sm:grid-cols-1 max-sm:gap-[38px]">
            {FOUNDERS.map((founder, i) => (
              <Reveal as="article" key={founder.name} delay={i * 100} className="min-w-0">
                <div className="relative aspect-square overflow-hidden rounded-[6px] bg-clay">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    sizes="(width < 601px) 100vw, (width < 1051px) 50vw, 420px"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-[22px] text-[clamp(25px,2.2vw,32px)] leading-[1.15] font-light tracking-[-.04em] text-balance max-sm:mt-[18px] max-sm:text-[29px]">
                  {founder.name}
                </h3>
                <p className="mt-[9px] text-[14px] text-blue max-sm:mt-[7px]">{founder.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(section, 'bg-clay')}>
        <div className={wrap}>
          <SectionTop eyebrow={ABOUT.principles.eyebrow} title={ABOUT.principles.title} />
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-[35px]">
            {ABOUT.principles.items.map((item, i) => (
              <Reveal as="article" key={item.no} delay={i * 80} className="border-t border-clay-line pt-[25px]">
                <Eyebrow blue>{item.no}</Eyebrow>
                <h3 className={cn(heading, 'mt-[23px] mb-5 text-[33px] max-md:mt-[17px]')}>{item.title}</h3>
                <p className="text-[15px] text-muted">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
