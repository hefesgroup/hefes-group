import { cn, dot, eyebrow } from '@/lib/styles';

type EyebrowProps = {
  children: React.ReactNode;
  blue?: boolean;
  withDot?: boolean;
  as?: 'p' | 'span';
  className?: string;
};

/** Small uppercase label above headings. */
export default function Eyebrow({
  children,
  blue = false,
  withDot = false,
  as: Tag = 'p',
  className,
}: EyebrowProps) {
  return (
    <Tag className={cn(eyebrow, blue && 'text-blue', className)}>
      {withDot && <span aria-hidden="true" className={dot} />}
      {children}
    </Tag>
  );
}
