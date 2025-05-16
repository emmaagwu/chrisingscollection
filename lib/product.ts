export interface Product {
  id: string
  name: string
  code: string
  price: number
  description: string
  material?: string
  features?: string[]
  images: string[]
  rating: number
  category: string
}

// Sample product data
const products: Product[] = [
  // KAFTAN PRODUCTS
  {
    id: "kf001",
    name: "GT-Kaf 24/010",
    code: "KF001",
    price: 129.99,
    description:
      "A soft blue premium kaftan with embroidered patterns. Perfect for special occasions and formal events.",
    material: "100% Cotton with premium embroidery",
    features: [
      "Hand-stitched embroidery",
      "Breathable fabric",
      "Traditional design with modern styling",
      "Comfortable fit",
    ],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "kaftan",
  },
  {
    id: "kf002",
    name: "GT-Kaf 24/011",
    code: "KF002",
    price: 149.99,
    description: "An elegant white kaftan with gold embroidery. Ideal for weddings and ceremonial events.",
    material: "Premium cotton blend with gold thread embroidery",
    features: ["Gold thread detailing", "Lightweight and comfortable", "Formal design", "Custom fit available"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "kaftan",
  },
  {
    id: "kf003",
    name: "GT-Kaf 24/012",
    code: "KF003",
    price: 139.99,
    description: "A rich green kaftan with subtle pattern work. Perfect for both casual and semi-formal occasions.",
    material: "Breathable linen blend",
    features: ["Subtle pattern work", "Cooling fabric", "Versatile design", "Side pockets"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "kaftan",
  },
  {
    id: "kf004",
    name: "GT-Kaf 24/013",
    code: "KF004",
    price: 159.99,
    description: "A premium black kaftan with silver embroidery. Elegant choice for evening events.",
    material: "Premium cotton with silver thread work",
    features: ["Intricate silver embroidery", "Formal design", "Comfortable fit", "Premium finish"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "kaftan",
  },

  // AGBADA PRODUCTS
  {
    id: "ag001",
    name: "GT-Agb 24/007",
    code: "AG001",
    price: 199.99,
    description: "A luxurious green agbada with gold embroidery. Perfect for traditional ceremonies and celebrations.",
    material: "Premium brocade with gold thread work",
    features: ["Three-piece ensemble", "Rich embroidery", "Traditional design", "Comfortable for all-day wear"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "agbada",
  },
  {
    id: "ag002",
    name: "GT-Agb 24/008",
    code: "AG002",
    price: 229.99,
    description: "A royal blue agbada with intricate white embroidery. Ideal for weddings and important celebrations.",
    material: "Premium damask with detailed embroidery",
    features: ["Elaborate embroidery patterns", "Complete three-piece set", "Regal design", "Premium finish"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "agbada",
  },
  {
    id: "ag003",
    name: "GT-Agb 24/009",
    code: "AG003",
    price: 189.99,
    description: "A cream agbada with brown embroidery. Perfect for formal occasions with a touch of elegance.",
    material: "Lightweight cotton blend with embroidery",
    features: ["Subtle embroidery details", "Lightweight fabric", "Three-piece set", "Comfortable fit"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "agbada",
  },
  {
    id: "ag004",
    name: "GT-Agb 24/010",
    code: "AG004",
    price: 249.99,
    description: "A premium black agbada with gold and silver embroidery. The epitome of luxury for special events.",
    material: "Premium brocade with metallic thread work",
    features: ["Luxurious embroidery", "Complete three-piece set", "Statement piece", "Finest craftsmanship"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "agbada",
  },

  // SUIT PRODUCTS
  {
    id: "st001",
    name: "GT-Suit 24/001",
    code: "ST001",
    price: 299.99,
    description: "A classic navy blue suit with modern slim fit. Perfect for business meetings and formal occasions.",
    material: "Premium wool blend with slight stretch",
    features: ["Two-piece suit", "Modern slim fit", "Fully lined", "Interior pockets"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "suit",
  },
  {
    id: "st002",
    name: "GT-Suit 24/002",
    code: "ST002",
    price: 329.99,
    description: "A charcoal grey suit with subtle check pattern. Versatile option for various formal settings.",
    material: "100% wool with check pattern",
    features: ["Two-piece suit", "Classic fit", "Check pattern", "Handcrafted details"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "suit",
  },
  {
    id: "st003",
    name: "GT-Suit 24/003",
    code: "ST003",
    price: 349.99,
    description: "A premium black tuxedo suit. The perfect choice for black-tie events and special occasions.",
    material: "Premium wool with satin details",
    features: ["Tuxedo style", "Satin lapels", "Matching trousers", "Formal design"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "suit",
  },
  {
    id: "st004",
    name: "GT-Suit 24/004",
    code: "ST004",
    price: 279.99,
    description: "A light beige summer suit. Ideal for outdoor events and warm weather occasions.",
    material: "Lightweight linen blend",
    features: ["Summer weight", "Breathable fabric", "Unlined for comfort", "Relaxed fit"],
    images: [
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "suit",
  },

  // SHIRT PRODUCTS
  {
    id: "sh001",
    name: "GT-Shirt 24/001",
    code: "SH001",
    price: 79.99,
    description: "A crisp white dress shirt with French cuffs. Essential for formal occasions and business wear.",
    material: "100% Egyptian cotton",
    features: ["French cuffs", "Mother of pearl buttons", "Spread collar", "Tailored fit"],
    images: [
      // "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "/images/shirt1.jpg",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "shirt",
  },
  {
    id: "sh002",
    name: "GT-Shirt 24/002",
    code: "SH002",
    price: 69.99,
    description: "A light blue business shirt with subtle texture. Perfect for daily office wear.",
    material: "Premium cotton with textured weave",
    features: ["Regular cuffs", "Semi-spread collar", "Slim fit", "Non-iron finish"],
    images: [
      // "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "/images/shirt2.jpg",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "shirt",
  },
  {
    id: "sh003",
    name: "GT-Shirt 24/003",
    code: "SH003",
    price: 89.99,
    description: "A premium black evening shirt with pleated front. Designed for formal black-tie events.",
    material: "Premium cotton with pleated front",
    features: ["Pleated front", "French cuffs", "Wing collar", "Formal design"],
    images: [
      // "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "/images/shirt3.jpg",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 5,
    category: "shirt",
  },
  {
    id: "sh004",
    name: "GT-Shirt 24/004",
    code: "SH004",
    price: 74.99,
    description: "A casual checkered shirt in blue and white. Perfect for smart-casual occasions.",
    material: "Soft cotton with check pattern",
    features: ["Button-down collar", "Single pocket", "Regular fit", "Versatile design"],
    images: [
      // "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
      "/images/shirt4.jpg",
      "https://ik.imagekit.io/n34nw5zbn/tailor-hero.jpg?updatedAt=1745710802161",
    ],
    rating: 4,
    category: "shirt",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

export function getAllProducts(): Product[] {
  return products
}

export function getCategories(): string[] {
  const categories = new Set(products.map((product) => product.category))
  return Array.from(categories)
}
