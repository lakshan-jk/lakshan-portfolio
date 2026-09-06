import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
            {index}
          </span>
          <span className="hairline flex-1 max-w-[7rem]" />
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight mt-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted mt-4 max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
