export interface Projet {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: any;
  sector: string;
  client: string;
  clientLogo?: any;
  year: string;
  city: string;
  zone?: string;
  summary: string;
  services?: string[];
  standards?: string[];
  context?: any[];
  intervention?: any[];
  valeurAjoutee?: string;
  keywords?: string[];
  featured?: boolean;
}
