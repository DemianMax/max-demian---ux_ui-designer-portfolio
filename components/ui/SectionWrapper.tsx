
import React from 'react';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  bgVariant?: 'primary' | 'alt';
  setRef: (el: HTMLDivElement | null) => void;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, subtitle, children, className = '', bgVariant = 'primary', setRef }) => {
  const bgColor = bgVariant === 'alt' ? 'bg-brand-bg-alt' : 'bg-white'; // Changed 'bg-brand-bg-primary' to 'bg-white' for primary variant
  
  return (
    <section ref={setRef} id={id} className={`py-16 md:py-24 ${bgColor} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl md:text-4xl font-headings font-bold text-brand-text-primary text-center mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
           <p className="text-lg text-brand-text-primary text-center mb-10 md:mb-12 max-w-3xl mx-auto">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;