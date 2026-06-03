import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'

/* ── Social icons ─────────────────────────────────────────────────── */
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  )
}

/* ── Legal modal ──────────────────────────────────────────────────── */
interface LegalModalProps {
  title: string
  children: React.ReactNode
  onClose: () => void
}

function LegalModal({ title, children, onClose }: LegalModalProps) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[250] flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl max-h-[82vh] overflow-y-auto rounded-2xl p-8 md:p-12"
        style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-7">
          <h3 className="font-display text-2xl font-light">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Fermer"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#c8512a]/60 text-[#c8512a] hover:bg-[#c8512a] hover:text-white hover:border-[#c8512a] transition-all text-xl leading-none ml-4 flex-shrink-0"
          >×</button>
        </div>
        <div className="text-[0.88rem] leading-[1.9] space-y-4" style={{ color: 'var(--muted)' }}>
          {children}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

/* ── Data ─────────────────────────────────────────────────────────── */
const SERVICES = [
  { label: 'Pro', href: '#commande' },
  { label: 'Façades', href: '#commande' },
  { label: 'Médias', href: '#commande' },
  { label: 'Tableaux', href: '#gallery' },
  { label: "Déroulement d'un projet", href: '#comment-ca-marche' },
]


const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/isayka_draw/', icon: <IconInstagram /> },
  { label: 'TikTok', href: 'https://www.tiktok.com/@isayka_draw', icon: <IconTikTok /> },
]

/* ── Cookie policy content ────────────────────────────────────────── */
function CookieContent() {
  return (
    <>
      <p>Ce site utilise uniquement des cookies techniques strictement nécessaires à son bon fonctionnement.</p>
      <p><strong style={{ color: 'var(--text)' }}>Cookies utilisés :</strong></p>
      <ul className="list-disc list-inside space-y-1 pl-2">
        <li>Préférence de thème (mode clair / sombre) — stocké en <code className="text-[#c8512a]">localStorage</code></li>
        <li>Aucun cookie publicitaire ou de suivi tiers</li>
        <li>Aucun Google Analytics, Facebook Pixel ou équivalent</li>
      </ul>
      <p>Conformément à la directive ePrivacy et au RGPD, aucun consentement n'est requis pour ces cookies techniques essentiels.</p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Contact : </strong>
        <a href="mailto:isaykadraw@gmail.com" className="text-[#c8512a] hover:underline">isaykadraw@gmail.com</a>
      </p>
    </>
  )
}

/* ── Privacy policy content ───────────────────────────────────────── */
function PrivacyContent() {
  return (
    <>
      <p>
        <strong style={{ color: 'var(--text)' }}>Responsable du traitement : </strong>
        Arnaud Cariou (Isayka Draw) — Var, PACA, France —{' '}
        <a href="mailto:isaykadraw@gmail.com" className="text-[#c8512a] hover:underline">isaykadraw@gmail.com</a>
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Données collectées : </strong>
        Nom, adresse email, téléphone (optionnel) et contenu du message — via les formulaires de contact et de devis uniquement.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Finalité : </strong>
        Répondre à vos demandes de contact, de devis ou d'information sur les prestations proposées.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Base légale : </strong>
        Intérêt légitime et/ou consentement (art. 6 RGPD).
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Conservation : </strong>
        Données conservées le temps de traitement de votre demande, puis supprimées dans un délai maximum de 3 ans.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Vos droits (RGPD) : </strong>
        Accès, rectification, suppression, limitation, portabilité. Pour exercer vos droits :{' '}
        <a href="mailto:isaykadraw@gmail.com" className="text-[#c8512a] hover:underline">isaykadraw@gmail.com</a>
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Réclamation : </strong>
        Vous pouvez adresser une réclamation à la{' '}
        <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#c8512a] hover:underline">CNIL</a>.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Hébergement : </strong>
        Vercel, Inc. — 340 Pine Street, San Francisco, CA 94104, USA — conforme RGPD via clauses contractuelles types (CCT).
      </p>
    </>
  )
}

/* ── Legal notice content ─────────────────────────────────────────── */
function MentionsContent() {
  return (
    <>
      <p>
        <strong style={{ color: 'var(--text)' }}>Éditeur du site : </strong>
        Arnaud Cariou (Isayka Draw), artiste peintre — Var, PACA, France.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Statut / SIRET : </strong>
        Microentrepreneur — SIRET: [À obtenir auprès de l'INSEE]
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Adresse : </strong>
        Var, PACA, France — Adresse postale disponible sur demande
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Contact : </strong>
        <a href="mailto:isaykadraw@gmail.com" className="text-[#c8512a] hover:underline">isaykadraw@gmail.com</a>
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Directeur de la publication : </strong>
        Arnaud Cariou.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Hébergeur : </strong>
        Vercel, Inc. — 340 Pine Street, San Francisco, CA 94104, USA —{' '}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#c8512a] hover:underline">vercel.com</a>
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Propriété intellectuelle : </strong>
        L'ensemble des œuvres, visuels, textes et éléments graphiques présents sur ce site sont la propriété exclusive d'Isayka Draw et protégés par le Code de la propriété intellectuelle. Toute reproduction, totale ou partielle, est interdite sans autorisation écrite préalable.
      </p>
      <p>
        <strong style={{ color: 'var(--text)' }}>Crédits : </strong>
        Conception, design et œuvres — Isayka Draw.
      </p>
    </>
  )
}

/* ── Component ────────────────────────────────────────────────────── */
export default function Footer() {
  const [modal, setModal] = useState<'cookies' | 'privacy' | 'mentions' | null>(null)

  const linkCls = "text-[0.78rem] text-[#7a7368] hover:text-[#f0ebe3] transition-colors duration-200"

  return (
    <>
      <footer className="pt-16 pb-10 bg-[#0c0b09]" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', backgroundImage: 'linear-gradient(to bottom, var(--bg2) 0%, var(--bg) 10rem)' }}>
        <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
          {/* Signature */}
          <div className="font-sign text-3xl text-[#c8512a] opacity-75 mb-12">Isayka</div>

          {/* 4-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-14">

            {/* Services */}
            <div>
              <h4 className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-[#c8512a] mb-5">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map(s => (
                  <li key={s.label}>
                    <a href={s.href} className={linkCls}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-[#c8512a] mb-5">Légal</h4>
              <ul className="space-y-3">
                <li>
                  <button onClick={() => setModal('mentions')} className={linkCls + ' text-left'}>
                    Mentions légales
                  </button>
                </li>
                <li>
                  <button onClick={() => setModal('cookies')} className={linkCls + ' text-left'}>
                    Politique de cookies
                  </button>
                </li>
                <li>
                  <button onClick={() => setModal('privacy')} className={linkCls + ' text-left'}>
                    Politique de confidentialité
                  </button>
                </li>
                <li>
                  <a href="#commande" className={linkCls}>Devis</a>
                </li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-[0.6rem] font-medium tracking-[0.22em] uppercase text-[#c8512a] mb-5">Réseaux</h4>
              <div className="flex gap-3 flex-wrap">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-11 h-11 border border-white/[0.1] rounded-xl flex items-center justify-center text-[#7a7368] hover:text-[#f0ebe3] hover:border-[rgba(200,81,42,0.5)] hover:bg-[#191712] transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-7 flex items-center justify-between flex-wrap gap-4">
            <p className="text-[0.7rem] text-[#7a7368]">© 2026 Isayka · Tous droits réservés · Var, PACA</p>
            <p className="text-[0.7rem] text-[#3a3530]">isaykadraw@gmail.com</p>
          </div>
        </div>
      </footer>

      {/* Legal modals */}
      {modal === 'mentions' && (
        <LegalModal title="Mentions légales" onClose={() => setModal(null)}>
          <MentionsContent />
        </LegalModal>
      )}
      {modal === 'cookies' && (
        <LegalModal title="Politique de cookies" onClose={() => setModal(null)}>
          <CookieContent />
        </LegalModal>
      )}
      {modal === 'privacy' && (
        <LegalModal title="Politique de confidentialité" onClose={() => setModal(null)}>
          <PrivacyContent />
        </LegalModal>
      )}
    </>
  )
}
