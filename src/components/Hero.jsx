import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      {/* Spline 3D Scene: full-bleed cover */}
      <div className="absolute inset-0 z-0 will-change-transform [contain:paint]">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* Subtle gradient, vignette, and edge glow overlays that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(99,102,241,0.28)_0%,rgba(10,10,11,0.55)_60%,rgba(10,10,11,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(10,10,11,0.85),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#0A0A0B] to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:px-8">
        <motion.span
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-white/80" />
          Gaming-grade polish. Enterprise brains.
        </motion.span>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-3xl bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl">
          NobleVerse — where playful 3D meets powerful automation
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          className="mt-5 max-w-2xl text-balance text-base text-white/70 sm:text-lg">
          A glossy, interactive world for entertainment-scale UX and AI-native logistics. Smooth, responsive, and optimized for speed.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px_rgba(99,102,241,0.8)] transition-all hover:shadow-[0_0_56px_-10px_rgba(99,102,241,0.9)]">
            Explore NobleVerse
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur transition-colors hover:bg-white/10">
            Watch demo
          </a>
        </motion.div>

        {/* Character chips: playful, lightweight accents */}
        <div className="pointer-events-none relative mt-10 flex flex-wrap justify-center gap-2">
          {[
            'Interactive 3D',
            'Playful UI',
            'AI-native',
            'Gaming vibes',
          ].map((label, i) => (
            <motion.span
              key={label}
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.55 + i * 0.05 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70 backdrop-blur"
            >
              {label}
            </motion.span>
          ))}
        </div>

        {/* Floating HUD accents with slight parallax-like offsets */}
        <div className="pointer-events-none relative mt-12 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {['Realtime ETA', 'Autonomous Reroute', 'Carbon Tracker', 'Risk Guard'].map((label, i) => (
            <motion.div
              key={label}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.7 + i * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/70 backdrop-blur shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              {label}
            </motion.div>
          ))}
        </div>

        {/* Progressive reveal shimmer over the scene when loaded */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: loaded ? 0 : 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.04),transparent_60%)]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
