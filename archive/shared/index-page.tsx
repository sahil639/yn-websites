import Link from "next/link";
import { STYLES } from "@/lib/styles";
import "./page.css";

const META: Record<string, { ref: string; fonts: string; note: string }> = {
  "five-hundred": {
    ref: "500.co",
    fonts: "Tobias Light · Apercu Pro · Apercu Mono Pro",
    note: "Editorial VC. Serif headlines, wide-tracked mono eyebrows, hairline grids and a lot of air.",
  },
  delcap: {
    ref: "delcap.com",
    fonts: "Open Sauce One · Inter",
    note: "Calm and institutional. Soft 12px cards, pill badges, pale-blue tint over off-white.",
  },
  cantor8: {
    ref: "cantor8.io",
    fonts: "PP Neue Montreal · Fragment Mono",
    note: "Modern product/infra. Tight 4px radii, technical rule-lines, blue used sparingly.",
  },
  breathe: {
    ref: "breatheesg.com",
    fonts: "Geist \u00b7 Geist Mono",
    note: "Light AI-SaaS. Thin 300-weight headings, product-panel mocks, a desaturated pastel mosaic.",
  },
  column: {
    ref: "column.com",
    fonts: "Suisse Int'l · Suisse Int'l Mono",
    note: "Banking-grade restraint. Ledger rows, hairline rules, the quietest motion of the four.",
  },
};

export default function Index() {
  return (
    <div className="idx">
      <div className="idx__wrap">
        <p className="idx__label">Yield Network · Liquidity Strategy</p>
        <h1 className="idx__h1">One page, four visual languages.</h1>
        <p className="idx__sub">
          The same Liquidity Strategy content, layout order and information architecture, rendered
          in four styles drawn from four reference sites. All light-mode, black-and-white led, with
          accent colour used sparingly.
        </p>

        <div className="idx__grid">
          {STYLES.map((s) => {
            const m = META[s.slug];
            return (
              <Link className="idx__card" href={`/${s.slug}`} key={s.slug}>
                <div className="idx__cardTop">
                  <span className="idx__cardTitle">{s.label}</span>
                  <span className="idx__label">{s.index}</span>
                </div>
                <p className="idx__cardMeta">{m.note}</p>
                <p className="idx__fonts">{m.fonts}</p>
                <p className="idx__fonts">ref · {m.ref}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
