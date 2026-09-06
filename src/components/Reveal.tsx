import type { ReactNode } from "react";

// CSS-driven reveal. Content is visible by default (opacity: 1); the animation
// only enhances it. If JS or animations are blocked, the content still shows.
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <div className={`reveal ${className}`} style={{ animationDelay: `${delay}s` }}>
      {children}
    </div>
  );
}
