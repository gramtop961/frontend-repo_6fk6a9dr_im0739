import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-[1]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90rem_50rem_at_top_right,rgba(79,70,229,0.15),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              AI-native OS for modern freight
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Unify logistics. Inject intelligence. Move the world faster.
            </h1>
            <p className="mt-5 text-lg leading-7 text-slate-600">
              NobleVerse is a shipment intelligence ecosystem that centralizes routing, tracking, documents, and automation into a single, proactive platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-white font-medium shadow hover:bg-indigo-500">
                Explore the platform
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 font-medium hover:bg-slate-50">
                See NobleSuite
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
