export interface NewsItem {
  id: number
  title: string
  description: string
  image: string
  eventDate: string | null
  location: string
  badge: string
  /** 'expo' → Expositions only · 'news' → Actualités only */
  section: 'expo' | 'news'
}

export const NEWS: NewsItem[] = [
  {
    id: 10,
    title: "Exposition à Sainte Anastasie sur Issole avec Daniele Robbiani",
    description: "« Langages du monde », édition inaugurale de la biennale d'art contemporain Escales d'Art en Centre Var, avec Daniele Robbiani en invité d'honneur. Performance plastique à 6 mains avec Daniele Robbiani, Marie Laure Suzzoni et Isayka, dimanche 20 septembre à 16h.",
    image: "/images/news/exposition-vernissage-1789667593.jpeg",
    eventDate: "2026-09-11",
    location: "Espace Culturel Albert Garnier, Rue Notre Dame, Sainte Anastasie sur Issole (83136)",
    badge: "Exposition",
    section: 'expo',
  },
  {
    id: 11,
    title: "Exposition à Sainte Anastasie sur Issole avec Daniele Robbiani",
    description: "« Langages du monde », édition inaugurale de la biennale d'art contemporain Escales d'Art en Centre Var, avec Daniele Robbiani en invité d'honneur. Performance plastique à 6 mains avec Daniele Robbiani, Marie Laure Suzzoni et Isayka, dimanche 20 septembre à 16h.",
    image: "/images/news/exposition-vernissage-1789667593.jpeg",
    eventDate: "2026-09-11",
    location: "Espace Culturel Albert Garnier, Rue Notre Dame, Sainte Anastasie sur Issole (83136)",
    badge: "Exposition",
    section: 'news',
  },
  {
    id: 7,
    title: "Exposition Origines",
    description: "Une exposition hors du temps en Côtes-d'Armor, où les origines seront transmises à travers un style unique. Vernissage mardi 16 Juin à 18h.",
    image: "/images/news/exposition-origines-1789666545.jpeg",
    eventDate: "2026-06-15",
    location: "Salle d'exposition Anatole Le Braz, Penwenan (22710)",
    badge: "Exposition",
    section: 'expo',
  },
  {
    id: 6,
    title: "Live painting – Salon des Arts Contemporains de Hyères",
    description: "Live painting sur toile lors du premier salon des arts contemporains, au forum du casino de Hyères.",
    image: "/images/news/news-6.jpeg",
    eventDate: null,
    location: "Forum du Casino, Hyères",
    badge: "Live Painting",
    section: 'expo',
  },
  {
    id: 5,
    title: "Festival de la Couleur - Carnoules",
    description: "1ère édition du Festival de la Couleur à Carnoules. Dimanche 29 Mars 2026, de 10h à 17h, Place du 19 Mars 1962. Au programme : dessin à la craie, peinture acrylique.",
    image: "/images/news/news-5.png",
    eventDate: "2026-03-29",
    location: "Place du 19 Mars 1962, Carnoules",
    badge: "Festival",
    section: 'expo',
  },
  {
    id: 4,
    title: "Salon des Arts Contemporains - Hyères",
    description: "Fédération Française des Arts Plastiques au Forum du Casino à Hyères. Du 30 Avril au 3 Mai 2026, ouvert de 10h à 19h, entrée gratuite.",
    image: "/images/news/news-4.png",
    eventDate: "2026-04-30",
    location: "Forum du Casino, Avenue Ambroise Thomas, Hyères",
    badge: "Exposition",
    section: 'expo',
  },
  {
    id: 9,
    title: "Session Live Painting à Nice pour un oral",
    description: "Session de live painting réalisée à Nice dans le cadre d'un oral.",
    image: "/images/news/live-painting-nice-oral-1.jpeg",
    eventDate: null,
    location: "Nice",
    badge: "Live Painting",
    section: 'expo',
  },
  {
    id: 8,
    title: "Session Live Painting à Nice pour un oral",
    description: "Session de live painting réalisée à Nice dans le cadre d'un oral.",
    image: "/images/news/live-painting-nice-oral-2.jpeg",
    eventDate: null,
    location: "Nice",
    badge: "Live Painting",
    section: 'expo',
  },
  {
    id: 3,
    title: "Participation au Numa Festival à Nice",
    description: "Fresque réalisée dans l'enceinte du 109 à Nice à l'occasion du Numa Festival, réunissant plus de 40 street artistes internationaux. Organisé par Otom.",
    image: "/images/news/news-3.jpeg",
    eventDate: null,
    location: "Le 109, Nice",
    badge: "Street Art",
    section: 'news',
  }
]

export const EXPOS = NEWS.filter(n => n.section === 'expo')
export const ACTUALITES = NEWS.filter(n => n.section === 'news')
