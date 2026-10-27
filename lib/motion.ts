'use client';

import { useSyncExternalStore } from 'react';

// The inline script in app/layout.tsx sets the `motion-off` class on <html> before paint.
// Components read that class as an external store, so there is one source of truth.

export const MOTION_STORAGE_KEY = 'htg-motion';
export const MOTION_OFF_CLASS = 'motion-off';

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  const media = window.matchMedia('(prefers-reduced-motion: reduce)');
  media.addEventListener('change', onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener('change', onChange);
  };
}

const getMotionOff = () => document.documentElement.classList.contains(MOTION_OFF_CLASS);
const getReducedMotion = () =>
  getMotionOff() || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True when the visitor switched motion off with the footer toggle. */
export function useMotionOff() {
  return useSyncExternalStore(subscribe, getMotionOff, () => false);
}

/** True when motion is off, either by the toggle or by the OS reduced-motion setting. */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getReducedMotion, () => false);
}

export function setMotionOff(off: boolean) {
  document.documentElement.classList.toggle(MOTION_OFF_CLASS, off);
  try {
    if (off) localStorage.setItem(MOTION_STORAGE_KEY, 'off');
    else localStorage.removeItem(MOTION_STORAGE_KEY);
  } catch {
    // Storage can be unavailable (private mode); the toggle still works for this visit.
  }
}
