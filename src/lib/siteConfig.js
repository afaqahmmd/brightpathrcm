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
    email: "info@brightpathrcm.com",
    phone: "720-803-0400",
    phoneHref: "tel:+17208030400",
    address: "1500 N Grant St, Ste R, Denver, CO 80203",
    addressHref:
      "https://www.google.com/maps/search/?api=1&query=1500+N+Grant+St+Ste+R+Denver+CO+80203",
    hours: "Monday–Friday, business hours",
  },

  // Google Maps embed URL for the About page. Leave empty to hide the map.
  mapEmbedUrl: "https://www.google.com/maps?q=1500+N+Grant+St+Ste+R,+Denver,+CO+80203&output=embed",

  socials: [
    // { label: "LinkedIn", href: "https://www.linkedin.com/company/..." },
  ],
};

export const navLinks = [
  { id: "home", name: "Home", path: "/" },
  { id: "services", name: "Services", path: "/services" },
  { id: "specialities", name: "Specialties", path: "/specialities" },
  { id: "about", name: "About", path: "/about" },
  { id: "blog", name: "Insights", path: "/blog" },
  // href jumps straight to the form; path is still used for the active state
  { id: "contact", name: "Contact", path: "/contact", href: "/contact#request" },
];
