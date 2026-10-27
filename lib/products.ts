import type { StaticImageData } from 'next/image';
import { getProject } from './projects';

export type Product = {
  slug: string;
  name: string;
  image: StaticImageData;
  /** Home showcase. */
  home: { eyebrow: string; benefit: string };
  /** Products page. */
  page: { eyebrow: string; subtitle: string; badge: string };
  description: string;
  action: { label: string; href: string; external: boolean };
};

const kiddly = getProject('kiddly')!;
const nomora = getProject('nomora')!;

export const PRODUCTS: Product[] = [
  {
    slug: 'kiddly',
    name: 'Kiddly',
    image: kiddly.image,
    home: { eyebrow: 'HTG product', benefit: 'Bring preschool teams and parents closer.' },
    page: {
      eyebrow: 'Preschool management · Open source',
      subtitle: 'Preschool management for staff and parents.',
      badge: 'HTG product',
    },
    description: kiddly.summary,
    action: kiddly.action,
  },
  {
    slug: 'nomora',
    name: 'Nomora',
    image: nomora.image,
    home: { eyebrow: 'Built with JCI Niš', benefit: 'Give your organization one shared workspace.' },
    page: {
      eyebrow: 'Organization workspace · Open source',
      subtitle: 'Members, partners, events, and projects in one place.',
      badge: 'Built with JCI Niš',
    },
    description: nomora.summary,
    action: nomora.action,
  },
];
