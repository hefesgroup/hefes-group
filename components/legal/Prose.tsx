import type { ProseBlock } from '@/lib/legal';
import { cn, heading, wrap } from '@/lib/styles';

/** Long-form text for the Privacy and Image credits pages. */
export default function Prose({ blocks }: { blocks: ProseBlock[] }) {
  return (
    <section className={cn(wrap, 'pb-[100px]')}>
      <div className="mx-auto max-w-[850px]">
        {blocks.map((block, i) => (
          <div key={block.heading ?? i}>
            {block.heading && (
              <h2 className={cn(heading, 'mt-[45px] mb-5 text-[32px]')}>{block.heading}</h2>
            )}
            {block.paragraphs.map((item) => (
              <p key={typeof item === 'string' ? item : item.href} className="mb-5 text-muted">
                {typeof item === 'string' ? (
                  item
                ) : (
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="border-b border-current hover:text-blue"
                  >
                    {item.text}
                  </a>
                )}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
