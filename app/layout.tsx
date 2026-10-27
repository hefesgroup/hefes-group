import type { Metadata, Viewport } from 'next';
import { DM_Sans } from 'next/font/google';
import PageTransition from '@/components/PageTransition';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { SITE } from '@/lib/site';
import { cn } from '@/lib/styles';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Hefes Technology Group · Software development from idea to launch',
    template: '%s · Hefes Technology Group',
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  keywords: [
    'Hefes Technology Group',
    'HTG',
    'software development',
    'product development',
    'web platforms',
    'mobile applications',
    'AI and automation',
    'Niš',
    'Serbia',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Hefes Technology Group',
    description: SITE.description,
    images: [{ url: '/images/hero.webp', width: 2200, height: 1467, alt: SITE.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hefes Technology Group',
    description: SITE.description,
    images: ['/images/hero.webp'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

// Runs before paint: marks JS as available (for scroll reveal) and restores the motion preference.
const prePaintScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(localStorage.getItem('htg-motion')==='off')d.classList.add('motion-off')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(dmSans.variable, 'scroll-smooth scroll-pt-[110px] motion-off:scroll-auto motion-reduce:scroll-auto')}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: prePaintScript }} />
      </head>
      <body className="bg-paper font-sans text-[17px] leading-[1.6] text-ink antialiased selection:bg-blue selection:text-white">
        <a
          href="#main"
          className="fixed -top-[100px] left-5 z-[500] bg-blue px-5 py-[10px] text-white focus:top-3"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <PageTransition />
      </body>
    </html>
  );
}
