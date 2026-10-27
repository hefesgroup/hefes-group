/**
 * Shared Tailwind class strings.
 * Breakpoints are desktop-first: use max-* variants (see app/globals.css).
 * Never concatenate two constants that set the same property; pick one with cn(cond ? a : b).
 */

/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export const gutter = 'px-[clamp(22px,5.5vw,90px)] max-md:px-[25px] max-xs:px-[22px]';

/** Page-width container used by every section. */
export const wrap = `mx-auto w-full max-w-site ${gutter}`;

/** Vertical rhythm of a standard section. */
export const section = 'py-[clamp(70px,7.2vw,110px)] max-xs:py-[65px]';

export const eyebrow = 'text-[12px] font-medium uppercase leading-[1.6] tracking-[.11em]';

export const heading = 'font-light leading-[1.08] tracking-[-.055em]';
export const h1 = `${heading} text-[clamp(56px,7.4vw,112px)]`;
export const h2 = `${heading} text-[clamp(38px,4.8vw,72px)]`;
export const h3 = `${heading} text-[clamp(25px,2.4vw,36px)]`;
export const innerH1 = `${heading} text-[clamp(48px,6.4vw,92px)] max-md:text-[clamp(42px,7.7vw,60px)] max-2xs:text-[46px]`;
export const compactH1 = `${heading} text-[clamp(43px,5.4vw,76px)] max-md:text-[43px] max-xs:text-[39px]`;

/** Base pill button. Pair with exactly one of the variants below. */
export const button =
  'group inline-flex min-h-[49px] shrink-0 items-center justify-center gap-[30px] rounded-full border px-6 py-[14px] text-[14px] leading-[1.3] transition-[background-color,color,border-color,translate] duration-300 hover:-translate-y-[2px] disabled:cursor-wait disabled:opacity-65 disabled:hover:translate-y-0';
export const buttonBlue = 'border-transparent bg-blue text-white hover:bg-blue-deep';
export const buttonOutline = 'border-current bg-transparent hover:border-ink hover:bg-ink hover:text-white';
/** Outline button on the dark hero photo. */
export const buttonOutlineLight =
  'border-current bg-transparent hover:border-white hover:bg-white hover:text-ink';

export const textLink =
  'group inline-flex items-center gap-[30px] border-b border-current pb-2 text-[14px] transition-colors duration-[250ms] hover:text-blue';

/** Arrow nudge when the nearest `group` (link, button, card) is hovered. */
export const arrowHover =
  'transition-[translate] duration-[350ms] ease-htg group-hover:translate-x-[3px] group-hover:-translate-y-[3px]';

export const tag = 'rounded-[30px] border border-tag-line px-[13px] py-[6px] text-[12px]';

export const dot = 'mr-[9px] inline-block size-[7px] rounded-full bg-blue align-[1px]';

export const sectionTop =
  'mb-[60px] flex items-end justify-between gap-[35px] max-md:mb-[38px] max-md:block';

/** Body copy in muted grey at the design's standard reading size. */
export const lead = 'text-[18px] leading-[1.75] text-muted max-md:text-[17px]';

export const field =
  'mt-2 block w-full min-w-0 rounded-none border-0 border-b border-field-line bg-transparent py-3 text-[16px] text-ink placeholder:text-placeholder';

export const filterChip =
  'rounded-[50px] border border-line bg-transparent px-5 py-[10px] text-[13px] transition-[background-color,color,border-color] duration-300 hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white max-xs:px-4 max-xs:py-[9px] max-xs:text-[12px]';
