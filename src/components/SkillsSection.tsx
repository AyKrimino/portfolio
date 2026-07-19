import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { SKILLS } from "@/data/skills";
import type { SkillItem } from "@/types/skills";

const LEVEL_DOTS: Record<SkillItem["level"], number> = {
  advanced: 3,
  intermediate: 2,
  beginner: 1,
};

const DOT_COLORS: Record<SkillItem["level"], string> = {
  advanced: "bg-green-500",
  intermediate: "bg-yellow-400",
  beginner: "bg-gray-400",
};

const LevelDots = ({ level }: { level: SkillItem["level"] }) => {
  const filled = LEVEL_DOTS[level];

  return (
    <span className="flex items-center gap-0.5 shrink-0" aria-label={`${level}`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${
            i < filled ? DOT_COLORS[level] : "bg-muted-foreground/20"
          }`}
        />
      ))}
    </span>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills-section"
      className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {SKILLS.map((skill) => (
          <Card
            key={skill.id}
            className="group relative overflow-hidden border-border/60 hover:border-border hover:shadow-lg transition-all duration-300"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/60 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader>
              <CardTitle className="text-base sm:text-lg">
                {skill.label}
              </CardTitle>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-col gap-1.5">
                {skill.items.map((item) => (
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
                    <LevelDots level={item.level} />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
