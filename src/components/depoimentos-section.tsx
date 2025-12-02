"use client"

import { motion, type Variants } from "framer-motion"
import { Quote, Home, Building, type LucideIcon } from "lucide-react"

interface Testimonial {
  quote: string
  location: string
  icon: LucideIcon
}

const testimonials: Testimonial[] = [
  {
    quote:
      "O atendimento da UsiSol foi impecável do início ao fim. A equipe tirou todas as minhas dúvidas e o sistema foi instalado dentro do prazo. A economia na conta de luz já é visível no primeiro mês!",
    location: "Cliente Residencial",  
    icon: Home,
  },
  {
    quote:
      "A melhor decisão que tomei para a minha casa! A economia veio logo no primeiro mês e a equipe da UsiSol foi super profissional e atenciosa durante todo o processo!",
    location: "Cliente Residencial",    
    icon: Home,
  },
  {
    quote:
      "Instalação rápida, equipe profissional e suporte excelente. A UsiSol transformou nossa empresa com energia solar, reduzindo custos e promovendo sustentabilidade. Recomendo fortemente!",
    location: "Cliente Empresarial",
    icon: Building,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const DepoimentosSection: React.FC = () => {
  return (
    <section
      id="depoimentos-section"
      data-header-theme="light"
      className="relative overflow-hidden bg-[var(--accent-orange)] py-16 sm:py-24"
    >
      {/* fundo suave */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--gradient-yellow)] to-[var(--accent-orange)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* cabeçalho + palavra de fundo */}
        <div className="relative mx-auto max-w-2xl text-center">
          {/* palavra grande atrás */}
          <motion.p
            aria-hidden="true"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="
              pointer-events-none select-none
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
              text-[clamp(4rem,18vw,9rem)]
              font-black tracking-tighter leading-none
              text-white/10
              whitespace-nowrap
            "
          >
            DEPOIMENTOS
          </motion.p>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
            Depoimentos
          </motion.p>

          <h2 className="relative z-10 mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="relative z-10 mt-6 text-lg leading-8 text-white/80">
            A satisfação de quem confia em nosso trabalho é nossa maior energia.
          </p>
        </div>

        {/* cards */}
        <motion.div
          className="mx-auto mt-16 max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {testimonials.map((testimonial, index) => {
              const isFeatured = index === 1 // card central em destaque

              return (
                <motion.figure
                  key={testimonial.quote}
                  variants={itemVariants}
                  className={`
                    group relative flex h-full flex-col justify-between overflow-hidden
                    rounded-3xl p-8 shadow-xl ring-1 backdrop-blur-sm
                    transition-transform duration-300
                    ${isFeatured
                      ? "bg-white ring-black/5 lg:scale-[1.03] lg:-translate-y-2"
                      : "bg-white/85 ring-black/10 lg:scale-[0.97] lg:translate-y-2"}
                    hover:-translate-y-3 hover:scale-[1.04] hover:shadow-2xl
                  `}
                >
                  {/* quote gigante de fundo */}
                  <Quote
                    className="pointer-events-none absolute -right-3 -top-4 h-20 w-20 text-[var(--primary-blue)]/7"
                    aria-hidden="true"
                  />

                  <blockquote className="relative z-10 text-[0.97rem] leading-relaxed text-gray-900">
                    <p>{`“${testimonial.quote}”`}</p>
                  </blockquote>

                  <figcaption className="relative z-10 mt-8 flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary-blue)]/10">
                      <testimonial.icon
                        className="h-6 w-6 text-[var(--primary-blue)]"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="font-semibold text-gray-700">
                      {testimonial.location}
                    </div>
                  </figcaption>
                </motion.figure>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DepoimentosSection
