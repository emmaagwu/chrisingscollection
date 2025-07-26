import Link from "next/link"
import { Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={cn("w-full bg-[#EFEAE6] text-[#5D4037]", className)}>
      <div className="mx-auto w-full max-w-7xl px-4 py-12 md:px-5 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo and Social Media - 3 columns */}
          <div className="flex flex-col lg:col-span-3">
            <Link href="/" className="mb-4 inline-block">
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tighter">Chrisings</span>
                <span className="text-lg italic font-light">Collections</span>
              </div>
            </Link>
            <div className="mt-2 flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors hover:bg-[#5D4037]/10"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 transition-colors hover:bg-[#5D4037]/10"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Contact Information - 4 columns */}
          <div className="lg:col-span-4">
            <h3 className="mb-4 text-base font-semibold uppercase">Contact</h3>
            <div className="flex flex-col space-y-4 text-sm">
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <p>109 Jubilee Road By Mosque, Aba, Abia State</p>
              </div>
              <div className="flex items-start">
                <MapPin className="mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                <p>10 Royal Avenue, Ogborhill, Aba, Abia State</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-4 w-4 flex-shrink-0" />
                <a href="mailto:christianogbonnaya207@gmail.com" className="hover:underline">
                  christianogbonnaya207@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                <a href="tel:+2347080250212" className="hover:underline">
                  +234 706 727 9684
                </a>
              </div>
            </div>
          </div>

          {/* Products - 2 columns */}
          <div className="lg:col-span-2 lg:ml-4">
            <h3 className="mb-4 text-base font-semibold uppercase">Products</h3>
            <ul className="flex flex-col space-y-2 text-sm">
              <li>
                <Link href="/category/Senator" className="hover:underline">
                  Senators
                </Link>
              </li>
              <li>
                <Link href="/category/agbada" className="hover:underline">
                  Agbada
                </Link>
              </li>
            </ul>
          </div>

          {/* Sitemap - 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="mb-4 text-base font-semibold uppercase">Sitemap</h3>
            <ul className="flex flex-col space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-[#5D4037]/20"></div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>Chrisings Collections ©{currentYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}
