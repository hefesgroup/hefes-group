import Link from 'next/link';
import { cn, textLink } from '@/lib/styles';
import Arrow from './Arrow';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
};

export default function TextLink({ href, children, external = false, className }: TextLinkProps) {
  const content = (
    <>
      {children}
      <Arrow />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cn(textLink, className)}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(textLink, className)}>
      {content}
    </Link>
  );
}
