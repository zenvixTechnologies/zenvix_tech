import { portfolioProjects } from "@/components/zenvix/portfolioData";
import { absoluteUrl, siteUrl } from "@/components/zenvix/siteConfig";

// Sitemaps need absolute URLs, so entries are only listed once NEXT_PUBLIC_SITE_URL is set.
// "/zenvix" is omitted on purpose: it duplicates "/" and canonicalises to it.
export default function sitemap() {
  if (!siteUrl) return [];
  const lastModified = new Date();

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    ...portfolioProjects.map((project) => ({
      url: absoluteUrl(`/zenvix/projects/${project.slug}`),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
      images: [absoluteUrl(project.image)],
    })),
  ];
}
