import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { nav, hero, gap, whatYouGet, builtFor, proof, closing, footer } from "@/lib/content";
import "./style.css";

export const metadata = { title: "Liquidity Strategy — Delcap style" };

const Arrow = () => (
  <svg className="dc__arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h9M7.5 3 11.5 7l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BAR_HEIGHTS = ["38%", "56%", "47%", "100%", "72%", "61%"];

export default function DelcapPage() {
  return (
    <div className="dc">
      {/* ---------------- nav ---------------- */}
      <header className="dc__nav">
        <div className="dc__wrap dc__navInner">
          <a className="dc__brand" href="#top" aria-label={nav.brand}>
            <Logo height={20} />
          </a>
          <nav className="dc__navLinks">
            {nav.links.map((l) => (
              <a key={l.label} className="dc__navLink" href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="dc__navCtas">
            <a className="dc__btn dc__btn--sm" href={nav.secondaryCta.href}>{nav.secondaryCta.label}</a>
            <a className="dc__btn dc__btn--sm dc__btn--primary" href={nav.primaryCta.href}>{nav.primaryCta.label}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="dc__hero">
          <div className="dc__wrap">
            <div className="dc__heroGrid">
              <Reveal>
                <div>
                  <span className="dc__badge">Liquidity Strategy</span>
                  <h1 className="dc__h1">
                    {hero.headingLead} {hero.headingRest}
                    <span>{hero.headingAccent}</span>
                  </h1>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div>
                  <p className="dc__lede">{hero.subhead}</p>
                  <div className="dc__ctaRow">
                    {hero.ctas.map((c) => (
                      <a key={c.label} className={`dc__btn ${c.primary ? "dc__btn--primary" : ""}`} href={c.href}>
                        {c.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <div className="dc__panel">
                <div className="dc__panelItem">
                  <span className="dc__panelNum">±$1bn</span>
                  <span className="dc__panelLabel">Active liquidity sourced</span>
                </div>
                <div className="dc__panelItem">
                  <span className="dc__panelNum">2 yrs</span>
                  <span className="dc__panelLabel">Of live campaign benchmarks</span>
                </div>
                <div className="dc__panelItem">
                  <span className="dc__panelNum">6 wks</span>
                  <span className="dc__panelLabel">From program design to launch-ready</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- the gap ---------------- */}
        <section className="dc__section dc__section--tint">
          <div className="dc__wrap">
            <div className="dc__split">
              <Reveal>
                <div>
                  <span className="dc__badge">The Problem</span>
                  <h2 className="dc__h2" style={{ marginTop: 18 }}>{gap.heading}</h2>
                  <div className="dc__body" style={{ marginTop: 20 }}>
                    {gap.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div className="dc__figure">
                  <div className="dc__figureBars">
                    {BAR_HEIGHTS.map((h, i) => (
                      <div className="dc__bar" key={i} style={{ height: h }} />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- what you get ---------------- */}
        <section className="dc__section" id="solutions">
          <div className="dc__wrap">
            <Reveal>
              <div className="dc__sectionHead">
                <span className="dc__badge" style={{ justifySelf: "start" }}>The Engagement</span>
                <h2 className="dc__h2">{whatYouGet.headingLines.join(" ")}</h2>
              </div>
            </Reveal>
            <div className="dc__cards">
              {whatYouGet.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="dc__card">
                    <div className="dc__cardHead">
                      <h3 className="dc__cardTitle">{item.title}</h3>
                      <span className="dc__chip">{item.timeline}</span>
                    </div>
                    <p className="dc__cardBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- built for ---------------- */}
        <section className="dc__section dc__section--tint">
          <div className="dc__wrap">
            <Reveal>
              <div className="dc__sectionHead">
                <span className="dc__badge" style={{ justifySelf: "start" }}>Who We Work With</span>
                <h2 className="dc__h2">{builtFor.heading}</h2>
              </div>
            </Reveal>
            <div className="dc__cards3">
              {builtFor.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="dc__card">
                    <div className="dc__bfMedia">
                      <span className="dc__bfGlyph">{`0${i + 1}`}</span>
                    </div>
                    <h3 className="dc__cardTitle">{item.title}</h3>
                    <p className="dc__cardBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="dc__section" id="insights">
          <div className="dc__wrap">
            <div className="dc__proof">
              <Reveal>
                <div className="dc__logos">
                  {proof.logos.map((l) => <div className="dc__logo" key={l}>{l}</div>)}
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div>
                  <span className="dc__badge" style={{ marginBottom: 16 }}>Track Record</span>
                  <p className="dc__stat">{proof.statement}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- closing ---------------- */}
        <section className="dc__section" id="events" style={{ paddingTop: 0 }}>
          <div className="dc__wrap">
            <Reveal>
              <div className="dc__closing">
                <div className="dc__closingInner">
                  <span className="dc__badge" style={{ justifySelf: "start" }}>Get In Touch</span>
                  <h2 className="dc__h2">{closing.heading}</h2>
                  <p style={{ fontSize: 17, lineHeight: 1.6 }}>{closing.body}</p>
                  <div className="dc__ctaRow" style={{ marginTop: 4 }}>
                    {closing.ctas.map((c) => (
                      <a key={c.label} className={`dc__btn ${c.primary ? "dc__btn--primary" : ""}`} href={c.href}>
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
      <footer className="dc__footer">
        <div className="dc__wrap">
          <div className="dc__footerTop">
            <div>
              <div className="dc__footerMark"><Logo height={26} variant="mark" /></div>
              <p className="dc__footerTag">{footer.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div className="dc__footerCol" key={col.heading}>
                <p className="dc__footerHead">{col.heading}</p>
                {col.links.map((l) => <a className="dc__footerLink" href="#" key={l}>{l}</a>)}
              </div>
            ))}
          </div>
          <div className="dc__footerBar">
            <span>{footer.legal}</span>
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
