import Navbar from "@/app/components/client/navbar"
import Marquee from "@/app/components/client/marquee"
import { Footer } from "@/app/components/client/footer"
import FAQSection from "@/app/components/client/faq/faq-section"
import { faqData } from "@/lib/faq-data"

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <Marquee
        text="FREE SHIPPING ON ALL ORDERS OVER $150 • NEW COLLECTION AVAILABLE NOW • USE CODE 'GRANDEUR10' FOR 10% OFF"
        speed="normal"
      />

      <main className="min-h-screen bg-[#FAF7F2] pt-20">
        <FAQSection title="Frequently Asked Questions" categories={faqData} />
      </main>

      <Footer />
    </>
  )
}
