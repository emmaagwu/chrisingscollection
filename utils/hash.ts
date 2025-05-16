import bcrypt from "bcryptjs"

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export function comparePasswords(input: string, storedHash: string) {
  return bcrypt.compare(input, storedHash)
}
