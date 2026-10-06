import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { siteConfig } from "@/lib/siteConfig";

const CTASection = ({
  title = (
    <>
      Let&apos;s find out where your revenue is <span className="accent">going.</span>
    </>
  ),
  text = "Book a revenue review. We'll walk through your claims workflow, denial patterns and A/R, and show you exactly where the gaps are.",
}) => {
  const { contact } = siteConfig;
  return (
    <section className="cta-band" aria-label="Get started">
      <div className="container cta-band__inner">
        <div className="cta-band__copy">
          <h2 className="h2">{title}</h2>
          <p className="lede">{text}</p>
        </div>
        <div className="cta-band__actions">
          <Link href="/contact" className="btn btn--lg">
            Book Free Consultation <PiArrowRight />
          </Link>
          <div className="cta-band__contact mono">
            {contact.phone && <a href={contact.phoneHref}>{contact.phone}</a>}
            {contact.email && <a href={`mailto:${contact.email}`}>{contact.email}</a>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
