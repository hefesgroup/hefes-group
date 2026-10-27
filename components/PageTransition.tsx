'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/motion';
import { cn } from '@/lib/styles';
import htgLogo from '@/public/htg-logo.svg';

type Phase = 'idle' | 'leaving' | 'arriving';

const LEAVE_MS = 180;
const ARRIVE_MS = 240;
const FAILSAFE_MS = 4000;

/** Finds the internal page link a click should animate, or null to let the browser handle it. */
function internalTarget(event: MouseEvent, currentPath: string): string | null {
  if (event.defaultPrevented || event.button !== 0) return null;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return null;
  const anchor = (event.target as Element | null)?.closest?.('a');
  if (!anchor || !anchor.href) return null;
  if (anchor.target && anchor.target !== '_self') return null;
  if (anchor.hasAttribute('download')) return null;
  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  // Same page (with or without a hash): let the browser scroll.
  if (url.pathname === currentPath) return null;
  return `${url.pathname}${url.search}${url.hash}`;
}

/** Brief branded overlay between page navigations. Disabled when motion is off. */
export default function PageTransition() {
  const router = useRouter();
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<Phase>('idle');
  const [lastPath, setLastPath] = useState(pathname);

  // When the route changes, finish the transition (state adjusted during render, no effect).
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setPhase(phase === 'leaving' ? 'arriving' : 'idle');
  }

  useEffect(() => {
    if (reducedMotion) return;
    const onClick = (event: MouseEvent) => {
      const href = internalTarget(event, window.location.pathname);
      if (!href) return;
      // Capture phase runs before next/link, which then skips its own navigation.
      event.preventDefault();
      setPhase('leaving');
      window.setTimeout(() => router.push(href), LEAVE_MS);
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [reducedMotion, router]);

  useEffect(() => {
    if (phase === 'idle') return;
    const timer = window.setTimeout(
      () => setPhase('idle'),
      phase === 'arriving' ? ARRIVE_MS : FAILSAFE_MS
    );
    return () => window.clearTimeout(timer);
  }, [phase]);

  const active = phase !== 'idle';

  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed inset-0 z-[300] grid place-items-center bg-clay p-8 motion-off:hidden motion-reduce:hidden',
        active
          ? 'visible opacity-100 transition-[opacity] duration-[180ms]'
          : 'invisible opacity-0 transition-[opacity,visibility] duration-[220ms]'
      )}
    >
      <div
        className={cn(
          'flex flex-col items-center gap-[18px] transition-[opacity,translate] duration-200 ease-htg',
          active ? 'translate-y-0 opacity-100' : 'translate-y-[7px] opacity-0'
        )}
      >
        <Image src={htgLogo} alt="" className="h-auto w-[clamp(180px,22vw,250px)]" />
        <span className="text-center text-[11px] leading-[1.5] tracking-[.16em] uppercase">
          Hefes Technology Group
        </span>
        <span
          className={cn(
            'h-[2px] w-[52px] bg-blue transition-[scale,opacity] duration-200 ease-htg',
            active ? 'scale-x-100 opacity-100' : 'scale-x-30 opacity-0'
          )}
        />
      </div>
    </div>
  );
}
