"use client"

import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { WHATSAPP_LINK } from "./constants"

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const benefits = [
  "Projeto sob medida para sua conta de luz",
  "Instalação homologada e acompanhada do início ao fim",
  "Monitoramento e suporte pós-instalação",
]

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      aria-labelledby="hero-title"
      className="
        relative flex min-h-screen items-center justify-center 
        overflow-hidden px-6 py-14
        md:px-12 md:py-20
      "
    >
      {/* Fundo com degradê */}
      <div
        className="
          absolute inset-0 -z-20 
          bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.45)_0%,var(--green-light)_40%,#0b172b_100%)]
        "
      />

      {/* Glow suave ao fundo da imagem */}
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-[480px] w-[480px] translate-x-1/4 rounded-full bg-white/10 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl mx-auto"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          {/* COLUNA ESQUERDA – Conteúdo */}
          <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">

            <motion.h1
              id="hero-title"
              variants={itemVariants}
              className="
                font-extrabold leading-tight tracking-tight text-[#0c1c3b]
                text-[clamp(2.1rem,5.6vw,3.8rem)]
              "
            >
              Reduza em até{" "}
              <span className="text-[var(--accent-orange)]">90%</span> a sua
              conta de luz com energia solar.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 text-base sm:text-lg leading-relaxed text-[#0c1c3b]/80"
            >
              Cuidamos de tudo: estudo de viabilidade, projeto, instalação e
              homologação. Você só percebe a diferença na fatura do próximo mês.
            </motion.p>

            {/* Lista de benefícios */}
            <motion.ul
              variants={itemVariants}
              className="mt-6 space-y-3 text-sm sm:text-base text-[#0c1c3b]"
            >
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-[2px] h-5 w-5 flex-shrink-0 text-[#32b557]" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start"
            >
              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group inline-flex items-center justify-center gap-3 rounded-full 
                  bg-gradient-to-br from-[#46c956] to-[#3ab54a]
                  px-8 py-3 text-base font-semibold text-black shadow-lg 
                  shadow-emerald-600/40 transition-all duration-300
                "
              >
                Simular minha economia
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center rounded-full border-2 border-emerald-900/40 
                  px-7 py-3 text-sm font-semibold text-emerald-950 
                  bg-white/70 backdrop-blur-sm transition-colors duration-300
                  hover:bg-emerald-900 hover:text-white hover:border-emerald-900
                "
              >
                Falar direto com um especialista
              </a>
            </motion.div>

          </div>

          {/* COLUNA DIREITA – Imagem hero */}
          <motion.div
            variants={itemVariants}
            className="
              relative mt-8 lg:mt-0
              mx-auto w-full max-w-md lg:max-w-lg
              h-[340px] sm:h-[420px] lg:h-[480px]
              overflow-hidden rounded-[2.2rem]
              shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/40
            "
          >
            <Image
              src="/hero_section.jpg"
              alt="Painéis solares instalados em telhado de prédio"
              fill
              priority
              className="object-cover"
            />

            {/* Overlay suave */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

            {/* Label na imagem */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-black/45 px-4 py-3 text-xs text-white backdrop-blur-md sm:text-sm">
              <span>Projeto real de cliente UsiSol</span>
              <span className="font-semibold text-[var(--accent-orange)]">
                Economia na conta desde 2022
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
