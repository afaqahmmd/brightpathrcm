import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";
import { siteConfig } from "@/lib/siteConfig";

// Slim contact strip above the sticky header. It scrolls away; the header stays.
const TopBar = () => {
  const { contact } = siteConfig;
  if (!contact.address && !contact.phone && !contact.email) return null;

  return (
    <div className="top-bar">
      <div className="container top-bar__inner">
        {contact.address && (
          <a
            href={contact.addressHref || undefined}
            className="top-bar__item top-bar__address"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiMapPin aria-hidden="true" />
            {contact.address}
          </a>
        )}
        <div className="top-bar__group">
          {contact.phone && (
            <a href={contact.phoneHref} className="top-bar__item">
              <PiPhone aria-hidden="true" />
              {contact.phone}
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="top-bar__item">
              <PiEnvelopeSimple aria-hidden="true" />
              {contact.email}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
