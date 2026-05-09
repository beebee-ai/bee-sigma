'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false })

export default function Navbar({ dict, modalDict, lang }: { dict: any; modalDict: any; lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === `/${lang}` || pathname === `/${lang}/`
  const isSolid = isScrolled || !isHome
  const mobileMenuLabel = isMobileMenuOpen
    ? (lang === 'zh' ? '关闭导航菜单' : 'Close navigation menu')
    : (lang === 'zh' ? '打开导航菜单' : 'Open navigation menu')

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const next = window.scrollY > 20
        setIsScrolled((prev) => (prev !== next ? next : prev))
        ticking = false
      })
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentPathWithoutLang = pathname.replace(`/${lang}`, '') || '/'

  const navLinks = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.about, href: `/${lang}#about` },
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
        <Link href={`/${lang}#home`} className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden shrink-0">
            <Image 
              src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/logo.png" 
              alt="BEE Sigma Logo" 
              width={36} 
              height={36} 
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            <span className={`font-bold text-lg md:text-xl tracking-tight leading-none ${isSolid ? 'text-slate-900' : 'text-white'}`}>
              BEE Sigma
            </span>
            <span className={`hidden md:block w-px h-4 ${isSolid ? 'bg-slate-300' : 'bg-white/30'}`}></span>
            <span className={`text-[10px] md:text-xs font-medium tracking-wide mt-0.5 md:mt-0 ${isSolid ? 'text-slate-500' : 'text-white/80'}`}>
              {dict.tagline}
            </span>
          </div>
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

          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isSolid
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-white/10 text-white hover:bg-white/15 border border-white/15'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? 'English' : '简体中文'}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangMenuOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                <Link
                  href={`/en${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    lang === 'en'
                      ? 'bg-gold-50 text-gold-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsLangMenuOpen(false)}
                >
                  English
                </Link>
                <Link
                  href={`/zh${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    lang === 'zh'
                      ? 'bg-gold-50 text-gold-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  onClick={() => setIsLangMenuOpen(false)}
                >
                  简体中文
                </Link>
              </div>
            )}
          </div>

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
          aria-label={mobileMenuLabel}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsMobileLangMenuOpen(false)
                setIsMobileMenuOpen(false)
              }}
              className="fixed inset-0 bg-slate-950/20 backdrop-blur-[2px] lg:hidden"
              aria-label="Close mobile menu backdrop"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 min-h-[calc(100dvh-100%)] bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 overflow-y-auto lg:hidden"
            >
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium py-2 border-b border-slate-50 text-slate-600`}
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      setIsMobileLangMenuOpen(false)
                    }}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="flex flex-col items-start gap-3 pt-2">
                <div className="relative">
                  <button
                    onClick={() => setIsMobileLangMenuOpen(!isMobileLangMenuOpen)}
                    className="flex min-w-[140px] items-center justify-between gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-100"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-slate-500" />
                      <span>{lang === 'en' ? 'English' : '简体中文'}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${isMobileLangMenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isMobileLangMenuOpen && (
                    <div className="absolute top-full left-0 z-10 mt-2 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                      <Link
                        href={`/en${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          lang === 'en'
                            ? 'bg-gold-50 text-gold-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                        onClick={() => {
                          setIsMobileLangMenuOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        English
                      </Link>
                      <Link
                        href={`/zh${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          lang === 'zh'
                            ? 'bg-gold-50 text-gold-700 font-semibold'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                        onClick={() => {
                          setIsMobileLangMenuOpen(false)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        简体中文
                      </Link>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => {
                    setIsMobileLangMenuOpen(false)
                    setIsMobileMenuOpen(false)
                    setIsModalOpen(true)
                  }}
                  className="w-[140px] px-5 py-2.5 bg-gold-600 text-white rounded-full text-sm font-medium whitespace-nowrap"
                >
                  {dict.contact}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          dict={modalDict}
          lang={lang}
        />
      )}
    </header>
  )
}
