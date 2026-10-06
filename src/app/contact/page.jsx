import Link from "next/link";
import { PiEnvelopeSimple, PiPhone, PiMapPin, PiClock } from "react-icons/pi";
import ContactForm from "@/components/ContactForm/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/contact",
  title: "Contact",
  description: "Book a revenue review or ask BrightPathRCM a question about medical billing and revenue cycle management.",
});

const nextSteps = [
  "A member of our team reviews your request.",
  "We confirm a call at your preferred date and time.",
  "On the call, we learn how your billing works today and where it is falling short.",
  "You receive a clear recommendation and proposal.",
];

const Contact = () => {
  const { contact } = siteConfig;

  return (
    <section className="contact">
      <div className="contact__panel">
        <div className="grid-lines" aria-hidden="true" />
        <div className="contact__panel-inner">
          <nav aria-label="Breadcrumb" className="page-header__crumbs mono">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span aria-current="page">Contact</span>
              </li>
            </ol>
          </nav>
          <p className="eyebrow">Book a revenue review</p>
          <h1 className="contact__title">
            Let&apos;s talk about your <span className="accent">revenue cycle.</span>
          </h1>
          <p className="lede">
            Tell us a little about your practice and when you&apos;re free to talk. We&apos;ll come
            prepared.
          </p>

          <div className="contact__steps">
            <p className="contact__steps-label mono">What happens next</p>
            <ol>
              {nextSteps.map((step, i) => (
                <li key={step}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <ul className="contact__details">
            {contact.phone && (
              <li>
                <PiPhone aria-hidden="true" />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
            )}
            {contact.email && (
              <li>
                <PiEnvelopeSimple aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            )}
            {contact.address && (
              <li>
                <PiMapPin aria-hidden="true" />
                {contact.addressHref ? (
                  <a href={contact.addressHref} target="_blank" rel="noopener noreferrer">
                    {contact.address}
                  </a>
                ) : (
                  <span>{contact.address}</span>
                )}
              </li>
            )}
            {contact.hours && (
              <li>
                <PiClock aria-hidden="true" />
                <span>{contact.hours}</span>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="contact__form" id="request">
        <div className="contact__form-inner">
          <h2 className="h3">Request a consultation</h2>
          <p className="muted contact__form-intro">All fields are required unless marked optional.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
