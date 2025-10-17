export interface ProjectLink {
  github: string;
  liveDemo?: string;
  video?: string;
  screenshots?: string[];
}

export interface Project {
  title: string;
  slug: string;
  shortTitle?: string;
  description: string;
  techStack: string[];
  links: ProjectLink;
  isFeatured?: boolean;
  date?: string;
  category?: "web" | "cli" | "fullstack" | "api" | "gui";
}
