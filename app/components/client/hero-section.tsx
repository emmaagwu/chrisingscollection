"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  imageUrl: string
  altText?: string
  className?: string
}

export default function HeroSection({ imageUrl, altText = "Hero image", className }: HeroSectionProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  // Get window height for responsive image sizing
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    // Set initial height
    handleResize()

    // Update on resize
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn("relative w-full mb-4", className)}
      style={{
        height: windowHeight ? `${windowHeight * 1.2}px` : "120vh",
      }}
    >
      {/* Hero Image */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />

        {/* Gradient Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </div>

      {/* View Details Button */}
      <div className="absolute bottom-1/4 right-8 md:right-16 lg:right-24">
        <button
          className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-black/70 text-white transition-all duration-300 hover:bg-black/90 md:h-32 md:w-32"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col items-center justify-center">
            <span className="mb-1 text-sm font-medium md:text-base">View Details</span>
            <ArrowRight className={cn("h-5 w-5 transition-transform duration-300", isHovered ? "translate-x-1" : "")} />
          </div>

          {/* Animated Ring */}
          <span
            className={cn(
              "absolute inset-0 rounded-full border border-white/30 transition-all duration-700",
              isHovered ? "scale-110 opacity-0" : "scale-100 opacity-100",
            )}
          />
        </button>
      </div>
    </div>
  )
}
