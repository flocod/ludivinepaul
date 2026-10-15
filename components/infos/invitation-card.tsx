import { Photo } from "@/components/edito/primitives"
import { buttonVariants } from "@/components/ui/button"
import { ceremonies, wedding } from "@/lib/wedding"
import invitation from "@/public/images/invitation.png"

const [civil, benediction] = ceremonies

/** Le faire-part, à télécharger ou à ouvrir en grand. */
export function InvitationCard() {
  return (
    <div className="grid grid-cols-12 gap-x-4 gap-y-10 lg:gap-x-6">
      <figure className="col-span-12 sm:col-span-6 lg:col-span-4">
        <Photo
          src={invitation}
          alt={`Faire-part du mariage de ${wedding.couple.display} : le ${wedding.date.labelLower} à ${wedding.city.name}.`}
          sizes="(min-width: 1024px) 320px, 80vw"
          zoom
          className="aspect-[3/4] w-full max-w-[22rem]"
        />
      </figure>

      <div className="col-span-12 self-center sm:col-span-6 lg:col-span-7 lg:col-start-6">
        <h3 className="display text-[2.5rem] text-balance lg:text-[3.25rem]">
          Notre faire-part
        </h3>
        <p className="mt-6 max-w-[42ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
          Gardez-le, imprimez-le, ou envoyez-le à quelqu&apos;un qui
          n&apos;aurait pas encore eu l&apos;invitation. Tout ce qu&apos;il faut
          savoir y est&nbsp;: la date, les deux cérémonies et leurs horaires.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            className={buttonVariants({ size: "lg" })}
            href={wedding.invitation.image}
            download="faire-part-ludivine-et-paul.png"
          >
            Télécharger l&apos;invitation
          </a>
          <a
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href={wedding.invitation.image}
            target="_blank"
            rel="noreferrer"
          >
            L&apos;ouvrir en grand
            <span className="sr-only"> (nouvelle fenêtre)</span>
          </a>
        </div>
        <p className="mt-5 text-[0.875rem] text-ink-soft tabular-nums">
          {wedding.date.label} · {civil.venue}, {civil.time} ·{" "}
          {benediction.venue}, {benediction.time}
        </p>
      </div>
    </div>
  )
}
