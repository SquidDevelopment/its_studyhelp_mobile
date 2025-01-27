"use client"

import { Button } from "@/components/ui/button"
import { BottomNav } from "@/components/bottom-nav"
import { BookOpen, Video, PenTool, Brain, Lightbulb, Clock, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LearningPage() {
  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50">
        <h1 className="text-xl font-bold">Learning</h1>
      </header>

      <main className="flex-grow container p-4 space-y-6">
        <section>
          <h2 className="text-lg font-semibold mb-4">Choose Your Learning Method</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-primary bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">Flashcards</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-secondary bg-secondary/10 hover:bg-secondary/20 transition-colors"
            >
              <Video className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-medium">Video Lessons</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-accent bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <PenTool className="h-6 w-6 text-accent" />
              <span className="text-accent font-medium">Practice Tests</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-purple bg-purple/10 hover:bg-purple/20 transition-colors dark:border-purple dark:bg-purple/20 dark:hover:bg-purple/30"
              disabled
            >
              <Brain className="h-6 w-6 text-purple dark:text-purple" />
              <span className="text-purple dark:text-purple font-medium">AI Tutor</span>
              <span className="text-xs text-muted-foreground">Coming Soon</span>
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Last Topics</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Calculus: Limits and Continuity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    Last studied 2 days ago
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Resume <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">World War II: Major Battles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    Last studied yesterday
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Resume <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Python: Object-Oriented Programming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Clock className="mr-1 h-4 w-4" />
                    Last studied 3 days ago
                  </span>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Resume <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-4">Recommended for You</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Advanced Physics Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <Video className="mr-1 h-4 w-4" />
                    Video Series
                  </span>
                  <span className="flex items-center">
                    <Lightbulb className="mr-1 h-4 w-4" />
                    Based on your interests
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium">Literature Analysis Techniques</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    Flashcard Set
                  </span>
                  <span className="flex items-center">
                    <Lightbulb className="mr-1 h-4 w-4" />
                    Popular in your group
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}

