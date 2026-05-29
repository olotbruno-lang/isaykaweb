import { useState } from 'react'

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Une signature reconnaissable',
    body: 'Ni copie, ni tendance : un style graphique propre, une palette affirmée et un trait immédiatement identifiable — que ce soit sur toile, sur mur ou sur objet.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
    title: 'Rue, atelier, et tout entre les deux',
    body: 'Formé dans la rue avant la galerie, Isayka intervient aussi bien sur des fresques extérieures de grand format que sur des commandes intimes, des événements ou des espaces institutionnels.',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Un projet = une conversation',
    body: 'Chaque commande commence par une écoute. Du brief initial à la livraison finale, le projet se construit ensemble — avec des allers-retours, des références, et une vision partagée.',
  },
]

const FAQ = [
  {
    q: 'Qui est Isayka Draw ?',
    a: 'Arnaud Cariou, alias Isayka Draw, est un artiste peintre et graffeur basé dans le Var. Son univers navigue entre art urbain et pratique d\'atelier — avec une approche singulière qui emprunte autant à la culture street art qu\'aux traditions picturales. Sa pratique s\'étend de la toile au mur, de l\'intime au monumental.',
  },
  {
    q: 'Pourquoi faire appel à un artiste graffeur ?',
    a: 'Parce qu\'une fresque, une toile ou une installation artistique transforme un espace de façon que nulle impression ou peinture standard ne peut égaler. L\'art original crée une présence, une narration, une identité visuelle forte — que ce soit pour un intérieur privé, un local professionnel ou un espace public.',
  },
  {
    q: 'Comment se déroule une collaboration ?',
    a: 'Tout commence par une demande via le formulaire de devis. Après un échange pour cerner le projet (lieu, surface, style, budget, délai), une proposition visuelle est élaborée. Le travail est ensuite réalisé en une ou plusieurs sessions selon le format — avec un suivi tout au long du processus.',
  },
  {
    q: 'Dans quelle zone géographique intervenez-vous ?',
    a: 'Isayka est basé dans le Var et intervient principalement en région PACA — Toulon, Marseille, Nice et leurs agglomérations. Des projets hors région sont également envisageables selon leur nature. Contactez directement pour tout projet éloigné.',
  },
  {
    q: 'Quel type de surface ou de support est possible ?',
    a: 'Murs intérieurs et extérieurs, toiles de tous formats, objets (mobilier, casques, instruments, véhicules), décors événementiels temporaires ou permanents. Si la surface peut recevoir une peinture, elle peut recevoir une œuvre.',
  },
]

export default function WhyMe() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="why" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">

        {/* Header */}
        <div className="reveal mb-20">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a] inline-block" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">L'essentiel</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 items-end">
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
              Pourquoi<br /><em className="italic text-[#c8512a]">Isayka ?</em>
            </h2>
            <p className="text-[0.95rem] text-[#7a7368] leading-[1.9]">
              Entre la rue et l'atelier, entre la commande privée et la fresque publique — l'art d'Isayka ne choisit pas. Il traverse les formats, les supports et les contextes avec la même exigence : une œuvre qui parle, qui marque, qui reste.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="p-8 border border-white/[0.06] rounded-2xl bg-[#0c0b09] hover:border-[rgba(200,81,42,0.25)] hover:bg-[#191712] transition-all duration-300 group"
            >
              <div className="w-11 h-11 border border-[rgba(200,160,80,0.2)] rounded-lg flex items-center justify-center text-[#b89a4a] mb-6 group-hover:border-[#c8512a]/40 group-hover:text-[#c8512a] transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="font-display text-xl font-light mb-3 leading-snug">{p.title}</h3>
              <p className="text-[0.85rem] text-[#7a7368] leading-[1.85]">{p.body}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="reveal grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          {/* Left label */}
          <div className="sticky top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#c8512a] inline-block" />
              <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Questions fréquentes</span>
            </div>
            <h3 className="font-display text-[clamp(1.8rem,3vw,2.8rem)] font-light leading-tight mb-5">
              Ce que vous<br />voulez savoir
            </h3>
            <p className="text-[0.85rem] text-[#7a7368] leading-[1.85]">
              Une question non listée ? Le formulaire de contact est là pour ça.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[#c8512a] hover:text-[#e06840] transition-colors group"
            >
              Poser une question
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Accordion */}
          <div className="flex flex-col divide-y divide-white/[0.06]">
            {FAQ.map((item, i) => (
              <div key={i} className="py-5">
                <button
                  className="w-full flex items-center justify-between gap-4 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="text-[0.92rem] font-light tracking-wide group-hover:text-[#c8512a] transition-colors duration-200">
                    {item.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-6 h-6 border border-white/[0.12] rounded-full flex items-center justify-center text-[#7a7368] transition-all duration-300"
                    style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <line x1="5" y1="1" x2="5" y2="9" stroke="currentColor" strokeWidth="1.2"/>
                      <line x1="1" y1="5" x2="9" y2="5" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                  </span>
                </button>
                <div
                  className="overflow-hidden"
                  style={{
                    maxHeight: open === i ? '300px' : '0px',
                    opacity: open === i ? 1 : 0,
                    transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease',
                  }}
                >
                  <p className="text-[0.87rem] text-[#7a7368] leading-[1.9] pt-4 pr-4 sm:pr-10">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
