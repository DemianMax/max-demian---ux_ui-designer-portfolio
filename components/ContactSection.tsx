
import React from 'react';
import SectionWrapper from './ui/SectionWrapper';
import type { ContactLink } from '../types';
import { SECTION_IDS } from '../constants';
import { MailIcon, PhoneIcon, LocationMarkerIcon } from './ui/Icon'; // Using icons from Icon.tsx

const contactLinks: ContactLink[] = [
  { id: 'email', icon: <MailIcon className="w-7 h-7 text-brand-highlight-primary" />, text: 'max.demian.designer@example.com', href: 'mailto:max.demian.designer@example.com' },
  { id: 'phone', icon: <PhoneIcon className="w-7 h-7 text-brand-highlight-primary" />, text: '+55 (11) 9XXXX-XXXX', href: 'tel:+5511900000000' },
  { id: 'location', icon: <LocationMarkerIcon className="w-7 h-7 text-brand-highlight-primary" />, text: 'São Paulo, Brasil', href: '#' }, // No direct link for location typically
];

interface ContactSectionProps {
  setRef: (el: HTMLDivElement | null) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ setRef }) => {
  return (
    <SectionWrapper id={SECTION_IDS.CONTATO} title="Vamos Conversar?" setRef={setRef} bgVariant="alt">
      <p className="text-center text-lg text-brand-text-primary mb-10 md:mb-12 max-w-2xl mx-auto">
        Estou sempre aberto a novas oportunidades, colaborações e desafios. Se você tem um projeto em mente ou apenas quer trocar uma ideia, entre em contato!
      </p>
      <div className="max-w-lg mx-auto space-y-6">
        {contactLinks.map(link => (
          <a 
            key={link.id} 
            href={link.id === 'location' ? undefined : link.href} 
            className="flex items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            target={link.id === 'location' ? undefined : "_blank"}
            rel={link.id === 'location' ? undefined : "noopener noreferrer"}
          >
            <div className="flex-shrink-0 mr-4">
              {link.icon}
            </div>
            <div>
              <span className={`text-lg font-medium ${link.id !== 'location' ? 'group-hover:text-brand-highlight-secondary' : 'text-brand-text-primary'} transition-colors`}>
                {link.text}
              </span>
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
