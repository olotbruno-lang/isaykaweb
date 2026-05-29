import React, { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { motion, type Variants } from 'framer-motion'

interface ContactItem {
  icon: React.ReactNode
  value: string
  href?: string
}

interface HeroSection2Props extends Omit<React.HTMLAttributes<HTMLElement>, 'title'> {
  slogan?: string
  title: React.ReactNode
  subtitle: string
  callToAction: { text: string; href: string }
  secondaryAction?: { text: string; href: string }
  backgroundImage: string
  contactInfo: ContactItem[]
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.2 } as never,
  },
}

const itemVariants: Variants = {
  hidden:  { y: 22, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.65, ease: 'easeOut' } as never },
}

const HeroSection2 = React.forwardRef<HTMLElement, HeroSection2Props>(
  ({ className, slogan, title, subtitle, callToAction, secondaryAction, backgroundImage, contactInfo, ...props }, ref) => {
    const [isDesktop, setIsDesktop] = useState(false)
    useEffect(() => {
      const mq = window.matchMedia('(min-width: 768px)')
      setIsDesktop(mq.matches)
      const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener('change', handler)
    }, [])

    return (
    <motion.section
      ref={ref as React.Ref<HTMLElement>}
      id="hero"
      className={cn(
        'relative flex w-full min-h-[100dvh] flex-col overflow-hidden bg-[#0c0b09] text-[#f0ebe3] md:flex-row',
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      {...(props as React.ComponentProps<typeof motion.section>)}
    >
      {/* ── Left — content ───────────────────────────────────── */}
      <div className="flex w-full flex-col justify-between px-6 pb-10 pt-0 md:w-1/2 md:p-12 lg:w-3/5 lg:pl-[8vw] lg:pr-[4vw] lg:py-14 relative z-[2]">

        {/* Spacer — replaces old header height */}
        <div className="pt-24 md:pt-28" />

        {/* Main */}
        <motion.main variants={containerVariants} className="py-4 md:py-8">
          <motion.h1
            className="font-display text-[clamp(3rem,9vw,8.5rem)] font-light leading-[0.92] tracking-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          <motion.div
            className="my-7 h-px w-14 bg-[#c8512a]"
            variants={itemVariants}
          />

          <motion.p
            className="mb-10 max-w-[38ch] text-[0.93rem] text-[#7a7368] leading-[1.9]"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          <motion.div className="flex gap-5 items-center flex-wrap" variants={itemVariants}>
            <a
              href={callToAction.href}
              className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#c8512a] hover:text-[#e06840] transition-colors group"
            >
              {callToAction.text}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#7a7368] hover:text-[#f0ebe3] flex items-center gap-2 transition-colors group"
              >
                {secondaryAction.text}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            )}
          </motion.div>
        </motion.main>

        {/* Footer contact */}
        <motion.footer variants={itemVariants} className="pb-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 border-t border-white/[0.06] pt-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-[0.72rem] text-[#7a7368]">
                <span className="text-[#c9a03c] flex-shrink-0">{item.icon}</span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-[#f0ebe3] transition-colors duration-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span>{item.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.footer>
      </div>

      {/* ── Right — image with clip-path reveal ──────────────── */}
      <motion.div
        className="w-full min-h-[45vh] md:w-1/2 md:min-h-full lg:w-2/5 bg-cover bg-center bg-[center_20%]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'saturate(0.78) contrast(1.08)',
        }}
        initial={{ clipPath: isDesktop ? 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        animate={{ clipPath: isDesktop ? 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        transition={{ duration: 1.35, ease: 'easeOut' }}
      />

      {/* Gradient fade — seam between panels (desktop only) */}
      <div className="absolute top-0 right-[40%] bottom-0 w-28 z-[1] hidden lg:block pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
      <div className="absolute top-0 right-[50%] bottom-0 w-28 z-[1] hidden md:block lg:hidden pointer-events-none" style={{ background: 'linear-gradient(to right, var(--bg), transparent)' }} />
    </motion.section>
  )
  }
)

HeroSection2.displayName = 'HeroSection2'
export { HeroSection2 }
