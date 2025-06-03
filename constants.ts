import type { NavItem } from './types';

export const BEHANCE_PROFILE_URL = "https://www.behance.net/maxdemian";

// URL for the profile image in the Hero section (triangle clip-path)
export const PROFILE_IMAGE_FOR_HERO_URL = "/assets/max_demian_hero_profile.png"; 
// URL for the profile image in the About section (square/rounded)
export const PROFILE_IMAGE_ABOUT_URL = "/assets/max_demian_about_profile.png";


export const SECTION_IDS = {
  INICIO: 'inicio',
  DESTAQUE: 'destaque',
  PORTFOLIO: 'portfolio',
  HABILIDADES: 'habilidades',
  SOBRE: 'sobre',
  TRAJETORIA: 'trajetoria',
  CONTATO: 'contato',
} as const;

export const SECTION_IDS_ARRAY = Object.values(SECTION_IDS);

export const NAV_ITEMS: NavItem[] = [
  { id: SECTION_IDS.INICIO, label: 'Início' },
  { id: SECTION_IDS.DESTAQUE, label: 'Destaque' },
  { id: SECTION_IDS.PORTFOLIO, label: 'Portfólio' },
  { id: SECTION_IDS.HABILIDADES, label: 'Habilidades' },
  { id: SECTION_IDS.SOBRE, label: 'Sobre' },
  { id: SECTION_IDS.TRAJETORIA, label: 'Trajetória' },
  { id: SECTION_IDS.CONTATO, label: 'Contato' },
];

export const WORK_CATEGORIES = ['UX/UI Design', 'Infografia', 'Ilustração'] as const;