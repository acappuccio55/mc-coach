"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Users,
  Heart,
  Zap,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ImageCarousel } from "@/components/image-carousel";
import { EntrenamientoHeader } from "@/components/EntrenamientoHeader";
import { MetodologiaSeccion } from "@/components/MetodologiaSeccion";

export default function EntrenamientoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
      <EntrenamientoHeader />

      {/* Hero Section */}

      {/* Hero de Pagina Secundaria con Imagen de Fondo */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden flex items-center justify-center">
        {/* Capa de Imagen de Fondo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/grupo2.jpg"
            alt="Entrenamiento grupal"
            fill
            className="object-cover object-top brightness-[0.40]"
            priority
          />
        </div>

        {/* Contenido sobre la imagen */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Entrenamiento{" "}
            <span className="block text-emerald-400">Personalizado</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed">
            Descubrí mi metodología única diseñada para maximizar tus resultados
            y transformar tu estilo de vida.
          </p>

          {/* Contenedor de Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-10 py-7 text-lg shadow-lg transition-all w-full sm:w-auto border-none"
              onClick={() =>
                window.open("https://wa.me/541163322871", "_blank")
              }
            >
              Agendá Tu Evaluación Gratuita
            </Button>

            <Link
              href="https://www.instagram.com/martin.coppolaok"
              target="_blank"
              className="w-full sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 font-bold px-10 py-7 text-lg w-full sm:w-auto bg-transparent"
              >
                Ver Método en Instagram
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <MetodologiaSeccion />

      {/* Tipos de Entrenamiento */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tipos de Entrenamiento
            </h2>
            <p className="text-xl text-gray-600">
              Variedad y especialización para todos los objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <Zap className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Fuerza y Potencia
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Desarrollo de fuerza máxima y potencia explosiva
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Levantamiento de pesas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Entrenamiento funcional
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Ejercicios pliométricos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Cardio y Resistencia
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Mejora tu capacidad cardiovascular y resistencia
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    HIIT (Alta intensidad)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Cardio de baja intensidad
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Circuitos metabólicos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Movilidad y Flexibilidad
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Prevención de lesiones y mejora del rango de movimiento
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Estiramientos dinámicos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Yoga y pilates
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Liberación miofascial
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Entrenamiento Funcional
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Movimientos que mejoran tu vida diaria
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Movimientos multiarticulares
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Entrenamiento con peso corporal
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Ejercicios de estabilidad
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
                  <Clock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Rehabilitación
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Recuperación de lesiones y fortalecimiento específico
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Ejercicios correctivos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Fortalecimiento progresivo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Prevención de lesiones
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-indigo-200 transition-colors">
                  <Star className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Entrenamiento Deportivo
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Especialización para deportes específicos
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Preparación física específica
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Técnica deportiva
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    Periodización del entrenamiento
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Por Qué Elegir Mi Método?
            </h2>
            <p className="text-xl text-gray-600">
              Resultados comprobados y experiencia profesional
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/carousel/15.jpg"
                alt="Beneficios del entrenamiento personalizado"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Resultados 3x Más Rápidos
                  </h3>
                  <p className="text-gray-600">
                    El entrenamiento personalizado acelera significativamente el
                    progreso comparado con rutinas genéricas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Prevención de Lesiones
                  </h3>
                  <p className="text-gray-600">
                    Técnica correcta y progresión adecuada minimizan el riesgo
                    de lesiones durante el entrenamiento.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Motivación Constante
                  </h3>
                  <p className="text-gray-600">
                    Acompañamiento personal y ajustes continuos mantienen alta
                    tu motivación y compromiso.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Flexibilidad Total
                  </h3>
                  <p className="text-gray-600">
                    Horarios adaptables y entrenamientos que se ajustan a tu
                    estilo de vida y disponibilidad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Educación Continua
                  </h3>
                  <p className="text-gray-600">
                    Aprenderás sobre ejercicio, nutrición y hábitos saludables
                    para mantener resultados a largo plazo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-center">
        <h2 className="text-4xl text-white font-bold mb-6">
          Listo/a Para Empezar?
        </h2>
        <Button
          size="lg"
          className="bg-white text-emerald-700 font-bold"
          onClick={() => window.open("https://wa.me/541163322871", "_blank")}
        >
          Agendá Tu Evaluación Gratuita
        </Button>
      </section>
    </div>
  );
}
