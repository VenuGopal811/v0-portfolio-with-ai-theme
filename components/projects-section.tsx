import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Mic, FileText } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "SentientDesk",
    description:
      "A local AI-powered voice assistant achieving 92% speech recognition accuracy and 3.8-second average response time with offline language model integration.",
    icon: Mic,
    highlights: [
      "50+ queries/minute processing",
      "87% intent classification accuracy",
      "45 tokens/second generation",
      "35% memory optimization",
      "98% uptime over 200+ hours",
    ],
    technologies: ["Python", "Ollama", "Phi-3", "Speech Recognition", "NLP"],
    github: "https://github.com/VenuGopal811",
  },
  {
    title: "ContentOS",
    description:
      "Full-stack AI-powered content lifecycle platform using monorepo structure with TypeScript, React 18, and Express backend serving RESTful APIs.",
    icon: FileText,
    highlights: [
      "10+ React components with Redux",
      "Redis caching layer",
      "Docker containerization",
      "JWT authentication",
      "CI/CD pipeline integration",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    github: "https://github.com/VenuGopal811",
    live: "https://vercel.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Featured Work"}
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <Button asChild variant="ghost" size="icon" className="h-9 w-9">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    {project.live && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
