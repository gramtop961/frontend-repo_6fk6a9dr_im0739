import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/Ao-qpnKUMOxV2eTA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient and vignette overlays that do not block interactions */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(99,102,241,0.25)_0%,rgba(10,10,11,0.6)_60%,rgba(10,10,11,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(10,10,11,0.8),transparent_30%)]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur"
        >
          Glossy, fluid intelligence for modern logistics
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-3xl bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-4xl font-bold leading-tight text-transparent sm:text-6xl"
        >
          The unified, intelligent freight stack
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          className="mt-5 max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          Orchestrate planning, automation, and AI-native visibility across your network with a
          glossy, dark, and immersive experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.45 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#get-started"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px_rgba(99,102,241,0.8)] transition-all hover:shadow-[0_0_56px_-10px_rgba(99,102,241,0.9)]"
          >
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur transition-colors hover:bg-white/10"
          >
            Live demo
          </a>
        </motion.div>

        {/* Floating HUD accents */}
        <div className="pointer-events-none relative mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-4">
          {["Realtime ETA", "Autonomous Reroute", "Carbon Tracker", "Risk Guard"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.6 + i * 0.06 }}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-white/70 backdrop-blur"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
