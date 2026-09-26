import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import { specialities } from "@/lib/DataStore";

const SpecialtiesPreview = () => {
  return (
    <section className="section specialties-preview" aria-labelledby="specialties-title">
      <div className="container specialties-preview__inner">
        <div className="specialties-preview__intro">
          <p className="eyebrow">
            <span className="num">04</span> Specialties
          </p>
          <h2 id="specialties-title" className="h2">
            Fluent in the billing rules of{" "}
            <span className="accent">{specialities.length} specialties.</span>
          </h2>
          <p className="lede">
            Every specialty codes, documents and gets denied differently. We bring that context to
            your claims from day one.
          </p>
          <Link href="/specialities" className="link-arrow">
            Browse specialties by category <PiArrowUpRight />
          </Link>
        </div>

        <ul className="specialties-preview__cloud" aria-label="Specialties we support">
          {specialities.map((speciality) => (
            <li key={speciality.id}>{speciality.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SpecialtiesPreview;
