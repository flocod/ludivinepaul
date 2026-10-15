import { wedding } from "@/lib/wedding"

export type FaqItem = {
  id: string
  question: string
  answer: readonly string[]
}
export type FaqCategory = {
  id: string
  title: string
  items: readonly FaqItem[]
}

/**
 * Les questions des invités, en cinq thèmes. Les `id` sont des slugs : ils
 * servent de liens directs (`/faq#tenue`) et d'ancres dans l'accordéon.
 *
 * Là où nous ne savons pas encore (le nombre de places, la possibilité de
 * venir à plusieurs), la réponse le dit franchement plutôt que d'inventer une
 * règle.
 */
export const faq = [
  {
    id: "jour-j",
    title: "Le jour J",
    items: [
      {
        id: "date-lieux",
        question: "Quand et où se passe le mariage ?",
        answer: [
          `Le ${wedding.date.labelLower}, à ${wedding.city.name}. L'état civil a lieu à la mairie de Logbaba à partir de ${wedding.ceremonies[0].time}, et la bénédiction à Bonanjo, en face du Consulat Général de France, à partir de ${wedding.ceremonies[1].time}.`,
        ],
      },
      {
        id: "deux-ceremonies",
        question: "Faut-il venir aux deux cérémonies ?",
        answer: [
          "Vous êtes attendus aux deux, mais rien n'est obligatoire : venez à celle que vous pouvez. Si vous ne devez en choisir qu'une, la bénédiction de l'après-midi est le moment où nous serons tous réunis.",
        ],
      },
      {
        id: "heure-arrivee",
        question: "À quelle heure faut-il arriver ?",
        answer: [
          "Un peu avant 10 h 00 pour l'état civil, et un peu avant 15 h 00 pour la bénédiction. Cela nous laisse le temps de vous accueillir sans que la cérémonie commence sans vous.",
        ],
      },
      {
        id: "retard",
        question: "Et si j'ai du retard ?",
        answer: [
          "Rejoignez-nous sans stress : une cérémonie ne s'arrête pas à la porte. Entrez discrètement, installez-vous, nous vous verrons arriver avec plaisir.",
        ],
      },
    ],
  },
  {
    id: "venir",
    title: "Venir à Douala",
    items: [
      {
        id: "adresses",
        question: "Quelles sont les adresses exactes ?",
        answer: [
          "Mairie de Logbaba, à Logbaba, Douala — puis Bonanjo, en face du Consulat Général de France, à Douala.",
          "Sur le site, chaque lieu a un lien « Ouvrir l'itinéraire » qui vous dépose devant l'entrée.",
        ],
      },
      {
        id: "depuis-aeroport",
        question: "Comment venir depuis l'aéroport ?",
        answer: [
          "L'aéroport international de Douala est à une trentaine de minutes de Bonanjo, selon la circulation. Un taxi est le plus simple.",
          "Dites-nous si vous arrivez de loin : nous vous aiderons à organiser le trajet.",
        ],
      },
      {
        id: "se-deplacer",
        question: "Comment rejoindre les deux lieux ?",
        answer: [
          "Logbaba et Bonanjo sont deux quartiers de Douala. Un taxi ou une voiture est le plus simple pour passer de l'un à l'autre.",
          "Prévoyez un peu de marge : la circulation à Douala a ses humeurs.",
        ],
      },
    ],
  },
  {
    id: "tenue",
    title: "La tenue",
    items: [
      {
        id: "code",
        question: "Y a-t-il un dress code ?",
        answer: [
          "Une tenue de fête. Si vous cherchez une idée : les tons clairs et les roses se marient bien avec le vert de notre invitation.",
          "Le plus important est que vous soyez à l'aise : la journée est longue et joyeuse.",
        ],
      },
      {
        id: "meteo",
        question: "Quel temps fait-il à Douala en décembre ?",
        answer: [
          "Chaud et humide, avec des températures qui tournent autour de 30 °C. Prévoyez léger.",
          "Les deux cérémonies se déroulent à l'abri.",
        ],
      },
    ],
  },
  {
    id: "avec-qui",
    title: "Avec qui venir",
    items: [
      {
        id: "plus-un",
        question: "Puis-je venir accompagné ?",
        answer: [
          "Dites-le-nous simplement quand vous nous répondez : le nombre de personnes nous aide à bien vous recevoir.",
          "Nous ferons au mieux pour accueillir tout le monde.",
        ],
      },
      {
        id: "enfants",
        question: "Les enfants sont-ils invités ?",
        answer: [
          "Oui, les enfants de la famille et des amis sont les bienvenus. Prévenez-nous pour que nous prévoyions de quoi les accueillir.",
        ],
      },
      {
        id: "photos",
        question: "Puis-je prendre des photos ?",
        answer: [
          "Oui, avec plaisir. Si vous les partagez, utilisez le mot-dièse " +
            wedding.hashtag +
            " : nous aimons voir la journée par vos yeux.",
        ],
      },
    ],
  },
  {
    id: "cadeaux-contact",
    title: "Cadeaux & contact",
    items: [
      {
        id: "cadeaux",
        question: "Y a-t-il une liste de mariage ?",
        answer: [
          "Il n'y en a pas : votre présence est notre plus grand cadeau.",
          "Si vous souhaitez tout de même nous gâter, parlez-nous-en : nous vous dirons ce qui nous ferait vraiment plaisir.",
        ],
      },
      {
        id: "contact",
        question: "Comment vous joindre ?",
        answer: [
          "Par téléphone ou sur WhatsApp, à Paul ou à Ludivine. Les boutons sont sur toutes les pages du site, et nous répondons vite.",
        ],
      },
      {
        id: "reponse-tard",
        question: "Puis-je confirmer tardivement ?",
        answer: [
          "Faites au mieux — et dites-le-nous dès que vous le pouvez.",
          "Nous avons besoin du nombre de convives pour la salle et le repas, donc chaque réponse compte.",
        ],
      },
      {
        id: "invitation",
        question: "Puis-je partager le faire-part ?",
        answer: [
          "Bien sûr. Le faire-part est à télécharger sur la page Infos pratiques : envoyez-le à qui vous voulez.",
        ],
      },
    ],
  },
] as const satisfies readonly FaqCategory[]

/** Tous les identifiants valides. Une faute de frappe ne compile plus. */
export type FaqId = (typeof faq)[number]["items"][number]["id"]

const byId = new Map<string, FaqItem>()
for (const category of faq) {
  for (const item of category.items) byId.set(item.id, item)
}

/** Les six questions mises en avant sur la page d'accueil. */
const homeFaqIds = [
  "deux-ceremonies",
  "heure-arrivee",
  "code",
  "plus-un",
  "cadeaux",
  "contact",
] as const satisfies readonly FaqId[]

export const homeFaq: readonly FaqItem[] = homeFaqIds.map((id) => {
  const item = byId.get(id)
  if (!item) throw new Error(`Question introuvable dans la FAQ : ${id}`)
  return item
})
