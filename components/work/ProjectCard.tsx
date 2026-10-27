import Image from 'next/image';
import Link from 'next/link';
import { projectHref, type Project } from '@/lib/projects';
import Arrow from '../ui/Arrow';

type ProjectCardProps = {
  project: Project;
  hidden?: boolean;
};

/** Image card linking to a case study (Home "Selected client work" and the Work grid). */
export default function ProjectCard({ project, hidden }: ProjectCardProps) {
  return (
    <Link href={projectHref(project.slug)} hidden={hidden} className="group block min-w-0">
      <div className="relative aspect-[1.32] overflow-hidden rounded-[6px] bg-clay max-md:aspect-[1.1] max-xs:aspect-[1.3]">
        <Image
          src={project.image}
          alt={project.cardAlt}
          fill
          sizes="(width < 451px) 100vw, (width < 1440px) 50vw, 640px"
          className="object-cover transition-[scale] duration-800 ease-htg group-hover:scale-[1.045]"
        />
        <span
          aria-hidden="true"
          className="absolute right-5 bottom-5 translate-y-[10px] rounded-[40px] bg-white px-[18px] py-[11px] text-[12px] text-ink opacity-0 transition-[opacity,translate] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-md:hidden"
        >
          Explore project ↗
        </span>
      </div>
      <div className="flex items-start justify-between gap-5 pt-5">
        <div>
          <h3 className="text-[30px] leading-[1.08] font-light tracking-[-.05em] max-md:text-[25px] max-xs:text-[29px]">
            {project.title}
          </h3>
          <p className="mt-[6px] text-[14px] text-muted max-md:text-[12px] max-xs:text-[13px]">
            {project.tagline}
          </p>
        </div>
        <Arrow className="mt-2 group-hover:text-blue max-md:size-[18px]" />
      </div>
    </Link>
  );
}
