import Link from "next/link";
import { PiArrowUpRight, PiEnvelopeSimple, PiPhone, PiMapPin } from "react-icons/pi";
import Logo from "@/components/Logo/Logo";
import { services } from "@/lib/DataStore";
import { navLinks, siteConfig } from "@/lib/siteConfig";

const Footer = () => {
  const { contact, socials } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p>
              Medical billing and revenue cycle management for practices that want every claim
              handled with care, from first visit to final payment.
            </p>
            <Link href="/contact" className="btn">
              Book a revenue review <PiArrowUpRight />
            </Link>
          </div>

          <nav className="site-footer__col" aria-label="Services">
            <h2 className="site-footer__label">Services</h2>
            <ul>
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.id}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Company">
            <h2 className="site-footer__label">Company</h2>
            <ul>
              {navLinks
                .filter((link) => link.id !== "services")
                .map((link) => (
                  <li key={link.id}>
                    <Link href={link.href || link.path}>{link.name}</Link>
                  </li>
                ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <h2 className="site-footer__label">Contact</h2>
            <ul className="site-footer__contact">
              {contact.email && (
                <li>
                  <PiEnvelopeSimple aria-hidden="true" />
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <PiPhone aria-hidden="true" />
                  <a href={contact.phoneHref}>{contact.phone}</a>
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
            </ul>
            {socials.length > 0 && (
              <ul className="site-footer__socials">
                {socials.map((social) => (
                  <li key={social.href}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer">
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="site-footer__bottom">
          <small>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </small>
          <small className="mono">{siteConfig.tagline}</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
