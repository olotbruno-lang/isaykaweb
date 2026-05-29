import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { LiquidButton } from './ui/liquid-glass-button'

const inputCls = "w-full bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-white/[0.09] shadow-[0_2px_6px_rgba(0,0,0,0.08),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.22),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.55),inset_0_0_6px_6px_rgba(255,255,255,0.04),0_0_10px_rgba(200,81,42,0.08)] text-[#f0ebe3] rounded-xl px-4 py-3 text-[0.88rem] font-light outline-none focus:border-[rgba(200,81,42,0.45)] focus:shadow-[0_2px_6px_rgba(0,0,0,0.08),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.25),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.55),inset_0_0_6px_6px_rgba(255,255,255,0.05),0_0_0_3px_rgba(200,81,42,0.10),0_0_18px_rgba(200,81,42,0.09)] transition-all duration-300 placeholder:text-[#4a4238]"

export default function Contact() {
  const [sent,     setSent]     = useState(false)
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const data = new FormData(form)

    // Honeypot anti-spam : si rempli = bot, on stoppe silencieusement
    if (data.get('company')) { setSent(true); form.reset(); return }

    const SVC  = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const TPL  = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT
    const TPLC = import.meta.env.VITE_EMAILJS_TEMPLATE_CONFIRM
    const KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Fallback mailto si EmailJS non configuré
    if (!SVC || !TPL || !KEY) {
      const name    = data.get('name') ?? ''
      const email   = data.get('email') ?? ''
      const subject = data.get('subject') ?? 'Message via site'
      const message = data.get('message') ?? ''
      const body = `Nom: ${name}\nEmail: ${email}\n\n${message}`
      window.location.href = `mailto:contact@isayka.fr?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`
      setSent(true)
      setTimeout(() => setSent(false), 4000)
      form.reset()
      return
    }

    setLoading(true)
    setError(null)
    try {
      await emailjs.sendForm(SVC, TPL, form, { publicKey: KEY })
      if (TPLC) {
        await emailjs.send(SVC, TPLC, {
          to_name:  data.get('name')  as string,
          to_email: data.get('email') as string,
        }, { publicKey: KEY })
      }
      setSent(true)
      setTimeout(() => setSent(false), 4000)
      form.reset()
    } catch (err) {
      console.error('EmailJS:', err)
      setError('Erreur d\'envoi. Contactez directement contact@isayka.fr')
    } finally {
      setLoading(false)
    }
  }

  const details = [
    { icon: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>), label: 'Localisation', val: 'Var — PACA, France', href: 'https://www.google.com/maps/search/?api=1&query=Var%2C+PACA%2C+France', external: true },
    { icon: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>), label: 'Email', val: 'contact@isayka.fr', href: 'mailto:contact@isayka.fr', external: false },
    { icon: (<svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>), label: 'Instagram', val: '@isayka_draw', href: 'https://www.instagram.com/isayka_draw', external: true },
  ]

  return (
    <section id="contact" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-20 items-start">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#c8512a]" />
              <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Contact</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
              Parlons de<br />votre <em className="italic text-[#c8512a]">projet</em>
            </h2>
            <div className="w-12 h-px bg-[#c8512a] my-8" />
            {details.map(d => (
              <a
                key={d.label}
                href={d.href}
                {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                aria-label={`${d.label} : ${d.val}`}
                className="flex gap-4 items-start mt-6 group"
              >
                <div className="w-10 h-10 border border-[rgba(200,160,80,0.18)] rounded-md flex items-center justify-center flex-shrink-0 text-[#b89a4a] group-hover:bg-[rgba(184,154,74,0.1)] group-hover:border-[#c8512a]/40 group-hover:text-[#c8512a] transition-colors">{d.icon}</div>
                <div>
                  <div className="text-[0.68rem] font-medium tracking-[0.14em] uppercase text-[#7a7368] mb-0.5">{d.label}</div>
                  <div className="text-[0.9rem] group-hover:text-[#c8512a] transition-colors">{d.val}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="reveal">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" style={{ display: 'none' }} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" aria-label="Nom complet" autoComplete="name" placeholder="Nom complet *" required className={inputCls} />
                <input name="email" type="email" aria-label="Email" autoComplete="email" placeholder="Email *" required className={inputCls} />
              </div>
              <input name="subject" aria-label="Sujet" placeholder="Sujet" className={inputCls} />
              <textarea name="message" aria-label="Votre message" rows={5} placeholder="Votre message *" required className={inputCls + ' resize-y'} />
              {error && (
                <p className="text-[0.82rem] text-red-400 text-center -mb-1">{error}</p>
              )}
              <LiquidButton size="lg" className="justify-center" type="submit" disabled={loading}>
                {loading ? 'Envoi en cours…' : sent ? '✓ Message envoyé — merci !' : 'Envoyer le message →'}
              </LiquidButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
