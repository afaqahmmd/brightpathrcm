import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import QACard from "../QACard/QACard";
import { qaArray } from "@/lib/DataStore";
import { siteConfig } from "@/lib/siteConfig";

const QASection = ({ number = "07" }) => {
  return (
    <section className="section section--surface faq" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <div className="faq__intro">
          <p className="eyebrow">
            <span className="num">{number}</span> FAQ
          </p>
          <h2 id="faq-title" className="h2">
            Questions practices ask us <span className="accent">first.</span>
          </h2>
          <div className="faq__ask">
            <p>Don&apos;t see your question?</p>
            <Link href="/contact" className="link-arrow">
              Ask our team directly <PiArrowUpRight />
            </Link>
            {siteConfig.contact.phone && (
              <a href={siteConfig.contact.phoneHref} className="faq__phone mono">
                {siteConfig.contact.phone}
              </a>
            )}
          </div>
        </div>
        <div className="faq__list">
          {qaArray.map((qa) => (
            <QACard qa={qa} key={qa.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QASection;
