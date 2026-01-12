import Image from "next/image"

export function MetodologiaSeccion() {
  const pasos = [
    {
      id: 1,
      titulo: "Evaluacion Inicial Completa",
      desc: "Analisis de composicion corporal, pruebas de fuerza, resistencia y flexibilidad.",
      color: "bg-emerald-100",
      textColor: "text-emerald-600"
    },
    {
      id: 2,
      titulo: "Diseño del Plan Personalizado",
      desc: "Creacion de rutinas especificas basadas en tus resultados y disponibilidad.",
      color: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      id: 3,
      titulo: "Seguimiento y Ajustes",
      desc: "Monitoreo semanal del progreso con ajustes continuos para optimizar resultados.",
      color: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Mi Metodología</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Un enfoque científico y personalizado que se adapta a tu estilo de vida</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {pasos.map((paso) => (
              <div key={paso.id} className="flex gap-4">
                <div className={`w-12 h-12 ${paso.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className={`${paso.textColor} font-bold`}>{paso.id}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <Image src="/7.jpg" alt="Metodologia" width={500} height={600} className="rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}