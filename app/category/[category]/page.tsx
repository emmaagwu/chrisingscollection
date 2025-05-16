import { notFound } from "next/navigation"
import Navbar from "@/app/components/client/navbar"
import { Footer } from "@/app/components/client/footer"
import Marquee from "@/app/components/client/marquee"
import { getProductsByCategory, getCategories } from "@/lib/product"
import ProductSection from "@/app/components/client/product-section/product-section"
import WearDisplay from "@/app/components/client/product-section/wear-display"

interface CategoryPageProps {
  params: Promise<{
    category: string
  }>
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params
  const products = getProductsByCategory(category)

  // Check if category exists
  if (products.length === 0) {
    notFound()
  }

  // Format category name for display
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1)
  const categoryTitle = `${categoryName} Collection`

  return (
    <>
      <Navbar />
      <Marquee
        text="FREE SHIPPING ON ALL ORDERS OVER $150 • NEW COLLECTION AVAILABLE NOW • USE CODE 'GRANDEUR10' FOR 10% OFF"
        speed="normal"
      />
      <main className="min-h-screen pt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
          <h1 className="mb-8 text-center text-3xl font-bold text-[#5D4037] md:text-4xl">{categoryTitle}</h1>

          {/* Using grid layout for category pages */}
          <ProductSection
            title=""
            seeMoreText=""
            seeMoreHref=""
            hideTitle={true}
            gridLayout="grid"
            className="min-h-0 py-0"
          >
            {products.map((product) => (
              <WearDisplay
                key={product.id}
                id={product.id}
                imageUrl={product.images[0]}
                code={product.code}
                price={product.price}
                altText={product.name}
              />
            ))}
          </ProductSection>
        </div>
      </main>
      <Footer />
    </>
  )
}

// Generate static params for all categories
export function generateStaticParams() {
  const categories = getCategories()
  return categories.map((category) => ({
    category,
  }))
}