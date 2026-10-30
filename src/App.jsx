import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Process />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
