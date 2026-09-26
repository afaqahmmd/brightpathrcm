import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";
import { processSteps } from "@/lib/DataStore";
import Reveal from "@/components/Reveal/Reveal";

const ProcessSection = () => {
  return (
    <section className="section section--tint process" aria-labelledby="process-title">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              <span className="num">03</span> How we work
            </p>
            <h2 id="process-title" className="h2">
              A structured path from <span className="accent">first call</span> to steady cash flow.
            </h2>
          </div>
          <p className="lede">
            Switching billing partners shouldn&apos;t interrupt your revenue. Every engagement follows
            the same four stages, so you know what happens next and who owns it.
          </p>
        </div>

        <ol className="process__steps">
          {processSteps.map((step, i) => (
            <Reveal as="li" className="process__step" key={step.id} delay={i * 120}>
              <span className="process__node" aria-hidden="true" />
              <span className="process__num">{String(step.id).padStart(2, "0")}</span>
              <h3 className="process__title">{step.title}</h3>
              <p className="process__desc">{step.desc}</p>
            </Reveal>
          ))}
        </ol>

        <div className="process__cta">
          <p>Stage one takes a single conversation.</p>
          <Link href="/contact" className="btn">
            Schedule a consultation <PiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
