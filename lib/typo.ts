/**
 * Typographie française : espace insécable devant ; ! ? :, entre un nombre et
 * son unité (10 h 00, 3 jours), apostrophes et guillemets courbes.
 *
 * « Proverbes 18:22 » n'est pas touché : la règle ne vise que les signes
 * précédés d'une espace, et ce deux-points-là n'en a pas.
 */
export function typo(text: string) {
  return text
    .replace(
      /(\d) (h|heures?|minutes?|jours?|semaines?|personnes?|ans?|cérémonies?|quartiers?)\b/g,
      "$1 $2"
    )
    .replace(/(\w)'(\w)/g, "$1’$2")
    .replace(/"([^"]+)"/g, "« $1 »")
    .replace(/ ([;!?:])/g, " $1")
}
