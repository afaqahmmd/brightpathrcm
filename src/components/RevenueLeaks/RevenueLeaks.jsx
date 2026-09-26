import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import { revenueLeaks, services } from "@/lib/DataStore";
import Reveal from "@/components/Reveal/Reveal";

const RevenueLeaks = () => {
  return (
    <section className="section leaks" aria-labelledby="leaks-title">
      <div className="container leaks__inner">
        <div className="leaks__intro">
          <p className="eyebrow">
            <span className="num">01</span> The problem
          </p>
          <h2 id="leaks-title" className="h2">
            Revenue rarely disappears all at once. <span className="accent">It leaks.</span>
          </h2>
          <p className="lede">
            Most practices don&apos;t have a revenue problem so much as a handful of small, repeatable
            gaps in the claims process. We find them, then close them.
          </p>
        </div>

        <ol className="leaks__list">
          {revenueLeaks.map((leak, i) => {
            const service = services.find((s) => s.id === leak.serviceId);
            return (
              <Reveal as="li" key={leak.id} className="leaks__item" delay={i * 60}>
                <span className="leaks__index mono">{String(i + 1).padStart(2, "0")}</span>
                <div className="leaks__body">
                  <h3 className="leaks__problem">{leak.problem}</h3>
                  <p className="leaks__detail">{leak.detail}</p>
                </div>
                {service && (
                  <Link href={`/services/${service.id}`} className="leaks__fix">
                    <span className="mono">Addressed by</span>
                    <span className="leaks__fix-name">
                      {service.title} <PiArrowUpRight aria-hidden="true" />
                    </span>
                  </Link>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default RevenueLeaks;
