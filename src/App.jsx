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

    const isAtDocumentEdge = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

      return scrollTop <= 2 || maxScroll - scrollTop <= 2;
    };

    const isInViewport = element => {
      const rect = element.getBoundingClientRect();

      return rect.bottom >= 0 && rect.top <= window.innerHeight;
    };

    const setFadeVisibility = (element, isVisible) => {
      const shouldForceVisibleAtEdge = isAtDocumentEdge() && isInViewport(element);

      element.classList.toggle('is-visible', isVisible || shouldForceVisibleAtEdge);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setFadeVisibility(entry.target, entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.18,
      }
    );

    const handleScrollEdge = () => {
      if (!isAtDocumentEdge()) {
        return;
      }

      fadeElements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('is-visible');
        }
      });
    };

    fadeElements.forEach(element => observer.observe(element));
    handleScrollEdge();

    window.addEventListener('scroll', handleScrollEdge, { passive: true });
    window.addEventListener('resize', handleScrollEdge);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollEdge);
      window.removeEventListener('resize', handleScrollEdge);
    };
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
