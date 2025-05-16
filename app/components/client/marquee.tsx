"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  text: string
  speed?: "slow" | "normal" | "fast"
  className?: string
  backgroundColor?: string
  textColor?: string
  repeat?: number
}

export default function Marquee({
  text,
  speed = "normal",
  className,
  backgroundColor = "#683D0D", // Light brown default
  textColor = "white",
  repeat = 3,
}: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const speedMap = {
    slow: "40s",
    normal: "35s",
    fast: "15s",
  }

  const repeatedText = Array(repeat)
    .fill(text)
    .map((item, index) => (
      <span key={index} className="inline-block px-40">
        {item}
      </span>
    ))

  return (
    <div className={cn("fixed top-20 left-0 right-0 z-40 overflow-hidden whitespace-nowrap py-4 font-medium", className)} style={{ backgroundColor }}>
      <div
        ref={containerRef}
        className="inline-block"
        style={{
          color: textColor,
          animation: `marquee ${speedMap[speed]} linear infinite`,
          whiteSpace: "nowrap",
        }}
      >
        {repeatedText}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}
