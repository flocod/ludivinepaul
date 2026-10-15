import Link from "next/link"

import {
  Caption,
  Container,
  Photo,
  RunningHead,
} from "@/components/edito/primitives"
import { wedding } from "@/lib/wedding"
import detoure from "@/public/images/couple-detoure-2.png"
import invitation from "@/public/images/invitation.png"
import saveTheDate from "@/public/images/save-the-date.png"

const carnet = [
  {
    name: "Mairie de Logbaba",
    place: "Logbaba, Douala",
    text: "L’état civil, à partir de 10 h 00. Arrivez un peu avant : on se retrouve devant.",
    href: wedding.ceremonies[0].mapUrl,
  },
  {
    name: "Bonanjo",
    place: "Face au Consulat Général de France",
    text: "La bénédiction, à partir de 15 h 00.",
    href: wedding.ceremonies[1].mapUrl,
  },
  {
    name: "Où dormir",
    place: "Bonanjo et Akwa",
    text: "Les hôtels les plus proches du second lieu. Réservez tôt : décembre est un mois chargé.",
    href: undefined,
  },
  {
    name: "S’y rendre",
    place: "Taxi ou voiture",
    text: "L’aéroport international de Douala est à une trentaine de minutes de Bonanjo.",
    href: undefined,
  },
] as const

const esperances = [
  "Se dire oui.",
  "Vous y voir.",
  "Prier ensemble.",
  "Danser.",
  "Et rire, beaucoup.",
] as const

export function Carnet() {
  return (
    <section
      id="le-carnet"
      aria-labelledby="le-carnet-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Le carnet" folio={5} />

        <div className="mt-12 grid grid-cols-12 gap-x-4 lg:mt-16 lg:gap-x-6">
          <h2
            id="le-carnet-title"
            className="display col-span-12 text-[3.25rem] text-balance sm:text-[4.5rem] lg:col-span-8 lg:text-[6.5rem]"
          >
            Le carnet d’adresses
          </h2>
          <p className="col-span-12 mt-6 max-w-[40ch] text-[1.0625rem] leading-[1.7] lg:col-span-5 lg:mt-8 lg:text-[1.125rem]">
            Où célébrer, où dormir, comment venir : les adresses et les repères
            de la journée, sans petit caractère.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-14 lg:mt-20 lg:gap-x-6">
          <figure className="col-span-12 lg:col-span-6">
            <Photo
              src={saveTheDate}
              alt={`Le save-the-date de ${wedding.couple.display}.`}
              sizes="(min-width: 1024px) 380px, 80vw"
              zoom
              className="aspect-[3/4] w-full max-w-[380px]"
            />
            <Caption className="mt-3 max-w-[380px]">
              Notre save-the-date. Il annonce la date&nbsp;; le faire-part dit
              tout le reste.
            </Caption>
          </figure>

          <ul
            data-reveal="leaders"
            className="col-span-12 lg:col-span-5 lg:col-start-8"
          >
            {carnet.map((lieu, i) => (
              <li
                key={lieu.name}
                className="border-t border-gold/70 py-6 first:pt-5 last:pb-0"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
                  <h3 className="display shrink-0 text-[2.125rem] leading-none lg:text-[2.5rem]">
                    {lieu.name}
                  </h3>
                  <span
                    aria-hidden="true"
                    data-leader
                    className="min-w-4 flex-1 translate-y-[-0.3em] border-b border-dotted border-gold"
                  />
                  <span
                    data-leader-label
                    className="ml-auto shrink-0 text-right text-[0.8125rem] text-ink-soft italic"
                  >
                    {lieu.place}
                  </span>
                </div>
                <p className="mt-2.5 text-[0.9375rem] leading-[1.6] text-ink-soft">
                  {lieu.text}
                  {lieu.href ? (
                    <>
                      {" "}
                      <a
                        href={lieu.href}
                        target="_blank"
                        rel="noreferrer"
                        className="link-edito"
                      >
                        Itinéraire
                        <span className="sr-only"> (nouvelle fenêtre)</span>
                      </a>
                    </>
                  ) : null}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-x-4 gap-y-12 lg:mt-28 lg:gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[0.9375rem] leading-[1.6] text-ink-soft">
              Ce que nous espérons de cette journée&nbsp;:
            </p>
            <ul data-reveal="lines" className="mt-4">
              {esperances.map((mot, i) => (
                <li
                  key={mot}
                  className="display text-[2.5rem] leading-[1.08] italic sm:text-[3rem] lg:text-[3.5rem]"
                >
                  <span
                    className="reveal-line"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <span>{mot}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="col-span-12 lg:col-span-6 lg:col-start-7 lg:self-end">
            <div className="grid grid-cols-2 gap-4 sm:max-w-[34rem] lg:gap-6">
              <Photo
                zoom
                src={detoure}
                alt={`${wedding.couple.bride} et ${wedding.couple.groom}, détourés.`}
                sizes="(min-width: 1024px) 260px, 45vw"
                position="50% 20%"
                crop={1}
                ground="var(--paper-deep)"
                className="aspect-[4/5] w-full"
              />
              {/* Un détail du poster : le bas-gauche porte la photo du couple
                  et les roses. */}
              <Photo
                zoom
                src={invitation}
                alt={`Détail du faire-part de ${wedding.couple.display}.`}
                sizes="(min-width: 1024px) 260px, 45vw"
                position="18% 88%"
                crop={1}
                className="aspect-[4/5] w-full lg:mt-16"
              />
            </div>
            <Caption className="mt-3 sm:max-w-[34rem]">
              Le détail du faire-part&nbsp;: la photo, les roses, et le verset.
              Gardez-le, imprimez-le, envoyez-le.
            </Caption>
          </figure>
        </div>

        <p className="mt-16 border-t border-gold/70 pt-5 text-[0.9375rem] leading-[1.6] lg:mt-24">
          Une question qui n’est pas dans ce carnet&nbsp;?{" "}
          <Link href="/faq" className="link-edito">
            Écrivez-nous
          </Link>
        </p>
      </Container>
    </section>
  )
}
