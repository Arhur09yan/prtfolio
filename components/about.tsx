export function About() {
  return (
    <section id="about" className="py-10">
      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About</h2>
          <div className="w-12 h-1 bg-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate developer who specializes in creating modern, accessible web applications using React and
              Next.js. With a keen eye for detail and a love for clean code, I focus on building experiences that are
              both beautiful and functional.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently, I'm focused on frontend development while expanding my knowledge in backend technologies like
              Python and Node.js. I believe in continuous learning and staying up-to-date with the latest web
              development trends and best practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge with the developer community.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">What I Do</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Frontend Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">React & Next.js Applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Responsive Web Design</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Performance Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">API Integration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
