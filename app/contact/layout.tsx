import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Chrisings Collections",
  description:
    "Get in touch with Chrisings Collections. Visit our locations in Lagos and Aba or contact us via email and phone.",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
