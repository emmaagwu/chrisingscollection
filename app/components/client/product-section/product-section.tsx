"use client"

import type React from "react"
import SectionTitle from "./section-title"
import WearGrid from "./wear-grid"
import SeeMoreButton from "./see-more-button"
import { cn } from "@/lib/utils"

interface ProductSectionProps {
  title: string
  seeMoreText: string
  seeMoreHref: string
  className?: string
  hideTitle?: boolean
  gridLayout?: "horizontal" | "grid" // New prop to control grid layout
  children: React.ReactNode
}

export default function ProductSection({
  title,
  seeMoreText,
  seeMoreHref,
  className,
  hideTitle = false,
  gridLayout = "horizontal", // Default to horizontal for home page
  children,
}: ProductSectionProps) {
  return (
    <section className={cn("min-h-[90vh] flex flex-col justify-center py-12 md:py-16", className)}>
      <div className="mx-auto px-3 sm:px-4 lg:px-5 w-full flex-1 flex flex-col justify-center">
        {!hideTitle && <SectionTitle title={title} />}
        <div className="flex-1 flex items-center">
          <WearGrid layout={gridLayout}>{children}</WearGrid>
        </div>
        {seeMoreText && seeMoreHref && <SeeMoreButton text={seeMoreText} href={seeMoreHref} />}
      </div>

      {/* Scoped styles for container */}
      <style jsx>{`
        section {
          position: relative;
        }
      `}</style>
    </section>
  )
}
