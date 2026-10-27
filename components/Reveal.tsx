'use client';

import { useEffect, useRef } from 'react';

type RevealProps = {
  as?: 'div' | 'section' | 'article';
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
  id?: string;
  children: React.ReactNode;
};

/**
 * Fades its content in once it scrolls into view.
 * Styling lives in app/globals.css ([data-reveal]); motion-off and reduced-motion show it immediately.
 */
export default function Reveal({ as: Tag = 'div', delay, className, id, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={className}
      data-reveal=""
      style={delay ? ({ '--delay': `${delay}ms` } as React.CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
