import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  iconColor: string
  iconBgColor: string
  iconBgHoverColor: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  iconColor,
  iconBgColor,
  iconBgHoverColor,
}: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
      <CardContent className="p-8 text-center">
        <div
          className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:${iconBgHoverColor} transition-colors`}
        >
          <Icon className={`w-8 h-8 ${iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="text-sm text-gray-500 space-y-2">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
