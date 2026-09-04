import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { nav, hero, gap, whatYouGet, builtFor, proof, closing, footer } from "@/lib/content";
import "./style.css";

export const metadata = { title: "Liquidity Strategy — Cantor8 style" };

const Arrow = () => (
  <svg className="c8__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M1 6h9M6.5 2 10.5 6l-4 4" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

const STRIP = [
  { k: "Sourced", v: "±$1bn" },
  { k: "Window", v: "24 months" },
  { k: "Design → Live", v: "6 weeks" },
  { k: "Coverage", v: "DEX · Lending · RWA" },
];

export default function Cantor8Page() {
  return (
    <div className="c8">
      {/* ---------------- nav ---------------- */}
      <header className="c8__nav">
        <div className="c8__wrap c8__navInner">
          <a className="c8__brand" href="#top" aria-label={nav.brand}>
            <Logo height={19} />
          </a>
          <nav className="c8__navLinks">
            {nav.links.map((l) => (
              <a key={l.label} className="c8__navLink" href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="c8__navCtas">
            <a className="c8__btn c8__btn--sm" href={nav.secondaryCta.href}>{nav.secondaryCta.label}</a>
            <a className="c8__btn c8__btn--sm c8__btn--primary" href={nav.primaryCta.href}>{nav.primaryCta.label}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="c8__hero">
          <div className="c8__wrap">
            <div className="c8__heroInner">
              <Reveal>
                <span className="c8__label">Liquidity Strategy</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="c8__h1">
                  {hero.headingLead}
                  <br />
                  {hero.headingRest}
                  <span>{hero.headingAccent}</span>
                </h1>
              </Reveal>
              <div className="c8__heroFoot">
                <Reveal delay={160}>
                  <p className="c8__lede">{hero.subhead}</p>
                </Reveal>
                <Reveal delay={230}>
                  <div className="c8__ctaRow">
                    {hero.ctas.map((c) => (
                      <a key={c.label} className={`c8__btn ${c.primary ? "c8__btn--primary" : ""}`} href={c.href}>
                        {c.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <div className="c8__strip">
            {STRIP.map((s, i) => (
              <Reveal key={s.k} delay={i * 60} className="c8__stripCell">
                <span className="c8__stripK">{s.k}</span>
                <span className="c8__stripV">{s.v}</span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------------- the gap ---------------- */}
        <section className="c8__section">
          <div className="c8__wrap">
            <div className="c8__split">
              <Reveal>
                <div>
                  <span className="c8__label">The Problem</span>
                  <h2 className="c8__h2" style={{ marginTop: 16 }}>{gap.heading}</h2>
                  <div className="c8__body">
                    {gap.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div className="c8__figure">
                  <div className="c8__figureGrid" />
                  <div className="c8__figureBurst yn-burst" aria-hidden="true" />
                  <span className="c8__figureTag">Treasury → TVL</span>
                  <svg className="c8__figurePath" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M40 250 C 140 250, 150 120, 200 120 S 280 60, 360 50" stroke="#044ab3" strokeWidth="1.5" fill="none" />
                    <path d="M40 250 C 140 250, 170 220, 240 210 S 320 190, 360 186" stroke="#c9cbcf" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
                    <circle cx="360" cy="50" r="3.5" fill="#044ab3" />
                  </svg>
                  <div className="c8__figureLine" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- what you get ---------------- */}
        <section className="c8__section c8__section--off" id="solutions">
          <div className="c8__wrap">
            <Reveal>
              <div className="c8__sectionHead">
                <span className="c8__label">The Engagement</span>
                <h2 className="c8__h2">{whatYouGet.headingLines.join(" ")}</h2>
              </div>
            </Reveal>
            <div className="c8__rows">
              {whatYouGet.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="c8__row">
                    <span className="c8__rowIdx">{`0${i + 1}`}</span>
                    <div>
                      <h3 className="c8__rowTitle">{item.title}</h3>
                      <span className="c8__rowMeta">{item.timeline}</span>
                    </div>
                    <p className="c8__rowBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- built for ---------------- */}
        <section className="c8__section">
          <div className="c8__wrap">
            <Reveal>
              <div className="c8__sectionHead">
                <span className="c8__label">Who We Work With</span>
                <h2 className="c8__h2">{builtFor.heading}</h2>
              </div>
            </Reveal>
            <div className="c8__grid3">
              {builtFor.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="c8__bfCard">
                    <div className="c8__bfMedia">
                      <span className="c8__bfGlyph">{`Segment 0${i + 1}`}</span>
                    </div>
                    <h3 className="c8__bfTitle">{item.title}</h3>
                    <p className="c8__bfBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="c8__section c8__section--off" id="insights">
          <div className="c8__wrap">
            <div className="c8__proof">
              <Reveal>
                <div className="c8__logos">
                  {proof.logos.map((l) => <div className="c8__logo" key={l}>{l}</div>)}
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div>
                  <span className="c8__label" style={{ marginBottom: 16, display: "inline-flex" }}>Track Record</span>
                  <p className="c8__stat">{proof.statement}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- closing ---------------- */}
        <section className="c8__section" id="events">
          <div className="c8__wrap">
            <Reveal>
              <div className="c8__closing">
                <div className="c8__closingInner">
                  <span className="c8__label">Get In Touch</span>
                  <h2 className="c8__h2">{closing.heading}</h2>
                  <p style={{ fontSize: 16.5, lineHeight: 1.6, color: "var(--muted)" }}>{closing.body}</p>
                  <div className="c8__ctaRow" style={{ marginTop: 6 }}>
                    {closing.ctas.map((c) => (
                      <a key={c.label} className={`c8__btn ${c.primary ? "c8__btn--primary" : ""}`} href={c.href}>
                        {c.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ---------------- footer ---------------- */}
      <footer className="c8__footer">
        <div className="c8__wrap">
          <div className="c8__footerTop">
            <div>
              <div className="c8__footerMark"><Logo height={26} variant="mark" /></div>
              <p className="c8__footerTag">{footer.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div className="c8__footerCol" key={col.heading}>
                <span className="c8__label c8__label--muted">{col.heading}</span>
                {col.links.map((l) => <a className="c8__footerLink" href="#" key={l}>{l}</a>)}
              </div>
            ))}
          </div>
          <div className="c8__footerBar">
            <span className="c8__label c8__label--muted">{footer.legal}</span>
            <a className="c8__label" href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
