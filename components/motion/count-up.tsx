"use client"

import { useEffect, useRef } from "react"
import { animate } from "motion/react"

/** Un entier en français : les milliers sont séparés par une espace fine. */
export function formatInt(value: number) {
  return Math.round(value).toLocaleString("fr-FR")
}

/**
 * Un chiffre qui monte depuis zéro la première fois qu'il entre à l'écran.
 * Le serveur rend la valeur finale ; le décompte ne la remplace que si le
 * chiffre commence sous la ligne de flottaison, donc rien ne clignote. Les
 * lecteurs d'écran reçoivent toujours la valeur finale.
 */
export function CountUp({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    // Déjà à l'écran au chargement : on laisse la valeur finale.
    if (node.getBoundingClientRect().top < window.innerHeight) return

    node.textContent = formatInt(0)
    let stop: (() => void) | undefined
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const controls = animate(0, value, {
          type: "spring",
          stiffness: 70,
          damping: 13,
          mass: 0.9,
          onUpdate: (v) => {
            node.textContent = formatInt(Math.max(0, v))
          },
          onComplete: () => {
            node.textContent = formatInt(value)
          },
        })
        stop = () => controls.stop()
      },
      { threshold: 0.6 }
    )
    io.observe(node)
    return () => {
      io.disconnect()
      stop?.()
      node.textContent = formatInt(value)
    }
  }, [value])

  return (
    <>
      <span ref={ref} aria-hidden="true" className="tabular-nums">
        {formatInt(value)}
      </span>
      <span className="sr-only">{formatInt(value)}</span>
    </>
  )
}
