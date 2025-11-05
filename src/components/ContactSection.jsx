import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', type: 'Web App', budget: 'Under $1000', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#E6F1FF]">Let’s build something great</h2>
        <p className="mt-2 text-[#E6F1FF]/70">Available for freelance projects in 2025 • Responses within 24 hours</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="grid grid-cols-1 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0A192F] border border-white/10 text-[#E6F1FF] placeholder:text-[#E6F1FF]/50 focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0A192F] border border-white/10 text-[#E6F1FF] placeholder:text-[#E6F1FF]/50 focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-md bg-[#0A192F] border border-white/10 text-[#E6F1FF] focus:outline-none"
                >
                  <option>Web App</option>
                  <option>Mobile App</option>
                  <option>AI/ML Integration</option>
                  <option>Automation</option>
                  <option>Other</option>
                </select>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-md bg-[#0A192F] border border-white/10 text-[#E6F1FF] focus:outline-none"
                >
                  <option>Under $1000</option>
                  <option>$1000 - $3000</option>
                  <option>$3000 - $7000</option>
                  <option>$7000+</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0A192F] border border-white/10 text-[#E6F1FF] placeholder:text-[#E6F1FF]/50 focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#64FFDA] text-[#0A192F] font-semibold hover:opacity-90 transition"
              >
                Send Message <Send className="h-5 w-5" />
              </button>
              {submitted && (
                <p className="text-sm text-[#64FFDA]">Thanks for reaching out! I will get back to you soon.</p>
              )}
            </div>
          </form>

          {/* Info / Social */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-[#E6F1FF]/80">
              <p>
                I take on select freelance projects that push the boundaries of user experience and applied AI. If you have a challenge in full-stack development, automation, or ML integration, let’s talk.
              </p>
              <div className="mt-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Freelance Projects 2025
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <a href="https://github.com/" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Github className="h-5 w-5 text-[#64FFDA]" /> GitHub
              </a>
              <a href="https://linkedin.com/" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Linkedin className="h-5 w-5 text-[#64FFDA]" /> LinkedIn
              </a>
              <a href="mailto:email@example.com" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Mail className="h-5 w-5 text-[#64FFDA]" /> Email
              </a>
              <a href="https://instagram.com/" className="flex items-center gap-3 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition">
                <Instagram className="h-5 w-5 text-[#64FFDA]" /> Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-[#E6F1FF]/60">
          © {new Date().getFullYear()} • Available for Freelance Projects 2025 • <a className="text-[#64FFDA] hover:underline" href="#projects">View Work</a>
        </div>
      </div>
    </section>
  );
}
