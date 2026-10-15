import Link from "next/link"

import { Container, RunningHead } from "@/components/edito/primitives"
import { typo } from "@/lib/typo"
import { ceremonies, wedding, whatsappUrl } from "@/lib/wedding"

const [civil, benediction] = ceremonies

const breves = [
  {
    title: "La date",
    amount: wedding.date.labelShort,
    unit: "un samedi",
    text: "Deux cérémonies dans la même journée, à Douala.",
    link: {
      label: "Ajouter à mon agenda",
      href: wedding.date.googleCalendarUrl,
    },
  },
  {
    title: "Les lieux",
    amount: "Logbaba, puis Bonanjo",
    unit: "deux quartiers de Douala",
    text: "L’état civil le matin à la mairie, la bénédiction l’après-midi.",
    link: { label: "Voir le déroulé", href: "/infos-pratiques#le-deroule" },
  },
  {
    title: "Votre réponse",
    amount: "Un message",
    unit: "suffit",
    text: "Dites-nous simplement si vous venez, et si vous serez plusieurs.",
    link: {
      label: "Nous écrire sur WhatsApp",
      href: whatsappUrl("Bonjour ! Nous serons là le 12 décembre."),
    },
  },
] satisfies ReadonlyArray<{
  title: string
  amount: React.ReactNode
  unit: string
  text: string
  link: { label: string; href: string }
}>

export function Essentiel() {
  return (
    <section
      id="l-essentiel"
      aria-labelledby="l-essentiel-title"
      className="scroll-mt-6 pt-16 pb-24 lg:pt-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="L'essentiel" folio={7} />

        <h2
          id="l-essentiel-title"
          className="display mt-12 text-[3.25rem] text-balance sm:text-[4.5rem] lg:mt-16 lg:text-[6.5rem]"
        >
          Ce qu’il faut retenir.
        </h2>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-0 lg:mt-20">
          {breves.map((b, i) => (
            <article
              key={b.title}
              className={
                i === 0
                  ? "md:pr-8 lg:pr-12"
                  : "border-t border-gold/70 pt-10 md:border-t-0 md:border-l md:px-8 md:pt-0 last:md:pr-0 lg:px-12"
              }
            >
              <h3 className="display text-[2.25rem] lg:text-[2.75rem]">
                {b.title}
              </h3>
              <p className="mt-5">
                <span className="serif block text-[1.375rem] leading-tight">
                  {b.amount}
                </span>
                <span className="text-[0.8125rem] text-ink-soft italic">
                  {b.unit}
                </span>
              </p>
              <p className="mt-5 text-[0.9375rem] leading-[1.65] text-ink-soft">
                {typo(b.text)}
              </p>
              <p className="mt-5 text-[0.9375rem]">
                {b.link.href.startsWith("/") ? (
                  <Link href={b.link.href} className="link-edito">
                    {b.link.label}
                  </Link>
                ) : (
                  <a
                    href={b.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-edito"
                  >
                    {b.link.label}
                    <span className="sr-only"> (nouvelle fenêtre)</span>
                  </a>
                )}
              </p>
            </article>
          ))}
        </div>

        <p className="serif mt-16 max-w-[46ch] text-[1.125rem] leading-[1.5] text-ink-soft italic lg:mt-20">
          L’état civil ouvre la matinée à la mairie de Logbaba dès {civil.time}
          &nbsp;; la bénédiction suit à Bonanjo dès {benediction.time}.
        </p>
      </Container>
    </section>
  )
}
