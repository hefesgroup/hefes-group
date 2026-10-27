'use client';

import { useState } from 'react';
import { PROJECTS, WORK_FILTERS, type ProjectCategory } from '@/lib/projects';
import { filterChip } from '@/lib/styles';
import ProjectCard from './ProjectCard';

type Filter = 'all' | ProjectCategory;

/** Filter chips, live project count and the full project grid. */
export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('all');
  const isShown = (category: ProjectCategory) => filter === 'all' || filter === category;
  const count = PROJECTS.filter((project) => isShown(project.category)).length;

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mb-[45px] flex flex-wrap gap-3">
        {WORK_FILTERS.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            onClick={() => setFilter(item.id)}
            className={filterChip}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mb-[25px] text-[12px] text-muted">
        {count} {count === 1 ? 'project' : 'projects'}
      </p>
      <div className="grid grid-cols-2 gap-x-[30px] gap-y-[55px] max-md:gap-x-5 max-md:gap-y-[35px] max-xs:grid-cols-1 max-xs:gap-y-10">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} hidden={!isShown(project.category)} />
        ))}
      </div>
    </>
  );
}
