import { ArrowRight, Users, Rocket, Award, Handshake, Shield, Network, BookOpen, Building2, FileCheck, UserPlus, Play } from 'lucide-react';

interface PartnershipsProps {
  onNavigate?: (page: string) => void;
}

const whyPartner = [
  {
    icon: Users,
    title: 'High-Level Entrepreneurial Network',
    description: 'Partenerii Tycoon Society au acces la o comunitate de antreprenori orientati spre executie, crestere si dezvoltare in business.',
  },
  {
    icon: Rocket,
    title: 'Scalable Distribution',
    description: 'Mentorii si expertii pot integra programe educationale, workshop-uri sau mentorat in ecosistemul Tycoon Society.',
  },
  {
    icon: Award,
    title: 'Authority Positioning',
    description: 'Partenerii sunt pozitionati ca experti si lideri in domeniul lor in cadrul ecosistemului.',
  },
  {
    icon: Handshake,
    title: 'Strategic Collaborations',
    description: 'Ecosistemul faciliteaza colaborari intre antreprenori, mentori si experti din diferite industrii.',
  },
];

const partnerAdvantages = [
  {
    icon: Award,
    title: 'Authority Positioning',
    description: 'Partenerii sunt pozitionati ca experti si lideri in domeniul lor.',
  },
  {
    icon: Network,
    title: 'Access to a High-Level Network',
    description: 'Partenerii au acces la o retea de antreprenori si experti orientati spre crestere.',
  },
  {
    icon: Rocket,
    title: 'Scalable Distribution',
    description: 'Programele educationale si mentoratul pot fi integrate si distribuite in ecosistem.',
  },
  {
    icon: Handshake,
    title: 'Strategic Collaborations',
    description: 'Partenerii pot colabora cu antreprenori si experti din diferite industrii.',
  },
  {
    icon: Users,
    title: 'Impact on Future Entrepreneurs',
    description: 'Mentorii contribuie direct la dezvoltarea unei noi generatii de antreprenori.',
  },
];

const steps = [
  { num: '1', title: 'Application', desc: 'Partenerii aplica pentru a colabora cu Tycoon Society.' },
  { num: '2', title: 'Evaluation', desc: 'Analizam experienta si expertiza lor.' },
  { num: '3', title: 'Integration', desc: 'Programele educationale sau mentoratul sunt integrate in ecosistem.' },
  { num: '4', title: 'Collaboration', desc: 'Partenerii contribuie activ la dezvoltarea ecosistemului.' },
];

const ecosystem = [
  {
    icon: Building2,
    title: 'Sales Infrastructure',
    description: 'Sisteme de vanzari si infrastructura comerciala pentru companii.',
  },
  {
    icon: BookOpen,
    title: 'Entrepreneurial Education',
    description: 'Programe educationale si mentorat oferite de experti.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Parteneriate cu mentori si lideri din industrie.',
  },
  {
    icon: Network,
    title: 'Entrepreneurial Network',
    description: 'O comunitate de antreprenori orientati spre crestere.',
  },
];

export default function Partnerships({ onNavigate }: PartnershipsProps) {
  return (
    <div className="min-h-screen bg-dark-950">
      <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-mesh">
          <div className="orb absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/[0.12] animate-glow-pulse" />
          <div className="orb absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-purple-800/[0.08]" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 glow-line-wide" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
            <Handshake size={14} className="text-purple-400" />
            <span className="text-purple-300 text-xs font-semibold tracking-[0.2em] uppercase">
              Partnerships
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-7">
            The Tycoon Society
            <br />
            <span className="purple-gradient-text text-glow">Alliance</span>
          </h1>

          <p className="text-xl sm:text-2xl text-purple-200/80 max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
            Un ecosistem unde antreprenorii invata direct de la lideri din industrie.
          </p>

          <p className="text-base sm:text-lg text-purple-200/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            Tycoon Society conecteaza antreprenori, mentori si experti intr-un ecosistem construit pentru performanta in business.
          </p>

          <p className="text-base sm:text-lg text-purple-200/60 max-w-2xl mx-auto mb-6 leading-relaxed">
            Cautam parteneri care pot aduce experienta reala, modele de business validate si mentorat valoros in comunitatea noastra.
          </p>

          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
            Impreuna construim un mediu in care antreprenorii pot invata direct de la lideri din industrie.
          </p>

          <button
            onClick={() => onNavigate?.('inner-circle')}
            className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
          >
            Join the Tycoon Society Alliance
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <p className="text-purple-200/40 text-sm mt-4">Applications are reviewed individually.</p>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Why Industry Leaders Partner
              <br />
              <span className="purple-gradient-text">with Tycoon Society</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {whyPartner.map((item, i) => (
              <div key={i} className="step-card rounded-2xl p-8 group">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                    <item.icon size={26} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-purple-200/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              The Partner <span className="purple-gradient-text">Advantage</span>
            </h2>
            <p className="text-lg text-purple-200/70 max-w-2xl mx-auto">
              Partenerii Tycoon Society devin parte dintr-un ecosistem construit pentru antreprenori, performanta si colaborare strategica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerAdvantages.map((item, i) => (
              <div key={i} className="step-card rounded-2xl p-6 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 group-hover:border-purple-500/40 transition-colors">
                  <item.icon size={24} className="text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              The Standard for <span className="purple-gradient-text">Tycoon Society Partners</span>
            </h2>
          </div>

          <div className="step-card rounded-2xl p-8 text-center">
            <p className="text-xl text-white font-semibold mb-6">Nu colaboram cu teoreticieni.</p>
            <p className="text-lg text-purple-200/70 mb-6">
              Colaboram cu oameni care au construit, au scalat si au acumulat experienta reala in business.
            </p>
            <p className="text-lg text-purple-200/70">
              Mentorii si expertii din ecosistemul Tycoon Society contribuie prin experienta practica, perspective strategice si modele de business validate.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              The Tycoon Society <span className="purple-gradient-text">Partnership Process</span>
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Inside the <span className="purple-gradient-text">Tycoon Society Ecosystem</span>
            </h2>
            <p className="text-lg text-purple-200/70 max-w-2xl mx-auto">
              Tycoon Society este construit ca un ecosistem dedicat antreprenorilor care vor sa construiasca, sa scaleze si sa colaboreze.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {ecosystem.map((item, i) => (
              <div key={i} className="step-card rounded-2xl p-6 group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:border-purple-500/40 transition-colors">
                    <item.icon size={22} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-purple-200/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="step-card rounded-3xl p-10 sm:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6">
              Become a Tycoon Society
              <br />
              <span className="purple-gradient-text">Partner</span>
            </h2>

            <p className="text-lg text-purple-200/70 mb-10 max-w-xl mx-auto">
              Daca vrei sa contribui la dezvoltarea ecosistemului Tycoon Society si sa colaborezi cu o comunitate de antreprenori orientati spre performanta, aplica pentru un parteneriat.
            </p>

            <button
              onClick={() => onNavigate?.('inner-circle')}
              className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
            >
              Join the Tycoon Society Alliance
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <p className="text-purple-200/40 text-sm mt-4">Applications are reviewed individually.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
