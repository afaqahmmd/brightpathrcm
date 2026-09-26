import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { services } from "@/lib/DataStore";
import PageHeader from "@/components/PageHeader/PageHeader";
import CTASection from "@/components/CTASection/CTASection";

const findService = (id) => services.find((service) => service.id == id);

export function generateStaticParams() {
  return services.map((service) => ({ id: String(service.id) }));
}

export function generateMetadata({ params }) {
  const service = findService(params.id);
  if (!service) return {};
  return { title: service.title, description: service.desc };
}

const SingleService = ({ params }) => {
  const service = findService(params.id);
  if (!service) notFound();

  const index = services.indexOf(service);
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];

  return (
    <>
      <PageHeader
        compact
        crumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={`Service ${String(index + 1).padStart(2, "0")}`}
        title={service.title}
        intro={service.desc}
        aside={
          <div className="service-aside">
            <ul className="service-aside__tags" aria-label="Topics">
              {service.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <Link href="/contact" className="btn">
              Discuss this service <PiArrowRight />
            </Link>
          </div>
        }
      />

      <section className="section service-detail">
        <div className="container service-detail__inner">
          <article className="service-detail__article">
            <div className="service-detail__media duotone">
              <Image src={service.image} alt="" fill priority sizes="(min-width: 1120px) 760px, 100vw" />
            </div>
            <div className="prose">{parse(service.body)}</div>
          </article>

          <aside className="service-detail__side">
            <nav aria-label="All services" className="side-nav">
              <p className="side-nav__label mono">All services</p>
              <ul>
                {services.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/services/${item.id}`}
                      className={item.id === service.id ? "active" : undefined}
                      aria-current={item.id === service.id ? "page" : undefined}
                    >
                      <span aria-hidden="true">{item.icon}</span>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="side-cta">
              <p className="side-cta__title">Talk to a specialist about {service.title.toLowerCase()}.</p>
              <Link href="/contact" className="btn btn--block">
                Book a revenue review <PiArrowRight />
              </Link>
            </div>
          </aside>
        </div>

        <div className="container">
          <nav className="pager" aria-label="More services">
            <Link href={`/services/${prev.id}`} className="pager__link">
              <span className="mono">
                <PiArrowLeft aria-hidden="true" /> Previous
              </span>
              <span className="pager__title">{prev.title}</span>
            </Link>
            <Link href={`/services/${next.id}`} className="pager__link pager__link--next">
              <span className="mono">
                Next <PiArrowRight aria-hidden="true" />
              </span>
              <span className="pager__title">{next.title}</span>
            </Link>
          </nav>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default SingleService;
