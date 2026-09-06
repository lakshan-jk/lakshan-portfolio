import { skills } from "@/lib/data";

// Flatten every skill into one list for the scrolling ticker.
const all = skills.flatMap((g) => g.items);
// Highlight AI/LLM items in gold.
const aiItems = new Set(skills.find((g) => g.category === "AI & LLM")?.items ?? []);

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-wrap py-1">
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
        style={{ ["--marquee-duration" as string]: `${items.length * 3.2}s` }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className={`mx-2 text-sm ${
              aiItems.has(t) ? "text-accent" : "text-muted"
            }`}
          >
            {t}
            <span className="mx-4 text-[var(--border-strong)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function SkillsMarquee() {
  const mid = Math.ceil(all.length / 2);
  return (
    <div className="border-y border-border py-5 bg-[rgba(255,255,255,0.015)]">
      <Row items={all.slice(0, mid)} />
      <Row items={all.slice(mid)} reverse />
    </div>
  );
}
