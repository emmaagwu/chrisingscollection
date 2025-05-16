import jwt from "jsonwebtoken"

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables")
}

const JWT_SECRET = process.env.JWT_SECRET

interface JwtPayload {
  id: string
  email: string
  iat?: number
  exp?: number
}

export function signToken(payload: Omit<JwtPayload, "iat" | "exp">) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, JWT_SECRET) as JwtPayload
}
