import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Settings2, Map, Shield, Workflow } from 'lucide-react';

const features = [
  {
    title: 'NobleSuite™',
    desc: 'Plan, execute, and analyze in one connected control center with deep AI assistance.',
    icon: Workflow,
  },
  {
    title: 'NobleIntelligence',
    desc: 'Forecast demand, predict disruptions, and optimize routing with continuous learning.',
    icon: Bot,
  },
  {
    title: 'NobleAutomate',
    desc: 'No-code automations orchestrating tasks, alerts, and workflows across partners.',
    icon: Settings2,
  },
  {
    title: 'AI-driven Routing',
    desc: 'Dynamic pathing and smart mode selection with real-time constraints and costs.',
    icon: Map,
  },
  {
    title: 'Secure & Compliant',
    desc: 'Enterprise-grade security with encryption, role controls, and continuous audit.',
    icon: Shield,
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-gradient-to-b from-white via-white to-white/70 bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl"
        >
          Everything you need to move freight intelligently
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          className="mt-3 text-white/70"
        >
          Modular capabilities that click together into one glossy, immersive stack.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40%_40%_at_30%_0%,rgba(99,102,241,0.25),transparent_60%)]" />
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500/90 text-white shadow-[0_0_22px_-8px_rgba(99,102,241,0.9)]">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;
