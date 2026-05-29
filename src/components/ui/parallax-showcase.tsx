import { useRef, useEffect, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

export interface ShowcaseItem {
  id: number
  title: string
  description: string
  image: string
  meta?: string
  badge?: string
  onDetail?: () => void
}

/* ── Single parallax item — owns its own refs/hooks ─────────────── */
interface ParallaxItemProps {
  item: ShowcaseItem
  reverse: boolean
  containerRef: RefObject<HTMLElement>
}

function ParallaxItem({ item, reverse, containerRef }: ParallaxItemProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    container: containerRef,
    offset: ['start end', 'center start'],
  })

  const opacity  = useTransform(scrollYProgress, [0, 0.55], [0, 1])
  const clipPath = useTransform(scrollYProgress, [0, 0.55], ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'])
  const y        = useTransform(scrollYProgress, [0, 1], [-50, 0])

  return (
    <div
      ref={ref}
      className={`min-h-screen flex items-center justify-center px-8 md:px-20 gap-12 md:gap-28 flex-col md:flex-row${reverse ? ' md:flex-row-reverse' : ''}`}
    >
      {/* Text */}
      <motion.div style={{ y }} className="flex-1 max-w-sm w-full">
        {item.badge && (
          <div className="text-[0.66rem] font-medium tracking-[0.22em] uppercase text-[#c8512a] mb-4">
            {item.badge}
          </div>
        )}
        <h3 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] font-light leading-tight mb-5">
          {item.title}
        </h3>
        <p className="text-[0.88rem] text-[#7a7368] leading-[1.85]">{item.description}</p>
        {item.meta && (
          <p className="text-[0.72rem] text-[#7a7368] mt-4 tracking-wide">{item.meta}</p>
        )}
        {item.onDetail && (
          <button
            onClick={item.onDetail}
            className="mt-8 text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#c8512a] hover:text-[#e06840] flex items-center gap-2 group transition-colors"
          >
            Détails de l'œuvre
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </motion.div>

      {/* Image — reveals on scroll */}
      <motion.div
        style={{ opacity, clipPath, cursor: item.onDetail ? 'pointer' : 'default' }}
        className="flex-1 max-w-xs md:max-w-md w-full"
        onClick={item.onDetail}
      >
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full object-cover rounded-2xl"
          style={{ aspectRatio: '4/5', filter: 'saturate(0.85) contrast(1.05)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(1.05) contrast(1.05)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'saturate(0.85) contrast(1.05)' }}
        />
      </motion.div>
    </div>
  )
}

/* ── Main showcase overlay ───────────────────────────────────────── */
interface ParallaxShowcaseProps {
  open: boolean
  items: ShowcaseItem[]
  title: string
  subtitle?: string
  onClose: () => void
}

export function ParallaxShowcase({ open, items, title, subtitle, onClose }: ParallaxShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  /* Lock scroll — uses data attr so Lightbox can detect and not double-unlock */
  useEffect(() => {
    if (open) {
      document.body.dataset.showcaseOpen = '1'
      document.body.style.overflow = 'hidden'
    } else {
      delete document.body.dataset.showcaseOpen
      if (!document.body.dataset.lightboxOpen) {
        document.body.style.overflow = ''
      }
    }
    return () => {
      delete document.body.dataset.showcaseOpen
      if (!document.body.dataset.lightboxOpen) {
        document.body.style.overflow = ''
      }
    }
  }, [open])

  /* Escape key */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          data-showcase="open"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[190] flex flex-col"
          style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}
        >
          {/* Sticky header */}
          <div className="flex-shrink-0 flex items-center justify-between px-8 md:px-16 py-5 border-b border-white/[0.06] backdrop-blur-xl" style={{ backgroundColor: 'color-mix(in oklab, var(--bg) 88%, transparent)' }}>
            <div>
              {subtitle && (
                <div className="text-[0.66rem] font-medium tracking-[0.22em] uppercase text-[#c8512a] mb-1">{subtitle}</div>
              )}
              <h2 className="font-display text-2xl md:text-3xl font-light">{title}</h2>
            </div>
            <button
              onClick={onClose}
              className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-full border border-[#c8512a]/60 text-[#c8512a] hover:bg-[#c8512a] hover:text-white hover:border-[#c8512a] transition-all text-2xl leading-none"
              aria-label="Fermer et revenir à la galerie"
            >
              ×
            </button>
          </div>

          {/* Scrollable parallax content */}
          <div ref={containerRef} className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="min-h-screen flex items-center justify-center text-[#7a7368]">Aucun élément</div>
            ) : (
              <>
                {items.map((item, i) => (
                  <ParallaxItem
                    key={item.id}
                    item={item}
                    reverse={i % 2 === 1}
                    containerRef={containerRef as RefObject<HTMLElement>}
                  />
                ))}
                <div className="py-24 flex items-center justify-center">
                  <div className="font-sign text-5xl text-[#c8512a] opacity-40">— Isayka</div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
