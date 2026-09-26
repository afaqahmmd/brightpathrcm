import { PiCheckBold } from "react-icons/pi";

// Illustrative (not real) claim moving through the revenue cycle.
const stages = [
  { title: "Eligibility verified", detail: "Coverage and benefits confirmed before the visit", status: "Done" },
  { title: "Coded & charges entered", detail: "Documentation reviewed, CPT / ICD-10 assigned", status: "Done" },
  { title: "Scrubbed & submitted", detail: "Checked against payer rules, sent electronically", status: "Done" },
  { title: "Payer follow-up", detail: "Status tracked; denials worked and appealed", status: "Active" },
  { title: "Payment posted", detail: "Remittance reconciled to the patient account", status: "Next" },
];

const ClaimPath = () => {
  return (
    <figure className="claim-path" aria-label="Illustration of a claim moving through the revenue cycle">
      <div className="claim-path__head">
        <div>
          <span className="claim-path__label">Claim lifecycle</span>
          <span className="claim-path__id">CLM · sample</span>
        </div>
        <span className="claim-path__live">
          <span className="dot" aria-hidden="true" />
          In progress
        </span>
      </div>

      <ol className="claim-path__stages">
        {stages.map((stage, i) => (
          <li
            key={stage.title}
            className={`claim-path__stage is-${stage.status.toLowerCase()}`}
            style={{ "--i": i }}
          >
            <span className="claim-path__node" aria-hidden="true">
              {stage.status === "Done" ? <PiCheckBold /> : null}
            </span>
            <div className="claim-path__text">
              <span className="claim-path__title">{stage.title}</span>
              <span className="claim-path__detail">{stage.detail}</span>
            </div>
            <span className="claim-path__status">{stage.status}</span>
          </li>
        ))}
      </ol>

      <figcaption className="claim-path__caption">Illustrative workflow</figcaption>
    </figure>
  );
};

export default ClaimPath;
