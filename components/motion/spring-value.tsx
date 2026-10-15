"use client"

import { useEffect } from "react"
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react"

/**
 * Un nombre qui rejoint sa nouvelle valeur avec un ressort, au lieu de sauter.
 * Les chiffres qui défilent sont cachés aux lecteurs d'écran, qui reçoivent la
 * valeur finale.
 *
 * `format` doit être stable d'un rendu à l'autre (une constante de module) :
 * le transform du ressort le capture une fois.
 */
export function SpringValue({
  value,
  format,
}: {
  value: number
  /** Reçoit une valeur continue pendant l'animation. */
  format: (value: number) => string
}) {
  const reduce = useReducedMotion()
  const spring = useSpring(value, { stiffness: 180, damping: 20, mass: 0.7 })
  const text = useTransform(spring, (v) => format(v))

  useEffect(() => {
    if (reduce) spring.jump(value)
    else spring.set(value)
  }, [value, reduce, spring])

  return (
    <>
      <motion.span aria-hidden="true">{text}</motion.span>
      <span className="sr-only">{format(value)}</span>
    </>
  )
}
