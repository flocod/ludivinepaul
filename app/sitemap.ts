import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/infos-pratiques", priority: 0.9 },
    { path: "/faq", priority: 0.7 },
  ]
  return pages.map((page) => ({
    url: `${site.url}${page.path}`,
    priority: page.priority,
  }))
}
