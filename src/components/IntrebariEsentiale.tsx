import { useState } from 'react';
import { MessageCircle, ChevronDown, Shield, Sparkles } from 'lucide-react';

const faqs = [
  {
    q: 'Daca sunt la inceput, este pentru mine?',
    a: 'Da. Nivelul de Activare exista pentru a valida capacitatea ta de implementare. Nu experienta este criteriul. Executia este.',
  },
  {
    q: 'Daca nu am experienta in vanzari sau business?',
    a: 'Competenta se construieste prin aplicare directa. Ecosistemul este operational, nu teoretic.',
  },
  {
    q: 'Exista garantie de castig?',
    a: 'Nu. Exista validare prin performanta. Rezultatul reflecta executia.',
  },
  {
    q: 'Cat de repede pot monetiza?',
    a: 'Monetizarea incepe cand executia devine constanta si masurabila.',
  },
  {
    q: 'Pot avansa rapid in niveluri?',
    a: 'Da. Promovarea este determinata de competenta demonstrata, nu de timp petrecut.',
  },
  {
    q: 'Toti ajung la nivelul de Antreprenor?',
    a: 'Nu. Fiecare nivel este castigat.',
  },
  {
    q: 'Ce se intampla daca nu performez?',
    a: 'Nu promovezi. Standardul ramane constant.',
  },
  {
    q: 'Este un curs online?',
    a: 'Nu. Este un ecosistem de formare, executie si evaluare reala.',
  },
  {
    q: 'Este pentru oricine?',
    a: 'Nu. Este pentru cei care accepta responsabilitatea si performanta masurata.',
  },
  {
    q: 'Ce diferentiaza Tycoon Society?',
    a: 'Invatarea si monetizarea functioneaza simultan. Progresul este validat prin rezultate concrete.',
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqs[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`ie-faq-item group ${isOpen ? 'ie-faq-open' : ''}`}
      onClick={onToggle}
    >
      <div className="ie-faq-bg" />

      <div className="relative z-10">
        <div className="flex items-start gap-4 p-5 sm:p-6 cursor-pointer">
          <div className="ie-faq-number flex-shrink-0">
            <span className="text-[11px] font-mono font-black tracking-[0.15em] text-white relative z-10">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>

          <div className="flex-1 min-w-0 pt-1">
            <h3 className="text-[15px] sm:text-base text-gray-800 font-semibold leading-snug group-hover:text-gray-900 transition-colors duration-300">
              {item.q}
            </h3>
          </div>

          <div className={`ie-faq-toggle flex-shrink-0 transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}>
            <ChevronDown size={18} className="transition-colors duration-300" />
          </div>
        </div>

        <div className={`ie-faq-answer overflow-hidden transition-all duration-600 ease-out ${isOpen ? 'ie-faq-answer-open' : ''}`}>
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[64px] sm:pl-[72px]">
            <div className="ie-answer-line mb-4" />
            <p className="text-[14px] sm:text-[15px] leading-relaxed">
              <span className="text-purple-600 font-bold">{item.a.split('. ')[0]}.</span>
              {item.a.includes('. ') && <span className="text-gray-600"> {item.a.substring(item.a.indexOf('. ') + 2)}</span>}
            </p>
          </div>
        </div>

        <div className="ie-faq-progress">
          <div className="ie-faq-progress-fill" style={{ width: isOpen ? '100%' : '0%' }} />
        </div>
      </div>
    </div>
  );
}

export default function IntrebariEsentiale() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  const leftColumn = faqs.slice(0, 5);
  const rightColumn = faqs.slice(5);

  return (
    <section className="ie-section relative py-32 sm:py-40 px-5 sm:px-8 overflow-hidden">
      <div className="ie-noise" />
      <div className="ie-grid-bg" />

      <div className="absolute inset-0 pointer-events-none">
        <div className="ie-orb absolute top-[10%] left-[-6%] w-[500px] h-[500px]" />
        <div className="ie-orb-alt absolute bottom-[8%] right-[-8%] w-[450px] h-[450px]" />
      </div>

      <div className="ie-aurora" />
      <div className="ie-scan-line" />

      <div className="ie-particles">
        <span /><span /><span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 ie-glow-line" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="ie-badge-wrapper mb-8">
            <div className="ie-badge inline-flex items-center gap-3 px-6 py-2.5 rounded-full">
              <div className="ie-badge-signal">
                <span className="ie-signal-core" />
                <span className="ie-signal-ring ie-ring-1" />
                <span className="ie-signal-ring ie-ring-2" />
              </div>
              <MessageCircle size={14} className="text-gray-600" />
              <span className="text-gray-700 text-[11px] font-bold tracking-[0.35em] uppercase">
                Claritate
              </span>
            </div>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] mb-4 tracking-tight">
            <span className="ie-title-reveal text-black">Intrebari</span>{' '}
            <span className="ie-title-reveal ie-title-reveal-delay ie-essential-text">Esentiale</span>
          </h2>

          <div className="ie-subtitle-container max-w-2xl mx-auto">
            <div className="ie-subtitle-line" />
            <div className="py-5 px-6 space-y-1.5">
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
                Standardul este clar. Raspunsurile sunt directe.
              </p>
            </div>
            <div className="ie-subtitle-line" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 mb-16">
          <div className="space-y-4">
            {leftColumn.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((item, index) => (
              <FAQItem
                key={index + 5}
                item={item}
                index={index + 5}
                isOpen={openIndex === index + 5}
                onToggle={() => toggle(index + 5)}
              />
            ))}
          </div>
        </div>

        <div className="ie-closing group relative rounded-3xl overflow-hidden">
          <div className="ie-closing-aurora" />
          <div className="ie-closing-border" />

          <div className="relative z-10 p-10 sm:p-14 lg:p-16 text-center">
            <div className="ie-closing-icon mb-6">
              <div className="ie-closing-icon-outer">
                <div className="ie-closing-icon-inner">
                  <Shield size={24} className="text-gray-800" />
                </div>
              </div>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-black leading-snug mb-3 tracking-tight">
              Nu te convingem.
            </p>
            <div className="ie-closing-divider mx-auto my-4" />
            <p className="text-xl sm:text-2xl lg:text-3xl font-black text-purple-500 leading-snug mb-2 tracking-tight">
              Iti aratam standardul.
            </p>
            <p className="text-lg sm:text-xl font-bold text-black mt-6 tracking-tight">
              Decizia iti apartine.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 ie-glow-line" />
    </section>
  );
}
