import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { SkillIcon } from "./SkillIcon";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="04" title="Skills & Tools" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {skills.map((group, i) => {
          const isAI = group.category === "AI & LLM";
          return (
            <Reveal
              key={group.category}
              delay={i * 0.04}
              className={isAI ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <div
                className={`card p-5 h-full ${
                  isAI
                    ? "border-[var(--border-strong)] bg-[rgba(220,191,140,0.04)]"
                    : ""
                }`}
              >
                <h3 className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
                  {isAI && <span aria-hidden>✦</span>}
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip inline-flex items-center gap-1.5">
                      <SkillIcon name={item} className="text-accent shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
