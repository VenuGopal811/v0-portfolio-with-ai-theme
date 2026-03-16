"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

const roles = [
  "AI/ML Developer",
  "Full Stack Engineer",
  "Cloud Enthusiast",
  "Problem Solver",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-sm text-primary">
          {"// Hello, World! I'm"}
        </p>
        <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Venu Gopal
        </h1>
        <div className="mb-8 h-8">
          <span className="font-mono text-xl text-muted-foreground md:text-2xl">
            {displayText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </div>
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Passionate about building intelligent systems that solve real-world
          problems. Currently pursuing B.Tech in Computer Science (AI & ML) at
          GLA University, with expertise in machine learning, full-stack
          development, and cloud computing.
        </p>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="gap-2">
            <Link href="#projects">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link
              href="https://github.com/VenuGopal811"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link
              href="https://linkedin.com/in/venu-gopal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon" className="h-10 w-10">
            <Link href="mailto:imvenugopal08@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
