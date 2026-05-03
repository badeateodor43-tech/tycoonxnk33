import { useState } from 'react';
import { Zap, CheckCircle, ArrowRight, Shield, Star } from 'lucide-react';

type Duration = '6' | '12';

export default function Pricing() {
  const [duration, setDuration] = useState<Duration>('12');

  return (
    <section
      className="relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #020617 0%, #0a0514 30%, #0d0618 50%, #0a0514 70%, #020617 100%)',
      }}
    >
      <div className="absolute inset-0 pointer-events-none bg-mesh" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb absolute top-1/4 left-1/5 w-[400px] h-[400px] bg-purple-900/[0.07]" />
        <div className="orb absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-purple-800/[0.05]" />
      </div>

      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <span className="inline-block text-purple-400 text-xs font-bold tracking-[0.3em] uppercase mb-5">
            Nivelul de Intrare
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Accesul in{' '}
            <span className="purple-gradient-text">Tycoon Society</span>
            {' '}incepe cu executie reala.
          </h2>
          <p className="text-purple-200/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-2">
            Construiesti primul tau AI Influencer si demonstrezi ca poti implementa, nu doar consuma informatie.
          </p>
          <p className="text-purple-200/40 text-sm max-w-lg mx-auto leading-relaxed">
            Nu este un cadou. Este o proba de capacitate.
          </p>
        </div>

        <div className="glow-line w-32 mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          <ActivareCard />
          <StarterCard duration={duration} onDurationChange={setDuration} />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-purple-500/10 bg-purple-950/20">
            <Shield size={14} className="text-purple-400/60" />
            <span className="text-purple-200/50 text-xs sm:text-sm font-medium">
              Nivelul este accesibil. Standardul ramane ridicat.
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}

function ActivareCard() {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
      <div className="absolute inset-0 rounded-2xl border border-purple-500/10 group-hover:border-purple-500/25 transition-colors duration-500" />
      <div
        className="relative h-full p-7 sm:p-8 flex flex-col"
        style={{
          background:
            'linear-gradient(135deg, rgba(10,5,16,0.95), rgba(16,8,26,0.8), rgba(10,5,16,0.95))',
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
            <Zap size={18} className="text-purple-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight">ACTIVARE</h3>
            <p className="text-purple-300/40 text-xs font-medium">Validare initiala</p>
          </div>
        </div>

        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-purple-400/40 text-lg line-through font-medium">30&#8364;</span>
          <span className="text-white font-black text-4xl tracking-tight">0&#8364;</span>
        </div>
        <p className="text-purple-200/40 text-xs mb-8">
          Acces initial pentru validarea capacitatii de executie.
        </p>

        <ul className="space-y-3 mb-8 flex-1">
          {[
            'Introducere in mecanism',
            'Construirea primului AI Influencer',
            'Structura de baza de implementare',
            'Acces limitat la comunitate',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-purple-400/50 mt-0.5 shrink-0" />
              <span className="text-purple-100/60 text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <p className="text-purple-200/30 text-xs mb-5 italic">
          Acest nivel confirma daca poti opera in sistem.
        </p>

        <button className="w-full py-3.5 rounded-xl border border-purple-500/20 bg-purple-500/5 text-purple-300 font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-white flex items-center justify-center gap-2 group/btn">
          Activeaza Gratuit
          <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}

function StarterCard({
  duration,
  onDurationChange,
}: {
  duration: Duration;
  onDurationChange: (d: Duration) => void;
}) {
  const plans = {
    '6': { original: 100, price: 33 },
    '12': { original: 200, price: 60 },
  } as const;

  const plan = plans[duration];

  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/30 via-purple-600/10 to-purple-500/30 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
      <div
        className="relative h-full p-7 sm:p-8 flex flex-col rounded-2xl"
        style={{
          background:
            'linear-gradient(135deg, rgba(14,6,24,0.98), rgba(22,10,38,0.9), rgba(14,6,24,0.98))',
        }}
      >
        <div className="absolute top-4 right-4">
          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-purple-500/15 text-purple-300 border border-purple-500/20">
            {duration === '12' ? 'Recomandat' : 'Popular'}
          </span>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-center">
            <Star size={18} className="text-purple-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-lg tracking-tight">STARTER</h3>
            <p className="text-purple-300/40 text-xs font-medium">Integrarea in Sistem</p>
          </div>
        </div>

        <p className="text-purple-200/50 text-sm leading-relaxed mb-6">
          Starter este integrarea completa in mecanismul Tycoon Society. Aici incepe disciplina reala. Aici incepe executia aplicata. Aici incepe progresul masurat.
        </p>

        <div className="flex rounded-lg border border-purple-500/15 bg-purple-950/30 p-1 mb-6">
          <button
            onClick={() => onDurationChange('6')}
            className={`flex-1 py-2 rounded-md text-xs font-bold tracking-wide transition-all duration-300 ${
              duration === '6'
                ? 'bg-purple-500/20 text-white border border-purple-500/30 shadow-sm'
                : 'text-purple-300/40 hover:text-purple-300/60'
            }`}
          >
            6 luni
          </button>
          <button
            onClick={() => onDurationChange('12')}
            className={`flex-1 py-2 rounded-md text-xs font-bold tracking-wide transition-all duration-300 ${
              duration === '12'
                ? 'bg-purple-500/20 text-white border border-purple-500/30 shadow-sm'
                : 'text-purple-300/40 hover:text-purple-300/60'
            }`}
          >
            12 luni
          </button>
        </div>

        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-purple-400/40 text-lg line-through font-medium">
            {plan.original}&#8364;
          </span>
          <span className="text-white font-black text-4xl tracking-tight">
            {plan.price}&#8364;
          </span>
          <span className="text-purple-300/40 text-xs font-medium">
            / {duration} luni
          </span>
        </div>

        <ul className="space-y-3 mb-8 flex-1">
          {[
            'Mindset disciplinat & rutina',
            'AI Influencer Build in detaliu',
            'Structura de crestere',
            'Fundamente de monetizare',
            'Standard de evaluare',
            'Acces complet la comunitate',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <CheckCircle size={15} className="text-purple-400/70 mt-0.5 shrink-0" />
              <span className="text-purple-100/70 text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        <button className="cta-button w-full py-3.5 rounded-xl text-sm tracking-wide flex items-center justify-center gap-2 group/btn">
          Activeaza {duration} luni
          <ArrowRight size={15} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
