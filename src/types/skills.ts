export interface SkillItem {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  logos: string[];
}

export interface SkillCategory {
  id: string;
  label: string;
  items: SkillItem[];
}
