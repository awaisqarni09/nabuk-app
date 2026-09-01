import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Installation", body: "Professional setup, commissioning and integration with minimal disruption.", image: "/images/support-installation.webp" },
  { title: "Team training", body: "Practical, hands-on guidance so your team uses every capability with confidence.", image: "/images/support-team-training.webp" },
  { title: "Technical care", body: "Preventive maintenance and responsive local support to protect uptime.", image: "/images/support-technical-care.webp" },
];

const journey = [
  { title: "Consultation", body: "We assess the need and the realities around it." },
  { title: "Specification", body: "A recommendation tailored to the practice." },
  { title: "Installation", body: "Professional setup and commissioning." },
  { title: "After-sales", body: "Ongoing care from a team based in Malta." },
];

export function SupportSection() {
  return (
    <div className="editorial-shell">
      <section className="page-hero support-hero" aria-labelledby="support-title">
        <div className="editorial-container support-hero__grid">
          <div className="support-hero__copy">
            <p className="editorial-kicker">Local, by design</p>
            <h1 id="support-title" className="editorial-title">Support is not<br /><em>an afterthought.</em></h1>
            <p className="page-hero-sub editorial-copy">From the first specification to the tenth service call, your clinic has a knowledgeable team on the island and on your side.</p>
          </div>
          <div className="support-hero__card">
            <span className="support-hero__badge">On-island · Malta &amp; Gozo</span>
            <a className="support-hero__row" href="tel:+35699472220">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 2z"/></svg>
              +356 9947 2220
            </a>
            <a className="support-hero__row" href="mailto:info@nabukmalta.com">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              info@nabukmalta.com
            </a>
            <span className="support-hero__row">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              Reply within one business day
            </span>
            <Link className="editorial-button editorial-button--solid support-hero__cta" href="/contact">Talk to support <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="editorial-section editorial-section--paper" aria-labelledby="support-services-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">Continuity of care</p><h2 id="support-services-title" className="editorial-heading" style={{ marginTop:24 }}>We stay close<br /><em>after go-live.</em></h2></div>
              <p className="editorial-copy">Clinical equipment is only as useful as the confidence, uptime and support around it. We treat those as part of the solution.</p>
            </div>
            <div className="service-grid">
              {services.map((item, index) => (
                <article className="service-card" key={item.title}>
                  <div className="service-card__media">
                    <Image src={item.image} alt="" fill sizes="(max-width:760px) 100vw, 33vw" />
                  </div>
                  <div className="service-card-content">
                    <span className="service-card-index">Service · {String(index + 1).padStart(2, "0")}</span>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--ink" aria-labelledby="support-journey-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">One continuous relationship</p><h2 id="support-journey-title" className="editorial-heading" style={{ marginTop:24 }}>No hand-offs.<br /><em>No disappearing.</em></h2></div>
              <p className="editorial-copy editorial-copy--inverse">The same local accountability runs from the first conversation through installation, training and the life of the equipment.</p>
            </div>
            <ol className="process-line">
              {journey.map((step, index) => {
                const ongoing = index === journey.length - 1;
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

        <section className="editorial-split editorial-section--mist" aria-labelledby="support-learning-title">
          <div className="section-inner editorial-split-copy">
            <p className="editorial-kicker">Beyond the product</p>
            <h2 id="support-learning-title" className="editorial-heading">Supporting the <em>profession itself.</em></h2>
            <p className="editorial-copy">Our history includes seminars, continuing veterinary education and access to international training—because better-equipped people matter as much as better-equipped rooms.</p>
            <div className="editorial-actions"><Link className="editorial-button editorial-button--solid" href="/contact">Talk to support <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="editorial-split-visual"><Image src="/images/card-rapid-testing.webp" alt="Veterinary professional using clinical testing equipment" fill sizes="(max-width:760px) 100vw, 50vw" /></div>
        </section>
      </div>
    </div>
  );
}
