import { Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      period: "Sep 2025 — Present",
      title: "Frontend Developer",
      company: "Civitta",
      description: "",
      technologies: [
        "JavaScript",
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
      period: "Ogt 2022 — Ogt 2025 · 3 yrs",
      title: "Frontend Developer",
      company: "HackTech LLC",
      description:
        "Frontend Developer with expertise in React.js, Next.js, React Query, and Redux. Experienced in developing high-performance, user-centric interfaces for diverse platforms, including news, travel, and e-commerce applications. Proficient in socket and payment integration, utilizing modern tools such as ShadCN, Tailwind CSS, and MUI to enhance UI/UX design.",
      technologies: [
        "React",
        "Next.js",
        "JavaScript",
        "CSS",
        "TypeScript",
        "Redux",
      ],
    },
    {
      period: "Aug 2022 — Sep 2022 · 2 mos",
      title: "React Developer Intership",
      company: "HackTech LLC",
      description:
        "Started my professional journey building user interfaces and learning best practices in web development. Contributed to multiple client projects.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Step indicator */}
                <div className="absolute left-0 lg:left-4 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden lg:block group-hover:scale-110 transition-transform"></div>

                <div className="lg:ml-16 space-y-4">
                  {/* Date with calendar icon */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
