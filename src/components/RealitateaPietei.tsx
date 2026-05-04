import { useState } from 'react';
import { AlertTriangle, Target, TrendingUp, Award, ChevronRight, X, Check } from 'lucide-react';

const contrasts = [
  {
    weak: 'Majoritatea ofera informatie.',
    strong: 'Putine ofera formare.',
    icon: AlertTriangle,
    number: '01',
    tagWeak: 'Informatie',
    tagStrong: 'Formare',
    stat: '97%',
    statLabel: 'doar informeaza',
  },
  {
    weak: 'Se preda teorie.',
    strong: 'Putini construiesc competenta reala.',
    icon: Target,
    number: '02',
    tagWeak: 'Teorie',
    tagStrong: 'Competenta',
    stat: '3%',
    statLabel: 'formeaza real',
  },
  {
    weak: 'Se vorbeste despre antreprenoriat.',
    strong: 'Rar se formeaza antreprenori prin etape clare si progres masurat.',
    icon: TrendingUp,
    number: '03',
    tagWeak: 'Discutie',
    tagStrong: 'Executie',
    stat: '0.1%',
    statLabel: 'au sistem',
  },
];

function ContrastCard({ item, index, isActive, onActivate }: {
  item: typeof contrasts[number];
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`rp-card group relative cursor-pointer ${isActive ? 'rp-card-active' : ''}`}
      onClick={onActivate}
      onMouseEnter={onActivate}
    >
      <div className="rp-card-bg" />
      <div className="rp-card-border-glow" />
      <div className="rp-card-shine" />

      <div className="relative z-10 p-6 sm:p-8 lg:p-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="rp-number-box">
              <span className="text-[11px] font-mono font-black tracking-[0.2em] text-purple-300/40">
                {item.number}
              </span>
            </div>
            <div className="rp-icon-ring">
              <div className="rp-icon-ring-inner">
                <Icon size={18} className="text-purple-300/60 group-hover:text-purple-200 transition-colors duration-700" />
              </div>
              <svg className="rp-icon-ring-svg absolute inset-0" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(139,92,246,0.08)" strokeWidth="1" />
                <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(168,130,255,0.4)" strokeWidth="1.5"
                  strokeDasharray="163.36"
                  strokeDashoffset={isActive ? '0' : '163.36'}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
            </div>
          </div>

          <div className="rp-stat-box text-right">
            <span className="rp-stat-value block text-2xl sm:text-3xl font-black rp-title-gradient leading-none">
              {item.stat}
            </span>
            <span className="text-[10px] font-mono text-purple-400/30 tracking-[0.15em] uppercase mt-1 block">
              {item.statLabel}
            </span>
          </div>
        </div>

        <div className="rp-comparison">
          <div className="rp-comparison-row rp-row-weak group/weak">
            <div className="rp-row-indicator rp-indicator-weak">
              <X size={12} className="text-red-400/70" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="rp-micro-tag rp-tag-weak">{item.tagWeak}</span>
                <div className="h-px flex-1 bg-gradient-to-r from-red-500/10 to-transparent" />
              </div>
              <p className="text-purple-200/30 text-[14px] sm:text-[15px] leading-relaxed line-through decoration-red-400/20 decoration-1 group-hover/weak:text-purple-200/40 transition-colors duration-500">
                {item.weak}
              </p>
            </div>
          </div>

          <div className="rp-vs-divider">
            <div className="rp-vs-line" />
            <div className="rp-vs-badge">
              <ChevronRight size={10} className="text-purple-400/50" />
            </div>
            <div className="rp-vs-line" />
          </div>

          <div className="rp-comparison-row rp-row-strong group/strong">
            <div className="rp-row-indicator rp-indicator-strong">
              <Check size={12} className="text-emerald-400/80" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="rp-micro-tag rp-tag-strong">{item.tagStrong}</span>
                <div className="rp-tag-line h-px flex-1" />
              </div>
              <p className="text-purple-100/65 text-[14px] sm:text-[15px] leading-relaxed font-medium group-hover/strong:text-white/80 transition-colors duration-500">
                {item.strong}
              </p>
            </div>
          </div>
        </div>

        <div className="rp-card-progress mt-6">
          <div className="rp-progress-track">
            <div
              className="rp-progress-bar-fill"
              style={{
                width: isActive ? '100%' : '0%',
                transitionDelay: isActive ? `${index * 0.15}s` : '0s',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RealitateaPietei() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="rp-section relative py-32 sm:py-40 px-5 sm:px-8 overflow-hidden">
      <div className="absolute inset-0">
        <img src="/matrix.png" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="rp-noise" />
      <div className="rp-hex-grid" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="rp-orb absolute top-[5%] left-[-8%] w-[600px] h-[600px]" />
        <div className="rp-orb-alt absolute bottom-[5%] right-[-10%] w-[550px] h-[550px]" />
        <div className="rp-orb-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" />
      </div>

      <div className="rp-aurora" />

      <div className="rp-particles">
        <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      </div>

      <div className="rp-scan-line" />

      <div className="absolute top-0 left-0 right-0 rp-glow-line" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <div className="rp-badge-wrapper mb-8">
            <div className="rp-badge inline-flex items-center gap-3 px-6 py-2.5 rounded-full">
              <div className="rp-badge-signal">
                <span className="rp-signal-core" />
                <span className="rp-signal-ring rp-ring-1" />
                <span className="rp-signal-ring rp-ring-2" />
                <span className="rp-signal-ring rp-ring-3" />
              </div>
              <span className="text-purple-300/70 text-[11px] font-bold tracking-[0.35em] uppercase">
                Analiza de Piata
              </span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
            <span className="rp-title-reveal">Realitatea</span>{' '}
            <span className="rp-title-gradient rp-title-reveal rp-title-reveal-delay">Pietei</span>
          </h2>

          <div className="rp-subtitle-container max-w-2xl mx-auto">
            <div className="rp-subtitle-line" />
            <p className="text-purple-200/35 text-sm sm:text-base lg:text-lg leading-relaxed py-4 px-6">
              Fara practica directa, fara evaluare constanta si fara standard
              operational, progresul ramane superficial.
            </p>
            <div className="rp-subtitle-line" />
          </div>
        </div>

        <div className="grid gap-6 lg:gap-7 mb-20">
          {contrasts.map((item, index) => (
            <ContrastCard
              key={index}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="rp-conclusion group relative rounded-3xl overflow-hidden">
          <div className="rp-conclusion-aurora" />
          <div className="rp-conclusion-border" />
          <div className="rp-conclusion-particles">
            <span /><span /><span /><span /><span /><span />
          </div>

          <div className="relative z-10 p-10 sm:p-14 lg:p-16 text-center">
            <div className="rp-conclusion-icon mb-8">
              <div className="rp-conclusion-icon-outer">
                <div className="rp-conclusion-icon-inner">
                  <Award size={28} className="text-purple-200" />
                </div>
              </div>
              <div className="rp-conclusion-icon-rings">
                <span /><span /><span />
              </div>
            </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white/90 leading-snug mb-4 tracking-tight">
              Antreprenorul nu se declara.
            </p>
            <div className="rp-conclusion-divider mx-auto my-5" />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black rp-title-gradient leading-snug tracking-tight">
              Se formeaza.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 rp-glow-line" />
    </section>
  );
}
