import { PiMonitor, PiPlugsConnected } from "react-icons/pi";
import PageHeader from "@/components/PageHeader/PageHeader";
import Reveal from "@/components/Reveal/Reveal";
import CTASection from "@/components/CTASection/CTASection";
import { platformGroups } from "@/lib/DataStore";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  path: "/expertise",
  title: "Our Expertise",
  description:
    "BrightPathRCM works inside leading EHR, practice management, clearinghouse and payer platforms, so you can keep the system you already use.",
});

const groupIcons = { ehr: <PiMonitor />, clearinghouses: <PiPlugsConnected /> };

const Expertise = () => {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Our Expertise" }]}
        eyebrow="Our Expertise"
        title={
          <>
            EHR & <span className="accent">Practice Management</span> Systems
          </>
        }
        intro="We are experienced with leading EHR and practice management platforms, ensuring accurate charge capture, clean claims and efficient revenue cycles. You can keep the system you already use; our team knows it inside and out."
        aside={
          <ul className="fact-list">
            {platformGroups.map((group) => (
              <li key={group.id}>
                <span className="fact-list__label">{group.title}</span>
                <span className="fact-list__value">{group.platforms.length} platforms</span>
              </li>
            ))}
            <li>
              <span className="fact-list__label">Your system</span>
              <span className="fact-list__value">No migration required</span>
            </li>
          </ul>
        }
      />

      <section className="section expertise" aria-labelledby="platforms-title">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Platforms</p>
              <h2 id="platforms-title" className="h2">
                Platforms we <span className="accent">work with.</span>
              </h2>
            </div>
            <p className="lede">
              Our team has hands-on experience with the following EHR, practice management, billing
              and clearinghouse platforms.
            </p>
          </div>

          <div className="expertise__groups">
            {platformGroups.map((group, i) => (
              <Reveal key={group.id} delay={i * 80}>
                <article className="platform-group">
                  <div className="platform-group__head">
                    <span className="platform-group__icon" aria-hidden="true">
                      {groupIcons[group.id]}
                    </span>
                    <span className="platform-group__count mono">
                      {String(group.platforms.length).padStart(2, "0")} platforms
                    </span>
                  </div>
                  <h3 className="h3">{group.title}</h3>
                  <p className="platform-group__desc">{group.desc}</p>
                  <ul className="platform-group__list">
                    {group.platforms.map((platform) => (
                      <li key={platform}>{platform}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            Using a system that isn&apos;t listed? <span className="accent">Ask us.</span>
          </>
        }
        text="Tell us which EHR, practice management or clearinghouse platform you use and we'll let you know how we can work with it."
      />
    </>
  );
};

export default Expertise;
