import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface SeeMoreButtonProps {
  text: string
  href: string
  className?: string
}

export default function SeeMoreButton({ text, href, className }: SeeMoreButtonProps) {
  return (
    <div className={cn("mt-10 flex justify-center", className)}>
      <Link
        href={href}
        className="group flex items-center space-x-2 rounded-full border border-[#5D4037] px-6 py-3 text-[#5D4037] transition-all hover:bg-[#5D4037] hover:text-white"
      >
        <span className="font-medium">{text}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
