"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { MessageCircle, X } from "lucide-react"
import { useWishlist, type WishlistItem as WishlistItemType } from "../../context/wishlist-context"

interface WishlistDropdownProps {
  isOpen: boolean
  onClose: () => void
}

export default function WishlistDropdown({ isOpen, onClose }: WishlistDropdownProps) {
  const { wishlistItems, removeFromWishlist, totalPrice } = useWishlist()
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])


  const handleWishlistWhatsAppClick = () => {
    const phoneNumber = "2348131333446";

    if (wishlistItems.length === 0) return;

    const messageLines = wishlistItems.map((item, index) => (
      `🧵 *Item ${index + 1}*\n` +
      `Name: ${item.id || "N/A"}\n` +
      `Code: ${item.code}\n` +
      `Price:  ₦${item.price.toFixed(2)}\n`
    ));

    const message = `Hello! I'm interested in the following items from my wishlist:\n\n${messageLines.join("\n")}\n` +
                    `🧾 *Total Price:* $${totalPrice.toFixed(2)}`;

    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(waLink, "_blank");
  };


  if (!isOpen) return null

  return (
    <div ref={dropdownRef} className="absolute right-0 top-full z-50 mt-2 w-80 rounded-md bg-white p-4 shadow-lg">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="font-medium text-[#5D4037]">My Wishlist ({wishlistItems.length})</h3>
        <button
          onClick={onClose}
          className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
          aria-label="Close wishlist"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="py-4 text-center text-gray-500">
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <>
          <div className="max-h-60 overflow-y-auto">
            {wishlistItems.map((item) => (
              <WishlistItem key={item.id} item={item} onRemove={removeFromWishlist} />
            ))}
          </div>

          <div className="mt-4 border-t border-gray-100 pt-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-medium">Total:</span>
              <span className="text-lg font-bold text-[#5D4037]">${totalPrice.toFixed(2)}</span>
            </div>

            <button
              onClick={handleWishlistWhatsAppClick}
              className="flex w-full items-center justify-center space-x-2 rounded-full bg-[#5D4037] px-4 py-2 text-white transition-colors hover:bg-[#5D4037]/90"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat with Tailor</span>
            </button>
          </div>
        </>
      )}
    </div>
  )
}

function WishlistItem({ item, onRemove }: { item: WishlistItemType; onRemove: (id: string) => void }) {
  return (
    <div className="mb-3 flex items-center gap-3 rounded-md p-2 hover:bg-gray-50">
      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
        <Image
          src={item.imageUrl || "/placeholder.svg"}
          alt={`Product ${item.code}`}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Code: {item.code}</span>
          <button
            onClick={() => onRemove(item.id)}
            className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-[#5D4037]"
            aria-label="Remove from wishlist"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-1 text-base font-bold text-[#5D4037]">${item.price.toFixed(2)}</div>
      </div>
    </div>
  )
}
