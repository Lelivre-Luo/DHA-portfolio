"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { PlaceholderImage } from "@/components/ui/placeholder-image"
import { getProjectsData } from "@/data/projects-i18n"
import { useAtom } from "jotai"
import { languageAtom } from "@/state/atoms"
import LanguageText from "@/components/language-text"

// Metadata export is not allowed in client components; remove or move to a server file

export default function ProjectsPage() {
  const [lang] = useAtom(languageAtom)
  const { projects } = getProjectsData(lang)

  return (
    <div className="container py-12">
      <div>
        <h1 className="text-4xl font-bold mb-4">{lang === 'zh' ? '项目' : 'Projects'}</h1>
        <p className="text-xl text-muted-foreground mb-8">
          {lang === 'zh' ? '我的近期作品与技术项目合集' : 'A collection of my recent work and technical projects'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col bg-card/50 border-border/50">
            <div className="aspect-video w-full overflow-hidden bg-muted">
              {project.image ? (
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <PlaceholderImage type="project" title={project.title} className="w-full h-full" />
              )}
            </div>
            <CardContent className="flex flex-col flex-grow p-6">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 mt-auto">
                {project.demo && (
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </Link>
                )}
                <Link href={`${project.github}?source=mgiovani.com`} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
