'use client'

import { motion } from 'motion/react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero({ dict, lang }: { dict: any; lang: string }) {
  const titleClassName =
    lang === 'zh'
      ? 'text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.2]'
      : 'text-4xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-tight'
  const subtitleClassName =
    lang === 'zh'
      ? 'text-base md:text-xl text-slate-300 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed whitespace-pre-line text-pretty'
      : 'text-base md:text-xl text-slate-300 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line text-pretty'

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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 md:mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium tracking-wide text-slate-200">
              {dict.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={titleClassName}
          >
            {dict.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={subtitleClassName}
          >
            {dict.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-gold-600 text-white font-medium hover:bg-gold-700 transition-all shadow-lg shadow-gold-600/25 flex items-center justify-center gap-2 text-sm md:text-base"
            >
              {dict.cta}
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href={`/${lang}#solutions`}
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center text-sm md:text-base"
            >
              {dict.secondaryCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
