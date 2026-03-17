'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import ContactModal from './ContactModal'

export default function Hero({ dict, modalDict, lang }: { dict: any; modalDict: any; lang: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const subtitleTopClassName =
    lang === 'zh'
      ? 'text-lg md:text-2xl text-slate-300 mb-4 md:mb-6 mx-auto leading-relaxed whitespace-normal md:whitespace-pre-line text-pretty'
      : 'text-lg md:text-2xl text-slate-300 mb-4 md:mb-6 mx-auto leading-relaxed whitespace-normal md:whitespace-pre-line text-pretty'
  const subtitleBottomClassName =
    lang === 'zh'
      ? 'text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-8 md:mb-12 leading-[1.3] whitespace-normal md:whitespace-pre-line break-words text-white'
      : 'text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-8 md:mb-12 leading-tight whitespace-normal md:whitespace-pre-line break-words text-white'

  return (
    <section
      id="home"
      className="relative md:min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-24 md:pb-16 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/30 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://fastly.picsum.photos/id/705/1920/1080.jpg?blur=4&hmac=fKT8VEKETiEuQnjOvXaeeTd-KGfkUYOEiNapbh88oS4')] opacity-10 mix-blend-overlay object-cover" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="w-full mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={subtitleTopClassName}
          >
            {dict.subtitleTop}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={subtitleBottomClassName}
          >
            <span className="block mb-2 md:mb-4">{dict.subtitleBottom1}</span>
            <span className="block">{dict.subtitleBottom2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-gold-600 text-white font-medium hover:bg-gold-700 transition-all shadow-lg shadow-gold-600/25 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {dict.cta}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <a
              href={`/${lang}#solutions`}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center text-sm md:text-base"
            >
              {dict.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>

      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        dict={modalDict} 
      />
    </section>
  )
}
