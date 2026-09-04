# Yield Network — Liquidity Strategy, four visual styles

The Liquidity Strategy page rebuilt in **four visual languages**, each drawn from a
different reference site. Layout, section order, information architecture and copy
are identical across all four — only the visual system changes.

Base page (source of truth for content and structure):
<https://yield-network-frontend.vercel.app/liquidity-strategy>

## Routes

| Route | Style | Reference | Character |
|---|---|---|---|
| `/` | Index | — | Switcher / overview of all four |
| `/five-hundred` | 500 Global | [500.co](https://500.co) | Editorial VC — serif headlines, wide-tracked mono eyebrows, hairline grids, lots of air |
| `/delcap` | Delcap | [delcap.com](https://www.delcap.com) | Calm and institutional — soft 12px cards, pill badges, pale-blue tint on off-white |
| `/cantor8` | Cantor8 | [cantor8.io](https://www.cantor8.io) | Modern product/infra — tight 4px radii, technical rule-lines, blue used sparingly |
| `/column` | Column | [column.com](https://column.com) | Banking-grade restraint — ledger rows, hairline rules, the quietest motion of the four |

A persistent switcher is pinned to the bottom of every page for moving between variants.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3111
```

```bash
npm run build
```

## How it's put together

```
lib/content.ts        Single source of truth — every heading, paragraph and CTA.
                      All four pages import from here; none of them fork the copy.
lib/styles.ts         The four variants (shared by the index and the switcher).
components/Reveal.tsx Scroll-entry primitive. One IntersectionObserver per element,
                      unobserved after firing, no-ops under prefers-reduced-motion.
components/StyleSwitcher.tsx  Persistent cross-variant nav.
app/<style>/page.tsx  Section markup for one variant.
app/<style>/style.css That variant's design system, namespaced by a prefix
                      (.fh / .dc / .c8 / .cl) so styles can never leak between routes.
app/fonts.css         @font-face declarations for the licensed reference typefaces.
```

### Section order (identical in all four)

1. Nav
2. Hero — headline, subhead, two CTAs
3. The Gap Nobody Talks About
4. What You Get — four engagement phases
5. Built For — three audience segments
6. Track record — partner grid + ±$1bn statement
7. Start With a Conversation
8. Footer

### Visual constraints (applied to all four)

- Light only. White / off-white grounds, black-and-white typography and surfaces.
- Accent colour is used sparingly — buttons, tags, small highlights — and never
  dominates. No dark themes, no gradients as major surfaces, no heavy colour blocks.
- Motion is subtle: short-distance fades on scroll entry, restrained hover states,
  and transitions confined to `opacity` and `transform` so they stay compositor-only.
  Every variant tunes its own distance, duration and easing to match its reference;
  all of it is disabled under `prefers-reduced-motion`.

### Typography

Each style uses its reference site's typeface. Delcap is exact today (Open Sauce One
+ Inter are open-licensed and self-hosted). The other three reference commercial
faces — see **[FONTS.md](FONTS.md)** for the drop-in manifest and what's outstanding.

## Notes

- Static export — all five routes prerender, ~106 kB first-load JS.
- Partner names in the track-record grid are placeholders; the base page renders
  logo images there.
