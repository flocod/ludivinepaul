import Link from "next/link"

import { Mark } from "@/components/brand/logo"
import { Container, RunningHead } from "@/components/edito/primitives"
import { buttonVariants } from "@/components/ui/button"
import { wedding } from "@/lib/wedding"

export function MotDesMaries({
  folio = 6,
  cta = { label: "Confirmer ma présence", href: "/infos-pratiques#reponse" },
}: {
  folio?: number
  cta?: { label: string; href: string }
}) {
  const externe = !cta.href.startsWith("/")
  return (
    <section
      id="le-mot"
      aria-labelledby="le-mot-title"
      className="on-teal bg-teal-deep pt-6 pb-24 text-cream lg:pb-32"
    >
      <Container>
        <RunningHead label="Le mot des mariés" folio={folio} tone="teal" />
        <h2 id="le-mot-title" className="sr-only">
          Le mot des mariés
        </h2>

        <figure className="mt-16 grid grid-cols-12 gap-x-4 lg:mt-24 lg:gap-x-6">
          <div className="col-span-12 lg:col-span-1 lg:pt-4">
            <Mark tone="cream" className="h-11 lg:h-[3.25rem]" />
          </div>
          <blockquote className="col-span-12 mt-8 lg:col-span-10 lg:col-start-2 lg:mt-0">
            <p className="display text-[2.125rem] leading-[1.12] tracking-[-0.015em] italic sm:text-[2.75rem] lg:text-[3.75rem] lg:leading-[1.08]">
              <span className="text-gold-light">«&nbsp;</span>Nous préparons
              cette journée depuis longtemps. Le {wedding.date.labelLower}, il
              ne nous manquera plus que vous.
              <span className="text-gold-light">&nbsp;»</span>
            </p>
          </blockquote>
          <figcaption className="col-span-12 mt-10 flex flex-col gap-6 border-t border-gold-light/40 pt-6 sm:flex-row sm:items-end sm:justify-between lg:col-span-10 lg:col-start-2 lg:mt-14">
            <p className="text-[0.9375rem] leading-[1.5]">
              {wedding.couple.display}
              <span className="block text-mist">Les mariés</span>
            </p>
            {externe ? (
              <a
                href={cta.href}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "cream" })}
              >
                {cta.label}
                <span className="sr-only"> (nouvelle fenêtre)</span>
              </a>
            ) : (
              <Link
                href={cta.href}
                className={buttonVariants({ variant: "cream" })}
              >
                {cta.label}
              </Link>
            )}
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
