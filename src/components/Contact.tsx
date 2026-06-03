export default function Contact() {
  const handleScroll = () => {
    const element = document.getElementById('commande')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="flex flex-col items-center text-center reveal">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a]" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Contact</span>
            <span className="w-8 h-px bg-[#c8512a]" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight mb-6 max-w-2xl">
            Vous avez un <em className="italic text-[#c8512a]">projet</em> en tête ?
          </h2>
          <p className="text-[0.95rem] text-[#7a7368] leading-[1.9] mb-8 max-w-xl">
            Remplissez le formulaire de devis pour nous transmettre les détails de votre demande. Nous reviendrons vers vous sous 48 heures avec une proposition adaptée.
          </p>
          <div className="w-12 h-px bg-[#c8512a] mb-8" />
          <button
            onClick={handleScroll}
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-[#c8512a] text-[#f0ebe3] rounded-xl font-medium text-[0.9rem] transition-all duration-300 hover:bg-[#a63f1f] active:scale-95"
          >
            Accéder au formulaire →
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" className="group-hover:translate-x-1 transition-transform">
              <path d="M19 12H5m14-7l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
