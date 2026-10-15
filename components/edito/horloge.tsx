"use client"

import { useState } from "react"

import { Slider } from "@/components/ui/slider"
import { ceremonies } from "@/lib/wedding"

/*
 * L'heure locale de chaque cérémonie, lue sur son instant de départ :
 * « 2026-12-12T10:00:00+01:00 » porte l'heure locale avant son décalage.
 */
const starts = ceremonies.map((ceremony) => ({
  name: ceremony.name,
  hour: Number(ceremony.startIso.slice(11, 13)),
}))

/** Ce que l'on trouve en arrivant à l'heure choisie. */
function statusAt(hour: number, start: number) {
  if (hour < start) return `dans ${start - hour} h`
  if (hour === start) return "en cours"
  return "c’est fait"
}

/**
 * Le déroulé du jour, à la main : on choisit son heure d'arrivée, et les deux
 * cérémonies répondent. Même dispositif que le simulateur d'origine — un
 * curseur, un état, deux lectures annoncées.
 */
export function Horloge() {
  const [hour, setHour] = useState(10)

  return (
    <div className="mt-8">
      <p
        id="horloge-label"
        className="text-[0.875rem] leading-snug text-ink-soft"
      >
        Si vous arrivez à{" "}
        <output
          htmlFor="horloge"
          className="serif text-[1.0625rem] text-ink tabular-nums"
        >
          {hour}
          &nbsp;h&nbsp;00
        </output>
      </p>
      <Slider
        id="horloge"
        className="mt-3"
        min={9}
        max={19}
        step={1}
        value={[hour]}
        onValueChange={(v) => setHour(Array.isArray(v) ? v[0] : v)}
        thumbLabel="Heure de la journée"
      />
      <dl
        aria-live="polite"
        className="mt-4 flex flex-wrap gap-x-8 gap-y-1 text-[0.875rem] text-ink-soft"
      >
        {starts.map((start) => (
          <div key={start.name} className="flex items-baseline gap-2">
            <dt>{start.name}</dt>
            <dd className="serif text-[1.25rem] text-ink tabular-nums">
              {statusAt(hour, start.hour)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
