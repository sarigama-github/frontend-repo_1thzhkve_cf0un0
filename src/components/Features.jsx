import { Star, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Elegant UI',
    desc: 'Polished components with Tailwind and thoughtful defaults for a great first impression.'
  },
  {
    icon: Zap,
    title: 'Fast & Modern',
    desc: 'Vite-powered dev experience with instant HMR and optimized production builds.'
  },
  {
    icon: ShieldCheck,
    title: 'Ready to Scale',
    desc: 'Solid foundations and patterns so you can grow features without the mess.'
  },
  {
    icon: Star,
    title: 'Batteries Included',
    desc: 'Icons, animations, and 3D ready out of the box when you need extra flair.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">Features</h2>
          <p className="text-white/70">Everything you need to ship a clean, modern site quickly.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2 rounded-md bg-white/10">
                  <f.icon size={18} />
                </span>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="text-sm text-white/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
