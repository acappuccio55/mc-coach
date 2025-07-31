interface FooterProps {
  year?: number
  companyName?: string
}

export function Footer({ year = 2025, companyName = "Personal Trainer" }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {year} {companyName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
