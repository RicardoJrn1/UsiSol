"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { WHATSAPP_LINK } from "./constants"

interface Project {
  category: string
  title: string
  description: string
  imageUrl: string
}

const projects: Project[] = [
  {
    category: "Residencial",
    title: "Residência em Condomínio",
    description:
      "Sistema de 5.4 kWp com 12 painéis, gerando economia e sustentabilidade para a família.",
    imageUrl: "/portfolio_1.jpg",
  },
  {
    category: "Comercial",
    title: "Supermercado Central",
    description:
      "Projeto de 50 kWp para redução de custos operacionais e fortalecimento da marca.",
    imageUrl: "/portfolio_2.jpg",
  },
  {
    category: "Residencial",
    title: "Casa de Campo",
    description:
      "Instalação de 8.2 kWp em telhado cerâmico, garantindo autonomia energética.",
    imageUrl: "/portfolio_3.jpg",
  },
]

const AUTOPLAY_DELAY = 3000 // 3 segundos

const fade: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const total = projects.length

  const handleNext = () => setCurrent((prev) => (prev + 1) % total)
  const handlePrev = () => setCurrent((prev) => (prev - 1 + total) % total)

  const currentProject = projects[current]

  // autoplay com pausa no hover
  useEffect(() => {
    if (isHovered) return

    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total)
    }, AUTOPLAY_DELAY)

    return () => clearInterval(id)
  }, [isHovered, total])

  return (
    <section
      data-header-theme="light"
      className="bg-[var(--primary-blue)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* TÍTULO */}
        <motion.div
          className="relative mx-auto max-w-2xl text-center"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p
            variants={itemVariants}
            className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            PORTFÓLIO
          </motion.p>

          {/* TEXTO DE FUNDO (PORTFOLIO) */}
          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="
              pointer-events-none select-none
              absolute 
              top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              text-[clamp(5rem,20vw,10rem)]
              font-black tracking-tighter leading-none
              text-white/10
              whitespace-nowrap
              z-0
            "
          >
            PORTFOLIO
          </motion.p>

          <h2 className="relative z-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Alguns projetos instalados pela UsiSol
          </h2>
          <p className="relative z-10 mt-6 text-lg leading-8 text-white/80">
            Soluções instaladas em residências, empresas e indústrias.
          </p>
        </motion.div>

        {/* CARROSSEL */}
        <motion.div
          className="relative mx-auto mt-16 max-w-4xl"
          variants={fade}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.45)] ring-1 ring-white/20">
            {/* Imagem */}
            <motion.div
              key={currentProject.title}
              className="relative h-[320px] w-full sm:h-[420px]"
              initial={{ opacity: 0.8, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Image
                src={currentProject.imageUrl}
                alt={currentProject.title}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* PAINEL FOSCO — ATIVA SÓ NO HOVER DO PAINEL */}
            <div className="absolute inset-0 flex items-end pointer-events-none">
              <div className="relative mb-6 ml-6 max-w-xl pointer-events-auto group">
                {/* Fundo fosco */}
                <div
                  className="
                    absolute inset-0 rounded-2xl bg-black/35 backdrop-blur-md
                    border border-white/15
                    transition-all duration-500 ease-out
                    group-hover:bg-black/55 group-hover:border-white/25
                  "
                />

                {/* Conteúdo */}
                <div className="relative px-5 py-3 sm:px-6 sm:py-4 transition-all duration-500 ease-out group-hover:py-6">
                  {/* Categoria */}
                  <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white/90">
                    {currentProject.category}
                  </span>

                  {/* Título */}
                  <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                    {currentProject.title}
                  </h3>

                  {/* Texto e botão — só aparecem no hover do painel */}
                  <div
                    className="
                      mt-2 max-h-0 overflow-hidden opacity-0
                      transition-all duration-500 ease-out
                      group-hover:max-h-48 group-hover:opacity-100
                    "
                  >
                    <p className="text-sm leading-relaxed text-white/85">
                      {currentProject.description}
                    </p>

                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        mt-4 inline-flex items-center gap-2 rounded-full
                        bg-[var(--accent-orange)] px-5 py-2.5 text-xs sm:text-sm
                        font-semibold text-[var(--primary-blue)]
                        shadow-lg transition-transform duration-200
                        hover:scale-[1.03]
                      "
                    >
                      Quero um projeto parecido
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SETA ESQUERDA */}
            <button
              onClick={handlePrev}
              className="
                absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 
                text-white shadow-lg backdrop-blur-sm transition hover:bg-black/70
              "
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* SETA DIREITA */}
            <button
              onClick={handleNext}
              className="
                absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 
                text-white shadow-lg backdrop-blur-sm transition hover:bg-black/70
              "
              aria-label="Próximo projeto"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* DOTS */}
          <div className="mt-6 flex justify-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`
                  h-2.5 rounded-full transition-all
                  ${
                    index === current
                      ? "w-6 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-white/70"
                  }
                `}
                aria-label={`Ir para o projeto ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
