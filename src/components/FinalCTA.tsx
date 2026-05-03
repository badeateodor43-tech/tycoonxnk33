import { ArrowRight, Shield } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="fcta-section relative py-32 sm:py-40 lg:py-48 px-5 sm:px-8 overflow-hidden">
      <div className="fcta-noise" />
      <div className="fcta-grid-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="fcta-orb absolute top-[5%] left-1/2 -translate-x-1/2 w-[700px] h-[700px]" />
        <div className="fcta-orb-secondary absolute bottom-[10%] left-[20%] w-[400px] h-[400px]" />
        <div className="fcta-orb-secondary absolute bottom-[15%] right-[15%] w-[350px] h-[350px]" />
      </div>

      <div className="fcta-aurora" />

      <div className="fcta-vertical-lines">
        <span /><span /><span />
      </div>

      <div className="fcta-particles">
        <span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 fcta-glow-line" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="fcta-icon-container mb-10">
          <div className="fcta-icon-outer">
            <div className="fcta-icon-ring fcta-ring-1" />
            <div className="fcta-icon-ring fcta-ring-2" />
            <div className="fcta-icon-ring fcta-ring-3" />
            <div className="fcta-icon-inner">
              <Shield size={28} className="text-purple-200" />
            </div>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/90 leading-[1.1] mb-3 tracking-tight">
          <span className="fcta-text-reveal">Standardul este clar.</span>
        </h2>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-12 tracking-tight">
          <span className="fcta-gradient-text fcta-text-reveal fcta-text-reveal-d1">Tu esti?</span>
        </h2>

        <div className="fcta-divider mx-auto mb-12" />

        <div className="space-y-3 mb-14">
          <p className="text-purple-200/40 text-base sm:text-lg leading-relaxed">
            Nu mai este despre informatie.
          </p>
          <p className="text-purple-200/40 text-base sm:text-lg leading-relaxed">
            Este despre <span className="text-purple-100/65 font-semibold">executie</span>.
          </p>
        </div>

        <div className="fcta-statement-card relative rounded-2xl overflow-hidden mb-14">
          <div className="fcta-statement-bg" />
          <div className="fcta-statement-border" />
          <div className="relative z-10 p-8 sm:p-10">
            <div className="space-y-2">
              <p className="text-purple-100/55 text-[15px] sm:text-base leading-relaxed">
                Nivelul de Activare este deschis.
              </p>
              <p className="text-white/75 text-[15px] sm:text-base leading-relaxed font-semibold">
                Ascensiunea este castigata.
              </p>
            </div>
          </div>
        </div>

        <div className="fcta-button-wrapper">
          <a href="#" className="fcta-button group inline-flex items-center gap-3">
            <span className="fcta-button-bg" />
            <span className="fcta-button-glow" />
            <span className="relative z-10 text-white font-bold text-base sm:text-lg tracking-wide">
              Activeaza-ti accesul
            </span>
            <ArrowRight size={18} className="relative z-10 text-white/80 group-hover:translate-x-1.5 transition-transform duration-400" />
          </a>
        </div>

        <div className="fcta-subtext mt-8">
          <div className="fcta-subtext-line" />
          <p className="text-purple-300/20 text-[11px] font-mono tracking-[0.2em] uppercase py-3">
            Accesul este conditionat de standard
          </p>
          <div className="fcta-subtext-line" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 fcta-glow-line" />
    </section>
  );
}
