import { useCallback } from 'react';
import { ArrowLeft, ArrowRight, Lock } from 'lucide-react';

const CARD_COUNT = 5;

function getIndex(current: number, offset: number, length: number) {
  return ((current + offset) % length + length) % length;
}

function ComingSoonCard({ isSide }: { isSide?: boolean }) {
  return (
    <div
      className="rounded-2xl overflow-hidden border border-purple-500/15 bg-gradient-to-br from-[#0a0514] via-[#130b1e] to-[#0a0514] select-none pointer-events-none"
      style={isSide ? undefined : { boxShadow: '0 0 80px rgba(139,92,246,0.06), 0 0 160px rgba(109,40,217,0.03), inset 0 1px 0 rgba(168,130,255,0.1)' }}
    >
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-purple-800/10" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className={`rounded-full border-2 border-purple-500/30 bg-purple-900/20 flex items-center justify-center backdrop-blur-sm ${isSide ? 'w-10 h-10' : 'w-14 h-14 sm:w-16 sm:h-16'}`}>
            <Lock size={isSide ? 16 : 24} className="text-purple-400" />
          </div>
          <span className={`text-white/80 font-bold tracking-tight ${isSide ? 'text-xs' : 'text-sm sm:text-base'}`}>
            Coming Soon
          </span>
        </div>
      </div>
      <div className="px-4 sm:px-5 py-3 sm:py-4">
        <div className="flex items-center gap-2">
          <div className={`rounded bg-purple-500/10 ${isSide ? 'h-3 w-16' : 'h-4 w-20 sm:w-24'}`} />
          <div className={`rounded bg-purple-500/5 ${isSide ? 'h-3 w-10' : 'h-4 w-14 sm:w-16'}`} />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const goNext = useCallback(() => {
    getIndex(0, 1, CARD_COUNT);
  }, []);

  const goPrev = useCallback(() => {
    getIndex(0, -1, CARD_COUNT);
  }, []);

  return (
    <section className="testimonials-bg relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden">
      <div className="testimonials-stars">
        <span /><span /><span /><span /><span /><span />
        <span /><span /><span /><span /><span /><span />
      </div>

      <div className="absolute top-0 left-0 right-0 testimonials-glow-line" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-purple-600 text-xs font-bold tracking-[0.3em] uppercase mb-5">
            Testimoniale
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Din Interiorul{' '}
            <span className="purple-gradient-text">
              Ecosistemului
            </span>
          </h2>
          <div className="testimonials-glow-line w-32 mx-auto mb-6" />
          <p className="text-purple-200/50 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Vocea celor care executa, masoara si avanseaza.
            <br />
            Realitatea sistemului se vede in experienta celor care aplica, masoara si avanseaza.
          </p>
        </div>

        <div className="relative flex items-center justify-center h-[340px] sm:h-[400px] lg:h-[440px]">
          <div className="absolute left-0 sm:left-4 lg:left-8 w-[200px] sm:w-[260px] lg:w-[300px] z-0">
            <div className="opacity-40 scale-90 blur-[1px]">
              <ComingSoonCard isSide />
            </div>
          </div>

          <button
            onClick={goPrev}
            className="absolute left-[140px] sm:left-[220px] lg:left-[260px] z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-[#0a0514]/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-900/20 hover:scale-110 group"
          >
            <ArrowLeft size={20} className="text-white/70 group-hover:text-white transition-colors" />
          </button>

          <div className="relative z-10 w-[280px] sm:w-[400px] lg:w-[500px]">
            <ComingSoonCard />
          </div>

          <button
            onClick={goNext}
            className="absolute right-[140px] sm:right-[220px] lg:right-[260px] z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-[#0a0514]/60 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:border-purple-400/50 hover:bg-purple-900/20 hover:scale-110 group"
          >
            <ArrowRight size={20} className="text-white/70 group-hover:text-white transition-colors" />
          </button>

          <div className="absolute right-0 sm:right-4 lg:right-8 w-[200px] sm:w-[260px] lg:w-[300px] z-0">
            <div className="opacity-40 scale-90 blur-[1px]">
              <ComingSoonCard isSide />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 testimonials-glow-line" />
    </section>
  );
}
