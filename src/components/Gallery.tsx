import { useState, useEffect, useRef } from 'react'
import { ARTWORKS, CATEGORIES, type Artwork, type Category } from '@/data/artworks'
import { LiquidButton } from './ui/liquid-glass-button'
import Lightbox from './Lightbox'
import { ParallaxShowcase, type ShowcaseItem } from './ui/parallax-showcase'

export default function Gallery() {
  const [filter, setFilter] = useState<Category>('Tous')
  const [selected, setSelected] = useState<Artwork | null>(null)
  const [showcaseCategory, setShowcaseCategory] = useState<string | null>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const filtered = ARTWORKS.filter(a => a.visible && (filter === 'Tous' || a.category === filter))

  const showcaseItems: ShowcaseItem[] = showcaseCategory
    ? ARTWORKS.filter(a => a.visible && a.category === showcaseCategory).map(a => ({
        id: a.id,
        title: a.title,
        description: a.description ?? 'Œuvre originale.',
        image: a.image,
        meta: a.dimensions ?? undefined,
        badge: a.category,
        onDetail: () => setSelected(a),
      }))
    : []

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
    gridRef.current?.querySelectorAll('.artwork-card').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [filter])

  return (
    <section id="gallery" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-8 mb-14">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#c8512a] inline-block" />
              <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Galerie</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
              Œuvres <em className="italic text-[#c8512a]">récentes</em>
            </h2>
          </div>
          <div className="reveal flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <LiquidButton
                key={cat}
                variant={filter === cat ? 'accent' : 'default'}
                size="sm"
                onClick={() => setFilter(cat)}
              >
                {cat}
              </LiquidButton>
            ))}
          </div>
        </div>

        {/* Masonry */}
        <div className="masonry" ref={gridRef}>
          {filtered.map((art, i) => (
            <div
              key={art.id}
              className="artwork-card reveal break-inside-avoid mb-5 relative rounded-xl overflow-hidden cursor-pointer group"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
              onClick={() => setShowcaseCategory(art.category)}
              tabIndex={0}
              role="button"
              aria-label={`Voir la collection ${art.category}`}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setShowcaseCategory(art.category) }}
            >
              <img
                src={art.image}
                alt={`${art.title} — ${art.category}${art.technique ? ', ' + art.technique : ''}${art.dimensions ? ', ' + art.dimensions : ''} par Isayka, artiste peintre dans le Var (PACA)`}
                loading="lazy"
                decoding="async"
                className="w-full block transition-all duration-700"
                style={{ filter: 'saturate(0.82)', transform: 'scale(1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1.05)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.82)' }}
              />
              {/* Availability badge */}
              {art.isAvailable !== null && (
                <div className={`absolute top-3 right-3 z-[3] px-2.5 py-0.5 rounded-full text-[0.6rem] font-semibold tracking-wider uppercase text-white ${art.isAvailable ? 'bg-green-600/90' : 'bg-red-700/90'}`}>
                  {art.isAvailable ? 'Disponible' : 'Vendu'}
                </div>
              )}
              {/* Info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(12,11,9,0.93)] via-[rgba(12,11,9,0.15)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-[2] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div className="text-[0.63rem] font-medium tracking-[0.18em] uppercase text-[#c8512a] mb-1">{art.category}</div>
                <div className="font-display text-xl font-normal">{art.title}</div>
                {art.dimensions && <div className="text-[0.7rem] text-[#7a7368] mt-0.5">{art.dimensions}</div>}
                <div className="text-[0.6rem] font-medium tracking-[0.14em] uppercase text-[#7a7368] mt-2 flex items-center gap-1.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zm0 9.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zm9.75-9.75A2.25 2.25 0 0115.75 3.75H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zm0 9.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                  Voir la collection
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Parallax category showcase */}
      <ParallaxShowcase
        open={showcaseCategory !== null}
        items={showcaseItems}
        title={showcaseCategory ?? ''}
        subtitle="Collection"
        onClose={() => setShowcaseCategory(null)}
      />

      {/* Lightbox — opened from within showcase */}
      <Lightbox artwork={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
