import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseFigure, CaseHero, CaseNext, CaseStory } from '@/components/work/CaseStudy';
import { getProject, PROJECTS } from '@/lib/projects';
import { cn, section, wrap } from '@/lib/styles';

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<'/work/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} · ${project.tagline}`,
    description: project.summary,
    openGraph: { images: [{ url: project.image.src, alt: project.figure }] },
  };
}

export default async function CaseStudyPage({ params }: PageProps<'/work/[slug]'>) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <CaseHero project={project} />
      <CaseFigure project={project} />
      <section className={cn(wrap, section)}>
        <CaseStory project={project} />
        <CaseNext />
      </section>
    </>
  );
}
