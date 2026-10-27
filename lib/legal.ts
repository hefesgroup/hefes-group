export type ProseBlock = {
  heading?: string;
  paragraphs: Array<string | { text: string; href: string; external?: boolean }>;
};

export const PRIVACY: ProseBlock[] = [
  {
    paragraphs: [
      'This website introduces Hefes Technology Group and its work. You can browse without creating an account.',
    ],
  },
  {
    heading: 'Getting in touch',
    paragraphs: [
      'If you contact us by email or phone, we receive the information you choose to share and use it to respond to your enquiry and discuss potential work. When you send the contact form, your name, email address, optional company, selected topic, and message are delivered by email to the HTG team. We use these details only to respond to your request. You can ask us to remove your enquiry by emailing office@hefesgroup.com.',
    ],
  },
  {
    heading: 'Local preferences',
    paragraphs: [
      'The website can remember your motion preference in your browser’s local storage. This preference stays in your browser and is not used for advertising.',
    ],
  },
  {
    heading: 'Website delivery',
    paragraphs: [
      'Our hosting provider processes the technical request information needed to deliver and protect the website. The site does not include advertising trackers or analytics scripts.',
    ],
  },
  {
    heading: 'External links',
    paragraphs: [
      'Links to products, repositories, and client websites take you to services with their own privacy practices.',
    ],
  },
  {
    heading: 'Questions and requests',
    paragraphs: [
      'For questions about information you have shared with HTG, contact us by email.',
      { text: 'office@hefesgroup.com', href: 'mailto:office@hefesgroup.com' },
    ],
  },
];

export const CREDITS: ProseBlock[] = [
  {
    paragraphs: [
      'The editorial workspace photographs used on this website are stock imagery from Unsplash. They do not depict the HTG team or offices.',
      'Project and product images come from HTG’s supplied portfolios.',
    ],
  },
  {
    heading: 'Photography sources',
    paragraphs: [
      {
        text: 'Collaborative workspace photograph',
        href: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
        external: true,
      },
      {
        text: 'Open workspace photograph',
        href: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
        external: true,
      },
      { text: 'Unsplash license', href: 'https://unsplash.com/license', external: true },
    ],
  },
  {
    heading: 'Typography',
    paragraphs: ['DM Sans, distributed through Google Fonts under the SIL Open Font License.'],
  },
];
