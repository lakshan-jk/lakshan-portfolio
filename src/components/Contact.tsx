import { Mail, Phone } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading index="05" title="Get in touch" />
      <Reveal>
        <div className="card p-8 md:p-12 text-center">
          <h3 className="font-display text-3xl sm:text-4xl font-medium">
            Let&apos;s build something{" "}
            <span className="italic gradient-text">great.</span>
          </h3>
          <p className="text-muted mt-4 max-w-xl mx-auto">
            I&apos;m open to senior and lead engineering roles, freelance
            projects, and interesting collaborations. The fastest way to reach me
            is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium mt-8 transition-all"
          >
            <Mail size={18} /> {profile.email}
          </a>

          <div className="flex items-center justify-center gap-6 mt-8 text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={22} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors" aria-label="Phone">
              <Phone size={22} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
