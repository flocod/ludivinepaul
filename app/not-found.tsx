import type { Metadata } from "next"
import Link from "next/link"

import { AppHandoff } from "@/components/site/app-handoff"

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
}

export default function NotFound() {
  return (
    <AppHandoff
      label="Page introuvable"
      folio="404"
      title="Rien à cette adresse."
    >
      <p>
        Le lien est peut-être tronqué, ou la page a changé de place. Les
        questions que l&apos;on nous pose le plus souvent attendent dans la{" "}
        <Link href="/faq" className="link-edito">
          FAQ
        </Link>
        .
      </p>
    </AppHandoff>
  )
}
