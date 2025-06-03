
import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import type { TimelineEvent } from '../types';
import { SECTION_IDS } from '../constants';

const mockJourney: TimelineEvent[] = [
  { id: 'j1', period: '2018 - Presente', title: 'UX Lead Designer', company: 'InovaTech Solutions', description: 'Liderança de equipes de UX, definição de estratégias de design e mentoria para designers juniores em projetos de larga escala para clientes globais.' },
  { id: 'j2', period: '2015 - 2018', title: 'Senior UX/UI Designer', company: 'Digital Creations Co.', description: 'Desenvolvimento de interfaces e experiências para aplicativos móveis e web, focado em usabilidade e design centrado no usuário. Especialização em e-commerce.' },
  { id: 'j3', period: '2010 - 2015', title: 'UI Designer & Ilustrador', company: 'Creative Agency BrightSpark', description: 'Criação de identidades visuais, ilustrações digitais e interfaces gráficas para diversos clientes, desde startups a empresas consolidadas.' },
  { id: 'j4', period: '2003 - 2010', title: 'Designer Gráfico & Web Designer', company: 'Freelancer', description: 'Trabalhos como freelancer em design gráfico, web design e ilustração, construindo uma base sólida de habilidades e portfólio variado.' },
];

interface JourneySectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const JourneySection: React.FC<JourneySectionProps> = ({ setRef }) => {
  return (
    <SectionWrapper 
      id={SECTION_IDS.TRAJETORIA} 
      title="Trajetória Profissional" 
      subtitle="Uma jornada de crescimento contínuo no universo do design e experiência do usuário."
      setRef={setRef}
    >
      <div className="relative">
        {/* Vertical line for timeline effect on larger screens */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-highlight-secondary opacity-30 transform -translate-x-1/2"></div>
        
        <div className="space-y-12">
          {mockJourney.map((event, index) => (
            <div 
              key={event.id} 
              className={`md:flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-1/2 md:px-8 py-4">
                <div 
                  className={`bg-white p-6 rounded-lg shadow-xl border-l-4 ${index % 2 === 0 ? 'md:border-l-0 md:border-r-4 border-brand-highlight-primary' : 'border-brand-highlight-secondary'} hover:shadow-2xl transition-shadow duration-300`}
                >
                  <span className="text-sm font-semibold text-brand-highlight-secondary">{event.period}</span>
                  <h3 className="text-xl font-headings font-bold text-brand-text-primary mt-1 mb-2">{event.title}</h3>
                  <p className="text-md font-semibold text-gray-700 mb-2">{event.company}</p>
                  <p className="text-sm text-gray-600 font-sans">{event.description}</p>
                </div>
              </div>
              {/* Timeline marker */}
              <div className="hidden md:flex md:w-12 justify-center items-center relative h-full py-4">
                <div className="w-4 h-4 bg-brand-highlight-primary rounded-full border-2 border-white shadow-md z-10"></div>
              </div>
               {/* Spacer for mobile to not overlap marker logic */}
              <div className="md:w-1/2 md:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default JourneySection;
