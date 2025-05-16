// "use client"
// import { useState } from "react"

// interface LoginModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onSubmit: (email: string, password: string) => void
// }

// export default function LoginModal({ isOpen, onClose, onSubmit }: LoginModalProps) {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   if (!isOpen) return null

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     onSubmit(email, password) // Send credentials to parent
//   }

//   return (
//     <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
//       <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
//         <h2 className="text-lg font-semibold mb-4">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full mb-3 rounded border border-gray-300 px-3 py-2 focus:border-[#5D4037] focus:outline-none"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#5D4037] focus:outline-none"
//           />
//           <button
//             type="submit"
//             className="mt-4 w-full rounded bg-[#683D0D] px-4 py-2 text-white hover:bg-[#5D4037]"
//           >
//             Login
//           </button>
//         </form>
//         <button
//           className="mt-4 w-full text-center text-sm text-red-500"
//           onClick={onClose}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   )
// }



"use client"
import { useState } from "react"
import { useAuth } from "@/app/context/auth-context" // Import the auth context

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth() // Use auth context

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const result = await login(email, password)

      if (result.success) {
        // Clear the form and close modal on success
        setEmail("")
        setPassword("")
        onClose()
      } else {
        setError(result.error || "Login failed")
      }
    } catch (err) {
      if (err instanceof Error){
        console.log("Login error:", err)
      }
      setError("An unexpected error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 pointer-events-none">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg pointer-events-auto">
        <h2 className="text-lg font-semibold mb-4">Admin Login</h2>

        {error && (
          <div className="mb-4 rounded bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
            className="w-full mb-3 rounded border border-gray-300 px-3 py-2 focus:border-[#5D4037] focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={loading}
            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-[#5D4037] focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded bg-[#683D0D] px-4 py-2 text-white hover:bg-[#5D4037] disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button
          className="mt-4 w-full text-center text-sm text-[#683D0D]"
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}