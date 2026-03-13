'use client'

import { motion } from 'motion/react'

export default function Process({ dict }: { dict: any }) {
  return (
    <section id="process" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          {dict.steps.map((step: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-slate-950 border-2 border-gold-500 flex items-center justify-center text-lg md:text-xl font-bold text-gold-400 mb-4 md:mb-6 shadow-lg shadow-gold-500/20">
                {step.step}
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl w-full h-full hover:bg-white/10 transition-colors">
                <span className="text-amber-400 text-xs md:text-sm font-bold tracking-wider uppercase mb-1 md:mb-2 block">
                  {step.duration}
                </span>
                <h3 className="text-base md:text-xl font-bold mb-2 md:mb-4">{step.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
