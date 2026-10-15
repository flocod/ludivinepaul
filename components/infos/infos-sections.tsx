import Link from "next/link"

import {
  Caption,
  Container,
  Photo,
  RunningHead,
} from "@/components/edito/primitives"
import { Countdown } from "@/components/infos/countdown"
import { InvitationCard } from "@/components/infos/invitation-card"
import { WhatsAppLink } from "@/components/site/contact-links"
import { buttonVariants } from "@/components/ui/button"
import { typo } from "@/lib/typo"
import { ceremonies, wedding } from "@/lib/wedding"
import detoure from "@/public/images/couple-detoure.png"
import portrait from "@/public/images/couple-portrait.png"
import saveTheDate from "@/public/images/save-the-date.png"

const [civil, benediction] = ceremonies

/* ——— Couverture du numéro spécial ——— */

export function InfosCover() {
  return (
    <section aria-labelledby="infos-title" className="pb-16 lg:pb-20">
      <Container>
        <div className="flex items-baseline justify-between gap-6 border-t border-gold/70 pt-3 text-[0.8125rem] leading-none text-ink-soft">
          <span>Numéro spécial&nbsp;: infos pratiques</span>
          <span className="hidden sm:inline">
            {wedding.city.name}, {wedding.city.country}
          </span>
        </div>

        {/*
          La photo a remplacé la devanture illustrée : plus de seuil de pierre
          clair sur lequel remonter le titre, donc plus de recouvrement.
        */}
        <div className="@container mt-8 flex flex-col lg:mt-12 xl:grid xl:grid-cols-12 xl:gap-x-6">
          <h1
            id="infos-title"
            className="cover-title-block display relative z-10 order-2 mt-6 max-w-[11em] text-[13cqw] text-balance sm:text-[9.5cqw] lg:max-w-none lg:text-[7.6cqw] xl:order-none xl:col-[1/span_6] xl:row-start-1 xl:mt-0 xl:text-[4.4cqw]"
          >
            Tout pour venir le 12 décembre.
          </h1>

          <div className="order-3 mt-10 max-w-[30rem] xl:col-[1/span_5] xl:row-start-2 xl:mt-10 xl:self-start">
            <p className="serif text-[1.5rem] leading-[1.2] italic lg:text-[1.75rem]">
              Le déroulé, les deux lieux, la tenue et comment nous joindre.
            </p>
            <p className="mt-5 text-[1rem] leading-[1.65] text-ink-soft">
              Les deux lieux, les horaires, la tenue et l&apos;hébergement :
              tout est ici, sans petit caractère. Une question d&apos;abord ? La{" "}
              <Link href="/faq" className="link-edito">
                page des questions
              </Link>{" "}
              en couvre déjà beaucoup.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a className={buttonVariants({ size: "lg" })} href="#reponse">
                Confirmer ma présence
              </a>
              <p className="text-[0.875rem] text-ink-soft">
                Un message suffit —{" "}
                <WhatsAppLink
                  variant="link"
                  size="sm"
                  className="text-[0.875rem]"
                >
                  nous écrire
                </WhatsAppLink>
              </p>
            </div>
          </div>

          <figure className="cover-reveal order-1 -mx-5 sm:-mx-8 md:mx-0 xl:col-[7/span_6] xl:row-span-2 xl:row-start-1">
            <figcaption className="mb-2 px-5 text-right text-[0.78125rem] leading-[1.45] text-ink-soft italic sm:px-8 md:px-0">
              En couverture&nbsp;: notre save-the-date, le{" "}
              {wedding.date.labelLower}.
            </figcaption>
            <Photo
              src={saveTheDate}
              alt={`Le save-the-date de ${wedding.couple.display}.`}
              sizes="(min-width: 1280px) 46vw, 100vw"
              preload
              className="aspect-[3/4] w-full"
            />
          </figure>
        </div>

        {/* En bref : les trois repères */}
        <ul className="mt-16 grid gap-8 md:grid-cols-3 md:gap-0 lg:mt-24">
          {[
            {
              title: wedding.date.label,
              text: `Un samedi, à ${wedding.city.name}.`,
            },
            {
              title: `${civil.time} puis ${benediction.time}`,
              text: `L’état civil à la mairie de Logbaba, la bénédiction à Bonanjo.`,
            },
            {
              title: "Un message suffit",
              text: "Dites-nous que vous venez, et si vous serez plusieurs.",
            },
          ].map((item, i) => (
            <li
              key={item.title}
              className={
                i === 0
                  ? "border-t border-gold/70 pt-5 md:pr-8"
                  : "border-t border-gold/70 pt-5 md:border-l md:pr-8 md:pl-8"
              }
            >
              <p className="display text-[1.75rem] tabular-nums lg:text-[2.25rem]">
                {typo(item.title)}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.6] text-ink-soft">
                {typo(item.text)}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

/* ——— Au sommaire : les huit choses à savoir ——— */

const aSavoir = [
  {
    title: "Y aller",
    text: `Les deux lieux sont à ${wedding.city.name} : Logbaba le matin, Bonanjo l'après-midi. Ouvrez l'itinéraire depuis votre téléphone.`,
  },
  {
    title: "Se déplacer",
    text: "Un taxi ou une voiture est le plus simple pour relier les deux quartiers. Prévoyez un peu de marge : la circulation à Douala a ses humeurs.",
  },
  {
    title: "Où dormir",
    text: "Les hôtels de Bonanjo et d'Akwa sont les plus proches du second lieu. Réservez tôt : décembre est un mois chargé.",
  },
  {
    title: "La tenue",
    text: "Une tenue de fête. Si vous cherchez une idée : les tons clairs et les roses se marient bien avec le vert de notre invitation.",
  },
  {
    title: "Les cadeaux",
    text: "Votre présence est notre plus grand cadeau. Si vous souhaitez tout de même nous gâter, parlez-nous-en : nous vous dirons ce qui nous ferait plaisir.",
  },
  {
    title: "Nous joindre",
    text: `Un appel ou un message WhatsApp, à ${wedding.couple.groom} ou à ${wedding.couple.bride}. Nous répondons vite.`,
  },
  {
    title: "Vos photos",
    text: `Prenez-en plein, et partagez-les avec le mot-dièse ${wedding.hashtag} : nous aimons voir la journée par vos yeux.`,
  },
  {
    title: "Encore une question ?",
    text: "La réponse est peut-être déjà dans nos questions fréquentes. Sinon, écrivez-nous : aucune question n'est trop bête.",
  },
] as const

export function InfosSommaire() {
  return (
    <section
      id="bon-a-savoir"
      aria-labelledby="bon-a-savoir-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Bon à savoir" folio={2} />

        <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-14 lg:mt-16 lg:gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <h2
              id="bon-a-savoir-title"
              className="display text-[3.25rem] text-balance sm:text-[4.5rem] lg:text-[5.25rem]"
            >
              Tout ce qui rend la journée plus simple.
            </h2>
            <p className="mt-8 max-w-[38ch] text-[1.0625rem] leading-[1.7]">
              Du trajet aux cadeaux. Ce qui n&apos;est pas ici est peut-être
              dans la{" "}
              <Link href="/faq" className="link-edito">
                page des questions
              </Link>
              .
            </p>

            <figure className="mt-12 flex items-end gap-5">
              <div className="w-[9.5rem] shrink-0 overflow-hidden sm:w-[13rem]">
                <Photo
                  src={detoure}
                  alt={`${wedding.couple.bride} et ${wedding.couple.groom}, détourés.`}
                  sizes="13rem"
                  position="50% 20%"
                  ground="var(--ink)"
                  className="aspect-[3/4] w-full"
                />
              </div>
              <Caption className="max-w-[16rem] pb-1">
                Détourés de notre faire-part.
              </Caption>
            </figure>
          </div>

          <ol
            data-reveal="numerals"
            className="col-span-12 border-t border-gold/70 lg:col-span-6 lg:col-start-7"
          >
            {aSavoir.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-ink/10 py-5 sm:grid-cols-[3.5rem_1fr]"
              >
                <span
                  aria-hidden="true"
                  className="reveal-line display pt-0.5 text-[2rem] text-gold-ink italic tabular-nums"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span>{i + 1}</span>
                </span>
                <div>
                  <h3 className="display text-[1.75rem] leading-[1.05] lg:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[46ch] text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {typo(item.text)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}

/* ——— Douala, les deux quartiers ——— */

const quartiers = [
  {
    name: "Logbaba",
    place: wedding.city.name,
    text: `Le matin — mairie de Logbaba, ${civil.time}. L’état civil ouvre la journée.`,
  },
  {
    name: "Bonanjo",
    place: wedding.city.name,
    text: `L’après-midi — en face du Consulat Général de France, ${benediction.time}.`,
  },
] as const

export function InfosDouala() {
  return (
    <section
      id="douala"
      aria-labelledby="infos-douala-title"
      className="pt-16 pb-24 lg:pt-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Douala" folio={4} />

        <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-12 lg:mt-16 lg:gap-x-6">
          <figure className="col-span-12 lg:col-span-6">
            <Photo
              src={portrait}
              alt={`${wedding.couple.display} à ${wedding.city.name}.`}
              sizes="(min-width: 1024px) 46vw, 100vw"
              crop={1}
              position="50% 22%"
              zoom
              ground="var(--ink)"
              className="aspect-[4/5] w-full max-w-[34rem]"
            />
            <Caption className="mt-3 max-w-[34rem]">
              {wedding.city.name}, la ville où nous nous marions.
            </Caption>
          </figure>

          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <h2
              id="infos-douala-title"
              className="display text-[3rem] text-balance sm:text-[4rem] lg:text-[4.25rem]"
            >
              Deux quartiers, une même ville.
            </h2>
            <p className="mt-8 max-w-[38ch] text-[1.0625rem] leading-[1.7]">
              Logbaba et Bonanjo sont deux quartiers de {wedding.city.name}, au
              bord du Wouri. C&apos;est ici que nous nous marions, et c&apos;est
              ici que nous serions heureux de vous accueillir.
            </p>

            <p className="serif mt-12 text-[1.25rem] italic">
              Les deux rendez-vous
            </p>
            <ul data-reveal="leaders" className="mt-3">
              {quartiers.map((quartier, i) => (
                <li
                  key={quartier.name}
                  className="border-t border-gold/70 py-5 last:border-b"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="display shrink-0 text-[2rem] leading-none">
                      {quartier.name}
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
                      {quartier.place}
                    </span>
                  </div>
                  <p className="mt-2 text-[0.9375rem] text-ink-soft tabular-nums">
                    {typo(quartier.text)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ——— Répondre : les trois étapes, puis la réponse ——— */

const steps = [
  {
    title: "Regardez le déroulé",
    text: "Deux rendez-vous, à Logbaba le matin puis à Bonanjo l’après-midi.",
  },
  {
    title: "Dites-nous si vous venez",
    text: "Un appel ou un message WhatsApp suffit. Précisez-nous si vous serez plusieurs.",
  },
  {
    title: "Notez la date",
    text: `Le ${wedding.date.labelLower}, dans vos agendas. Le lien « Ajouter à mon agenda » s’en occupe.`,
  },
] as const

export function InfosReponse() {
  return (
    <section
      id="reponse"
      aria-labelledby="reponse-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Répondre" folio={5} />

        <div className="mt-12 grid grid-cols-12 gap-x-4 gap-y-10 lg:mt-16 lg:gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <h2
              id="reponse-title"
              className="display text-[3.25rem] text-balance sm:text-[4.5rem] lg:text-[5.25rem]"
            >
              Dites-nous que vous venez.
            </h2>
            <p className="mt-8 max-w-[36ch] text-[1.0625rem] leading-[1.7]">
              Aucun formulaire, aucune inscription&nbsp;: un appel ou un message
              WhatsApp, et c&apos;est noté. Précisez-nous juste si vous serez
              plusieurs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WhatsAppLink message="Bonjour ! Nous serons là le 12 décembre.">
                Nous écrire sur WhatsApp
              </WhatsAppLink>
              <a
                href={wedding.contacts[0].phoneHref}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Appeler {wedding.contacts[0].name}
              </a>
            </div>
          </div>

          <ol
            aria-label="Comment faire"
            data-reveal="numerals"
            className="col-span-12 self-end border-t border-gold/70 lg:col-span-6 lg:col-start-7"
          >
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.75rem_1fr] gap-x-4 border-b border-ink/10 py-4 sm:grid-cols-[3.5rem_1fr]"
              >
                <span
                  aria-hidden="true"
                  className="reveal-line display text-[1.75rem] text-gold-ink italic"
                  style={{ "--i": i } as React.CSSProperties}
                >
                  <span>{i + 1}</span>
                </span>
                <div>
                  <p className="text-[1rem] font-medium">{step.title}</p>
                  <p className="mt-1 text-[0.9375rem] text-ink-soft">
                    {typo(step.text)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 lg:mt-20">
          <Countdown />
        </div>

        <div className="mt-16 lg:mt-24">
          <InvitationCard />
        </div>

        <p className="mt-8 text-[0.875rem] text-ink-soft">
          Encore un doute ? Les{" "}
          <Link href="/faq" className="link-edito">
            questions fréquentes
          </Link>{" "}
          répondent aux plus courantes, et un message suffit pour le reste.
        </p>
      </Container>
    </section>
  )
}
