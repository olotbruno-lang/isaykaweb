import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { ATELIERS } from '@/data/ateliers'

export default function AtelierInitiation() {
  useReveal()
  const [selectedAtelier, setSelectedAtelier] = useState<typeof ATELIERS[0] | null>(null)

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

        {/* Ateliers — images only */}
        <div className="space-y-20">
          {ATELIERS.map((atelier) => (
            <AtelierGallery
              key={atelier.id}
              atelier={atelier}
              onImageClick={() => setSelectedAtelier(atelier)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedAtelier && (
        <AtelierModal atelier={selectedAtelier} onClose={() => setSelectedAtelier(null)} />
      )}
    </section>
  )
}

function AtelierGallery({
  atelier,
  onImageClick
}: {
  atelier: typeof ATELIERS[0];
  onImageClick: () => void
}) {
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
      {atelier.images.map((img, i) => (
        <div
          key={i}
          className="atelier-card reveal break-inside-avoid mb-5 relative rounded-xl overflow-hidden cursor-pointer group"
          style={{ transitionDelay: `${(i % 6) * 60}ms` }}
          onClick={onImageClick}
          role="button"
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onImageClick() }}
        >
          <img
            src={img}
            alt={atelier.title}
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

function AtelierModal({
  atelier,
  onClose
}: {
  atelier: typeof ATELIERS[0];
  onClose: () => void
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#111009] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/[0.06] relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6 md:p-12">
          {/* Close button — fixed position on mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:static md:flex-shrink-0 md:w-10 md:h-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/[0.12] text-white hover:bg-white/[0.08] transition-colors text-2xl md:text-xl z-10"
            aria-label="Fermer"
          >
            ×
          </button>

          {/* Header */}
          <div className="mb-8 pr-14 md:pr-0">
            <h3 className="font-display text-3xl md:text-4xl font-light mb-3">{atelier.title}</h3>
            <p className="text-[0.95rem] text-[#7a7368] leading-[1.9]">
              {atelier.description}
            </p>
          </div>

          {/* Images gallery */}
          <div className="masonry">
            {atelier.images.map((img, i) => (
              <div key={i} className="break-inside-avoid mb-5 rounded-lg overflow-hidden">
                <img
                  src={img}
                  alt={`${atelier.title} - image ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block"
                  style={{ filter: 'saturate(0.85)' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
