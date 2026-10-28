import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

const siteUrl = "https://booyaa.net";

const routes = [
  "",
  "/about",
  "/services",
  ...services.map((service) => `/services/${service.slug}`),
  "/work",
  "/web-development-edmonton",
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
