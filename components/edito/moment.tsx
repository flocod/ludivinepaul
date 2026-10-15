import {
  Caption,
  Container,
  Photo,
  RunningHead,
} from "@/components/edito/primitives"
import { typo } from "@/lib/typo"
import { wedding } from "@/lib/wedding"
import detoure from "@/public/images/couple-detoure.png"

export function Moment() {
  return (
    <section
      id="l-invitation"
      aria-labelledby="l-invitation-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="L'invitation" folio={2} />

        <div className="mt-12 grid grid-cols-12 gap-x-4 lg:mt-16 lg:gap-x-6">
          <h2
            id="l-invitation-title"
            className="display col-span-12 text-[3.25rem] text-balance sm:text-[4.5rem] lg:col-span-9 lg:text-[6.5rem]"
          >
            Ce que nous avons à vous dire.
          </h2>

          {/* Détourage posé sur l'encre : le faire-part en miniature */}
          <figure className="order-2 col-span-7 col-start-6 mt-12 sm:col-span-5 sm:col-start-8 lg:order-none lg:col-span-3 lg:col-start-1 lg:mt-28">
            <Photo
              src={detoure}
              alt={`${wedding.couple.bride} et ${wedding.couple.groom}, détourés de notre faire-part.`}
              sizes="(min-width: 1024px) 240px, 50vw"
              crop={1}
              zoom
              ground="var(--ink)"
              className="aspect-[330/410] w-full max-w-[240px]"
            />
            <Caption className="mt-3 max-w-[240px]">
              Détourés de notre faire-part.
            </Caption>
          </figure>

          {/* Récit */}
          <div className="col-span-12 mt-10 text-[1.0625rem] leading-[1.7] sm:col-span-10 lg:col-span-5 lg:col-start-6 lg:mt-16 lg:text-[1.125rem]">
            <p className="lettrine">
              Le {wedding.date.labelLower}, nous nous marierons à{" "}
              {wedding.city.name}. L&apos;état civil sera célébré à la mairie de
              Logbaba à partir de 10&nbsp;h&nbsp;00, et la bénédiction à
              Bonanjo, en face du Consulat Général de France, à partir de
              15&nbsp;h&nbsp;00.
            </p>
            <p className="mt-5">
              Vous êtes attendus aux deux, ou à celle que vous pourrez. Nous
              serions heureux de vous y voir.
            </p>
            <p className="mt-5">
              Le plus beau reste à venir : les visages familiers, les rires, et
              le silence juste avant le oui.
            </p>
          </div>
        </div>

        {/* Citation en exergue : le verset du faire-part */}
        <blockquote className="mt-16 grid grid-cols-12 gap-x-4 lg:mt-24 lg:gap-x-6">
          <div className="col-span-12 border-t border-gold/70 pt-8 lg:col-span-9 lg:col-start-3 lg:pt-10">
            <p
              data-reveal="wipe"
              className="display text-[1.75rem] leading-[1.14] italic sm:text-[2.25rem] lg:text-[3.25rem]"
            >
              <span className="-ml-[0.36em]">«&nbsp;</span>
              {typo(wedding.verse.text)} »
            </p>
            <footer className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <cite className="serif text-[1.125rem] text-gold-ink not-italic">
                {wedding.verse.ref}
              </cite>
              <span className="text-[0.9375rem] text-ink-soft italic">
                {typo(wedding.verse.caption)}
              </span>
            </footer>
          </div>
        </blockquote>

        <div className="mt-12 grid grid-cols-12 gap-x-4 lg:mt-16 lg:gap-x-6">
          <p className="col-span-12 text-[1.0625rem] leading-[1.7] sm:col-span-10 lg:col-span-5 lg:col-start-6 lg:text-[1.125rem]">
            Ce qui compte, ce n&apos;est pas le voyage. C&apos;est de vous voir
            arriver.
          </p>
        </div>
      </Container>
    </section>
  )
}
