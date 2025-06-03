
import React, { useEffect, useRef, useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import Button from './ui/Button';
import type { BehanceProject } from '../types';
import { BEHANCE_PROFILE_URL, SECTION_IDS } from '../constants';

// Mock Behance Projects - in a real app, this might be fetched or manually curated
const mockBehanceProjects: BehanceProject[] = [
  { id: 'b1', image: 'https://picsum.photos/seed/behance1/400/250', name: 'Projeto Alpha no Behance' },
  { id: 'b2', image: 'https://picsum.photos/seed/behance2/400/250', name: 'Estudo de Caso Beta' },
  { id: 'b3', image: 'https://picsum.photos/seed/behance3/400/250', name: 'Design Conceitual Gamma' },
  { id: 'b4', image: 'https://picsum.photos/seed/behance4/400/250', name: 'Ilustrações Delta' },
  { id: 'b5', image: 'https://picsum.photos/seed/behance5/400/250', name: 'Infográficos Epsilon' },
  { id: 'b6', image: 'https://picsum.photos/seed/behance6/400/250', name: 'Projeto Zeta UX' },
];

interface PortfolioSectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ setRef }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    if (!isAutoScrolling || !carouselRef.current) return;

    const intervalId = setInterval(() => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth -1) { // -1 for potential float precision
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: clientWidth / 2, behavior: 'smooth' }); // Scroll by half visible width
        }
      }
    }, 3000); // Auto-scroll every 3 seconds

    return () => clearInterval(intervalId);
  }, [isAutoScrolling]);

  const handleInteraction = () => {
    setIsAutoScrolling(false); // Stop auto-scroll on user interaction
  };
  
  // Arrow icons for manual scroll (optional, could be styled better)
  const scroll = (direction: 'left' | 'right') => {
    setIsAutoScrolling(false);
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.75; // Scroll 75% of visible width
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };


  return (
    <SectionWrapper id={SECTION_IDS.PORTFOLIO} title="Veja Meu Portfólio Completo" setRef={setRef} bgVariant="alt">
      <div className="relative">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto space-x-4 p-4 scroll-smooth snap-x snap-mandatory"
          onMouseDown={handleInteraction} // Stop auto scroll on mouse down
          onTouchStart={handleInteraction} // Stop auto scroll on touch
        >
          {mockBehanceProjects.map(project => (
            <div key={project.id} className="snap-center flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md overflow-hidden aspect-[16/10] transition-transform duration-300 hover:scale-105">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
              </div>
            </div>
          ))}
        </div>
         {/* Manual Scroll Buttons */}
        <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-brand-text-primary/50 text-white p-2 rounded-full hover:bg-brand-text-primary z-10 ml-2"
            aria-label="Scroll left"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
        <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-brand-text-primary/50 text-white p-2 rounded-full hover:bg-brand-text-primary z-10 mr-2"
            aria-label="Scroll right"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </button>
      </div>
      <div className="text-center mt-10">
        <Button href={BEHANCE_PROFILE_URL} variant="primary" size="lg">
          Ver no Behance
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
