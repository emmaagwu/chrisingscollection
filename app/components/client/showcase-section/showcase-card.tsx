import Image from "next/image"
import { cn } from "@/lib/utils"

interface ShowcaseCardProps {
  imageUrl: string
  altText?: string
  className?: string
}

export default function ShowcaseCard({ imageUrl, altText = "Showcase image", className }: ShowcaseCardProps) {
  return (
    <div className={cn("overflow-hidden rounded-lg", className)}>
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
}
