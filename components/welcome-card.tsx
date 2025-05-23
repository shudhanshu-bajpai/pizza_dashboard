import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { User } from "next-auth"

interface WelcomeCardProps {
  user: User
}

export default function WelcomeCard({ user }: WelcomeCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user.image || ""} alt={user.name || ""} />
            <AvatarFallback className="text-lg">{user.name?.charAt(0) || "U"}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-2xl font-bold">Hello, {user.name}!</h2>
            <CardDescription className="text-base">Welcome back to your pizza dashboard</CardDescription>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-orange-600">24</div>
            <p className="text-sm text-muted-foreground">Total Orders Today</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-green-600">18</div>
            <p className="text-sm text-muted-foreground">Completed Orders</p>
          </div>
          <div className="rounded-lg border p-4">
            <div className="text-2xl font-bold text-blue-600">6</div>
            <p className="text-sm text-muted-foreground">Pending Orders</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
