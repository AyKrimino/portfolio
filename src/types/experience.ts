export type ExperienceType = "internship" | "freelance" | "full-time" | "part-time";
 
export interface ExperienceItem {
  id: string;
  role: string;
  type: ExperienceType;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  duration: string;
  techStack: string[];
  highlights: string[];
  isCurrent?: boolean;
}
 
