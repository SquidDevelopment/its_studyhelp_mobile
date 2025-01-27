"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, PenTool, ArrowLeft, Layers } from "lucide-react"

interface Content {
  id: string
  title: string
  description: string
  course: string
  type: "flashcard" | "video" | "practice"
  content: string
  topicId: string
}

export default function ContentPage() {
  const params = useParams()
  const router = useRouter()
  const [content, setContent] = useState<Content | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchContent = async () => {
      // Simulating an API call with mock data
      const mockContent: Content = {
        id: params.id as string,
        title: "Introduction to Calculus",
        description: "Learn the basics of calculus, including limits and derivatives.",
        course: "Mathematics",
        type: "video",
        content:
          "This is a placeholder for the actual video content. In a real application, this would be an embedded video player or a more detailed text content depending on the type of material.",
        topicId: "calculus101",
      }
      setContent(mockContent)
    }

    fetchContent()
  }, [params.id])

  const getIcon = (type: Content["type"]) => {
    switch (type) {
      case "flashcard":
        return <BookOpen className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "practice":
        return <PenTool className="h-4 w-4" />
    }
  }

  if (!content) {
    return <div>Loading...</div>
  }

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50 flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold">{content.title}</h1>
        <Button variant="outline" size="sm" onClick={() => router.push(`/topic/${content.topicId}`)}>
          <Layers className="h-4 w-4 mr-2" />
          View Topic
        </Button>
      </header>

      <main className="flex-grow container p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              {content.title}
              <Badge variant="secondary">{content.course}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-2">{content.description}</p>
            <Badge variant="outline" className="flex items-center w-fit">
              {getIcon(content.type)}
              <span className="ml-1 capitalize">{content.type}</span>
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <p>{content.content}</p>
          </CardContent>
        </Card>
      </main>

      <BottomNav />
    </div>
  )
}

