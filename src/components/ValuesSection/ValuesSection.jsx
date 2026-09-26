import ValueCard from "../ValueCard/ValueCard";
import { values } from "@/lib/DataStore";

const ValuesSection = ({ number }) => {
  return (
    <section className="section section--tint values" aria-labelledby="values-title">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">
              {number && <span className="num">{number}</span>} Principles
            </p>
            <h2 id="values-title" className="h2">
              What we hold ourselves to on <span className="accent">every claim.</span>
            </h2>
          </div>
        </div>
        <ol className="values__list">
          {values.map((value) => (
            <ValueCard value={value} key={value.id} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ValuesSection;
