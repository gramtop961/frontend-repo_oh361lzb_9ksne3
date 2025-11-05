import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const skills = useMemo(
    () => ['MERN Stack', 'Android', 'Python', 'AI Integration', 'Computer Vision', 'Automation'],
    []
  );
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % skills.length), 1800);
    return () => clearInterval(t);
  }, [skills.length]);

  return (
    <section id="home" className="relative h-[100vh] min-h-[640px] w-full overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-[#8B5CF6] rounded-full blur-3xl opacity-30" />
        <div className="absolute top-10 right-0 h-72 w-72 bg-[#64FFDA] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#0A192F] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col items-start justify-center">
        <p className="uppercase tracking-[0.25em] text-[#64FFDA] text-xs sm:text-sm mb-6">Full-Stack Developer | AI/ML Specialist | Hackathon Winner</p>
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight text-[#E6F1FF] drop-shadow-xl"
          style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}
        >
          Building Intelligent
          <br />
          Software Solutions
        </h1>
        <div className="mt-6 text-[#E6F1FF]/80 text-base sm:text-lg flex items-center gap-2">
          <span className="opacity-70">Focus:</span>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
            <span className="inline-block h-2 w-2 rounded-full bg-[#64FFDA] animate-pulse" />
            <span className="font-medium">{skills[idx]}</span>
          </span>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-[#64FFDA] text-[#0A192F] font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition"
          >
            View Projects
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-white/15 bg-white/5 text-[#E6F1FF] hover:bg-white/10 transition"
          >
            <PlayCircle className="h-5 w-5 text-[#64FFDA]" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
