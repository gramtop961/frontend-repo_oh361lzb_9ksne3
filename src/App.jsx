import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutSection from './components/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-[#E6F1FF] antialiased">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
