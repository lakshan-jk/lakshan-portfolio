"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b bg-[rgba(11,11,13,0.85)] backdrop-blur-xl transition-shadow duration-300 ${
        scrolled
          ? "border-[var(--border-strong)] shadow-[0_10px_40px_-14px_rgba(0,0,0,0.9)]"
          : "border-border"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
          <span className="gradient-text">Lakshan</span>
          <span className="text-foreground/60"> JK</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="nav-link hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          className="hidden md:inline-flex items-center rounded-full border border-accent/50 px-4 py-1.5 text-sm text-foreground hover:bg-accent/10 transition-colors"
        >
          Resume
        </a>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-[rgba(11,11,13,0.98)] backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-4 text-muted">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-foreground transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                className="inline-flex items-center rounded-full border border-accent/50 px-4 py-1.5 text-sm text-foreground"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
