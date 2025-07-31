import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  initials: string
  rating?: number
}

export function TestimonialCard({ name, role, testimonial, initials, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-lg">
      <CardContent className="p-8">
        <div className="flex mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial}"</p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
            <span className="text-gray-600 font-semibold">{initials}</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}