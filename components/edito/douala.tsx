import { Container, Photo, RunningHead } from "@/components/edito/primitives"
import { wedding } from "@/lib/wedding"
import portrait from "@/public/images/couple-portrait.png"

export function Douala() {
  return (
    <section
      id="douala"
      aria-labelledby="douala-title"
      className="scroll-mt-6 pb-24 lg:pb-36"
    >
      <Container>
        <RunningHead label="Douala" folio={4} />
      </Container>

      <div className="relative mt-8 lg:mt-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10">
          <Container>
            <h2
              id="douala-title"
              className="display pt-8 text-[3.5rem] text-cream [text-shadow:0_2px_18px_#1c3a29] sm:pt-12 sm:text-[5.5rem] lg:pt-16 lg:text-[8.5rem]"
            >
              Douala,
              <br />
              notre ville.
            </h2>
          </Container>
        </div>
        <figure>
          {/* Un portrait en plein cadre : le format 16/9 recadre déjà les
              deux tiers, un 2/1 couperait les visages. */}
          <Photo
            src={portrait}
            alt={`${wedding.couple.display} à ${wedding.city.name}.`}
            sizes="100vw"
            crop={1}
            position="50% 22%"
            ground="var(--ink)"
            className="aspect-[4/5] w-full sm:aspect-[3/2] lg:aspect-[16/9] lg:max-h-[46rem]"
          />
          <Container>
            <figcaption className="mt-4 text-[0.78125rem] leading-[1.45] text-ink-soft italic">
              {wedding.city.name}, la ville où nous nous marions.
            </figcaption>
          </Container>
        </figure>
      </div>

      <Container>
        <div className="mt-8 grid grid-cols-12 gap-x-4 lg:-mt-1 lg:gap-x-6">
          <p className="col-span-12 text-[1.0625rem] leading-[1.7] sm:col-span-9 lg:col-span-5 lg:col-start-7 lg:text-[1.125rem]">
            Logbaba et Bonanjo sont deux quartiers de {wedding.city.name}, au
            bord du Wouri. L&apos;état civil ouvre la matinée à la mairie de
            Logbaba&nbsp;; la bénédiction suit à Bonanjo, en face du Consulat
            Général de France. Tout se passe dans la même ville.
          </p>
        </div>
      </Container>
    </section>
  )
}
