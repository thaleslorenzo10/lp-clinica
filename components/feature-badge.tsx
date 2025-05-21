import { Badge } from "@/components/ui/badge"

interface FeatureBadgeProps {
  text: string
  color?: "blue" | "green" | "purple" | "orange"
}

export function FeatureBadge({ text, color = "blue" }: FeatureBadgeProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
  }

  return <Badge className={`px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[color]}`}>{text}</Badge>
}
