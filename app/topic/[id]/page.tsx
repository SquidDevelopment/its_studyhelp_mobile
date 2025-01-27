"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { BottomNav } from "@/components/bottom-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, PenTool, ArrowLeft } from "lucide-react"

interface TopicContent {
  id: string
  title: string
  description: string
  course: string
  type: "flashcard" | "video" | "practice"
}

interface Topic {
  id: string
  title: string
  description: string
  course: string
  contents: TopicContent[]
}

export default function TopicPage() {
  const params = useParams()
  const router = useRouter()
  const [topic, setTopic] = useState<Topic | null>(null)

  useEffect(() => {
    // In a real app, this would be an API call
    const fetchTopic = async () => {
      // Simulating an API call with mock data
      const mockTopic: Topic = {
        id: params.id as string,
        title: "Calculus 101",
        description: "A comprehensive introduction to calculus concepts and applications.",
        course: "Mathematics",
        contents: [
          {
            id: "1",
            title: "Introduction to Limits",
            description: "Understanding the concept of limits in calculus.",
            course: "Mathematics",
            type: "video",
          },
          {
            id: "2",
            title: "Derivatives Basics",
            description: "Learn the fundamentals of derivatives and their applications.",
            course: "Mathematics",
            type: "practice",
          },
          {
            id: "3",
            title: "Integral Calculus",
            description: "Explore the principles of integral calculus and its uses.",
            course: "Mathematics",
            type: "flashcard",
          },
        ],
      }
      setTopic(mockTopic)
    }

    fetchTopic()
  }, [params.id])

  const getIcon = (type: TopicContent["type"]) => {
    switch (type) {
      case "flashcard":
        return <BookOpen className="h-4 w-4" />
      case "video":
        return <Video className="h-4 w-4" />
      case "practice":
        return <PenTool className="h-4 w-4" />
    }
  }

  if (!topic) {
    return <div>Loading...</div>
  }

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50 flex items-center">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-bold ml-2">{topic.title}</h1>
      </header>

      <main className="flex-grow container p-4 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center justify-between">
              {topic.title}
              <Badge variant="secondary">{topic.course}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{topic.description}</p>
          </CardContent>
        </Card>

        <h2 className="text-lg font-semibold mt-6 mb-2">Topic Contents</h2>
        {topic.contents.map((content) => (
          <Card
            key={content.id}
            className="cursor-pointer hover:bg-secondary/10 transition-colors"
            onClick={() => router.push(`/content/${content.id}`)}
          >
            <CardHeader>
              <CardTitle className="text-md flex items-center justify-between">
                {content.title}
                <Badge variant="outline" className="flex items-center">
                  {getIcon(content.type)}
                  <span className="ml-1 capitalize">{content.type}</span>
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{content.description}</p>
            </CardContent>
          </Card>
        ))}
      </main>

      <BottomNav />
    </div>
  )
}

