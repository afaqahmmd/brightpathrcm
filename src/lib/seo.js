// SEO helpers: per-page metadata (canonical, Open Graph, Twitter) and schema.org JSON-LD builders.
import { siteConfig } from "@/lib/siteConfig";

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

// Page metadata with a canonical URL and matching social cards.
// `images` is optional; without it pages use the generated /opengraph-image. It must be set
// explicitly because a page-level `openGraph` replaces the layout one rather than merging.
const defaultImages = [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.name }];

export function pageMetadata({
  title,
  description = siteConfig.description,
  path,
  images = defaultImages,
  openGraph = {},
}) {
  // The layout title template only applies to <title>, so brand the social titles here.
  const socialTitle = `${title} | ${siteConfig.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      title: socialTitle,
      description,
      url: path,
      images,
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images,
    },
  };
}

// Plain-text excerpt from an HTML body, for meta descriptions.
export function excerpt(html, max = 155) {
  const text = html
    .replace(/<h2>[\s\S]*?<\/h2>/, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= max) return text;
  return text.slice(0, text.lastIndexOf(" ", max - 1)) + "…";
}

const orgId = absoluteUrl("/#organization");

export function organizationSchema() {
  const { contact } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": orgId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo.jpeg"),
    image: absoluteUrl("/logo.jpeg"),
    ...(contact.email && { email: contact.email }),
    ...(contact.phone && { telephone: contact.phoneHref.replace("tel:", "") }),
    ...(contact.postalAddress && {
      address: { "@type": "PostalAddress", ...contact.postalAddress },
    }),
    areaServed: siteConfig.areaServed,
    ...(siteConfig.socials.length && { sameAs: siteConfig.socials.map((s) => s.href) }),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: siteConfig.name,
    url: absoluteUrl("/"),
    publisher: { "@id": orgId },
    inLanguage: "en-US",
  };
}

// crumbs: [{ name, path }], starting after Home.
export function breadcrumbSchema(crumbs) {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.desc,
    url: absoluteUrl(`/services/${service.id}`),
    image: service.image,
    serviceType: service.title,
    provider: { "@id": orgId },
    areaServed: siteConfig.areaServed,
  };
}

export function blogPostingSchema(blog) {
  const url = absoluteUrl(`/blog/${blog.id}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: excerpt(blog.body),
    image: blog.image,
    datePublished: blog.date,
    dateModified: blog.date,
    author: { "@type": "Organization", name: blog.author },
    publisher: { "@id": orgId },
    mainEntityOfPage: url,
    url,
  };
}

export function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: { "@type": "Answer", text: qa.answer },
    })),
  };
}
