import React from 'react';
import { Rocket, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0A0A0B]/70 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-[0_0_20px_-4px_rgba(99,102,241,0.6)]">
            <Rocket className="h-4 w-4" />
          </span>
          <span className="text-sm font-semibold tracking-wide text-white/90">NobleVerse</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="text-sm text-white/70 hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</a>
          <a href="#docs" className="text-sm text-white/70 hover:text-white transition-colors">Docs</a>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 shadow-sm backdrop-blur hover:bg-white/10 transition-colors">Sign in</button>
          <button className="rounded-lg bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_24px_-6px_rgba(99,102,241,0.8)] transition-shadow hover:shadow-[0_0_32px_-4px_rgba(99,102,241,0.9)]">Get started</button>
        </div>

        <button className="inline-flex md:hidden">
          <Menu className="h-6 w-6 text-white/80" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
