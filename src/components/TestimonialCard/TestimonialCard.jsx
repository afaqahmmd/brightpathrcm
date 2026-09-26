const TestimonialCard = ({ testimonial }) => {
  return (
    <figure className="testimonial">
      <span className="testimonial__mark" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="testimonial__quote">
        <p>{testimonial.desc}</p>
      </blockquote>
      <figcaption className="testimonial__by">
        <span className="testimonial__avatar" aria-hidden="true">
          {testimonial.name
            .split(" ")
            .map((part) => part[0])
            .slice(0, 2)
            .join("")}
        </span>
        <span>
          <span className="testimonial__name">{testimonial.name}</span>
          {testimonial.role && <span className="testimonial__role">{testimonial.role}</span>}
        </span>
        {testimonial.placeholder && <span className="sample-badge">Sample</span>}
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
