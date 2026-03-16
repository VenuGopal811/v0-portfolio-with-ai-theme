import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react"
import Link from "next/link"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "imvenugopal08@gmail.com",
    href: "mailto:imvenugopal08@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9359443888",
    href: "tel:+919359443888",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/venu-gopal",
    href: "https://linkedin.com/in/venu-gopal",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/VenuGopal811",
    href: "https://github.com/VenuGopal811",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-mono text-sm text-primary">
            {"// Get in Touch"}
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {"Let's Connect"}
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted-foreground">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"}
          </p>
        </div>

        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="mb-8 flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Mathura, Uttar Pradesh, India</span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactLinks.map((contact) => (
                <Button
                  key={contact.label}
                  asChild
                  variant="outline"
                  className="h-auto justify-start gap-4 p-4"
                >
                  <Link
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="rounded-lg bg-primary/10 p-2">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="text-sm font-medium text-foreground">
                        {contact.value}
                      </p>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="gap-2">
                <Link href="mailto:imvenugopal08@gmail.com">
                  <Mail className="h-4 w-4" />
                  Send Me a Message
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
