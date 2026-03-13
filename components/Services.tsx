'use client'

import { motion } from 'motion/react'
import { User, Compass, Building } from 'lucide-react'

export default function Services({ dict }: { dict: any }) {
  const icons = [User, Compass, Building]

  return (
    <section id="services" className="py-8 md:py-24 bg-white">
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
                className="group p-5 md:p-8 rounded-2xl bg-slate-50 hover:bg-gold-600 transition-colors duration-300"
              >
                <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-0 md:block">
                  <div className="w-8 h-8 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors shrink-0 md:mb-6">
                    <Icon className="w-4 h-4 md:w-7 md:h-7 text-gold-600 group-hover:text-white" />
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-slate-900 group-hover:text-white transition-colors md:mb-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-gold-100 transition-colors">
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
