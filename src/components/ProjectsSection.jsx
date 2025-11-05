import React from 'react';
import { ExternalLink, Github, Layers, ShoppingBag, Smartphone, Share2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Blueprint Automation Platform',
    desc: 'AI/ML powered document processing with computer vision and workflow automation.',
    tags: ['Python', 'OpenCV', 'NLP', 'FastAPI'],
    icon: Layers,
    demo: '#',
    code: '#',
  },
  {
    title: 'MERN E-commerce Solution',
    desc: 'Full-stack store with admin dashboard, inventory, and payments.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    icon: ShoppingBag,
    demo: '#',
    code: '#',
  },
  {
    title: 'Android Mobile Apps',
    desc: 'High-performance Android apps with Firebase auth and realtime DB.',
    tags: ['Kotlin', 'Java', 'Firebase'],
    icon: Smartphone,
    demo: '#',
    code: '#',
  },
  {
    title: 'Social Automation System',
    desc: 'Cross-platform content automation using Make.com and custom APIs.',
    tags: ['Make.com', 'APIs', 'Node'],
    icon: Share2,
    demo: '#',
    code: '#',
  },
  {
    title: 'IoT Hackathon Projects',
    desc: 'Sensor integration, data logging, and real-time dashboards.',
    tags: ['Arduino', 'ESP32', 'Sensors'],
    icon: Cpu,
    demo: '#',
    code: '#',
  },
];

function ProjectCard({ p }) {
  const Icon = p.icon;
  return (
    <motion.div
      whileHover={{ rotateX: 4, rotateY: -4, translateY: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{background:
        'linear-gradient(120deg, rgba(139,92,246,0.18), rgba(100,255,218,0.15))'}} />
      <div className="p-6 relative z-10">
        <div className="h-12 w-12 grid place-items-center rounded-lg bg-gradient-to-tr from-[#8B5CF6] to-[#64FFDA] text-[#0A192F] shadow-lg">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#E6F1FF]">{p.title}</h3>
        <p className="mt-2 text-sm text-[#E6F1FF]/75">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="px-2 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-[#E6F1FF]/80">{t}</span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <a href={p.demo} className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#64FFDA] text-[#0A192F] font-medium hover:opacity-90 transition">
            Live <ExternalLink className="h-4 w-4" />
          </a>
          <a href={p.code} className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 text-[#E6F1FF] hover:bg-white/10 transition">
            Code <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6F1FF]">Featured Projects</h2>
            <p className="mt-2 text-[#E6F1FF]/70">A selection of full-stack builds, ML integrations, and automation systems.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
