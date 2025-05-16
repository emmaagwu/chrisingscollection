import { cn } from "@/lib/utils"
import FAQAccordion from "./faq-accordion"
import type { FAQCategory } from "@/lib/faq-data"

interface FAQSectionProps {
  title: string
  categories: FAQCategory[]
  className?: string
}

export default function FAQSection({ title, categories, className }: FAQSectionProps) {
  return (
    <section className={cn("py-12 md:py-16", className)}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#5D4037] md:text-4xl">{title}</h1>

        <div className="space-y-8">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              {category.title && <h2 className="text-xl font-semibold text-[#8D6E63]">{category.title}</h2>}
              <FAQAccordion items={category.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
