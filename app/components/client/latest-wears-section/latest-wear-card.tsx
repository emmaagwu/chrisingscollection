"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LatestWearCardProps {
  imageUrl: string
  altText?: string
  className?: string
  aspectRatio?: "square" | "portrait" | "landscape" | "auto"
  priority?: boolean
  productId: string
  // Text overlay props
  overlayText?: string
  overlayPosition?: "top" | "center" | "bottom"
  overlayTextColor?: string
  overlayTextSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
  overlayTextWeight?: "normal" | "medium" | "semibold" | "bold"
}

export default function LatestWearCard({
  imageUrl,
  altText = "Fashion image",
  className,
  aspectRatio = "auto",
  priority = false,
  productId,
  // Text overlay props with defaults
  overlayText,
  overlayPosition = "center",
  overlayTextColor = "white",
  overlayTextSize = "xl",
  overlayTextWeight = "bold",
}: LatestWearCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Map aspect ratio to actual CSS class
  const aspectRatioClass = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    auto: "",
  }

  // Map overlay position to CSS classes
  const positionClasses = {
    top: "items-start pt-6",
    center: "items-center",
    bottom: "items-end pb-6",
  }

  // Map text size to Tailwind classes
  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
  }

  // Map text weight to Tailwind classes
  const textWeightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }

  return (
    <Link
      href={`/product/${productId}`}
      className={cn("group relative block h-full w-full overflow-hidden", aspectRatioClass[aspectRatio], className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image with hover effect */}
      <div
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden transition-transform duration-700",
          isHovered ? "scale-105" : "scale-100",
        )}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          fill
          priority={priority}
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Semi-transparent overlay on hover */}
        <div
          className={cn("absolute inset-0 bg-black/0 transition-opacity duration-500", isHovered ? "bg-black/20" : "")}
        />
      </div>

      {/* Animated text overlay */}
      {overlayText && (
        <div
          className={cn(
            "absolute inset-0 flex flex-col justify-center px-6 text-center",
            positionClasses[overlayPosition],
          )}
        >
          <div
            className={cn(
              "transform px-4 py-2 transition-all duration-500",
              textSizeClasses[overlayTextSize],
              textWeightClasses[overlayTextWeight],
              isHovered
                ? "translate-y-0 opacity-100 backdrop-blur-sm"
                : overlayPosition === "top"
                  ? "-translate-y-4 opacity-0"
                  : overlayPosition === "bottom"
                    ? "translate-y-4 opacity-0"
                    : "opacity-0",
            )}
            style={{ color: overlayTextColor }}
          >
            <div className="bg-black/30 px-3 py-2 backdrop-blur-sm">{overlayText}</div>
          </div>
        </div>
      )}
    </Link>
  )
}
