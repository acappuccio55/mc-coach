import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Martín Coppola - Personal Trainer",
  description:
    "Transforma tu cuerpo y mente con entrenamientos personalizados. Personal trainer certificado con seguimiento profesional y planes nutricionales.",
  keywords: "personal trainer, fitness, entrenamiento personalizado, nutrición, gimnasio, ejercicio",
  authors: [{ name: "Martín Coppola" }],
  creator: "Martín Coppola",
  openGraph: {
    title: "Martín Coppola - Personal Trainer",
    description: "Transforma tu cuerpo y mente con entrenamientos personalizados",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Coppola - Personal Trainer",
    description: "Transforma tu cuerpo y mente con entrenamientos personalizados",
  },
  icons: {
    icon: [
      { url: "/icon01.png", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
