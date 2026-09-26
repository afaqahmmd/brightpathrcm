import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const ServiceCard = ({ service, index, featured = false }) => {
  return (
    <Link
      href={`/services/${service.id}`}
      className={"service-card" + (featured ? " service-card--featured" : "")}
    >
      <div className="service-card__top">
        <span className="service-card__icon" aria-hidden="true">
          {service.icon}
        </span>
        <span className="service-card__index mono">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__desc">{service.desc}</p>
      </div>
      <span className="service-card__go" aria-hidden="true">
        <PiArrowUpRight />
      </span>
    </Link>
  );
};

export default ServiceCard;
