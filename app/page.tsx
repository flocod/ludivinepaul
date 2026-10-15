import type { Metadata } from "next"

import { Arrivee } from "@/components/edito/arrivee"
import { Carnet } from "@/components/edito/carnet"
import { Cover } from "@/components/edito/cover"
import { Douala } from "@/components/edito/douala"
import { Essentiel } from "@/components/edito/essentiel"
import { MotDesMaries } from "@/components/edito/fondatrice"
import { Moment } from "@/components/edito/moment"
import { Questions } from "@/components/edito/questions"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Page() {
  return (
    <>
      <Cover />
      <Moment />
      <Arrivee />
      <Douala />
      <Carnet />
      <MotDesMaries />
      <Essentiel />
      <Questions />
    </>
  )
}
