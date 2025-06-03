import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import { PROFILE_IMAGE_ABOUT_URL, SECTION_IDS } from '../constants';

const presentationText = `
Com mais de duas décadas de experiência dedicadas ao design e à tecnologia, minha paixão é criar soluções que não apenas atendam às necessidades dos usuários, mas que também encantem e engajem. Minha jornada profissional me permitiu explorar diversas facetas do design, desde a ilustração detalhada e infográficos informativos até a arquitetura complexa de experiências de usuário (UX) e interfaces intuitivas (UI).

Resido em São Paulo, Brasil, um vibrante centro de inovação, onde continuo a aprimorar minhas habilidades e a colaborar em projetos desafiadores. Acredito que o bom design é uma fusão de empatia, estratégia e estética, resultando em produtos digitais que são ao mesmo tempo funcionais e memoráveis. Meu foco principal é o UX Design, buscando sempre entender profundamente o comportamento humano para construir pontes eficazes entre pessoas e tecnologia.
`;

interface AboutSectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ setRef }) => {
  return (
    <SectionWrapper id={SECTION_IDS.SOBRE} title="Olá, eu sou Max Demian" setRef={setRef} bgVariant="alt">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
        <div className="md:col-span-2 flex justify-center">
          <img 
            src={PROFILE_IMAGE_ABOUT_URL} 
            alt="Max Demian" 
            className="rounded-lg shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
            onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/maxdemianprofile/400/400')} // Fallback
          />
        </div>
        <div className="md:col-span-3">
          <div className="prose prose-lg text-brand-text-primary max-w-none font-sans">
            {presentationText.trim().split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;