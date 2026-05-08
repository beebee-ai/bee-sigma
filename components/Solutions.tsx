'use client'

import { motion } from 'motion/react'
import { BrainCircuit } from 'lucide-react'

const YinYangIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a5 5 0 0 0 0 10 5 5 0 0 1 0 10" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
)

const LobsterClawIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M11 5C10 3 8 2 5 2" />
    <path d="M13 5C14 3 16 2 19 2" />
    <path d="M10 10l-2 1v-2" />
    <path d="M14 10l2 1v-2" />
    <path d="M8 9c-5 1-6-5-4-7 1 1 2 3 3 4l2-2c1 2 0 4-1 5z" />
    <path d="M16 9c5 1 6-5 4-7-1 1-2 3-3 4l-2-2c-1 2 0 4 1 5z" />
    <path d="M9.5 12H6" />
    <path d="M9.5 14L6 14.5" />
    <path d="M10 16l-3 1" />
    <path d="M14.5 12h3.5" />
    <path d="M14.5 14l3.5 .5" />
    <path d="M14 16l3 1" />
    <path d="M10 7c0-3 4-3 4 0 .5 4 .5 7-.5 9h-3c-1-2-1-5-.5-9z" />
    <path d="M10.5 16c0 2 .5 3 .5 3h2c0 0 .5-1 .5-3" />
    <path d="M10.3 17.5h3.4" />
    <path d="M11 19l-2 3 3-1 3 1-2-3" />
    <circle cx="10.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="13.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

export default function Solutions({ dict }: { dict: any }) {
  const icons = [YinYangIcon, BrainCircuit, LobsterClawIcon]

  return (
    <section id="solutions" className="py-8 md:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold mb-4 md:mb-6"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 relative">
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
                className="relative z-10 flex flex-col md:items-center md:text-center"
              >
                <div className="hidden md:flex w-16 h-16 rounded-full bg-slate-900 border-2 border-gold-500 items-center justify-center text-gold-400 mb-6 shadow-lg shadow-gold-500/20">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 md:p-8 rounded-2xl w-full h-full hover:bg-white/10 transition-colors text-left md:text-center">
                  <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4 md:block">
                    <div className="md:hidden w-8 h-8 rounded-full bg-slate-900 border-2 border-gold-500 flex items-center justify-center text-gold-400 shadow-lg shadow-gold-500/20 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base md:text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
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
