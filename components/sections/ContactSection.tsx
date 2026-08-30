import { ContactForm } from "@/app/(pages)/contact/ContactForm";

export function ContactSection() {
  return (
    <div className="editorial-shell">
      <section className="page-hero contact-editorial" aria-labelledby="contact-title">
        <div className="contact-intro">
          <div>
            <p className="editorial-kicker">Begin with a conversation</p>
            <h1 id="contact-title" className="editorial-title">Let’s equip<br /><em>what’s next.</em></h1>
            <p className="page-hero-sub editorial-copy editorial-copy--inverse">Tell us about the clinic, the challenge or the outcome you want. We will come back with clear, practical advice.</p>
          </div>
          <div className="contact-details">
            <div className="contact-detail"><span>Call</span><a href="tel:+35699472220">+356 9947 2220</a></div>
            <div className="contact-detail"><span>Email</span><a href="mailto:info@nabukmalta.com">info@nabukmalta.com</a></div>
            <div className="contact-detail"><span>Coverage</span><p>Malta &amp; Gozo</p></div>
            <div className="contact-detail"><span>Response</span><p>Within one business day</p></div>
          </div>
        </div>
        <div className="contact-form-panel">
          <div className="contact-form-wrap">
            <h2>Tell us what you need.</h2>
            <p>Fields marked with * are required. Every enquiry is handled personally by the Nabuk team.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
