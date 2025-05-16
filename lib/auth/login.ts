import { prisma } from "../prisma/db"
import bcrypt from "bcryptjs"
import { signToken } from "@/utils/jwt"

export async function loginAdmin(email: string, password: string) {
  const admin = await prisma.admin.findUnique({ where: { email } })

  if (!admin || !(await bcrypt.compare(password, admin.password))) {
    throw new Error("Invalid credentials")
  }

  const token = signToken({ id: admin.id, email: admin.email })
  return token
}
