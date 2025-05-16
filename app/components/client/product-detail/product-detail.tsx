"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, Heart } from "lucide-react"
import { useWishlist } from "@/app/context/wishlist-context"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/product"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const [isFavorite, setIsFavorite] = useState(isInWishlist(product.id))

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist({
        id: product.id,
        code: product.code,
        price: product.price,
        imageUrl: product.images[0],
      })
    }
    setIsFavorite(!isFavorite)
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "2348131333446"; // No '+' sign

    const message = `Hello, I am interested in this item:\n\n` +
                    `🧥 *Name:* ${product.name}\n` +
                    `🧾 *Code:* ${product.code}\n` +
                    `💰 *Price:* ₦${product.price.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.location.href = waLink;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Product Images - Left Side (Scrollable) */}
        <div className="w-full lg:w-3/5">
          <div className="space-y-6">
            {product.images.map((image, index) => (
              <div key={index} className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - View ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details - Right Side (Fixed on Desktop) */}
        <div className="w-full lg:sticky lg:top-28 lg:w-2/5 lg:self-start">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            {/* Product Title and Rating */}
            <div className="mb-4 flex items-start justify-between">
              <h1 className="text-2xl font-bold text-[#5D4037] md:text-3xl">{product.name}</h1>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < product.rating ? "text-yellow-500" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <p className="mb-6 text-gray-600">{product.description}</p>

            {/* Product Code and Price */}
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">Code: {product.code}</span>
              <span className="text-2xl font-bold text-[#5D4037]">${product.price.toFixed(2)}</span>
            </div>

            {/* Material and Features */}
            {product.material && (
              <div className="mb-4">
                <h3 className="mb-2 font-medium text-[#5D4037]">Material</h3>
                <p className="text-sm text-gray-600">{product.material}</p>
              </div>
            )}

            {product.features && product.features.length > 0 && (
              <div className="mb-6">
                <h3 className="mb-2 font-medium text-[#5D4037]">Features</h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col space-y-4">
              <button
                // onClick={() => (window.location.href = `/chat?product=${product.code}`)}
                onClick={handleWhatsAppClick}
                className="flex w-full items-center justify-center space-x-2 rounded-full bg-[#5D4037] px-6 py-3 text-white transition-colors hover:bg-[#5D4037]/90"
              >
                <MessageCircle className="h-5 w-5" />
                <span>CHAT TAILOR</span>
              </button>

              <button
                onClick={handleFavoriteClick}
                className={cn(
                  "flex w-full items-center justify-center space-x-2 rounded-full border px-6 py-3 transition-colors",
                  isFavorite
                    ? "border-[#5D4037] bg-[#5D4037]/10 text-[#5D4037]"
                    : "border-gray-300 text-gray-700 hover:border-[#5D4037] hover:text-[#5D4037]",
                )}
              >
                <Heart className={cn("h-5 w-5", isFavorite ? "fill-[#5D4037]" : "")} />
                <span>{isFavorite ? "REMOVE FROM WISHLIST" : "ADD TO WISHLIST"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
