import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-500 text-white shadow-sm">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">NobleVerse</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#suite" className="hover:text-slate-900 transition-colors">NobleSuite</a>
            <a href="#intelligence" className="hover:text-slate-900 transition-colors">Intelligence</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-white">
              Book a demo
            </button>
            <button className="inline-flex items-center rounded-lg bg-slate-900 px-3.5 py-1.5 text-sm font-medium text-white shadow hover:bg-slate-800">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
