import { FileText, Bot, Settings2, Map, Shield } from "lucide-react";

const features = [
  {
    icon: FileText,
    name: "NobleSuite™",
    tag: "Document Suite",
    desc: "Collaborative, versioned documents purpose-built for logistics with smart templates and audit trails.",
  },
  {
    icon: Bot,
    name: "NobleIntelligence",
    tag: "Integrated AI",
    desc: "An embedded copilot that learns your network to suggest routes, flag risks, and answer operational questions.",
  },
  {
    icon: Settings2,
    name: "NobleAutomate",
    tag: "Workflow Learning",
    desc: "Eliminate repetitive tasks with self-improving automations across bookings, exceptions, and invoicing.",
  },
  {
    icon: Map,
    name: "AI-driven Routing",
    tag: "Optimization",
    desc: "Continuously optimized multi-leg routing with carrier performance, cost, and carbon in the loop.",
  },
  {
    icon: Shield,
    name: "Secure & Compliant",
    tag: "Enterprise-grade",
    desc: "Granular permissions, encryption at rest and in transit, and full regulatory compliance ready.",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-12 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A unified, intelligent freight stack
          </h2>
          <p className="mt-3 text-slate-600">
            Every shipment interaction becomes a proactive advantage—planned, tracked, and automated from one place.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.name} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-700">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-slate-900">{f.name}</h3>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                      {f.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
