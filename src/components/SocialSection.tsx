import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    handle: '@isayka_draw',
    href: 'https://www.instagram.com/isayka_draw/',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
      </svg>
    ),
    color: '#c8512a',
  },
  {
    label: 'TikTok',
    handle: '@isayka_draw',
    href: 'https://www.tiktok.com/@isayka_draw',
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
      </svg>
    ),
    color: '#c8512a',
  },
]

export default function SocialSection() {
  return (
    <section className="py-20 bg-[#0c0b09]" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', backgroundImage: 'linear-gradient(to bottom, var(--bg2) 0%, var(--bg) 10rem)' }}>
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="reveal text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#c8512a]" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Suivez Isayka</span>
            <span className="w-8 h-px bg-[#c8512a]" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-light leading-tight tracking-tight mb-4">
            Restez connecté
          </h2>
          <p className="text-[0.95rem] text-[#7a7368] leading-[1.9] max-w-[50ch] mx-auto">
            Retrouvez les derniers projets, coulisses et inspirations en temps réel.
          </p>
        </div>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
          {SOCIAL_LINKS.map((social, idx) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/[0.06] hover:border-[#c8512a]/40 bg-[#191712] hover:bg-[#201e18] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-[#c8512a] border border-[rgba(200,81,42,0.2)] group-hover:border-[#c8512a]/50 group-hover:bg-[rgba(200,81,42,0.1)] transition-all duration-300">
                {social.icon}
              </div>
              <div className="text-center">
                <div className="text-[0.85rem] font-medium tracking-wide text-white mb-1">{social.label}</div>
                <div className="text-[0.75rem] text-[#7a7368] group-hover:text-[#c8512a] transition-colors">{social.handle}</div>
              </div>
              <div className="w-0 h-0.5 bg-[#c8512a] group-hover:w-8 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
