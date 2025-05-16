"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: React.ReactNode
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("rounded-lg bg-[#F5F1EC]", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn("border-b border-[#E5DED5] last:border-b-0", openIndex === index ? "bg-[#F5F1EC]" : "")}
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[#5D4037] hover:bg-[#EBE5DE] focus:outline-none"
            aria-expanded={openIndex === index}
          >
            <span>{item.question}</span>
            <span className="ml-2 flex h-6 w-6 items-center justify-center text-lg">
              {openIndex === index ? "×" : "+"}
            </span>
          </button>
          {openIndex === index && <div className="px-6 pb-4 pt-0 text-sm text-gray-700">{item.answer}</div>}
        </div>
      ))}
    </div>
  )
}
