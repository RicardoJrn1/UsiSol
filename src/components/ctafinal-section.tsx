"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_LINK } from "./constants"

const CtaFinalSection: React.FC = () => {
  return (
    <section
      data-header-theme="light"
      className="relative overflow-hidden bg-[var(--accent-orange)]"
    >
      {/* glow de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 
                   bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),transparent_55%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-20%] bottom-[-40%] -z-10 h-[60%]
                   bg-[radial-gradient(circle_at_bottom,_rgba(0,0,0,0.26),transparent_65%)] opacity-40"
      />

      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-6 py-20 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative text-center"
        >
          {/* palavra de fundo */}
          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="
              pointer-events-none select-none
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              text-[clamp(5rem,22vw,12rem)]
              font-black tracking-tighter leading-none
              text-white/10
              whitespace-nowrap
            "
          >
            ECONOMIZE
          </motion.p>
          {/* chip "último passo" */}
          <p className="relative z-10 mx-auto inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Último passo
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Pronto para economizar de verdade?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-8 text-white/85">
            Fale com um de nossos especialistas agora mesmo e descubra como
            reduzir sua conta de luz.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <div className="relative">
              {/* anel de brilho atrás do botão */}
              <div
                aria-hidden
                className="
                  absolute inset-0 -z-10 scale-110 rounded-full
                  bg-white/40 blur-xl opacity-70
                "
              />

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                // pulso suave contínuo
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                // interação do usuário
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group relative inline-flex items-center gap-3
                  rounded-full bg-gradient-to-r from-white to-white/95 px-10 py-4
                  text-sm font-semibold text-black
                  shadow-[0_18px_40px_rgba(0,0,0,0.35)]
                "
              >
                Quero reduzir minha conta de luz
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default CtaFinalSection
