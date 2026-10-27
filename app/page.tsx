import Cta from '@/components/Cta';
import Hero from '@/components/home/Hero';
import ServiceAccordion from '@/components/home/ServiceAccordion';
import ProductShowcase from '@/components/ProductShowcase';
import Reveal from '@/components/Reveal';
import SectionTop from '@/components/SectionTop';
import Eyebrow from '@/components/ui/Eyebrow';
import Lines from '@/components/ui/Lines';
import TextLink from '@/components/ui/TextLink';
import ProjectCard from '@/components/work/ProjectCard';
import { HOME } from '@/lib/home';
import { PRODUCTS } from '@/lib/products';
import { HOME_FEATURED_PROJECTS } from '@/lib/projects';
import { cn, eyebrow, heading, section, wrap } from '@/lib/styles';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section aria-label="Selected project experience" className="border-b border-line">
        <div className={cn(wrap, 'flex items-center gap-10 py-[38px] max-md:block max-md:py-[30px]')}>
          <p className={cn(eyebrow, 'max-w-[140px] shrink-0 text-muted max-md:mb-[22px] max-md:max-w-none')}>
            <Lines lines={HOME.strip.label} />
          </p>
          <div className="flex w-full items-center justify-between gap-[25px] text-[22px] font-medium tracking-[-.045em] text-[#5e5f65] max-md:flex-wrap max-md:justify-start max-md:gap-x-[27px] max-md:gap-y-3 max-xs:gap-x-[25px] max-xs:text-[20px]">
            {HOME.strip.names.map((name, i) => (
              <span key={name} className={cn(i === HOME.strip.names.length - 1 && 'text-[17px]')}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="company" className={section}>
        <Reveal className={cn(wrap, 'grid grid-cols-2 items-center gap-[85px] max-xl:gap-[45px] max-md:grid-cols-1 max-md:gap-7')}>
          <div>
            <Eyebrow blue className="mb-[22px]">
              {HOME.company.eyebrow}
            </Eyebrow>
            <h2 className={cn(heading, 'text-[clamp(39px,4vw,60px)] max-md:text-[42px]')}>
              <Lines lines={HOME.company.title} />
            </h2>
          </div>
          <div>
            <p className="mb-7 text-[18px] leading-[1.75] text-muted max-md:mb-[22px] max-md:text-[17px]">
              {HOME.company.copy}
            </p>
            <TextLink href="/about">Get to know HTG</TextLink>
          </div>
        </Reveal>
      </section>

      <section id="products" className={cn(section, 'bg-clay')}>
        <div className={wrap}>
          <SectionTop
            eyebrow={HOME.products.eyebrow}
            title={HOME.products.title}
            link={{ href: '/products', label: 'Explore our products' }}
          />
          <div className="grid grid-cols-2 gap-[30px] max-md:grid-cols-1">
            {PRODUCTS.map((product, i) => (
              <Reveal key={product.slug} delay={i * 100} className="min-w-0">
                <ProductShowcase product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className={section}>
        <div className={wrap}>
          <SectionTop
            eyebrow={HOME.work.eyebrow}
            title={HOME.work.title}
            link={{ href: '/work', label: 'Explore all projects' }}
          />
          <div className="grid grid-cols-2 gap-x-[30px] gap-y-[55px] max-md:gap-x-5 max-md:gap-y-[35px] max-xs:grid-cols-1 max-xs:gap-y-10">
            {HOME_FEATURED_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 2) * 100} className="min-w-0">
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(section, 'bg-clay')}>
        <div className={wrap}>
          <SectionTop
            eyebrow={HOME.services.eyebrow}
            title={HOME.services.title}
            link={{ href: '/services', label: 'All services' }}
          />
          <Reveal>
            <ServiceAccordion />
          </Reveal>
        </div>
      </section>

      <Cta />
    </>
  );
}
