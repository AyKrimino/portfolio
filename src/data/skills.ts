import type { SkillCategory } from "@/types/skills";

export const SKILLS: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    items: [
      { id: "go", name: "Go", level: "advanced", logos: ["golang-logo.svg"] },
      { id: "python", name: "Python", level: "advanced", logos: ["python-logo.svg"] },
      { id: "ts", name: "JavaScript/TypeScript", level: "intermediate", logos: ["javascript-logo.svg", "typescript-logo.svg"] },
      { id: "html", name: "HTML", level: "advanced", logos: ["html-logo.svg"] },
      { id: "css", name: "CSS", level: "intermediate", logos: ["css-logo.svg"] },
      { id: "php", name: "Php", level: "beginner", logos: ["php-logo.svg"] },
      { id: "java", name: "Java", level: "beginner", logos: ["java-logo.svg"] },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      { id: "react", name: "React", level: "advanced", logos: ["reactjs-logo.svg"] },
      { id: "next", name: "Next.js", level: "intermediate", logos: ["nextjs-logo.svg"] },
      { id: "django", name: "Django", level: "advanced", logos: ["django-logo.svg"] },
      { id: "drf", name: "Django REST Framework", level: "advanced", logos: ["drf-logo.svg"] },
      { id: "gin", name: "Gin", level: "intermediate", logos: ["gin-logo.svg"] },
      { id: "nest", name: "NestJS", level: "beginner", logos: ["nestjs-logo.svg"] },
      { id: "tailwindcss", name: "TailwindCSS", level: "advanced", logos: ["tailwindcss-logo.svg"] },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: [
      { id: "mysql", name: "MySQL", level: "advanced", logos: ["mysql-logo.svg"] },
      { id: "postgres", name: "PostgreSQL", level: "beginner", logos: ["postgres-logo.svg"] },
      { id: "redis", name: "Redis", level: "beginner", logos: ["redis-logo.svg"] },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { id: "git", name: "Git", level: "advanced", logos: ["git-logo.svg"] },
      { id: "github", name: "Github", level: "advanced", logos: ["github-logo.svg"] },
      { id: "docker", name: "Docker", level: "beginner", logos: ["docker-logo.svg"] },
      { id: "dockercompose", name: "Docker Compose", level: "beginner", logos: ["docker-logo.svg"] },
      { id: "githubactions", name: "Github Actions", level: "beginner", logos: ["github-actions-logo.svg"] },
      { id: "linux", name: "Linux", level: "advanced", logos: ["linux-logo.svg"] },
      { id: "vimneovim", name: "Vim/Neovim", level: "advanced", logos: ["vim-logo.svg", "neovim-logo.svg"] },
      { id: "vscode", name: "Visual Studio Code", level: "intermediate", logos: ["vscode-logo.svg"] },
    ],
  },
];
