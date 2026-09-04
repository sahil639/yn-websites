import Reveal from "@/components/Reveal";
import { nav, hero, gap, whatYouGet, builtFor, proof, closing, footer } from "@/lib/content";
import "./style.css";

export const metadata = { title: "Liquidity Strategy — Column style" };

const Arrow = () => (
  <svg className="cl__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M1.5 6h9M7 2.5 10.5 6 7 9.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LEDGER = [
  { k: "Liquidity sourced", v: "±$1bn" },
  { k: "Track record", v: "24 mo" },
  { k: "Design → launch", v: "6 wks" },
  { k: "Venues covered", v: "DEX · Lending" },
];

const FIG_BARS = [92, 68, 100, 54, 78, 40];

export default function ColumnPage() {
  return (
    <div className="cl">
      {/* ---------------- nav ---------------- */}
      <header className="cl__nav">
        <div className="cl__wrap cl__navInner">
          <a className="cl__brand" href="#top">{nav.brand}</a>
          <nav className="cl__navLinks">
            {nav.links.map((l) => (
              <a key={l.label} className="cl__navLink" href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="cl__navCtas">
            <a className="cl__btn cl__btn--sm" href={nav.secondaryCta.href}>{nav.secondaryCta.label}</a>
            <a className="cl__btn cl__btn--sm cl__btn--primary" href={nav.primaryCta.href}>{nav.primaryCta.label}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="cl__hero">
          <div className="cl__wrap">
            <Reveal>
              <span className="cl__label">Liquidity Strategy</span>
            </Reveal>
            <Reveal delay={70}>
              <h1 className="cl__h1">
                {hero.headingLead} {hero.headingRest}
                <span>{hero.headingAccent}</span>
              </h1>
            </Reveal>
            <div className="cl__heroFoot">
              <Reveal delay={140}>
                <p className="cl__lede">{hero.subhead}</p>
              </Reveal>
              <Reveal delay={200}>
                <div className="cl__ctaRow">
                  {hero.ctas.map((c) => (
                    <a key={c.label} className={`cl__btn ${c.primary ? "cl__btn--primary" : ""}`} href={c.href}>
                      {c.label} <Arrow />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={260}>
              <div className="cl__ledger">
                <div className="cl__ledgerRow">
                  {LEDGER.map((l) => (
                    <div className="cl__ledgerCell" key={l.k}>
                      <span className="cl__ledgerK">{l.k}</span>
                      <span className="cl__ledgerV">{l.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- the gap ---------------- */}
        <section className="cl__section">
          <div className="cl__wrap">
            <div className="cl__split">
              <Reveal>
                <div>
                  <span className="cl__label">The Problem</span>
                  <h2 className="cl__h2" style={{ marginTop: 14 }}>{gap.heading}</h2>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div>
                  <div className="cl__body">
                    {gap.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  <div className="cl__figure" style={{ marginTop: 32 }}>
                    <span className="cl__label">Incentive budget · burn vs. retained</span>
                    <div className="cl__figureBars">
                      {FIG_BARS.map((w, i) => (
                        <div
                          key={i}
                          className={`cl__figureBar ${i === 2 ? "cl__figureBar--fill" : ""}`}
                          style={{ width: `${w}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- what you get ---------------- */}
        <section className="cl__section" id="solutions">
          <div className="cl__wrap">
            <Reveal>
              <div className="cl__sectionHead">
                <span className="cl__label">The Engagement</span>
                <h2 className="cl__h2">{whatYouGet.headingLines.join(" ")}</h2>
              </div>
            </Reveal>
            <div className="cl__list">
              {whatYouGet.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <article className="cl__item">
                    <h3 className="cl__itemTitle">{item.title}</h3>
                    <p className="cl__itemBody">{item.body}</p>
                    <span className="cl__itemMeta">{item.timeline}</span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- built for ---------------- */}
        <section className="cl__section">
          <div className="cl__wrap">
            <Reveal>
              <div className="cl__sectionHead">
                <span className="cl__label">Who We Work With</span>
                <h2 className="cl__h2">{builtFor.heading}</h2>
              </div>
            </Reveal>
            <div className="cl__cards3">
              {builtFor.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="cl__card">
                    <div className="cl__cardMedia">
                      <span className="cl__cardGlyph">{`0${i + 1} / 03`}</span>
                    </div>
                    <h3 className="cl__cardTitle">{item.title}</h3>
                    <p className="cl__cardBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="cl__section" id="insights">
          <div className="cl__wrap">
            <div className="cl__proof">
              <Reveal>
                <div className="cl__logos">
                  {proof.logos.map((l) => <div className="cl__logo" key={l}>{l}</div>)}
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div>
                  <span className="cl__label" style={{ display: "block", marginBottom: 14 }}>Track Record</span>
                  <p className="cl__stat">{proof.statement}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- closing ---------------- */}
        <section className="cl__section" id="events">
          <div className="cl__wrap">
            <Reveal>
              <div className="cl__closing">
                <div className="cl__closingInner">
                  <span className="cl__label">Get In Touch</span>
                  <h2 className="cl__h2">{closing.heading}</h2>
                  <p style={{ fontSize: 16.5, lineHeight: 1.65 }}>{closing.body}</p>
                  <div className="cl__ctaRow" style={{ marginTop: 6 }}>
                    {closing.ctas.map((c) => (
                      <a key={c.label} className={`cl__btn ${c.primary ? "cl__btn--primary" : ""}`} href={c.href}>
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
      <footer className="cl__footer">
        <div className="cl__wrap">
          <div className="cl__footerTop">
            <p className="cl__footerTag">{footer.tagline}</p>
            {footer.columns.map((col) => (
              <div className="cl__footerCol" key={col.heading}>
                <span className="cl__label">{col.heading}</span>
                {col.links.map((l) => <a className="cl__footerLink" href="#" key={l}>{l}</a>)}
              </div>
            ))}
          </div>
          <div className="cl__footerBar">
            <span className="cl__label">{footer.legal}</span>
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
