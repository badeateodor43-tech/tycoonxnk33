import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'sales-infrastructure', label: 'Sales Infrastructure' },
  { id: 'inner-circle', label: 'Inner Circle' },
  { id: 'partnerships', label: 'Partnerships' },
];

export default function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: string) => {
    onNavigate?.(page);
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className={`liquid-glass-nav relative rounded-2xl transition-all duration-500 ${scrolled ? 'liquid-glass-scrolled' : ''}`}>
          <div className="liquid-glass-bg" />
          <div className="liquid-glass-shine" />
          <div className="liquid-glass-border" />

          <div className="relative z-10 flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4">
            <button
              onClick={() => handleNavigate('home')}
              className="flex items-center gap-1.5 group"
            >
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white drop-shadow-lg">
                TYCOON
              </span>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight liquid-text-gradient">
                SOCIETY
              </span>
            </button>

            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`nav-item-glass px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                    currentPage === item.id
                      ? 'nav-item-active text-white'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavigate('inner-circle')}
                className="cta-button-glass px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide"
              >
                Join the Ecosystem
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white/90 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 px-4 sm:px-6 lg:px-10 ${
          mobileOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="liquid-glass-nav rounded-2xl overflow-hidden">
            <div className="liquid-glass-bg" />
            <div className="liquid-glass-border" />

            <div className="relative z-10 p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-white/15 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigate('inner-circle')}
                className="w-full cta-button-glass px-6 py-3 rounded-xl text-sm font-bold tracking-wide mt-3"
              >
                Join the Ecosystem
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
