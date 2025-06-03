import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import type { Skill } from '../types';
import { SECTION_IDS } from '../constants';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  FigmaIcon,
  AdobeXDIcon,
  SketchIcon,
  AdobeIllustratorIcon,
  AdobePhotoshopIcon,
  ProcreateIcon,
  MiroIcon,
  ZeplinIcon
} from './ui/Icon';

const iconSize = "w-10 h-10 md:w-12 md:h-12"; // Consistent icon size for software

const softwareSkills: Skill[] = [
  { name: 'Figma', icon: <FigmaIcon className={iconSize} /> },
  { name: 'Adobe XD', icon: <AdobeXDIcon className={iconSize} /> },
  { name: 'Sketch', icon: <SketchIcon className={iconSize} /> },
  { name: 'Adobe Illustrator', icon: <AdobeIllustratorIcon className={iconSize} /> },
  { name: 'Adobe Photoshop', icon: <AdobePhotoshopIcon className={iconSize} /> },
  { name: 'Procreate', icon: <ProcreateIcon className={iconSize} /> },
  { name: 'Miro', icon: <MiroIcon className={iconSize} /> },
  { name: 'Zeplin', icon: <ZeplinIcon className={iconSize} /> },
];

const mainSkillsIconSize = "w-8 h-8 text-brand-highlight-secondary";
const mainSkills: Skill[] = [
  { name: 'User Research', icon: <UserGroupIcon className={mainSkillsIconSize} /> },
  { name: 'Wireframing', icon: <CodeBracketIcon className={mainSkillsIconSize} /> },
  { name: 'Prototipagem', icon: <LightBulbIcon className={mainSkillsIconSize} /> },
  { name: 'UI Design', icon: <ChartBarIcon className={mainSkillsIconSize} /> },
  { name: 'UX Writing', icon: <UserGroupIcon className={mainSkillsIconSize} /> }, 
  { name: 'Design de Interação', icon: <LightBulbIcon className={mainSkillsIconSize} /> },
];

const knowledgeSkillsIconSize = "w-8 h-8 text-brand-highlight-secondary";
const knowledgeSkills: Skill[] = [
  { name: 'Design Systems', icon: <CodeBracketIcon className={knowledgeSkillsIconSize} /> },
  { name: 'Metodologias Ágeis (Scrum)', icon: <UserGroupIcon className={knowledgeSkillsIconSize} /> },
  { name: 'Acessibilidade (WCAG)', icon: <LightBulbIcon className={knowledgeSkillsIconSize} /> },
  { name: 'Arquitetura da Informação', icon: <ChartBarIcon className={knowledgeSkillsIconSize} /> },
  { name: 'Testes de Usabilidade', icon: <UserGroupIcon className={knowledgeSkillsIconSize} /> },
  { name: 'Design Thinking', icon: <LightBulbIcon className={knowledgeSkillsIconSize} /> },
];

interface SkillItemProps {
  skill: Skill;
  isSoftware?: boolean;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill, isSoftware = false }) => {
  if (isSoftware) {
    return (
      <div className="flex flex-col items-center text-center p-2 transition-transform duration-200 hover:scale-105">
        {skill.icon && <div className="mb-2">{skill.icon}</div>}
        <span className="font-medium text-sm text-brand-text-primary">{skill.name}</span>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      {skill.icon && <div className="mb-2">{skill.icon}</div>}
      <span className="font-medium text-brand-text-primary">{skill.name}</span>
    </div>
  );
};

interface SkillsSectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ setRef }) => {
  return (
    <SectionWrapper id={SECTION_IDS.HABILIDADES} title="Habilidades Técnicas" setRef={setRef}>
      <div className="space-y-12">
        {/* Softwares */}
        <div>
          <h3 className="text-2xl font-headings font-semibold text-brand-text-primary text-center mb-8">Softwares</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-x-4 gap-y-6">
            {softwareSkills.map(skill => <SkillItem key={skill.name} skill={skill} isSoftware />)}
          </div>
        </div>

        {/* Habilidades */}
        <div>
          <h3 className="text-2xl font-headings font-semibold text-brand-text-primary text-center mb-8">Habilidades</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {mainSkills.map(skill => <SkillItem key={skill.name} skill={skill} />)}
          </div>
        </div>

        {/* Conhecimentos */}
        <div>
          <h3 className="text-2xl font-headings font-semibold text-brand-text-primary text-center mb-8">Conhecimentos</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {knowledgeSkills.map(skill => <SkillItem key={skill.name} skill={skill} />)}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;