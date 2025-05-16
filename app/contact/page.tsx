import Image from "next/image"
import Navbar from "@/app/components/client/navbar"
import Marquee from "@/app/components/client/marquee"
import { Footer } from "@/app/components/client/footer"
import ContactInfo from "@/app/components/client/contact/contact-info"

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Marquee
        text="Our Aba Office is now opened! - Visit us at 109 Jubilee Road By Mosque, Aba, Abia State"
        speed="normal"
      />

      <main className="mx-5 min-h-screen mb-20 pt-20 md:mb-50 md:mx-70">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-4xl overflow-hidden">
          {/* Store Image - Left Side */}
          <div className="relative h-[300px] md:h-auto">
            <Image
              src="/images/chris-contact.jpg"
              alt="Chrisings Collections Atelier"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Contact Information - Right Side */}
          <ContactInfo />
        </div>
      </main>

      <Footer />
    </>
  )
}
