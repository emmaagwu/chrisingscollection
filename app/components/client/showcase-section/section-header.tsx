import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  subtitle: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 text-center", className)}>
      <h2 className={cn("text-2xl font-bold text-[#5D4037] md:text-3xl lg:text-4xl", titleClassName)}>{title}</h2>
      <p className={cn("mx-auto mt-4 max-w-2xl text-gray-600", subtitleClassName)}>{subtitle}</p>
    </div>
  )
}
