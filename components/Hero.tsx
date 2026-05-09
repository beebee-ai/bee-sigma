'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import dynamic from 'next/dynamic'

const ContactModal = dynamic(() => import('./ContactModal'), { ssr: false })

export default function Hero({ dict, modalDict, lang }: { dict: any; modalDict: any; lang: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (lang === 'zh') {
    return (
      <section
        id="home"
        className="relative md:min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-24 md:pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/30 rounded-full blur-[60px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[60px] mix-blend-screen" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="w-full mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-8 md:mb-12 leading-[1.3] whitespace-normal md:whitespace-pre-line break-words text-white">
              <span className="block mb-2 md:mb-4">{dict.subtitleBottom1}</span>
              <span className="block">
                <span className="inline-block whitespace-nowrap">&quot;知识可见，Skill可用，</span>
                <span className="inline-block whitespace-nowrap">结果可考&quot;</span>
                <span className="inline-block whitespace-nowrap">的闭环</span>
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-full bg-gold-700 text-white font-medium hover:bg-gold-800 transition-all shadow-lg shadow-gold-600/25 flex items-center justify-center gap-2 text-sm md:text-base"
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
            </div>
          </div>
        </div>

        {isModalOpen && (
          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            dict={modalDict}
            lang={lang}
          />
        )}
      </section>
    )
  }

  return (
    <section
      id="home"
      className="relative md:min-h-[90vh] flex items-center justify-center pt-24 pb-16 md:pt-24 md:pb-16 overflow-hidden text-white"
      style={{ backgroundColor: '#111008' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8a020]/20 rounded-full blur-[60px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c8a020]/10 rounded-full blur-[60px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* 2. Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-[800] tracking-tighter mb-10 leading-[1.1] text-white text-center">
            {dict.headline}
          </h1>

          {/* 3. Value proposition (quote block) */}
          <div className="mb-8 mx-auto text-center inline-block">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug" style={{ color: '#c8a020' }}>
              <span className="block">{dict.valueProp1}</span>
              <span className="block">{dict.valueProp2}</span>
              <span className="block">{dict.valueProp3}</span>
            </p>
          </div>

          {/* 4. Two CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-[28px] py-[12px] rounded-[30px] text-[#111008] font-bold transition-all shadow-lg hover:opacity-90 flex items-center justify-center text-base"
              style={{ backgroundColor: '#c8a020' }}
            >
              {dict.cta}
            </button>
            <a
              href={`/${lang}#solutions`}
              className="w-full sm:w-auto px-[28px] py-[12px] rounded-[30px] bg-transparent font-semibold hover:bg-white/5 transition-all flex items-center justify-center text-base"
              style={{ border: '1px solid rgba(255, 255, 255, 0.4)', color: 'rgba(255, 255, 255, 0.8)' }}
            >
              {dict.secondaryCta}
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          dict={modalDict}
          lang={lang}
        />
      )}
    </section>
  )
}
