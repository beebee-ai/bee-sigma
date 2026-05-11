'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Globe, Menu, X } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false })

export default function MobileMenu({
  dict,
  modalDict,
  lang,
  navLinks,
}: {
  dict: any
  modalDict: any
  lang: string
  navLinks: { name: string; href: string }[]
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileLangMenuOpen, setIsMobileLangMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()
  const currentPathWithoutLang = pathname.replace(`/${lang}`, '') || '/'
  const mobileMenuLabel = isMobileMenuOpen
    ? (lang === 'zh' ? '关闭导航菜单' : 'Close navigation menu')
    : (lang === 'zh' ? '打开导航菜单' : 'Open navigation menu')

  return (
    <>
      <button
        className="relative z-30 lg:hidden p-2 text-white group-data-[solid=true]/navbar:text-slate-900"
        onClick={() => setIsMobileMenuOpen((open) => !open)}
        aria-label={mobileMenuLabel}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </button>

      {isMobileMenuOpen && (
        <>
          <button
            onClick={() => {
              setIsMobileLangMenuOpen(false)
              setIsMobileMenuOpen(false)
            }}
            className="fixed inset-0 z-10 bg-slate-950/20 backdrop-blur-[2px] lg:hidden"
            aria-label="Close mobile menu backdrop"
          />

          <div
            id="mobile-navigation"
            className="absolute top-full left-0 right-0 z-20 min-h-[calc(100dvh-100%)] bg-white shadow-lg border-t border-slate-100 p-4 flex flex-col gap-4 overflow-y-auto lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                prefetch={false}
                className="font-medium py-2 border-b border-slate-50 text-slate-600"
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  setIsMobileLangMenuOpen(false)
                }}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex flex-col items-start gap-3 pt-2">
              <div className="relative">
                <button
                  onClick={() => setIsMobileLangMenuOpen((open) => !open)}
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
                      prefetch={false}
                      className={`block px-4 py-3 text-sm transition-colors ${lang === 'en'
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
                      prefetch={false}
                      className={`block px-4 py-3 text-sm transition-colors ${lang === 'zh'
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
                className="w-[140px] px-5 py-2.5 bg-gold-700 text-white rounded-full text-sm font-medium whitespace-nowrap"
              >
                {dict.contact}
              </button>
            </div>
          </div>
        </>
      )}

      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          dict={modalDict}
          lang={lang}
        />
      )}
    </>
  )
}
