"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { WHATSAPP_LINK } from "./constants"

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
})

const EconomiaSimuladaSection: React.FC = () => {
  const [billValue, setBillValue] = useState<string>("650")
  const [economyPercent, setEconomyPercent] = useState<number>(90) // ex: 82% ≈ 650 -> 120

  // normaliza valor digitado (suporta vírgula)
  const parsedBill = Number(
    billValue.replace(/\./g, "").replace(",", ".")
  )

  const isValid = !Number.isNaN(parsedBill) && parsedBill > 0

  const estimatedAfter = isValid
    ? parsedBill * (1 - economyPercent / 100)
    : 0

  const estimatedSavings = isValid ? parsedBill - estimatedAfter : 0

  return (
    <section
      data-header-theme="light"
      className="relative bg-[var(--primary-blue)] overflow-hidden"
    >
      {/* Faixa de imagem no rodapé (ponta a ponta) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30vh] z-0">
        <Image
          src="/casa_footer.jpg"
          alt="Casa com sistema de energia solar"
          fill
          className="object-cover object-[center_75%] opacity-80"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* COLUNA DE TEXTO */}
          <motion.div
            className="relative text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* FRASE DE FUNDO (SIMULAR) */}
            <motion.p
              aria-hidden="true"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.75, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="
                pointer-events-none select-none
                absolute 
                top-20 
                left-0
                text-[4rem] sm:text-[6rem] lg:text-[8rem]
                font-extrabold tracking-tight leading-none
                text-white/10
                z-0
                whitespace-nowrap
              "
            >
              SIMULAR
            </motion.p>

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-orange)] relative z-10">
              Simulação de economia
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl relative z-10">
              Veja quanto você pode economizar com energia solar
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/70 relative z-10">
              Clientes UsiSol costumam reduzir a conta de luz em até
              <span className="font-semibold text-white"> 90%</span>,
              dependendo do consumo e do perfil de uso. A análise é personalizada para o seu imóvel.
            </p>

            {/* BOTÃO */}
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start relative z-10">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 rounded-full bg-[var(--accent-orange)] px-8 py-4 text-sm font-semibold text-[var(--primary-blue)] shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Quero descobrir meu potencial de economia
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* CARD DA SIMULAÇÃO FUNCIONAL */}
          <motion.div
            className="
              relative z-10
              mx-auto w-full max-w-md rounded-3xl bg-white/80 p-6 
              shadow-xl ring-1 ring-black/10 backdrop-blur-md
            "
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-900/60">
              Simule agora
            </p>

            <h3 className="mt-3 text-lg font-bold text-gray-900/90">
              Informe sua conta média de luz
            </h3>

            {/* Inputs */}
            <div className="mt-6 space-y-4">
              {/* Conta atual */}
              <div className="rounded-2xl bg-gray-900/5 px-4 py-3">
                <label
                  htmlFor="bill"
                  className="flex items-center justify-between text-sm text-gray-900/70"
                >
                  <span>Conta atual (R$)</span>
                </label>
                <input
                  id="bill"
                  value={billValue}
                  onChange={(e) => setBillValue(e.target.value)}
                  inputMode="decimal"
                  className="
                    mt-2 w-full rounded-xl border border-gray-300/60 bg-white/80 
                    px-3 py-2 text-sm text-gray-900 shadow-sm outline-none
                    focus:border-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)]/40
                  "
                  placeholder="Ex: 650"
                />
              </div>

              {/* Percentual de economia */}
              <div className="rounded-2xl bg-gray-900/5 px-4 py-3">
                <div className="flex items-center justify-between text-sm text-gray-900/70">
                  <span>Percentual estimado de economia</span>
                  <span className="font-semibold text-[var(--primary-blue)]">
                    {economyPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={95}
                  value={economyPercent}
                  onChange={(e) => setEconomyPercent(Number(e.target.value))}
                  className="mt-3 w-full accent-[var(--primary-blue)]"
                />
                <p className="mt-1 text-[11px] text-gray-500">
                  Valores típicos variam entre 60% e 90%, dependendo do consumo
                  e do projeto.
                </p>
              </div>

              {/* Resultado: após sistema solar */}
              <div className="flex items-center justify-between rounded-2xl bg-[#e8f7ec] px-4 py-3">
                <span className="text-sm text-gray-900/70">
                  Após sistema solar (estimado)
                </span>
                <span className="text-base font-semibold text-[#3ab54a]">
                  {isValid ? currency.format(estimatedAfter) : "--"}
                </span>
              </div>

              {/* Economia mensal */}
              <div className="flex items-center justify-between rounded-2xl bg-gray-900/5 px-4 py-3">
                <span className="text-sm text-gray-900/70">
                  Economia mensal aproximada
                </span>
                <span className="text-base font-semibold text-[var(--primary-blue)]">
                  {isValid ? `~ ${currency.format(estimatedSavings)}` : "--"}
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-gray-900/60">
              Os valores são uma estimativa. A economia real depende do seu
              consumo, bandeira tarifária, região e dimensionamento do sistema.
              Nossa equipe faz um estudo detalhado no seu projeto.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EconomiaSimuladaSection
