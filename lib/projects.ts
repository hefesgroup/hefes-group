import type { StaticImageData } from 'next/image';
import avovent from '@/public/images/work/avovent.webp';
import gameOfCodes from '@/public/images/work/game-of-codes.webp';
import jciBalkanConference from '@/public/images/work/jci-balkan-conference.webp';
import jciSerbia from '@/public/images/work/jci-serbia.webp';
import kiddly from '@/public/images/work/kiddly.webp';
import klikaPlus from '@/public/images/work/klika-plus.webp';
import kontosBalkan from '@/public/images/work/kontos-balkan.webp';
import nomora from '@/public/images/work/nomora.webp';
import the5 from '@/public/images/work/the5.webp';

export type ProjectCategory = 'platforms' | 'websites' | 'products';

export type Project = {
  slug: string;
  title: string;
  /** Short descriptor shown under the card title and as the case-study eyebrow. */
  tagline: string;
  category: ProjectCategory;
  image: StaticImageData;
  /** Alt text on cards. */
  cardAlt: string;
  /** Primary action in the case-study header. */
  action: { label: string; href: string; external: boolean };
  summary: string;
  role: { label: string; scope: string };
  /** Caption under the case-study image (also its alt text). */
  figure: string;
  need: string;
  solutionTitle: string;
  solution: string;
  delivered: string;
  scope: string[];
  tech: string[];
};

/** All case studies, in the order shown on the Work page. */
export const PROJECTS: Project[] = [
  {
    slug: 'avovent',
    title: 'Avovent',
    tagline: 'Cloud event ecosystem',
    category: 'platforms',
    image: avovent,
    cardAlt: 'Avovent product and interface screens',
    action: { label: 'Visit Avovent', href: 'https://avovent.com/', external: true },
    summary:
      'A cloud platform connecting event organizers, speakers, attendees, sponsors, and exhibitors in one ecosystem.',
    role: {
      label: 'Product development',
      scope: 'HTG scope: architecture, product development, and technical leadership.',
    },
    figure: 'Avovent’s organizer dashboard and speaker management interface.',
    need: 'Event organizers need to connect different audiences and workflows: speakers, attendees, sponsors, and exhibitors.',
    solutionTitle: 'An event platform, from architecture to launch.',
    solution:
      'HTG designed and built Avovent from the ground up: defining its system architecture, guiding full-cycle product development, and providing technical leadership. The platform brings complex event workflows and multiple user roles into a connected experience.',
    delivered:
      'A connected cloud platform brings those roles into one event ecosystem, developed from architecture through launch.',
    scope: [
      'System architecture and scalability design',
      'Full-cycle product development, from concept to launch',
      'Technical leadership and product strategy',
      'Cloud infrastructure and microservices',
    ],
    tech: ['Laravel', 'React', 'MySQL', 'Cloud', 'Microservices'],
  },
  {
    slug: 'klika-plus',
    title: 'Klika+',
    tagline: 'Marketing subscription · Web & mobile',
    category: 'platforms',
    image: klikaPlus,
    cardAlt: 'Klika+ product and interface screens',
    action: { label: 'Explore Klika+', href: 'https://plus.klikadigital.com/', external: true },
    summary:
      'A subscription product from Klika.Digital that gives small businesses a weekly marketing plan, practical guidance, and a consistent routine.',
    role: {
      label: 'Client · Klika.Digital',
      scope: 'HTG scope: the connected website, web app, mobile apps, and administration tools.',
    },
    figure: 'Klika+ across its website, member app, and mobile experience.',
    need: 'Small businesses need practical marketing guidance they can return to each week, on the web and on their phones.',
    solutionTitle: 'One subscription experience across web and mobile.',
    solution:
      'HTG built the landing page, member web application, Flutter mobile applications, and administrative dashboard. The connected experience covers subscriptions, newsletters, passwordless access, and push notifications.',
    delivered:
      'One subscription experience connects a landing page, member web app, iOS and Android apps, and administration tools.',
    scope: [
      'Landing page, member web app, and admin dashboard',
      'Flutter mobile applications for iOS and Android',
      'Passwordless magic-link login and push notifications',
      'Subscriptions, payment reminders, and newsletter delivery',
    ],
    tech: ['Flutter', 'Prisma', 'Firebase', 'Brevo', 'Amazon SES'],
  },
  {
    slug: 'kiddly',
    title: 'Kiddly',
    tagline: 'Preschool management · Open source',
    category: 'products',
    image: kiddly,
    cardAlt: 'Kiddly product and interface screens',
    action: { label: 'Open Kiddly', href: 'https://app.kiddly.io/', external: true },
    summary:
      'An open-source preschool platform bringing everyday operations and parent communication into one shared space.',
    role: {
      label: 'HTG product',
      scope: 'Product screens from Kiddly, designed and developed by HTG.',
    },
    figure: 'Kiddly’s connected preschool interfaces, designed and built by HTG.',
    need: 'Preschool teams and parents need a shared place for everyday information, attendance, events, and communication.',
    solutionTitle: 'Preschool management for staff and parents.',
    solution:
      'Kiddly is an HTG product, designed and developed end to end. It brings attendance, communication, media sharing, events, and administrative tools together, with an architecture designed for privacy and self-hosting.',
    delivered:
      'A preschool platform connects administrative tools with companion applications for staff and parents.',
    scope: [
      'End-to-end product design and development',
      'Backend, frontend, and companion mobile applications',
      'Product vision and AGPL open-source strategy',
      'Privacy-first architecture and self-hosting options',
    ],
    tech: ['NestJS', 'Next.js', 'PostgreSQL', 'Redis', 'Cloud'],
  },
  {
    slug: 'nomora',
    title: 'Nomora',
    tagline: 'Organization workspace · Open source',
    category: 'products',
    image: nomora,
    cardAlt: 'Nomora product and interface screens',
    action: { label: 'Ask about access', href: '/contact', external: false },
    summary:
      'An organization platform connecting members, partners, events, and projects—built by HTG in partnership with JCI Niš.',
    role: {
      label: 'Built with JCI Niš',
      scope: 'Built by HTG in partnership with JCI Niš.',
    },
    figure: 'Nomora’s organization workspace, built in partnership with JCI Niš.',
    need: 'Organizations need to coordinate their membership, relationships, events, and projects across a shared workspace.',
    solutionTitle: 'Members, partners, events, and projects in one place.',
    solution:
      'Nomora brings a member portal, membership management, a CRM, events, projects, and administration into connected applications. Organizations have their own branded workspace, supported by a modular backend and single sign-on.',
    delivered:
      'Connected applications bring member access and administration together, with branded workspaces and single sign-on.',
    scope: [
      'Product and UX design across connected applications',
      'Multi-tenant architecture and branded workspaces',
      'Full-stack development on a modular NestJS backend',
      'Single sign-on and AGPL v3 open-source release',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Turborepo', 'Passport.js', 'Amazon SES'],
  },
  {
    slug: 'jci-serbia',
    title: 'JCI Serbia',
    tagline: 'National organization · SR / EN',
    category: 'websites',
    image: jciSerbia,
    cardAlt: 'JCI Serbia product and interface screens',
    action: { label: 'Visit JCI Serbia', href: 'https://jci.rs/', external: true },
    summary:
      'A bilingual website bringing JCI Serbia’s organization, local chapters, events, and membership information into one place.',
    role: {
      label: 'Client · JCI Serbia',
      scope: 'HTG scope: website design, development, and connected membership and content features.',
    },
    figure: 'JCI Serbia’s bilingual website and organization content.',
    need: 'Visitors need to understand the organization, find a local chapter, and discover opportunities to take part.',
    solutionTitle: 'A connected home for Serbia’s young leaders.',
    solution:
      'HTG designed and built the website and its redesign. The experience introduces the organization, connects visitors with local chapters, and makes events, city-filtered news, and membership applications easier to navigate.',
    delivered:
      'A bilingual website connects chapter information, events, city-filtered news, and membership applications.',
    scope: [
      'Website design, redesign, and frontend development',
      'Serbian and English content',
      'CMS-driven events and news, filtered by city',
      'Membership sign-up, including online membership',
    ],
    tech: ['Website design', 'Responsive development', 'CMS', 'Multilingual'],
  },
  {
    slug: 'game-of-codes',
    title: 'Game of Codes',
    tagline: 'Developer conference · Niš',
    category: 'websites',
    image: gameOfCodes,
    cardAlt: 'Game of Codes product and interface screens',
    action: { label: 'Visit Game of Codes', href: 'https://gameofcodes.rs/', external: true },
    summary:
      'The website for Game of Codes, a two-day IT conference in Niš for developers, architects, product leaders, and founders.',
    role: {
      label: 'Game of Codes',
      scope: 'HTG scope: the conference website and its event-specific features.',
    },
    figure: 'Game of Codes conference website and event presentation.',
    need: 'Conference visitors need to explore the speakers, plan their two days, and choose the right ticket.',
    solutionTitle: 'A bold digital stage for a developer conference.',
    solution:
      'The conference website brings the speaker lineup, biographies, two-day agenda, ticket passes, sponsors, and previous-edition recap into a focused event experience.',
    delivered:
      'The event website brings the program, speaker biographies, passes, sponsors, and previous-edition recap together.',
    scope: [
      'Event website design and development',
      'Speaker lineup, biographies, and agenda',
      'Ticket passes and checkout flow',
      'Sponsor showcase and edition recap',
    ],
    tech: ['Website design', 'Event experience', 'Ticketing', 'Responsive development'],
  },
  {
    slug: 'kontos-balkan',
    title: 'Kontos Balkan',
    tagline: 'Industrial company website',
    category: 'websites',
    image: kontosBalkan,
    cardAlt: 'Kontos Balkan product and interface screens',
    action: { label: 'Visit Kontos Balkan', href: 'https://kontos.co.rs/', external: true },
    summary:
      'A company website for Kontos Balkan, the Niš-based specialist in JCB machinery, parts, and service.',
    role: {
      label: 'Client · Kontos Balkan',
      scope: 'HTG scope: company website design and development.',
    },
    figure: 'Kontos Balkan’s company website and machinery presentation.',
    need: 'Customers need to identify relevant machinery parts and services, then make a clear enquiry.',
    solutionTitle: 'A practical website with an unmistakable presence.',
    solution:
      'HTG designed and built a responsive website around a cinematic hero, a parts catalogue, service information, and clear inquiry flows. The site helps customers move from identifying their needs to contacting the business.',
    delivered:
      'A responsive company website connects the parts catalogue, service information, and contact flows.',
    scope: [
      'Company website design and development',
      'Parts catalogue organized by category',
      'Parts inquiry and contact flows',
      'Video hero and responsive mobile layout',
    ],
    tech: ['Website design', 'Product catalogue', 'Responsive development'],
  },
  {
    slug: 'the5',
    title: 'The5',
    tagline: 'National awards program',
    category: 'websites',
    image: the5,
    cardAlt: 'The5 product and interface screens',
    action: { label: 'Visit The5', href: 'https://the5.jci.rs/', external: true },
    summary:
      'The website for JCI Serbia’s national program recognizing young leaders behind businesses, innovations, and initiatives.',
    role: {
      label: 'Client · JCI Serbia',
      scope: 'HTG scope: program website and connection to voting. HTG is also a program partner.',
    },
    figure: 'The5 awards website and program presentation.',
    need: 'A national awards program needs to make eligibility, categories, nominations, and voting easy to understand.',
    solutionTitle: 'A digital home for a national awards program.',
    solution:
      'The website presents the award categories, eligibility, selection process, and jury. It invites nominations and sponsors and connects visitors to the public voting application. HTG is also a program partner.',
    delivered:
      'The website explains the program, invites nominations and sponsors, and connects visitors to public voting.',
    scope: [
      'Program website design and development',
      'Award categories, eligibility, and jury information',
      'Nomination and sponsorship calls',
      'Connection to the public voting app',
    ],
    tech: ['Website design', 'Awards program', 'Public voting'],
  },
  {
    slug: 'jci-balkan-conference',
    title: 'JCI Balkan Conference',
    tagline: 'International conference · Niš 2027',
    category: 'websites',
    image: jciBalkanConference,
    cardAlt: 'JCI Balkan Conference product and interface screens',
    action: {
      label: 'Visit the conference',
      href: 'https://balkanconference2027.jcinis.rs/',
      external: true,
    },
    summary: 'The information and registration website for the JCI Balkan Conference 2027 in Niš.',
    role: {
      label: 'Client · JCI Niš',
      scope: 'HTG scope: conference information, registration, room selection, and ticketing.',
    },
    figure: 'JCI Balkan Conference website and registration experience.',
    need: 'Conference attendees need to understand the event and navigate registration, ticket options, and accommodation.',
    solutionTitle: 'Conference information, ticketing, and registration.',
    solution:
      'Beyond the conference concept and program, the website supports registration with email sign-in, room selection, and ticket tiers priced by country and room. The experience connects event storytelling with the practical details of attending.',
    delivered:
      'The website connects event information with email sign-in, room selection, and ticket tiers.',
    scope: [
      'Conference website design and development',
      'Registration with email sign-in',
      'Ticket tiers priced by country and room',
      'Program, host-city, and FAQ pages',
    ],
    tech: ['Website design', 'Registration', 'Ticketing', 'Responsive development'],
  },
];

export const WORK_FILTERS: { id: 'all' | ProjectCategory; label: string }[] = [
  { id: 'all', label: 'All work' },
  { id: 'platforms', label: 'Platforms & apps' },
  { id: 'websites', label: 'Websites' },
  { id: 'products', label: 'Our products' },
];

const HOME_FEATURED_SLUGS = ['avovent', 'klika-plus', 'jci-serbia', 'kontos-balkan'];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export const HOME_FEATURED_PROJECTS = HOME_FEATURED_SLUGS.map((slug) => getProject(slug)!);

export const projectHref = (slug: string) => `/work/${slug}`;
