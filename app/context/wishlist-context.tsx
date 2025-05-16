"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface WishlistItem {
  id: string
  code: string
  price: number
  imageUrl: string
}

interface WishlistContextType {
  wishlistItems: WishlistItem[]
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  isInWishlist: (id: string) => boolean
  totalPrice: number
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [isInitialized, setIsInitialized] = useState(false)

  // Load wishlist from localStorage on initial render (client-side only)
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist")
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist)
        setWishlistItems(parsedWishlist)
      } catch (error) {
        console.error("Failed to parse wishlist from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    // Only save after initial load to prevent overwriting with empty array
    if (isInitialized) {
      localStorage.setItem("wishlist", JSON.stringify(wishlistItems))
    }

    // Calculate total price whenever wishlist changes
    const newTotal = wishlistItems.reduce((sum, item) => sum + item.price, 0)
    setTotalPrice(newTotal)
  }, [wishlistItems, isInitialized])

  // Add item to wishlist if not already present
  const addToWishlist = (item: WishlistItem) => {
    if (!isInWishlist(item.id)) {
      setWishlistItems((prev) => [...prev, item])
    }
  }

  // Remove item from wishlist
  const removeFromWishlist = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id))
  }

  // Check if item is in wishlist
  const isInWishlist = (id: string) => {
    return wishlistItems.some((item) => item.id === id)
  }

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    totalPrice,
  }

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export function useWishlist() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider")
  }
  return context
}
