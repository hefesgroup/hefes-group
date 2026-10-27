'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useReducedMotion } from '@/lib/motion';
import heroImage from '@/public/images/hero.webp';

/** Hero photo that drifts slower than the page while scrolling. Static when motion is off. */
export default function HeroParallaxImage({ alt }: { alt: string }) {
  const reducedMotion = useReducedMotion();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      setShift(Math.min(window.scrollY * 0.17, 130));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, [reducedMotion]);

  return (
    <div
      className="absolute inset-x-0 -inset-y-[5%] z-0 will-change-transform motion-off:will-change-auto"
      style={{ transform: `translateY(${reducedMotion ? 0 : shift}px) scale(1.015)` }}
    >
      <Image
        src={heroImage}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[55%_44%] saturate-35 max-md:object-[60%_center]"
      />
    </div>
  );
}
