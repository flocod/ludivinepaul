import type { Metadata } from "next"

import { MotDesMaries } from "@/components/edito/fondatrice"
import {
  InfosCover,
  InfosDouala,
  InfosReponse,
  InfosSommaire,
} from "@/components/infos/infos-sections"
import { pageMetadata } from "@/lib/metadata"

export const metadata: Metadata = pageMetadata({
  title: "Infos pratiques",
  description:
    "Le déroulé du 12 décembre 2026 à Douala, les deux lieux, la tenue, l'hébergement et comment confirmer votre présence au mariage de Ludivine et Paul.",
  path: "/infos-pratiques",
})

export default function InfosPratiquesPage() {
  return (
    <>
      <InfosCover />
      <InfosSommaire />
      <MotDesMaries
        folio={3}
        cta={{ label: "Confirmer ma présence", href: "#reponse" }}
      />
      <InfosDouala />
      <InfosReponse />
    </>
  )
}
