"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
              Arthur Kurghinyan
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary font-medium">
              React & Next.js Developer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I build accessible, pixel-perfect digital experiences for the web.
              Passionate about crafting thoughtful user interfaces that blend
              beautiful design with robust engineering.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:akurghinyan09@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <span className="text-4xl font-bold text-primary">YN</span>
              </div>
              <p className="text-muted-foreground">
                Your professional photo here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}
