// Re-export all components for easier imports
import LatestWearsSection from "./latest-wears-section"
import LatestWearCard from "./latest-wear-card"
import SectionHeader from "./section-header"

// Export a README with usage instructions
const README = `
# Latest Wears Section Component

A portable, responsive section that showcases the latest fashion items with animated overlays and hover effects.

## Usage

\`\`\`jsx
import { 
  LatestWearsSection, 
  LatestWearCard 
} from '@/components/latest-wears-section'

// In your component
<LatestWearsSection 
  title="Latest Arrivals"
  subtitle="Discover our newest collection of premium tailored clothing"
  breakpoint="md" // Options: "sm", "md", "lg", "xl" - when to switch to horizontal layout
  minHeight="min-h-[50vh]" // Minimum height of the section
>
  <LatestWearCard
    imageUrl="/images/latest1.jpg"
    altText="White Senator"
    productId="Senator-001"
    aspectRatio="portrait" // Options: "square", "portrait", "landscape", "auto"
    priority={true} // Set to true for above-the-fold images
    overlayText="PREMIUM Senator"
    overlayPosition="bottom" // Options: "top", "center", "bottom"
    overlayTextSize="2xl" // Options: "sm", "md", "lg", "xl", "2xl", "3xl"
  />
  <LatestWearCard
    imageUrl="/images/latest2.jpg"
    altText="Green agbada"
    productId="agbada-002"
    overlayText="LUXURY AGBADA"
    overlayPosition="bottom"
  />
</LatestWearsSection>
\`\`\`

## Features

- Responsive layout: side-by-side on large screens, stacked on small screens
- Section title and subtitle
- Animated text overlays that appear on hover
- Image zoom effect on hover
- Link support to product detail pages
- Configurable breakpoint for layout switching
- Customizable minimum height
- Support for different aspect ratios
- Works across all screen sizes
- No dependencies on global styles
`

export { LatestWearsSection, LatestWearCard, SectionHeader, README }
