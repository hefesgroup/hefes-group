import { arrowHover, cn } from '@/lib/styles';
import { ArrowUpRight } from './icons';

/** Diagonal arrow that nudges up-right when its `group` parent is hovered. */
export default function Arrow({ className }: { className?: string }) {
  return <ArrowUpRight className={cn('size-[21px]', arrowHover, className)} />;
}
