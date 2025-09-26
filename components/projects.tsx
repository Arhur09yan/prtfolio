"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { ImageSlider } from "./image-slider";
import { ImageModal } from "./image-modal";

export function Projects() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    initialIndex: number;
    projectTitle: string;
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0,
    projectTitle: "",
  });

  const projects = [
    {
      title: "CyberNet – Class Action Automation Platform",
      description:
        "A unified platform for class action lawyers to track data breaches, automate campaign creation, manage leads, and query legal documents via an AI assistant.",
      images: ["/cybernet_1.png", "/cybernet_2.png", "/cybernet_3.png"],
      technologies: ["React.js", "Redux", "Socket.io", "Material UI"],
      github: "https://github.com/yourusername/cybernet",
      live: "https://your-cybernet-demo.vercel.app",
    },
    {
      title: "HottakeAI – Personalized News Assistant",
      description:
        "A frontend-focused app that delivers AI-curated news reports tailored to user-selected topics and sources, with concise summaries, audio reports, and trend tracking.",
      images: [
        "/hottake_1.png",
        "/hottake_2.png",
        "/hottake_3.png",
        "/hottake_4.png",
      ],
      technologies: ["React.js", "TypeScript", "React Query", "jss"],
      github: "https://github.com/yourusername/hottakeai",
      live: "https://your-hottakeai-demo.vercel.app",
    },
    {
      title: "Global Airlines – Best Way to Fly",
      description:
        "A modern airline web experience showcasing routes, cabins, and services. Focused on performance, accessibility, and an elegant UI that scales across devices.",
      images: ["/global_1.png", "/global_2.png", "/global_3.png"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
      github: "https://github.com/yourusername/global-airlines",
      live: "https://your-global-airlines-demo.vercel.app",
    },
    {
      title: "AI Front Desk – Custom AI Agents for Operations",
      description:
        "Custom AI agents that execute complex business processes end-to-end, integrating with existing workflows to handle customer engagement, task completion, and ongoing operations with high accuracy.",
      images: [
        "/aifrontdesk_1.png",
        "/aifrontdesk_2.png",
        "/aifrontdesk_3.png",
        "/aifrontdesk_4.png",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Material UI",
        "Redux",
        "Socket",
        "React Query",
      ],
      github: "https://github.com/yourusername/ai-front-desk",
      live: "https://your-ai-front-desk-demo.vercel.app",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      images: ["/image.png"],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Stripe",
        "Tailwind CSS",
      ],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://your-ecommerce-demo.vercel.app",
    },
  ];

  const openModal = (
    images: string[],
    initialIndex: number,
    projectTitle: string
  ) => {
    setModalState({
      isOpen: true,
      images,
      initialIndex,
      projectTitle,
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      images: [],
      initialIndex: 0,
      projectTitle: "",
    });
  };

  return (
    <section id="projects" className="py-20">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 bg-card border-border"
            >
              <CardContent className="p-0">
                <ImageSlider
                  images={project.images}
                  alt={project.title}
                  onImageClick={(imageIndex) =>
                    openModal(project.images, imageIndex, project.title)
                  }
                />

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* <div className="flex items-center gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {modalState.isOpen && (
        <ImageModal
          images={modalState.images}
          initialIndex={modalState.initialIndex}
          isOpen={modalState.isOpen}
          onClose={closeModal}
          projectTitle={modalState.projectTitle}
        />
      )}
    </section>
  );
}
