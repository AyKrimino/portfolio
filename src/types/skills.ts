export interface SkillItem {
  id: string;
  name: string;
  level: "beginner" | "intermediate" | "advanced";
}

export interface SkillCategory {
  id: string;
  label: string;
  items: SkillItem[];
}
