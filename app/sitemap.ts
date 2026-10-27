import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/projects';
import { SITE } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<[string, number]> = [
    ['', 1],
    ['/services', 0.9],
    ['/products', 0.9],
    ['/work', 0.9],
    ['/about', 0.8],
    ['/contact', 0.8],
    ['/blog', 0.5],
    ['/privacy', 0.3],
    ['/credits', 0.3],
  ];

  return [
    ...pages.map(([path, priority]) => ({
      url: `${SITE.url}${path}`,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...PROJECTS.map((project) => ({
      url: `${SITE.url}/work/${project.slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    })),
  ];
}
