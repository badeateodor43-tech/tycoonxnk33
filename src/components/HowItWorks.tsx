import { Unlock, Zap, TrendingUp, Crown, ChevronRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Unlock,
    title: 'Acces',
    description:
      'Intri in ecosistem si primesti cadrul clar de executie si invatare aplicata. Standardele sunt definite. Asteptarile sunt clare.',
    emphasis: 'Nu cumperi informatie.\nIntri intr-un sistem.',
    phase: 'Initiere',
    color: 'from-purple-600 to-violet-500',
    glow: 'rgba(139, 92, 246, 0.5)',
    ring: 'rgba(139, 92, 246, 0.3)',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Executie & Dezvoltare Aplicata',
    description:
      'Inveti prin aplicare directa, in timp ce generezi rezultate reale. Executia corecta produce valoare. Valoarea produce monetizare.',
    emphasis: 'Nu studiezi mecanismul.\nIl operezi.',
    phase: 'Actiune',
    color: 'from-fuchsia-500 to-purple-500',
    glow: 'rgba(192, 132, 252, 0.5)',
    ring: 'rgba(192, 132, 252, 0.3)',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Monetizare & Validare',
    description:
      'Executia corecta produce rezultate masurabile. Rezultatele genereaza valoare. Valoarea genereaza monetizare.',
    emphasis:
      'Performanta este validata prin rezultate reale, nu prin declaratii.',
    phase: 'Rezultat',
    color: 'from-violet-500 to-purple-400',
    glow: 'rgba(167, 139, 250, 0.5)',
    ring: 'rgba(167, 139, 250, 0.3)',
  },
  {
    number: '04',
    icon: Crown,
    title: 'Promovare',
    description:
      'Nivelul urmator nu se ofera. Se castiga prin competenta demonstrata si rezultate masurabile.',
    emphasis: 'Ascensiunea este consecinta performantei.',
    phase: 'Ascensiune',
    color: 'from-purple-400 to-fuchsia-400',
    glow: 'rgba(216, 180, 254, 0.5)',
    ring: 'rgba(216, 180, 254, 0.3)',
  },
];

function StepCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const Icon = step.icon;
  const isLast = index === steps.length - 1;

  return (
    <div className="asc-step group relative">
      <div className="flex gap-6 sm:gap-8 lg:gap-10">
        <div className="flex-shrink-0 flex flex-col items-center relative z-10">
          <div className="asc-node-outer relative" style={{ '--node-glow': step.glow, '--node-ring': step.ring } as React.CSSProperties}>
            <div className={`asc-node w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl bg-gradient-to-br ${step.color} p-[1px] relative`}>
              <div className="w-full h-full rounded-2xl bg-[#080412] flex items-center justify-center relative overflow-hidden">
                <div className="asc-node-pulse absolute inset-0 rounded-2xl" />
                <Icon size={24} className="text-purple-200 relative z-10 group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div className="asc-node-ring absolute -inset-2 rounded-2xl border opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ borderColor: step.ring }} />
          </div>

          {!isLast && (
            <div className="asc-connector relative w-[2px] flex-1 min-h-[40px] mt-3">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/25 via-purple-500/10 to-purple-500/25" />
              <div className="asc-connector-pulse absolute inset-0" style={{ '--pulse-color': step.glow } as React.CSSProperties} />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 pb-10 sm:pb-14">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="text-[10px] font-mono font-black tracking-[0.35em] text-purple-500/40 group-hover:text-purple-400/70 transition-colors duration-500">
              STEP {step.number}
            </span>
            <div className="h-px flex-1 max-w-[50px] bg-gradient-to-r from-purple-500/20 to-transparent group-hover:from-purple-500/40 transition-all duration-500" />
            <span className="asc-phase-badge text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1 rounded-full">
              {step.phase}
            </span>
          </div>

          <div className="asc-card relative rounded-2xl overflow-hidden mt-4">
            <div className="asc-card-border" style={{ '--border-glow': step.glow } as React.CSSProperties} />
            <div className="asc-card-shine" />

            <div className="relative z-10 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-purple-50 transition-colors duration-500">
                {step.title}
              </h3>

              <p className="text-purple-200/40 leading-relaxed text-[15px] mb-6 group-hover:text-purple-200/55 transition-colors duration-500">
                {step.description}
              </p>

              <div className="asc-emphasis relative pl-5 py-3">
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-gradient-to-b ${step.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />
                <div className="asc-emphasis-glow absolute left-0 top-0 bottom-0 w-[3px] rounded-full" style={{ '--em-glow': step.glow } as React.CSSProperties} />
                <p className="text-purple-200/60 text-sm sm:text-[15px] italic whitespace-pre-line leading-relaxed font-medium group-hover:text-purple-200/80 transition-colors duration-500">
                  {step.emphasis}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-5 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-purple-400/70 text-xs font-semibold tracking-wide">Nivel {step.number}</span>
                <ChevronRight size={12} className="text-purple-400/50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="cum-functioneaza"
      className="asc-section relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden"
    >
      <div className="asc-grid-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="asc-orb absolute top-[5%] right-[-8%] w-[550px] h-[550px]" />
        <div className="asc-orb-alt absolute bottom-[5%] left-[-10%] w-[450px] h-[450px]" />
        <div className="asc-orb-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />
      </div>

      <div className="asc-particles">
        <span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 asc-glow-line-top" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="asc-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6">
            <div className="asc-badge-dot">
              <span /><span />
            </div>
            <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">
              Cum Functioneaza
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-7">
            Mecanismul de{' '}
            <span className="asc-title-gradient">Ascensiune</span>
          </h2>

          <p className="text-white text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Un proces structurat unde nivelul este demonstrat prin executie
            masurata, nu prin declaratie.
          </p>
        </div>

        <div className="relative">
          {steps.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 asc-glow-line-bottom" />
    </section>
  );
}
