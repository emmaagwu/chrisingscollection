import React from "react"
import { cn } from "@/lib/utils"
import SectionHeader from "./section-header"

interface LatestWearsSectionProps {
  title: string
  subtitle: string
  children: React.ReactNode
  className?: string
  breakpoint?: "sm" | "md" | "lg" | "xl"
  minHeight?: string
}

export default function LatestWearsSection({
  title,
  subtitle,
  children,
  className,
  breakpoint = "md",
  minHeight = "min-h-[50vh]",
}: LatestWearsSectionProps) {
  // Map breakpoint to Tailwind class
  const breakpointMap = {
    sm: "sm:flex-row",
    md: "md:flex-row",
    lg: "lg:flex-row",
    xl: "xl:flex-row",
  }

  // Count children to ensure we have exactly 2
  const childrenArray = React.Children.toArray(children)
  if (childrenArray.length !== 2) {
    console.warn("LatestWearsSection should have exactly 2 children")
  }

  return (
    <section className={cn("w-full py-12 md:py-16", className)}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className={cn("flex flex-col", breakpointMap[breakpoint], minHeight)}>
          {React.Children.map(childrenArray.slice(0, 2), (child, index) => (
            <div key={index} className="flex-1">
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


// import React from "react"
// import { cn } from "@/lib/utils"
// import SectionHeader from "./section-header"

// interface LatestWearsSectionProps {
//   title: string
//   subtitle: string
//   children: React.ReactNode
//   className?: string
//   breakpoint?: "sm" | "md" | "lg" | "xl"
//   minHeight?: string
// }

// export default function LatestWearsSection({
//   title,
//   subtitle,
//   children,
//   className,
//   breakpoint = "md",
//   minHeight = "min-h-[50vh]",
// }: LatestWearsSectionProps) {
//   // Map breakpoint to Tailwind class
//   const breakpointMap = {
//     sm: "sm:flex-row",
//     md: "md:flex-row",
//     lg: "lg:flex-row",
//     xl: "xl:flex-row",
//   }

//   // Count children to ensure we have exactly 2
//   const childrenArray = React.Children.toArray(children)
//   if (childrenArray.length !== 2) {
//     console.warn("LatestWearsSection should have exactly 2 children")
//   }

//   return (
//     <section className={cn("w-full py-12 md:py-16", className)}>
//       <div className="mx-auto px-4 sm:px-6 lg:px-8">
//         <SectionHeader title={title} subtitle={subtitle} />

//         <div className={cn("flex flex-col", breakpointMap[breakpoint], minHeight)}>
//           {childrenArray.slice(0, 2)}
//         </div>
//       </div>
//     </section>
//   )
// }

