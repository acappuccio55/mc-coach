"use client"

import { Button } from "@/components/ui/button"
import { Phone, Mail } from "lucide-react"

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  phone?: string
  email?: string
}

export function CTASection({
  title = "¿Listo Para Comenzar?",
  subtitle = "Encuentra todos mis enlaces, redes sociales y formas de contacto en un solo lugar.",
  buttonText = "Quiero Mi Plan Personalizado",
  phone = "+34 123 456 789",
  email = "hola@personaltrainer.com",
}: CTASectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h2>
        <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">{subtitle}</p>

        <div className="max-w-md mx-auto mb-8">
          <Button
            size="lg"
            className="w-full bg-white hover:bg-gray-100 text-emerald-700 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => window.open("https://linktr.ee/martincoppola", "_blank")}
          >
            Ver Todos Mis Enlaces
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span className="text-lg">{phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span className="text-lg">{email}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
