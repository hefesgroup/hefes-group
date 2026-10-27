import Link from 'next/link';
import { HOME } from '@/lib/home';
import { cn, eyebrow, wrap } from '@/lib/styles';
import ButtonLink from '../ui/ButtonLink';
import { ArrowRight } from '../ui/icons';
import HeroParallaxImage from './HeroParallaxImage';

const heroButton = 'max-xs:gap-[18px] max-xs:px-5 max-xs:py-[14px] max-xs:text-[12px]';

export default function Hero() {
  const { hero } = HOME;
  return (
    <section
      aria-label="Introducing Hefes Technology Group"
      className="relative isolate flex min-h-[min(850px,calc(100svh-98px))] flex-col overflow-hidden bg-hero-bg text-white 2xl:min-h-[850px] max-xl:min-h-[760px] max-md:min-h-[740px] max-xs:min-h-[745px]"
    >
      <HeroParallaxImage alt={hero.imageAlt} />
      <div aria-hidden="true" className="hero-overlay max-md:hero-overlay-mobile absolute inset-0 z-10" />

      <div
        className={cn(
          wrap,
          'relative z-20 flex-1 pt-[clamp(75px,10vw,150px)] pb-20 2xl:pt-[145px] max-md:pt-[90px] max-md:pb-[65px] max-xs:pt-[78px]'
        )}
      >
        <p className={cn(eyebrow, 'mb-[30px] opacity-80 max-xs:text-[10px] max-xs:tracking-[.1em]')}>
          {hero.eyebrow}
        </p>
        <h1 className="max-w-[900px] text-[clamp(60px,7.2vw,108px)] leading-[1.02] font-[250] tracking-[-.055em] max-xl:text-[85px] max-md:text-[clamp(57px,9vw,75px)] max-xs:text-[59px]">
          {hero.title.map((line, i) => (
            <span key={line} className="-mb-[.2em] block overflow-hidden pb-[.2em]">
              <span
                className={cn(
                  'block animate-line-in',
                  i === 0 ? '[animation-delay:.15s]' : '[animation-delay:.28s]'
                )}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        <p className="mt-[33px] max-w-[500px] animate-soft-in text-[18px] leading-[1.65] text-white/89 [animation-delay:.55s] max-md:mt-[30px] max-md:max-w-[460px] max-md:text-[17px] max-xs:text-[16px]">
          {hero.description}
        </p>
        <div className="mt-[37px] flex animate-soft-in flex-wrap items-center gap-[15px] [animation-delay:.55s] max-xs:gap-3">
          <ButtonLink href="/contact" className={heroButton}>
            Let’s talk
          </ButtonLink>
          <ButtonLink href="#work" variant="outline-light" className={heroButton}>
            Explore our work
          </ButtonLink>
        </div>
      </div>

      <div className={cn(wrap, 'relative z-20')}>
        <div className="flex items-center justify-between gap-5 border-t border-white/24 py-6 text-[11px] tracking-[.09em] uppercase max-md:py-[23px] max-md:text-[10px] max-xs:text-[9px] max-xs:tracking-[.07em]">
          <span>{hero.foot}</span>
          <Link href="#company" className="group flex items-center gap-5 max-xs:gap-2">
            Discover HTG
            <ArrowRight className="size-[18px] rotate-90 transition-[translate] duration-[350ms] ease-htg group-hover:translate-y-[5px] max-xs:size-[15px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
