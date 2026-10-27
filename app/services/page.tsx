import type { Metadata } from 'next';
import Cta from '@/components/Cta';
import InnerHero from '@/components/InnerHero';
import ProcessSteps from '@/components/ProcessSteps';
import SectionTop from '@/components/SectionTop';
import ServiceCapability from '@/components/services/ServiceCapability';
import { SERVICES } from '@/lib/services';
import { cn, section, wrap } from '@/lib/styles';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Product development, business platforms, and AI & automation. HTG handles design, development, integrations, and release.',
};

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Our services"
        title={['Software development.', 'From idea to everyday use.']}
        lead="From a first product launch to a better way of running your business, HTG handles design, development, integrations, and release. We connect the full process around what you need the software to do."
      />

      <nav
        aria-label="Explore our services"
        className={cn(wrap, 'grid grid-cols-3 gap-[26px] max-md:grid-cols-1 max-md:gap-0')}
      >
        {SERVICES.map((service) => (
          <a
            key={service.id}
            href={`#${service.id}`}
            className="group flex items-center gap-4 border-t border-line py-5 text-[12px] text-blue max-md:py-[17px]"
          >
            {service.no}
            <span className="flex-1 text-[16px] text-ink group-hover:text-blue">{service.title}</span>
            <span aria-hidden="true">↘</span>
          </a>
        ))}
      </nav>

      <section className={cn(wrap, section, 'pt-10 max-md:pt-[30px] max-xs:pt-[30px]')}>
        {SERVICES.map((service) => (
          <ServiceCapability key={service.id} service={service} />
        ))}
      </section>

      <section className={cn(section, 'bg-clay')}>
        <div className={wrap}>
          <SectionTop eyebrow="How we work" title={['Understand the problem.', 'Build the next step.']} />
          <ProcessSteps />
        </div>
      </section>

      <Cta />
    </>
  );
}
