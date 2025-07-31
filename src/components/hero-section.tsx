import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  buttonText: string
  badgeText?: string
  backgroundImage?: string
}

export function HeroSection({
  title,
  subtitle,
  buttonText,
  badgeText = "Personal Trainer Certificado",
  backgroundImage = "/placeholder.svg?height=1080&width=1920&text=Entrenamiento+fitness+inspirador",
}: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Entrenamiento fitness inspirador"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
          {badgeText}
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">{title}</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">{subtitle}</p>
        <Link href="/entrenamiento">
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  )
}
