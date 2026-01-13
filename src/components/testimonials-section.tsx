import { TestimonialCard } from "./testimonial-card"

const testimonials = [
  {
    name: "María Rodríguez",
    role: "34 años",
    testimonial:
      "En 6 meses logré perder 15 kilos y ganar una confianza que no tenía hace años. Los entrenamientos son desafiantes pero siempre adaptados a mi nivel.",
    initials: "MR",
  },
  {
    name: "Carlos López",
    role: "54 años",
    testimonial:
      "El seguimiento online es increíble. Siempre está disponible para resolver dudas y ajustar el plan. Mi rendimiento mejoró un muchísimo.",
    initials: "CL",
  },
  {
    name: "Ana Silva",
    role: "41 años",
    testimonial:
      "No solo cambió mi físico, cambió mi mentalidad. Ahora tengo hábitos saludables que se mantienen en el tiempo. ¡Totalmente recomendado!",
    initials: "AS",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lo Que Dicen Mis Clientes</h2>
          <p className="text-xl text-gray-600">Historias reales de transformación y éxito</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
