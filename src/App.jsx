import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">A polished foundation</h2>
              <p className="text-white/70 leading-relaxed">
                This starter brings a crisp design system, animations, and a hint of 3D so you can
                focus on your product. It’s responsive, accessible, and easy to extend.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a href="#get-started" className="px-5 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Get Started</a>
                <a href="#features" className="px-5 py-3 rounded-md border border-white/20 hover:bg-white/10 transition">See Features</a>
              </div>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-gradient-to-tr from-zinc-900 to-zinc-800 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold">⚡️</div>
                  <p className="mt-1 text-xs text-white/70">Fast builds</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold">🎨</div>
                  <p className="mt-1 text-xs text-white/70">Clean UI</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold">🧩</div>
                  <p className="mt-1 text-xs text-white/70">Composable</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold">🔐</div>
                  <p className="mt-1 text-xs text-white/70">Best practices</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold">🛠️</div>
                  <p className="mt-1 text-xs text-white/70">Dev tools</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5">
                  <div className="text-2xl font-bold">🚀</div>
                  <p className="mt-1 text-xs text-white/70">Ready to ship</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <section id="get-started" className="py-20 bg-black">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-3">Ready to build?</h3>
            <p className="text-white/70 mb-8">Use this layout as a launchpad for your next idea. Clean, fast, and flexible.</p>
            <a href="#home" className="inline-block px-6 py-3 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Launch</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
