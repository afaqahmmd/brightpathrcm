import Link from "next/link";
import { PiArrowRight, PiArrowUpRight } from "react-icons/pi";
import ClaimPath from "./ClaimPath";

const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="grid-lines" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">Medical billing &amp; revenue cycle management</p>
          <h1 id="hero-title" className="display hero__title">
            Every claim on a <span className="accent">clear path</span> to payment.
          </h1>
          <p className="lede hero__lede">
            BrightPathRCM runs your billing, coding, credentialing and follow-up as one accountable
            team, so revenue reaches your practice accurately and on time, and you always know where
            it stands.
          </p>
          <div className="hero__actions">
            <Link href="/contact" className="btn btn--lg">
              BOOK A FREE CONSULTATION <PiArrowRight />
            </Link>
            <Link href="/services" className="link-arrow hero__secondary">
              Explore our services <PiArrowUpRight />
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <ClaimPath />
        </div>
      </div>
    </section>
  );
};

export default Hero;
