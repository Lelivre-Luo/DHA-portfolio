import Image from "next/image"
import { MapPin } from "lucide-react"
import { ResumeDownloadButton } from "@/components/resume-download-button"
import { homeData } from "@/data/home-data"

export function ServerHeroSection() {
  const { name, title, location } = homeData
  return (
    <div className="grid lg:grid-cols-[1fr_auto] items-start gap-12 lg:gap-16">
      <div className="flex flex-col space-y-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">{name}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-xl">{title}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <ResumeDownloadButton />
        </div>
      </div>

      <div className="flex items-start justify-center lg:justify-end pt-1">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-border/20">
          <Image
            src="/images/profile.png"
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
