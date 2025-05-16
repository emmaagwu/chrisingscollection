"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

// Define the auth context type
type AuthContextType = {
  isLoggedIn: boolean
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  loading: true,
  login: async () => ({ success: false }),
  logout: async () => {},
})

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  // Check if user is logged in on initial load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Check if we have an active session
        const res = await fetch("/api/auth/check")
        const data = await res.json()
        setIsLoggedIn(data.authenticated)
      } catch (error) {
        console.error("Auth check failed:", error)
        setIsLoggedIn(false)
      } finally {
        setLoading(false)
      }
    }

    checkAuthStatus()
  }, [])

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        return { success: false, error: data?.error || "Login failed" }
      }

      // Update logged in state
      setIsLoggedIn(true)
      return { success: true }
    } catch (err) {
      console.error("Login error:", err)
      return { success: false, error: "An unexpected error occurred" }
    }
  }

  // Logout function
  const logout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
      })
      setIsLoggedIn(false)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}