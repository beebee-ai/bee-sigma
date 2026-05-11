'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Globe } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false })

export default function DesktopNavActions({
  dict,
  modalDict,
  lang,
}: {
  dict: any
  modalDict: any
  lang: string
}) {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname()
  const currentPathWithoutLang = pathname.replace(`/${lang}`, '') || '/'

  return (
    <>
      <div className="relative">
        <button
          onClick={() => setIsLangMenuOpen((open) => !open)}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 text-sm font-medium text-white transition-colors hover:bg-white/15 group-data-[solid=true]/navbar:border-transparent group-data-[solid=true]/navbar:bg-slate-100 group-data-[solid=true]/navbar:text-slate-700 group-data-[solid=true]/navbar:hover:bg-slate-200"
        >
          <Globe className="w-4 h-4" />
          <span>{lang === 'en' ? 'English' : '简体中文'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
        </button>

        {isLangMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
            <Link
              href={`/en${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
              prefetch={false}
              className={`block px-4 py-2 text-sm transition-colors ${lang === 'en'
                ? 'bg-gold-50 text-gold-700 font-semibold'
                : 'text-slate-600 hover:bg-slate-50'
                }`}
              onClick={() => setIsLangMenuOpen(false)}
            >
              English
            </Link>
            <Link
              href={`/zh${currentPathWithoutLang === '/' ? '' : currentPathWithoutLang}`}
              prefetch={false}
              className={`block px-4 py-2 text-sm transition-colors ${lang === 'zh'
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
        className="px-4 py-2 rounded-full bg-white text-sm font-medium text-gold-600 transition-colors hover:bg-slate-100 group-data-[solid=true]/navbar:bg-gold-700 group-data-[solid=true]/navbar:text-white group-data-[solid=true]/navbar:hover:bg-gold-800"
      >
        {dict.contact}
      </button>

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
