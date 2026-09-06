import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © 2026 {profile.name}. Built with Next.js & Tailwind.
        </p>
        <a href="#top" className="hover:text-foreground transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
