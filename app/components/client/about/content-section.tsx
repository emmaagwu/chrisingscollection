import Image from "next/image"
import { cn } from "@/lib/utils"

interface ContentSectionProps {
  title: string
  description: string
  imageUrl: string
  imageAlt?: string
  reversed?: boolean
  className?: string
}

export default function ContentSection({
  title,
  description,
  imageUrl,
  imageAlt = "Chrisings Collections clothing",
  reversed = false,
  className,
}: ContentSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div
          className={cn(
            "flex flex-col items-center gap-12 md:flex-row md:items-start",
            reversed ? "md:flex-row-reverse" : "",
          )}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2">
            <div className="max-w-lg">
              <h2 className="mb-6 text-2xl font-bold uppercase tracking-tight text-[#5D4037] md:text-3xl">{title}</h2>
              <div className="prose prose-lg text-gray-600">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
