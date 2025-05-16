import { NextResponse } from "next/server"
import { loginAdmin } from "@/lib/auth/login"
import { cookies } from "next/headers"


export async function POST(req: Request) {
  const { email, password } = await req.json()

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 })
  }

  try {
    const token = await loginAdmin(email, password)

    
    const cookieStore = await cookies()
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })

    return NextResponse.json({ message: "Login successful" })
  } catch (err) {
    if (err instanceof Error){
      console.error("Login error:", err.message)
    } else {
      console.error("Error while login:", err)
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }
}
