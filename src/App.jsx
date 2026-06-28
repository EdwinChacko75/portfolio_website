import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.scroll-fade');

    if (!fadeElements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      fadeElements.forEach(element => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      }
    );

    fadeElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <div id="home" className="section"><HomeSection /></div>
      <div id="experience" className="section"><ExperienceSection /></div>
      <div id="projects" className="section"><ProjectsSection /></div>
      <div id="about" className="section"><AboutSection /></div>
      <Footer />
    </div>
  );
}

export default App;
