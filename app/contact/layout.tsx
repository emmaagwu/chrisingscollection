import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Grandeur Tailors",
  description:
    "Get in touch with Grandeur Tailors. Visit our locations in Lagos and Abeokuta or contact us via email and phone.",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
