"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search-results?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50">
        <h1 className="text-xl font-bold">Search</h1>
      </header>

      <main className="flex-grow container p-4">
        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <Input
            type="search"
            placeholder="Search topics, courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </form>

        <p className="text-center text-muted-foreground">Enter a search query to find topics and courses.</p>
      </main>

      <BottomNav />
    </div>
  )
}

