import type { Metadata } from "next"

import { wedding } from "@/lib/wedding"

/**
 * Métadonnées d'une page : titre, description, URL canonique et carte de
 * partage. L'image Open Graph n'est pas listée ici — elle vient de la
 * convention `app/opengraph-image.tsx`, qui se propage à toutes les pages.
 */
export function pageMetadata({
  title,
  description,
  path,
  shareTitle,
}: {
  title: string
  description: string
  path: string
  shareTitle?: string
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: wedding.couple.display,
      url: path,
      title: shareTitle ?? `${title} | ${wedding.couple.display}`,
      description,
    },
  }
}
