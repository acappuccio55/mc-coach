import { HeroSection } from "../components/hero-section"
import { ServicesSection } from "../components/service-section"
import { TestimonialsSection } from "../components/testimonials-section"
import { CTASection } from "../components/cta-section"
import { Footer } from "../components/footer"

export default function PersonalTrainerPageModular() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title={
          <>
            Transforma Tu
            <span className="block text-emerald-400">Cuerpo y Mente</span>
          </>
        }
        subtitle="Alcanzá tus objetivos fitness con entrenamientos personalizados y un seguimiento profesional"
        buttonText="Comenzá tu Transformación"
      />

      <ServicesSection />

      <TestimonialsSection />

      <CTASection />

      <Footer />
    </div>
  )
}