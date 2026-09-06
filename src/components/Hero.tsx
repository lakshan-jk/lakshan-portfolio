import { Mail, MapPin } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { HeroVisual } from "./HeroVisual";
import { CountUp } from "./CountUp";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 lg:pt-36 lg:pb-24"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: copy */}
        <div className="reveal space-y-6">
          <span className="inline-flex items-center gap-2 chip text-accent-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Available for senior / lead roles
          </span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight">
            Hi, I&apos;m <span className="shimmer">Lakshan</span>.
            <br />
            I build systems{" "}
            <span className="italic shimmer">that scale.</span>
          </h1>

          <div className="hairline max-w-[6rem]" />

          <p className="max-w-xl text-lg text-muted leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm font-medium hover:border-[var(--border-strong)] hover:text-accent-2 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2 text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent-2 transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent-2 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-accent-2 transition-colors">
              <Mail size={20} />
            </a>
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin size={15} /> {profile.location}
            </span>
          </div>
        </div>

        {/* Right: CSS 3D gem — renders on every browser, no WebGL needed */}
        <HeroVisual />
      </div>

      {/* Stats — normal flow, no overlap */}
      <div className="reveal mt-16 lg:mt-20" style={{ animationDelay: "0.15s" }}>
        <div className="hairline mb-8" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl font-medium gradient-text">
                <CountUp to={s.num} suffix={s.suffix} />
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
