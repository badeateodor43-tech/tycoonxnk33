import { Activity, Target, Award, Zap, BarChart3, Lock, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Activity,
    label: 'Masurare',
    title: 'Progresul Este Masurat',
    description: 'Fiecare actiune, fiecare rezultat, fiecare contributie este cuantificata. Nu exista loc pentru presupuneri.',
    stat: '100%',
    statLabel: 'Transparenta',
    accent: 'from-purple-500 to-violet-600',
    glow: 'rgba(139, 92, 246, 0.4)',
  },
  {
    icon: Target,
    label: 'Nivel',
    title: 'Nivelul Este Castigat',
    description: 'Pozitia ta in sistem reflecta direct performanta demonstrata. Avansarea vine prin executie, nu prin vechime.',
    stat: '0',
    statLabel: 'Promisiuni Goale',
    accent: 'from-fuchsia-500 to-purple-600',
    glow: 'rgba(192, 132, 252, 0.4)',
  },
  {
    icon: Award,
    label: 'Standard',
    title: 'Performanta Defineste Standardul',
    description: 'Sistemul recompenseaza constant pe cei care livreaza. Rezultatele vorbesc, nu cuvintele.',
    stat: 'Top 1%',
    statLabel: 'Acces Exclusiv',
    accent: 'from-violet-500 to-purple-500',
    glow: 'rgba(168, 130, 255, 0.4)',
  },
];

const differentiators = [
  { icon: Zap, text: 'Executie in timp real, nu teorie' },
  { icon: BarChart3, text: 'Metrici obiective, nu opinii' },
  { icon: Lock, text: 'Acces bazat pe merit, nu pe promisiuni' },
];

function PillarCard({ item, index }: { item: (typeof pillars)[number]; index: number }) {
  const Icon = item.icon;

  return (
    <div
      className="diff-pillar group relative"
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className="diff-pillar-glow-track" style={{ '--glow-color': item.glow } as React.CSSProperties} />

      <div className="relative rounded-2xl bg-[#080412]/95 backdrop-blur-xl h-full overflow-hidden">
        <div className="diff-pillar-shine" />

        <div className="absolute top-0 left-0 right-0 h-[1px]">
          <div className={`h-full w-0 group-hover:w-full bg-gradient-to-r ${item.accent} transition-all duration-700 ease-out`} />
        </div>

        <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full">
          <div className="flex items-start justify-between mb-6">
            <div className={`diff-icon-container relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} p-[1px]`}>
              <div className="w-full h-full rounded-2xl bg-[#0a0516] flex items-center justify-center">
                <Icon size={22} className="text-purple-300 group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ boxShadow: `0 0 30px ${item.glow}, 0 0 60px ${item.glow.replace('0.4', '0.15')}` }} />
            </div>

            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-purple-500/40 group-hover:text-purple-400/70 transition-colors duration-500 mt-2">
              {item.label}
            </span>
          </div>

          <h3 className="text-white font-bold text-lg sm:text-xl tracking-tight mb-3 group-hover:text-purple-50 transition-colors duration-500">
            {item.title}
          </h3>

          <p className="text-purple-200/40 text-sm leading-relaxed mb-8 group-hover:text-purple-200/60 transition-colors duration-500 flex-grow">
            {item.description}
          </p>

          <div className="diff-stat-bar pt-5 border-t border-purple-500/10 group-hover:border-purple-500/20 transition-colors duration-500">
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-black text-white tracking-tight leading-none group-hover:text-purple-100 transition-colors duration-500">
                  {item.stat}
                </div>
                <div className="text-[11px] font-semibold text-purple-400/50 mt-1.5 tracking-wide uppercase group-hover:text-purple-400/80 transition-colors duration-500">
                  {item.statLabel}
                </div>
              </div>
              <div className="w-8 h-8 rounded-full border border-purple-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:border-purple-500/40">
                <ArrowRight size={14} className="text-purple-400 transform group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatMakesDifferent() {
  return (
    <section className="diff-section relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="diff-hex-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="diff-orb absolute top-[15%] left-[-5%] w-[500px] h-[500px]" />
        <div className="diff-orb-secondary absolute bottom-[10%] right-[-8%] w-[450px] h-[450px]" />
      </div>

      <div className="diff-scan-line" />

      <div className="absolute top-0 left-0 right-0 diff-glow-line" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="diff-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6">
            <div className="diff-badge-bars flex items-center gap-[3px]">
              <span /><span /><span />
            </div>
            <span className="text-purple-600 text-xs font-bold tracking-[0.3em] uppercase">
              De Ce Este Diferit
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-7">
            Ce Face Sistemul{' '}
            <span className="diff-title-gradient">Diferit</span>
          </h2>

          <p className="text-purple-200/40 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Un ecosistem operational in care invatarea, executia si monetizarea functioneaza in acelasi mecanism.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {pillars.map((item, i) => (
            <PillarCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div className="diff-bottom-strip relative rounded-2xl overflow-hidden max-w-3xl mx-auto">
          <div className="diff-bottom-strip-border" />
          <div className="relative bg-[#080412]/90 backdrop-blur-2xl px-6 sm:px-10 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">
              {differentiators.map((d) => {
                const DIcon = d.icon;
                return (
                  <div key={d.text} className="diff-mini-item group/mini flex items-center gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-purple-500/8 border border-purple-500/15 flex items-center justify-center group-hover/mini:border-purple-500/30 group-hover/mini:bg-purple-500/12 transition-all duration-400">
                      <DIcon size={16} className="text-purple-400/60 group-hover/mini:text-purple-300 transition-colors duration-400" />
                    </div>
                    <span className="text-purple-200/50 text-[13px] font-medium leading-snug group-hover/mini:text-purple-200/75 transition-colors duration-400">
                      {d.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 diff-glow-line" />
    </section>
  );
}
