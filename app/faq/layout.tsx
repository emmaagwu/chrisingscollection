import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ | Grandeur Tailors",
  description: "Find answers to frequently asked questions about Grandeur Tailors services, pricing, and policies.",
}

export default function FAQLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
