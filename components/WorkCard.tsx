
import React from 'react';
import type { WorkProject } from '../types';
import Button from './ui/Button';

interface WorkCardProps {
  project: WorkProject;
}

const WorkCard: React.FC<WorkCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 hover:scale-105">
      <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-headings font-semibold text-brand-text-primary mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600 font-sans mb-3 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.hashtags.map((tag) => (
            <span key={tag} className="inline-block bg-brand-bg-alt rounded-full px-3 py-1 text-xs font-semibold text-brand-highlight-secondary mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto">
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => alert(`'Veja Mais' clicado para: ${project.title}. Detalhes/Modal não implementado.`)}
            className="w-full sm:w-auto"
          >
            Veja Mais
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
