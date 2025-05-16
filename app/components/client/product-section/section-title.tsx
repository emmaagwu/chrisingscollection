import { cn } from "@/lib/utils"

interface SectionTitleProps {
  title: string
  className?: string
}

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-8 text-center", className)}>
      <h2 className="text-2xl font-bold text-[#5D4037] md:text-3xl lg:text-4xl">{title}</h2>
      <div className="mx-auto mt-2 h-1 w-20 bg-[#A1887F]"></div>
    </div>
  )
}
