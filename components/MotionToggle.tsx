'use client';

import { setMotionOff, useMotionOff } from '@/lib/motion';
import { cn } from '@/lib/styles';

export default function MotionToggle() {
  const motionOff = useMotionOff();

  return (
    <button
      type="button"
      aria-pressed={!motionOff}
      onClick={() => setMotionOff(!motionOff)}
      className="inline-flex min-h-8 items-center border-0 bg-transparent px-0 py-1 text-[12px] text-inherit hover:text-blue"
    >
      <span
        aria-hidden="true"
        className={cn('mr-[7px] inline-block size-[5px] rounded-full', motionOff ? 'bg-muted' : 'bg-blue')}
      />
      {motionOff ? 'Motion off' : 'Motion on'}
    </button>
  );
}
