import { siteConfig } from "@/lib/siteConfig";

// Vercel preview deployments must not be indexed; only production is crawlable.
const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

export default function robots() {
  if (isPreview) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
