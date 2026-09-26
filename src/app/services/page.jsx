import { services, specialities } from "@/lib/DataStore";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicePageCard from "@/components/ServicePageCard/ServicePageCard";
import CTASection from "@/components/CTASection/CTASection";

export const metadata = {
  title: "Services",
  description:
    "Medical and dental billing, coding, credentialing, prior authorization, virtual assistance, revenue cycle management and denial management from BrightPathRCM.",
};

const Services = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Services" }]}
        eyebrow="What we do"
        title="Revenue cycle services, run by one accountable team."
        intro="Take the full revenue cycle off your plate, or start with the part that is costing you the most. Every service shares the same team, standards and reporting."
        aside={
          <ul className="fact-list">
            <li>
              <span className="fact-list__label">Services</span>
              <span className="fact-list__value">{services.length} core services</span>
            </li>
            <li>
              <span className="fact-list__label">Specialties</span>
              <span className="fact-list__value">{specialities.length} supported</span>
            </li>
            <li>
              <span className="fact-list__label">Engagement</span>
              <span className="fact-list__value">End-to-end or individual services</span>
            </li>
          </ul>
        }
      />

      <section className="section">
        <div className="container">
          <ol className="service-list">
            {services.map((service, index) => (
              <ServicePageCard service={service} index={index} key={service.id} />
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title={
          <>
            Not sure where to start? <span className="accent">Start with a review.</span>
          </>
        }
      />
    </>
  );
};

export default Services;
