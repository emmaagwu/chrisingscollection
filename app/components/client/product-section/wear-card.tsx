"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface WearCardProps {
  id?: string
  imageUrl: string
  altText?: string
  className?: string
}

export default function WearCard({ id, imageUrl, altText = "Fashion item", className }: WearCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const content = (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300",
        isHovered ? "scale-95" : "scale-100",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={altText}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 75vw, (max-width: 768px) 42vw, (max-width: 1024px) 31vw, 24.25vw"
        />
      </div>
    </div>
  )

  if (id) {
    return (
      <Link href={`/product/${id}`} className="block">
        {content}
      </Link>
    )
  }

  return content
}
