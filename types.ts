
import React from 'react';
import { SECTION_IDS_ARRAY } from './constants';

export type SectionId = typeof SECTION_IDS_ARRAY[number];

export interface NavItem {
  id: SectionId;
  label: string;
}

export type WorkCategory = 'UX/UI Design' | 'Infografia' | 'Ilustração';

export interface WorkProject {
  id: string;
  category: WorkCategory;
  image: string;
  title: string;
  description: string;
  hashtags: string[];
}

export interface BehanceProject {
  id: string;
  image: string;
  name: string; // Added name for alt text and potential display
}

export interface Skill {
  name: string;
  icon?: React.ReactNode; // For simple SVG or placeholder
}

export interface TimelineEvent {
  id: string;
  period: string; // e.g., "2020 - Presente" or "Jan 2018 - Dez 2019"
  title: string;
  company: string;
  description: string;
}

export interface ContactLink {
  id: string;
  icon: React.ReactNode;
  text: string;
  href: string;
}
