"use client"

import { motion, type Variants } from "framer-motion"
import {
  Award,
  DraftingCompass,
  FileCheck2,
  HardHat,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

interface Diferencial {
  icon: LucideIcon
  title: string
  description: string
}

const diferenciais: Diferencial[] = [
  {
    icon: DraftingCompass,
    title: "Experiência real",
    description:
      "Anos de atuação e dezenas de sistemas instalados com total segurança.",
  },
  {
    icon: Award,
    title: "Projetos sob medida",
    description:
      "Cada solução é personalizada para o consumo e necessidades do cliente.",
  },
  {
    icon: HardHat,
    title: "Equipamento de alta performance",
    description:
      "Trabalhamos com marcas líderes e componentes de alto rendimento.",
  },
  {
    icon: FileCheck2,
    title: "Suporte completo",
    description:
      "Acompanhamos o cliente do projeto à instalação.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia e confiança",
    description:
      "Sistemas on-grid homologados e dentro das normas de concessionárias.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export default function PorqueUsisolSection() {
  const [principal, ...restantes] = diferenciais

  return (
    <section
      id="beneficios-section"
      data-header-theme="light"
      className="relative overflow-hidden bg-[var(--accent-orange)] py-16 sm:py-24"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:items-center lg:gap-x-20">
          {/* COLUNA DOS CARDS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="
              relative z-10 mx-auto flex w-full max-w-xl flex-col gap-6
              lg:max-w-none
            "
          >
            {/* Card principal (full width) */}
            <motion.div
              variants={itemVariants}
              className="
                group relative flex flex-col justify-between overflow-hidden
                rounded-3xl bg-[#fff7f0] p-6 shadow-[0_18px_40px_rgba(0,0,0,0.15)]
                ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300
                hover:bg-white hover:shadow-[0_22px_55px_rgba(0,0,0,0.2)] hover:-translate-y-1
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] transition-colors duration-300 group-hover:bg-[var(--primary-blue)] group-hover:text-white">
                  <principal.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {principal.title}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-700">
                {principal.description}
              </p>
            </motion.div>

            {/* Grid 2x2 para os outros 4 cards */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {restantes.map((diferencial) => (
                <motion.div
                  key={diferencial.title}
                  variants={itemVariants}
                  className="group relative flex h-40 flex-col justify-between overflow-hidden rounded-3xl bg-[#fff7f0] p-6 shadow-[0_14px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/5 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-[0_20px_45px_rgba(0,0,0,0.18)] hover:-translate-y-1"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--primary-blue)]/10 text-[var(--primary-blue)] transition-colors duration-300 group-hover:bg-[var(--primary-blue)] group-hover:text-white">
                    <diferencial.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-900">
                    {diferencial.title}
                  </h3>
                  <p className="mt-1 text-xs text-gray-600 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-400 ease-in-out">
                    {diferencial.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLUNA DE TEXTO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="relative z-10 mt-16 max-w-2xl text-center lg:mt-0 lg:text-left"
          >
            {/* TEXTO DE FUNDO (QUALIDADE) */}
            <motion.p
              aria-hidden="true"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              className="
                pointer-events-none select-none
                absolute 
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                text-[clamp(4rem,18vw,8rem)]
                font-black tracking-tighter leading-none
                text-white/15
                whitespace-nowrap
                z-[-1]
                lg:left-auto lg:right-0 lg:translate-x-1/9
              "
            >
              QUALIDADE
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              Diferenciais UsiSol
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="mt-4 text-3xl font-bold text-white sm:text-4xl"
            >
              Por que escolher a UsiSol?
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-white/85"
            >
              Nosso compromisso vai além da instalação. Oferecemos uma solução
              completa, com transparência, qualidade e foco na sua satisfação em
              todas as etapas.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
