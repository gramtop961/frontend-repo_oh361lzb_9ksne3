import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Rocket } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0A192F]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#64FFDA] grid place-items-center shadow-lg shadow-cyan-500/20">
            <Rocket className="h-5 w-5 text-[#0A192F]" />
          </div>
          <span className="font-semibold tracking-tight text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">Dev Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#E6F1FF]/80 hover:text-[#64FFDA] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
            onClick={() => setDarkMode((d) => !d)}
          >
            {darkMode ? <Sun className="h-5 w-5 text-[#64FFDA]" /> : <Moon className="h-5 w-5 text-[#E6F1FF]" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
            onClick={() => setDarkMode((d) => !d)}
          >
            {darkMode ? <Sun className="h-5 w-5 text-[#64FFDA]" /> : <Moon className="h-5 w-5 text-[#E6F1FF]" />}
          </button>
          <button
            aria-label="Open menu"
            className="p-2 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5 transition"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6 text-[#E6F1FF]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#0A192F]/95 backdrop-blur-md md:hidden">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-semibold text-[#E6F1FF]">Menu</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 border border-white/10 rounded-md">
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="px-6 py-8 flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-[#E6F1FF] hover:text-[#64FFDA] transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
