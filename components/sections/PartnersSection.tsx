import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: "Eickemeyer", field: "Veterinary instruments · Germany" },
  { name: "Antech", field: "Diagnostics · Global" },
  { name: "Melag", field: "Sterilisation · Germany" },
  { name: "Covetrus", field: "Animal health technology · Global" },
  { name: "Veterinary Instrumentation", field: "Orthopaedics · United Kingdom" },
];

const benefits = [
  { title: "Global standards", body: "Specialist veterinary manufacturers selected for clinical quality, reliability and long-term value.", image: "/images/surgical-instrument.webp" },
  { title: "Local accountability", body: "One Maltese point of contact for advice, installation, escalation and after-sales support.", image: "/images/support-clinic.webp" },
  { title: "Clinical context", body: "Manufacturer knowledge translated into recommendations that fit your caseload and workflow.", image: "/images/veterinary-workstation.webp" },
];

export function PartnersSection() {
  return (
    <div className="editorial-shell">
      <section className="page-hero inner-hero partners-hero" aria-labelledby="partners-title">
        <div className="inner-hero__image"><Image src="/images/map.webp" alt="Global manufacturer network connected to Malta" fill priority sizes="100vw" /></div>
        <div className="inner-hero__content editorial-container">
          <p className="editorial-kicker">Global reach · Maltese responsibility</p>
          <h1 id="partners-title" className="editorial-title">World-class makers.<br /><em>One local partner.</em></h1>
          <p className="page-hero-sub editorial-copy editorial-copy--inverse">We connect Malta’s veterinary profession with respected international manufacturers—and make that global expertise locally useful.</p>
          <div className="editorial-actions"><a className="editorial-button editorial-button--light" href="#partner-list">Meet the partners <span aria-hidden="true">↓</span></a></div>
        </div>
        <p className="inner-hero__side-note">Representation · Specification · Support</p>
      </section>

      <div className="page-content">
        <section id="partner-list" className="editorial-section editorial-section--paper" aria-labelledby="partner-list-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">Who we represent</p><h2 id="partner-list-title" className="editorial-heading" style={{ marginTop:24 }}>Trusted names.<br /><em>Direct relationships.</em></h2></div>
              <p className="editorial-copy">Our manufacturer partnerships give Maltese clinics access to specialist technology, backed by a distributor who understands both the product and the local practice environment.</p>
            </div>
            <div className="partner-wordmarks">
              {partners.map((partner,index) => <article className="partner-wordmark nabuk-card" key={partner.name}><span>Partner · {String(index+1).padStart(2,"0")}</span><strong>{partner.name}</strong><span>{partner.field}</span></article>)}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--mist" aria-labelledby="partner-value-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">The value between worlds</p><h2 id="partner-value-title" className="editorial-heading" style={{ marginTop:24 }}>International expertise.<br /><em>Island-level care.</em></h2></div>
              <p className="editorial-copy">The real benefit is not access alone. It is having someone close who can interpret, coordinate and remain answerable.</p>
            </div>
            <div className="image-card-grid">
              {benefits.map((benefit,index) => <article className="image-card nabuk-card" key={benefit.title}><div className="image-card__visual"><Image src={benefit.image} alt="" fill sizes="(max-width:760px) 100vw, 33vw" /></div><div className="image-card__body"><span className="image-card__meta">Advantage · {String(index+1).padStart(2,"0")}</span><h3>{benefit.title}</h3><p>{benefit.body}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="editorial-split editorial-section--ink" aria-labelledby="partner-new-title">
          <div className="section-inner editorial-split-copy">
            <p className="editorial-kicker">For manufacturers</p>
            <h2 id="partner-new-title" className="editorial-heading">A credible route into <em>Malta’s clinics.</em></h2>
            <p className="editorial-copy editorial-copy--inverse">We offer long-standing veterinary relationships, product introduction, education, installation and after-sales care through one established local team.</p>
            <div className="editorial-actions"><Link className="editorial-button editorial-button--light" href="/contact">Discuss representation <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="editorial-split-visual"><Image src="/images/dog-cat-about-us.webp" alt="A modern veterinary clinic supported by Nabuk" fill sizes="(max-width:760px) 100vw, 50vw" /></div>
        </section>
      </div>
    </div>
  );
}
