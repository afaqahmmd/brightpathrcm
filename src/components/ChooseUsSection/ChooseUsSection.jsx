import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import ChooseUsCard from "../ChooseUsCard/ChooseUsCard";
import { whyChooseUs } from "@/lib/DataStore";

const ChooseUsSection = () => {
  return (
    <section className="section section--surface why" aria-labelledby="why-title">
      <div className="container why__inner">
        <div className="why__intro">
          <p className="eyebrow">
            <span className="num">05</span> Why BrightPathRCM
          </p>
          <h2 id="why-title" className="h2">
            A billing partner, <span className="accent">not a billing vendor.</span>
          </h2>

          <aside className="why__pricing" aria-label="Pricing">
            <p className="why__pricing-label mono">Pricing</p>
            <p>
              Pricing is scoped to your practice: its size, specialty, payer mix and the services you
              need. After a revenue review you get a clear written proposal.
            </p>
            <Link href="/contact" className="link-arrow">
              Request a proposal <PiArrowUpRight />
            </Link>
          </aside>
        </div>

        <ol className="why__list">
          {whyChooseUs.map((reason, index) => (
            <ChooseUsCard reason={reason} index={index} key={reason.title} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ChooseUsSection;
