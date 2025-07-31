import { ServiceCard } from "./service-card"
import { Dumbbell, Apple, Smartphone } from "lucide-react"

const services = [
  {
    icon: Dumbbell,
    title: "Entrenamiento Personalizado",
    description:
      "Rutinas adaptadas a tu nivel, objetivos y disponibilidad. Cada sesión está diseñada para maximizar tus resultados.",
    features: ["Evaluación inicial completa", "Rutinas personalizadas", "Seguimiento semanal"],
    iconColor: "text-emerald-600",
    iconBgColor: "bg-emerald-100",
    iconBgHoverColor: "bg-emerald-200",
  },
  {
    icon: Apple,
    title: "Asesoría Nutricional",
    description: "Planes alimenticios balanceados que complementan tu entrenamiento y aceleran tus resultados.",
    features: ["Plan nutricional personalizado", "Recetas saludables", "Ajustes según progreso"],
    iconColor: "text-orange-600",
    iconBgColor: "bg-orange-100",
    iconBgHoverColor: "bg-orange-200",
  },
  {
    icon: Smartphone,
    title: "Seguimiento Online",
    description: "Acompañamiento constante a través de la app. Monitoreo de progreso y ajustes en tiempo real.",
    features: ["App móvil exclusiva", "Chat directo conmigo", "Reportes de progreso"],
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
    iconBgHoverColor: "bg-blue-200",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mis Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Programas diseñados específicamente para ayudarte a alcanzar tus metas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
