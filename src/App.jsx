import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />
        
        {/* 2. About Me */}
        <About />
        
        {/* 3. Skills */}
        <Skills />
        
        {/* 4. Featured Projects */}
        <Projects />
        
        {/* 5. How I Work */}
        <Process />
        
        {/* 6. Experience */}
        <Experience />
        
        {/* 7. Contact Section */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
