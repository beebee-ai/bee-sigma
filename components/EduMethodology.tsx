'use client'

import { motion } from 'motion/react'
import { Database, FolderTree, Filter, MessageSquare } from 'lucide-react'

export default function EduMethodology({ dict }: { dict: any }) {
  const icons = [Database, FolderTree, Filter, MessageSquare]

  return (
    <section className="py-10 md:py-24 bg-slate-50 border-t border-slate-100">
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
            className="text-base md:text-lg text-slate-600 leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {dict.items.map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8 text-7xl md:text-9xl font-black text-slate-50 opacity-50 group-hover:text-gold-50 transition-colors pointer-events-none">
                  {item.letter}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 md:block md:gap-0 mb-3 md:mb-0">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gold-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 md:mb-6 text-gold-600">
                      <Icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 md:mb-4">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
