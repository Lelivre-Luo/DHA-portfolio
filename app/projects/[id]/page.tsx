"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useAtom } from "jotai"
import { languageAtom } from "@/state/atoms"
import { getProjectsData } from "@/data/projects-i18n"

interface ProjectDetailPageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [lang] = useAtom(languageAtom)
  const { projects } = getProjectsData(lang)
  
  const projectId = parseInt(params.id)
  const project = projects.find(p => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <div className="container pt-36 pb-12">
      {/* Back button */}
      <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ArrowLeft className="h-4 w-4" />
        {lang === 'zh' ? '返回项目列表' : 'Back to Projects'}
      </Link>

      {/* Project header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              <Button className="group">
                <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Demo
              </Button>
            </Link>
          )}
          <Link href={`${project.github}?source=mgiovani.com`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="group">
              <Github className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Source Code
            </Button>
          </Link>
        </div>
      </div>

      {/* Project image */}
      {project.image && (
        <div className="mb-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg border bg-muted/50">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Project content */}
      <div className="prose prose-slate dark:prose-invert max-w-none">
        {project.content && (
          <div 
            dangerouslySetInnerHTML={{ __html: project.content }}
            className="text-muted-foreground"
          />
        )}
      </div>
    </div>
  )
}
