
import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedWorksSection from './components/FeaturedWorksSection';
import PortfolioSection from './components/PortfolioSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import ContactSection from './components/ContactSection';
import { SECTION_IDS } from './constants';
import type { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_IDS.INICIO);
  const sectionRefs = useRef<Record<SectionId, HTMLDivElement | null>>({} as Record<SectionId, HTMLDivElement | null>);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id as SectionId);
      }
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4 // Adjust this value to change when the section is considered "active"
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(SECTION_IDS).forEach(id => {
      const section = sectionRefs.current[id];
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(SECTION_IDS).forEach(id => {
        const section = sectionRefs.current[id];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [observerCallback]);

  const setSectionRef = (id: SectionId) => (el: HTMLDivElement | null) => {
    sectionRefs.current[id] = el;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection setRef={setSectionRef(SECTION_IDS.INICIO)} />
        <FeaturedWorksSection setRef={setSectionRef(SECTION_IDS.DESTAQUE)} />
        <PortfolioSection setRef={setSectionRef(SECTION_IDS.PORTFOLIO)} />
        <SkillsSection setRef={setSectionRef(SECTION_IDS.HABILIDADES)} />
        <AboutSection setRef={setSectionRef(SECTION_IDS.SOBRE)} />
        <JourneySection setRef={setSectionRef(SECTION_IDS.TRAJETORIA)} />
        <ContactSection setRef={setSectionRef(SECTION_IDS.CONTATO)} />
      </main>
      <footer className="bg-brand-text-primary text-brand-bg-primary text-center p-6 mt-auto">
        <p>&copy; {new Date().getFullYear()} Max Demian. Todos os direitos reservados.</p>
        <p className="text-sm mt-1">Criado com React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
