import { useEffect, useRef } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { ATELIERS } from '@/data/ateliers'

export default function AtelierInitiation() {
  useReveal()

  return (
    <section id="atelier-initiation" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        {/* Header */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a] inline-block" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Atelier</span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
            Atelier d'<em className="italic text-[#c8512a]">Initiation</em>
          </h2>
        </div>

        {/* Ateliers */}
        {ATELIERS.map((atelier) => (
          <div key={atelier.id} className="mb-20">
            {/* Atelier Header */}
            <div className="reveal mb-10">
              <h3 className="font-display text-3xl font-light mb-3">{atelier.title}</h3>
              <p className="text-[0.95rem] text-[#7a7368] leading-[1.9] max-w-2xl">
                {atelier.description}
              </p>
            </div>

            {/* Masonry Gallery */}
            <AtelierGallery images={atelier.images} atelierTitle={atelier.title} />
          </div>
        ))}
      </div>
    </section>
  )
}

function AtelierGallery({ images, atelierTitle }: { images: string[]; atelierTitle: string }) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
    gridRef.current?.querySelectorAll('.atelier-card').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="masonry" ref={gridRef}>
      {images.map((img, i) => (
        <div
          key={i}
          className="atelier-card reveal break-inside-avoid mb-5 relative rounded-xl overflow-hidden"
          style={{ transitionDelay: `${(i % 6) * 60}ms` }}
        >
          <img
            src={img}
            alt={atelierTitle}
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
  )
}
