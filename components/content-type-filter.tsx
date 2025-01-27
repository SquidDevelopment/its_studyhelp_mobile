import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Video, PenTool } from "lucide-react"

interface ContentTypeFilterProps {
  onFilterChange: (types: string[]) => void
}

interface FilterOption {
  type: string
  icon: React.ReactNode
  label: string
  color: string
}

const filterOptions: FilterOption[] = [
  { type: "flashcard", icon: <BookOpen className="h-4 w-4" />, label: "Flashcards", color: "blue" },
  { type: "video", icon: <Video className="h-4 w-4" />, label: "Videos", color: "green" },
  { type: "practice", icon: <PenTool className="h-4 w-4" />, label: "Practice", color: "orange" },
]

export function ContentTypeFilter({ onFilterChange }: ContentTypeFilterProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>(filterOptions.map((option) => option.type))

  const toggleFilter = (type: string) => {
    setActiveFilters((prev) => {
      const newFilters = prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
      onFilterChange(newFilters)
      return newFilters
    })
  }

  return (
    <div className="flex flex-wrap gap-2">
      {filterOptions.map((option) => (
        <Button
          key={option.type}
          variant="outline"
          className={`flex items-center gap-2 transition-all ${
            activeFilters.includes(option.type)
              ? `border-2 border-${option.color}-500 bg-${option.color}-100 text-${option.color}-700`
              : `border border-gray-300 bg-white text-gray-700`
          }`}
          onClick={() => toggleFilter(option.type)}
        >
          {option.icon}
          {option.label}
        </Button>
      ))}
    </div>
  )
}

