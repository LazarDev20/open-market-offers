import type { MetadataRoute } from "next";
import { SITE, CITIES, SITUATIONS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages = ["", "/how-it-works", "/about", "/reviews", "/contact", "/privacy", "/terms"];
  const now = new Date();
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      priority: p === "" ? 1 : 0.7,
    })),
    ...CITIES.map((c) => ({
      url: `${base}/we-buy-houses/${c.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...SITUATIONS.map((s) => ({
      url: `${base}/sell/${s.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
