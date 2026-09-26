"use client";
import { useId, useState } from "react";
import { PiPlus } from "react-icons/pi";

const QACard = ({ qa }) => {
  const [isOpen, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={"qa-card" + (isOpen ? " open" : "")}>
      <h3 className="qa-card__heading">
        <button
          type="button"
          className="qa-card__toggle"
          aria-expanded={isOpen}
          aria-controls={`${id}-answer`}
          id={`${id}-question`}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span>{qa.question}</span>
          <PiPlus className="qa-card__icon" aria-hidden="true" />
        </button>
      </h3>
      <div
        className="qa-card__answer"
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
      >
        <div>
          <p>{qa.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default QACard;
