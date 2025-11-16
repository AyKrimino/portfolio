import { Card, CardTitle } from "./ui/card";
import { SKILLS } from "@/data/skills";

const SkillsSection = () => {
  const categories: string[] = SKILLS.map(skill => skill.label);

  const getProficiencyIndicatorColor = (level: string): string => {
    switch (level) {
      case "advanced":
        return "bg-green-500";
      case "intermediate":
        return "bg-yellow-400";
      case "beginner":
        return "bg-gray-400";
      default:
        return "bg-gray-400";
    }
  };

  return <div id="skills-section" className="min-h-screen px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

    <p className="text-center text-muted-foreground max-w-xl mx-auto mb-6">
      Core competencies grouped by category — {
        categories.length > 1
          ? categories.slice(0, -1).join(", ") + " and " + categories[categories.length - 1]
          : categories[0]
      }.
    </p>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {
        SKILLS.map((skill) => (<Card
          key={skill.id}
          className="p-4 lg:p-6 transition-transform duration-200 ease-in-out hover:scale-105 shadow-md hover:shadow-xl rounded-xl hover:bg-white/50"
        >
          <CardTitle>{skill.label}</CardTitle>
          {
            skill.items.map(skillItem => {
              const color = getProficiencyIndicatorColor(skillItem.level);

              return (<div
                key={skillItem.id}
                className="inline-flex justify-between items-center gap-2 text-sm font-medium px-2.5 py-1 rounded-full bg-muted/40 text-muted-foreground transition-transform duration-150 hover:scale-105"
              >
                <span className="">{skillItem.name}</span>
                <span className={`w-2.5 h-2.5 rounded-full ${color}`}></span>
              </div>)
            })
          }
        </Card>)
        )
      }
    </div>

  </div>
}

export default SkillsSection;
