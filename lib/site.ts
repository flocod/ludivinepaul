import { wedding } from "@/lib/wedding"

export const site = {
  name: wedding.couple.display,
  // ⚠ Domaine d'exemple : à remplacer par le vrai domaine avant publication.
  // Il sert aux URLs canoniques, au sitemap et à la carte de partage.
  url: "https://ludivine-et-paul.example",
  description:
    "Ludivine et Paul se marient le samedi 12 décembre 2026 à Douala : état civil à la mairie de Logbaba à 10 h 00, puis bénédiction à Bonanjo à 15 h 00. Toutes les informations pratiques pour venir.",
} as const

/** Navigation de l'en-tête, au format magazine. Cinq entrées. */
export const mainNav = [
  { label: "Le programme", href: "/#le-programme" },
  { label: "L'invitation", href: "/#l-invitation" },
  { label: "Le carnet", href: "/#le-carnet" },
  { label: "Infos pratiques", href: "/infos-pratiques" },
  { label: "FAQ", href: "/faq" },
] as const

/** Sommaire du menu mobile : l'accueil, puis les mêmes entrées. */
export const menuNav = [
  { label: "Accueil", href: "/" },
  { label: "L'invitation", href: "/#l-invitation" },
  { label: "Le programme", href: "/#le-programme" },
  { label: "Le carnet", href: "/#le-carnet" },
  { label: "Infos pratiques", href: "/infos-pratiques" },
  { label: "FAQ", href: "/faq" },
] as const

/** Colonne « La journée » du pied de page. */
export const journeeNav = [
  { label: "L'invitation", href: "/#l-invitation" },
  { label: "Le programme", href: "/#le-programme" },
  { label: "Le carnet", href: "/#le-carnet" },
  { label: "L'essentiel", href: "/#l-essentiel" },
] as const

/** Colonne « Infos pratiques » du pied de page. */
export const infosNav = [
  { label: "Le déroulé du jour", href: "/infos-pratiques#le-deroule" },
  { label: "Bon à savoir", href: "/infos-pratiques#bon-a-savoir" },
  { label: "Douala", href: "/infos-pratiques#douala" },
  { label: "Vos questions", href: "/faq" },
] as const

/** Colonne « L'invitation » du pied de page. */
export const invitationNav = [
  { label: "L'ouvrir en grand", href: wedding.invitation.image },
  { label: "La télécharger", href: wedding.invitation.image },
  { label: "Ajouter à mon agenda", href: wedding.date.googleCalendarUrl },
] as const
