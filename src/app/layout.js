import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./styles.scss";
import Navbar from "@/components/Navbar/Navbar";
import TopBar from "@/components/TopBar/TopBar";
import RouteProgress from "@/components/RouteProgress/RouteProgress";
import Footer from "@/components/Footer/Footer";
import { siteConfig } from "@/lib/siteConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Medical Billing & Revenue Cycle Management`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    description: siteConfig.description,
  },
};

export const viewport = {
  themeColor: "#ffffff",
};

const tawkConfigured =
  process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID && process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID;

// Runs before paint: marks JS as available so .reveal animations only hide content when they can run.
const jsInit = `document.documentElement.classList.add('js');`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${manrope.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsInit }} />
      </head>
      <body>
        <RouteProgress />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <TopBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
        {tawkConfigured && (
          <Script id="tawk" strategy="lazyOnload">
            {`
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function() {
                var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = 'https://embed.tawk.to/${process.env.NEXT_PUBLIC_TWAKTO_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TWAKTO_WIDGET_ID}';
                s1.charset = 'UTF-8';
                s1.setAttribute('crossorigin', '*');
                s0.parentNode.insertBefore(s1, s0);
              })();
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
