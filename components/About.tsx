'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

export default function About({ dict }: { dict: any }) {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              {dict.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {dict.description}
            </p>
            
            <div className="grid grid-cols-3 gap-6">
              {dict.stats.map((stat: any, index: number) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-gold-600">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-beta/pacer/pin.png"
              alt="BEE Sigma Founder"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
