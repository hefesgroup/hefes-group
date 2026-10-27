import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/styles';
import htgMark from '@/public/htg-mark.svg';

/** HTG mark with the two-line company name, linking home. */
export default function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Hefes Technology Group home"
      className={cn('flex shrink-0 items-center gap-[13px]', className)}
    >
      <Image src={htgMark} alt="" width={42} height={42} className="size-[42px] max-md:size-9" />
      <span className="text-[12px] font-medium leading-[1.3] tracking-[-.02em] max-md:text-[10px] max-xs:max-w-[83px] max-2xs:hidden">
        Hefes Technology
        <br />
        Group
      </span>
    </Link>
  );
}
