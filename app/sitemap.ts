import type { MetadataRoute } from "next";
import { NICHES } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    { url: `${SITE_URL}/sobre`, priority: 0.7 },
    ...NICHES.map((n) => ({
      url: `${SITE_URL}/para/${n.slug}`,
      priority: 0.8,
    })),
  ];
}
