import HeroSection from '../components/client/hero-section'
import ProductSection from '../components/client/product-section/product-section'
import WearDisplay from '../components/client/product-section/wear-display'
import { ShowcaseSection, ShowcaseCard } from "../components/client/showcase-section"
import { LatestWearsSection, LatestWearCard } from "../components/client/latest-wears-section"
import { Footer } from "../components/client/footer"
import { getProductsByCategory } from "@/lib/product"


// Sample product data
// Get products by category
const kaftanProducts = getProductsByCategory("Senator")
const agbadaProducts = getProductsByCategory("agbada")
const suitProducts = getProductsByCategory("suit")
const shirtProducts = getProductsByCategory("shirt")


const showcaseItems = [
  { id: 1, imageUrl: "/images/christian1.png", altText: "Red fabric detail" },
  { id: 2, imageUrl: "/images/christian2.png", altText: "Blue fabric detail" },
  { id: 3, imageUrl: "/images/christian3.png", altText: "Green fabric detail" },
  { id: 4, imageUrl: "/images/christian4.png", altText: "Yellow fabric detail" },
  { id: 5, imageUrl: "/images/christian5.png", altText: "Purple fabric detail" },
]


// Latest wears data
const featuredKaftan = kaftanProducts[0]
const featuredAgbada = agbadaProducts[0]

export default function Home() {
  return (
    <main className='mt-13'>
      <HeroSection
        imageUrl='/images/christian-hero.png'
        altText='Elegant tailored clothing collection'
      />

      {/* Senator Section */}
      <ProductSection title="Premium Senators" seeMoreText="See More Senators" seeMoreHref="/category/Senator">
          {kaftanProducts.map((product) => (
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

      {/* Agbada Section */}
      <ProductSection title="Luxury Agbada" seeMoreText="See    More Agbada" seeMoreHref="/category/agbada">
          {agbadaProducts.map((product) => (
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

      {/* Suit Section */}
      <ProductSection title="Tailored Suits" seeMoreText="See More Suits" seeMoreHref="/category/suit">
        {suitProducts.map((product) => (
          <WearDisplay
            key={product.id}
            id={product.id}
            imageUrl={product.images[0]}
            code={product.code}
            price={product.price}
            altText={`Suit ${product.code}`}
          />
        ))}
      </ProductSection>

      {/* Shirt Section */}
      <ProductSection title="Elegant Shirt" seeMoreText="See More Shirts" seeMoreHref="/category/shirt">
        {shirtProducts.map((product) => (
          <WearDisplay
            key={product.id}
            id={product.id}
            imageUrl={product.images[0]}
            code={product.code}
            price={product.price}
            altText={`Shirt ${product.code}`}
          />
        ))}
      </ProductSection>

      {/* Latest Wears Section */}
    {/* Latest Wears Section */}
      <LatestWearsSection
        title="Latest Arrivals"
        subtitle="Discover our newest collection of premium tailored clothing"
        minHeight="min-h-[70vh]"
      >
        {/* {latestWears.slice(0, 2).map((item) => (
          <LatestWearCard
            key={item.id}
            imageUrl={item.imageUrl}
            altText={item.altText}
            productId={item.id}
            priority={true}
            overlayText={item.overlayText}
            overlayPosition="bottom"
            overlayTextSize="2xl"
          />
        ))} */}

          <LatestWearCard
            imageUrl={featuredKaftan.images[0]}
            altText={featuredKaftan.name}
            productId={featuredKaftan.id}
            priority={true}
            overlayText="PREMIUM Senator"
            overlayPosition="bottom"
            overlayTextSize="2xl"
          />
          <LatestWearCard
            imageUrl={featuredAgbada.images[0]}
            altText={featuredAgbada.name}
            productId={featuredAgbada.id}
            priority={true}
            overlayText="LUXURY AGBADA"
            overlayPosition="bottom"
            overlayTextSize="2xl"
          />
      </LatestWearsSection>


      {/* Showcase Section */}
      <ShowcaseSection
        title="Crafting Elegance and style"
        subtitle="We set a high production standard that is constantly focused on our customers' satisfaction."
        speed="normal"
        className="bg-gray-50"
      >
        {showcaseItems.map((item) => (
          <ShowcaseCard key={item.id} imageUrl={item.imageUrl} altText={item.altText} />
        ))}
      </ShowcaseSection>
      {/* Footer */}
      <Footer />
    </main>
  )
}
