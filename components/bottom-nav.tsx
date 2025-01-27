"use client"

import { Home, BookOpen, Search, Users, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Learning", href: "/learning", icon: BookOpen },
  { name: "Search", href: "/search", icon: Search },
  { name: "Groups", href: "/groups", icon: Users },
  { name: "Profile", href: "/profile", icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="flex justify-around">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center p-2 min-w-[4rem] ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-6 w-6" />
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

