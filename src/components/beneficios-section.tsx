"use client"

import { motion, type Variants } from "framer-motion"
import Image from "next/image"
import { DollarSign, TrendingUp, PiggyBank, ShieldCheck } from "lucide-react"
import { ReactNode } from "react"

interface Beneficio {
  icon: ReactNode
  title: string
  description: string
}

const beneficios: Beneficio[] = [
  {
    icon: <DollarSign className="h-10 w-10 text-[var(--accent-orange)]" />,
    title: "Economia imediata",
    description:
      "Reduza drasticamente sua fatura de energia desde o primeiro mês de uso.",
  },
  {
    icon: <PiggyBank className="h-10 w-10 text-[var(--accent-orange)]" />,
    title: "Retorno garantido",
    description:
      "O sistema se paga em poucos anos e gera economia por décadas.",
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-[var(--accent-orange)]" />,
    title: "Valorização do imóvel",
    description:
      "Imóveis com energia solar têm maior valor no mercado.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-[var(--accent-orange)]" />,
    title: "Baixa manutenção",
    description:
      "Os sistemas on-grid exigem manutenção mínima e têm alta durabilidade.",
  },
]

// variants COM custom index
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeInOut",
    },
  }),
}

export default function BeneficiosSection() {
  return (
    <section
      id="beneficios-section"
      className="relative overflow-hidden py-16 sm:py-24"
    >
      {/* Fundo com imagem e overlay */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/fundo_beneficios.jpg"
          alt="Painéis solares em um telhado"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[var(--primary-blue)]/65 backdrop-blur-sm" />

      {/* Conteúdo da Seção */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Por que energia solar é o melhor investimento para sua casa ou empresa?
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Descubra os benefícios que vão muito além da economia na conta de
            luz, garantindo retorno e sustentabilidade.
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-8 sm:mt-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {beneficios.map((beneficio, index) => (
            <motion.div
              key={beneficio.title}
              className="group relative flex h-72 flex-col items-center justify-center text-center sm:h-80"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              {/* Conteúdo que se move no hover */}
              <div className="flex flex-col items-center transition-transform duration-500 ease-out group-hover:-translate-y-8">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 transition-colors group-hover:bg-[var(--accent-orange)]/20 group-hover:ring-[var(--accent-orange)]">
                  {beneficio.icon}
                </div>
                <h3 className="text-lg font-semibold leading-7 text-white">
                  {beneficio.title}
                </h3>
              </div>

              {/* Descrição que aparece no hover */}
              <p className="absolute bottom-8 px-6 text-base leading-7 text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {beneficio.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
