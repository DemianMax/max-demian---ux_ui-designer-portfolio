
import React, { useState } from 'react';
import SectionWrapper from './ui/SectionWrapper';
import WorkCard from './WorkCard';
import type { WorkProject, WorkCategory } from '../types';
import { SECTION_IDS, WORK_CATEGORIES } from '../constants';

// Mock Data - In a real app, this would come from an API or CMS
const mockWorks: WorkProject[] = [
  { id: '1', category: 'UX/UI Design', image: 'https://picsum.photos/seed/uxui1/400/300', title: 'Redesign de App Financeiro', description: 'Melhoria da experiência do usuário e interface para um aplicativo de finanças pessoais.', hashtags: ['#Figma', '#UserResearch', '#Prototyping'] },
  { id: '2', category: 'UX/UI Design', image: 'https://picsum.photos/seed/uxui2/400/300', title: 'Plataforma E-learning', description: 'Criação de uma plataforma intuitiva para cursos online, focada na acessibilidade.', hashtags: ['#AdobeXD', '#UserFlows', '#Accessibility'] },
  { id: '3', category: 'Infografia', image: 'https://picsum.photos/seed/info1/400/300', title: 'Impacto Ambiental de Plásticos', description: 'Infográfico detalhado sobre o ciclo de vida e impacto dos plásticos nos oceanos.', hashtags: ['#Illustrator', '#DataViz', '#Storytelling'] },
  { id: '4', category: 'Ilustração', image: 'https://picsum.photos/seed/illus1/400/300', title: 'Série de Personagens Fantásticos', description: 'Criação de uma coleção de personagens para um universo de fantasia.', hashtags: ['#Photoshop', '#ConceptArt', '#DigitalPainting'] },
  { id: '5', category: 'UX/UI Design', image: 'https://picsum.photos/seed/uxui3/400/300', title: 'Dashboard de Análise de Dados', description: 'Design de um dashboard complexo para visualização e análise de métricas de negócios.', hashtags: ['#Sketch', '#UIDesign', '#DataDriven'] },
  { id: '6', category: 'Infografia', image: 'https://picsum.photos/seed/info2/400/300', title: 'Evolução da Web', description: 'Infográfico interativo mostrando os marcos da história da internet.', hashtags: ['#HTML', '#CSS', '#JavaScript', '#SVG'] },
  { id: '7', category: 'Ilustração', image: 'https://picsum.photos/seed/illus2/400/300', title: 'Capa de Livro Infantil', description: 'Ilustração vibrante e cativante para a capa de um livro infantil.', hashtags: ['#Procreate', '#Illustration', '#Storybook'] },
];


interface FeaturedWorksSectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const FeaturedWorksSection: React.FC<FeaturedWorksSectionProps> = ({ setRef }) => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory | 'Todos'>(WORK_CATEGORIES[0]);

  const filteredWorks = activeCategory === 'Todos' 
    ? mockWorks 
    : mockWorks.filter(work => work.category === activeCategory);

  const allCategories: (WorkCategory | 'Todos')[] = ['Todos', ...WORK_CATEGORIES];


  return (
    <SectionWrapper id={SECTION_IDS.DESTAQUE} title="Trabalhos em Destaque" setRef={setRef}>
      <div className="mb-10 md:mb-12 flex justify-center flex-wrap gap-2">
        {allCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200
              ${activeCategory === category 
                ? 'bg-brand-highlight-primary text-brand-text-on-highlight shadow-md' 
                : 'bg-gray-200 text-brand-text-primary hover:bg-gray-300'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      {filteredWorks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map(project => (
            <WorkCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">Nenhum projeto encontrado para esta categoria.</p>
      )}
    </SectionWrapper>
  );
};

export default FeaturedWorksSection;
