import Link from 'next/link';
import { button, buttonBlue, buttonOutline, buttonOutlineLight, cn } from '@/lib/styles';
import Arrow from './Arrow';

const VARIANTS = {
  blue: buttonBlue,
  outline: buttonOutline,
  'outline-light': buttonOutlineLight,
} as const;

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof VARIANTS;
  external?: boolean;
  className?: string;
  arrowClassName?: string;
};

export default function ButtonLink({
  href,
  children,
  variant = 'blue',
  external = false,
  className,
  arrowClassName,
}: ButtonLinkProps) {
  const classes = cn(button, VARIANTS[variant], className);
  const content = (
    <>
      {children}
      <Arrow className={arrowClassName} />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
