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
]
