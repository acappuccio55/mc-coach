import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dumbbell, Apple, Smartphone, Star, Phone, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PersonalTrainerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Image01.jpg"
            alt="Entrenamiento fitness inspirador"
            fill
            className="object-cover object-center brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Personal Trainer Certificado
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforma Tu
            <span className="block text-emerald-400">Cuerpo y Mente</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Alcanza tus objetivos fitness con entrenamientos personalizados y un seguimiento profesional
          </p>
          <Link href="/entrenamiento">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 text-lg">
              Comienza Tu Transformación
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mis Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Programas diseñados específicamente para ayudarte a alcanzar tus metas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Entrenamiento Personalizado */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Dumbbell className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrenamiento Personalizado</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Rutinas adaptadas a tu nivel, objetivos y disponibilidad. Cada sesión está diseñada para maximizar tus
                  resultados.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Evaluación inicial completa</li>
                  <li>• Rutinas personalizadas</li>
                  <li>• Seguimiento semanal</li>
                </ul>
              </CardContent>
            </Card>

            {/* Nutrición */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
                  <Apple className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Asesoría Nutricional</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Planes alimenticios balanceados que complementan tu entrenamiento y aceleran tus resultados.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Plan nutricional personalizado</li>
                  <li>• Recetas saludables</li>
                  <li>• Ajustes según progreso</li>
                </ul>
              </CardContent>
            </Card>

            {/* Seguimiento Online */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Smartphone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Seguimiento Online</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Acompañamiento constante a través de Whatsapp. Monitoreo de progreso y ajustes en tiempo real.
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Chat directo conmigo</li>
                  <li>• Reportes de progreso</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section*/}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Lo que dicen mis clientes</h2>
            <p className="text-xl text-gray-600">Historias reales de transformación y éxito</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "En 6 meses logré perder 15 kilos y ganar una confianza que no tenía hace años. Los entrenamientos son
                  desafiantes pero siempre adaptados a mi nivel."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">María Rodríguez</p>
                    <p className="text-sm text-gray-500">Ejecutiva, 34 años</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">"El seguimiento online es increíble. Siempre está disponible para resolver dudas y ajustar el plan. Mi rendimiento mejoró un 200%."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">CL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Carlos López</p>
                    <p className="text-sm text-gray-500">Ingeniero, 28 años</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "No solo cambió mi físico, cambió mi mentalidad. Ahora tengo hábitos saludables que se mantienen en el
                  tiempo. ¡Totalmente recomendado!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Ana Silva</p>
                    <p className="text-sm text-gray-500">Doctora, 41 años</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> 

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo Para Comenzar?</h2>
          

          <div className="max-w-md mx-auto mb-8">
            <a
              href="https://wa.me/541163322871"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="w-full bg-white hover:bg-gray-100 text-emerald-700 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contactate Conmigo
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="text-lg">+54 11 6332 2871</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="text-lg">coppolamartin72@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              <a
                href="https://www.instagram.com/martin.coppolaok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:underline"
              >
                @martin.coppolaok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Personal Trainer. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}