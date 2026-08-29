import type { ProjectCaseStudy } from "@/types/case-study";

export const CASE_STUDIES: Record<string, ProjectCaseStudy> = {
  posify: {
    slug: "posify",
    company: "Asteroidea",
    confidentialNote:
      "POSIFY is a closed-source, production system built for Asteroidea under an active NDA. The source code isn't public, but this case study covers the architecture, my contributions, and UI screenshots.",
    tagline:
      "An integrated parking management platform — Point of Sale, Backoffice, and real hardware, wired together with event-driven microservices.",
    role: "Full-Stack Developer Intern → Freelance Software Developer",
    period: "Jan 2026 – Present",
    overview: [
      "POSIFY is Asteroidea's parking management solution: a Point of Sale (POS) application running at parking terminals, paired with a Backoffice platform for administration, monitoring, and configuration.",
      "I joined as a final-year (PFE) intern to build core backend services and frontend workflows, then continued on a freelance basis after graduating, helping move the platform from internal testing toward real customer demos and deployment.",
    ],
    highlights: [
      "Designed and implemented REST APIs and backend services in Go (Gin), covering business logic and PostgreSQL data modeling for both POS and Backoffice.",
      "Built React/TypeScript interfaces delivering day-to-day operational workflows and admin/configuration screens.",
      "Built event-driven microservices with NATS to keep POS, Backoffice, and external systems in sync in real time.",
      "Developed a dedicated microservice to integrate EPSON receipt printers, plus hardware integrations for the PMS, tariff engine, barrier, and camera systems via HTTP, Server-Sent Events, and NATS.",
      "Implemented authentication, role-based access control (RBAC), and admin dashboards.",
      "Containerized every service with Docker/Docker Compose and shipped images to a private Nexus registry as part of the deployment pipeline.",
      "As a freelancer, kept shipping features, refactors, and performance improvements, and helped prepare the platform for real customer demos and deployment.",
    ],
    architecture: [
      "The backend is split into Go (Gin) microservices, each owning a slice of the domain — printing, tariffing, access control — communicating asynchronously over NATS instead of tight point-to-point calls, so new hardware or services can be added without reworking what already exists.",
      "PostgreSQL is the system of record for POS/Backoffice data, while real-time events (a barrier opening, a ticket printing) flow over NATS and Server-Sent Events to keep the POS UI and Backoffice dashboards live-updating.",
      "Everything runs containerized with Docker Compose locally and in staging, with images published to a private Nexus registry before being validated in a company testing environment ahead of deployment.",
    ],
    challenges: [
      {
        title: "Talking to real hardware",
        description:
          "Parking terminals aren't just software — the POS had to reliably drive an EPSON receipt printer plus a PMS, tariff engine, physical barrier, and camera system, each with its own protocol quirks. I built a dedicated printer microservice and integrated the rest through a mix of HTTP, SSE, and NATS depending on what each device needed.",
      },
      {
        title: "Keeping two apps and hardware in sync",
        description:
          "POS terminals, the Backoffice, and physical hardware all need a consistent view of state in real time. The event-driven NATS architecture meant designing clear event contracts up front so services could evolve independently without silently drifting out of sync.",
      },
      {
        title: "From intern project to production",
        description:
          "The hardest part of the freelance phase hasn't been writing new features — it's been the less visible work: refactoring, performance tuning, and extensive validation in production-like environments so the platform holds up for real customer demos and deployments.",
      },
    ],
    techStack: [
      "Go",
      "Gin",
      "PostgreSQL",
      "React",
      "TypeScript",
      "NATS",
      "Docker",
      "Docker Compose",
    ],
    media: {
      screenshots: [
        {
          src: "case-studies/posify/screenshot-1.png",
          alt: "POSIFY Backoffice dashboard",
        },
        {
          src: "case-studies/posify/screenshot-2.png",
          alt: "POSIFY POS terminal interface",
        },
        {
          src: "case-studies/posify/screenshot-3.png",
          alt: "POSIFY configuration screen",
        },
      ],
      videoSrc: "case-studies/posify/demo.mp4",
      reportDocument: {
        label: "PFE Report",
        src: "case-studies/posify/report.pdf",
        downloadName: "Ayoub_Krimi_PFE_Report_POSIFY.pdf",
      },
      presentations: [
        {
          label: "ISI Ariana — Defense Presentation",
          src: "case-studies/posify/defense-presentation.pdf",
          downloadName: "POSIFY_ISI_Defense_Presentation.pdf",
        },
        {
          label: "Asteroidea — Internal Presentation",
          src: "case-studies/posify/asteroidea-presentation.pdf",
          downloadName: "POSIFY_Asteroidea_Presentation.pdf",
        },
      ],
    },
  },
};
