"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background: `
          radial-gradient(200px circle at ${pos.x}px ${pos.y}px, rgba(242,230,200,0.14), transparent 65%),
          radial-gradient(560px circle at ${pos.x}px ${pos.y}px, rgba(220,191,140,0.13), transparent 72%)
        `,
        transition: "background 0.08s linear",
      }}
    />
  );
}
