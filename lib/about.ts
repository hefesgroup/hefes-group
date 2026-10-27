import type { StaticImageData } from 'next/image';
import anastasia from '@/public/images/founders/anastasia-nikolaidou-mitic.png';
import dragan from '@/public/images/founders/dragan-mitic.jpg';

export const ABOUT = {
  hero: {
    eyebrow: 'About HTG',
    title: ['A software company.', 'A builder’s mindset.'],
    lead: 'Founded in Niš, Serbia, in 2020, HTG helps founders launch digital products and businesses improve their operations. We take ideas through planning, design, development, and production—and build products of our own, too.',
  },
  craft: {
    eyebrow: 'Product thinking, in practice',
    title: ['We build our own.', 'And bring that care', 'to yours.'],
    copy: 'Developing Kiddly and Nomora keeps us close to the decisions behind a product: what to build, how people use it, and how it evolves.',
    imageAlt: 'Kiddly interfaces designed and developed by HTG',
  },
  prose: {
    title: ['A builder’s mindset.', 'From the beginning.'],
    paragraphs: [
      'Founded in 2020, HTG brings together product development, software engineering, and technical leadership. Our work spans SaaS platforms, mobile applications, websites, and the backend systems behind them.',
      'Our main strength is end-to-end product development: connecting the decisions about what to build with the design, engineering, and release of the software. We also work on established platforms, bringing the same product perspective to new features, integrations, and architectural improvements.',
      'Founded by software engineer and entrepreneur Dragan Mitić, HTG is based in Niš and works on digital products used across Europe.',
    ],
  },
  facts: [
    { value: '2020', label: 'The beginning of HTG' },
    { value: 'Niš', label: 'Our home in Serbia' },
    { value: 'End to end', label: 'From concept to production' },
    { value: 'Open source', label: 'Part of what we build' },
  ],
  principles: {
    eyebrow: 'What guides us',
    title: ['The way we think', 'shapes what we build.'],
    items: [
      {
        no: '01',
        title: 'Understand the purpose.',
        copy: 'A useful solution begins with the people who need it and the problem it should solve. Technology follows that understanding.',
      },
      {
        no: '02',
        title: 'Take ownership.',
        copy: 'We care about the decisions behind the work, the details in its delivery, and how the software will be maintained.',
      },
      {
        no: '03',
        title: 'Build together.',
        copy: 'Good outcomes depend on shared context. We value direct communication, thoughtful collaboration, and clear expectations.',
      },
    ],
  },
} as const;

export const FOUNDERS: { name: string; role: string; image: StaticImageData; alt: string }[] = [
  { name: 'Dragan Mitić', role: 'CEO', image: dragan, alt: 'Dragan Mitić, CEO of HTG' },
  {
    name: 'Anastasia Nikolaidou Mitić',
    role: 'CMO',
    image: anastasia,
    alt: 'Anastasia Nikolaidou Mitić, CMO of HTG',
  },
];
