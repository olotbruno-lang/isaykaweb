import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Échange',
    description: 'Discussion de votre vision et besoins spécifiques',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-11a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Devis',
    description: 'Proposition personnalisée avec détails et tarifs',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Planification',
    description: 'Organisation du projet selon vos contraintes',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Réalisation',
    description: 'Création de votre œuvre unique et sur mesure',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const BENEFITS = [
  {
    title: '100% Unique',
    description: 'Votre œuvre sera conçue exclusivement pour vous, reflétant votre personnalité et vos aspirations.',
  },
  {
    title: 'Collaboration Créative',
    description: 'Vous participez au processus créatif et pouvez guider les choix artistiques à chaque étape.',
  },
  {
    title: 'Qualité Artisanale',
    description: 'Chaque détail est soigneusement travaillé pour garantir une œuvre d\'exception et durable.',
  },
]

export default function ProjectWorkflow() {
  return (
    <section id="comment-ca-marche" className="py-28 bg-[#0c0b09]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#c8512a]" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Processus</span>
            <span className="w-8 h-px bg-[#c8512a]" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-[0.95rem] text-[#7a7368] leading-[1.9] max-w-[60ch] mx-auto">
            Un processus transparent et collaboratif pour transformer votre vision en réalité.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group reveal"
            >
              <div className="flex flex-col gap-4 h-full">
                {/* Number + Icon */}
                <div className="flex items-start gap-3">
                  <div className="text-[2.5rem] font-light text-[#c8512a] leading-none">{step.number}</div>
                  <div className="w-12 h-12 rounded-lg border border-[rgba(200,81,42,0.2)] flex items-center justify-center text-[#c8512a] group-hover:border-[#c8512a]/50 group-hover:bg-[rgba(200,81,42,0.1)] transition-all duration-300 flex-shrink-0 mt-1">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[1.1rem] font-medium mb-2 text-[#f0ebe3]">{step.title}</h3>
                  <p className="text-[0.85rem] text-[#7a7368] leading-[1.7]">{step.description}</p>
                </div>

                {/* Connector line (except last) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute left-[calc(25%+1.5rem)] top-full w-px h-16 bg-gradient-to-b from-[#c8512a]/20 to-transparent mt-4" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div>
          <div className="reveal text-center mb-12">
            <h3 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-tight tracking-tight">
              Pourquoi choisir une œuvre personnalisée ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="reveal p-8 rounded-2xl border border-white/[0.06] hover:border-[#c8512a]/40 bg-[#191712] hover:bg-[#201e18] transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#c8512a] mt-2 flex-shrink-0" />
                  <h4 className="font-medium text-[1rem] text-[#f0ebe3]">{benefit.title}</h4>
                </div>
                <p className="text-[0.88rem] text-[#7a7368] leading-[1.8]">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="reveal text-center mt-16"
        >
          <a
            href="#commande"
            className="inline-flex items-center gap-2 text-[0.78rem] font-medium tracking-[0.12em] uppercase text-[#c8512a] hover:text-[#e06840] transition-colors group"
          >
            Demander un devis
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
