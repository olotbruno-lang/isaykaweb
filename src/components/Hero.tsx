import { HeroSection2 } from './ui/hero-section-2'

const LocationIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const MailIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

const contactInfo = [
  { icon: <LocationIcon />, value: 'Var · PACA, France', href: 'https://maps.google.com/maps?q=Var,+PACA,+France' },
  { icon: <InstagramIcon />, value: '@isayka_draw',       href: 'https://www.instagram.com/isayka_draw/' },
  { icon: <MailIcon />,      value: 'isaykadraw@gmail.com',  href: 'mailto:isaykadraw@gmail.com' },
]

export default function Hero() {
  return (
    <HeroSection2
      slogan="Artiste Peintre · Var · PACA"
      title={
        <>
          Art<br />
          <em className="italic text-[#c8512a]">Urbain</em><br />
          &amp; Toile
          <span className="block font-sign text-[0.42em] text-[#f0ebe3] mt-4 leading-none">Isayka</span>
          <span className="block font-body text-[0.15em] font-medium tracking-[0.22em] uppercase text-[#c8512a] mt-1 leading-none">Artiste Peintre · Var · PACA</span>
        </>
      }
      subtitle="Fresques murales, peintures, céramiques et mixed media — une œuvre ancrée dans le sud, entre graffs et galerie."
      callToAction={{ text: 'Voir la galerie', href: '#gallery' }}
      secondaryAction={{ text: 'Commande sur mesure', href: '#commande' }}
      backgroundImage="/images/hero.jpeg"
      contactInfo={contactInfo}
    />
  )
}
