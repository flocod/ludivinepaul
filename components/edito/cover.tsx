import Link from "next/link"

import { Container, Photo } from "@/components/edito/primitives"
import { WhatsAppLink } from "@/components/site/contact-links"
import { buttonVariants } from "@/components/ui/button"
import { wedding } from "@/lib/wedding"
import couple from "@/public/images/couple-couleur.png"

/*
 * Couverture. Le titre est placé par rapport à la photo, en unités cqw de la
 * « scène » (largeur de la photo), pour croiser toujours la même zone de
 * l'image, quelle que soit la largeur d'écran.
 *
 * Mobile : deux lignes sur le papier, « à Douala. » à cheval sur le bord haut
 * de la photo.
 * Très grand écran (xl) : la scène occupe les colonnes 7 à 11 d'une grille de
 * 12 (gouttière 24 px), la colonne 1 est donc à -(120cqw + 28,8 px) ; les
 * lignes descendent en escalier.
 */
const lines = ["Ludivine", "& Paul", "à Douala."] as const

const geometry = [
  // mobile : corps 19cqw, photo à 2,33em sous le haut du titre
  "[--l1:0em] [--l2:0.55em] [--l3:0.12em]",
  "[font-size:19cqw] [left:5.2cqw] top-0",
  // très grand écran : composition « couverture » sur 12 colonnes.
  // « à Douala. » compte deux signes de plus que la ligne d'origine : le
  // retrait part un cran plus bas.
  "xl:[--l2:2.2em] xl:[--l3:3.2em]",
  "xl:[font-size:27.8cqw] xl:[left:calc(-120cqw-28.8px)] xl:top-[11cqw]",
].join(" ")

export function Cover() {
  return (
    <section aria-labelledby="cover-title" className="pb-20 lg:pb-28">
      <Container>
        <div className="flex items-baseline justify-between gap-6 border-t border-gold/70 pt-3 text-[0.8125rem] leading-none text-ink-soft">
          <span>Le {wedding.date.labelLower}</span>
          <span className="hidden sm:inline">
            {wedding.city.name}, {wedding.city.country}
          </span>
        </div>

        <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-center lg:gap-x-12 xl:grid-cols-12 xl:items-stretch xl:gap-x-6">
          {/* Scène : photo + titre */}
          <div className="@container -mx-5 sm:-mx-8 md:mx-0 md:max-w-[40rem] lg:max-w-none xl:col-[7/span_5] xl:row-start-1">
            <div className="relative pt-[44.3cqw] xl:pt-0">
              <h1
                id="cover-title"
                className={`display absolute z-10 ${geometry}`}
              >
                {lines.map((line, i) => (
                  <span key={line}>
                    <span
                      className="cover-line whitespace-nowrap"
                      style={{ paddingLeft: `var(--l${i + 1})` }}
                    >
                      <span
                        style={
                          {
                            "--i": i,
                          } as React.CSSProperties
                        }
                      >
                        {line}
                      </span>
                    </span>{" "}
                  </span>
                ))}
              </h1>

              <figure>
                <Photo
                  src={couple}
                  alt={`${wedding.couple.display}, souriants, sur un fond pêche.`}
                  sizes="(min-width: 1280px) 38vw, (min-width: 768px) 640px, 100vw"
                  position="50% 24%"
                  preload
                  className="cover-photo aspect-[775/896]"
                />
                <figcaption className="cover-after px-5 pt-3 text-right text-[0.78125rem] leading-[1.45] text-ink-soft italic sm:px-8 md:px-0 xl:absolute xl:top-0 xl:left-full xl:ml-4 xl:p-0 xl:text-left xl:[writing-mode:vertical-rl]">
                  {wedding.city.name}, le {wedding.date.labelLower}.
                </figcaption>
              </figure>
            </div>
          </div>

          {/*
            Chapô et action. En xl, il démarre sous la 2e ligne du titre :
            0,585 × largeur de la scène (S = 5 colonnes + 4 gouttières),
            plus 48 px d'air.
          */}
          <div className="cover-after mt-12 max-w-[30rem] sm:mt-14 lg:mt-0 lg:pb-1 xl:col-[1/span_4] xl:row-start-1 xl:mt-[calc((min(100vw,1440px)*0.41667_-_60.67px)*0.5854_+_48px)] xl:self-start xl:pb-0">
            <p className="serif text-[1.625rem] leading-[1.15] italic lg:text-[1.875rem]">
              Ont le bonheur de vous convier à la célébration de leur union.
            </p>
            <p className="mt-5 max-w-[34ch] text-[1rem] leading-[1.6] text-ink-soft lg:text-[1.0625rem]">
              Le {wedding.date.labelLower} : l&apos;état civil à la mairie de
              Logbaba à partir de 10&nbsp;h&nbsp;00, puis la bénédiction à
              Bonanjo, en face du Consulat Général de France, à partir de
              15&nbsp;h&nbsp;00. Dites-nous que vous venez — par téléphone ou
              sur WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <WhatsAppLink message="Bonjour ! Nous serons là le 12 décembre.">
                Confirmer ma présence
              </WhatsAppLink>
              <Link
                href="/infos-pratiques"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Infos pratiques
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
