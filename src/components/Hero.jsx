import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/3s8yXo5q6kB8Uuy3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-tr from-white via-indigo-200 to-purple-200">
          Build Beautiful Apps, Faster
        </h1>
        <p className="text-lg sm:text-xl text-white/80 mb-8">
          A modern starter experience with React, Tailwind, animations, and a touch of 3D.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">
            Get Started <ArrowRight size={18} />
          </a>
          <a href="#features" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
            Explore Features
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
    </section>
  );
}
