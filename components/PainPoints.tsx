'use client'

import { motion } from 'motion/react'
import { AlertCircle, Clock, CopyX } from 'lucide-react'

export default function PainPoints({ dict }: { dict: any }) {
  const icons = [AlertCircle, Clock, CopyX]

  return (
    <section className="py-8 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6"
          >
            {dict.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-600"
          >
            {dict.subtitle && typeof dict.subtitle === 'string' 
              ? dict.subtitle.split('，').map((part: string, i: number, arr: any[]) => (
                  <span key={i} className="inline-block">
                    {part}{i < arr.length - 1 ? '，' : ''}
                  </span>
                ))
              : dict.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {dict.items.map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-5 md:p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-0 md:block">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center shrink-0 md:mb-6">
                    <Icon className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 md:mb-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
