export interface Article {
  _id: string;
  title: string;
  slug: { current: string };
  coverImage?: any;
  excerpt: string;
  publishedAt: string;
  category: string;
  author?: string;
  content?: any[];
  showPartnerSidebar?: boolean;
  partnerName?: string;
  partnerLogo?: any;
  keywords?: string[];
  featured?: boolean;
}
