import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Treasurer",
    organization: "Droid Club, GLA University",
    period: "Nov 2025 - Present",
    highlights: [
      "Managed event budget of ₹1.8L+ and raised prize pool worth ₹18L+ for CodePunk v2.0",
      "Led financial operations and coordinated 40+ club members as lead organizer for CodePunk v2.0",
      "Served as coordinator for Mechathon 24-hour event with 40+ participants during Technavya'26",
    ],
    tags: ["Leadership", "Event Management", "Finance"],
  },
  {
    title: "Event Coordinator",
    organization: "Mechathon, Technavya '26",
    period: "2026",
    highlights: [
      "Coordinated 24-hour technical robotics competition as part of university's annual tech fest",
      "Managed cross-functional teams and ensured smooth execution of event operations",
      "Facilitated collaboration between participants and sponsors",
    ],
    tags: ["Event Coordination", "Team Management", "Technical Events"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Leadership & Activities"}
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.title + experience.organization}
                className={`relative md:w-1/2 ${
                  index % 2 === 0
                    ? "md:pr-12"
                    : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-6 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:block ${
                    index % 2 === 0
                      ? "md:-right-2"
                      : "md:-left-2"
                  }`}
                />

                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <p className="mb-1 font-mono text-sm text-primary">
                        {experience.period}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {experience.organization}
                      </p>
                    </div>

                    <ul className="mb-4 space-y-2">
                      {experience.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-secondary/50"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
