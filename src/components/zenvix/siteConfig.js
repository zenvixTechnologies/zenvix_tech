// Single source of truth for brand + contact details used across the site.
export const site = {
  name: "Zenvix",
  tagline: ["Design", "Develop", "Deliver"],
  signature: "Engineered for the Digital Aurora.",
  email: "zenvix2026@gmail.com",
  whatsappNumber: "919074025279",
  whatsappDisplay: "+91 90740 25279",
  phones: [
    { display: "+971 55 944 7696", tel: "+971559447696" },
    { display: "+91 90740 25279", tel: "+919074025279" },
  ],
};

/**
 * Public production origin, e.g. "https://www.example.com" (no trailing slash).
 * Set NEXT_PUBLIC_SITE_URL in the hosting environment. Canonical URLs, Open Graph
 * images, the sitemap and absolute JSON-LD URLs are only emitted when it is set,
 * so a missing value never publishes localhost URLs.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "") || null;

/** Absolute URL for a path when the site URL is known, otherwise null. */
export const absoluteUrl = (path = "/") => (siteUrl ? `${siteUrl}${path}` : null);

export const whatsappLink = (text) =>
  `https://wa.me/${site.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const navItems = [
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Tech", id: "tech" },
];

/** Home lives at "/" and "/zenvix"; on any other route, anchors point back home. */
export const sectionHref = (pathname, id) =>
  pathname === "/" || pathname === "/zenvix" ? `#${id}` : `/zenvix#${id}`;
