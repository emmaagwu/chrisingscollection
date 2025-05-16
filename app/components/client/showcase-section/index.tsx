// Re-export all components for easier imports
import ShowcaseSection from "./showcase-section"
import SectionHeader from "./section-header"
import ShowcaseCard from "./showcase-card"
import ShowcaseScroll from "./showcase-scroll"

// Export a README with usage instructions
const README = `
# Showcase Section Component

A portable, responsive showcase section with continuous horizontal scrolling (marquee effect).

## Usage

\`\`\`jsx
import { 
  ShowcaseSection, 
  ShowcaseCard 
} from '@/components/showcase-section'

// Example data
const showcaseItems = [
  { id: 1, imageUrl: "/images/showcase1.jpg", altText: "Showcase 1" },
  { id: 2, imageUrl: "/images/showcase2.jpg", altText: "Showcase 2" },
  { id: 3, imageUrl: "/images/showcase3.jpg", altText: "Showcase 3" },
  { id: 4, imageUrl: "/images/showcase4.jpg", altText: "Showcase 4" },
]

// In your component
<ShowcaseSection 
  title="Crafting Elegance and style" 
  subtitle="with perfect stiches"
  speed="normal" // Options: "slow", "normal", "fast"
  reverse={false} // Set to true for reverse direction
>
  {showcaseItems.map((item) => (
    <ShowcaseCard
      key={item.id}
      imageUrl={item.imageUrl}
      altText={item.altText}
      width={300}
      height={350}
    />
  ))}
</ShowcaseSection>
\`\`\`

## Features

- Continuous horizontal scrolling (marquee effect)
- Responsive design
- Customizable scroll speed and direction
- Title and subtitle display
- Works across all screen sizes
- No dependencies on global styles
`

export { ShowcaseSection, SectionHeader, ShowcaseCard, ShowcaseScroll, README }
