'use client'

import { motion } from 'motion/react'
import { TrendingUp } from 'lucide-react'

export default function EduResults({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-4">
            {dict.metrics.map((metric: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col md:flex-row items-center bg-slate-50 rounded-2xl p-4 md:p-6 border border-slate-100 hover:border-gold-200 transition-colors gap-4 md:gap-6"
              >
                <div className="w-full md:w-1/3 text-center md:text-left">
                  <h3 className="text-base md:text-lg font-bold text-slate-900">{metric.label}</h3>
                </div>
                
                <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start gap-2 md:gap-4">
                  <span className="text-slate-400 line-through text-xs md:text-sm">{metric.before}</span>
                  <span className="text-slate-300">→</span>
                  <span className="text-gold-600 font-semibold text-sm md:text-base">{metric.after}</span>
                </div>

                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-amber-100 text-amber-700 font-medium text-xs md:text-sm">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                    {metric.improvement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
