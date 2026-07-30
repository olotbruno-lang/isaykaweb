import { useEffect, useRef } from 'react'
import { ARTWORKS } from '@/data/artworks'

export default function AtelierInitiation() {
  const gridRef = useRef<HTMLDivElement>(null)

  const getTimestamp = (imagePath: string) => {
    const match = imagePath.match(/_(\d{13})/);
    return match ? parseInt(match[1]) : 0;
  };

  const atelierImages = ARTWORKS.filter(a => a.visible && a.category === 'Atelier d\'Initiation')
    .sort((a, b) => getTimestamp(b.image) - getTimestamp(a.image))

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
    gridRef.current?.querySelectorAll('.atelier-card').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section id="atelier-initiation" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        {/* Header */}
        <div className="reveal mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a] inline-block" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Atelier</span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
            Atelier d'<em className="italic text-[#c8512a]">Initiation</em>
          </h2>
        </div>

        {/* Masonry Gallery */}
        <div className="masonry" ref={gridRef}>
          {atelierImages.map((art, i) => (
            <div
              key={art.id}
              className="atelier-card reveal break-inside-avoid mb-5 relative rounded-xl overflow-hidden"
              style={{ transitionDelay: `${(i % 6) * 60}ms` }}
            >
              <img
                src={art.image}
                alt={art.title}
                loading="lazy"
                decoding="async"
                className="w-full block transition-all duration-700"
                style={{ filter: 'saturate(0.82)', transform: 'scale(1)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1.05)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.82)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
