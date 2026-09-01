import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { solutions } from "@/lib/solutions";

const process = [
  { title: "Listen", body: "We understand the clinic, its caseload, team, constraints and ambitions." },
  { title: "Specify", body: "We recommend the right system and explain the reasoning behind it." },
  { title: "Install", body: "We coordinate delivery, installation, commissioning and team training." },
  { title: "Support", body: "Local after-sales care keeps the equipment—and your clinic—moving." },
];

const countFor = (category: string) =>
  products.filter((product) => product.category === category).length;

export function SolutionsSection() {
  return (
    <div className="editorial-shell">
      <section className="page-hero sol-hero" aria-labelledby="solutions-title">
        <div className="editorial-container sol-hero__grid">
          <div className="sol-hero__copy">
            <p className="editorial-kicker">Equipment with a point of view</p>
            <h1 id="solutions-title" className="editorial-title">Every tool has<br /><em>a clinical reason.</em></h1>
            <p className="page-hero-sub editorial-copy">We do not begin with a catalogue. We begin with the way your clinic works, then specify the technology that fits.</p>
            <ul className="sol-hero__chips" aria-label="Browse by discipline">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link href={`/solutions/${solution.slug}`}>
                    {solution.category}
                    <span aria-hidden="true">{countFor(solution.category)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="sol-hero__plate">
            <Image src="/images/blood-analyser-closeup.webp" alt="Veterinary laboratory analysers on a clinic bench" fill priority sizes="(max-width: 900px) 100vw, 44vw" />
            <p className="sol-hero__stat"><strong>{products.length}</strong> products · <strong>{solutions.length}</strong> disciplines</p>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section id="capabilities" className="editorial-section editorial-section--paper" aria-labelledby="capabilities-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">Clinical portfolio</p><h2 id="capabilities-title" className="editorial-heading" style={{ marginTop:24 }}>One practice.<br /><em>Every discipline.</em></h2></div>
              <p className="editorial-copy">Eight disciplines, {products.length} products from the manufacturers we represent. Open a solution to see how we approach it — and the products behind it.</p>
            </div>
            <div className="story-grid">
              {solutions.map((solution) => {
                const count = countFor(solution.category);
                return (
                  <Link className="story-card" key={solution.slug} href={`/solutions/${solution.slug}`}>
                    <div className="story-card__media">
                      <Image src={solution.image} alt="" fill sizes="(max-width:640px) 100vw, (max-width:1050px) 50vw, 25vw" />
                    </div>
                    <div className="story-card__content">
                      <h3>{solution.category}</h3>
                      <p>{solution.lead}</p>
                      <span className="story-card__meta">{count} {count === 1 ? "product" : "products"} <i aria-hidden="true">→</i></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--ink" aria-labelledby="process-title">
          <div className="section-inner editorial-container">
            <div className="editorial-intro">
              <div><p className="editorial-kicker">A considered process</p><h2 id="process-title" className="editorial-heading" style={{ marginTop:24 }}>From question<br />to <em>confidence.</em></h2></div>
              <p className="editorial-copy editorial-copy--inverse">Equipment becomes valuable when it is selected well, integrated thoughtfully and supported properly.</p>
            </div>
            <ol className="process-line">
              {process.map((step, index) => {
                const ongoing = index === process.length - 1;
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

        <section className="editorial-split editorial-section--mist" aria-labelledby="solutions-cta-title">
          <div className="section-inner editorial-split-copy">
            <p className="editorial-kicker">Built around your practice</p>
            <h2 id="solutions-cta-title" className="editorial-heading">Tell us the outcome.<br /><em>We’ll shape the system.</em></h2>
            <p className="editorial-copy">Whether you are opening, upgrading or solving one specific clinical problem, the right conversation comes before the right equipment.</p>
            <div className="editorial-actions"><Link className="editorial-button editorial-button--solid" href="/contact">Discuss your clinic <span aria-hidden="true">↗</span></Link></div>
          </div>
          <div className="editorial-split-visual"><Image src="/images/support-team-training.webp" alt="A Nabuk specialist discussing equipment with a clinic team" fill sizes="(max-width:760px) 100vw, 50vw" /></div>
        </section>
      </div>
    </div>
  );
}
