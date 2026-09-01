export interface Project {
  id: string;
  title: string;
  category: 'Web App' | 'Mobile & UI' | 'Fullstack' | 'Open Source';
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface TechSkill {
  name: string;
  category: 'Programming & Web' | 'Framework & Database' | 'Tools & Version Control' | 'Design & Creative';
  iconName: string;
  tagline: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score?: string;
  description: string;
  highlights: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

export interface Statistic {
  label: string;
  value: string;
  suffix?: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    titles: string[];
    bio: string;
    aboutLong: string;
    avatarUrl: string;
    location: string;
    status: string;
    email: string;
    phone: string;
  };
  statistics: Statistic[];
  education: Education[];
  experiences: Experience[];
  projects: Project[];
  skills: TechSkill[];
  socials: SocialLink[];
}
