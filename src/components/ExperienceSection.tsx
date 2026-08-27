import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { EXPERIENCE } from "@/data/experience";
import { MapPin, Briefcase } from "lucide-react";

const TECH_LOGOS: Record<string, string> = {
  Go: "golang-logo.svg",
  Gin: "gin-logo.svg",
  PostgreSQL: "postgres-logo.svg",
  React: "reactjs-logo.svg",
  TypeScript: "typescript-logo.svg",
  Docker: "docker-logo.svg",
  "Docker Compose": "docker-logo.svg",
  NATS: "nats-logo.png",
};

const ExperienceSection = () => {
  return (
    <section
      id="experience-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="relative">
        <div
          className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]"
          aria-hidden="true"
        />

        <div className="space-y-10">
          {EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-10 sm:pl-14">
              <span
                className={`absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 bg-background ${exp.isCurrent
                  ? "border-green-500"
                  : "border-border"
                  }`}
              >
                {exp.isCurrent ? (
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                ) : (
                  <Briefcase className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </span>

              <Card className="group relative overflow-hidden border-border/60 hover:border-border transition-colors duration-300">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3 flex-wrap">
                      <CardTitle className="text-lg sm:text-xl">
                        {exp.role}
                      </CardTitle>
                      {exp.isCurrent && (
                        <span className="flex items-center gap-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground mt-1">
                      {exp.period} · {exp.duration}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-foreground hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-foreground">
                        {exp.company}
                      </span>
                    )}
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {exp.highlights.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-foreground/40 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground/80"
                      >
                        {TECH_LOGOS[tech] && (
                          <img
                            src={TECH_LOGOS[tech]}
                            alt=""
                            className="w-3.5 h-3.5"
                          />
                        )}
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
