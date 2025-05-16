import { NextResponse } from "next/server"
import { verifyToken } from "@/utils/jwt"
import { cookies } from "next/headers"

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")

    if (!token) {
      return NextResponse.json({ authenticated: false })
    }

    // Verify the token
    const tokenValue = token.value
    verifyToken(tokenValue)
    
    // If we get here, the token is valid
    return NextResponse.json({ authenticated: true })
  } catch (error) {
    // Invalid or expired token
    if (error instanceof Error){
      console.error("Token verification error:", error.message)
    } else {
      console.error("The error is:", error)
    }
    return NextResponse.json({ authenticated: false })
  }
}