import { useState } from 'react';
import { ShieldCheck, X, Zap, Lock, Eye, BarChart3 } from 'lucide-react';

const criteria = [
  { text: 'Implementare reala', icon: Zap, metric: '100%', label: 'executie' },
  { text: 'Disciplina consecventa', icon: Lock, metric: '24/7', label: 'standard' },
  { text: 'Competenta demonstrata', icon: Eye, metric: 'Validat', label: 'continuu' },
  { text: 'Progres masurabil', icon: BarChart3, metric: 'KPI', label: 'tracked' },
];

const rejections = [
  { text: 'Nu exista promovare automata.', detail: 'Fiecare nivel este castigat prin performanta demonstrata.' },
  { text: 'Nu exista acces bazat pe intentie.', detail: 'Accesul se obtine prin executie, nu prin declaratii.' },
];

const principles = [
  'Progresul este masurat.',
  'Executia este verificata.',
  'Rezultatele sunt demonstrate.',
];

function CriteriaRow({ item, index, isActive, onHover }: {
  item: typeof criteria[number];
  index: number;
  isActive: boolean;
  onHover: () => void;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`sc-criteria-row group ${isActive ? 'sc-criteria-active' : ''}`}
      onMouseEnter={onHover}
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="sc-criteria-index">
        <span className="text-[10px] font-mono font-black tracking-[0.2em] text-purple-400/30">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div className="sc-criteria-icon-wrap">
        <div className="sc-criteria-icon-bg">
          <Icon size={16} className="text-purple-300/60 group-hover:text-purple-200 transition-colors duration-500" />
        </div>
        <svg className="sc-criteria-ring absolute inset-0" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(139,92,246,0.06)" strokeWidth="1" />
          <circle cx="24" cy="24" r="22" fill="none" stroke="rgba(168,130,255,0.5)" strokeWidth="1.5"
            strokeDasharray="138.23"
            strokeDashoffset={isActive ? '0' : '138.23'}
            strokeLinecap="round"
            className="transition-all duration-800 ease-out"
          />
        </svg>
      </div>

      <div className="flex-1 min-w-0">
        <span className="text-purple-100/70 text-[15px] font-semibold group-hover:text-white/85 transition-colors duration-400">
          {item.text}
        </span>
      </div>

      <div className="sc-criteria-metric text-right">
        <span className="block text-sm font-black sc-title-gradient leading-none">
          {item.metric}
        </span>
        <span className="text-[9px] font-mono text-purple-400/25 tracking-[0.15em] uppercase mt-0.5 block">
          {item.label}
        </span>
      </div>

      <div className="sc-criteria-bar">
        <div className="sc-criteria-bar-track">
          <div
            className="sc-criteria-bar-fill"
            style={{
              width: isActive ? '100%' : '0%',
              transitionDelay: isActive ? `${index * 0.1}s` : '0s',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function StandardCriterii() {
  const [activeCriteria, setActiveCriteria] = useState(0);
  const [activeReject, setActiveReject] = useState<number | null>(null);

  return (
    <section className="sc-section relative py-32 sm:py-40 px-5 sm:px-8 overflow-hidden">
      <div className="sc-noise" />
      <div className="sc-grid-bg" />
      <div className="sc-scan-line" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="sc-orb absolute top-[15%] right-[-6%] w-[500px] h-[500px]" />
        <div className="sc-orb-alt absolute bottom-[10%] left-[-8%] w-[400px] h-[400px]" />
        <div className="sc-orb-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]" />
      </div>

      <div className="sc-aurora" />

      <div className="sc-particles">
        <span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 sc-glow-line" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <div className="sc-badge-wrapper mb-8">
            <div className="sc-badge inline-flex items-center gap-3 px-6 py-2.5 rounded-full">
              <div className="sc-badge-signal">
                <span className="sc-signal-core" />
                <span className="sc-signal-ring sc-ring-1" />
                <span className="sc-signal-ring sc-ring-2" />
              </div>
              <ShieldCheck size={14} className="text-purple-400/60" />
              <span className="text-purple-600 text-[11px] font-bold tracking-[0.35em] uppercase">
                Filtrare
              </span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
            <span className="sc-title-reveal">Standard</span>{' '}
            <span className="sc-title-reveal sc-title-reveal-d1">&</span>{' '}
            <span className="sc-title-gradient sc-title-reveal sc-title-reveal-d2">Criterii</span>
          </h2>

          <div className="sc-subtitle-container max-w-2xl mx-auto">
            <div className="sc-subtitle-line" />
            <div className="py-5 px-6 space-y-1.5">
              <p className="text-purple-200/35 text-sm sm:text-base lg:text-lg leading-relaxed">
                Nivelul nu este oferit. Este castigat.
              </p>
              <p className="text-purple-200/30 text-sm sm:text-base leading-relaxed">
                Tycoon Society functioneaza pe performanta validata, nu pe participare.
              </p>
            </div>
            <div className="sc-subtitle-line" />
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-16">
          <div className="lg:col-span-3 sc-metrics-card group relative rounded-2xl overflow-hidden">
            <div className="sc-card-bg" />
            <div className="sc-card-border-glow" />
            <div className="sc-card-shine" />

            <div className="relative z-10 p-7 sm:p-9 lg:p-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="sc-status-dot" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-emerald-400/40 uppercase">
                    Monitorizare Activa
                  </span>
                </div>
                <div className="sc-live-badge">
                  <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-emerald-400/50 uppercase">Live</span>
                </div>
              </div>

              <div className="sc-principles-grid mb-10">
                {principles.map((p, i) => (
                  <div key={i} className="sc-principle-item">
                    <div className="sc-principle-dot" />
                    <p className="text-white text-[14px] leading-relaxed">{p}</p>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <div className="sc-section-label">
                  <div className="sc-label-line" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-purple-500/35 uppercase px-3">
                    Ascensiunea este conditionata de
                  </span>
                  <div className="sc-label-line" />
                </div>
              </div>

              <div className="space-y-3">
                {criteria.map((item, index) => (
                  <CriteriaRow
                    key={index}
                    item={item}
                    index={index}
                    isActive={activeCriteria === index}
                    onHover={() => setActiveCriteria(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 sc-rejection-card group relative rounded-2xl overflow-hidden">
            <div className="sc-card-bg sc-card-bg-reject" />
            <div className="sc-reject-glow" />

            <div className="relative z-10 p-7 sm:p-9 lg:p-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="sc-reject-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-red-400/40 uppercase">
                  Filtre de Acces
                </span>
              </div>

              <div className="space-y-4 mb-auto">
                {rejections.map((item, index) => (
                  <div
                    key={index}
                    className={`sc-reject-item ${activeReject === index ? 'sc-reject-expanded' : ''}`}
                    onMouseEnter={() => setActiveReject(index)}
                    onMouseLeave={() => setActiveReject(null)}
                  >
                    <div className="flex items-start gap-4 p-4">
                      <div className="sc-reject-icon">
                        <X size={14} className="text-red-400/60" />
                      </div>
                      <div className="flex-1">
                        <span className="text-purple-200/50 text-[15px] leading-relaxed block">
                          {item.text}
                        </span>
                        <div className={`sc-reject-detail overflow-hidden transition-all duration-500 ${activeReject === index ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                          <p className="text-purple-300/30 text-[13px] leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="sc-reject-bar">
                      <div className="sc-reject-bar-fill" style={{ width: activeReject === index ? '100%' : '0%' }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="sc-separator my-8" />

              <div className="sc-conclusion-block">
                <div className="sc-conclusion-icon-sm mb-4">
                  <ShieldCheck size={16} className="text-purple-300/50" />
                </div>
                <p className="text-purple-100/55 text-[15px] leading-relaxed font-medium mb-2">
                  Standardul separa participantii de operatori.
                </p>
                <p className="text-base font-bold sc-title-gradient">
                  Performanta ridica nivelul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 sc-glow-line" />
    </section>
  );
}
