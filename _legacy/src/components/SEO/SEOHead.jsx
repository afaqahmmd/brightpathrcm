import Head from "next/head";

const structuredData = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "Advanced RCM Solutions",
  url: "https://example.com",
  description:
    "Advanced RCM Solutions LLC offers medical billing and coding services with enhanced client engagement through Tawk.to's live chat and support.",
  sameAs: [
    "https://www.facebook.com/your-profile",
    "https://www.twitter.com/your-profile",
    "https://www.linkedin.com/your-profile",
  ],
};

const SEOHead = ({ seoData }) => (
  <Head>
    <title>{`${seoData.pageTitle} | Advanced RCM Solutions`}</title>
    <meta
      name="description"
      content="Advanced RCM Solutions LLC provides medical billing and coding services."
    />
    <meta
      name="keywords"
      content="medical billing, coding, customer engagement, live chat, Tawk.to, client interaction, healthcare solutions"
    />
    <meta name="author" content="Advanced RCM Solutions" />
    <meta property="og:title" content="Advanced RCM Solutions" />
    <meta
      property="og:description"
      content="Advanced RCM Solutions LLC offers comprehensive medical billing services. Enhance client engagement with Tawk.to's live chat and support, optimizing communication and boosting client satisfaction."
    />
    <meta property="og:image" content="https://example.com/og-image.jpg" />
    <meta property="og:url" content="https://example.com" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="canonical" href="https://example.com" />
    {/* <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    /> */}
  </Head>
);

export default SEOHead;
