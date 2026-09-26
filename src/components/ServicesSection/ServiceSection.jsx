import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import ServiceCard from "../ServiceCard/ServiceCard";
import { services } from "@/lib/DataStore";

const FEATURED_ID = 6; // Revenue Cycle Management anchors the ecosystem

const ServiceSection = ({ number = "02" }) => {
  const featured = services.find((s) => s.id === FEATURED_ID);
  const rest = services.filter((s) => s.id !== FEATURED_ID);

  return (
    <section className="section section--surface services-eco" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              {number && <span className="num">{number}</span>} Services
            </p>
            <h2 id="services-title" className="h2">
              One team across the <span className="accent">entire</span> revenue cycle.
            </h2>
          </div>
          <div className="services-eco__aside">
            <p className="lede">
              Use us end to end, or plug us into the part of your workflow that needs it most. Every
              service shares the same team, reporting and standards.
            </p>
            <Link href="/services" className="link-arrow">
              View all services <PiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="services-eco__grid">
          {featured && (
            <ServiceCard service={featured} index={services.indexOf(featured)} featured />
          )}
          {rest.map((service) => (
            <ServiceCard service={service} index={services.indexOf(service)} key={service.id} />
          ))}
          <div className="services-eco__cta">
            <p className="h3">Not sure which service you need?</p>
            <p className="muted">
              Start with a revenue review. We&apos;ll look at your claims workflow and tell you where
              the gaps are.
            </p>
            <Link href="/contact" className="btn btn--navy">
              Book a revenue review <PiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
