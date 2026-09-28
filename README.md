# Yield Network — Liquidity Strategy

The Liquidity Strategy page, built in the 500 Global–inspired visual language.
Served at the site root.

Live: <https://yn-websites-phi.vercel.app/>

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
app/page.tsx          The page. Section markup only.
app/style.css         The design system, namespaced under .fh so nothing leaks.
app/globals.css       Reset, shared scroll-reveal primitive, .yn-burst asset class.
app/fonts.css         @font-face for the licensed reference typefaces.
app/layout.tsx        Root layout and metadata.

lib/content.ts        Single source of truth — every heading, paragraph and CTA.
components/Logo.tsx   Yield Network mark. Fills with currentColor; `variant="mark"`
                      drops the wordmark.
components/Reveal.tsx Scroll-entry primitive. One IntersectionObserver per element,
                      unobserved after firing, no-ops under prefers-reduced-motion.
public/sunburst.svg   The brand sunburst (444 hairline rays).
```

### Section order

1. Nav
2. Hero — gradient band, sunburst, headline, subhead, two CTAs
3. The Gap Nobody Talks About
4. What You Get — four engagement phases
5. Built For — three audience segments
6. Track record — partner grid + ±$1bn statement
7. Start With a Conversation
8. Footer

### Design

- Cream `#F5F5EB` ground throughout, black typography, hairline `#DCDCC9` rules.
- A cream → warm-yellow → sky gradient confined to the hero band; the rest of the
  page sits on flat cream.
- The sunburst anchors the hero right and drifts in once on load. Elsewhere it can
  be reused via `.yn-burst`, which CSS-masks the file and paints it with
  `currentColor`.
- Motion stays on `opacity` and `transform` only, so it remains compositor-only,
  and is disabled under `prefers-reduced-motion`.

### Typography

Tobias for display, Apercu Pro for body, Apercu Mono Pro for labels, eyebrows and
buttons — all three commercially licensed. **No substitute serif is declared**, so
headings fall through to the platform serif until the real files land. See
**[FONTS.md](FONTS.md)** for the drop-in manifest.

## Archive

`archive/` holds the four unchosen style explorations (Delcap, Cantor8, Column,
Breathe ESG), the old style-index page and the cross-variant switcher. They are
kept for reference, excluded from the build and from typechecking, and are not
routed. Full history is in git.

## Notes

- Static export — the page prerenders, ~103 kB first-load JS.
- Partner names in the track-record grid are placeholders; logo images pending.
