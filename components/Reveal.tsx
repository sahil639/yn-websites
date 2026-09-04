"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger delay in ms. */
  delay?: number;
  /** Extra class applied to the wrapper so each style can tune its own motion. */
  className?: string;
  as?: "div" | "section" | "li" | "span";
  style?: CSSProperties;
};

/**
 * Scroll-entry reveal. One shared IntersectionObserver per element, unobserved
 * after firing, and fully disabled under prefers-reduced-motion. The actual
 * transition (distance, easing, duration) is owned by each style's CSS via
 * `.reveal` / `.reveal.is-visible`, so motion character stays per-variant.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div", style }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as any;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
