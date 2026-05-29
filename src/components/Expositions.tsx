import { useState } from 'react'
import { EXPOS, type NewsItem } from '@/data/news'
import { ParallaxShowcase, type ShowcaseItem } from './ui/parallax-showcase'

export default function Expositions() {
  const [showcaseBadge, setShowcaseBadge] = useState<string | null>(null)

  const [featured, ...rest] = EXPOS

  const showcaseItems: ShowcaseItem[] = showcaseBadge
    ? EXPOS.filter(n => n.badge === showcaseBadge).map((n: NewsItem) => ({
        id: n.id,
        title: n.title,
        description: n.description,
        image: n.image,
        meta: n.location,
        badge: n.badge,
      }))
    : []

  const handleCardClick = (item: NewsItem) => setShowcaseBadge(item.badge)

  return (
    <section id="expositions" className="py-28 bg-[#0c0b09]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">

        {/* Header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a]" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Agenda</span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
            Expositions &amp; <em className="italic text-[#c8512a]">Événements</em>
          </h2>
          <p className="text-[0.93rem] text-[#7a7368] mt-4 max-w-[55ch] leading-relaxed">
            Retrouvez Isayka lors d'expositions, salons et événements artistiques dans le Var et la région PACA.
          </p>
        </div>

        {/* Featured — large hero card */}
        <div
          className="reveal mb-6 group relative overflow-hidden rounded-2xl border border-[rgba(200,160,80,0.18)] hover:border-[#c8512a]/40 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer"
          onClick={() => handleCardClick(featured)}
        >
          <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[21/9] md:aspect-[21/7]">
            <img
              src={featured.image}
              alt={`${featured.title} — ${featured.badge}, ${featured.location} | Isayka, artiste peintre Var PACA`}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
              style={{ filter: 'saturate(0.75) contrast(1.05)' }}
              onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.95) contrast(1.05)'}
              onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.75) contrast(1.05)'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b09] via-[#0c0b09]/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09]/80 via-transparent to-transparent" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
            <span className="inline-block self-start px-3 py-1 text-[0.63rem] font-medium tracking-[0.14em] uppercase bg-[rgba(200,81,42,0.85)] text-white rounded-full mb-4 backdrop-blur-sm">
              {featured.badge}
            </span>
            <h3 className="font-display text-[clamp(1.4rem,3vw,2.6rem)] font-light leading-tight mb-3 max-w-[55ch]">
              {featured.title}
            </h3>
            <p className="text-[0.88rem] text-[#7a7368] max-w-[60ch] leading-relaxed mb-4 hidden md:block">
              {featured.description}
            </p>
            <div className="flex items-center gap-6 text-[0.72rem] text-[#7a7368]">
              <span className="flex items-center gap-1.5">
                <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                {featured.location}
              </span>
              {featured.eventDate && (
                <span>{new Date(featured.eventDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              )}
              <span className="ml-auto flex items-center gap-1.5 text-[#c8512a] group-hover:gap-2.5 transition-all">
                Voir les événements similaires
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Grid — rest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map(item => (
            <div
              key={item.id}
              className="reveal group overflow-hidden rounded-xl border border-white/[0.06] bg-[#191712] hover:border-[#c8512a]/40 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-all duration-300 cursor-pointer"
              onClick={() => handleCardClick(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.badge}, ${item.location} | Isayka`}
                  className="w-full aspect-[16/10] object-cover transition-all duration-500 group-hover:scale-[1.04]"
                  style={{ filter: 'saturate(0.8)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1)'}
                  onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.8)'}
                />
                <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[0.6rem] font-medium tracking-[0.12em] uppercase bg-[rgba(200,81,42,0.82)] text-white rounded-full backdrop-blur-sm">
                  {item.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-[1.05rem] font-normal leading-snug mb-2">{item.title}</h3>
                <p className="text-[0.8rem] text-[#7a7368] leading-relaxed line-clamp-2">{item.description}</p>
                <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/[0.06] text-[0.68rem] text-[#7a7368]">
                  <span>{item.location}</span>
                  <span>{item.eventDate ? new Date(item.eventDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : '—'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Parallax showcase */}
      <ParallaxShowcase
        open={showcaseBadge !== null}
        items={showcaseItems}
        title={showcaseBadge ?? ''}
        subtitle="Événements"
        onClose={() => setShowcaseBadge(null)}
      />
    </section>
  )
}
