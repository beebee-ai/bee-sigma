'use client'

import { motion } from 'motion/react'
import { User, Compass, Building } from 'lucide-react'

export default function Services({ dict }: { dict: any }) {
  const icons = [User, Compass, Building]

  return (
    <section id="services" className="py-24 bg-white">
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

        <div className="grid md:grid-cols-3 gap-8">
          {dict.items.map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-50 hover:bg-gold-600 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold-500 group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7 text-gold-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-gold-100 transition-colors">
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
