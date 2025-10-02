"use client"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Github, Linkedin, Mail, MapPin, GraduationCap } from "lucide-react"
import Link from "next/link"
import { getHomeData } from "@/data/home-i18n"
import { useAtom } from "jotai"
import { languageAtom } from "@/state/atoms"
import LanguageText from "@/components/language-text"

export default function Home() {
  const [lang] = useAtom(languageAtom)
  const { name, title, location, email, github, linkedin, about, contact, education } = getHomeData(lang)
  const educationItems = education

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-7xl mx-auto px-8 lg:px-16 h-full flex flex-col pt-72 pb-16">
        {/* Server-rendered Hero Section */}
        <HeroSection />

        {/* Education Section */}
        <div className="mt-16 pt-16 border-t border-border/50 w-full">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-8 w-8 text-[#6125d6]" />
            <h2 className="text-3xl font-bold"><LanguageText k="education" /></h2>
          </div>
          <div className="space-y-6">
            {educationItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-semibold">{item.degree}</h3>
                <p className="text-muted-foreground">{item.school}</p>
                <p className="text-sm text-muted-foreground">{item.period} • {item.gpa}</p>
                {item.description && (
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                )}
                <div className="mt-3">
                  <p className="text-sm font-bold text-muted-foreground mb-2"><LanguageText k="keyCourses" /></p>
                  <div className="flex flex-wrap gap-2">
                    {item.courses?.map((course: string, courseIndex: number) => (
                      <span key={courseIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Summary Section - Simplified */}
        <div className="mt-16 pt-16 border-t border-border/50 w-full">
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="h-8 w-8 text-[#6125d6]" />
            <h2 className="text-3xl font-bold"><LanguageText k="aboutMe" /></h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg max-w-none">
              {about}
            </p>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="mt-24 w-full">
          <FeaturedProjects />
        </div>

        {/* Contact Section */}
        <div id="contact" className="mt-24 pt-16 border-t border-border/50 w-full">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="h-8 w-8 text-[#6125d6]" />
            <h2 className="text-3xl font-bold"><LanguageText k="contact" /></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-border/50 h-[250px]">
              <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
                <h3 className="text-xl font-bold mb-6"><LanguageText k="contactInfo" /></h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-foreground" />
                    <a href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-foreground">
                      <LanguageText k="email" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-6 w-6 text-foreground" />
                    <p className="text-muted-foreground">{contact.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 h-[250px]">
              <CardContent className="p-6 flex flex-col justify-center items-center text-center h-full">
                <h3 className="text-xl font-bold mb-6"><LanguageText k="socialConnect" /></h3>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link
                    href={`https://${contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md px-4 py-2 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <LanguageText k="github" />
                  </Link>
                  <Link
                    href={`https://${contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md px-4 py-2 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <LanguageText k="linkedin" />
                  </Link>
                  <Link
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md px-4 py-2 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <LanguageText k="email" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}