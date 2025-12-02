"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        flex items-center justify-between
        px-6 md:px-10
        h-20 md:h-24
        transition-all duration-300
        backdrop-blur-xl
        ${
          scrolled
            ? "bg-white/10 border-b border-white/20 shadow-lg"
            : "bg-white/5 border-b border-white/10"
        }
      `}
    >
      <Link href="/" className="cursor-pointer h-12 md:h-16">
        <Image
          src="/usisol_logo_preto.png"
          alt="UsiSol Logo"
          width={100}
          height={100}
          className="h-full w-auto select-none"
          priority
        />
      </Link>

      {/* Navegação Desktop */}
      <nav className="hidden md:block">
        <ul className="navList">
          <li className="active"><Link href="/">Início</Link></li>
          <li><Link href="/sobre">Sobre Nós</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/contato">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}
