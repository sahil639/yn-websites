import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { nav, hero, gap, whatYouGet, builtFor, proof, closing, footer } from "@/lib/content";
import "./style.css";

export const metadata = { title: "Liquidity Strategy — 500 Global style" };

const Arrow = () => (
  <svg className="fh__arrow" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M1 6h9M6.5 2 10.5 6l-4 4" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function FiveHundredPage() {
  return (
    <div className="fh">
      {/* ---------------- nav ---------------- */}
      <header className="fh__nav">
        <div className="fh__wrap fh__navInner">
          <a className="fh__brand" href="#top" aria-label={nav.brand}>
            <Logo height={21} />
          </a>
          <nav className="fh__navLinks">
            {nav.links.map((l) => (
              <a key={l.label} className="fh__navLink" href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="fh__navCtas">
            <a className="fh__btn fh__btn--sm" href={nav.secondaryCta.href}>{nav.secondaryCta.label}</a>
            <a className="fh__btn fh__btn--sm fh__btn--primary" href={nav.primaryCta.href}>
              {nav.primaryCta.label}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="fh__hero">
          <div className="fh__heroPanel">
            <div className="fh__heroArt" aria-hidden="true">
              <img src="/sunburst.svg" alt="" width={630} height={652} />
            </div>
            <div className="fh__wrap fh__heroInner">
              <Reveal delay={60}>
                <h1 className="fh__h1">
                  {hero.headingLead}
                  <br />
                  {hero.headingRest}
                  {hero.headingAccent}
                </h1>
              </Reveal>
              <div className="fh__heroFoot">
                <Reveal delay={160}>
                  <p className="fh__lede">{hero.subhead}</p>
                </Reveal>
                <Reveal delay={240}>
                  <div className="fh__ctaRow">
                    {hero.ctas.map((c) => (
                      <a
                        key={c.label}
                        className={`fh__btn ${c.primary ? "fh__btn--primary" : ""}`}
                        href={c.href}
                      >
                        {c.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- the gap ---------------- */}
        <section className="fh__section">
          <div className="fh__wrap">
            <div className="fh__gap">
              <Reveal>
                <div className="fh__plate">
                  <div className="fh__plateGrid" />
                  <div className="fh__plateMark">TVL</div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div>
                  <p className="fh__eyebrow">The Problem</p>
                  <h2 className="fh__h2" style={{ marginTop: 14 }}>{gap.heading}</h2>
                  <div className="fh__gapBody">
                    {gap.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- what you get ---------------- */}
        <section className="fh__section" id="solutions">
          <div className="fh__wrap">
            <Reveal>
              <div className="fh__sectionHead">
                <p className="fh__eyebrow">The Engagement</p>
                <h2 className="fh__h2">{whatYouGet.headingLines.join(" ")}</h2>
              </div>
            </Reveal>
            <div className="fh__grid2">
              {whatYouGet.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="fh__card">
                    <div className="fh__cardTop">
                      <h3 className="fh__cardTitle">{item.title}</h3>
                      <span className="fh__eyebrow">{item.timeline}</span>
                    </div>
                    <p className="fh__cardBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- built for ---------------- */}
        <section className="fh__section">
          <div className="fh__wrap">
            <Reveal>
              <div className="fh__sectionHead">
                <p className="fh__eyebrow">Who We Work With</p>
                <h2 className="fh__h2">{builtFor.heading}</h2>
              </div>
            </Reveal>
            <div className="fh__grid3">
              {builtFor.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <article className="fh__bfCard">
                    <div className="fh__bfPlate">{`0${i + 1}`}</div>
                    <h3 className="fh__bfTitle">{item.title}</h3>
                    <p className="fh__bfBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="fh__section" id="insights">
          <div className="fh__wrap">
            <div className="fh__proof">
              <Reveal>
                <div className="fh__logos">
                  {proof.logos.map((l) => (
                    <div className="fh__logo" key={l}>{l}</div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={130}>
                <div>
                  <p className="fh__eyebrow" style={{ marginBottom: 16 }}>Track Record</p>
                  <p className="fh__proofStat">{proof.statement}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- closing ---------------- */}
        <section className="fh__section" id="events">
          <div className="fh__wrap">
            <Reveal>
              <div className="fh__closing">
                <div className="fh__closingInner">
                  <p className="fh__eyebrow">Get In Touch</p>
                  <h2 className="fh__h2">{closing.heading}</h2>
                  <p className="fh__closingBody">{closing.body}</p>
                  <div className="fh__ctaRow" style={{ marginTop: 8 }}>
                    {closing.ctas.map((c) => (
                      <a key={c.label} className={`fh__btn ${c.primary ? "fh__btn--primary" : ""}`} href={c.href}>
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
      <footer className="fh__footer">
        <div className="fh__wrap">
          <div className="fh__footerTop">
            <div>
              <div className="fh__footerMark"><Logo height={26} variant="mark" /></div>
              <p className="fh__footerTag">{footer.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div className="fh__footerCol" key={col.heading}>
                <p className="fh__eyebrow">{col.heading}</p>
                {col.links.map((l) => (
                  <a className="fh__footerLink" href="#" key={l}>{l}</a>
                ))}
              </div>
            ))}
          </div>
          <div className="fh__footerBar">
            <span className="fh__eyebrow">{footer.legal}</span>
            <a className="fh__eyebrow" href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
