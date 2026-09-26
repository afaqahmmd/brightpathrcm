import Image from "next/image";

const SubHero = () => {
	return (
		<div className="sub-hero-container">
			<div className="vmc-container">
				<div className="vmc">
					<div className="title">
						Our <span className="c-primary">Mission</span>{" "}
					</div>
					<p className="desc">
						At MBS, our mission is to deliver exceptional service and support to
						our clients while maintaining the highest standards of integrity and
						professionalism. We are committed to building long-lasting
						relationships based on trust, transparency, and accountability.
					</p>
				</div>
				<div className="vmc">
					<div className="title">
						Work <span className="c-primary">Vision </span>{" "}
					</div>
					<p className="desc">
						We aspire to revolutionize the healthcare billing industry through
						innovative approaches that enable healthcare providers to achieve
						sustainable financial success. Our aim is to be recognized as the
						most trusted and respected medical billing and dental billing
						company, dedicated to excellence, honesty, and client satisfaction.
					</p>
				</div>
				<div className="vmc">
					<div className="title">
						Core <span className="c-primary">Values</span>
					</div>
					<p className="desc">
						We are committed to leading the industry in technology, trends, and
						regulatory compliance. By continually innovating, we ensure that our
						clients receive superior service and support.
					</p>
				</div>
			</div>

			<div className="billing-section">
				<div className="image-container">
					<Image
						src="/billing.jpg"
						alt="alt"
						fill
						className="bill-img"
						priority={true}
					/>
				</div>
				<div className="text-container">
					<div className="heading">
						Accurate Medical and Dental Billing Services{" "}
					</div>
					<p>
						Welcome to <b>Advanced RCM Solutions LLC</b>, your premier
						medical and dental billing company. With over a decade of industry
						experience, we have established a reputation for delivering the
						highest quality service, ensuring complete client satisfaction.{" "}
						<br />
						<br />
						Our team of experts provides a comprehensive range of medical and
						dental billing services, including billing, coding, and collections.
						We also specialize in Credentialing, Denial Management, Account
						Receivable, and Virtual Medical Scribes. We understand the
						challenges of running a medical practice, so we work closely with
						our clients to ensure their billing and coding are accurate and
						current. <br />
						<br />
						<b>Advanced RCM Solutions LLC</b> offers advanced and
						high-quality practice management services to a wide array of medical
						and non-medical specialties, including physiotherapy, orthopedics,
						dermatology, neurology, psychology, cardiology, oncology, family
						medicine, internal medicine, allergy and immunology, neonatology,
						pathology, urology, endocrinology, gynecology, and many more.
					</p>
				</div>
			</div>
		</div>
	);
};

export default SubHero;
