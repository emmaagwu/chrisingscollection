import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Grandeur Tailors",
  description: "Learn about Grandeur Tailors, our mission, and our commitment to quality tailoring since 2017.",
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
