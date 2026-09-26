import Image from "next/image";
import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";

const ServicePageCard = ({ service, index }) => {
  return (
    <li className="service-row">
      <Link href={`/services/${service.id}`} className="service-row__link">
        <span className="service-row__index mono">{String(index + 1).padStart(2, "0")}</span>
        <div className="service-row__main">
          <h2 className="service-row__title">
            <span className="service-row__icon" aria-hidden="true">
              {service.icon}
            </span>
            {service.title}
          </h2>
          <p className="service-row__desc">{service.desc}</p>
          <ul className="service-row__tags" aria-label="Topics">
            {service.tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="service-row__media duotone">
          <Image src={service.image} alt="" fill sizes="(min-width: 900px) 280px, 100vw" />
        </div>
        <span className="service-row__go" aria-hidden="true">
          <PiArrowUpRight />
        </span>
      </Link>
    </li>
  );
};

export default ServicePageCard;
