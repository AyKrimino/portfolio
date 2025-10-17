import type { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "SysAct – Linux System Utility",
    slug: "sysact",
    shortTitle: "SysAct",
    description:
      "A terminal user interface (TUI) tool built in Go with Bubble Tea that lets you quickly perform system actions like logout, suspend, reboot, or power off—ideal for tiling window manager users.",
    techStack: ["Go", "Bubble Tea", "Lip Gloss"],
    date: "May 2025",
    category: "cli",
    isFeatured: true,
    links: {
      github: "https://github.com/AyKrimino/SysAct",
    },
  },
  {
    title: "AyatAlHaqq – Quran Reader & Listener",
    slug: "ayat-al-haqq",
    shortTitle: "AyatAlHaqq",
    description:
      "A responsive web app to read and listen to Quranic verses, built with React and Tailwind CSS, powered by the Quran.com API. Features dark/light mode, Surah navigation, and daily Surah highlights.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Quran.com API"],
    date: "2024",
    category: "web",
    isFeatured: true,
    links: {
      github: "https://github.com/AyKrimino/AyatAlHaqq-Verses-of-Truth",
      liveDemo: "https://ayat-al-haqq.vercel.app",
    },
  },
  {
    title: "Classroom LMS – Educational Platform",
    slug: "classroom-lms",
    shortTitle: "Classroom LMS",
    description:
      "A full-stack learning management system inspired by Google Classroom. Teachers create quizzes and manage classrooms; students join, submit work, and get instant feedback. Includes JWT auth, role-based access, and responsive UI.",
    techStack: ["React", "Tailwind CSS", "Django", "DRF", "MySQL", "Python"],
    date: "Dec 2024",
    category: "fullstack",
    isFeatured: true,
    links: {
      github: "https://github.com/AyKrimino/educational-platform-managment",
    },
  },
  {
    title: "Resume Generator",
    slug: "resume-generator",
    shortTitle: "ResumeGen",
    description:
      "A resume builder that lets users create, preview, and export professional resumes in HTML, Markdown, or PDF. Built with a focus on clean typography and developer-friendly formats.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "NestJS"],
    date: "2024",
    category: "web",
    links: {
      github: "https://github.com/AyKrimino/resume-generator",
      liveDemo: "https://aykrimino.github.io/resume-generator",
    },
  },
  {
    title: "Classic Php Store",
    slug: "classic-php-store",
    shortTitle: "ClassicPhp Store",
    description:
      "🛒 A simple and classic e-commerce website built with procedural PHP and MySQL. Features include user authentication, product management, shopping cart, orders, payments, and shipping — all without modern frameworks.",
    techStack: ["Php", "JavaScript", "HTML5", "CSS3", "MySQL"],
    date: "2024",
    category: "fullstack",
    links: {
      github: "https://github.com/AyKrimino/classic-php-store",
    },
  },
  {
    title: "donation-system-java-swing",
    slug: "donation-system",
    shortTitle: "Donation System",
    description:
      "A donation management system built with Java Swing and AWT for the UI, MySQL for the database, and a well-structured architecture (Models, DAO, Services, GUI).",
    techStack: ["Java", "Swing", "AWT", "MySQL"],
    date: "2024",
    category: "gui",
    links: {
      github: "https://github.com/AyKrimino/donation-system-java-swing",
    },
  },
];
