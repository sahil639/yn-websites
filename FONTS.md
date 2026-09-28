# Font drop-in manifest

The live page uses commercially licensed faces that cannot be redistributed in
this repo — you're supplying those.

Drop the `.woff2` files into `public/fonts/` using **exactly** the filenames
below. `app/fonts.css` already declares every `@font-face`, and each style's
`--font` variable already lists the licensed family *first*, so the moment a
file lands it wins the cascade. No code change is needed.

---

## The live page → `/`
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

## Summary — what's still needed

Four `.woff2` files, all for the live page:

| Family | File |
|---|---|
| Tobias Light | `public/fonts/Tobias-Light.woff2` |
| Apercu Pro Regular | `public/fonts/apercu-regular-pro.woff2` |
| Apercu Pro Medium | `public/fonts/apercu-medium-pro.woff2` |
| Apercu Mono Pro Regular | `public/fonts/apercu-mono-regular-pro.woff2` |

`app/fonts.css` already declares every `@font-face` and each family sits first in
its stack, so the moment a file lands it wins the cascade — no code change.

Prefer `woff2`; if you only have `otf`/`ttf`, convert first (e.g. `fonttools`) or
add the extra `src` entries in `app/fonts.css`.

Declarations for the archived explorations (PP Neue Montreal, Suisse Int'l) remain
in `app/fonts.css` and are inert while those styles sit in `archive/`.
