import { absoluteUrl, site, siteUrl } from "./siteConfig";

export const siteDescription =
  "Zenvix is a premium web development agency building high-performance websites, web apps and mobile apps with intuitive UI/UX design.";

/** Adds a canonical link only when the production origin is configured. */
export const canonical = (path) => (siteUrl ? { alternates: { canonical: path } } : {});

const organization = () => ({
  "@type": "Organization",
  name: site.name,
  description: siteDescription,
  email: site.email,
  telephone: site.phones.map((phone) => phone.tel),
  contactPoint: site.phones.map((phone) => ({
    "@type": "ContactPoint",
    telephone: phone.tel,
    email: site.email,
    contactType: "sales",
  })),
  ...(siteUrl && { url: siteUrl, logo: absoluteUrl("/zenvix/logo.png") }),
});

export const organizationJsonLd = () => ({
  "@context": "https://schema.org",
  "@graph": [
    organization(),
    ...(siteUrl
      ? [{ "@type": "WebSite", name: site.name, url: siteUrl, description: siteDescription }]
      : []),
  ],
});

export const caseStudyJsonLd = (project) => {
  const pageUrl = absoluteUrl(`/zenvix/projects/${project.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        name: `${project.title} — Case Study`,
        headline: `${project.title} — ${project.eyebrow}`,
        description: project.overview,
        keywords: project.tags.join(", "),
        creator: { "@type": "Organization", name: site.name, ...(siteUrl && { url: siteUrl }) },
        about: { "@type": "WebSite", name: project.title, url: project.liveUrl },
        ...(pageUrl && { url: pageUrl, image: absoluteUrl(project.image) }),
      },
      ...(siteUrl
        ? [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
                { "@type": "ListItem", position: 2, name: "Portfolio", item: absoluteUrl("/zenvix#portfolio") },
                { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
              ],
            },
          ]
        : []),
    ],
  };
};
