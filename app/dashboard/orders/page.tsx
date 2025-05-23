import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import DashboardLayout from "@/components/dashboard-layout"
import OrdersTable from "@/components/orders-table"

export default async function OrdersPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Pizza Orders</h1>
          <p className="text-muted-foreground">Manage and track all pizza orders in your system.</p>
        </div>
        <OrdersTable />
      </div>
    </DashboardLayout>
  )
}
