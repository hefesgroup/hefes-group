import { PROCESS } from '@/lib/services';
import { cn, heading } from '@/lib/styles';
import Reveal from './Reveal';
import Eyebrow from './ui/Eyebrow';

/** "How we work" three-step grid on the Services page. */
export default function ProcessSteps() {
  return (
    <div className="grid grid-cols-3 gap-[45px] max-md:grid-cols-1">
      {PROCESS.map((step, i) => (
        <Reveal as="article" key={step.eyebrow} delay={i * 80}>
          <Eyebrow blue className="mb-[35px] max-md:mb-[19px]">
            {step.eyebrow}
          </Eyebrow>
          <h3 className={cn(heading, 'mb-5 text-[34px] max-md:mb-[15px] max-md:text-[32px]')}>
            {step.title}
          </h3>
          <p className="text-[15px] text-muted">{step.copy}</p>
        </Reveal>
      ))}
    </div>
  );
}
