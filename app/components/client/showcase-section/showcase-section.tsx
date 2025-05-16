import type React from "react"
import { cn } from "@/lib/utils"
import SectionHeader from "./section-header"
import ShowcaseScroll from "./showcase-scroll"

interface ShowcaseSectionProps {
  title: string
  subtitle: string
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  reverse?: boolean
}

export default function ShowcaseSection({
  title,
  subtitle,
  children,
  className,
  speed = "normal",
  reverse = false,
}: ShowcaseSectionProps) {
  return (
    <section className={cn("min-h-[90vh] flex flex-col justify-center py-12 md:py-16", className)}>
      <div className="mx-auto px-3 sm:px-4 lg:px-5 w-full flex-1 flex flex-col justify-center">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="flex-1 flex items-center py-8 overflow-hidden">
          <ShowcaseScroll speed={speed} reverse={reverse}>
            {children}
          </ShowcaseScroll>
        </div>
      </div>
    </section>
  )
}
