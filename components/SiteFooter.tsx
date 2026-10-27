import Link from 'next/link';
import { FOOTER_LINKS, SITE } from '@/lib/site';
import { cn, wrap } from '@/lib/styles';
import Brand from './Brand';
import CopyrightYear from './CopyrightYear';
import MotionToggle from './MotionToggle';
import Eyebrow from './ui/Eyebrow';
import Lines from './ui/Lines';

export default function SiteFooter() {
  return (
    <footer className="bg-clay pt-[60px]">
      <div className={wrap}>
        <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-10 pb-[60px] max-xl:gap-[30px] max-md:grid-cols-2 max-md:gap-10 max-xs:grid-cols-1">
          <div className="max-md:col-span-full max-xs:col-auto">
            <Brand className="mb-[23px]" />
            <p className="text-[13px] leading-[1.8] text-muted">
              <Lines lines={SITE.footerTagline} />
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 content-start gap-x-[30px] gap-y-[13px] text-[14px] max-md:gap-x-[25px] max-md:gap-y-3 max-xs:max-w-[300px]"
          >
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-blue">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-[10px] text-[14px] max-xs:mt-[5px]">
            <Eyebrow as="span" className="mb-3 text-muted">
              A good place to start
            </Eyebrow>
            <a href={`mailto:${SITE.email}`} className="hover:text-blue">
              {SITE.email}
            </a>
            <a href={SITE.phoneHref} className="hover:text-blue">
              {SITE.phone}
            </a>
            <span className="text-muted">Niš, Serbia</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-[22px] border-t border-footer-line py-[23px] text-[12px] text-muted max-md:flex-col max-md:items-start max-md:gap-[15px]">
          <span>
            © <CopyrightYear /> Hefes Technology Group. All rights reserved.
          </span>
          <div
            className={cn(
              'flex items-center gap-[25px]',
              'max-md:w-full max-md:flex-wrap max-md:justify-between max-md:gap-4'
            )}
          >
            <Link href="/privacy" className="hover:text-blue">
              Privacy
            </Link>
            <Link href="/credits" className="hover:text-blue">
              Image credits
            </Link>
            <MotionToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
