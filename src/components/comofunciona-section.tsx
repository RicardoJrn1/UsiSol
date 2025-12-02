"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

interface Etapa {
  description: string
}

const etapas: Etapa[] = [
  { description: "Produção de energia durante o dia" },
  { description: "Abastecimento direto do imóvel" },
  { description: "Envio do excedente para a rede" },
  { description: "Geração de créditos para usar à noite ou em dias nublados" },
]

// Texto entra da esquerda
const textVariants: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

// Container da lista com stagger
const listContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
}

// Cada item da lista
const listItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
}

// Imagem entrando da direita
const imageVariants: Variants = {
  hidden: { opacity: 0, x: 250, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const ComoFuncionaSection: React.FC = () => {
  return (
    <section
      id="comofunciona-section"
      className="overflow-hidden bg-[var(--primary-blue)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-24">
        {/* Coluna de Texto */}
        <motion.div
          className="relative lg:max-w-lg"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Watermark */}
          <p
            aria-hidden="true"
            className="
              absolute -top-10 -left-4 
              text-[8rem] sm:text-[12rem] lg:text-[16rem]
              font-extrabold tracking-tight text-white/5 
              leading-none pointer-events-none select-none -z-0
            "
          >
            ON-GRID
          </p>

          {/* Conteúdo principal */}
          <div className="relative">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:text-left">
              <h2 className="text-base font-semibold leading-7 text-[var(--accent-orange)]">
                Como funciona o sistema on-grid?
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                O sistema on-grid da UsiSol conecta seus painéis solares à rede
                elétrica da concessionária, permitindo:
              </p>
            </div>

            {/* Lista com animação em cascata */}
            <motion.ul
              className="mx-auto mt-12 max-w-3xl space-y-8 sm:mt-16 lg:mx-0"
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              {etapas.map((etapa) => (
                <motion.li
                  key={etapa.description}
                  className="flex items-center gap-x-3"
                  variants={listItemVariants}
                >
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 flex-none rounded-full bg-[var(--accent-orange)]"
                  />
                  <p className="text-base leading-7 text-white/70">
                    {etapa.description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>

        {/* Coluna da Imagem */}
        <motion.div
          className="mt-16 lg:mt-0"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <Image
            src="/placa_noite.jpg"
            alt="Painéis solares à noite com a cidade iluminada ao fundo"
            className="rounded-2xl object-cover shadow-xl ring-1 ring-gray-900/10"
            width={1200}
            height={800}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default ComoFuncionaSection
