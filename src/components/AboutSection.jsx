import React, { useEffect, useState } from 'react';
import { Award, BrainCircuit, Code2, Users } from 'lucide-react';

function Stat({ label, target }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = 16;
    const inc = target / (duration / step);
    const id = setInterval(() => {
      start += inc;
      if (start >= target) {
        start = target;
        clearInterval(id);
      }
      setVal(Math.round(start));
    }, step);
    return () => clearInterval(id);
  }, [target]);
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="text-3xl font-bold text-[#64FFDA]">{val}+</div>
      <div className="text-sm text-[#E6F1FF]/70">{label}</div>
    </div>
  );
}

export default function AboutSection() {
  const tags = [
    'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'TensorFlow', 'OpenCV', 'Android', 'Kotlin', 'Firebase', 'Docker', 'AWS', 'Make.com', 'TypeScript'
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28 bg-[#0A192F]">
      <div className="absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-[#0A192F] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left visual */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#8B5CF6] to-[#64FFDA] opacity-20 blur-2xl" />
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#0B1D35] to-[#0A192F]">
            <div className="absolute inset-0 animate-pulse" style={{ background:
              'radial-gradient(600px circle at 0% 0%, rgba(139, 92, 246, 0.15), transparent 40%), radial-gradient(600px circle at 100% 100%, rgba(100, 255, 218, 0.12), transparent 40%)'
            }} />
            <div className="relative z-10 h-full w-full grid place-items-center">
              <BrainCircuit className="h-28 w-28 text-[#64FFDA] drop-shadow-[0_0_12px_rgba(100,255,218,0.35)]" />
            </div>
          </div>
        </div>

        {/* Right content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6F1FF]">About Me</h2>
          <p className="mt-4 text-[#E6F1FF]/80 leading-relaxed">
            Final Year BSc Computer Science student and Freelance Software Developer with 15+ delivered projects.
            I build full-stack platforms, intelligent automation, and computer vision systems. Multiple hackathon wins
            across IoT, AI/ML, and product engineering. Passionate about turning ideas into polished, scalable solutions.
          </p>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Projects" target={15} />
            <Stat label="Tech Mastered" target={25} />
            <Stat label="Happy Clients" target={12} />
            <Stat label="Hackathons Won" target={6} />
          </div>

          {/* Tag cloud */}
          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-[#E6F1FF]/90 hover:bg-white/10 transition">
                {t}
              </span>
            ))}
          </div>

          {/* Services highlights */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Code2 className="h-6 w-6 text-[#64FFDA]" />
              <div className="mt-2 font-semibold">Full-Stack Development</div>
              <div className="text-sm text-[#E6F1FF]/70">MERN, Laravel/PHP, Admin dashboards, APIs</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Award className="h-6 w-6 text-[#64FFDA]" />
              <div className="mt-2 font-semibold">Hackathon Champion</div>
              <div className="text-sm text-[#E6F1FF]/70">Rapid prototyping, IoT, product engineering</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <Users className="h-6 w-6 text-[#64FFDA]" />
              <div className="mt-2 font-semibold">Mentoring & Consulting</div>
              <div className="text-sm text-[#E6F1FF]/70">Automation, AI integration, architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
