import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import Footer from "../components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "UsiSol | Energia Solar para Residências e Empresas",
  description:
    "Economize até 90% na sua conta de luz com a UsiSol. Oferecemos soluções completas em energia solar com projetos personalizados, equipamentos de ponta e suporte total. Peça seu orçamento!",
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="bg-black">
      <body
        className={`
          flex flex-col 
          ${inter.variable} 
          ${montserrat.variable} 
          ${GeistMono.variable}
        `}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
