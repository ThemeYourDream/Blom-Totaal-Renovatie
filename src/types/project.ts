export interface Project {
  id: string;
  slug: string;
  title: string;
  place: string;
  year: number;
  date?: string;
  type: ProjectType[];
  summary: string;
  description: string;
  services: string[];
  images: {
    main: string;
    gallery: string[];
    before?: string;
    after?: string;
  };
  featured: boolean;
  published: boolean;
  seo?: {
    title: string;
    description: string;
  };
  review?: {
    reviewId: string;
  };
}

export type ProjectType =
  | 'totaalrenovatie'
  | 'badkamer'
  | 'schilderwerk'
  | 'stucwerk'
  | 'tegelwerk'
  | 'glas'
  | 'zakelijk';

export interface ProjectsFilter {
  type?: ProjectType;
  place?: string;
  year?: number;
}
