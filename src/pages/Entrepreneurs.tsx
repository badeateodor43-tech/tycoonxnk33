import { ArrowRight, TrendingUp, Users, Clock, Target, AlertTriangle, CheckCircle2, BookOpen, Presentation, Calendar, Award, User } from 'lucide-react';

interface EntrepreneursProps {
  onNavigate?: (page: string) => void;
}

const problems = [
  'Am nevoie de claritate ca sa stiu ce decizii sa iau.',
  'Simt ca trag singur la caruta.',
  'Am echipa, dar tot eu iau toate deciziile.',
  'Echipa asteapta mereu sa le spun eu ce sa faca.',
  'Ma simt singur cu toate greutatile pe umeri.',
  'Nu mai am viata personala, totul e despre firma.',
  'Muncesc mai mult decat toti, dar simt ca nu ajung nicaieri.',
];

const warnings = [
  'Pleaca un angajat cheie sau apare o greseala costisitoare',
  'Sotia sau familia spune ca nu mai esti prezent',
  'Luni dimineata si vineri seara te simti coplesit',
  'Dupa concediu apare avalansa de urgente',
];

const benefits = [
  {
    icon: TrendingUp,
    title: 'Cashflow predictibil',
    description: 'Marja sanatoasa, pipeline controlat si focus pe ce produce cash azi.',
    stat: '+30% cashflow mediu',
  },
  {
    icon: Users,
    title: 'Echipa autonoma',
    description: 'Ritualuri simple: stand-up, weekly review, retro si sprint de performanta.',
    stat: '4 KPI esentiali',
  },
  {
    icon: Clock,
    title: 'Timp inapoi',
    description: 'Iesi din vortexul operational prin delegare clara.',
    stat: '15 ore salvate pe saptamana',
  },
];

const badDay = [
  'Te trezesti cu gandul la problemele din firma',
  '10 apeluri si 50+ mesaje inainte de ora 10',
  'Devii manager de crize, nu lider',
  'Pleci acasa frustrat fara progres real',
  'Seara incerci sa recuperezi munca',
];

const whatYouReceive = [
  'Ritm saptamanal de executie',
  'Checklist ritualuri de executie',
  'Template dashboard 4 KPI',
  'Ghid de delegare pe criterii',
  'Antrenamente in conducerea afacerii',
  'Antrenamente prezentare',
];

const modules = [
  {
    icon: Users,
    title: 'Delegare eficienta',
    description: 'Identificarea sarcinilor potrivite pentru delegare si monitorizarea lor.',
  },
  {
    icon: Presentation,
    title: 'Comunicare si motivare',
    description: 'Comunicarea clara a obiectivelor si crearea unui mediu motivational.',
  },
  {
    icon: Target,
    title: 'Dezvoltarea echipei',
    description: 'Recrutarea si dezvoltarea echipei de management.',
  },
  {
    icon: Calendar,
    title: 'Managementul resurselor',
    description: 'Organizarea timpului si optimizarea fluxurilor de lucru.',
  },
];

const results = [
  'Claritate in decizii',
  'Echipa autonoma',
  'Timp inapoi pentru strategie si familie',
];

const stats = [
  { value: '15', label: 'ani experienta' },
  { value: '1,300+', label: 'antreprenori antrenati' },
  { value: '14,000+', label: 'sesiuni de lucru' },
];

export default function Entrepreneurs({ onNavigate }: EntrepreneursProps) {
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
              Entrepreneurs
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-7">
            Antrenorul de
            <br />
            <span className="purple-gradient-text text-glow">Antreprenori</span>
          </h1>

          <p className="text-xl sm:text-2xl text-purple-200/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Cresti cashflow-ul. Castigi claritate. Conduci echipa.
          </p>

          <p className="text-base sm:text-lg text-purple-200/60 max-w-2xl mx-auto mb-14 leading-relaxed">
            Prioritizam cashflow-ul, ritmul de executie si autonomia echipei, astfel incat sa iti recastigi timpul pentru lucrurile care conteaza.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => onNavigate?.('inner-circle')}
              className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
            >
              Programeaza o sesiune de cunoastere
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-8 py-4 rounded-xl text-base font-semibold text-purple-300 hover:text-white border border-purple-500/20 hover:border-purple-500/40 transition-all">
              Vezi programele
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <p className="text-lg font-bold text-white">+30%</p>
              <p className="text-xs text-purple-200/50">cashflow mediu in 6-9 luni</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <p className="text-lg font-bold text-white">Sedinte</p>
              <p className="text-xs text-purple-200/50">care chiar se tin</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <p className="text-lg font-bold text-white">4 KPI</p>
              <p className="text-xs text-purple-200/50">care conteaza</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10 col-span-2 sm:col-span-1">
              <p className="text-sm font-bold text-white">Tech | Servicii | E-commerce | Productie</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Iti suna <span className="purple-gradient-text">cunoscut?</span>
            </h2>
          </div>

          <div className="space-y-3 mb-10">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                <span className="text-purple-200/80">{problem}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate?.('inner-circle')}
              className="cta-button inline-flex items-center gap-3 px-8 py-3 rounded-xl text-base tracking-wide group"
            >
              Hai sa lucram
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Cand se aprinde <span className="purple-gradient-text">becul rosu</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {warnings.map((warning, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-red-500/5 border border-red-500/10">
                <AlertTriangle size={20} className="text-red-400 flex-shrink-0 mt-0.5" />
                <span className="text-purple-200/80">{warning}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Beneficii <span className="purple-gradient-text">concrete</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="step-card rounded-2xl p-8 group">
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:border-purple-500/40 transition-colors">
                  <benefit.icon size={26} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-purple-200/60 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20">
                  <span className="text-sm font-semibold purple-gradient-text">{benefit.stat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Cum arata o zi cand <span className="purple-gradient-text">lucrurile nu merg</span>
            </h2>
          </div>

          <div className="space-y-3">
            {badDay.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                <div className="w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-purple-400">{i + 1}</span>
                </div>
                <span className="text-purple-200/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              <span className="purple-gradient-text">Metoda</span>
            </h2>
            <p className="text-lg text-purple-200/70">
              Coaching Sprint, antrenamente de conducere, workshopuri si resurse orientate spre executie si marja.
            </p>
          </div>

          <div className="step-card rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-6">Ce primesti:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatYouReceive.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                  <CheckCircle2 size={18} className="text-purple-400 flex-shrink-0" />
                  <span className="text-purple-200/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              <span className="purple-gradient-text">Programul</span>
            </h2>
            <p className="text-lg text-purple-200/70">
              Program lunar de antrenamente pentru antreprenori care conduc echipe si vor sa isi dezvolte leadership-ul si sistemele de management.
            </p>
          </div>

          <div className="grid sm:grid-cols-4 gap-4">
            <div className="step-card rounded-xl p-5 text-center">
              <p className="text-sm text-purple-200/50 mb-1">Durata</p>
              <p className="text-xl font-bold text-white">9 antrenamente</p>
            </div>
            <div className="step-card rounded-xl p-5 text-center">
              <p className="text-sm text-purple-200/50 mb-1">Format</p>
              <p className="text-xl font-bold text-white">Online</p>
            </div>
            <div className="step-card rounded-xl p-5 text-center">
              <p className="text-sm text-purple-200/50 mb-1">Durata sesiune</p>
              <p className="text-xl font-bold text-white">4 ore</p>
            </div>
            <div className="step-card rounded-xl p-5 text-center">
              <p className="text-sm text-purple-200/50 mb-1">Tematica</p>
              <p className="text-lg font-bold text-white">Delegare si conducerea echipei</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Ce <span className="purple-gradient-text">inveti</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {modules.map((mod, i) => (
              <div key={i} className="step-card rounded-2xl p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                    <mod.icon size={22} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{mod.title}</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed">{mod.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Primele <span className="purple-gradient-text">efecte</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {results.map((result, i) => (
              <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                <CheckCircle2 size={18} className="text-purple-400" />
                <span className="text-white font-medium">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="step-card rounded-2xl p-8 sm:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <User size={40} className="text-purple-400" />
              </div>
              <div className="text-center md:text-left">
                <p className="text-sm text-purple-200/50 mb-2">Despre mentor</p>
                <h3 className="text-2xl font-bold text-white mb-3">Ovidiu Toader</h3>
                <p className="text-purple-200/70">
                  Antrenor de antreprenori care ghideaza fondatori sa conduca afacerile cu claritate si eficienta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              <span className="purple-gradient-text">Rezultate</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="step-card rounded-2xl p-6 text-center">
                <p className="text-3xl sm:text-4xl font-black purple-gradient-text mb-2">{stat.value}</p>
                <p className="text-purple-200/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="step-card rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Pregatit sa iti cresti
              <br />
              <span className="purple-gradient-text">echipa?</span>
            </h2>

            <p className="text-lg text-purple-200/70 mb-10 max-w-xl mx-auto">
              Programeaza o conversatie si vezi cum poti construi o echipa autonoma si o afacere care functioneaza fara haos.
            </p>

            <button
              onClick={() => onNavigate?.('inner-circle')}
              className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
            >
              Programeaza o conversatie
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
