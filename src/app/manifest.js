import { siteConfig } from "@/lib/siteConfig";

export default function manifest() {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a1b37",
    icons: [{ src: "/logo.jpeg", sizes: "any", type: "image/jpeg" }],
  };
}
