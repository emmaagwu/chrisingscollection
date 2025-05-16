"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ShowcaseScrollProps {
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  reverse?: boolean
}

export default function ShowcaseScroll({
  children,
  className,
  speed = "normal",
  reverse = false,
}: ShowcaseScrollProps) {
  // Set animation duration based on speed prop
  const speedMap = {
    slow: "80s",
    normal: "50s",
    fast: "30s",
  }

  // Clone children for seamless scrolling
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="flex w-full">
        {/* First set of items - using grid layout instead of flex for better spacing control */}
        <div
          className="grid min-w-full shrink-0 animate-scroll auto-cols-[75%] sm:auto-cols-[42%] md:auto-cols-[31%] lg:auto-cols-[24.25%] grid-flow-col gap-4"
          style={{
            animationDuration: speedMap[speed],
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={`first-${index}`} className="w-full">
              {child}
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless scrolling */}
        <div
          className="grid min-w-full shrink-0 animate-scroll auto-cols-[75%] sm:auto-cols-[42%] md:auto-cols-[31%] lg:auto-cols-[24.25%] grid-flow-col gap-4"
          style={{
            animationDuration: speedMap[speed],
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={`second-${index}`} className="w-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Scoped styles for the continuous scroll animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: forwards;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}
