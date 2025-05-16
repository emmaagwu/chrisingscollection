import { prisma } from "./db"
import { hashPassword } from "@/utils/hash"



async function main() {
  const hashedPassword = await hashPassword("admin123")

  await prisma.admin.create({
    data: {
      email: "admin@example.com",
      password: hashedPassword,
      name: "Super Admin",
    },
  })

  console.log("Admin created")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
