"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import { PortfolioDownloadButton } from "@/components/portfolio-download-button"
import { getHomeData } from "@/data/home-i18n"
import { useAtom } from "jotai"
import { languageAtom } from "@/state/atoms"

export function HeroSection() {
  const [language] = useAtom(languageAtom)
  const homeData = getHomeData(language)
  const { name, title, location } = homeData
  return (
    <div className="flex flex-col items-center lg:grid lg:grid-cols-[1fr_auto] gap-2 lg:gap-16 lg:items-start">
      {/* 移动端头像 */}
      <div className="flex items-center justify-center lg:hidden mb-6 -mt-16">
        <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-border/20">
          <Image
            src="https://assets.latentcat.com/fc51fa63-a204-42fc-b57d-81389c205dc0_w517_h517.png"
            alt={name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col space-y-6 text-center lg:text-left">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{name}</h1>
          <div className="mt-6"></div>
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <span className="text-xl">{title}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
          <ResumeDownloadButton />
          <PortfolioDownloadButton />
        </div>
      </div>

      {/* PC端头像 */}
      <div className="hidden lg:flex items-start justify-end pt-1">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-border/20">
          <Image
            src="https://assets.latentcat.com/fc51fa63-a204-42fc-b57d-81389c205dc0_w517_h517.png"
            alt={name}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  )
}
