
import React from 'react';
import { PROFILE_IMAGE_FOR_HERO_URL, SECTION_IDS } from '../constants';

interface HeroSectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setRef }) => {
  return (
    <div 
      ref={setRef} 
      id={SECTION_IDS.INICIO} 
      className="relative bg-white pt-16 flex items-center justify-center min-h-[85vh] md:min-h-[80vh] overflow-hidden" // Changed bg-brand-bg-primary to bg-white
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-12 lg:gap-16 w-full py-8 md:py-12">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 lg:w-3/5 order-2 md:order-1 flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headings font-bold text-brand-text-primary leading-tight">
            Olá, sou o Max.
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-sans text-brand-text-primary opacity-90">
            UX/UI Designer, Ilustrador e Infografista.
          </p>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-sans text-gray-700 max-w-md lg:max-w-lg">
            Apaixonado por transformar ideias complexas em experiências digitais intuitivas e visualmente atraentes.
          </p>
        </div>

        {/* Image Content with Triangle Clip Path */}
        <div className="md:w-1/2 lg:w-2/5 flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
          <div 
            className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 shadow-2xl"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} // Upward pointing triangle
          >
            <img 
              src={PROFILE_IMAGE_FOR_HERO_URL}
              alt="Max Demian" 
              className="w-full h-full object-cover"
              onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/maxdemianhero/400/400')} // Fallback
            />
          </div>
        </div>
      </div>
      
      {/* Arrow to hint at scrolling */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href={`#${SECTION_IDS.DESTAQUE}`} aria-label="Scroll to next section">
          <svg className="w-8 h-8 text-brand-text-primary opacity-60 hover:opacity-100 transition-opacity" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;