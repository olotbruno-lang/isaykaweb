import { useState } from 'react'
import { ACTUALITES, type NewsItem } from '@/data/news'
import { ParallaxShowcase, type ShowcaseItem } from './ui/parallax-showcase'

export default function News() {
  const [showcaseBadge, setShowcaseBadge] = useState<string | null>(null)

  const showcaseItems: ShowcaseItem[] = showcaseBadge
    ? ACTUALITES.filter(n => n.badge === showcaseBadge).map((n: NewsItem) => ({
        id: n.id,
        title: n.title,
        description: n.description,
        image: n.image,
        meta: n.location,
        badge: n.badge,
      }))
    : []

  return (
    <section id="news" className="py-28 bg-[#0c0b09]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a]" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Actualités</span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
            Dernières <em className="italic text-[#c8512a]">nouvelles</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {ACTUALITES.map(item => (
            <div
              key={item.id}
              className="reveal border border-white/[0.06] rounded-2xl overflow-hidden bg-[#191712] group transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c8512a]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] cursor-pointer"
              onClick={() => setShowcaseBadge(item.badge)}
            >
              <div className="overflow-hidden">
                <img src={item.image} alt={`${item.title} — ${item.badge} | Isayka, artiste peintre Var PACA`}
                  className="w-full aspect-[16/10] object-cover transition-all duration-500 group-hover:scale-[1.03]"
                  style={{ filter: 'saturate(0.8)' }}
                  onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1.05)'}
                  onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.8)'} />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-0.5 text-[0.63rem] font-medium tracking-[0.14em] uppercase bg-[rgba(200,81,42,0.1)] text-[#c8512a] rounded-full mb-4">{item.badge}</span>
                <h3 className="font-display text-xl font-normal leading-snug mb-3">{item.title}</h3>
                <p className="text-[0.83rem] text-[#7a7368] leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/[0.06] text-[0.7rem] text-[#7a7368]">
                  <span>{item.location}</span>
                  <span>{item.eventDate ? new Date(item.eventDate).toLocaleDateString('fr-FR', {day:'numeric',month:'long',year:'numeric'}) : 'À venir'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ParallaxShowcase
        open={showcaseBadge !== null}
        items={showcaseItems}
        title={showcaseBadge ?? ''}
        subtitle="Actualités"
        onClose={() => setShowcaseBadge(null)}
      />
    </section>
  )
}
