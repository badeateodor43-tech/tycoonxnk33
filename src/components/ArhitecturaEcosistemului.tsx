import { Zap, Rocket, Crosshair, Users, Gem } from 'lucide-react';

const levels = [
  {
    number: '01',
    icon: Zap,
    title: 'Activare',
    subtitle: 'Pragul de selectie.',
    lines: [
      'Treci din observator in operator.',
      'Validezi capacitatea reala de implementare.',
    ],
    emphasis: 'Ascensiunea incepe cu executie demonstrata.',
    color: 'from-purple-600 to-violet-500',
    glowColor: 'rgba(139, 92, 246, 0.4)',
    barWidth: '20%',
  },
  {
    number: '02',
    icon: Rocket,
    title: 'Starter',
    subtitle: 'Integrarea completa in mecanism.',
    lines: [
      'Executia devine rutina.',
      'Monetizarea incepe prin aplicare directa.',
    ],
    emphasis: 'Starter este etapa in care construiesti un operator real.',
    color: 'from-fuchsia-500 to-purple-500',
    glowColor: 'rgba(192, 132, 252, 0.4)',
    barWidth: '40%',
  },
  {
    number: '03',
    icon: Crosshair,
    title: 'Sales War Room',
    subtitle: 'Divizia unde executia produce cashflow real.',
    lines: [
      'Aici nu inveti despre vanzari. Vinzi.',
      'Performanta este demonstrata prin incasari.',
    ],
    emphasis: 'Competenta este validata prin rezultate masurabile.',
    color: 'from-violet-500 to-purple-400',
    glowColor: 'rgba(167, 139, 250, 0.4)',
    barWidth: '60%',
  },
  {
    number: '04',
    icon: Users,
    title: 'Team Leader / Manager Executiv',
    subtitle: 'Etapa in care devii arhitect al performantei colective.',
    lines: [
      'Nu mai produci doar rezultate personale.',
      'Coordonezi performanta altora.',
    ],
    emphasis: 'Responsabilitatea este financiara. Rezultatele sunt validate prin cifre colective.',
    color: 'from-purple-400 to-fuchsia-400',
    glowColor: 'rgba(216, 180, 254, 0.4)',
    barWidth: '80%',
  },
  {
    number: '05',
    icon: Gem,
    title: 'Antreprenor',
    subtitle: 'Etapa in care devii arhitect al propriei economii.',
    lines: [
      'Construiesti mecanisme. Creezi modele de business.',
      'Iti asumi directia, riscul si rezultatul final.',
    ],
    emphasis: 'Autonomia nu este declarata. Este construita prin sistem.',
    color: 'from-amber-400 to-purple-400',
    glowColor: 'rgba(251, 191, 36, 0.3)',
    barWidth: '100%',
  },
];

function LevelCard({ level, index }: { level: (typeof levels)[number]; index: number }) {
  const Icon = level.icon;
  const isLast = index === levels.length - 1;

  return (
    <div className="ae-level group relative">
      <div className="flex gap-0">
        <div className="flex-shrink-0 w-16 sm:w-20 flex flex-col items-center relative">
          <div className="ae-level-node relative z-10" style={{ '--level-glow': level.glowColor } as React.CSSProperties}>
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${level.color} p-[1px]`}>
              <div className="w-full h-full rounded-xl bg-[#060312] flex items-center justify-center relative overflow-hidden">
                <div className="ae-node-inner-glow absolute inset-0" />
                <Icon size={20} className="text-purple-200 relative z-10 group-hover:text-white transition-colors duration-500" />
              </div>
            </div>
            <div className="ae-node-ring absolute -inset-1.5 rounded-xl border opacity-0 group-hover:opacity-100 transition-all duration-700" style={{ borderColor: level.glowColor }} />
          </div>

          {!isLast && (
            <div className="ae-level-line relative w-[2px] flex-1 min-h-[20px] mt-2">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-purple-500/8 to-purple-500/20" />
              <div className="ae-line-energy absolute inset-0" style={{ '--energy-color': level.glowColor } as React.CSSProperties} />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 pb-8 sm:pb-10">
          <div className="ae-level-card relative rounded-2xl overflow-hidden" style={{ '--card-glow': level.glowColor } as React.CSSProperties}>
            <div className="ae-level-card-border" />
            <div className="ae-level-card-shine" />

            <div className="relative z-10 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-black tracking-[0.35em] text-purple-500/35">
                    NIVEL {level.number}
                  </span>
                  <div className="h-px w-8 bg-gradient-to-r from-purple-500/20 to-transparent" />
                </div>
                <div className="ae-progress-bar">
                  <div
                    className={`ae-progress-fill bg-gradient-to-r ${level.color}`}
                    style={{ width: level.barWidth }}
                  />
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-1.5 group-hover:text-purple-50 transition-colors duration-500">
                {level.title}
              </h3>

              <p className="text-purple-300/50 text-sm font-medium mb-5 group-hover:text-purple-300/70 transition-colors duration-500">
                {level.subtitle}
              </p>

              <div className="space-y-1.5 mb-5">
                {level.lines.map((line, i) => (
                  <p key={i} className="text-purple-200/35 text-[14px] leading-relaxed group-hover:text-purple-200/50 transition-colors duration-500">
                    {line}
                  </p>
                ))}
              </div>

              <div className="ae-emphasis relative pl-4 py-2">
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] rounded-full bg-gradient-to-b ${level.color} opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />
                <p className="text-purple-200/55 text-[13px] sm:text-[14px] italic leading-relaxed font-medium group-hover:text-purple-200/75 transition-colors duration-500">
                  {level.emphasis}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArhitecturaEcosistemului() {
  return (
    <section className="ae-section relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="ae-grid-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="ae-orb absolute top-[8%] left-[-6%] w-[500px] h-[500px]" />
        <div className="ae-orb-alt absolute bottom-[8%] right-[-8%] w-[450px] h-[450px]" />
        <div className="ae-orb-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px]" />
      </div>

      <div className="ae-particles">
        <span /><span /><span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 ae-glow-line" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="ae-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full mb-6">
            <div className="ae-badge-bars flex items-end gap-[3px] h-3">
              <span /><span /><span /><span /><span />
            </div>
            <span className="text-purple-600 text-xs font-bold tracking-[0.3em] uppercase">
              Ecosistem
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-7">
            Arhitectura{' '}
            <span className="ae-title-gradient">Ecosistemului</span>
          </h2>

          <div className="max-w-xl mx-auto space-y-3">
            <p className="text-white text-sm sm:text-base leading-relaxed">
              Tycoon Society este construita pe niveluri de progres. Fiecare etapa
              reprezinta o crestere reala de competenta, responsabilitate si autonomie.
            </p>
            <p className="text-white text-sm leading-relaxed">
              Ascensiunea nu este automata. Este validata prin executie.
            </p>
          </div>
        </div>

        <div className="relative">
          {levels.map((level, index) => (
            <LevelCard key={level.number} level={level} index={index} />
          ))}
        </div>

        <div className="ae-bottom-statement relative rounded-2xl overflow-hidden mt-6">
          <div className="ae-bottom-border" />
          <div className="relative z-10 p-8 sm:p-10 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/30" />
              <span className="text-[10px] font-mono font-bold tracking-[0.35em] text-purple-400/40 uppercase">
                Directie
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/30" />
            </div>
            <p className="text-white text-[15px] leading-relaxed mb-2">
              Progresul este masurat. Nivelul este castigat.
            </p>
            <p className="text-lg font-bold ae-title-gradient">
              Performanta ridica standardul.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 ae-glow-line" />
    </section>
  );
}
