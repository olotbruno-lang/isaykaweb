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

const FacebookIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const contactInfo = [
  { icon: <LocationIcon />, value: 'Var · PACA, France', href: 'https://maps.google.com/maps?q=Var,+PACA,+France' },
  { icon: <InstagramIcon />, value: '@isayka_draw',       href: 'https://www.instagram.com/isayka_draw/' },
  { icon: <FacebookIcon />,  value: 'Isayka Draw',        href: 'https://www.facebook.com/p/Isayka-Draw-61553645933560/' },
  { icon: <MailIcon />,      value: 'isaykadraw@gmail.com',  href: 'mailto:isaykadraw@gmail.com' },
]

const CAROUSEL_IMAGES = [
  { src: '/images/hero/hero-1.jpg', alt: 'Tour avec grenouille - illustration colorée' },
  { src: '/images/hero/hero-2.jpg', alt: 'Fresque murale extérieure - street art coloré' },
  { src: '/images/hero/hero-3.jpg', alt: 'Travail en studio - Isayka avec ses peintures' },
  { src: '/images/hero/hero-4.jpg', alt: 'Portfolio - galerie de peintures' },
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
      backgroundImages={CAROUSEL_IMAGES}
      contactInfo={contactInfo}
    />
  )
}
