'use client'

import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'

export default function EduCooperation({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {dict.phases.map((phase: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-3xl border border-slate-100"
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gold-100 text-gold-700 font-semibold text-sm mb-6">
                {phase.time}
              </div>
              <ul className="space-y-4">
                {phase.tasks.map((task: string, taskIndex: number) => (
                  <li key={taskIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
