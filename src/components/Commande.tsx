import { useState, useCallback } from 'react'
import emailjs from '@emailjs/browser'
import { LiquidButton } from './ui/liquid-glass-button'

const svgProps = { width: 22, height: 22, fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24', 'aria-hidden': true }

const TYPES = [
  { icon: (<svg {...svgProps}><rect x="6" y="9" width="9" height="12" rx="2"/><path d="M9 9V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v4"/><path d="M18 5h.01M16 3h.01M20 4h.01M18 8h.01"/></svg>), title: 'Graffiti & Street Art', desc: 'Extérieur, façades, espaces urbains' },
  { icon: (<svg {...svgProps}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 21"/></svg>), title: 'Peinture sur toile', desc: 'Format personnalisé, tous styles' },
  { icon: (<svg {...svgProps}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M2 22h20"/><path d="M9 6h.01M9 10h.01M9 14h.01M15 6h.01M15 10h.01M15 14h.01"/></svg>), title: 'Fresque murale', desc: 'Intérieur & extérieur, grand format' },
  { icon: (<svg {...svgProps}><path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9z"/></svg>), title: 'Customisation & autre', desc: 'Mobilier, objet, espace événementiel' },
]

export default function Commande() {
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    // Honeypot anti-spam : si rempli = bot, on stoppe silencieusement
    if (data.get('company')) { setSubmitted(true); form.reset(); return }

    const SVC  = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TPL  = import.meta.env.VITE_EMAILJS_TEMPLATE_DEVIS
    const TPLC = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT
    const KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Fallback mailto si EmailJS non configuré
    if (!SVC || !TPL || !KEY) {
      const labels: Record<string, string> = {
        name: 'Nom', email: 'Email', phone: 'Téléphone', type: 'Type de projet',
        surface: 'Surface / Support', dims: 'Dimensions', budget: 'Budget',
        location: 'Localisation', timeline: 'Délai souhaité', inspi: "Liens d'inspiration", desc: 'Description',
      }
      const lines: string[] = []
      data.forEach((val, key) => { if (val) lines.push(`${labels[key] ?? key}: ${val}`) })
      window.location.href = `mailto:contact@isayka.fr?subject=${encodeURIComponent('Demande de devis — Isayka Draw')}&body=${encodeURIComponent(lines.join('\n'))}`
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      form.reset()
      return
    }

    setLoading(true)
    setError(null)
    try {
      // 1. Email complet à l'artiste
      await emailjs.sendForm(SVC, TPL, form, { publicKey: KEY })
      // 2. Confirmation automatique au visiteur
      if (TPLC) {
        await emailjs.send(SVC, TPLC, {
          to_name:  data.get('name')  as string,
          email: data.get('email') as string,
          message_content: `Type: ${data.get('type') || '—'}\nSurface: ${data.get('surface') || '—'}\nDimensions: ${data.get('dims') || '—'}\nBudget: ${data.get('budget') || '—'}\n\n${data.get('desc') || ''}`,
        }, { publicKey: KEY })
      }
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 6000)
      form.reset()
    } catch (err) {
      console.error('EmailJS:', err)
      setError('Erreur d\'envoi. Contactez directement contact@isayka.fr')
    } finally {
      setLoading(false)
    }
  }

  const inputCls = "w-full bg-white/[0.6] dark:bg-white/[0.08] backdrop-blur-[20px] border border-[#c8512a]/40 dark:border-[#c8512a]/35 text-[#1a1815] dark:text-[#f0ebe3] rounded-xl px-4 py-3 text-[0.88rem] font-light outline-none focus:border-[#c8512a]/70 focus:ring-2 focus:ring-[#c8512a]/40 transition-all duration-200 placeholder:text-[#8b7863] dark:placeholder:text-[#a89980] shadow-[0_0_30px_rgba(200,81,42,0.25),inset_0_0_1px_rgba(200,81,42,0.2),inset_1px_1px_2px_rgba(255,255,255,0.3),inset_-1px_-1px_2px_rgba(0,0,0,0.08)]"
  const selectCls = inputCls + " appearance-none cursor-pointer bg-[image:url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%221a1815%22 stroke-width=%222%22%3e%3cpath d=%22M6 9l6 6 6-6%22/%3e%3c/svg%3e')] dark:bg-[image:url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22f0ebe3%22 stroke-width=%222%22%3e%3cpath d=%22M6 9l6 6 6-6%22/%3e%3c/svg%3e')] bg-no-repeat bg-right bg-origin-content pr-10"
  const labelCls = "block text-[0.7rem] font-medium tracking-[0.1em] uppercase text-[#7a7368] mb-1.5"

  return (
    <>
      <style>{`
        select#type {
          color-scheme: light;
        }
        select#type option {
          color: #1a1815 !important;
          background-color: #ffffff !important;
          padding: 8px 4px;
        }
        select#type option[value=""] {
          color: #c8512a !important;
        }
        select#type option:checked {
          color: #1a1815 !important;
          background: linear-gradient(rgba(200, 81, 42, 0.2), rgba(200, 81, 42, 0.2)) !important;
          background-color: #f5f5f5 !important;
        }

        /* Light mode blur + enhanced glow */
        @media (prefers-color-scheme: light) {
          input[class*="bg-"], textarea[class*="bg-"], select[class*="bg-"] {
            box-shadow: 0 0 25px rgba(200, 81, 42, 0.2), 0 0 50px rgba(200, 81, 42, 0.1), inset 0 0 1px rgba(200, 81, 42, 0.15) !important;
            filter: blur(0) !important;
          }
        }

        @media (prefers-color-scheme: dark) {
          select#type {
            color-scheme: dark;
          }
          select#type option {
            color: #f0ebe3 !important;
            background-color: #191712 !important;
          }
          select#type option[value=""] {
            color: #c8512a !important;
          }
          select#type option:checked {
            color: #f0ebe3 !important;
            background: linear-gradient(rgba(200, 81, 42, 0.3), rgba(200, 81, 42, 0.3)) !important;
            background-color: #2a2622 !important;
          }
        }
      `}</style>
    <section id="commande" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#c8512a]" />
              <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Sur mesure</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight mb-6">
              Donnez vie à<br />votre <em className="italic text-[#c8512a]">projet</em>
            </h2>
            <p className="text-[0.95rem] text-[#7a7368] leading-[1.9] mb-8">
              Graffiti, peinture murale, fresque ou décoration — chaque projet est pensé et réalisé sur mesure, du brief à la livraison.
            </p>
            <div className="flex flex-col gap-4">
              {TYPES.map(t => (
                <div key={t.title} className="flex items-center gap-4 p-4 border border-[#c8512a]/25 rounded-xl bg-white/[0.6] dark:bg-white/[0.08] backdrop-blur-md hover:border-[#c8512a]/50 dark:hover:border-[#c8512a]/60 hover:bg-white/[0.75] dark:hover:bg-white/[0.12] hover:translate-x-1 transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(200,81,42,0.1),inset_1px_1px_2px_rgba(255,255,255,0.15),inset_-1px_-1px_2px_rgba(0,0,0,0.08)]">
                  <span className="flex-shrink-0 text-[#c8512a]">{t.icon}</span>
                  <div>
                    <strong className="block text-[0.85rem] font-medium tracking-wide mb-0.5 text-[#1a1815] dark:text-white">{t.title}</strong>
                    <span className="text-[0.76rem] text-[#8b7863] dark:text-[#7a7368]">{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="bg-[#191712] border border-white/[0.06] rounded-2xl p-5 sm:p-8 md:p-10">
              <form onSubmit={handleSubmit}>
                <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" style={{ display: 'none' }} />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {[
                    {id:'name',label:'Nom complet *',type:'text',placeholder:'Votre nom',required:true,col:1,ac:'name'},
                    {id:'email',label:'Email *',type:'email',placeholder:'votre@email.fr',required:true,col:1,ac:'email'},
                    {id:'phone',label:'Téléphone',type:'tel',placeholder:'06 XX XX XX XX',required:false,col:1,ac:'tel'},
                  ].map(f => (
                    <div key={f.id} className={f.col === 1 ? '' : 'col-span-2'}>
                      <label htmlFor={f.id} className={labelCls}>{f.label}</label>
                      <input id={f.id} name={f.id} type={f.type} autoComplete={f.ac} placeholder={f.placeholder} required={f.required} className={inputCls} />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="type" className={labelCls}>Type de projet *</label>
                    <select id="type" name="type" required className={selectCls}>
                      <option value="">Choisir…</option>
                      <option>Graffiti / Street Art</option>
                      <option>Peinture sur toile</option>
                      <option>Fresque murale</option>
                      <option>Customisation</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  {[
                    {id:'surface',label:'Surface / Support',ph:'Mur, toile, objet…'},
                    {id:'dims',label:'Dimensions',ph:'2m × 3m, Format A2…'},
                    {id:'budget',label:'Budget indicatif',ph:'500–1000 €, Ouvert…'},
                    {id:'location',label:'Localisation',ph:'Var, PACA, France…'},
                    {id:'timeline',label:'Délai souhaité',ph:'Urgent, 1–2 mois…'},
                    {id:'inspi',label:'Liens d\'inspiration',ph:'https://…'},
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className={labelCls}>{f.label}</label>
                      <input id={f.id} name={f.id} placeholder={f.ph} className={inputCls} />
                    </div>
                  ))}
                  <div className="col-span-2">
                    <label htmlFor="desc" className={labelCls}>Description du projet *</label>
                    <textarea id="desc" name="desc" required rows={4} placeholder="Décrivez votre projet, ambiance souhaitée, couleurs, références…" className={inputCls + ' resize-y'} />
                  </div>
                </div>

                {error && (
                  <p className="mt-4 text-[0.82rem] text-red-400 text-center">{error}</p>
                )}

                {/* Actions */}
                <div className="mt-8">
                  <LiquidButton size="lg" className="w-full justify-center" type="submit" disabled={loading}>
                    {loading ? 'Envoi en cours…' : submitted ? '✓ Demande envoyée !' : 'Envoyer ma demande →'}
                  </LiquidButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
