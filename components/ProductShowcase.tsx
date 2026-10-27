import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/products';
import { projectHref } from '@/lib/projects';
import { cn, heading } from '@/lib/styles';
import ButtonLink from './ui/ButtonLink';
import Eyebrow from './ui/Eyebrow';
import TextLink from './ui/TextLink';

/** White product card used in the home page "Our products" section. */
export default function ProductShowcase({ product }: { product: Product }) {
  const storyHref = projectHref(product.slug);
  return (
    <article className="min-w-0 overflow-hidden rounded-lg bg-white">
      <Link
        href={storyHref}
        aria-label={`Explore ${product.name}’s story`}
        className="group relative block aspect-[1.55] overflow-hidden bg-[#e8e8ed] max-md:aspect-[1.45] max-xs:aspect-[1.35]"
      >
        <Image
          src={product.image}
          alt={`${product.name} product interfaces`}
          fill
          sizes="(width < 761px) 100vw, (width < 1440px) 50vw, 640px"
          className="object-cover transition-[scale] duration-[550ms] ease-htg group-hover:scale-[1.035]"
        />
      </Link>
      <div className="p-8 max-xl:p-[26px] max-md:p-[27px] max-xs:p-[23px]">
        <Eyebrow blue>{product.home.eyebrow}</Eyebrow>
        <h3 className={cn(heading, 'mt-[15px] text-[48px] max-md:text-[44px] max-xs:text-[42px]')}>
          {product.name}
        </h3>
        <p className="mt-4 max-w-[360px] text-[24px] leading-[1.3] font-light tracking-[-.03em] max-xs:text-[23px]">
          {product.home.benefit}
        </p>
        <p className="mt-[18px] text-[15px] leading-[1.7] text-muted">{product.description}</p>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-5 max-xl:justify-start max-xl:gap-[25px] max-md:justify-between max-md:gap-5 max-xs:flex-col max-xs:items-start max-xs:gap-[23px]">
          <TextLink href={storyHref} className="gap-4">
            Explore the story
          </TextLink>
          <ButtonLink
            href={product.action.href}
            external={product.action.external}
            variant="outline"
            className="gap-[18px] px-5 py-3 text-[13px]"
          >
            {product.action.label}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
