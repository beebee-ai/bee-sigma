'use client'

import { motion } from 'motion/react'
import { Quote } from 'lucide-react'

export default function Testimonials({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {dict.items.map((item: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 relative"
            >
              <Quote className="absolute top-8 left-8 w-12 h-12 text-gold-100 -z-0" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-slate-700 font-medium leading-relaxed mb-8 italic">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.author}</p>
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
