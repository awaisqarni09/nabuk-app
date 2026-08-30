import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { getSolution, solutions } from "@/lib/solutions";
import { ogImages } from "@/lib/seo/og";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.category,
    description: `${solution.summary} ${solution.lead} Supplied, installed and supported in Malta & Gozo by Nabuk Distributors.`,
    alternates: { canonical: `/solutions/${solution.slug}` },
    openGraph: {
      title: `${solution.category} | Nabuk Distributors Malta`,
      description: solution.summary,
      url: `/solutions/${solution.slug}`,
      siteName: "Nabuk Distributors Malta",
      locale: "en_MT",
      type: "website",
      images: ogImages("og-solutions", `Nabuk Distributors Malta — ${solution.category}`),
    },
    twitter: { card: "summary_large_image", images: ["/og/og-solutions.png"] },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const index = solutions.findIndex((entry) => entry.slug === solution.slug);
  const related = products.filter((product) => product.category === solution.category);
  const nextSolution = solutions[(index + 1) % solutions.length];

  return (
    <main id="main-content">
      <div className="editorial-shell">
        <section className="page-hero inner-hero solution-hero" aria-labelledby="solution-title">
          <div className="inner-hero__image">
            <Image src={solution.image} alt="" fill priority sizes="100vw" />
          </div>
          <div className="inner-hero__content editorial-container">
            <nav className="solution-crumb" aria-label="Breadcrumb">
              <Link href="/solutions">Solutions</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{solution.category}</span>
            </nav>
            <p className="editorial-kicker">{String(index + 1).padStart(2, "0")} · {solution.meta}</p>
            <h1 id="solution-title" className="editorial-title">{solution.category}</h1>
            <p className="page-hero-sub editorial-copy editorial-copy--inverse">{solution.lead}</p>
            <div className="editorial-actions">
              <a className="editorial-button editorial-button--light" href="#related">
                View {related.length} {related.length === 1 ? "product" : "products"} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="editorial-section editorial-section--paper" aria-labelledby="solution-approach-title">
            <div className="section-inner editorial-container">
              <div className="solution-discussion">
                <div>
                  <p className="editorial-kicker">Our approach</p>
                  <h2 id="solution-approach-title" className="editorial-heading" style={{ marginTop: 24 }}>
                    Why it matters.<br /><em>How we specify it.</em>
                  </h2>
                </div>
                <div className="solution-discussion__body">
                  {solution.discussion.map((paragraph) => (
                    <p className="editorial-copy" key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="solution-points">
                {solution.considerations.map((point, pointIndex) => (
                  <article className="solution-point" key={point.title}>
                    <b>{String(pointIndex + 1).padStart(2, "0")}</b>
                    <h3>{point.title}</h3>
                    <p>{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="related" className="editorial-section product-library" aria-labelledby="related-title">
            <div className="section-inner editorial-container">
              <div className="editorial-intro">
                <div>
                  <p className="editorial-kicker">Related products</p>
                  <h2 id="related-title" className="editorial-heading" style={{ marginTop: 24 }}>
                    {related.length} {related.length === 1 ? "product" : "products"}<br /><em>in this discipline.</em>
                  </h2>
                </div>
                <p className="editorial-copy">
                  Everything below is supplied through Nabuk with on-island installation and
                  after-sales support. Prices follow the specification — ask us about any product.
                </p>
              </div>

              <ul className="product-grid">
                {related.map((product, productIndex) => (
                  <li className="product-card" key={product.image}>
                    <div className="product-card__visual">
                      <span className="product-card__num" aria-hidden="true">
                        {String(productIndex + 1).padStart(2, "0")} / {String(related.length).padStart(2, "0")}
                      </span>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 760px) 50vw, (max-width: 1050px) 33vw, 25vw"
                      />
                    </div>
                    <div className="product-card__body">
                      <span className="product-card__meta">{product.brand} · {product.discipline}</span>
                      <h3>{product.name}</h3>
                    </div>
                    <Link className="product-card__enquire" href="/contact">
                      <span>Enquire for pricing</span>
                      <i aria-hidden="true">→</i>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="product-note">
                <p className="editorial-copy">
                  Configuration, installation and training shape every recommendation — tell us
                  what your clinic needs and we&apos;ll specify the right system.
                </p>
                <div className="editorial-actions">
                  <Link className="editorial-button editorial-button--solid" href="/contact">
                    Enquire about {solution.category.toLowerCase()} <span aria-hidden="true">↗</span>
                  </Link>
                  <Link className="editorial-button" href={`/solutions/${nextSolution.slug}`}>
                    Next: {nextSolution.category} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
