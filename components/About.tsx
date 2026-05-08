'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Row 1: Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            {dict.title}
          </h2>
        </motion.div>

        {/* Row 2: Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {dict.description}
          </p>
        </motion.div>

        {/* Row 3: Founder Intro & Image */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center mb-16 md:mb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-8 order-2 md:order-1"
          >
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4 md:mb-6">
              {dict.founder.title} - {dict.founder.name}
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {dict.founder.bio.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-gold-600 mr-3 mt-1.5 text-lg leading-none">•</span>
                  <span className="text-base md:text-lg text-slate-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 order-1 md:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-[260px] mx-auto md:max-w-full">
              <Image
                src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/founder.webp?v=20260330"
                alt="BEE Sigma Founder"
                width={800}
                height={1000}
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 33vw, 320px"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Row 4: Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-4xl mx-auto pt-8 md:pt-12 border-t border-slate-100"
        >
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            {dict.stats.map((stat: any, index: number) => (
              <div key={index} className="flex flex-col gap-2">
                <span className="text-3xl md:text-5xl font-bold text-gold-600">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
