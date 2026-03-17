'use client'

import { motion } from 'motion/react'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export default function PainPoints({ dict }: { dict: any }) {
  const sections = Array.isArray(dict.sections)
    ? dict.sections
    : [
        {
          title: dict.title,
          subtitle: dict.subtitle,
          items: dict.items ?? [],
        },
      ]

  return (
    <section className="py-8 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        {sections.map((section: any, sectionIndex: number) => {
          const Icon = sectionIndex === 0 ? AlertCircle : CheckCircle2
          const iconClassName =
            sectionIndex === 0
              ? 'bg-amber-100 text-amber-700'
              : 'bg-emerald-100 text-emerald-700'

          return (
            <div
              key={sectionIndex}
              className={sectionIndex > 0 ? 'mt-10 md:mt-14 pt-10 md:pt-14 border-t border-slate-200' : ''}
            >
              <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6"
                >
                  {section.title}
                </motion.h2>

                {section.subtitle ? (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-base md:text-lg text-slate-600"
                  >
                    {section.subtitle}
                  </motion.p>
                ) : null}
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {(section.items ?? []).map((item: any, index: number) => {
                  const isString = typeof item === 'string'
                  const title = !isString && item?.title ? item.title : ''
                  const description = !isString && item?.description ? item.description : ''
                  const text = isString ? item : title

                  const cardBorderClass = sectionIndex === 0 ? 'border-amber-100/50 hover:border-amber-200' : 'border-emerald-100/50 hover:border-emerald-200'
                  const cardBgClass = sectionIndex === 0 ? 'bg-gradient-to-br from-white to-amber-50/30' : 'bg-gradient-to-br from-white to-emerald-50/30'

                  return (
                    <motion.div
                      key={`${sectionIndex}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className={`p-5 md:p-6 rounded-2xl shadow-sm border ${cardBorderClass} ${cardBgClass} hover:shadow-md transition-all duration-300`}
                    >
                      <div className={`flex ${description ? 'items-start' : 'items-center'} gap-3 md:gap-4`}>
                        <div
                          className={`w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${iconClassName}`}
                        >
                          <Icon className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                        <div className={description ? "space-y-2" : "flex-1"}>
                          <p className="text-base md:text-lg font-semibold text-slate-900 leading-snug">
                            {text}
                          </p>
                          {description ? (
                            <p className="text-sm md:text-base text-slate-600 leading-relaxed">{description}</p>
                          ) : null}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
