"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/contexts/theme-context"
import { Moon, Sun, User, CreditCard } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  const { theme, toggleTheme } = useTheme()
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john.doe@example.com")
  const [subscriptionStatus, setSubscriptionStatus] = useState("Premium")

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50">
        <h1 className="text-xl font-bold">Profile</h1>
      </header>

      <main className="flex-grow container p-4 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>Your personal details and subscription</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <User className="text-primary-foreground" />
              </div>
              <div>
                <p className="font-medium">{name}</p>
                <p className="text-sm text-muted-foreground">{email}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Subscription Status</p>
                <p className="text-sm text-muted-foreground">Your current plan</p>
              </div>
              <Badge variant="secondary" className="flex items-center">
                <CreditCard className="mr-1 h-3 w-3" />
                {subscriptionStatus}
              </Badge>
            </div>
            <Button variant="outline" className="w-full">
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your app preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="dark-mode">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">Toggle dark mode on or off</p>
              </div>
              <Switch id="dark-mode" checked={theme === "dark"} onCheckedChange={toggleTheme} />
            </div>
            <div className="text-sm text-muted-foreground flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <div className="flex-grow h-0.5 bg-border rounded-full" />
              <Moon className="h-4 w-4" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>App Information</CardTitle>
            <CardDescription>Details about CampusCrack</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Version: 1.0.0</p>
            <Button variant="link" className="p-0 h-auto">
              Terms of Service
            </Button>
            <Button variant="link" className="p-0 h-auto">
              Privacy Policy
            </Button>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}

