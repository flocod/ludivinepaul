/**
 * Source unique de vérité du mariage.
 *
 * Tout le reste du site (compte à rebours, itinéraires, agenda, bandeaux,
 * FAQ) dérive de ce fichier : une heure ou une adresse ne peut pas diverger
 * entre deux endroits de la page.
 *
 * ⚠ Reste à compléter avant publication :
 *   - `site.url` (dans lib/site.ts) : le domaine d'exemple sert aux URLs
 *     canoniques, au sitemap et à la carte de partage.
 *   - Les six textes souples de `components/infos/infos-sections.tsx`
 *     (hébergement, transport, cadeaux, tenue, enfants, mot-dièse) sont des
 *     propositions : relisez-les et corrigez ce qui ne vous ressemble pas.
 */

export type CeremonyKind = "etat-civil" | "benediction"

export const wedding = {
  couple: {
    bride: "Ludivine",
    groom: "Paul",
    display: "Ludivine & Paul",
    initials: "LP",
  },

  date: {
    iso: "2026-12-12",
    weekday: "Samedi",
    label: "Samedi 12 décembre 2026",
    /** La même, en minuscules, pour le milieu d'une phrase. */
    labelLower: "samedi 12 décembre 2026",
    labelShort: "12 décembre 2026",
    // Douala est à WAT (UTC+1) toute l'année : pas d'heure d'été.
    // L'événement couvre la journée entière, de l'état civil à la fin de
    // la réception (10 h 00 → 18 h 00 locales).
    googleCalendarUrl:
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=Mariage%20Ludivine%20%26%20Paul" +
      "&dates=20261212T090000Z/20261212T170000Z" +
      "&location=Douala%2C%20Cameroun" +
      "&details=%C3%89tat%20civil%20%C3%A0%2010%20h%2000%20(Mairie%20de%20Logbaba)%2C%20puis%20b%C3%A9n%C3%A9diction%20%C3%A0%2015%20h%2000%20(Bonanjo%2C%20en%20face%20du%20Consulat%20G%C3%A9n%C3%A9ral%20de%20France).",
  },

  city: { name: "Douala", country: "Cameroun" },

  ceremonies: [
    {
      id: "etat-civil" as CeremonyKind,
      name: "État civil",
      navLabel: "L'état civil",
      time: "10 h 00",
      // Instant absolu, décalage explicite : le compte à rebours ne dépend
      // jamais du fuseau du visiteur.
      startIso: "2026-12-12T10:00:00+01:00",
      venue: "Mairie de Logbaba",
      area: "Logbaba, Douala",
      address: "Mairie de Logbaba, Douala, Cameroun",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Mairie+de+Logbaba%2C+Douala%2C+Cameroun",
      // Le polaroïd affiché à côté de l'adresse (voir components/countdown.tsx).
      polaroid: "/images/couple-couleur.png",
      tagline: "Le oui officiel, à la mairie de Logbaba.",
      note: "La mairie de Logbaba se trouve à Douala : arrivez un peu avant 10 h 00, on se retrouve devant.",
    },
    {
      id: "benediction" as CeremonyKind,
      name: "Bénédiction",
      navLabel: "La bénédiction",
      time: "15 h 00",
      startIso: "2026-12-12T15:00:00+01:00",
      venue: "Bonanjo",
      area: "Bonanjo, Douala",
      address: "Bonanjo, en face du Consulat Général de France, Douala",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Consulat+G%C3%A9n%C3%A9ral+de+France%2C+Bonanjo%2C+Douala",
      polaroid: "/images/couple-saumon.png",
      tagline: "Le oui devant Dieu, à Bonanjo.",
      note: "Rendez-vous à Bonanjo, en face du Consulat Général de France, à partir de 15 h 00.",
    },
  ],

  verse: {
    text: "Celui qui trouve une femme trouve le bonheur ; c'est une grâce qu'il obtient de l'Éternel.",
    ref: "Proverbes 18:22",
    caption: "Le verset qui ouvre notre invitation",
  },

  invitation: {
    line: "Ont le bonheur de vous convier à la célébration de leur union.",
    image: "/images/invitation.png",
    saveTheDate: "/images/save-the-date.png",
  },

  // Les portraits du couple, détourés ou sur fond saumon.
  photos: {
    couleur: "/images/couple-couleur.png",
    portrait: "/images/couple-portrait.png",
    saumon: "/images/couple-saumon.png",
    detoure: "/images/couple-detoure.png",
    detoureAlt: "/images/couple-detoure-2.png",
  },

  contacts: [
    {
      id: "paul",
      name: "Paul",
      role: "Le marié",
      phone: "+237 6 82 05 02 13",
      phoneHref: "tel:+237682050213",
      whatsapp: "https://wa.me/237682050213",
    },
    {
      id: "ludivine",
      name: "Ludivine",
      role: "La mariée",
      phone: "+237 6 97 51 12 86",
      phoneHref: "tel:+237697511286",
      whatsapp: "https://wa.me/237697511286",
    },
  ],

  rsvpNote:
    "Merci de nous confirmer votre présence, par téléphone ou sur WhatsApp.",
  hashtag: "#LudivineEtPaul",
} as const

export const ceremonies = wedding.ceremonies

export function ceremonyById(id: CeremonyKind) {
  const ceremony = wedding.ceremonies.find((item) => item.id === id)
  if (!ceremony) throw new Error(`Cérémonie inconnue : ${id}`)
  return ceremony
}

/** Numéro WhatsApp à utiliser pour les liens du site (le premier contact). */
export const primaryContact = wedding.contacts[0]

/**
 * Ouvre WhatsApp avec un message déjà écrit. Le texte est encodé pour l'URL,
 * jamais injecté brut.
 */
export function whatsappUrl(message?: string) {
  const base = primaryContact.whatsapp
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
