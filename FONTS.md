# Font drop-in manifest

Each style uses the typeface of its reference site. Three of the five references
use **commercially licensed** faces that cannot be redistributed in this repo —
you're supplying those. Delcap and Breathe ESG need nothing.

Drop the `.woff2` files into `public/fonts/` using **exactly** the filenames
below. `app/fonts.css` already declares every `@font-face`, and each style's
`--font` variable already lists the licensed family *first*, so the moment a
file lands it wins the cascade. No code change is needed.

---

## Style 01 · 500 Global → `/five-hundred`
Reference: <https://500.co> · Licence: Colophon Foundry (Tobias), Monotype (Apercu)

| Role | Family | Expected file |
|---|---|---|
| Display (headings) | Tobias Light | `public/fonts/Tobias-Light.woff2` |
| Body / UI | Apercu Pro Regular | `public/fonts/apercu-regular-pro.woff2` |
| Body / UI | Apercu Pro Medium | `public/fonts/apercu-medium-pro.woff2` |
| Labels, eyebrows, buttons | Apercu Mono Pro Regular | `public/fonts/apercu-mono-regular-pro.woff2` |

**Tobias is now the only serif declared for this style** — no substitute is
listed. Until `Tobias-Light.woff2` lands, headings fall through to the platform
serif (Times), which is *not* the intended look. This style is the one most
blocked on its font files. (Inter still stands in for Apercu; system mono for
Apercu Mono.)

---

## Style 02 · Delcap → `/delcap`
Reference: <https://www.delcap.com> · Licence: **none needed — already exact**

| Role | Family | Status |
|---|---|---|
| Display (headings) | Open Sauce One | ✅ self-hosted via `@fontsource/open-sauce-one` |
| Body / UI | Inter | ✅ self-hosted via `@fontsource-variable/inter` |

Nothing to supply. This style is typographically identical to the reference.

---

## Style 03 · Cantor8 → `/cantor8`
Reference: <https://www.cantor8.io> · Licence: Pangram Pangram (PP Neue Montreal)

| Role | Family | Expected file |
|---|---|---|
| Display / UI | PP Neue Montreal Book (400) | `public/fonts/PPNeueMontreal-Book.woff2` |
| Display / UI | PP Neue Montreal Medium (500) | `public/fonts/PPNeueMontreal-Medium.woff2` |
| Labels, eyebrows, buttons | Fragment Mono | ✅ self-hosted via `@fontsource/fragment-mono` — **already exact** |

Only the two Neue Montreal files are outstanding.

---

## Style 04 · Column → `/column`
Reference: <https://column.com> · Licence: Swiss Typefaces (Suisse Int'l)

| Role | Family | Expected file |
|---|---|---|
| Body / UI | Suisse Int'l Book (400) | `public/fonts/SuisseIntl-Book.woff2` |
| Body / UI | Suisse Int'l Medium (500) | `public/fonts/SuisseIntl-Medium.woff2` |
| Headings | Suisse Int'l SemiBold (600) | `public/fonts/SuisseIntl-SemiBold.woff2` |
| Numerics, labels | Suisse Int'l Mono Regular | `public/fonts/SuisseIntlMono-Regular.woff2` |

*Interim:* Inter stands in for Suisse Int'l; system mono for Suisse Int'l Mono.

---

## Style 05 · Breathe ESG → `/breathe`
Reference: <https://www.breatheesg.com> · Licence: **none needed — already exact**

| Role | Family | Status |
|---|---|---|
| Display + UI | Geist (300 / 400 / 500) | ✅ self-hosted via `@fontsource/geist-sans` |
| Micro-labels | Geist Mono (300 / 400) | ✅ self-hosted via `@fontsource/geist-mono` |

Nothing to supply. The reference serves both from Google Fonts; they're
open-licensed, so this style is typographically identical to it.

---

## Summary — what's still needed

- **500 Global** — 4 files (Tobias Light, Apercu Pro ×2, Apercu Mono Pro)
- **Cantor8** — 2 files (PP Neue Montreal Book + Medium)
- **Column** — 4 files (Suisse Int'l ×3, Suisse Int'l Mono)
- **Delcap** — nothing, already exact
- **Breathe ESG** — nothing, already exact

Total: **10 `.woff2` files**. Prefer `woff2`; if you only have `otf`/`ttf`,
convert first (e.g. `fonttools`) or add the extra `src` entries in
`app/fonts.css`.
