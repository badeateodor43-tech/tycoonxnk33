export default function Footer() {
  return (
    <footer className="relative py-14 px-5 sm:px-8">
      <div className="absolute top-0 left-0 right-0 glow-line" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-bold text-white tracking-tight">TYCOON</span>
          <span className="text-sm font-bold purple-gradient-text tracking-tight">SOCIETY</span>
        </div>
        <p className="text-purple-300/30 text-xs tracking-wide">
          &copy; {new Date().getFullYear()} Tycoon Society. Toate drepturile
          rezervate.
        </p>
      </div>
    </footer>
  );
}
