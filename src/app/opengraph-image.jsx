import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

// Default social-share card for every page that doesn't set its own image.
// Edge runtime: the Node build of @vercel/og fails to prerender on Windows in Next 14.2.
export const runtime = "edge";
export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #050d1c 0%, #102a52 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 20, height: 56, background: "#f26b1d", borderRadius: 4 }} />
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>{siteConfig.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            Medical billing & revenue cycle management
          </div>
          <div style={{ fontSize: 30, color: "#a9b6cc", maxWidth: 940, lineHeight: 1.35 }}>
            Billing, coding, credentialing, prior authorization and denial management.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#ff8a45" }}>
          {siteConfig.url.replace(/^https?:\/\/(www\.)?/, "")}
        </div>
      </div>
    ),
    size
  );
}
