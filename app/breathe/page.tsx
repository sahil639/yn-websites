import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";
import { nav, hero, gap, whatYouGet, builtFor, proof, closing, footer } from "@/lib/content";
import "./style.css";

export const metadata = { title: "Liquidity Strategy — Breathe ESG style" };

const Arrow = () => (
  <svg className="br__arrow" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
    <path d="M2 6.5h8M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Tick = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path d="M2.5 6.3 4.8 8.6 9.5 3.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MOCK_TABS = ["Program", "Vaults", "Incentives", "Syndicate", "Retention"];

const MOCK_CHECKS = [
  "12 comparable campaigns benchmarked",
  "4 vault structures modelled",
  "Cap sizing and lockups calibrated",
  "38 syndicate LPs matched to mandate",
  "Epoch cadence and budget split set",
  "Program validated before budget commit",
];

const MOCK_STATS = [
  { v: "±$1bn", k: "Liquidity sourced" },
  { v: "6 wks", k: "Design → launch-ready" },
  { v: "24 mo", k: "Live benchmark window" },
];

const METERS = [
  { k: "Trial and error", pct: 88, soft: true },
  { k: "Validated playbook", pct: 34, soft: false },
];

/** Desaturated pastel mosaic — the reference's one splash of colour, kept light. */
const MOSAIC = ["#eef4ec", "#e9f0f6", "#f2f0e9", "#eaf1ee", "#eef1f6", "#f4f1ef", "#ecf2f0", "#eef3f7"];
const mosaicCells = (count: number, seed: number) =>
  Array.from({ length: count }, (_, i) => MOSAIC[(i * 7 + seed * 3) % MOSAIC.length]);

export default function BreathePage() {
  return (
    <div className="br">
      {/* ---------------- nav ---------------- */}
      <header className="br__nav">
        <div className="br__wrap br__navInner">
          <a className="br__brand" href="#top" aria-label={nav.brand}>
            <Logo height={17} />
          </a>
          <nav className="br__navLinks">
            {nav.links.map((l) => (
              <a key={l.label} className="br__navLink" href={l.href}>{l.label}</a>
            ))}
          </nav>
          <div className="br__navCtas">
            <a className="br__btn br__btn--sm" href={nav.secondaryCta.href}>{nav.secondaryCta.label}</a>
            <a className="br__btn br__btn--sm br__btn--primary" href={nav.primaryCta.href}>{nav.primaryCta.label}</a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* ---------------- hero ---------------- */}
        <section className="br__hero">
          <div className="br__wrap">
            <Reveal>
              <span className="br__label">Liquidity Strategy</span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="br__h1">
                {hero.headingLead} {hero.headingRest}
                <span>{hero.headingAccent}</span>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="br__lede">{hero.subhead}</p>
            </Reveal>
            <Reveal delay={210}>
              <div className="br__ctaRow">
                {hero.ctas.map((c) => (
                  <a key={c.label} className={`br__btn ${c.primary ? "br__btn--primary" : ""}`} href={c.href}>
                    {c.label} <Arrow />
                  </a>
                ))}
              </div>
            </Reveal>

            {/* product-panel mock */}
            <Reveal delay={280}>
              <div className="br__mock">
                <div className="br__mockTabs">
                  {MOCK_TABS.map((t, i) => (
                    <span key={t} className={`br__mockTab ${i === 0 ? "is-on" : ""}`}>{t}</span>
                  ))}
                </div>
                <div className="br__mockBody">
                  <div className="br__mockMain">
                    <p className="br__mockCaption">Building a validated liquidity program…</p>
                    <div className="br__checks">
                      {MOCK_CHECKS.map((c) => (
                        <span className="br__check" key={c}><Tick /> {c}</span>
                      ))}
                    </div>
                  </div>
                  <div className="br__mockSide">
                    {MOCK_STATS.map((s) => (
                      <div className="br__mockStat" key={s.k}>
                        <span className="br__mockStatV">{s.v}</span>
                        <span className="br__mockStatK">{s.k}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="br__mosaic" aria-hidden="true">
                  {mosaicCells(48, 1).map((c, i) => (
                    <div className="br__mosaicCell" key={i} style={{ background: c }} />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="br__trust">
                <span className="br__label br__label--plain">
                  Trusted by protocols, chains and asset issuers going from treasury to TVL
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- the gap ---------------- */}
        <section className="br__section">
          <div className="br__wrap">
            <div className="br__split">
              <Reveal>
                <div>
                  <span className="br__label">The Problem</span>
                  <h2 className="br__h2" style={{ marginTop: 14 }}>{gap.heading}</h2>
                  <div className="br__body">
                    {gap.body.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div className="br__figure">
                  <div className="br__figureHead">
                    <span className="br__label br__label--plain">Incentive budget · route to full vault</span>
                  </div>
                  <div className="br__figureBody">
                    {METERS.map((m) => (
                      <div className="br__meter" key={m.k}>
                        <div className="br__meterTop">
                          <span className="br__meterK">{m.k}</span>
                          <span className="br__meterK">{m.pct}%</span>
                        </div>
                        <div className="br__meterTrack">
                          <div
                            className={`br__meterFill ${m.soft ? "br__meterFill--soft" : ""}`}
                            style={{ width: `${m.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="br__mosaic" aria-hidden="true">
                    {mosaicCells(48, 4).map((c, i) => (
                      <div className="br__mosaicCell" key={i} style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- what you get ---------------- */}
        <section className="br__section br__section--panel" id="solutions">
          <div className="br__wrap">
            <Reveal>
              <div className="br__sectionHead">
                <span className="br__label">The Engagement</span>
                <h2 className="br__h2">{whatYouGet.headingLines.join(" ")}</h2>
              </div>
            </Reveal>
            <div className="br__cards">
              {whatYouGet.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 70}>
                  <article className="br__card">
                    <div className="br__cardHead">
                      <h3 className="br__cardTitle">{item.title}</h3>
                      <span className="br__label br__label--plain">{item.timeline}</span>
                    </div>
                    <div className="br__cardRule" />
                    <p className="br__cardBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- built for ---------------- */}
        <section className="br__section">
          <div className="br__wrap">
            <Reveal>
              <div className="br__sectionHead">
                <span className="br__label">Who We Work With</span>
                <h2 className="br__h2">{builtFor.heading}</h2>
              </div>
            </Reveal>
            <div className="br__cards3">
              {builtFor.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="br__card">
                    <div className="br__bfMedia" aria-hidden="true">
                      {mosaicCells(50, i + 2).map((c, j) => (
                        <div key={j} style={{ background: c }} />
                      ))}
                    </div>
                    <h3 className="br__bfTitle">{item.title}</h3>
                    <p className="br__cardBody">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- proof ---------------- */}
        <section className="br__section br__section--panel" id="insights">
          <div className="br__wrap">
            <div className="br__proof">
              <Reveal>
                <div className="br__logos">
                  {proof.logos.map((l) => <div className="br__logo" key={l}>{l}</div>)}
                </div>
              </Reveal>
              <Reveal delay={110}>
                <div>
                  <span className="br__label" style={{ marginBottom: 14 }}>Track Record</span>
                  <p className="br__stat">{proof.statement}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- closing ---------------- */}
        <section className="br__section" id="events">
          <div className="br__wrap">
            <Reveal>
              <div className="br__closing">
                <div className="br__closingBurst yn-burst" aria-hidden="true" />
                <div className="br__closingInner">
                  <span className="br__label">Get In Touch</span>
                  <h2 className="br__h2">{closing.heading}</h2>
                  <p style={{ fontSize: 16.5, lineHeight: 1.65 }}>{closing.body}</p>
                  <div className="br__ctaRow" style={{ marginTop: 6 }}>
                    {closing.ctas.map((c) => (
                      <a key={c.label} className={`br__btn ${c.primary ? "br__btn--primary" : ""}`} href={c.href}>
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
      <footer className="br__footer">
        <div className="br__wrap">
          <div className="br__footerTop">
            <div>
              <div className="br__footerMark"><Logo height={26} variant="mark" /></div>
              <p className="br__footerTag">{footer.tagline}</p>
            </div>
            {footer.columns.map((col) => (
              <div className="br__footerCol" key={col.heading}>
                <span className="br__label br__label--plain">{col.heading}</span>
                {col.links.map((l) => <a className="br__footerLink" href="#" key={l}>{l}</a>)}
              </div>
            ))}
          </div>
          <div className="br__footerBar">
            <span className="br__label br__label--plain">{footer.legal}</span>
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
