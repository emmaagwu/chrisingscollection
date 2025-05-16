// Re-export all components for easier imports
import ProductSection from "./product-section"
import SectionTitle from "./section-title"
import WearCard from "./wear-card"
import WearDetails from "./wear-details"
import WearDisplay from "./wear-display"
import WearGrid from "./wear-grid"
import SeeMoreButton from "./see-more-button"

// Export a README with usage instructions
const README = `
# Product Section Component

A portable, responsive product display section with horizontal scrolling.

## Usage

\`\`\`jsx
import { 
  ProductSection, 
  WearDisplay 
} from '@/components/product-section'

// Example data
const products = [
  { id: 1, code: "P001", price: 129.99, imageUrl: "/images/product1.jpg" },
  { id: 2, code: "P002", price: 149.99, imageUrl: "/images/product2.jpg" },
  { id: 3, code: "P003", price: 139.99, imageUrl: "/images/product3.jpg" },
  { id: 4, code: "P004", price: 159.99, imageUrl: "/images/product4.jpg" },
]

// In your component
<ProductSection 
  title="Featured Products" 
  seeMoreText="See More Products" 
  seeMoreHref="/products"
>
  {products.map((product) => (
    <WearDisplay
      key={product.id}
      imageUrl={product.imageUrl}
      code={product.code}
      price={product.price}
      altText={\`Product \${product.code}\`}
    />
  ))}
</ProductSection>
\`\`\`

## Features

- Responsive design with horizontal scrolling
- Hover effects on product cards
- Favorite toggle functionality
- "Chat with tailor" link
- Customizable section title and "see more" button
- Works across all screen sizes
`

export { ProductSection, SectionTitle, WearCard, WearDetails, WearDisplay, WearGrid, SeeMoreButton, README }
