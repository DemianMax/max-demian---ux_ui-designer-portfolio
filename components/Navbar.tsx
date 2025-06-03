
import React, { useState } from 'react';
import { NAV_ITEMS, SECTION_IDS } from '../constants';
import type { NavItem, SectionId } from '../types';
import Icon from './ui/Icon'; // Using a generic Icon component

interface NavbarProps {
  activeSection: SectionId;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-brand-text-primary shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href={`#${SECTION_IDS.INICIO}`} className="font-headings font-bold text-xl hover:text-brand-highlight-primary transition-colors">
            Max Demian
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {NAV_ITEMS.map((item: NavItem) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                  ${activeSection === item.id 
                    ? 'bg-brand-highlight-primary text-brand-text-on-highlight' 
                    : 'hover:bg-brand-bg-alt hover:text-brand-highlight-primary'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-text-primary hover:text-brand-highlight-primary hover:bg-brand-bg-alt focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-highlight-primary"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {!isOpen ? (
                <Icon path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" className="block h-6 w-6" />
              ) : (
                <Icon path="M6 18L18 6M6 6l12 12" className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white" id="mobile-menu"> {/* Explicitly set bg-white here if needed, or ensure parent text color is inherited */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item: NavItem) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)} // Close menu on click
                className={`block px-3 py-2 rounded-md text-base font-medium
                  ${activeSection === item.id 
                    ? 'bg-brand-highlight-primary text-brand-text-on-highlight' 
                    : 'text-brand-text-primary hover:bg-brand-bg-alt hover:text-brand-highlight-primary'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
