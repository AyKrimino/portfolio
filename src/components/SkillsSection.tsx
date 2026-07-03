import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { SKILLS } from "@/data/skills";

const LEVEL_STYLES: Record<string, { label: string; dot: string; bg: string }> = {
  advanced: {
    label: "Advanced",
    dot: "bg-green-500",
    bg: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  intermediate: {
    label: "Intermediate",
    dot: "bg-yellow-400",
    bg: "bg-yellow-400/10 text-yellow-600 dark:text-yellow-400",
  },
  beginner: {
    label: "Beginner",
    dot: "bg-gray-400",
    bg: "bg-gray-400/10 text-gray-500 dark:text-gray-400",
  },
};

const SkillsSection = () => {
  return (
    <section
      id="skills-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SKILLS.map((skill) => (
          <Card
            key={skill.id}
            className="group relative overflow-hidden border-border/60 hover:border-border transition-colors duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                {skill.label}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-col gap-2">
                {skill.items.map((item) => {
                  const level = LEVEL_STYLES[item.level] ?? LEVEL_STYLES.beginner;

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-muted/30 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="flex items-center gap-0.5 shrink-0">
                          {item.logos.map((logo, i) => (
                            <img
                              key={i}
                              src={logo}
                              alt=""
                              className="w-5 h-5"
                            />
                          ))}
                        </span>
                        <span className="text-sm font-medium truncate">
                          {item.name}
                        </span>
                      </div>
                      <span
                        className={`shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${level.bg}`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${level.dot}`} />
                        {level.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
