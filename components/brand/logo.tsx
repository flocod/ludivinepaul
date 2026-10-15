import { cn } from "@/lib/utils"

/*
 * Le symbole : une esperluette en Bodoni logée dans une parenthèse ouvrante,
 * comme un mot glissé à l'oreille. Dessiné d'après les contours de Bodoni
 * Moda italique (graisse 700, taille optique 28) — la parenthèse est reprise
 * telle quelle de la marque d'origine, seule la lettre a changé : « & » est
 * le couple, et il se trouve déjà entre les deux prénoms du mot-symbole.
 *
 * Les tons passent par les variables CSS, pour que la marque suive la palette.
 */
const PAREN =
  "M29.7 100Q23.41 97.27 18 92.37Q12.59 87.47 8.54 80.79Q4.49 74.12 2.25 66.05Q0 57.99 0 48.97Q0 36.96 3.92 27.22Q7.84 17.48 14.57 10.55Q21.3 3.61 29.7 0L30.05 0.57Q26.24 3.07 23.56 8.12Q20.87 13.18 19.19 19.86Q17.5 26.54 16.74 34.04Q15.98 41.55 15.98 48.97Q15.98 56.39 16.74 64.2Q17.5 72.01 19.19 79.1Q20.87 86.2 23.56 91.55Q26.24 96.9 30.05 99.42Z"
const LETTER =
  "M62.65 81.32Q58.33 81.32 55.27 79.53Q52.21 77.75 50.56 74.49L37.22 48.93Q36.18 46.92 35.69 44.97Q35.2 43.02 35.2 41.27Q35.2 37.89 37.44 35.19Q39.69 32.49 43.45 30.9Q47.22 29.32 51.78 29.32Q54.22 29.32 56.59 29.91Q58.95 30.51 60.86 31.65Q62.77 32.78 63.9 34.39Q65.03 36 65.03 38.03Q65.03 40.59 63.66 42.41Q62.28 44.24 59.94 45.59Q57.6 46.94 54.67 48.11Q51.73 49.28 48.62 50.53L48.46 50.06Q50.61 49.07 52.05 47.26Q53.49 45.45 54.23 43.12Q54.97 40.78 54.97 38.23Q54.97 36.14 54.66 34.21Q54.35 32.29 53.57 31.04Q52.79 29.79 51.33 29.79Q49.39 29.79 48.12 31.15Q46.85 32.51 46.24 34.52Q45.63 36.53 45.63 38.49Q45.63 40.24 46.27 42.89Q46.91 45.54 48.6 48.93L61.68 75.08Q62.24 76.19 62.96 77.32Q63.68 78.44 64.64 79.18Q65.59 79.92 66.87 79.92Q68.38 79.92 70.07 78.77Q71.75 77.62 72.6 75.73L73.05 75.88Q72.1 78.11 69.57 79.71Q67.04 81.32 62.65 81.32ZM37.96 81.32Q33.14 81.32 29.41 80.03Q25.67 78.75 23.56 76.2Q21.45 73.65 21.45 69.83Q21.45 66.08 22.96 63.53Q24.48 60.97 27.09 59.17Q29.69 57.37 33.01 55.96Q36.34 54.55 39.98 53.09L40.15 53.51Q37.72 54.8 35.9 56.94Q34.08 59.09 33.09 61.82Q32.09 64.55 32.09 67.67Q32.09 69.55 32.7 71.66Q33.31 73.78 34.6 75.67Q35.89 77.55 37.96 78.73Q40.04 79.91 43 79.91Q47.47 79.91 52.01 78.49Q56.56 77.07 60.69 74.68Q64.82 72.28 68.05 69.32Q71.27 66.36 73.15 63.21Q75.03 60.06 75.03 57.19H75.48Q75.48 58.37 74.56 59.37Q73.64 60.36 72.19 60.96Q70.74 61.56 69.13 61.56Q67.19 61.56 65.78 60.74Q64.37 59.92 63.61 58.61Q62.85 57.29 62.85 55.77Q62.85 54.39 63.65 53.15Q64.45 51.9 65.8 51.11Q67.14 50.32 68.73 50.32Q70.77 50.32 72.31 51.25Q73.84 52.18 74.69 53.74Q75.55 55.3 75.55 57.19Q75.55 60.28 73.56 63.62Q71.58 66.96 68.02 70.11Q64.45 73.26 59.72 75.79Q54.98 78.31 49.44 79.81Q43.89 81.32 37.96 81.32Z"

export function Mark({
  className,
  tone = "gold",
}: {
  className?: string
  tone?: "gold" | "cream" | "ink"
}) {
  const letter =
    tone === "cream"
      ? "var(--cream)"
      : tone === "ink"
        ? "var(--ink)"
        : "var(--gold-ink)"
  const paren = tone === "cream" ? "var(--cream)" : "var(--gold)"
  return (
    <svg
      viewBox="0 0 77 100"
      aria-hidden="true"
      focusable="false"
      className={cn("h-8 w-auto shrink-0", className)}
    >
      <path fill={paren} opacity={tone === "cream" ? 0.72 : 1} d={PAREN} />
      <path fill={letter} d={LETTER} />
    </svg>
  )
}

/** Le mot-symbole, d'un seul tenant, précédé du symbole. */
export function Logo({
  className,
  tone = "ink",
}: {
  className?: string
  tone?: "ink" | "cream"
}) {
  return (
    <span className={cn("inline-flex items-center", "gap-2.5", className)}>
      <Mark tone={tone === "cream" ? "cream" : "ink"} />
      <span
        className={cn(
          "font-heading leading-none whitespace-nowrap",
          tone === "ink" ? "text-ink" : "text-cream"
        )}
      >
        Ludivine &amp; Paul
      </span>
    </span>
  )
}
