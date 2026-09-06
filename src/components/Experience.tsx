import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="02" title="Experience" />
      <div className="relative border-l border-border ml-2 md:ml-3">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <div className="relative pl-8 md:pl-12 pb-14 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-accent ring-4 ring-[var(--background)]" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl font-medium">
                  {job.role}{" "}
                  <span className="text-muted text-lg font-normal">
                    · {job.company}
                  </span>
                </h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-muted">
                <span className="text-accent-2">{job.domain}</span>
                <span>·</span>
                <span>{job.location}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.highlights.map((h, j) => (
                  <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                    <span className="text-accent shrink-0">▹</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
