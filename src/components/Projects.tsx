import { ArrowUpRight, Lock } from "lucide-react";
import { Github } from "./BrandIcons";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";
import { projects } from "@/lib/data";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        index="03"
        title="Projects"
        subtitle="A selection of things I've built — from AI-powered media tools to backend compilers. All open source on GitHub."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((p, i) => {
          const Wrapper = p.repo ? "a" : "div";
          return (
            <Reveal key={p.name} delay={i * 0.05}>
             <TiltCard className="h-full">
              <Wrapper
                {...(p.repo
                  ? { href: p.repo, target: "_blank", rel: "noreferrer" }
                  : {})}
                className="card p-6 h-full flex flex-col group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium group-hover:text-accent transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-accent-2 mt-1 italic">{p.tagline}</p>
                  </div>
                  {p.repo ? (
                    <ArrowUpRight
                      size={20}
                      className="text-muted group-hover:text-accent transition-colors shrink-0"
                    />
                  ) : (
                    <Lock size={18} className="text-muted shrink-0" />
                  )}
                </div>
                <p className="text-sm text-muted leading-relaxed mt-4 flex-1">
                  {p.description}
                </p>
                {p.note && (
                  <span className="chip mt-4 self-start text-accent-2">
                    {p.note}
                  </span>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
             </TiltCard>
            </Reveal>
          );
        })}
      </div>

      {rest.length > 0 && (
        <>
          <Reveal>
            <h3 className="text-lg font-semibold mt-14 mb-6 text-muted">
              More on GitHub
            </h3>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="card p-5 h-full flex flex-col group"
                >
                  <div className="flex items-center gap-2">
                    <Github size={16} className="text-muted" />
                    <h4 className="font-medium group-hover:text-accent transition-colors">
                      {p.name}
                    </h4>
                  </div>
                  <p className="text-sm text-muted mt-2 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.tech.slice(0, 3).map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
