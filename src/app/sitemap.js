import { blogs, services } from "@/lib/DataStore";
import { siteConfig } from "@/lib/siteConfig";

export default function sitemap() {
  const url = (path) => `${siteConfig.url}${path}`;
  const now = new Date();

  return [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/specialities"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    ...services.map((service) => ({
      url: url(`/services/${service.id}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...blogs.map((blog) => ({
      url: url(`/blog/${blog.id}`),
      lastModified: new Date(blog.date),
      changeFrequency: "yearly",
      priority: 0.5,
    })),
  ];
}
