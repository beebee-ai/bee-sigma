'use client'

import { motion } from 'motion/react'

export default function EduCaseStudy({ dict }: { dict: any }) {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gold-900 mb-6"
          >
            {dict.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {dict.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-800 text-white">
                  {dict.tableHeaders.map((header: string, index: number) => (
                    <th 
                      key={index} 
                      className={`p-5 font-semibold text-sm md:text-base ${index === 0 ? 'w-1/6' : index === 1 ? 'w-1/6' : index === 2 ? 'w-1/6' : 'w-1/2'}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {dict.tableData.map((row: any, index: number) => (
                  <tr 
                    key={index} 
                    className={`transition-colors hover:bg-gold-50/50 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}
                  >
                    <td className="p-5 font-bold text-slate-800 align-top">
                      {row.scenario}
                    </td>
                    <td className="p-5 text-slate-600 align-top">
                      {row.personnel}
                    </td>
                    <td className="p-5 text-slate-600 align-top">
                      {row.timeline}
                    </td>
                    <td className="p-5 text-slate-700 leading-relaxed align-top">
                      {row.effect}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
