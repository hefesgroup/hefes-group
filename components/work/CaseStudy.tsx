import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/projects';
import { cn, eyebrow, heading, innerH1, tag, wrap } from '@/lib/styles';
import Reveal from '../Reveal';
import ButtonLink from '../ui/ButtonLink';
import Eyebrow from '../ui/Eyebrow';
import { ArrowUpRight } from '../ui/icons';
import TextLink from '../ui/TextLink';

const storyHeading = cn(heading, 'my-6 text-[clamp(33px,3.5vw,48px)] max-md:text-[35px]');
const storyCopy = 'text-[17px] leading-[1.75] text-muted max-md:text-[16px]';

export function CaseHero({ project }: { project: Project }) {
  return (
    <section className={cn(wrap, 'pt-10 pb-[58px] max-md:pt-7 max-md:pb-[38px]')}>
      <Link href="/work" className="group inline-flex items-center gap-3 text-[13px] hover:text-blue">
        <ArrowUpRight className="size-4 rotate-180 transition-[translate] duration-[350ms] ease-htg group-hover:-translate-x-[3px] group-hover:translate-y-[3px]" />
        All projects
      </Link>
      <div className="flex items-end justify-between gap-[35px] max-md:block">
        <div>
          <Eyebrow blue className="mt-[30px] max-md:mt-[25px]">
            {project.tagline}
          </Eyebrow>
          <h1 className={cn(innerH1, 'mt-[18px] max-w-[1100px]')}>{project.title}</h1>
        </div>
        <ButtonLink
          href={project.action.href}
          external={project.action.external}
          variant="outline"
          className="max-md:mt-[22px]"
        >
          {project.action.label}
        </ButtonLink>
      </div>
      <div className="mt-[30px] grid grid-cols-[1fr_.6fr] gap-[60px] max-xl:gap-[55px] max-md:mt-[25px] max-md:grid-cols-1 max-md:gap-[25px]">
        <p className="text-[20px] leading-[1.7] text-muted max-md:text-[18px]">{project.summary}</p>
        <div className="border-t border-line pt-[18px]">
          <span className={eyebrow}>HTG’s role</span>
          <p className="mt-2 text-[14px] text-muted">{project.role.label}</p>
          <p className="mt-2 text-[14px] text-muted">{project.role.scope}</p>
        </div>
      </div>
    </section>
  );
}

export function CaseFigure({ project }: { project: Project }) {
  return (
    <figure className={cn(wrap, 'my-0')}>
      <div className="overflow-hidden rounded-lg bg-clay max-md:rounded-[4px]">
        <Image
          src={project.image}
          alt={project.figure}
          priority
          sizes="(width < 1440px) 100vw, 1260px"
          className="max-h-[820px] w-full object-contain"
        />
      </div>
      <figcaption className="max-w-[900px] pt-4 text-[13px] text-muted max-md:text-[12px]">
        {project.figure}
      </figcaption>
    </figure>
  );
}

export function CaseStory({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 gap-[60px] max-md:grid-cols-1 max-md:gap-10">
      <Reveal as="article" className="border-t border-line pt-[25px]">
        <Eyebrow blue>01 / The need</Eyebrow>
        <h2 className={storyHeading}>
          The problem
          <br />
          behind the product.
        </h2>
        <p className={storyCopy}>{project.need}</p>
      </Reveal>
      <Reveal as="article" delay={80} className="border-t border-line pt-[25px]">
        <Eyebrow blue>02 / The solution</Eyebrow>
        <h2 className={storyHeading}>{project.solutionTitle}</h2>
        <p className={storyCopy}>{project.solution}</p>
      </Reveal>
      <Reveal
        as="article"
        className="col-span-full grid grid-cols-2 gap-x-[75px] border-t border-line pt-[25px] max-md:col-auto max-md:block"
      >
        <Eyebrow blue className="col-span-full">
          03 / What we delivered
        </Eyebrow>
        <div>
          <h2 className={storyHeading}>
            From decisions
            <br />
            to working software.
          </h2>
          <p className={storyCopy}>{project.delivered}</p>
          <div className="mt-[30px] flex flex-wrap gap-[9px]">
            {project.tech.map((item) => (
              <span key={item} className={tag}>
                {item}
              </span>
            ))}
          </div>
        </div>
        <ul className="mt-6 max-md:mt-[30px]">
          {project.scope.map((item) => (
            <li key={item} className="border-t border-line py-[17px] text-[15px]">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}

export function CaseNext() {
  return (
    <div className="mt-[60px] flex items-center justify-between gap-[30px] border-t border-line pt-[35px] max-md:mt-10 max-md:flex-col max-md:items-start">
      <ButtonLink href="/contact">Discuss a similar challenge</ButtonLink>
      <TextLink href="/work">Explore more projects</TextLink>
    </div>
  );
}
