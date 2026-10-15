"use client"

import { useEffect, useId, useMemo, useState } from "react"

import { SpringValue } from "@/components/motion/spring-value"
import { WhatsAppLink } from "@/components/site/contact-links"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { formatInt } from "@/components/motion/count-up"
import { ceremonies, type CeremonyKind, wedding } from "@/lib/wedding"
import { cn } from "@/lib/utils"

const GUEST_MAX = 6

/** Les trois durées qu'on peut lire sur le grand chiffre. */
const units = {
  jours: (days: number) => days,
  semaines: (days: number) => Math.floor(days / 7),
  heures: (days: number, rest: number) => days * 24 + Math.floor(rest / 3600),
} as const

type Unit = keyof typeof units

const formatCount = (value: number) => formatInt(Math.max(0, value))

/**
 * Le compte à rebours, à la main : on choisit sa cérémonie, on dit combien on
 * sera, et le décompte suit. Les cellules battent à la seconde, le grand
 * chiffre se règle en jours, semaines ou heures.
 */
export function Countdown() {
  const [kind, setKind] = useState<CeremonyKind>("etat-civil")
  const [guests, setGuests] = useState(2)
  const [name, setName] = useState("")
  const [unit, setUnit] = useState<Unit>("jours")
  // `now` reste nul au rendu serveur : les cellules affichent « -- » et le
  // balisage du serveur et du client coïncide.
  const [now, setNow] = useState<number | null>(null)
  const ids = { guests: useId(), name: useId(), mode: useId(), unit: useId() }

  useEffect(() => {
    const tick = () => setNow(Date.now())
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const ceremony = useMemo(
    () => ceremonies.find((c) => c.id === kind) ?? ceremonies[0],
    [kind]
  )
  const target = useMemo(
    () => new Date(ceremony.startIso).getTime(),
    [ceremony]
  )

  const totalSeconds =
    now === null ? 0 : Math.max(0, Math.floor((target - now) / 1000))
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  const past = now !== null && target - now <= 0

  const who = name.trim()
  const guestLabel = guests === 1 ? "1 personne" : `${guests} personnes`

  const message =
    `Bonjour ! ${who ? who + " : nous" : "Nous"} serons ${guestLabel} au mariage le 12 décembre, ` +
    `à ${ceremony.name.toLowerCase()} (${ceremony.venue}).`

  const cells = [
    { label: "Jours", value: days },
    { label: "Heures", value: hours },
    { label: "Minutes", value: minutes },
    { label: "Secondes", value: seconds },
  ]

  return (
    <div className="bg-paper-deep px-6 py-8 sm:px-10 sm:py-10">
      <div className="grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-12">
        {/* Réglages */}
        <form
          className="flex flex-col gap-9"
          aria-label="Votre réponse"
          onSubmit={(e) => e.preventDefault()}
        >
          <fieldset className="flex flex-col gap-3.5">
            <legend
              id={ids.mode}
              className="mb-3.5 text-[0.875rem] font-medium text-ink"
            >
              Quel moment&nbsp;?
            </legend>
            <RadioGroup
              aria-labelledby={ids.mode}
              value={kind}
              onValueChange={(v) => setKind(v as CeremonyKind)}
              className="gap-3"
            >
              {ceremonies.map((c) => (
                <label
                  key={c.id}
                  className="group/mode flex cursor-pointer items-center gap-3 border border-ink/15 px-4 py-3 transition-colors hover:border-ink/35 has-data-checked:border-gold has-data-checked:bg-gold/8"
                >
                  <RadioGroupItem value={c.id} />
                  <span className="min-w-0 flex-1">
                    <span className="display block text-[1.375rem] leading-none">
                      {c.name}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-ink-soft">
                      {c.area} · à partir de {c.time}
                    </span>
                  </span>
                </label>
              ))}
            </RadioGroup>
          </fieldset>

          <div className="flex flex-col gap-2">
            <div className="flex items-baseline justify-between gap-4">
              <Label id={ids.guests}>Combien serez-vous&nbsp;?</Label>
              <output
                aria-hidden="true"
                className="serif text-[1.125rem] text-ink tabular-nums"
              >
                {guestLabel}
              </output>
            </div>
            <Slider
              aria-labelledby={ids.guests}
              value={[guests]}
              min={1}
              max={GUEST_MAX}
              step={1}
              thumbLabel="Nombre de personnes"
              onValueChange={(v) => setGuests(Array.isArray(v) ? v[0] : v)}
            />
            <p className="flex justify-between text-[0.8125rem] text-ink-soft">
              <span>1 personne</span>
              <span>{GUEST_MAX} personnes</span>
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <Label htmlFor={ids.name}>Votre nom</Label>
            <Input
              id={ids.name}
              value={name}
              maxLength={24}
              autoComplete="off"
              spellCheck={false}
              placeholder="Par exemple, Awa et Kevin"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </form>

        {/* Le décompte */}
        <div className="md:border-l md:border-gold/70 md:pl-10">
          <p className="text-[0.875rem] text-ink-soft">
            Ce qui vous attend{who ? ", " : ""}
            {who ? <span className="text-ink">{who}</span> : null}
          </p>

          <div key={kind} className="mt-5 grid grid-cols-4 gap-2">
            {cells.map((cell) => (
              <div key={cell.label} className="text-center" aria-hidden="true">
                <p className="display text-[1.75rem] leading-none tabular-nums sm:text-[2.25rem]">
                  {now === null ? "--" : String(cell.value).padStart(2, "0")}
                </p>
                <p className="mt-1.5 text-[0.6875rem] tracking-[0.08em] text-ink-soft uppercase">
                  {cell.label}
                </p>
              </div>
            ))}
          </div>
          {/* Un résumé lu une fois, hors région vivante : les cellules changent
              chaque seconde et ne doivent pas être annoncées en boucle. */}
          <p className="sr-only">
            {now === null
              ? `Compte à rebours avant ${ceremony.name}.`
              : past
                ? `${ceremony.name} a déjà eu lieu.`
                : `Il reste ${days} jours, ${hours} heures, ${minutes} minutes et ${seconds} secondes avant ${ceremony.name}.`}
          </p>

          <p className="mt-6 text-[0.8125rem] text-ink-soft">
            {ceremony.venue} · {ceremony.area} · à partir de {ceremony.time}
          </p>

          <div aria-live="polite" aria-atomic="true" className="mt-8">
            <p className="text-[0.875rem] text-ink-soft">Il reste</p>
            <p className="display mt-1 text-[3.25rem] leading-none tabular-nums">
              {now === null ? (
                <span aria-hidden="true">--</span>
              ) : (
                <SpringValue
                  value={units[unit](days, totalSeconds % 86400)}
                  format={formatCount}
                />
              )}
            </p>
            <p className="mt-2 text-[0.875rem] text-ink-soft">
              {past
                ? `${ceremony.name} a eu lieu le ${wedding.date.labelShort}.`
                : `${unit} avant ${ceremony.navLabel.toLowerCase()} du ${wedding.date.labelShort}.`}
            </p>
          </div>

          <div
            role="group"
            aria-labelledby={ids.unit}
            className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2"
          >
            <span id={ids.unit} className="text-[0.8125rem] text-ink-soft">
              Compter en
            </span>
            {(Object.keys(units) as Unit[]).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={unit === key}
                onClick={() => setUnit(key)}
                className={cn(
                  "rounded-sm px-2 py-1 text-[0.8125rem] underline-offset-4 transition-colors",
                  unit === key
                    ? "text-ink underline decoration-gold decoration-1"
                    : "text-ink-soft hover:text-ink hover:underline hover:decoration-gold/60"
                )}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <WhatsAppLink size="default" message={message}>
              Nous confirmer
            </WhatsAppLink>
          </div>

          <p className="mt-5 text-[0.8125rem] text-ink-soft">
            Aucun formulaire, aucune inscription&nbsp;: un message suffit.
          </p>
        </div>
      </div>
    </div>
  )
}
