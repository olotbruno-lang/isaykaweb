export default function Atelier() {
  return (
    <section id="atelier" className="py-28 bg-[#111009]">
      <div className="max-w-[min(1300px,100%-4rem)] mx-auto">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-[#c8512a]" />
            <span className="text-[0.68rem] font-medium tracking-[0.22em] uppercase text-[#c8512a]">Atelier</span>
          </div>
          <h2 className="font-display text-[clamp(2.4rem,4vw,3.8rem)] font-light leading-tight tracking-tight mb-6">
            Atelier d'<em className="italic text-[#c8512a]">Initiation</em>
          </h2>
          <p className="text-[0.95rem] text-[#7a7368] leading-[1.9] max-w-xl">
            Atelier d'initiation avec la technique éphémère de cellograff, pour plus de lâché prise et une total liberté d'expression.
          </p>
        </div>
      </div>
    </section>
  )
}
