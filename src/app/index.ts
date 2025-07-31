export interface Service {
  icon: unknown
  title: string
  description: string
  features: string[]
  iconColor: string
  iconBgColor: string
  iconBgHoverColor: string
}

export interface Testimonial {
  name: string
  role: string
  testimonial: string
  initials: string
  rating?: number
}

export interface ContactInfo {
  phone: string
  email: string
}