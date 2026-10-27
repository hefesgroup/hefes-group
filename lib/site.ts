export const SITE = {
  name: 'Hefes Technology Group',
  shortName: 'HTG',
  url: 'https://hefesgroup.com',
  description:
    'Hefes Technology Group (HTG) is a software development company from Niš, Serbia, helping founders launch digital products and businesses improve how they work.',
  email: 'office@hefesgroup.com',
  phone: '+381 69 77 50 51',
  phoneHref: 'tel:+38169775051',
  street: 'Stevana Sremca 12A',
  city: '18000 Niš, Serbia',
  footerTagline: ['Software development. Product thinking.', 'From Niš, Serbia. Since 2020.'],
} as const;

export const NAV_ITEMS = [
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
] as const;

export const FOOTER_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/work', label: 'Our work' },
  { href: '/about', label: 'About HTG' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

/** Options of the contact form's topic select. The API accepts only these values. */
export const CONTACT_TOPICS = [
  'I’m launching a new product',
  'I’m improving business operations',
  'I’m developing an existing platform',
  'I’m exploring AI or automation',
  'I’d like to try an HTG product',
  'Something else',
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
