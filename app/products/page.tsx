import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import InnerHero from '@/components/InnerHero';
import ProductFeature from '@/components/ProductFeature';
import { PRODUCTS } from '@/lib/products';
import { cn, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Kiddly and Nomora: open-source products built by HTG around real needs, from preschool management to organization workspaces.',
};

export default function ProductsPage() {
  return (
    <>
      <InnerHero
        compact
        eyebrow="Our products"
        title={['Products built', 'around real needs.']}
        lead="Built by HTG, shaped by real work. Explore Kiddly and Nomora, the stories behind them, and how to get started."
      />
      <section className={cn(wrap, 'pb-20')}>
        {PRODUCTS.map((product, i) => (
          <ProductFeature key={product.slug} product={product} reverse={i % 2 === 1} />
        ))}
      </section>
      <Cta />
    </>
  );
}
