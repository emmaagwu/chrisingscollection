"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Heart, Menu, ShirtIcon, Shirt, X, UserCircle, LogOut } from "lucide-react"
import { useWishlist } from "@/app/context/wishlist-context"
import { useAuth } from "@/app/context/auth-context" // Import auth context
import WishlistDropdown from "./wishlist-dropdown"
import LoginModal from "./login-modal"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"


// Updated navigation items
const navItems = [
  { name: "HOME", href: "/" },
  { name: "CATEGORY", href: "#", hasDropdown: true },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
  { name: "FAQ", href: "/faq" },
]

// Category items with icons and descriptions
const categoryItems = [
  {
    name: "Kaftan",
    href: "/category/kaftan",
    icon: <Shirt className="h-5 w-5" />,
    description: "Traditional elegant attire with modern styling for special occasions.",
  },
  {
    name: "Agbada",
    href: "/category/agbada",
    icon: <Shirt className="h-5 w-5 rotate-45" />,
    description: "Flowing three-piece ensemble perfect for ceremonies and cultural events.",
  },
  {
    name: "Suit",
    href: "/category/suit",
    icon: <ShirtIcon className="h-5 w-5" />,
    description: "Premium tailored suits crafted with precision for professional settings.",
  },
  {
    name: "Shirt",
    href: "/category/shirt",
    icon: <Shirt className="h-5 w-5" />,
    description: "Bespoke shirts designed for comfort and style for everyday wear.",
  },
]

export default function Navbar() {


  const router = useRouter()

  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [activePage, setActivePage] = useState("")
  const { wishlistItems } = useWishlist()
  const { isLoggedIn, logout, loading } = useAuth() // Use auth context

  const [adminHoldTimer, setAdminHoldTimer] = useState<NodeJS.Timeout | null>(null)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const handleAdminPressStart = () => {
     // Only start the timer if user is not already logged in
    if (!isLoggedIn) {
    const timer = setTimeout(() => {
      setShowLoginModal(true) // Show modal
    }, 2000) // 2 seconds hold
    setAdminHoldTimer(timer)
  }
  }

  const handleAdminPressEnd = () => {
    if (adminHoldTimer) {
      clearTimeout(adminHoldTimer)
      setAdminHoldTimer(null)
    }
  }

  // Handle logout
  const handleLogout = async () => {
    await logout()
    // Close mobile menu if open
    if (isMenuOpen) setIsMenuOpen(false)
    router.push('/')
  }

  // Set active page based on current pathname
  useEffect(() => {
    if (pathname === "/") {
      setActivePage("HOME")
    } else if (pathname.startsWith("/about")) {
      setActivePage("ABOUT")
    } else if (pathname.startsWith("/contact")) {
      setActivePage("CONTACT")
    } else if (pathname.startsWith("/faq")) {
      setActivePage("FAQ")
    } else if (pathname.startsWith("/category/")) {
      setActivePage("CATEGORY")

      // Check if we're on a specific category page
      const categoryPath = pathname.split("/")[2]
      const categoryName = categoryPath.charAt(0).toUpperCase() + categoryPath.slice(1)

      // Find if this is one of our category items
      const matchedCategory = categoryItems.find((item) => item.name.toLowerCase() === categoryName.toLowerCase())

      if (matchedCategory) {
        // We could set a subcategory active state here if needed
      }
    }
  }, [pathname])

  // Add this second useEffect for keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "Z" && !isLoggedIn) {
        setShowLoginModal(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLoggedIn])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isCategoryOpen) setIsCategoryOpen(false)
    if (isWishlistOpen) setIsWishlistOpen(false)
  }

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen)
    if (isWishlistOpen) setIsWishlistOpen(false)
  }

  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen)
    if (isCategoryOpen) setIsCategoryOpen(false)
  }

  return (
    <>
      {/* Add padding to account for fixed navbar */}
      <div className="h-20"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 w-full items-center justify-between border-b border-gray-100 bg-white px-4 font-sans md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter md:text-2xl">
            <span className="text-[#5D4037] font-sans">Grandeur</span>
            <span className="text-[#5D4037] italic font-light font-sans"> Tailors</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center justify-center space-x-6 md:flex lg:space-x-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                <button
                  className={cn(
                    "flex items-center text-[#5D4037] font-medium transition-all hover:underline",
                    activePage === item.name ? "underline" : "",
                  )}
                  onClick={() => {
                    toggleCategory()
                  }}
                  onMouseEnter={() => setIsCategoryOpen(true)}
                >
                  {item.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "text-[#5D4037] font-medium transition-all hover:underline",
                    activePage === item.name ? "underline" : "",
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Desktop Category Dropdown */}
              {item.hasDropdown && isCategoryOpen && (
                <div
                  className="absolute left-0 top-full z-50 mt-2 w-64 rounded-md bg-white p-4 shadow-lg"
                  onMouseLeave={() => setIsCategoryOpen(false)}
                >
                  <div className="flex flex-col space-y-4">
                    {categoryItems.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="flex items-start gap-3 rounded-md p-2 transition-all hover:bg-gray-50"
                        onClick={() => {
                          setIsCategoryOpen(false)
                        }}
                      >
                        <div className="mt-1 text-[#5D4037]">{category.icon}</div>
                        <div>
                          <div className="font-medium text-[#5D4037]">{category.name}</div>
                          <p className="line-clamp-2 text-xs text-gray-500">{category.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-2">
          {/* Admin buttons - Only show if logged in and not loading */}
          {isLoggedIn && !loading && (
            <>
              {/* Admin Dashboard Button */}
              <Link
                href="/admin/dashboard"
                className="hidden md:flex items-center space-x-1 rounded-full border border-[#5D4037] px-3 py-1.5 text-sm font-medium text-[#5D4037] hover:bg-[#5D4037] hover:text-white transition-colors"
              >
                <UserCircle className="h-4 w-4" />
                <span>Admin</span>
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-1 rounded-full border border-[#5D4037] bg-[#5D4037] text-white px-3 py-1.5 text-sm font-medium hover:bg-white hover:text-[#5D4037] transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 md:hidden"
            onClick={toggleMenu}
            onTouchStart={handleAdminPressStart}
            onTouchEnd={handleAdminPressEnd}
            onMouseDown={handleAdminPressStart}
            onMouseUp={handleAdminPressEnd}
          >
            {isMenuOpen ? <X className="h-5 w-5 text-[#5D4037]" /> : <Menu className="h-5 w-5 text-[#5D4037] relative" />}
          </button>

          {/* Heart Icon - Always at extreme right */}
          <div className="relative">
            <button
              onClick={toggleWishlist}
              className="relative flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100"
              aria-label="Open wishlist"
            >
              <Heart className="h-5 w-5 text-[#5D4037]" />
              {wishlistItems.length > 0 && (
                <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#5D4037] text-xs text-white">
                  {wishlistItems.length}
                </span>
              )}
            </button>

            {/* Wishlist Dropdown */}
            <WishlistDropdown isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
          </div>
        </div>

        {/* Login Modal Component */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        />

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-20 z-50 w-full bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              {/* Admin buttons for mobile - Only show if logged in */}
              {isLoggedIn && !loading && (
                <div className="flex flex-col space-y-2 border-b border-gray-100 pb-4 mb-2">
                <Link
                  href="/admin/dashboard"
                  className="flex items-center w-30 space-x-1 rounded-full border border-[#5D4037] px-3 py-1.5 text-sm font-medium text-[#5D4037] hover:bg-[#5D4037] hover:text-white transition-colors"
                >
                  <UserCircle className="h-4 w-4" />
                  <span>Admin</span>
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-30 space-x-1 rounded-full border border-[#5D4037] bg-[#5D4037] px-3 py-1.5 text-sm font-medium text-white hover:bg-red-500 hover:text-white transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
                </div>
              )}

              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <button
                      className={cn(
                        "flex w-full items-center justify-between py-2 text-[#5D4037] font-medium",
                        activePage === item.name ? "underline" : "",
                      )}
                      onClick={() => {
                        toggleCategory()
                      }}
                    >
                      {item.name}
                      <ChevronDown className={cn("h-4 w-4 transition-transform", isCategoryOpen ? "rotate-180" : "")} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block py-2 text-[#5D4037] font-medium hover:underline",
                        activePage === item.name ? "underline" : "",
                      )}
                      onClick={() => {
                        setIsMenuOpen(false)
                      }}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Mobile Category Dropdown */}
                  {item.hasDropdown && isCategoryOpen && (
                    <div className="mt-2 ml-4 space-y-3 border-l border-gray-200 pl-4">
                      {categoryItems.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-start gap-3 rounded-md py-2 transition-all"
                          onClick={() => {
                            setIsMenuOpen(false)
                            setIsCategoryOpen(false)
                          }}
                        >
                          <div className="mt-1 text-[#5D4037]">{category.icon}</div>
                          <div>
                            <div className="font-medium text-[#5D4037]">{category.name}</div>
                            <p className="line-clamp-2 text-xs text-gray-500">{category.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  )
}