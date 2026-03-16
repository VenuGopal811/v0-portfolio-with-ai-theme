"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Code2,
  Cloud,
  Database,
  Wrench,
  Users,
} from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "AI/ML Technologies",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Ollama",
      "Phi-3",
    ],
  },
  {
    title: "Web Technologies",
    icon: Code2,
    skills: ["HTML", "CSS", "React", "Node.js", "Express", "Full Stack"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Microsoft Azure", "Cloud Computing", "IoT", "Docker"],
  },
  {
    title: "Tools & Databases",
    icon: Database,
    skills: [
      "Git",
      "GitHub",
      "TensorFlow",
      "PyTorch",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: [
      "Problem Solving",
      "Leadership",
      "Communication",
      "Team Collaboration",
      "Critical Thinking",
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Technical Skills"}
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            My Toolbox
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group border-border/50 bg-card/50 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                    <category.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {skill}
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
