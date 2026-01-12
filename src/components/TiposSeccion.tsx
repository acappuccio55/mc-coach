import { Card, CardContent } from "@/components/ui/card"
import { Zap, Heart, Shield, Users, Clock, Star, CheckCircle } from "lucide-react"

export function TiposSeccion() {
  const tipos = [
    { titulo: "Fuerza y Potencia", icon: Zap, color: "bg-red-100", iconColor: "text-red-600", desc: "Desarrollo de fuerza maxima y potencia explosiva" },
    { titulo: "Cardio y Resistencia", icon: Heart, color: "bg-blue-100", iconColor: "text-blue-600", desc: "Mejora tu capacidad cardiovascular" },
    { titulo: "Movilidad", icon: Shield, color: "bg-purple-100", iconColor: "text-purple-600", desc: "Prevencion de lesiones y rango de movimiento" },
    { titulo: "Funcional", icon: Users, color: "bg-green-100", iconColor: "text-green-600", desc: "Movimientos que mejoran tu vida diaria" },
    { titulo: "Rehabilitacion", icon: Clock, color: "bg-yellow-100", iconColor: "text-yellow-600", desc: "Recuperacion y fortalecimiento especifico" },
    { titulo: "Deportivo", icon: Star, color: "bg-indigo-100", iconColor: "text-indigo-600", desc: "Especializacion para deportes especificos" }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tipos de Entrenamiento</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tipos.map((t, i) => (
          <Card key={i} className="group hover:shadow-xl transition-all border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className={`w-16 h-16 ${t.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <t.icon className={`w-8 h-8 ${t.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.titulo}</h3>
              <p className="text-gray-600 mb-4">{t.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}