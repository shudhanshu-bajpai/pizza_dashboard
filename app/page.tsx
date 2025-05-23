import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import LoginPage from "@/components/login-page"

export default async function Home() {
  try {
    const session = await getServerSession(authOptions)

    if (session?.user) {
      redirect("/dashboard")
    }
  } catch (error) {
    console.error("Session error:", error)
    // Continue to show login page if there's an error
  }

  return <LoginPage />
}
