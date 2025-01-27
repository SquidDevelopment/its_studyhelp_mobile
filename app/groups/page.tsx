"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Users, Plus, Search, UserPlus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface Group {
  id: string
  name: string
  members: number
  nextMeeting?: string
}

const initialGroups: Group[] = [
  { id: "1", name: "Math Study Group", members: 8, nextMeeting: "Today, 3 PM" },
  { id: "2", name: "Physics Lab Partners", members: 4, nextMeeting: "Tomorrow, 2 PM" },
  { id: "3", name: "Literature Discussion", members: 12 },
  { id: "4", name: "Computer Science Project", members: 6, nextMeeting: "Friday, 4 PM" },
]

export default function GroupsPage() {
  const [groups, setGroups] = useState<Group[]>(initialGroups)
  const [searchQuery, setSearchQuery] = useState("")
  const [inviteCode, setInviteCode] = useState("")

  const filteredGroups = groups.filter((group) => group.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleJoinViaInvite = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your backend to validate the invite code
    // and add the user to the group. For this example, we'll just log the code.
    console.log(`Joining group with invite code: ${inviteCode}`)
    setInviteCode("")
    // You might want to show a success message or update the groups list here
  }

  return (
    <div className="pb-16 min-h-screen flex flex-col">
      <header className="p-4 border-b sticky top-0 bg-background z-50">
        <h1 className="text-xl font-bold mb-2">Study Groups</h1>
        <div className="flex gap-2">
          <Input
            type="search"
            placeholder="Search groups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button size="icon" variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="flex-grow container p-4 space-y-4">
        <div className="flex gap-2">
          <Button className="flex-grow">
            <Plus className="mr-2 h-4 w-4" /> Create New Group
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <UserPlus className="mr-2 h-4 w-4" /> Join via Invite
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Join Group via Invite Code</DialogTitle>
                <DialogDescription>Enter the invite code you received to join a private study group.</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleJoinViaInvite}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="invite-code" className="text-right">
                      Invite Code
                    </Label>
                    <Input
                      id="invite-code"
                      value={inviteCode}
                      onChange={(e) => setInviteCode(e.target.value)}
                      className="col-span-3"
                      placeholder="Enter invite code"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Join Group</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {filteredGroups.map((group) => (
          <Card key={group.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{group.name}</span>
                <Button variant="outline" size="sm">
                  Join
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span className="flex items-center">
                  <Users className="mr-1 h-4 w-4" />
                  {group.members} members
                </span>
                {group.nextMeeting && <span>Next meeting: {group.nextMeeting}</span>}
              </div>
            </CardContent>
          </Card>
        ))}
      </main>

      <BottomNav />
    </div>
  )
}

