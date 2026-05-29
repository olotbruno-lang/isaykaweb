import { useState, useEffect } from 'react'
import { LiquidButton } from './ui/liquid-glass-button'
import { useTheme } from '@/contexts/ThemeContext'
import NavHeader, { NAV_LINKS } from './ui/nav-header'

const SunIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const MoonIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Menu mobile : fermeture Escape + verrouillage du scroll
  useEffect(() => {
    if (!menuOpen) return
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', esc)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', esc); document.body.style.overflow = prev }
  }, [menuOpen])

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={toggleTheme}
      className={`w-8 h-8 flex items-center justify-center rounded-full text-[#7a7368] hover:text-[#f0ebe3] hover:bg-white/[0.06] transition-all ${className}`}
      aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 md:px-12 transition-all duration-500 ${scrolled ? 'py-4 bg-[rgba(12,11,9,0.94)] backdrop-blur-xl border-b border-white/[0.06]' : 'py-6'}`}>
        <a href="#hero" className="font-sign text-3xl text-[#f0ebe3]">Isayka</a>

        <div className="hidden md:block">
          <NavHeader />
        </div>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <LiquidButton size="sm" onClick={() => document.querySelector('#commande')?.scrollIntoView({ behavior: 'smooth' })}>
            Projet sur mesure
          </LiquidButton>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button className="flex flex-col gap-[5px] w-7 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span className="block h-px bg-[#f0ebe3] transition-transform duration-300" style={{ transform: menuOpen ? 'translateY(6px) rotate(45deg)' : '' }} />
            <span className="block h-px bg-[#f0ebe3] transition-opacity duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-px bg-[#f0ebe3] transition-transform duration-300" style={{ transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : '' }} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-5 sm:gap-9 overflow-y-auto py-20 bg-[rgba(12,11,9,0.97)] backdrop-blur-2xl transition-opacity duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {NAV_LINKS.map(l => (
          <a key={l.href} href={l.href}
            className="font-display text-[2.4rem] sm:text-5xl font-light text-[#7a7368] hover:text-[#f0ebe3] transition-colors"
            onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
