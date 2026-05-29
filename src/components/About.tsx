export default function About() {
  const tags = ['Art Urbain','Peinture Acrylique','Fresque Murale','Mixed Media','Pop Art','Var · PACA']
  return (
    <section id="about" className="py-28 bg-[#0c0b09]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <img src="/images/about-main.jpeg" alt="Isayka (Arnaud Cariou), artiste peintre et graffeur du Var, dans son atelier"
              className="w-full aspect-[4/5] object-cover rounded-2xl transition-all duration-500 hover:saturate-100"
              decoding="async"
              style={{ filter: 'saturate(0.8)' }} />
          </div>
          <div className="reveal">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-[#c8512a]" />
              <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">L'Artiste</span>
            </div>
            <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight">
              Une pratique entre<br />rue et <em className="italic text-[#c8512a]">atelier</em>
            </h2>
            <div className="w-12 h-px bg-[#c8512a] my-8" />
            <div className="text-[0.95rem] text-[#7a7368] leading-[1.9] space-y-4">
              <p>Isayka est artiste peintre et graffeur basé dans le Var. Son univers graphique navigue entre art urbain, peintures sur toile, fresques murales et customisation — toujours avec une signature reconnaissable et une palette affirmée.</p>
              <p>Formé dans la rue avant la galerie, il intervient sur des projets privés et institutionnels dans toute la région PACA : décoration intérieure, fresques extérieures, commandes personnalisées et expositions.</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map(t => (
                <span key={t} className="px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.1em] uppercase border border-[rgba(200,160,80,0.18)] rounded-full text-[#b89a4a] hover:bg-[rgba(184,154,74,0.1)] hover:border-[#b89a4a] transition-all cursor-default">{t}</span>
              ))}
            </div>
            <div className="font-sign text-3xl text-[#c8512a] mt-8 opacity-85">Isayka</div>
          </div>
        </div>
      </div>
    </section>
  )
}
