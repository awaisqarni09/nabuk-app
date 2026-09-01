import Link from "next/link";
import { ContactForm } from "@/app/(pages)/contact/ContactForm";

const replySteps = [
  {
    title: "A specialist reads it",
    body: "Your enquiry goes to the person who can answer it — not to an auto-responder or a ticket queue.",
  },
  {
    title: "We come back with advice",
    body: "Usually within one business day, either with a recommendation or with the questions we need answered to give you one.",
  },
  {
    title: "We stay with it",
    body: "Specification, installation, training and after-sales care stay with the same local team.",
    ongoing: true,
  },
];

export function ContactSection() {
  return (
    <div className="editorial-shell">
      <section className="page-hero contact-hero" aria-labelledby="contact-title">
        <div className="editorial-container contact-hero__inner">
          <p className="editorial-kicker">Begin with a conversation</p>
          <h1 id="contact-title" className="editorial-title">Let’s equip <em>what’s next.</em></h1>
          <p className="contact-hero__sub">
            Tell us about the clinic, the challenge or the outcome you want. We come
            back with clear, practical advice — no pressure, no sales script.
          </p>
        </div>
      </section>

      <div className="page-content">
        <section className="editorial-section contact-body" aria-labelledby="contact-form-title">
          <div className="section-inner editorial-container contact-layout">
            {/* ── Primary: the form ── */}
            <div className="contact-panel">
              <div className="contact-panel__head">
                <h2 id="contact-form-title">Tell us what you need</h2>
                <p>
                  Fields marked <span aria-hidden="true">*</span> are required. Everything
                  else just helps us answer you better.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* ── Support rail ── */}
            <aside className="contact-rail" aria-label="Other ways to reach us">
              <div className="contact-direct">
                <a className="contact-direct__card" href="tel:+35699472220">
                  <span className="contact-direct__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .8 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.9.7 2.9.8a2 2 0 0 1 1.6 2z"/></svg>
                  </span>
                  <span className="contact-direct__text">
                    <small>Prefer to talk?</small>
                    <strong>+356 9947 2220</strong>
                  </span>
                </a>
                <a className="contact-direct__card" href="mailto:info@nabukmalta.com">
                  <span className="contact-direct__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
                  </span>
                  <span className="contact-direct__text">
                    <small>Email us directly</small>
                    <strong>info@nabukmalta.com</strong>
                  </span>
                </a>
              </div>

              <div className="contact-next">
                <h3>What happens next</h3>
                <ol className="contact-next__steps">
                  {replySteps.map((step, index) => (
                    <li key={step.title} className={step.ongoing ? "contact-next__step contact-next__step--ongoing" : "contact-next__step"}>
                      <span className="contact-next__node" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <strong>{step.title}{step.ongoing && <em> · ongoing</em>}</strong>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <dl className="contact-facts">
                <div>
                  <dt>Coverage</dt>
                  <dd>Malta &amp; Gozo — clinics island-wide</dd>
                </div>
                <div>
                  <dt>Typical reply</dt>
                  <dd>Within one business day</dd>
                </div>
                <div>
                  <dt>Established</dt>
                  <dd>1996 — three decades on the island</dd>
                </div>
              </dl>

              <p className="contact-rail__note">
                Looking for something specific? <Link href="/solutions">Browse the solutions</Link> first
                and mention it in your message — it helps us prepare.
              </p>
            </aside>
          </div>
        </section>
      </div>
    </div>
  );
}
