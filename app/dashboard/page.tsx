import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import DashboardLayout from "@/components/dashboard-layout"
import WelcomeCard from "@/components/welcome-card"

export default async function DashboardPage() {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user) {
      redirect("/")
    }

    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's an overview of your account.</p>
          </div>
          <WelcomeCard user={session.user} />
        </div>
      </DashboardLayout>
    )
  } catch (error) {
    console.error("Dashboard error:", error)
    redirect("/")
  }
}
