// Brand + contact details used across the site.
// TODO(client): replace every placeholder below with verified BrightPathRCM details.
// Empty strings hide the related UI (e.g. no phone → no phone link, no mapEmbedUrl → no map).

export const siteConfig = {
  name: "BrightPathRCM",
  legalName: "BrightPathRCM",
  tagline: "Medical billing & revenue cycle management",
  description:
    "BrightPathRCM manages medical billing, coding, credentialing, prior authorization and denial management so practices get paid accurately and on time.",
  url: "https://www.brightpathrcm.com",

  contact: {
    email: "hello@brightpathrcm.com",
    phone: "+1 (000) 000-0000",
    phoneHref: "tel:+10000000000",
    address: "Office address, City, State ZIP",
    addressHref: "",
    hours: "Monday–Friday, business hours",
  },

  // Google Maps embed URL for the About page. Leave empty to hide the map.
  mapEmbedUrl: "",

  socials: [
    // { label: "LinkedIn", href: "https://www.linkedin.com/company/..." },
  ],
};

export const navLinks = [
  { id: "services", name: "Services", path: "/services" },
  { id: "specialities", name: "Specialties", path: "/specialities" },
  { id: "about", name: "About", path: "/about" },
  { id: "blog", name: "Insights", path: "/blog" },
];
