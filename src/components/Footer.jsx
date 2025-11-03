import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0A0A0B]/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-center text-sm text-white/60 sm:flex-row sm:px-8">
        <p>© {year} NobleVerse. All rights reserved.</p>
        <nav className="flex items-center gap-5">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#status" className="hover:text-white">Status</a>
          <a href="#support" className="hover:text-white">Support</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
