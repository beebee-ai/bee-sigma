'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import ContactModal from './ContactModal'

export default function Navbar({ dict, modalDict, lang }: { dict: any; modalDict: any; lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`
  const isSolid = isScrolled || !isHome

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLang = lang === 'en' ? 'zh' : 'en'
  const currentPathWithoutLang = pathname.replace(`/${lang}`, '') || '/'
  const toggleHref = `/${toggleLang}${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`

  const navLinks = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.about, href: `/${lang}#about` },
    { name: dict.services, href: `/${lang}#services` },
    { name: dict.solutions, href: `/${lang}#solutions` },
    { name: dict.industry, href: `/${lang}/industry/education` },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href={`/${lang}#home`} className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden">
            <Image 
              src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/logo.png" 
              alt="BEE Sigma Logo" 
              width={32} 
              height={32} 
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <span className={`font-bold text-xl tracking-tight ${isSolid ? 'text-slate-900' : 'text-white'}`}>
            BEE Sigma
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gold-500 ${
                  isSolid 
                    ? 'text-slate-600' 
                    : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            )
          })}

          <button
            onClick={() => setIsModalOpen(true)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              isSolid
                ? 'bg-gold-600 text-white hover:bg-gold-700'
                : 'bg-white text-gold-600 hover:bg-slate-100'
            }`}
          >
            {dict.contact}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 ${isSolid ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 lg:hidden"
          >
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium py-2 border-b border-slate-50 text-slate-600`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            })}
            <div className="flex items-center justify-end pt-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsModalOpen(true)
                }}
                className="px-4 py-2 bg-gold-600 text-white rounded-full text-sm font-medium"
              >
                {dict.contact}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        dict={modalDict} 
      />
    </header>
  )
}
