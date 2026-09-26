"use client";
import { useState } from "react";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import { testimonials } from "@/lib/DataStore";

const TestimonialSection = () => {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  if (count === 0) return null;

  const go = (step) => setActive((prev) => (prev + step + count) % count);

  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="container testimonials__inner">
        <div className="testimonials__side">
          <p className="eyebrow">
            <span className="num">06</span> Client voices
          </p>
          <h2 id="testimonials-title" className="sr-only">
            What clients say
          </h2>
          {count > 1 && (
            <div className="testimonials__controls">
              <span className="testimonials__counter mono" aria-hidden="true">
                {String(active + 1).padStart(2, "0")}
                <span> / {String(count).padStart(2, "0")}</span>
              </span>
              <div className="testimonials__buttons">
                <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial">
                  <PiArrowLeft />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next testimonial">
                  <PiArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="testimonials__stage" aria-live="polite">
          <TestimonialCard testimonial={testimonials[active]} key={active} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
