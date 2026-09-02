import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeEntrance } from "@/components/animations/HomeEntrance";
import { products } from "@/lib/products";

// Hand-picked for the home grid: clean-cutout product photography only
// (pure white backgrounds), spread across the clinical disciplines.
const featuredProductNames = [
  "HEINE BETA X VET Diagnostic Set",
  "MAGIC 500 Plus Portable Ultrasound",
  "HiRay LITE Battery-Powered X-Ray Machine",
  "EICKTRON 160 Electrosurgery Unit",
  "Vacuklav 44 B+ Evolution Autoclave",
  "BeneFusion VP1 Infusion Pump",
  "ePM 12M VET Multi-Parameter Monitor",
  "NarkoVet PRO Anaesthesia Machine with Ventilator",
];
const featuredProducts = featuredProductNames
  .map((name) => products.find((product) => product.name === name))
  .filter((product): product is NonNullable<typeof product> => Boolean(product));

export const metadata: Metadata = {
  title: "Nabuk Distributors Malta — Veterinary Equipment & Diagnostics",
  description: "Advanced veterinary equipment and diagnostics for clinics in Malta and Gozo, with local installation, training and support.",
  alternates: { canonical: "/" },
};

const featuredSolutions = [
  { label: "Diagnostics", category: "Diagnostic systems", title: "Fast, reliable answers while the patient is still in the room.", image: "/images/card-diagnostic-systems.webp", href: "/solutions/diagnostic-systems" },
  { label: "Imaging", category: "Imaging", title: "X-ray and ultrasound specified around your practice.", image: "/images/card-imaging.webp", href: "/solutions/imaging" },
  { label: "Surgical", category: "Surgical instruments", title: "Precision instruments for the theatre.", image: "/images/card-surgical-instruments.webp", href: "/solutions/surgical-instruments" },
  { label: "Rapid testing", category: "Rapid testing", title: "A ten-minute answer that changes the plan.", image: "/images/card-rapid-testing.webp", href: "/solutions/rapid-testing" },
  { label: "Sterilisation", category: "Sterilisation", title: "Sterility you can document, cycle after cycle.", image: "/images/card-sterilisation.webp", href: "/solutions/sterilisation" },
  { label: "Specialist equipment", category: "Specialist equipment", title: "The technologies that let a practice open a whole new service.", image: "/images/card-specialist-equipment.webp", href: "/solutions/specialist-equipment" },
];

// App-style portfolio tiles — each discipline's photo under a brand-tinted
// scrim, with a count chip. `category` drives the chip.
const portfolioTiles = [
  { title: "Laboratory diagnostics", subtitle: "Haematology, microscopy & rapid testing", category: "Diagnostic systems", href: "/solutions/diagnostic-systems", image: "/images/tile-lab-diagnostics.webp" },
  { title: "Diagnostic imaging", category: "Imaging", href: "/solutions/imaging", image: "/images/tile-imaging.webp" },
  { title: "Surgical theatre", category: "Surgical instruments", href: "/solutions/surgical-instruments", image: "/images/tile-surgical.webp" },
  { title: "Sterilisation & hygiene", category: "Sterilisation", href: "/solutions/sterilisation", image: "/images/card-sterilisation.webp" },
  { title: "Clinic & patient care", category: "Clinic & patient care", href: "/solutions/clinic-furniture", image: "/images/card-clinic-furniture.webp" },
  { title: "Specialised disciplines", subtitle: "Dentistry, endoscopy, ophthalmology & more", category: "Specialist equipment", href: "/solutions/specialist-equipment", image: "/images/card-specialist-equipment.webp" },
];

const consultationSteps = [
  { title: "Understand", body: "We begin with your caseload, team, room constraints, current systems and the outcome you want to improve." },
  { title: "Specify", body: "We compare suitable technologies and explain why a particular configuration fits your practice." },
  { title: "Implement", body: "Delivery, installation, commissioning and practical team training are coordinated as one project." },
  { title: "Stay close", body: "On-island after-sales care gives your clinic a clear local contact when questions or service needs arise." },
];

const partnerNames = [
  { name: "Eickemeyer", logo: "/images/partners/eickemeyer-logo.webp", logoClass: "home-logo-image--wide" },
  { name: "Antech Diagnostics", logo: "/images/partners/antech-logo.webp", logoClass: "home-logo-image--antech" },
  { name: "MELAG", logo: "/images/partners/melag-logo.webp", logoClass: "home-logo-image--melag" },
  { name: "Covetrus", logo: "/images/partners/covetrus-logo.webp", logoClass: "home-logo-image--wide" },
  { name: "Veterinary Instrumentation", logo: "/images/partners/vi-logo.webp", logoClass: "home-logo-image--vi" },
];

// Bottom-edge hero marquee — the manufacturers we represent and the
// disciplines they cover, looping slowly under the composition.
const marqueeItems = [
  "Eickemeyer", "Diagnostics", "MELAG", "Imaging", "Veterinary Instrumentation",
  "Surgery", "AL Test", "Sterilisation", "DEMAS", "Dentistry", "Endoscopy", "Anaesthesia",
];

const questions = [
  { question: "What does Nabuk supply?", answer: "Our curated portfolio covers diagnostic systems, blood analysers, imaging, rapid testing, surgical instruments, sterilisation, clinic and patient care, and specialised veterinary equipment." },
  { question: "Why are prices not shown online?", answer: "Clinical equipment is rarely one-size-fits-all. Configuration, installation, training and the clinic’s workflow affect the right recommendation, so we prepare advice around the actual requirement." },
  { question: "Do you install equipment and train the team?", answer: "Where applicable, Nabuk coordinates installation and commissioning, then gives the clinical team practical guidance for confident day-to-day use." },
  { question: "What happens after delivery?", answer: "The relationship continues through local technical guidance, maintenance and after-sales support for the systems and manufacturers we represent." },
  { question: "Do you serve both Malta and Gozo?", answer: "Yes. Nabuk works with veterinary practices across Malta and Gozo, providing one local point of contact throughout the project." },
];

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1} className="editorial-shell">
      <HomeEntrance />
      <section className="home-storefront-hero" aria-labelledby="home-title">
        <div className="editorial-container home-storefront-hero__grid">
          <div className="home-storefront-hero__copy">
            <p className="home-storefront-hero__eyebrow">Veterinary equipment · Malta &amp; Gozo · Since 1996</p>
            <h1 id="home-title">Better equipment for <span>better veterinary care.</span></h1>
            <p>Nabuk helps clinics choose, install and confidently use advanced veterinary technology—with expert local support that continues after delivery.</p>
            <div className="editorial-actions home-storefront-hero__actions">
              <Link className="editorial-button editorial-button--solid" href="/solutions">Browse solutions <span aria-hidden="true">→</span></Link>
              <Link className="editorial-button" href="/contact">Talk to a specialist</Link>
            </div>
            <ul className="home-storefront-hero__proof" aria-label="Why clinics choose Nabuk">
              <li><strong>30</strong><span>years in Malta</span></li>
              <li><strong>8</strong><span>clinical disciplines</span></li>
              <li><strong>1</strong><span>local support team</span></li>
            </ul>
          </div>
          <div className="home-storefront-hero__visual hero-collage" role="img" aria-label="Veterinary equipment supplied by Nabuk — imaging, anaesthesia and patient monitoring">
            <div className="hero-collage__tile hero-collage__tile--a">
              <Image src="/images/products/eickemeyer/hiray-lite-battery-powered-x-ray-machine.webp" alt="" fill priority sizes="(max-width: 900px) 60vw, 30vw" />
            </div>
            <div className="hero-collage__tile hero-collage__tile--b">
              <Image src="/images/products/eickemeyer/eickemeyer-narkovet-pro-anesthesia-machine-with-ventilator-isoflurane.webp" alt="" fill priority sizes="(max-width: 900px) 46vw, 24vw" />
            </div>
            <div className="hero-collage__tile hero-collage__tile--c">
              <Image src="/images/products/eickemeyer/multi-parameter-monitor-epm-12m-vet-incl-ibp-co2-ag-module.webp" alt="" fill sizes="(max-width: 900px) 60vw, 28vw" />
            </div>
            <span className="hero-collage__dot hero-collage__dot--1" aria-hidden="true" />
            <span className="hero-collage__dot hero-collage__dot--2" aria-hidden="true" />
            <svg className="hero-collage__spark hero-collage__spark--1" aria-hidden="true" viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M12 0c.8 6.2 5.8 11.2 12 12-6.2.8-11.2 5.8-12 12-.8-6.2-5.8-11.2-12-12C6.2 11.2 11.2 6.2 12 0z" /></svg>
            <svg className="hero-collage__spark hero-collage__spark--2" aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c.8 6.2 5.8 11.2 12 12-6.2.8-11.2 5.8-12 12-.8-6.2-5.8-11.2-12-12C6.2 11.2 11.2 6.2 12 0z" /></svg>
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
        <section className="editorial-section" aria-label="Nabuk in numbers">
          <div className="section-inner editorial-container">
            <div className="vitals-strip">
              <svg className="vitals-strip__pulse" aria-hidden="true" viewBox="0 0 1440 80" preserveAspectRatio="none">
                <path d="M0,40 H430 l16,-26 20,48 14,-22 h150 l12,-18 18,34 12,-16 h768" fill="none" />
              </svg>
              <div className="vitals-strip__grid">
                <div className="number-stat"><strong data-count-to="1996" data-count-from="1966">1996</strong><span>Established in Malta</span></div>
                <div className="number-stat"><strong data-count-to="30" data-count-from="0">30</strong><span>Years with the profession</span></div>
                <div className="number-stat"><strong data-count-to="2" data-count-from="0">2</strong><span>Islands served</span></div>
                <div className="number-stat"><strong data-count-to="1" data-count-from="0">1</strong><span>Accountable local partner</span></div>
              </div>
            </div>
          </div>
        </section>

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
              {featuredSolutions.slice(0, 4).map((item) => {
                const count = products.filter((product) => product.category === item.category).length;
                return (
                  <Link className="story-card" key={item.label} href={item.href}>
                    <div className="story-card__media">
                      <Image src={item.image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 25vw" />
                    </div>
                    <div className="story-card__content">
                      <h3>{item.label}</h3>
                      <p>{item.title}</p>
                      <span className="story-card__meta">{count} products <i aria-hidden="true">→</i></span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div style={{ marginTop: 42 }}><Link className="editorial-card-link" href="/solutions">View every solution <span aria-hidden="true">↗</span></Link></div>
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
              {portfolioTiles.map(({ title, subtitle, category, href, image }) => {
                const count = products.filter((product) => product.category === category).length;
                return (
                  <Link className="tile" key={title} href={href}>
                    <div className="tile__media">
                      <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 1050px) 50vw, 33vw" />
                    </div>
                    <div className="tile__content">
                      <h3>{title}</h3>
                      {subtitle && <p>{subtitle}</p>}
                      <span className="tile__meta">{count} {count === 1 ? "product" : "products"} <i aria-hidden="true">→</i></span>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div style={{ marginTop: 42 }}><Link className="editorial-card-link" href="/solutions">Explore the full portfolio <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="editorial-section editorial-section--paper" aria-labelledby="home-products-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div>
                <p className="editorial-kicker">Featured products</p>
                <h2 id="home-products-title" className="editorial-heading" style={{ marginTop: 24 }}>Proven systems,<br /><em>ready to specify.</em></h2>
              </div>
              <p className="editorial-copy">A cross-section of the {products.length} systems we supply, install and support — from diagnostics to the theatre. Every product comes with on-island installation, training and after-sales care.</p>
            </div>

            <ul className="product-grid home-product-grid">
              {featuredProducts.map((product) => (
                <li className="product-card" key={product.image}>
                  <div className="product-card__media">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 760px) 50vw, (max-width: 1050px) 33vw, 25vw"
                    />
                  </div>
                  <div className="product-card__info">
                    <h3>{product.name}</h3>
                    <span>{product.brand} · {product.discipline}</span>
                  </div>
                  <Link className="product-card__enquire" href="/contact">
                    <svg viewBox="0 0 16 16" fill="currentColor" width={11} height={11} aria-hidden="true">
                      <path d="M15 1 1 6.5l5.4 2.1L8.5 14 15 1Z" />
                    </svg>
                    Enquire
                  </Link>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 42 }}><Link className="editorial-card-link" href="/solutions">Browse every product <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="editorial-section home-services-section" aria-labelledby="home-services-title">
          <div className="section-inner editorial-container">
            <h2 id="home-services-title" className="sr-only-heading">What Nabuk offers</h2>
            <div className="home-services-grid">
              <Link className="home-service" href="/solutions">
                <span className="home-service__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>
                </span>
                <h3>Products</h3>
                <p>A curated portfolio across eight clinical disciplines — from in-clinic diagnostics to the surgical theatre.</p>
              </Link>
              <Link className="home-service" href="/contact">
                <span className="home-service__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
                </span>
                <h3>Specification advice</h3>
                <p>Systems matched to your caseload, rooms and workflow — before anything is recommended.</p>
              </Link>
              <Link className="home-service" href="/support">
                <span className="home-service__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a4.5 4.5 0 0 0-6 6L3 18l3 3 5.7-5.7a4.5 4.5 0 0 0 6-6L15 12l-3-3 2.7-2.7z"/></svg>
                </span>
                <h3>Installation &amp; training</h3>
                <p>Delivery, commissioning and practical team training coordinated as one project.</p>
              </Link>
              <Link className="home-service" href="/support">
                <span className="home-service__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M4.9 4.9 9.2 9.2M14.8 14.8l4.3 4.3M19.1 4.9l-4.3 4.3M9.2 14.8l-4.3 4.3"/></svg>
                </span>
                <h3>On-island support</h3>
                <p>After-sales care across Malta and Gozo, with one accountable local team to call.</p>
              </Link>
              <Link className="home-service" href="/partners">
                <span className="home-service__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                <h3>International partners</h3>
                <p>Respected specialist manufacturers represented locally, with genuine consumables and parts.</p>
              </Link>
              <Link className="home-service" href="/contact">
                <span className="home-service__badge" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>
                </span>
                <h3>Direct enquiries</h3>
                <p>Write to the team and get a personal reply within one business day.</p>
              </Link>
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
            <ol className="process-line">
              {consultationSteps.map((step, index) => {
                const ongoing = index === consultationSteps.length - 1;
                return (
                  <li className={`process-step${ongoing ? " process-step--ongoing" : ""}`} key={step.title}>
                    <span className="process-step__node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    <h3>{step.title}{ongoing && <em> · ongoing</em>}</h3>
                    <p>{step.body}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="editorial-section editorial-section--paper home-partners-section" aria-labelledby="home-manufacturers-title">
          <div className="section-inner editorial-container">
            <div className="home-partners-head">
              <p className="editorial-kicker">International manufacturers</p>
              <h2 id="home-manufacturers-title" className="editorial-heading home-section-heading">Global expertise.<br /><em>Locally useful.</em></h2>
              <p className="editorial-copy">Nabuk represents respected specialist manufacturers, translating their technology into a recommendation, installation and support relationship that works in Malta.</p>
              <div className="home-partners-action"><Link className="editorial-button" href="/partners">Meet our partners <span aria-hidden="true">↗</span></Link></div>
            </div>
            <div className="home-logo-grid">
              {partnerNames.map((partner) => (
                <Link className="home-logo-card" href="/partners#partner-list" aria-label={`${partner.name} — meet our partners`} key={partner.name}>
                  <Image className={`home-logo-image ${partner.logoClass}`} src={partner.logo} alt={`${partner.name} logo`} fill sizes="(max-width: 620px) 50vw, (max-width: 1050px) 33vw, 20vw" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--mist" aria-labelledby="home-history-title">
          <div className="section-inner editorial-container">
            <div className="history-band">
              <figure className="history-band__figure">
                <Image src="/images/team-history.webp" alt="Veterinary monitors and diagnostic equipment being unboxed in the Nabuk warehouse in Malta" fill sizes="(max-width: 900px) 100vw, 42vw" />
                <figcaption className="history-band__badge"><strong>30</strong><span>years beside<br />the profession</span></figcaption>
              </figure>
              <div className="history-band__copy">
                <p className="editorial-kicker">Established 1996</p>
                <h2 id="home-history-title" className="editorial-heading">Built alongside Malta’s<br /><em>veterinary profession.</em></h2>
                <p className="editorial-copy">Nabuk began by bringing quality veterinary products to the Maltese market. As clinical practice evolved, so did the company—toward diagnostics, imaging, surgery and the specialised infrastructure modern clinics depend on.</p>
                <dl className="history-band__track">
                  <div><dt>Then</dt><dd>Trusted products, education and long-term clinic relationships.</dd></div>
                  <div><dt>Now</dt><dd>Complete clinical technologies with local installation and after-sales care.</dd></div>
                  <div><dt>Always</dt><dd>Practical advice and one accountable team based in Malta.</dd></div>
                </dl>
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
