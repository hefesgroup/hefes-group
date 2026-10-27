export type Service = {
  /** Anchor id on the Services page. */
  id: string;
  no: string;
  title: string;
  /** Home accordion copy. */
  summary: string;
  tags: string[];
  /** Services page copy. */
  capability: {
    eyebrow: string;
    title: string[];
    body: string;
    deliverables: string[];
    related?: { slug: string; title: string; description: string };
  };
};

export const SERVICES: Service[] = [
  {
    id: 'service-0',
    no: '01',
    title: 'Product development',
    summary:
      'For founders launching a digital product. We shape the idea, design the experience, build the software, and prepare it for release.',
    tags: ['Product discovery', 'UX & UI design', 'Web platforms & SaaS', 'Mobile applications'],
    capability: {
      eyebrow: '01 / Product development',
      title: ['From your first idea', 'to a product launch.'],
      body: 'For founders building a new digital product, we connect product planning, UX design, software engineering, and launch. We can build the web platform, mobile app, admin tools, and integrations as one product, with priorities shaped around the first release.',
      deliverables: [
        'Product discovery & technical planning',
        'Product & UX design',
        'Custom software development',
        'Web platforms & SaaS',
        'iOS & Android applications',
        'Website design & development',
      ],
      related: {
        slug: 'avovent',
        title: 'Avovent',
        description: 'An event platform, from architecture to launch.',
      },
    },
  },
  {
    id: 'service-1',
    no: '02',
    title: 'Business platforms',
    summary:
      'For businesses improving daily operations. We build internal tools, connect systems, and develop the platforms your team relies on.',
    tags: ['System architecture', 'Backend engineering', 'Integrations', 'Performance & scalability'],
    capability: {
      eyebrow: '02 / Business software & platforms',
      title: ['Make everyday work', 'work better.'],
      body: 'When your team depends on manual work or disconnected tools, we help define and build the software that connects the process. That can mean a new internal platform, integrations between existing systems, or improvements to the software you already use.',
      deliverables: [
        'Custom business applications',
        'Workflow & process automation',
        'API & system integrations',
        'Existing platform development',
        'Performance & scalability',
        'System architecture & backend',
      ],
      related: {
        slug: 'nomora',
        title: 'Nomora',
        description: 'Members, partners, events, and projects in one place.',
      },
    },
  },
  {
    id: 'service-2',
    no: '03',
    title: 'AI & automation',
    summary:
      'Connect AI to your product and automate the workflows that take time away from your team.',
    tags: ['AI integrations', 'Workflow automation', 'Technical discovery', 'IT consulting'],
    capability: {
      eyebrow: '03 / AI & automation',
      title: ['Put AI to work', 'inside your business.'],
      body: 'We start with a specific use case: a repetitive workflow, information your team needs to work with, or a feature that could make your product more useful. Then we assess the approach and build the connections between AI, your software, and the people using it.',
      deliverables: [
        'AI feature integration',
        'Workflow automation',
        'Integration with existing systems',
        'Technical discovery',
        'Solution architecture',
        'IT consulting',
      ],
    },
  },
];

export const PROCESS = [
  {
    eyebrow: '01 / Understand',
    title: 'Clarify what needs to change.',
    copy: 'We look at the users, business priorities, existing software, and technical constraints to agree on what should happen first.',
  },
  {
    eyebrow: '02 / Build',
    title: 'Turn priorities into software.',
    copy: 'Design and engineering move together. We build in practical steps, review the work with you, and adapt as the details become clearer.',
  },
  {
    eyebrow: '03 / Evolve',
    title: 'Develop beyond the first release.',
    copy: 'New features, integrations, and engineering work help the product adapt as its users and business needs develop.',
  },
] as const;
