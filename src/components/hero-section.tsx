"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { WHATSAPP_LINK } from "./constants"

const ctas = [
  { label: "Quero reduzir minha conta de luz", primary: true },
  { label: "Falar com um especialista", primary: false },
]

// anima o container inteiro
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      duration: 0.7,
      ease: "easeOut",
    },
  },
}

// anima cada bloco interno (título, texto, CTA, etc.)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-title"
      className="
        relative flex min-h-screen items-center justify-center 
        overflow-hidden px-6 py-16 
        md:justify-start md:px-12 md:py-24
      "
    >
      {/* Fundo verde com degradê suave */}
      <div
        className="
          absolute inset-0 -z-20 
          bg-[var(--green-light)]
          bg-[radial-gradient(circle_at_70%_120%,rgba(255,255,255,0.4)_0%,var(--green-light)_70%)]
        "
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* COLUNA ESQUERDA – Texto + CTAs */}
          <div className="max-w-2xl text-center md:text-left">
            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="
                mt-4 font-extrabold leading-tight tracking-tight text-[#0c1c3b]
                text-[clamp(2.4rem,6vw,4.2rem)]
              "
            >
              Economize até{" "}
              <span className="text-[var(--accent-orange)]">90%</span>{" "}
              na sua conta de luz com Energia Solar.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-relaxed text-[#0c1c3b]/80 lg:text-xl"
            >
              Soluções on-grid residenciais e empresariais, com especialistas,
              garantia total e economia desde o primeiro mês.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-start"
            >
              {ctas.map(({ label, primary }) => (
                <motion.a
                  key={label}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.94 }}
                  className={`
                    group relative flex items-center gap-3 rounded-full px-8 py-4 
                    font-semibold transition-all duration-300 select-none
                    ${
                      primary
                        ? "bg-gradient-to-br from-[#46c956] to-[#3ab54a] text-black shadow-lg hover:shadow-green-400/40"
                        : "bg-transparent text-black border-2 border-green-900/30 hover:bg-green-900/80 hover:text-white hover:border-green-900/80"
                    }
                  `}
                >
                  {label}
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              ))}
            </motion.div>

          </div>

          {/* COLUNA DIREITA – Imagem completa no fundo + logo por cima */}
            <motion.div
              variants={itemVariants}
              className="relative mx-auto h-[480px] w-full max-w-xl overflow-hidden rounded-[2.5rem]
                        shadow-[0_24px_60px_rgba(0,0,0,0.25)] ring-1 ring-white/40 ml-30"
            >

              {/* Imagem como background */}
              <Image
                src="/hero_section.jpg"
                alt="Painéis solares instalados"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay suave para contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* LOGO POR CIMA */}
              <div className="absolute top-45 left-1/2 -translate-x-1/2">
                <div className="relative h-28 w-56 sm:h-48 sm:w-96">
                  <Image
                    src="/usisol_logo.png"
                    alt="Logo UsiSol"
                    fill
                    className="object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
                  />
                </div>
              </div>
            </motion.div>
        </div>
      </motion.div>

      {/* Indicador de scroll */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center text-[11px] text-black/60">
        <span>Role para entender como funciona</span>
        <div className="mt-2 h-8 w-px animate-pulse bg-black/30" />
      </div>
    </section>
  )
}
