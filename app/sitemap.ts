import type { MetadataRoute } from "next";

const siteUrl = "https://booyaa.net";

const routes = [
  "",
  "/about",
  "/features",
  "/products",
  "/quote",
  "/safe-home-restoration",
  "/caroline-does-numbers",
  "/otto",
  "/midoid",
  "/download",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/quote" ? 0.9 : 0.7,
  }));
}
