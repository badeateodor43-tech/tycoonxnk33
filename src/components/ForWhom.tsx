import { ShieldCheck, Crosshair, TrendingUp, Award, ChevronRight } from 'lucide-react';

const criteria = [
  {
    icon: Crosshair,
    title: 'Executie Sub Presiune',
    text: 'Pentru cei care pot executa constant, chiar si sub presiune.',
    accent: 'from-purple-500 to-violet-600',
    glow: 'rgba(139, 92, 246, 0.35)',
    delay: 0,
  },
  {
    icon: ShieldCheck,
    title: 'Evaluare Obiectiva',
    text: 'Pentru cei care accepta evaluarea obiectiva si masurarea rezultatelor.',
    accent: 'from-purple-400 to-fuchsia-500',
    glow: 'rgba(168, 130, 255, 0.35)',
    delay: 1,
  },
  {
    icon: TrendingUp,
    title: 'Monetizare Reala',
    text: 'Pentru cei care inteleg ca monetizarea este consecinta valorii create.',
    accent: 'from-fuchsia-500 to-purple-600',
    glow: 'rgba(192, 132, 252, 0.35)',
    delay: 2,
  },
  {
    icon: Award,
    title: 'Competenta Aplicata',
    text: 'Pentru cei care aleg competenta aplicata in locul promisiunilor.',
    accent: 'from-violet-500 to-purple-500',
    glow: 'rgba(139, 92, 246, 0.35)',
    delay: 3,
  },
];

function CriteriaCard({
  item,
}: {
  item: (typeof criteria)[number];
}) {
  const Icon = item.icon;

  return (
    <div
      className="forwhom-card group relative rounded-2xl p-[1px] overflow-hidden"
      style={{ animationDelay: `${item.delay * 0.15}s` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ backgroundImage: `linear-gradient(135deg, ${item.glow}, transparent 60%)` }} />

      <div className="relative rounded-2xl bg-[#0a0514]/95 backdrop-blur-xl p-6 sm:p-7 h-full flex flex-col gap-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: `radial-gradient(circle at 100% 0%, ${item.glow}, transparent 70%)` }} />

        <div className="flex items-center gap-4">
          <div className={`forwhom-icon-ring relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.accent} p-[1px]`}>
            <div className="w-full h-full rounded-xl bg-[#0d0618] flex items-center justify-center">
              <Icon size={20} className="text-purple-300 group-hover:text-white transition-colors duration-500" />
            </div>
          </div>
          <h3 className="text-white font-bold text-base sm:text-lg tracking-tight group-hover:text-purple-100 transition-colors duration-500">
            {item.title}
          </h3>
        </div>

        <p className="text-purple-200/50 text-sm leading-relaxed group-hover:text-purple-200/70 transition-colors duration-500">
          {item.text}
        </p>

        <div className="mt-auto flex items-center gap-1.5 text-purple-500/0 group-hover:text-purple-400 transition-all duration-500">
          <span className="text-xs font-semibold tracking-wide uppercase">Aplica Acum</span>
          <ChevronRight size={14} className="transform group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

export default function ForWhom() {
  return (
    <section className="forwhom-section relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="forwhom-grid-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="forwhom-orb absolute top-[10%] right-[-8%] w-[500px] h-[500px]" />
        <div className="forwhom-orb-alt absolute bottom-[5%] left-[-10%] w-[450px] h-[450px]" />
        <div className="forwhom-orb-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />
      </div>

      <div className="forwhom-particles">
        <span /><span /><span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 forwhom-glow-line" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="forwhom-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 forwhom-pulse-dot" />
            <span className="text-purple-600 text-xs font-bold tracking-[0.3em] uppercase">
              Filtrul de Intrare
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-7">
            Pentru Cine{' '}
            <span className="forwhom-title-gradient">Este</span>
          </h2>

          <p className="text-purple-200/40 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Accesul se acorda celor care demonstreaza, nu celor care promit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-14">
          {criteria.map((item) => (
            <CriteriaCard key={item.title} item={item} />
          ))}
        </div>

        <div className="forwhom-bottom-card relative rounded-2xl p-[1px] overflow-hidden max-w-2xl mx-auto">
          <div className="forwhom-bottom-card-border" />
          <div className="relative rounded-2xl bg-[#0a0514]/90 backdrop-blur-2xl px-8 sm:px-12 py-10 sm:py-12 text-center overflow-hidden">
            <div className="forwhom-bottom-glow" />

            <div className="relative z-10 space-y-6 max-w-md mx-auto">
              <p className="text-purple-200/45 text-[15px] leading-relaxed">
                Nu este despre entuziasm temporar.
                <br />
                <span className="text-white font-bold text-base">
                  Este despre standard sustinut in timp.
                </span>
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-purple-500/50" />
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-purple-500/50" />
              </div>

              <p className="text-purple-200/45 text-[15px] leading-relaxed">
                Aici, pozitia nu se ofera.
                <br />
                <span className="text-white font-bold text-base">
                  Se castiga prin performanta demonstrata.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 forwhom-glow-line" />
    </section>
  );
}
