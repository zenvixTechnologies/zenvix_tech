import { siteUrl } from "@/components/zenvix/siteConfig";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl && { sitemap: `${siteUrl}/sitemap.xml`, host: siteUrl }),
  };
}
