import Image from 'next/image';
import Link from 'next/link';
import { getProject, projectHref } from '@/lib/projects';
import type { Service } from '@/lib/services';
import { cn, eyebrow, heading } from '@/lib/styles';
import Reveal from '../Reveal';
import Arrow from '../ui/Arrow';
import Eyebrow from '../ui/Eyebrow';
import Lines from '../ui/Lines';
import TextLink from '../ui/TextLink';

/** One service on the Services page, with deliverables and an optional related case study. */
export default function ServiceCapability({ service }: { service: Service }) {
  const { capability } = service;
  const related = capability.related;
  const relatedProject = related ? getProject(related.slug) : undefined;

  return (
    <Reveal
      as="article"
      id={service.id}
      className="grid scroll-mt-[110px] grid-cols-[.85fr_1.2fr] gap-20 border-t border-line py-[70px] max-md:grid-cols-1 max-md:gap-[30px] max-md:py-[50px]"
    >
      <div>
        <Eyebrow blue>{capability.eyebrow}</Eyebrow>
        <h2 className={cn(heading, 'mt-[23px] text-[clamp(38px,4vw,60px)] max-md:max-w-[550px]')}>
          <Lines lines={capability.title} />
        </h2>
      </div>
      <div>
        <p className="mb-8 text-[18px] text-muted max-md:text-[17px]">{capability.body}</p>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-[17px] text-[14px] max-xs:grid-cols-1">
          {capability.deliverables.map((item) => (
            <li key={item} className="border-t border-line pt-[15px]">
              {item}
            </li>
          ))}
        </ul>
        <TextLink href="/contact" className="mt-7">
          Discuss your project
        </TextLink>
        {related && relatedProject && (
          <Link
            href={projectHref(related.slug)}
            className="group mt-8 flex items-center gap-5 border-t border-line pt-6 max-md:gap-[15px]"
          >
            <Image
              src={relatedProject.image}
              alt=""
              sizes="112px"
              className="h-[88px] w-28 rounded-[4px] object-cover max-md:h-[70px] max-md:w-20"
            />
            <span className="flex flex-1 flex-col gap-1">
              <span className={eyebrow}>See the work</span>
              <strong className="text-[19px] font-normal group-hover:text-blue">{related.title}</strong>
              <span className="text-[13px] text-muted">{related.description}</span>
            </span>
            <Arrow />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
