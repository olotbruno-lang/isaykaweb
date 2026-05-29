import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { Artwork } from '@/data/artworks'

interface Props { artwork: Artwork | null; onClose: () => void }

export default function Lightbox({ artwork, onClose }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    if (artwork) {
      document.body.dataset.lightboxOpen = '1'
      document.body.style.overflow = 'hidden'
    } else {
      delete document.body.dataset.lightboxOpen
      if (!document.body.dataset.showcaseOpen) document.body.style.overflow = ''
    }
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = '' }
  }, [artwork, onClose])

  return createPortal(
    <div
      className={`fixed inset-0 z-[200] grid place-items-center bg-[rgba(12,11,9,0.96)] backdrop-blur-2xl transition-opacity duration-300 ${artwork ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={`max-w-[min(900px,90vw)] w-full max-h-[92vh] grid grid-cols-1 md:grid-cols-[1fr_280px] bg-[#191712] border border-white/[0.06] rounded-2xl overflow-y-auto md:overflow-hidden transition-all duration-300 ${artwork ? 'scale-100' : 'scale-95'}`}>
        {artwork && <>
          <img src={artwork.image} alt={`${artwork.title} — ${artwork.category}${artwork.technique ? ', ' + artwork.technique : ''} par Isayka, artiste peintre dans le Var (PACA)`} decoding="async" className="w-full object-cover aspect-[4/3] md:aspect-[4/5]" />
          <div className="p-8 flex flex-col gap-3 overflow-y-auto">
            <span className="text-[0.66rem] font-medium tracking-[0.2em] uppercase text-[#c8512a]">{artwork.category}</span>
            <h3 className="font-display text-3xl font-light leading-tight">{artwork.title}</h3>
            <div className="w-8 h-px bg-[#c8512a]" />
            <p className="text-[0.86rem] text-[#7a7368] leading-relaxed">{artwork.description}</p>
            {[
              ['Technique', artwork.technique],
              ['Dimensions', artwork.dimensions],
              ['Année', artwork.year],
            ].map(([label, val]) => val && (
              <div key={label as string}>
                <div className="text-[0.66rem] font-medium tracking-[0.14em] uppercase text-[#3a3530]">{label}</div>
                <div className="text-[0.83rem] text-[#f0ebe3]">{val}</div>
              </div>
            ))}
            <div>
              <div className="text-[0.66rem] font-medium tracking-[0.14em] uppercase text-[#3a3530]">Disponibilité</div>
              <div className={`text-[0.83rem] font-medium ${artwork.isAvailable === true ? 'text-green-400' : artwork.isAvailable === false ? 'text-red-400' : 'text-[#7a7368]'}`}>
                {artwork.isAvailable === true ? 'Disponible' : artwork.isAvailable === false ? 'Vendu' : '—'}
              </div>
            </div>
          </div>
        </>}
      </div>
      <button className="absolute top-5 right-5 md:top-6 md:right-8 w-11 h-11 flex items-center justify-center rounded-full border border-white/[0.2] bg-[rgba(12,11,9,0.72)] backdrop-blur-md text-[#f0ebe3] hover:bg-[#c8512a] hover:border-[#c8512a] transition-all text-2xl leading-none z-10" onClick={onClose} aria-label="Fermer et revenir à la galerie">×</button>
    </div>,
    document.body
  )
}
