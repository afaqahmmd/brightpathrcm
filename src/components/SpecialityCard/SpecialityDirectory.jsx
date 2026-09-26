"use client";
import { useMemo, useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import SpecialityCard from "./SpecialityCard";
import { specialities, specialityCategories } from "@/lib/DataStore";

const ALL = "All";

const SpecialityDirectory = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return specialityCategories
      .filter((cat) => category === ALL || cat === category)
      .map((cat) => ({
        name: cat,
        items: specialities.filter(
          (s) => s.category === cat && (!q || s.title.toLowerCase().includes(q))
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [query, category]);

  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div className="directory">
      <div className="directory__controls">
        <label className="directory__search">
          <PiMagnifyingGlass aria-hidden="true" />
          <span className="sr-only">Search specialties</span>
          <input
            type="search"
            placeholder="Search specialties"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <div className="directory__filters" role="group" aria-label="Filter by category">
          {[ALL, ...specialityCategories].map((cat) => (
            <button
              type="button"
              key={cat}
              className={"chip" + (category === cat ? " is-active" : "")}
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <p className="directory__count mono" aria-live="polite">
        {total} {total === 1 ? "specialty" : "specialties"}
      </p>

      {groups.length === 0 ? (
        <p className="directory__empty">
          No match for &ldquo;{query}&rdquo;. We may still support it. Ask us on the contact page.
        </p>
      ) : (
        <div className="directory__groups">
          {groups.map((group) => (
            <section className="directory__group" key={group.name} aria-label={group.name}>
              <h2 className="directory__group-title">
                {group.name}
                <span className="mono">{String(group.items.length).padStart(2, "0")}</span>
              </h2>
              <ul className="directory__grid">
                {group.items.map((speciality) => (
                  <SpecialityCard speciality={speciality} key={speciality.id} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpecialityDirectory;
