import PageHeader from "@/components/PageHeader/PageHeader";
import ValuesSection from "@/components/ValuesSection/ValuesSection";
import ServiceSection from "@/components/ServicesSection/ServiceSection";
import CTASection from "@/components/CTASection/CTASection";
import Reveal from "@/components/Reveal/Reveal";
import { siteConfig } from "@/lib/siteConfig";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/about",
  title: "About",
  description:
    "BrightPathRCM is a medical billing and revenue cycle management partner for independent practices, groups and facilities.",
});

const statements = [
  {
    label: "Mission",
    text: "Give every practice we work with a revenue cycle it can see, trust and stop worrying about, so its people can spend their time on patients.",
  },
  {
    label: "Vision",
    text: "A healthcare system where getting paid for good care is predictable, not a second job.",
  },
  {
    label: "Approach",
    text: "Stay current on coding systems, payer rules and regulation; work inside your existing tools; and report back in plain language.",
  },
];

const About = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "About" }]}
        eyebrow={`About ${siteConfig.name}`}
        title={
          <>
            We keep the business side of care <span className="accent">on course.</span>
          </>
        }
        intro="BrightPathRCM is a medical billing and revenue cycle management partner for independent practices, groups and facilities."
      />

      <section className="section about-intro">
        <div className="container about-intro__inner">
          <p className="about-intro__statement">
            Clinicians shouldn&apos;t have to become billing experts to be paid for the care they
            deliver. <span className="accent">That&apos;s our job.</span>
          </p>
          <div className="about-intro__body">
            <p>
              We handle the work between the patient visit and the payment in your account:
              eligibility, coding, charge entry, claim submission, payment posting, A/R follow-up,
              denials and appeals. We also handle the credentialing and prior authorization work that
              keeps claims payable in the first place.
            </p>
            <p>
              Our coding team works with current CPT and ICD-10 standards, and we work inside your
              existing electronic health record and practice management systems rather than asking
              you to change them. The goal is simple: accurate claims, fewer denials, faster
              payment, and complete visibility for you.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--surface statements" aria-label="Mission, vision and approach">
        <div className="container">
          <dl className="statements__list">
            {statements.map((item, i) => (
              <Reveal className="statements__row" key={item.label} delay={i * 80}>
                <dt className="eyebrow">{item.label}</dt>
                <dd>{item.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ValuesSection />

      <ServiceSection number={null} />

      {siteConfig.mapEmbedUrl && (
        <section className="section map-section" aria-labelledby="map-title">
          <div className="container">
            <h2 id="map-title" className="h2">
              Where to find us
            </h2>
            <iframe
              title={`Map showing the ${siteConfig.name} office`}
              className="map-section__frame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={siteConfig.mapEmbedUrl}
            />
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
};

export default About;
