import { ArrowRight, Users, MessageSquare, Handshake, BookOpen, Lock, Briefcase, ShoppingBag, Code, Wrench, Factory, UserCheck, MessageCircle, Send } from 'lucide-react';

interface InnerCircleProps {
  onNavigate?: (page: string) => void;
}

const benefits = [
  {
    icon: Users,
    title: 'High-Level Networking',
    description: 'Conecteaza-te cu antreprenori care construiesc companii reale.',
  },
  {
    icon: MessageSquare,
    title: 'Strategic Conversations',
    description: 'Discutii despre decizii strategice si provocari reale din business.',
  },
  {
    icon: Handshake,
    title: 'Collaboration Opportunities',
    description: 'Parteneriate si colaborari intre antreprenori.',
  },
  {
    icon: BookOpen,
    title: 'Shared Experience',
    description: 'Inveti direct din experientele altor fondatori.',
  },
  {
    icon: Lock,
    title: 'Trusted Environment',
    description: 'Un spatiu unde antreprenorii pot discuta deschis despre business.',
  },
];

const criteria = [
  'conduc sau construiesc activ o companie',
  'sunt orientati spre crestere',
  'sunt deschisi la colaborari',
  'pot contribui la valoarea grupului',
];

const industries = [
  { icon: Code, name: 'Tech' },
  { icon: ShoppingBag, name: 'E-commerce' },
  { icon: Wrench, name: 'Servicii' },
  { icon: Briefcase, name: 'Consultanta' },
  { icon: Factory, name: 'Productie' },
];

const steps = [
  { num: '1', title: 'Application', desc: 'Completezi aplicatia pentru Inner Circle.' },
  { num: '2', title: 'Conversation', desc: 'Programam o conversatie pentru a intelege contextul tau antreprenorial.' },
  { num: '3', title: 'Invitation', desc: 'Daca exista potrivire, primesti invitatia de a intra in Inner Circle.' },
];

export default function InnerCircle({ onNavigate }: InnerCircleProps) {
  return (
    <div className="min-h-screen bg-dark-950">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-mesh">
          <div className="orb absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/[0.12] animate-glow-pulse" />
          <div className="orb absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-purple-800/[0.08]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 glow-line-wide" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
            <Lock size={14} className="text-purple-400" />
            <span className="text-purple-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Exclusive Access
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-7">
            The Tycoon Society
            <br />
            <span className="purple-gradient-text text-glow">Inner Circle</span>
          </h1>

          <p className="text-xl sm:text-2xl text-purple-200/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Un cerc privat pentru antreprenori care construiesc companii reale.
          </p>

          <p className="text-base sm:text-lg text-purple-200/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            Inner Circle este un grup exclusiv din cadrul Tycoon Society unde antreprenorii se conecteaza direct intre ei pentru colaborari, idei strategice si oportunitati de business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 text-purple-200/50 text-sm">
            <span>Nu este o comunitate publica.</span>
            <span className="hidden sm:block">|</span>
            <span>Nu este un grup deschis.</span>
          </div>

          <p className="text-lg text-white font-medium mb-10 max-w-xl mx-auto">
            Este un cerc select de antreprenori care gandesc pe termen lung si care vor sa fie conectati cu alti fondatori care construiesc serios.
          </p>

          <button
            onClick={() => onNavigate?.('partnerships')}
            className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
          >
            Apply for the Inner Circle
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <p className="text-purple-200/40 text-sm mt-4">Membership is limited.</p>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Why the Inner Circle <span className="purple-gradient-text">Exists</span>
            </h2>
          </div>

          <div className="space-y-6 text-lg text-purple-200/70 leading-relaxed mb-12">
            <p>Majoritatea antreprenorilor construiesc afaceri singuri.</p>
            <p>Deciziile importante sunt luate in izolare. Provocarile sunt discutate rar cu oameni care inteleg cu adevarat contextul.</p>
            <p className="text-white font-medium">Inner Circle a fost creat pentru a rezolva aceasta problema.</p>
          </div>

          <div className="step-card rounded-2xl p-8">
            <p className="text-purple-200/80 mb-6">Un spatiu unde antreprenorii pot discuta deschis despre:</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {['cresterea afacerii', 'decizii strategice', 'provocari de leadership', 'oportunitati de colaborare'].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-purple-200/60 mt-6">cu oameni care se confrunta cu aceleasi realitati.</p>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              What Happens Inside <span className="purple-gradient-text">the Inner Circle</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="step-card rounded-2xl p-6 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:border-purple-500/40 transition-colors">
                  <benefit.icon size={24} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Admission <span className="purple-gradient-text">Criteria</span>
            </h2>
            <p className="text-purple-200/60 mb-8">Inner Circle nu este deschis public.</p>
          </div>

          <div className="step-card rounded-2xl p-8 mb-8">
            <p className="text-purple-200/80 mb-6">Acceptam doar antreprenori care:</p>
            <div className="space-y-3">
              {criteria.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-purple-500/5 border border-purple-500/10">
                  <UserCheck size={18} className="text-purple-400 flex-shrink-0" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-lg text-purple-200/70">
            Scopul este sa mentinem un cerc restrans de antreprenori seriosi.
          </p>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Member <span className="purple-gradient-text">Profile</span>
            </h2>
            <p className="text-purple-200/60 mb-8">Antreprenorii din Inner Circle provin din industrii precum:</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {industries.map((industry, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-xl bg-purple-500/5 border border-purple-500/15">
                <industry.icon size={18} className="text-purple-400" />
                <span className="text-white font-medium">{industry.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-purple-200/60">
            si conduc companii aflate in diferite stadii de crestere.
          </p>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              How to <span className="purple-gradient-text">Join</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="step-card rounded-2xl p-6 text-center group">
                <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4 group-hover:border-purple-500/40 transition-colors">
                  <span className="text-xl font-black purple-gradient-text">{step.num}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-purple-200/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="step-card rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Apply for the
              <br />
              <span className="purple-gradient-text">Inner Circle</span>
            </h2>

            <p className="text-lg text-purple-200/70 mb-10 max-w-xl mx-auto">
              Daca esti antreprenor si vrei sa faci parte dintr-un cerc privat de fondatori care construiesc companii reale, aplica pentru Inner Circle.
            </p>

            <button
              onClick={() => onNavigate?.('partnerships')}
              className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
            >
              Apply for the Inner Circle
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p className="text-purple-200/40 text-sm mt-4">We accept a limited number of members each quarter.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
