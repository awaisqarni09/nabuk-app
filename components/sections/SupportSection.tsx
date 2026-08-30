import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Installation", body: "Professional setup, commissioning and integration with minimal disruption.", image: "/images/diagnostic-system.webp" },
  { title: "Team training", body: "Practical, hands-on guidance so your team uses every capability with confidence.", image: "/images/nabuk-team.webp" },
  { title: "Technical care", body: "Preventive maintenance and responsive local support to protect uptime.", image: "/images/support-clinic.webp" },
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
      <section className="page-hero inner-hero" aria-labelledby="support-title">
        <div className="inner-hero__image"><Image src="/images/support-banner.webp" alt="Veterinary equipment support in a modern clinic" fill priority sizes="100vw" /></div>
        <div className="inner-hero__content editorial-container">
          <p className="editorial-kicker">Local, by design</p>
          <h1 id="support-title" className="editorial-title">Support is not<br /><em>an afterthought.</em></h1>
          <p className="page-hero-sub editorial-copy editorial-copy--inverse">From the first specification to the tenth service call, your clinic has a knowledgeable team on the island and on your side.</p>
        </div>
        <div className="support-orbit" aria-hidden="true"><strong>One<br />team</strong><span>Specify</span><span>Install</span><span>Train</span><span>Support</span></div>
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
                <article className="service-card nabuk-card" key={item.title}>
                  <Image src={item.image} alt="" fill sizes="(max-width:760px) 100vw, 40vw" />
                  <div className="service-card-content"><span className="service-card-index">Service · {String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></div>
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
            <div className="process-rail">{journey.map((step,index) => <article className="process-step" key={step.title}><b>{String(index+1).padStart(2,"0")}</b><h3>{step.title}</h3><p>{step.body}</p></article>)}</div>
          </div>
        </section>

        <section className="editorial-split editorial-section--mist" aria-labelledby="support-learning-title">
          <div className="section-inner editorial-split-copy">
            <p className="editorial-kicker">Beyond the product</p>
            <h2 id="support-learning-title" className="editorial-heading">Supporting the <em>profession itself.</em></h2>
            <p className="editorial-copy">Our history includes seminars, continuing veterinary education and access to international training—because better-equipped people matter as much as better-equipped rooms.</p>
            <div className="editorial-actions"><Link className="editorial-button editorial-button--solid" href="/contact">Talk to support <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="editorial-split-visual"><Image src="/images/rapid-testing.webp" alt="Veterinary professional using clinical testing equipment" fill sizes="(max-width:760px) 100vw, 50vw" /></div>
        </section>
      </div>
    </div>
  );
}
