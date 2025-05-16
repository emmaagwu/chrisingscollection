import { notFound } from "next/navigation"
import Navbar from "@/app/components/client/navbar"
import { Footer } from "@/app/components/client/footer"
import Marquee from "@/app/components/client/marquee"
import ProductDetail from "@/app/components/client/product-detail/product-detail"
import { getProductById } from "@/lib/product"

interface ProductPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <Marquee
        text="FREE SHIPPING ON ALL ORDERS OVER $150 • NEW COLLECTION AVAILABLE NOW • USE CODE 'GRANDEUR10' FOR 10% OFF"
        speed="normal"
      />
      <main className="min-h-screen pt-20">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  )
}
