import Hero from "@/components/Hero/Hero";
import CoverageStrip from "@/components/CoverageStrip/CoverageStrip";
import RevenueLeaks from "@/components/RevenueLeaks/RevenueLeaks";
import ServiceSection from "@/components/ServicesSection/ServiceSection";
import ProcessSection from "@/components/ProcessSection/ProcessSection";
import SpecialtiesPreview from "@/components/SpecialtiesPreview/SpecialtiesPreview";
import ChooseUsSection from "@/components/ChooseUsSection/ChooseUsSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import QASection from "@/components/QASection/QASection";
import CTASection from "@/components/CTASection/CTASection";
import JsonLd from "@/components/JsonLd/JsonLd";
import { qaArray } from "@/lib/DataStore";
import { faqSchema } from "@/lib/seo";

// Title, description and social tags come from the root layout defaults.
export const metadata = {
  alternates: { canonical: "/" },
};

const Home = () => {
  return (
    <>
      <JsonLd data={faqSchema(qaArray)} />
      <Hero />
      <CoverageStrip />
      <RevenueLeaks />
      <ServiceSection />
      <ProcessSection />
      <SpecialtiesPreview />
      <ChooseUsSection />
      <TestimonialSection />
      <QASection />
      <CTASection />
    </>
  );
};

export default Home;
