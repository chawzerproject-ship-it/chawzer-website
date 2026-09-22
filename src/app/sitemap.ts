import { MetadataRoute } from "next";
import { APPS_DATA } from "@/data/apps";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chawzer.vercel.app";

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gizlilik`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kullanim-sartlari`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const appRoutes: MetadataRoute.Sitemap = APPS_DATA.map((app) => ({
    url: `${baseUrl}/gizlilik/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...appRoutes];
}
