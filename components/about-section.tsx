import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-primary">{"// About Me"}</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Who I Am
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a developer passionate about crafting intelligent,
              user-centric applications that blend thoughtful design with robust
              engineering. My favorite work lies at the intersection of AI and
              software development, creating experiences that are not only
              functional but built for performance and scalability.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently pursuing my B.Tech in Computer Science with
              specialization in AI & ML, I've developed expertise across the
              full technology stack—from building local AI voice assistants to
              architecting full-stack content platforms.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me leading technical events,
              managing club activities, or exploring the latest in AI research.
              I believe in continuous learning and contributing to the developer
              community.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">
                    B.Tech in Computer Science (AI & ML)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    GLA University • Expected 2028
                  </p>
                  <p className="mt-1 text-sm text-primary">CPI: 7.32/10.0</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Mathura, Uttar Pradesh, India
                  </p>
                  <p className="mt-1 text-sm text-primary">
                    Open to remote opportunities
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="rounded-lg bg-primary/10 p-3">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Microsoft Azure Fundamentals (AZ-900)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Microsoft Azure AI Fundamentals (AI-900)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
