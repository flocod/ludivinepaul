import { Horloge } from "@/components/edito/horloge"
import {
  Caption,
  Container,
  Photo,
  RunningHead,
} from "@/components/edito/primitives"
import { typo } from "@/lib/typo"
import { ceremonies, wedding } from "@/lib/wedding"
import couple from "@/public/images/couple-saumon.png"

const [civil, benediction] = ceremonies

/** La journée, en deux lignes : c'est tout ce que dit le faire-part. */
const etapes = [
  { label: `${civil.name} — ${civil.venue}`, heure: civil.time },
  {
    label: `${benediction.name} — ${benediction.venue}`,
    heure: benediction.time,
  },
] as const

const aSavoir = [
  "un taxi ou une voiture est le plus simple pour relier Logbaba à Bonanjo ;",
  "l’aéroport international de Douala est à une trentaine de minutes de Bonanjo ;",
  "dites-nous si vous venez : nous vous aiderons à organiser le trajet.",
] as const

export function Arrivee() {
  return (
    <section
      id="le-programme"
      aria-labelledby="le-programme-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Le programme" folio={3} />

        <h2
          id="le-programme-title"
          className="display mt-12 max-w-[11em] text-[3.25rem] text-balance sm:text-[4.5rem] lg:mt-16 lg:text-[6.5rem]"
        >
          Deux cérémonies, une journée.
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-x-4 gap-y-14 lg:mt-20 lg:gap-x-6">
          <figure className="col-span-11 sm:col-span-8 lg:col-span-5 lg:row-span-2">
            <Photo
              src={couple}
              alt={`${wedding.couple.bride} et ${wedding.couple.groom}.`}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 66vw, 92vw"
              position="50% 18%"
              zoom
              className="aspect-[3/5] w-full"
            />
            <Caption className="mt-3">
              Le {wedding.date.labelLower}, à {wedding.city.name}.
            </Caption>
          </figure>

          {/* Deux colonnes d'article */}
          <div className="col-span-12 grid gap-12 sm:grid-cols-2 sm:gap-0 lg:col-span-7 lg:col-start-6">
            <article className="sm:pr-8 lg:pr-10">
              <h3 className="display text-[2.75rem] lg:text-[3.5rem]">
                {civil.name}
              </h3>
              <p className="serif mt-2 text-[1.25rem] text-ink-soft italic">
                {typo(civil.tagline)}
              </p>
              <div className="mt-6 space-y-4 text-[1rem] leading-[1.65]">
                <p>
                  Nous sommes reçus à la mairie de Logbaba pour
                  l&apos;officialisation du mariage. C&apos;est la cérémonie
                  civile qui ouvre la journée.
                </p>
                <p>
                  <a
                    href={civil.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-edito"
                  >
                    Ouvrir l&apos;itinéraire
                    <span className="sr-only"> (nouvelle fenêtre)</span>
                  </a>
                </p>
              </div>
            </article>

            <article className="sm:border-l sm:border-gold/70 sm:pl-8 lg:pl-10">
              <h3 className="display text-[2.75rem] lg:text-[3.5rem]">
                {benediction.name}
              </h3>
              <p className="serif mt-2 text-[1.25rem] text-ink-soft italic">
                {typo(benediction.tagline)}
              </p>
              <div className="mt-6 text-[1rem] leading-[1.65]">
                <p>
                  Nous recevons la bénédiction de notre union à Bonanjo, en face
                  du Consulat Général de France, entourés de nos familles et de
                  nos amis.{" "}
                  <a
                    href={benediction.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link-edito"
                  >
                    Ouvrir l&apos;itinéraire
                    <span className="sr-only"> (nouvelle fenêtre)</span>
                  </a>
                </p>
                <p className="mt-4">
                  Vous venez de loin ? Trois choses à savoir&nbsp;:
                </p>
                <ol className="mt-4 space-y-2.5">
                  {aSavoir.map((step, i) => (
                    <li key={step} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="serif w-4 shrink-0 text-[1.0625rem] text-gold-ink italic tabular-nums"
                      >
                        {i + 1}
                      </span>
                      <span>{typo(step)}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4">
                  Et si un détail vous échappe, un message suffit.
                </p>
              </div>
            </article>
          </div>

          {/* Encart du déroulé */}
          <aside
            id="le-deroule"
            aria-labelledby="le-deroule-title"
            className="col-span-12 scroll-mt-6 self-end bg-paper-deep px-6 py-8 sm:px-10 sm:py-10 lg:col-span-7 lg:col-start-6"
          >
            <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
              <div>
                <h3
                  id="le-deroule-title"
                  className="display text-[2rem] lg:text-[2.375rem]"
                >
                  Le déroulé du jour
                </h3>
                <dl
                  data-reveal="leaders"
                  className="mt-6 space-y-3 text-[0.9375rem]"
                >
                  {etapes.map((row, i) => (
                    <div
                      key={row.label}
                      className="flex items-baseline gap-2"
                      style={{ "--i": i } as React.CSSProperties}
                    >
                      <dt className="shrink-0">{row.label}</dt>
                      <span
                        aria-hidden="true"
                        data-leader
                        className="min-w-6 flex-1 translate-y-[-0.28em] border-b border-dotted border-gold"
                      />
                      <dd className="serif shrink-0 text-[1.125rem] tabular-nums">
                        {row.heure}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="md:border-l md:border-gold/70 md:pl-10">
                <p className="text-[0.875rem] leading-[1.6] text-ink-soft">
                  Les horaires sont ceux du faire-part&nbsp;: 10&nbsp;h&nbsp;00
                  à la mairie de Logbaba, 15&nbsp;h&nbsp;00 à Bonanjo. Les deux
                  cérémonies se suivent dans la même journée, à{" "}
                  {wedding.city.name}.
                </p>
                <Horloge />
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
