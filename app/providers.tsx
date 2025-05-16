
"use client"

import { ReactNode } from 'react'
import { WishlistProvider } from './context/wishlist-context'
import { AuthProvider } from './context/auth-context'

// This component wraps our app with all necessary providers
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </AuthProvider>
  )
}