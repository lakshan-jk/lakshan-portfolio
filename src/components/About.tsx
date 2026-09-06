import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="01" title="About" />
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal className="md:col-span-3">
          <p className="text-lg text-muted leading-relaxed">{profile.summary}</p>
          <p className="text-lg text-muted leading-relaxed mt-4">
            These days I&apos;m especially interested in the intersection of{" "}
            <span className="text-foreground">distributed systems</span> and{" "}
            <span className="text-foreground">AI tooling</span> — building
            developer products and media pipelines that stay fast and reliable
            under real load.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <div className="card p-6 space-y-4">
            <h3 className="font-semibold">What I bring</h3>
            <ul className="space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <span className="text-accent">▹</span> Leading teams and shipping
                zero-downtime releases at scale
              </li>
              <li className="flex gap-3">
                <span className="text-accent">▹</span> System design across
                microservices, streaming, and real-time
              </li>
              <li className="flex gap-3">
                <span className="text-accent">▹</span> End-to-end ownership —
                backend, frontend, mobile, and infra
              </li>
              <li className="flex gap-3">
                <span className="text-accent">▹</span> Deep database and
                performance optimization
              </li>
              <li className="flex gap-3">
                <span className="text-accent">▹</span> AI-native products — RAG,
                agents, and LLM pipelines (Claude, LangChain)
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
