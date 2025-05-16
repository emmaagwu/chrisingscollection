import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContactInfoProps {
  className?: string
}

export default function ContactInfo({ className }: ContactInfoProps) {
  return (
    <div className={cn("bg-[#F5F1EC] p-8 md:p-12 lg:p-16", className)}>
      <div className="max-w-lg">
        <h1 className="mb-6 text-4xl font-bold text-[#333333] md:text-5xl">Get in touch</h1>

        <p className="mb-8 text-lg text-gray-700">
          Have a question? Our team is always ready to help. Feel free reach us anytime, we&apos;ll be glad to have you in our atelier.
        </p>

        {/* Email */}
        <div className="mb-6 flex items-start">
          <Mail className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#8D6E63]" />
          <div>
            <p className="text-sm font-medium text-[#8D6E63]">Email:</p>
            <Link
              href="mailto:christianogbonnaya207@gmail.com"
              className="text-gray-700 hover:text-[#5D4037] hover:underline"
            >
              christianogbonnaya207@gmail.com
            </Link>
          </div>
        </div>

        {/* Phone */}
        <div className="mb-6 flex items-start">
          <Phone className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#8D6E63]" />
          <div>
            <p className="text-sm font-medium text-[#8D6E63]">Phone Number:</p>
            <Link href="tel:+2347080250212" className="text-gray-700 hover:text-[#5D4037] hover:underline">
              +234 706 727 9684
            </Link>
          </div>
        </div>

        {/* Office Addresses */}
        <div className="mb-8 flex items-start">
          <MapPin className="mr-3 mt-1 h-5 w-5 flex-shrink-0 text-[#8D6E63]" />
          <div>
            <p className="text-sm font-medium text-[#8D6E63]">Office Address:</p>
            <ul className="mt-2 space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-[#8D6E63]">•</span>
                <p className="text-gray-700">
                  109 Jubilee Road By Mosque, Aba, Abia State
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#8D6E63]">•</span>
                <p className="text-gray-700">
                  10 Royal Avenue, Ogborhill, Aba, Abia State
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8D6E63] text-white transition-colors hover:bg-[#5D4037]"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8D6E63] text-white transition-colors hover:bg-[#5D4037]"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
