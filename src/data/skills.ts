import type { SkillCategory } from "@/types/skills";

export const SKILLS: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { id: "go", name: "Go", level: "advanced" },
      { id: "python", name: "Python", level: "advanced" },
      { id: "ts", name: "JavaScript/TypeScript", level: "intermediate" },
      { id: "html", name: "HTML", level: "advanced" },
      { id: "css", name: "CSS", level: "intermediate" },
      { id: "php", name: "Php", level: "beginner" },
      { id: "java", name: "Java", level: "beginner" },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      { id: "react", name: "React", level: "advanced" },
      { id: "next", name: "Next.js", level: "intermediate" },
      { id: "django", name: "Django", level: "advanced" },
      { id: "drf", name: "Django REST Framework", level: "advanced" },
      { id: "gin", name: "Gin", level: "intermediate" },
      { id: "nest", name: "NestJS", level: "beginner" },
      { id: "tailwindcss", name: "TailwindCSS", level: "advanced" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      { id: "mysql", name: "MySQL", level: "advanced" },
      { id: "postgres", name: "PostgreSQL", level: "beginner" },
      { id: "redis", name: "Redis", level: "beginner" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { id: "git", name: "Git", level: "advanced" },
      { id: "github", name: "Github", level: "advanced" },
      { id: "docker", name: "Docker", level: "beginner" },
      { id: "dockercompose", name: "Docker Compose", level: "beginner" },
      { id: "githubactions", name: "Github Actions", level: "beginner" },
      { id: "linux", name: "Linux", level: "advanced" },
      { id: "neovim", name: "Neovim", level: "advanced" },
      { id: "vscode", name: "Visual Studio Code", level: "intermediate" },
    ],
  },
]
