'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NAV_ITEMS } from '@/lib/site';
import { button, buttonOutline, cn, wrap } from '@/lib/styles';
import Brand from './Brand';
import Arrow from './ui/Arrow';

const isCurrent = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function SiteHeader() {
  const pathname = usePathname();
  // The menu belongs to the page it was opened on, so navigating closes it without an effect.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // One scroll listener drives the compact header and the progress bar.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const y = window.scrollY;
      const total = root.scrollHeight - window.innerHeight;
      setScrolled(y > 25);
      setProgress(total > 0 ? Math.round(Math.min(100, (100 * y) / total) * 2) / 2 : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  // While the mobile menu is open: lock page scroll, close on Escape or when the layout turns desktop.
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuPath(null);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    const desktop = window.matchMedia('(width >= 761px)');
    const onMedia = () => {
      if (desktop.matches) close();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onMedia);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onMedia);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-[100] bg-white/97 transition-[height,box-shadow] duration-[350ms]',
        scrolled
          ? 'h-20 shadow-[0_1px_0_rgba(0,0,0,.1)] max-md:h-[74px]'
          : 'h-[98px] max-md:h-[82px]'
      )}
    >
      <div
        className={cn(
          wrap,
          'flex h-full items-center justify-between gap-[35px] max-xl:gap-[25px] max-md:gap-[15px] max-xs:gap-[13px]'
        )}
      >
        <Brand />

        <nav
          id="navigation"
          aria-label="Main navigation"
          className={cn(
            'ml-auto flex items-center gap-[34px] max-xl:gap-[21px]',
            'max-md:fixed max-md:inset-x-0 max-md:bottom-0 max-md:ml-0 max-md:flex-col max-md:items-start max-md:justify-center max-md:gap-[19px] max-md:bg-paper max-md:px-[25px] max-md:py-10 max-md:transition-[opacity,translate,visibility] max-md:duration-[220ms] max-xs:px-[22px]',
            scrolled ? 'max-md:top-[74px]' : 'max-md:top-[82px]',
            menuOpen
              ? 'max-md:visible max-md:translate-y-0 max-md:opacity-100'
              : 'max-md:invisible max-md:-translate-y-3 max-md:opacity-0'
          )}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(pathname, item.href) ? 'page' : undefined}
              onClick={() => setMenuPath(null)}
              className="relative py-2 text-[14px] after:absolute after:bottom-[3px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-blue after:transition-[scale] after:duration-300 after:ease-htg after:content-[''] hover:after:scale-x-100 aria-[current=page]:text-blue aria-[current=page]:after:scale-x-100 max-md:p-0 max-md:text-[38px] max-md:font-light max-md:tracking-[-.04em] max-md:after:hidden"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={cn(
            button,
            buttonOutline,
            'ml-[15px] whitespace-nowrap max-xl:ml-0 max-md:ml-auto max-md:min-h-[43px] max-md:gap-[15px] max-md:px-[18px] max-md:py-[11px] max-md:text-[12px] max-xs:gap-[10px] max-xs:px-[14px] max-xs:py-[10px]'
          )}
        >
          Let’s talk
          <Arrow className="max-md:size-4 max-xs:hidden" />
        </Link>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-controls="navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
          className="group hidden items-center gap-3 border-0 bg-transparent p-3 text-[13px] max-md:flex max-md:min-h-11 max-md:min-w-11 max-md:justify-end max-md:py-3 max-md:pr-0 max-md:pl-2"
        >
          <span className="max-md:hidden">Menu</span>
          <span
            aria-hidden="true"
            className="relative h-[15px] w-[23px] before:absolute before:top-[3px] before:left-0 before:h-px before:w-full before:bg-current before:transition-[rotate,top] before:duration-300 before:content-[''] after:absolute after:top-[11px] after:left-0 after:h-px after:w-full after:bg-current after:transition-[rotate,top] after:duration-300 after:content-[''] group-aria-expanded:before:top-[7px] group-aria-expanded:before:rotate-45 group-aria-expanded:after:top-[7px] group-aria-expanded:after:-rotate-45"
          />
        </button>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-[2px] bg-blue"
        style={{ width: `${progress}%` }}
      />
    </header>
  );
}
