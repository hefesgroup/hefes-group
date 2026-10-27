'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/services';
import { cn, tag } from '@/lib/styles';
import TextLink from '../ui/TextLink';

/** Expandable service list on the home page. Each row opens independently. */
export default function ServiceAccordion() {
  const [open, setOpen] = useState<boolean[]>(() => SERVICES.map(() => false));

  const toggle = (index: number) =>
    setOpen((prev) => prev.map((value, i) => (i === index ? !value : value)));

  return (
    <div className="border-t border-clay-line">
      {SERVICES.map((service, index) => {
        const isOpen = open[index];
        const panelId = `service-panel-${index}`;
        return (
          <div key={service.id} className="border-b border-clay-line">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="group grid w-full grid-cols-[75px_1.1fr_1fr_45px] items-start gap-[22px] border-0 bg-transparent py-[35px] text-left max-xl:grid-cols-[40px_1.1fr_1fr_30px] max-xl:gap-[15px] max-md:grid-cols-[28px_1fr_30px] max-md:gap-3 max-md:py-[27px]"
            >
              <span className="pt-[10px] text-[12px] text-muted max-md:pt-[5px] max-xs:text-[11px]">
                {service.no}
              </span>
              <span className="text-[clamp(28px,3vw,43px)] leading-[1.13] font-light tracking-[-.05em] transition-colors duration-300 group-hover:text-blue group-aria-expanded:text-blue max-md:text-[33px] max-xs:text-[30px]">
                {service.title}
              </span>
              <span className="max-w-[360px] text-[15px] leading-[1.7] text-muted max-md:col-start-2 max-md:row-start-2 max-md:max-w-full">
                {service.summary}
              </span>
              <span
                aria-hidden="true"
                className="w-[38px] text-center text-[32px] leading-none font-extralight transition-[rotate] duration-400 group-aria-expanded:rotate-45 group-aria-expanded:text-blue max-md:col-start-3 max-md:row-start-1 max-md:w-auto max-md:text-[28px]"
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              inert={!isOpen}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-300 ease-htg',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="pr-[70px] pb-[30px] pl-[97px] max-xl:pl-[55px] max-md:pr-0 max-md:pb-[26px] max-md:pl-10">
                  <ul className="mb-[26px] flex flex-wrap gap-3">
                    {service.tags.map((item) => (
                      <li key={item} className={tag}>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <TextLink href={`/services#${service.id}`}>Explore this service</TextLink>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
