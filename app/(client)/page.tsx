import HeroSection from '../components/client/hero-section'
import ProductSection from '../components/client/product-section/product-section'
import WearDisplay from '../components/client/product-section/wear-display'
import { ShowcaseSection, ShowcaseCard } from "../components/client/showcase-section"
import { LatestWearsSection, LatestWearCard } from "../components/client/latest-wears-section"
import { Footer } from "../components/client/footer"
import { getProductsByCategory } from "@/lib/product"


// Sample product data
// Get products by category
const kaftanProducts = getProductsByCategory("kaftan")
const agbadaProducts = getProductsByCategory("agbada")
const suitProducts = getProductsByCategory("suit")
const shirtProducts = getProductsByCategory("shirt")


const showcaseItems = [
  { id: 1, imageUrl: "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161", altText: "Red fabric detail" },
  { id: 2, imageUrl: "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161", altText: "Blue fabric detail" },
  { id: 3, imageUrl: "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161", altText: "Green fabric detail" },
  { id: 4, imageUrl: "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161", altText: "Yellow fabric detail" },
  { id: 5, imageUrl: "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161", altText: "Purple fabric detail" },
]


// Latest wears data
const featuredKaftan = kaftanProducts[0]
const featuredAgbada = agbadaProducts[0]

export default function Home() {
  return (
    <main className='mt-13'>
      <HeroSection
        imageUrl='https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161'
        altText='Elegant tailored clothing collection'
      />

      {/* Kaftan Section */}
      <ProductSection title="Premium Kaftans" seeMoreText="See More Kaftans" seeMoreHref="/category/kaftan">
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
            overlayText="PREMIUM KAFTAN"
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
