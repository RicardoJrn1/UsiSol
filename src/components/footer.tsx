import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"
import { INSTAGRAM_LINK, WHATSAPP_LINK } from "./constants"

const navigation = {
  solucoes: [
    { name: "Residencial", href: "#portfolio-section" },
    { name: "Empresarial", href: "#portfolio-section" },
    { name: "Agronegócio", href: "#portfolio-section" },
  ],
  institucional: [
    { name: "Início", href: "#hero-section" },
    { name: "Benefícios", href: "#beneficios-section" },
    { name: "Depoimentos", href: "#depoimentos-section" },
    { name: "FAQ", href: "#faq-section" },
  ],
  social: [
    {
      name: "Whatsapp",
      href: WHATSAPP_LINK,
      icon: (props: React.SVGProps<SVGSVGElement>) => <MessageCircle {...props} />,
    },
    {
      name: "Instagram",
      href: INSTAGRAM_LINK,
      icon: (props: React.SVGProps<SVGSVGElement>) => <Instagram {...props} />,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>

      <div className="mx-auto max-w-7xl px-6 pb-6 pt-10 sm:pt-14 lg:px-8 lg:pt-16">
        
        <div className="xl:grid xl:grid-cols-3 xl:gap-10">
          
          {/* COLUNA LOGO */}
          <div className="space-y-6 -mt-4">
            <a href="#hero-section" aria-label="Voltar ao início" className="inline-block">
              <Image
                src="/usisol_logo.png"
                alt="Logo da UsiSol"
                width={100}
                height={30}
              />
            </a>

            <p className="text-sm leading-6 text-gray-400 max-w-sm -mt-7">
              Transformando luz do sol em economia para sua casa e seu negócio.
            </p>

            <div className="flex space-x-5">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-300"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA LINKS */}
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:mt-14 xl:mt-0 xl:col-span-2">

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white">Soluções</h3>
                <ul className="mt-5 space-y-3">
                  {navigation.solucoes.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Institucional</h3>
                <ul className="mt-5 space-y-3">
                  {navigation.institucional.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm text-gray-400 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CONTATO */}
            <div>
              <h3 className="text-sm font-semibold text-white">Contato</h3>
              <ul className="mt-5 space-y-3 text-sm text-gray-400">
                <li>Campinas - SP</li>
                <li>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    (55) 46 99978-0099
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-white/10 pt-6 sm:mt-12 lg:mt-14">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} UsiSol Energia Solar — Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}
