# Yield Network — Liquidity Strategy, four visual styles

The Liquidity Strategy page rebuilt in **five visual languages**, each drawn from a
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
| `/column` | Column | [column.com](https://column.com) | Banking-grade restraint — ledger rows, hairline rules, the quietest motion of the five |
| `/breathe` | Breathe ESG | [breatheesg.com](https://www.breatheesg.com) | Light AI-SaaS — thin 300-weight headings, product-panel mocks, a desaturated pastel mosaic |

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
lib/styles.ts         The five variants (shared by the index and the switcher).
components/Reveal.tsx Scroll-entry primitive. One IntersectionObserver per element,
                      unobserved after firing, no-ops under prefers-reduced-motion.
components/StyleSwitcher.tsx  Persistent cross-variant nav.
components/Logo.tsx   Yield Network mark. Fills with currentColor so it inherits
                      each style's ink; `variant="mark"` drops the wordmark.
app/<style>/page.tsx  Section markup for one variant.
app/<style>/style.css That variant's design system, namespaced by a prefix
                      (.fh / .dc / .c8 / .cl / .br) so styles can never leak between routes.
app/fonts.css         @font-face declarations for the licensed reference typefaces.
```

### Section order (identical in all five)

1. Nav
2. Hero — headline, subhead, two CTAs
3. The Gap Nobody Talks About
4. What You Get — four engagement phases
5. Built For — three audience segments
6. Track record — partner grid + ±$1bn statement
7. Start With a Conversation
8. Footer

### Visual constraints (applied to all five)

- Light only. Cream / white / off-white grounds, black-and-white typography and
  surfaces. The 500 Global style uses the brand cream `#F5F5EB` throughout, with
  a cream → warm-yellow → sky gradient confined to its hero band.
- Accent colour is used sparingly — buttons, tags, small highlights — and never
  dominates. No dark themes, no gradients as major surfaces, no heavy colour blocks.
- Motion is subtle: short-distance fades on scroll entry, restrained hover states,
  and transitions confined to `opacity` and `transform` so they stay compositor-only.
  Every variant tunes its own distance, duration and easing to match its reference;
  all of it is disabled under `prefers-reduced-motion`.

### Shared asset — the sunburst

`public/sunburst.svg` (444 hairline rays) is the brand's recurring graphic and
appears in every style:

| Style | Placement | Treatment |
|---|---|---|
| 500 Global | Hero, anchored right | Full-strength `<img>`, drifts in on load |
| Delcap | Behind the hero stat panel | Masked, navy, 22% |
| Cantor8 | Inside the Gap figure | Masked, blue, 16% |
| Column | Closing block | Masked, slate, 14% |
| Breathe ESG | Closing block | Masked, ink, 10% |

Outside the 500 hero it's applied with the shared `.yn-burst` class, which
CSS-masks the file and paints it with `currentColor` — so each style tints it
with its own ink rather than shipping five recoloured copies.

### Typography

Each style uses its reference site's typeface. **Delcap** and **Breathe ESG** are
exact today (Open Sauce One + Inter, and Geist + Geist Mono, are all open-licensed
and self-hosted), as is Cantor8's Fragment Mono. The remaining commercial faces —
see **[FONTS.md](FONTS.md)** for the drop-in manifest and what's outstanding.

## Notes

- Static export — all six routes prerender, ~106 kB first-load JS.
- Partner names in the track-record grid are placeholders; the base page renders
  logo images there.
