import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BottomNav } from "@/components/bottom-nav"
import { BookOpen, Search, Users, GraduationCap } from "lucide-react"

export default function Home() {
  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-21%2017.45.41%20-%20A%20modern%20and%20sleek%20logo%20design%20for%20an%20educational%20app%20named%20_CampusCrack._%20The%20logo%20features%20a%20bold,%20dynamic%20font%20for%20the%20text%20_CampusCrack,_%20accompan-NWhskgffAeTbiCKsZ3KRgpH4haFMn8.webp"
            alt="CampusCrack Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>
      </header>

      <main className="flex-grow container p-4 space-y-6">
        <section>
          <h1 className="text-2xl font-bold mb-4">Welcome back!</h1>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Continue Learning</CardTitle>
                <CardDescription>Resume your last study session</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Resume</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Study Plan</CardTitle>
                <CardDescription>View your daily goals</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Plan
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-primary bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium">Learning</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-secondary bg-secondary/10 hover:bg-secondary/20 transition-colors"
            >
              <Search className="h-6 w-6 text-secondary" />
              <span className="text-secondary font-medium">Search</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-accent bg-accent/10 hover:bg-accent/20 transition-colors"
            >
              <Users className="h-6 w-6 text-accent" />
              <span className="text-accent font-medium">Groups</span>
            </Button>
            <Button
              variant="outline"
              className="h-auto py-4 flex flex-col gap-2 border-purple bg-purple/10 hover:bg-purple/20 transition-colors dark:border-purple dark:bg-purple/20 dark:hover:bg-purple/30"
            >
              <GraduationCap className="h-6 w-6 text-purple dark:text-purple" />
              <span className="text-purple dark:text-purple font-medium">Past Exams</span>
            </Button>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}

