export default function Footer() {
  return (
    <footer id="contact" className="py-10 bg-black text-white/70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Vibe App. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="mailto:hello@example.com" className="hover:text-white">Email</a>
          <a href="#home" className="hover:text-white">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
