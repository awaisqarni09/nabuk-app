import Image from "next/image";
import Link from "next/link";
import { Handshake, Headphones, History, MapPin, ShieldCheck, Stethoscope } from "lucide-react";

const timeline = [
  { year: "1996", title: "A clear beginning", body: "Nabuk Distributors was founded to give Malta’s veterinary profession quality products and dependable local support." },
  { year: "2001", title: "Investing in clinical knowledge", body: "Our work with Hill’s Pet Nutrition combined trusted products with seminars, continuing education and tools that supported better patient outcomes." },
  { year: "2018", title: "A specialist focus", body: "Nabuk completed its transition to veterinary equipment and diagnostics, concentrating our expertise where clinics needed it most." },
  { year: "Today", title: "Technology, delivered personally", body: "From X-ray and laboratory diagnostics to surgery and sterilisation, we remain the local point of contact from specification through after-sales care." },
];

const values = [
  {
    title: "Competence",
    body: "Specialist knowledge built through decades of hands-on work with clinical teams.",
    image: "/images/who-we-are.webp",
    meta: [
      { icon: ShieldCheck, label: "Specialist knowledge" },
      { icon: Stethoscope, label: "Clinical teams" },
    ],
  },
  {
    title: "Continuity",
    body: "A stable partner through changing technologies, suppliers and standards of care.",
    image: "/images/nabuk-team.webp",
    meta: [
      { icon: History, label: "Since 1996" },
      { icon: Handshake, label: "One stable partner" },
    ],
  },
  {
    title: "Closeness",
    body: "Local support that understands island logistics and the urgency of daily practice.",
    image: "/images/dog-cat-about-us.webp",
    meta: [
      { icon: MapPin, label: "Malta & Gozo" },
      { icon: Headphones, label: "Local support" },
    ],
  },
];

export function AboutSection() {
  return (
    <div className="editorial-shell">
      <section className="page-hero inner-hero" aria-labelledby="about-title">
        <div className="inner-hero__image"><Image src="/images/about-us-banner.webp" alt="Illustrated veterinary diagnostic equipment connected across a clinical network" fill priority sizes="100vw" /></div>
        <div className="about-number" aria-hidden="true">30</div>
        <div className="inner-hero__content editorial-container">
          <p className="editorial-kicker">Our story · Since 1996</p>
          <h1 id="about-title" className="editorial-title">Three decades.<br /><em>One purpose.</em></h1>
          <p className="page-hero-sub editorial-copy editorial-copy--inverse">To help veterinary professionals do their best work—with dependable technology, practical knowledge and a partner who stays close.</p>
        </div>
        <p className="inner-hero__side-note">Malta · Gozo · Veterinary technology</p>
      </section>

      <div className="page-content">
        <section className="editorial-section editorial-section--paper" aria-labelledby="about-values-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">What endures</p><h2 id="about-values-title" className="editorial-heading" style={{ marginTop: 24 }}>Built on <em>quiet confidence.</em></h2></div>
              <p className="editorial-copy">Nabuk grew alongside Malta’s veterinary profession. The portfolio changed; the principle did not: understand the clinic, recommend carefully and remain accountable after delivery.</p>
            </div>
            <div className="image-card-grid">
              {values.map((value, index) => (
                <article className="benefit-card nabuk-card" key={value.title}>
                  <div className="benefit-card__visual"><Image src={value.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
                  <div className="benefit-card__body">
                    <span className="benefit-card__kicker">Principle · {String(index + 1).padStart(2, "0")}</span>
                    <h3>{value.title}</h3>
                    <p>{value.body}</p>
                    <div className="benefit-card__meta">
                      {value.meta.map(({ icon: MetaIcon, label }) => (
                        <span key={label}><MetaIcon size={14} aria-hidden="true" /> {label}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="our-history" className="editorial-section editorial-section--mist" aria-labelledby="about-history-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">Selected milestones</p><h2 id="about-history-title" className="editorial-heading" style={{ marginTop: 24 }}>A history of <em>showing up.</em></h2></div>
              <p className="editorial-copy">Every chapter reflects the same movement: closer to the clinical team, deeper into the technology and more useful to the profession.</p>
            </div>
            <div className="timeline-list">
              {timeline.map((item) => <article className="timeline-entry" key={item.year}><time>{item.year}</time><div><h3>{item.title}</h3><p>{item.body}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="editorial-split editorial-section--ink" aria-labelledby="about-next-title">
          <div className="section-inner editorial-split-copy">
            <p className="editorial-kicker">The next chapter</p>
            <h2 id="about-next-title" className="editorial-heading">Modern clinics deserve a <em>modern partner.</em></h2>
            <p className="editorial-copy editorial-copy--inverse">We continue to bring new diagnostic and clinical technologies to Malta without losing the personal service that built the company.</p>
            <div className="editorial-actions"><Link className="editorial-button editorial-button--light" href="/contact">Meet the team <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="editorial-split-visual"><Image src="/images/veterinary-solution.webp" alt="A contemporary veterinary clinic" fill sizes="(max-width:760px) 100vw, 50vw" /></div>
        </section>
      </div>
    </div>
  );
}
