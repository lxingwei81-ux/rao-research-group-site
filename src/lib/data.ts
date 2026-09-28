import { parse } from 'yaml';
import siteSource from '../data/site.yml?raw';
import publicationsSource from '../data/publications.yml?raw';
import positionsSource from '../data/positions.yml?raw';

export interface SiteConfig {
  site_name?: string;
  lab_name?: string;
  lab_tagline?: string;
  lab_description?: string;
  site_url: string;
  department: string;
  institution: string;
  institution_url: string;
  department_url?: string;
  official_logo?: string;
  contact_email?: string;
  address?: string;
  social_links?: { label: string; url: string }[];
  footer_links: { label: string; url: string }[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  url?: string;
  featured?: boolean;
  research_area?: string;
  cover_image?: string;
  equal_contribution_note?: string;
}

export interface Position {
  intro?: string;
  position: string;
  description?: string;
  requirements?: string;
  status?: string;
  application_method?: string;
  contact_email?: string;
  published?: boolean;
}

export const site = parse(siteSource) as SiteConfig;
export const publications = (parse(publicationsSource) as Publication[]).sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
export const positions = (parse(positionsSource) as Position[]).filter((position) => position.published);

export const currentYear = new Date().getFullYear();

export function publicationCitation(publication: Publication) {
  return [publication.journal, publication.volume, publication.pages].filter(Boolean).join(', ');
}
