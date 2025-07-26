"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, MessageCircle } from "lucide-react"
import { useWishlist } from "../../../context/wishlist-context"
import { cn } from "@/lib/utils"

interface WearDetailsProps {
  id: string
  code: string
  price: number
  imageUrl: string
  className?: string
}

export default function WearDetails({ id, code, price, imageUrl, className }: WearDetailsProps) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const [isFavorite, setIsFavorite] = useState(false)

  // Sync component state with wishlist context
  useEffect(() => {
    setIsFavorite(isInWishlist(id))
  }, [isInWishlist, id])

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromWishlist(id)
    } else {
      addToWishlist({ id, code, price, imageUrl })
    }
    setIsFavorite(!isFavorite)
  }

  // Format chat message
  const message = encodeURIComponent(
    `Hello, I'm interested in this item:\n\nCode: ${code}\nPrice: ₦${price.toFixed(2)}`
  )
  const whatsappLink = `https://wa.me/2348131333446?text=${message}`

  return (
    <div className={cn("mt-3 flex flex-col space-y-2", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-500">Code: {code}</span>
        <button
          onClick={handleFavoriteClick}
          className="group flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={cn(
              "h-5 w-5 transition-colors",
              isFavorite ? "fill-[#5D4037] text-[#5D4037]" : "text-gray-400 group-hover:text-[#5D4037]",
            )}
          />
        </button>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-[#5D4037]">₦{price.toFixed(2)}</span>
        <Link
          href={whatsappLink}
          className="flex items-center space-x-1 text-sm font-medium text-[#A1887F] transition-colors hover:text-[#5D4037]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Chat Tailor</span>
        </Link>
      </div>
    </div>
  )
}
