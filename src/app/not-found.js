import Link from "next/link";
import { PiArrowRight } from "react-icons/pi";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container not-found__inner">
        <p className="eyebrow">Error 404</p>
        <h1 className="display">
          This path <span className="accent">doesn&apos;t lead anywhere.</span>
        </h1>
        <p className="lede">The page you&apos;re looking for has moved or never existed.</p>
        <div className="not-found__actions">
          <Link href="/" className="btn btn--lg">
            Back to home <PiArrowRight />
          </Link>
          <Link href="/services" className="link-arrow">
            Browse services
          </Link>
        </div>
      </div>
    </section>
  );
}
