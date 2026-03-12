'use client'

import { motion } from 'motion/react'
import { Map, BrainCircuit, Cpu } from 'lucide-react'

export default function Solutions({ dict }: { dict: any }) {
  const icons = [Map, BrainCircuit, Cpu]

  return (
    <section id="solutions" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-500/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          {dict.items.map((item: any, index: number) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-gold-500 flex items-center justify-center text-gold-400 mb-6 shadow-lg shadow-gold-500/20">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl w-full h-full hover:bg-white/10 transition-colors">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
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
