import { cn } from "@/lib/utils"

interface HeroBannerProps {
  title: string
  description: string
  className?: string
  bgColor?: string
  textColor?: string
}

export default function HeroBanner({
  title,
  description,
  className,
  bgColor = "#683D0D",
  textColor = "white",
}: HeroBannerProps) {
  return (
    <div
      className={cn("relative overflow-hidden py-20 px-4 text-center", className)}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Decorative shapes */}
      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10"></div>
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/3 translate-y-1/3 rounded-full bg-white/10"></div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">{title}</h1>
        <p className="text-base md:text-lg lg:text-xl">{description}</p>
      </div>
    </div>
  )
}
