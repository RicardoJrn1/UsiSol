"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "Qual a economia real com a energia solar?",
    answer: "Depende do consumo, mas muitos clientes reduzem entre 70% e 90%.",
  },
  {
    question: "A manutenção do sistema é cara?",
    answer: "Não! Sistemas on-grid exigem manutenção mínima.",
  },
  {
    question: "Posso zerar totalmente minha conta de luz?",
    answer: "A tarifa mínima continua, mas o valor variável pode cair drasticamente.",
  },
  {
    question: "Precisa de bateria?",
    answer: "Não! Sistemas on-grid funcionam conectados à rede da concessionária.",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const FaqSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(0)

  return (
    <section
      id="faq-section"
      data-header-theme="light"
      className="relative overflow-hidden bg-gray-900 py-16 sm:py-24"
    >
      {/* Fundo com imagem + overlay */}
      <div className="absolute inset-0">
        <Image
          src="/duvidas_section.jpg"
          alt="Pessoa analisando documentos de energia solar"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 lg:items-start lg:gap-x-20">
          {/* COLUNA DE TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              FAQ
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/85">
              Tire suas principais dúvidas sobre energia solar e descubra como é
              simples e vantajoso gerar sua própria energia.
            </p>
          </motion.div>

          {/* COLUNA DO ACORDEÃO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="mx-auto mt-12 w-full max-w-3xl lg:mt-0"
          >
            <dl className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-black/40 p-6 backdrop-blur-md ring-1 ring-white/15"
                >
                  <dt>
                    <button
                      className="flex w-full items-start justify-between text-left text-white"
                      onClick={() => setExpanded(expanded === i ? false : i)}
                    >
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {expanded === i ? <Minus /> : <Plus />}
                      </span>
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.dd
                        className="pr-12 overflow-hidden"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        <p className="pt-4 text-base leading-7 text-white/80">
                          {faq.answer}
                        </p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
