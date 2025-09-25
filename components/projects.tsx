import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "React", "TypeScript", "Stripe", "Tailwind CSS"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.vercel.app",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "CSS Modules"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-manager.vercel.app",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard that displays current conditions and forecasts with beautiful data visualizations and location search.",
      image: "/preview/project4.png",
      technologies: ["React", "Chart.js", "Weather API", "CSS Grid", "JavaScript"],
      github: "https://github.com/yourusername/weather-dashboard",
      live: "https://your-weather-app.vercel.app",
    },
  ]

  return (
    <section id="projects" className="py-10">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-card border-border">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
