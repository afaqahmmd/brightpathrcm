import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Plus_Jakarta_Sans, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./styles.scss";
import Navbar from "@/components/Navbar/Navbar";
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

// Runs before paint: marks JS as available (for reveal animations) and applies the saved theme.
const themeInit = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('bp-theme');if(t==='dark'||t==='light')d.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${jakarta.variable} ${manrope.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
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
