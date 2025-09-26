import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiPostgresql,
} from "react-icons/si"
import { FaServer, FaRocket } from "react-icons/fa"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 95, icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", level: 90, icon: SiNextdotjs, color: "#FFFFFF" },
        { name: "TypeScript", level: 90, icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", level: 95, icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML/CSS", level: 90, icon: SiHtml5, color: "#E34F26" },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend & Tools",
      skills: [
        { name: "Node.js", level: 50, icon: SiNodedotjs, color: "#339933" },
        { name: "Python", level: 40, icon: SiPython, color: "#3776AB" },
        { name: "Git", level: 85, icon: SiGit, color: "#F05032" },
        { name: "REST APIs", level: 70, icon: FaServer, color: "#0EA5E9" },
        { name: "Database", level: 65, icon: SiPostgresql, color: "#336791" },
        { name: "Deployment", level: 85, icon: FaRocket, color: "#10B981" },
      ],
    },
  ]

  return (
    <section className="py-10">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Skills</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>

              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5" style={{ color: skill.color }} />
                          <span className="text-muted-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
