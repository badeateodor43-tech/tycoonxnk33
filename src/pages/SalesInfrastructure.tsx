import { ArrowRight, Users, Search, Zap, Building2, Target, CheckCircle2, TrendingUp, Shield, Layers, Award } from 'lucide-react';

interface SalesInfrastructureProps {
  onNavigate?: (page: string) => void;
}

const features = [
  {
    icon: Users,
    title: 'Elite Sales Agents',
    description: 'Punem la dispozitie agenti de vanzari pregatiti pentru a transforma leadurile in contracte.',
  },
  {
    icon: Search,
    title: 'Sales Audit',
    description: 'Analizam sistemul actual de vanzari pentru a identifica blocajele.',
  },
  {
    icon: Zap,
    title: 'Sales Acceleration',
    description: 'Optimizam procesele comerciale pentru a creste conversia.',
  },
  {
    icon: Building2,
    title: 'Revenue Systems',
    description: 'Construim infrastructura comerciala necesara pentru vanzari scalabile.',
  },
];

const problems = [
  'vanzarile depind de fondator',
  'leadurile sunt pierdute din lipsa de follow-up',
  'echipa comerciala nu are procese clare',
  'rezultatele sunt inconsistente',
  'cresterea devine imprevizibila',
];

const steps = [
  { num: '1', title: 'Analiza', desc: 'Evaluam procesul actual de vanzari.' },
  { num: '2', title: 'Strategie', desc: 'Definim structura sistemului de vanzari.' },
  { num: '3', title: 'Implementare', desc: 'Introducem procese si agenti de vanzari.' },
  { num: '4', title: 'Scalare', desc: 'Optimizam sistemul pentru crestere constanta.' },
];

const includes = [
  'agenti de vanzari pregatiti',
  'procese comerciale clare',
  'strategie de conversie',
  'gestionarea leadurilor',
  'training pentru echipa comerciala',
  'procese scalabile',
];

const principles = [
  'Sistemele bat talentul',
  'Executia bate strategia',
  'Vanzarile sunt infrastructura',
  'Procesele creeaza scalare',
  'Consistenta creeaza rezultate',
];

export default function SalesInfrastructure({ onNavigate }: SalesInfrastructureProps) {
  return (
    <div className="min-h-screen bg-dark-950">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-mesh">
          <div className="orb absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/[0.12] animate-glow-pulse" />
          <div className="orb absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-purple-800/[0.08]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 glow-line-wide" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-purple-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Sales Infrastructure
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-7">
            Sales
            <br />
            <span className="purple-gradient-text text-glow">Infrastructure</span>
          </h1>

          <p className="text-xl sm:text-2xl text-purple-200/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Construim sisteme reale de vanzari pentru companii care vor sa scaleze.
          </p>

          <p className="text-base sm:text-lg text-purple-200/60 max-w-2xl mx-auto mb-14 leading-relaxed">
            Majoritatea companiilor incearca sa creasca angajand vanzatori. Problema este ca vanzatorii fara procese si infrastructura nu pot sustine cresterea.
            <br /><br />
            Tycoon Society construieste sisteme complete de vanzari: agenti de vanzari, procese comerciale si strategie de conversie.
          </p>

          <button
            onClick={() => onNavigate?.('inner-circle')}
            className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
          >
            Aplica pentru un Sales Audit
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Ce <span className="purple-gradient-text">Oferim</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="step-card rounded-2xl p-8 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                    <feature.icon size={26} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-200/60 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8">
            Pentru <span className="purple-gradient-text">Cine Este</span>
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-purple-200/70 leading-relaxed">
            <p>Pentru companiile care inteleg ca vanzarile nu trebuie sa depinda de improvizatie.</p>
            <p>Pentru antreprenorii care vor procese comerciale clare si sisteme scalabile.</p>
            <p>Pentru organizatiile care vor sa transforme oportunitatile in venit constant.</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              De Ce Majoritatea Companiilor
              <br />
              <span className="purple-gradient-text">Nu Scaleaza Vanzarile</span>
            </h2>
          </div>

          <div className="space-y-4 mb-12">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                <div className="w-2 h-2 rounded-full bg-red-400" />
                <span className="text-purple-200/70">{problem}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-white">
              Companiile care cresc constant <span className="purple-gradient-text">construiesc sisteme de vanzari.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Sistemul <span className="purple-gradient-text">Tycoon Society</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="step-card rounded-2xl p-6 text-center group">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:border-purple-500/40 transition-colors">
                  <span className="text-2xl font-black purple-gradient-text">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-purple-200/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8">
            Avantajul <span className="purple-gradient-text">Tycoon Society</span>
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-purple-200/70 leading-relaxed">
            <p>Majoritatea agentiilor ofera doar vanzatori.</p>
            <p className="text-white font-semibold">Tycoon Society construieste un sistem complet de vanzari.</p>
            <p>In loc sa depinzi de improvizatie, construim infrastructura comerciala pentru crestere constanta.</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Ce Include <span className="purple-gradient-text">Infrastructura Noastra</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {includes.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <CheckCircle2 size={20} className="text-purple-400 flex-shrink-0" />
                <span className="text-purple-200/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8">
            Standardele <span className="purple-gradient-text">Tycoon Society</span>
          </h2>
          <p className="text-lg sm:text-xl text-purple-200/70 leading-relaxed">
            Tycoon Society lucreaza cu companii care inteleg ca performanta vine din sisteme, disciplina si executie.
          </p>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Principiile <span className="purple-gradient-text">Tycoon Society</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <Award size={18} className="text-purple-400 flex-shrink-0" />
                <span className="text-white font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-8">
            Viziunea <span className="purple-gradient-text">Tycoon Society</span>
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-purple-200/70 leading-relaxed">
            <p>Tycoon Society este un ecosistem dedicat performantei in business.</p>
            <p>Ajutam companiile sa treaca de la vanzari haotice la sisteme comerciale scalabile.</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="step-card rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Construieste un sistem de vanzari
              <br />
              <span className="purple-gradient-text">care functioneaza</span>
            </h2>

            <button
              onClick={() => onNavigate?.('inner-circle')}
              className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
            >
              Aplica pentru un Sales Audit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
