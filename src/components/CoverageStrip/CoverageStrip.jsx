import { services, specialities } from "@/lib/DataStore";

// Scope facts derived from the site's own data — no performance claims.
const CoverageStrip = () => {
  const items = [
    { value: String(services.length).padStart(2, "0"), label: "Core services under one accountable team" },
    { value: String(specialities.length), label: "Medical & dental specialties supported" },
    { value: "In + out", label: "Of-network billing across your payer mix" },
    { value: "End-to-end", label: "From registration and eligibility to final payment" },
  ];

  return (
    <section className="coverage" aria-label="What we cover">
      <div className="container">
        <ul className="coverage__list">
          {items.map((item) => (
            <li key={item.label} className="coverage__item">
              <span className="coverage__value">{item.value}</span>
              <span className="coverage__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoverageStrip;
