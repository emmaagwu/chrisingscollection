import Link from "next/link"
import Navbar from "@/app/components/client/navbar"
import { Footer } from "@/app/components/client/footer"


export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center px-4 py-24 text-center">
        <h1 className="mb-4 text-4xl font-bold text-[#5D4037]">404</h1>
        <h2 className="mb-6 text-2xl font-semibold">Product Not Found</h2>
        <p className="mb-8 max-w-md text-gray-600">
          We couldn&#39;t find the product you&#39;re looking for. It might have been removed or the URL might be incorrect.
        </p>

        <Link
          href="/"
          className="rounded-full bg-[#5D4037] px-6 py-3 text-white transition-colors hover:bg-[#5D4037]/90"
        >
          Return to Home
        </Link>
      </main>
      <Footer />
    </>
  )
}
