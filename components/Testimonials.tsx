'use client'

import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

export default function Testimonials({ dict }: { dict: any }) {
  return (
    <section className="py-8 md:py-24 bg-slate-50 border-t border-slate-100">
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
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
          {dict.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 md:p-10 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-4 left-4 md:top-8 md:left-8 w-6 h-6 md:w-12 md:h-12 text-gold-100 -z-0" />
              <div className="relative z-10">
                <p className="text-sm md:text-xl text-slate-700 font-medium leading-relaxed mb-4 md:mb-8 italic">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs md:text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs md:text-sm font-semibold text-slate-900">{item.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
