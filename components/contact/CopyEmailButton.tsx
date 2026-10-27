'use client';

import { useEffect, useRef, useState } from 'react';
import { SITE } from '@/lib/site';
import { CopyIcon } from '../ui/icons';

/** Copies the office email to the clipboard; falls back to showing the address. */
export default function CopyEmailButton() {
  const [status, setStatus] = useState('');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(SITE.email);
      setStatus('Email address copied.');
    } catch {
      setStatus(SITE.email);
    }
    timer.current = window.setTimeout(() => setStatus(''), 4000);
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="mt-[6px] flex min-h-11 items-center gap-[9px] border-0 bg-transparent px-0 py-[10px] text-[13px] leading-[1.4] text-muted hover:text-blue"
      >
        <CopyIcon className="size-4" />
        <span>Copy email address</span>
      </button>
      <p aria-live="polite" className="min-h-5 text-[12px] text-blue">
        {status}
      </p>
    </>
  );
}
