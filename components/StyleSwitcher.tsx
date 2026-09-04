"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { STYLES } from "@/lib/styles";

/**
 * Persistent cross-variant switcher. Deliberately style-neutral (its own
 * dark chrome) so it never reads as part of any one variant's design.
 */
export default function StyleSwitcher() {
  const pathname = usePathname();

  return (
    <div className="yn-switcher">
      <Link href="/" className="yn-switcher__home" aria-label="All styles">
        Styles
      </Link>
      <nav className="yn-switcher__list" aria-label="Visual style variants">
        {STYLES.map((s) => {
          const href = `/${s.slug}`;
          const active = pathname === href;
          return (
            <Link
              key={s.slug}
              href={href}
              className={`yn-switcher__item ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              <span className="yn-switcher__index">{s.index}</span>
              <span>{s.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
