export interface Atelier {
  id: number
  title: string
  description: string
  images: string[]
}

export const ATELIERS: Atelier[] = [
  {
    id: 1,
    title: 'Cellograff',
    description: 'Atelier d\'initiation avec la technique éphémère de cellograff, pour plus de lâché prise et une total liberté d\'expression.',
    images: [
      '/images/atelier_initiation_1_1785404500000.jpeg',
      '/images/atelier_initiation_2_1785404400000.jpeg',
      '/images/atelier_initiation_3_1785404300000.jpeg',
      '/images/atelier_initiation_4_1785404200000.jpeg',
      '/images/atelier_initiation_5_1785404100000.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Petits Supports',
    description: 'Initiation sur des petits supports, bombes de peinture, pots, cartons entoilés… idéale pour ramener un souvenir à la maison !',
    images: [
      '/images/atelier_petits_supports_real_1.jpeg',
      '/images/atelier_petits_supports_real_2.jpeg',
      '/images/atelier_petits_supports_real_3.jpeg',
      '/images/atelier_petits_supports_real_4.jpeg',
      '/images/atelier_petits_supports_real_5.jpeg',
    ],
  },
  {
    id: 3,
    title: 'Aérosol',
    description: 'Utilisation de l\'aérosol, travail sur les techniques de base, les couleurs et les effets de mouvements.',
    images: [
      '/images/atelier_aerosol_1.jpeg',
      '/images/atelier_aerosol_2.jpeg',
      '/images/atelier_aerosol_3.jpeg',
      '/images/atelier_aerosol_4.jpeg',
      '/images/atelier_aerosol_5.jpeg',
    ],
  },
]
