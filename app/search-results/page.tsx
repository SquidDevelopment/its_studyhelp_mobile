"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, PenTool, ArrowLeft } from "lucide-react"
import { ContentTypeFilter } from "@/components/content-type-filter"
import { useRouter } from "next/navigation"

interface SearchResult {
  id: string
  title: string
  description: string
  course: string
  type: "flashcard" | "video" | "practice"
}

function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const query = searchParams.get("q")
  const [results, setResults] = useState<SearchResult[]>([])
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([])
  const [activeFilters, setActiveFilters] = useState<string[]>(["flashcard", "video", "practice"])

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchResults = async () => {
      // Simulating an API call with mock data
      const mockResults: SearchResult[] = [
        {
          id: "1",
          title: "Introduction to Calculus",
          description: "Learn the basics of calculus, including limits and derivatives.",
          course: "Mathematics",
          type: "video",
        },
        {
          id: "2",
          title: "World War II Major Battles",
          description: "Flashcards covering the major battles of World War II.",
          course: "History",
          type: "flashcard",
        },
        {
          id: "3",
          title: "Python Object-Oriented Programming",
          description: "Practice exercises on OOP concepts in Python.",
          course: "Computer Science",
          type: "practice",
        },
        {
          id: "4",
          title: "Cell Biology Fundamentals",
          description: "Video series covering the basics of cell biology.",
          course: "Biology",
          type: "video",
        },
        {
          id: "5",
          title: "Spanish Verb Conjugations",
          description: "Flashcards for practicing Spanish verb conjugations.",
          course: "Languages",
          type: "flashcard",
        },
      ]
      setResults(mockResults)
      setFilteredResults(mockResults)
    }

    if (query) {
      fetchResults()
    }
  }, [query])

  useEffect(() => {
    setFilteredResults(results.filter((result) => activeFilters.includes(result.type)))
  }, [activeFilters, results])

  const handleFilterChange = (newFilters: string[]) => {
    setActiveFilters(newFilters)
  }

  const getIcon = (type: SearchResult["type"]) => {
    switch (type) {
      case "flashcard":
        return <BookOpen className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "practice":
        return <PenTool className="h-4 w-4" />
    }
  }

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50">
        <div className="flex items-center justify-between mb-4">
          <Button variant="ghost" size="icon" onClick={() => router.push("/search")}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-xl font-bold">Search Results</h1>
          <div className="w-8"></div> {/* Spacer for alignment */}
        </div>
        <p className="text-sm text-muted-foreground mb-2">Showing results for: {query}</p>
        <ContentTypeFilter onFilterChange={handleFilterChange} />
      </header>

      <main className="flex-grow container p-4 space-y-4">
        {filteredResults.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center justify-between">
                {result.title}
                <Badge variant="secondary">{result.course}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{result.description}</p>
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="flex items-center">
                  {getIcon(result.type)}
                  <span className="ml-1 capitalize">{result.type}</span>
                </Badge>
                <Button size="sm" onClick={() => router.push(`/content/${result.id}`)}>
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        {filteredResults.length === 0 && <p className="text-center text-muted-foreground">No results found.</p>}
      </main>

      <BottomNav />
    </div>
  )
}

export default function SearchResultsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
}

