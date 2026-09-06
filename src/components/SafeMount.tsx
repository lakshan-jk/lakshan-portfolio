"use client";

import { Component, useEffect, useState, type ReactNode } from "react";

class ErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err: unknown) {
    // Swallow — a failed 3D scene must never take down the page.
    console.warn("HeroScene failed, showing fallback:", err);
  }
  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

// Renders children only after mount (client-only), wrapped in an error
// boundary. If anything throws (e.g. no WebGL), the fallback is shown instead.
export function SafeMount({
  children,
  fallback = null,
}: {
  children: ReactNode;
  fallback?: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{fallback}</>;
  return <ErrorBoundary fallback={fallback}>{children}</ErrorBoundary>;
}
