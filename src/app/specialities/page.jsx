import { specialities, specialityCategories } from "@/lib/DataStore";
import PageHeader from "@/components/PageHeader/PageHeader";
import SpecialityDirectory from "@/components/SpecialityCard/SpecialityDirectory";
import CTASection from "@/components/CTASection/CTASection";

export const metadata = {
  title: "Specialties",
  description:
    "BrightPathRCM provides billing and revenue cycle management for a wide range of medical and dental specialties.",
};

const Specialities = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Specialties" }]}
        eyebrow="Who we work with"
        title="Billing that understands your specialty."
        intro="Coding rules, documentation requirements and denial patterns differ by specialty. We bring that context to every claim we touch."
        aside={
          <ul className="fact-list">
            <li>
              <span className="fact-list__label">Specialties</span>
              <span className="fact-list__value">{specialities.length} supported</span>
            </li>
            <li>
              <span className="fact-list__label">Categories</span>
              <span className="fact-list__value">{specialityCategories.length} practice types</span>
            </li>
            <li>
              <span className="fact-list__label">Network</span>
              <span className="fact-list__value">In- and out-of-network billing</span>
            </li>
          </ul>
        }
      />
      <section className="section">
        <div className="container">
          <SpecialityDirectory />
        </div>
      </section>
      <CTASection
        title={
          <>
            Don&apos;t see your specialty? <span className="accent">Ask us.</span>
          </>
        }
        text="If your specialty isn't listed, tell us about your practice and we'll let you know how we can help."
      />
    </>
  );
};

export default Specialities;
