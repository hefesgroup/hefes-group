import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { projectHref } from '@/lib/projects';
import { cn, heading } from '@/lib/styles';
import Reveal from './Reveal';
import Eyebrow from './ui/Eyebrow';
import TextLink from './ui/TextLink';

/** Product row on the Products page; `reverse` puts the image first on desktop. */
export default function ProductFeature({ product, reverse = false }: { product: Product; reverse?: boolean }) {
  const storyHref = projectHref(product.slug);
  return (
    <Reveal
      as="article"
      className={cn(
        'grid items-center gap-[60px] border-t border-line py-11 max-xl:gap-10 max-md:grid-cols-1 max-md:gap-[26px] max-md:py-8',
        reverse ? 'grid-cols-[1.2fr_1fr]' : 'grid-cols-[1fr_1.2fr]'
      )}
    >
      <div>
        <Eyebrow blue className="mb-4">
          {product.page.eyebrow}
        </Eyebrow>
        <h2 className={cn(heading, 'mt-[15px] mb-5 text-[58px] max-md:mb-[15px] max-md:text-[48px]')}>
          {product.name}
        </h2>
        <p className="mb-5 text-[28px] leading-[1.2] font-light tracking-[-.045em] max-md:text-[26px]">
          {product.page.subtitle}
        </p>
        <p className="mb-[25px] text-[17px] text-muted max-md:mb-[18px] max-md:text-[16px]">
          {product.description}
        </p>
        <Eyebrow blue className="mb-4">
          {product.page.badge}
        </Eyebrow>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-5 max-xl:justify-start max-xl:gap-[25px] max-md:mt-6">
          <TextLink href={storyHref} className="gap-4">
            Explore the story
          </TextLink>
          <TextLink href={product.action.href} external={product.action.external} className="gap-4">
            {product.action.label}
          </TextLink>
        </div>
      </div>
      <Link
        href={storyHref}
        className={cn(
          'group block overflow-hidden rounded-[6px] bg-clay max-md:order-first',
          reverse && 'order-first'
        )}
      >
        <Image
          src={product.image}
          alt={`${product.name} interface screens`}
          sizes="(width < 761px) 100vw, 700px"
          className="h-auto w-full transition-[scale] duration-800 ease-htg group-hover:scale-[1.04]"
        />
      </Link>
    </Reveal>
  );
}
