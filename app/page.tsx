import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeEntrance } from "@/components/animations/HomeEntrance";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics",
  description: "Advanced veterinary equipment and diagnostics for clinics in Malta and Gozo, with local installation, training and support.",
  alternates: { canonical: "/" },
};

const featuredSolutions = [
  { label: "Diagnostics", category: "Diagnostic systems", title: "Fast, reliable answers while the patient is still in the room.", image: "/images/diagnostic-system.webp", href: "/solutions/diagnostic-systems" },
  { label: "Imaging", category: "Imaging", title: "X-ray and ultrasound specified around your practice.", image: "/images/x-ray.webp", href: "/solutions/imaging" },
  { label: "Surgical", category: "Surgical instruments", title: "Precision instruments for the theatre.", image: "/images/surgical-instruments.webp", href: "/solutions/surgical-instruments" },
  { label: "Rapid testing", category: "Rapid testing", title: "A ten-minute answer that changes the plan.", image: "/images/rapid-testing.webp", href: "/solutions/rapid-testing" },
  { label: "Sterilisation", category: "Sterilisation", title: "Sterility you can document, cycle after cycle.", image: "/images/sterilisation.webp", href: "/solutions/sterilisation" },
  { label: "Specialist equipment", category: "Specialist equipment", title: "The technologies that let a practice open a whole new service.", image: "/images/specialised-equipment.webp", href: "/solutions/specialist-equipment" },
];

// App-style portfolio tiles — each discipline's photo under a brand-tinted
// scrim, with a count chip. `category` drives the chip.
const portfolioTiles = [
  { title: "Laboratory diagnostics", subtitle: "Haematology, microscopy & rapid testing", category: "Diagnostic systems", href: "/solutions/diagnostic-systems", image: "/images/laboratory-analyzers.webp", wide: true },
  { title: "Diagnostic imaging", category: "Imaging", href: "/solutions/imaging", image: "/images/ultrasound-imaging.webp" },
  { title: "Surgical theatre", category: "Surgical instruments", href: "/solutions/surgical-instruments", image: "/images/surgical-instrument.webp" },
  { title: "Sterilisation & hygiene", category: "Sterilisation", href: "/solutions/sterilisation", image: "/images/sterilisation.webp" },
  { title: "Clinic infrastructure", category: "Clinic furniture", href: "/solutions/clinic-furniture", image: "/images/clinic-furniture.webp" },
  { title: "Specialised disciplines", subtitle: "Dentistry, endoscopy, ophthalmology & more", category: "Specialist equipment", href: "/solutions/specialist-equipment", image: "/images/specialised-equipment.webp", wide: true },
];

const consultationSteps = [
  { title: "Understand", body: "We begin with your caseload, team, room constraints, current systems and the outcome you want to improve." },
  { title: "Specify", body: "We compare suitable technologies and explain why a particular configuration fits your practice." },
  { title: "Implement", body: "Delivery, installation, commissioning and practical team training are coordinated as one project." },
  { title: "Stay close", body: "On-island after-sales care gives your clinic a clear local contact when questions or service needs arise." },
];

const partnerNames = [
  { name: "Eickemeyer", field: "Veterinary equipment" },
  { name: "Antech", field: "Clinical diagnostics" },
  { name: "Melag", field: "Sterilisation systems" },
  { name: "Covetrus", field: "Animal health technology" },
  { name: "Veterinary Instrumentation", field: "Orthopaedic instruments" },
];

// Bottom-edge hero marquee — the manufacturers we represent and the
// disciplines they cover, looping slowly under the composition.
const marqueeItems = [
  "Eickemeyer", "Diagnostics", "MELAG", "Imaging", "Veterinary Instrumentation",
  "Surgery", "AL Test", "Sterilisation", "DEMAS", "Dentistry", "Endoscopy", "Anaesthesia",
];

const questions = [
  { question: "What does Nabuk supply?", answer: "Our portfolio covers diagnostic systems, blood analysers, X-ray and ultrasound, rapid testing, surgical instruments, sterilisation, clinic furniture and specialised veterinary equipment." },
  { question: "Why are prices not shown online?", answer: "Clinical equipment is rarely one-size-fits-all. Configuration, installation, training and the clinic’s workflow affect the right recommendation, so we prepare advice around the actual requirement." },
  { question: "Do you install equipment and train the team?", answer: "Where applicable, Nabuk coordinates installation and commissioning, then gives the clinical team practical guidance for confident day-to-day use." },
  { question: "What happens after delivery?", answer: "The relationship continues through local technical guidance, maintenance and after-sales support for the systems and manufacturers we represent." },
  { question: "Do you serve both Malta and Gozo?", answer: "Yes. Nabuk works with veterinary practices across Malta and Gozo, providing one local point of contact throughout the project." },
];

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="editorial-shell">
      <HomeEntrance />
      <section className="home-editorial-hero" aria-labelledby="home-title">
        <div className="home-editorial-grid">
          <div className="home-editorial-copy">
            <p className="editorial-kicker">Veterinary technology · Malta · Est. 1996</p>
            <h1 id="home-title" className="editorial-title home-hero-title">Better tools.<br /><em>Better care.</em></h1>
            <p className="editorial-copy">Advanced diagnostics, imaging and clinical equipment—selected with your clinic, installed on-island and supported for the long term.</p>
            <div className="editorial-actions">
              <Link className="editorial-button editorial-button--solid" href="/solutions">Explore solutions <span aria-hidden="true">↗</span></Link>
              <Link className="editorial-button" href="/contact">Start a conversation</Link>
            </div>
            <div className="home-hero-index" aria-label="Portfolio at a glance">
              <Link href="/solutions#capabilities"><strong>{products.length}</strong><span>Products in the library</span></Link>
              <Link href="/solutions"><strong>08</strong><span>Clinical disciplines</span></Link>
              <Link href="/partners"><strong>05</strong><span>Manufacturer partners</span></Link>
            </div>
            <div className="home-scroll-mark" aria-hidden="true"><i />Scroll to discover</div>
          </div>

          <div className="home-visual" aria-label="Modern veterinary clinic technology">
            <div className="home-visual-main"><Image src="/images/veterinary-solution.webp" alt="A complete suite of modern veterinary equipment" fill priority sizes="(max-width: 1050px) 100vw, 52vw" /></div>
            <div className="home-aperture home-aperture--window"><Image src="/images/dog-cat-about-us.webp" alt="A dog and cat at a bright, contemporary veterinary clinic" fill priority sizes="16vw" /></div>
            <div className="home-aperture home-aperture--device">
              <Image src="/images/element-ht5.webp" alt="Element HT5 haematology analyser" fill sizes="(max-width: 1050px) 60vw, 24vw" />
              <span className="home-device-tag" aria-hidden="true">Element HT5</span>
            </div>
            <p className="home-visual-caption">One local partner from first conversation to after-sales care.</p>
          </div>
        </div>

        <div className="home-hero-marquee" aria-hidden="true">
          <div className="home-hero-marquee-track">
            {[0, 1].map((half) => (
              <div className="home-hero-marquee-group" key={half}>
                {marqueeItems.map((item) => <span key={item}>{item}</span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="editorial-section editorial-section--paper" aria-labelledby="home-solutions-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div>
                <p className="editorial-kicker">Clinical disciplines</p>
                <h2 id="home-solutions-title" className="editorial-heading" style={{ marginTop: 24 }}>A complete clinic,<br /><em>thoughtfully equipped.</em></h2>
              </div>
              <p className="editorial-copy">We bring together the technologies a modern practice depends on, with advice grounded in caseload, workflow and the realities of operating in Malta and Gozo.</p>
            </div>
            <div className="story-grid">
              {featuredSolutions.map((item) => {
                const count = products.filter((product) => product.category === item.category).length;
                return (
                  <Link className="story-card nabuk-card" key={item.label} href={item.href}>
                    <Image src={item.image} alt="" fill sizes="(max-width: 760px) 100vw, 50vw" />
                    <div className="story-card__content">
                      <span className="story-card__label">{item.label}</span>
                      <h3>{item.title}</h3>
                      <span className="story-card__chip">View {count} products</span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div style={{ marginTop: 42 }}><Link className="editorial-card-link" href="/solutions">View every solution <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="editorial-section editorial-section--mist" aria-label="Nabuk in numbers">
          <div className="section-inner editorial-container">
            <div className="number-strip">
              <div className="number-stat"><strong data-count-to="1996" data-count-from="1966">1996</strong><span>Established in Malta</span></div>
              <div className="number-stat"><strong data-count-to="30" data-count-from="0">30</strong><span>Years with the profession</span></div>
              <div className="number-stat"><strong data-count-to="2" data-count-from="0">2</strong><span>Islands served</span></div>
              <div className="number-stat"><strong data-count-to="1" data-count-from="0">1</strong><span>Accountable local partner</span></div>
            </div>
          </div>
        </section>

        <section className="editorial-section home-capability-section" aria-labelledby="home-capability-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div>
                <p className="editorial-kicker">The complete portfolio</p>
                <h2 id="home-capability-title" className="editorial-heading" style={{ marginTop: 24 }}>What your clinic needs,<br /><em>in one conversation.</em></h2>
              </div>
              <p className="editorial-copy">Instead of sending teams between unrelated suppliers, Nabuk brings the key clinical disciplines together with one accountable local partner.</p>
            </div>

            <div className="tile-grid">
              {portfolioTiles.map(({ title, subtitle, category, href, image, wide }) => {
                const count = products.filter((product) => product.category === category).length;
                return (
                  <Link className={`tile nabuk-card ${wide ? "tile--wide" : ""}`} key={title} href={href}>
                    <Image src={image} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                    <span className="tile__scrim" aria-hidden="true" />
                    <h3>{title}</h3>
                    {subtitle && <p>{subtitle}</p>}
                    <span className="tile__chip">{count} {count === 1 ? "product" : "products"}</span>
                  </Link>
                );
              })}
            </div>
            <div style={{ marginTop: 42 }}><Link className="editorial-card-link" href="/solutions">Explore the full portfolio <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="editorial-section" aria-label="Beyond delivery — a direct line to the team">
          <div className="section-inner editorial-container">
            <div className="direct-card nabuk-card">
              <div className="direct-card__visual">
                <Image src="/images/support-clinic.webp" alt="Nabuk specialist supporting a veterinary clinic team" fill sizes="(max-width: 900px) 100vw, 55vw" />
                <span className="direct-card__caption">Malta / On-island support</span>
                <span className="direct-card__badge" aria-hidden="true">35°N</span>
              </div>
              <div className="direct-card__panel">
                <p className="direct-card__kicker">Beyond delivery · Direct line to the team</p>
                <a className="direct-card__mail" href="mailto:info@nabukmalta.com">info@nabukmalta.com</a>
                <a className="direct-card__phone" href="tel:+35699472220">+356 9947 2220</a>
                <Link className="direct-card__support" href="/support">How support works <span aria-hidden="true">↗</span></Link>
                <div className="direct-card__meta">
                  <div>
                    <span>One continuous service</span>
                    <p>Specification, installation, team training and after-sales care.</p>
                  </div>
                  <div>
                    <span>Working across</span>
                    <p>Malta / Gozo<br />Clinics island-wide</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--ink home-process-section" aria-labelledby="home-process-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div>
                <p className="editorial-kicker">From requirement to routine</p>
                <h2 id="home-process-title" className="editorial-heading home-section-heading">A clinical system is<br /><em>more than a box.</em></h2>
              </div>
              <p className="editorial-copy editorial-copy--inverse">The value comes from choosing well, integrating carefully and giving the people who use it confidence from day one.</p>
            </div>
            <div className="process-rail">
              {consultationSteps.map((step, index) => (
                <article className="process-card nabuk-card" key={step.title}>
                  <span className="process-card__ghost" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <b>Step {String(index + 1).padStart(2, "0")}</b>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <span className="process-card__trace" aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--paper" aria-labelledby="home-manufacturers-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div>
                <p className="editorial-kicker">International manufacturers</p>
                <h2 id="home-manufacturers-title" className="editorial-heading home-section-heading">Global expertise.<br /><em>Locally useful.</em></h2>
              </div>
              <div>
                <p className="editorial-copy">Nabuk represents respected specialist manufacturers, translating their technology into a recommendation, installation and support relationship that works in Malta.</p>
                <Link className="editorial-card-link" href="/partners">Meet our partners <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
            <div className="partner-wordmarks home-partner-wordmarks">
              {partnerNames.map((partner, index) => (
                <article className="partner-wordmark nabuk-card" key={partner.name}>
                  <span>Partner · {String(index + 1).padStart(2, "0")}</span>
                  <strong>{partner.name}</strong>
                  <span>{partner.field}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--mist" aria-labelledby="home-history-title">
          <div className="section-inner editorial-container">
            <div className="home-history-grid">
              <div className="home-history-visual">
                <Image src="/images/nabuk-team.webp" alt="The Nabuk Distributors team in Malta" fill sizes="(max-width: 850px) 100vw, 52vw" />
                <div className="home-history-stamp"><strong>30</strong><span>years beside the profession</span></div>
              </div>
              <div className="home-history-copy">
                <p className="editorial-kicker">Established 1996</p>
                <h2 id="home-history-title" className="editorial-heading">Built alongside Malta’s<br /><em>veterinary profession.</em></h2>
                <p className="editorial-copy">Nabuk began by bringing quality veterinary products to the Maltese market. As clinical practice evolved, so did the company—toward diagnostics, imaging, surgery and the specialised infrastructure modern clinics depend on.</p>
                <div className="home-history-points">
                  <div><strong>Then</strong><p>Trusted products, education and long-term clinic relationships.</p></div>
                  <div><strong>Now</strong><p>Complete clinical technologies with local installation and after-sales care.</p></div>
                  <div><strong>Always</strong><p>Practical advice and one accountable team based in Malta.</p></div>
                </div>
                <Link className="editorial-button" href="/about">Read our story <span aria-hidden="true">↗</span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section home-faq-section" aria-labelledby="home-faq-title">
          <div className="section-inner editorial-container">
            <div className="home-faq-layout">
              <div className="home-faq-lead">
                <p className="editorial-kicker">Before we speak</p>
                <h2 id="home-faq-title" className="editorial-heading">Useful answers.<br /><em>No sales fog.</em></h2>
                <p className="editorial-copy">A few practical answers about how Nabuk works with clinics.</p>
              </div>
              <div className="home-faq-list">
                {questions.map((item, index) => (
                  <details className="home-faq-item" key={item.question} open={index === 0}>
                    <summary><span>{item.question}</span><i aria-hidden="true">+</i></summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-quote" aria-label="Our promise">
          <blockquote>“The right technology should make care feel more human.”</blockquote>
          <p>Nabuk Distributors · Malta &amp; Gozo</p>
          <Link className="editorial-button editorial-button--light home-quote-action" href="/contact">Tell us what your clinic needs <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
    </main>
  );
}
