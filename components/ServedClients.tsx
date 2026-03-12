'use client'

import { motion } from 'motion/react'

export default function ServedClients({ dict }: { dict: any }) {
  // Duplicate array to ensure it's wider than the screen
  const clients = [...dict.clients, ...dict.clients, ...dict.clients, ...dict.clients]

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
            {dict.title}
          </h2>
        </div>
        
        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 pr-12 md:pr-24">
            {clients.map((client: string, index: number) => (
              <span
                key={`client-1-${index}`}
                className="text-lg md:text-xl font-bold text-slate-400 hover:text-gold-600 transition-colors duration-300 whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 pr-12 md:pr-24" aria-hidden="true">
            {clients.map((client: string, index: number) => (
              <span
                key={`client-2-${index}`}
                className="text-lg md:text-xl font-bold text-slate-400 hover:text-gold-600 transition-colors duration-300 whitespace-nowrap"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
