import { Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-mesh">
        <div className="orb absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/[0.12] animate-glow-pulse" />
        <div className="orb absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-purple-800/[0.08]" />
        <div className="orb absolute top-[30%] right-[-5%] w-[300px] h-[300px] bg-purple-700/[0.06]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line-wide" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 mb-10 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-purple-300 text-xs font-semibold tracking-[0.2em] uppercase">
            Ecosistem de Performanta
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-white mb-7">
          Performanta Este Singura
          <br />
          <span className="purple-gradient-text text-glow">
            Moneda Acceptata.
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-purple-200/60 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
          Un ecosistem de formare, evaluare si promovare unde autonomia se castiga prin performanta masurata.
        </p>

        <div className="relative max-w-3xl mx-auto mb-14">
          <div className="video-container aspect-video rounded-2xl flex items-center justify-center cursor-pointer group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-purple-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col items-center gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-400/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-500/30 group-hover:border-purple-400/50 transition-all duration-500 shadow-lg shadow-purple-500/20">
                <Play size={30} className="text-white ml-1.5" fill="white" fillOpacity={0.9} />
              </div>
              <span className="text-purple-400/60 text-[11px] uppercase tracking-[0.3em] font-medium">
                Vezi Prezentarea
              </span>
            </div>
          </div>
        </div>

        <a
          href="#cum-functioneaza"
          className="cta-button inline-flex items-center gap-3 px-10 py-4 rounded-xl text-base sm:text-lg tracking-wide group"
        >
          Intra in Sistem
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
}
