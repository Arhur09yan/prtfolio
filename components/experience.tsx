export function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      title: "Senior Frontend Developer",
      company: "Your Current Company",
      description:
        "Lead frontend development for multiple React and Next.js applications. Collaborate with design and backend teams to deliver high-quality user experiences.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      period: "2022 — 2024",
      title: "Frontend Developer",
      company: "Previous Company",
      description:
        "Developed and maintained responsive web applications using modern JavaScript frameworks. Improved application performance by 40% through optimization techniques.",
      technologies: ["React", "JavaScript", "CSS", "Node.js"],
    },
    {
      period: "2021 — 2022",
      title: "Junior Developer",
      company: "First Company",
      description:
        "Started my professional journey building user interfaces and learning best practices in web development. Contributed to multiple client projects.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ]

  return (
    <section id="experience" className="py-10">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Experience</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-4 gap-8 group">
              <div className="lg:col-span-1">
                <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
