'use client'

import { motion } from 'motion/react'

export default function TrustedBy({ dict }: { dict: any }) {
  // Duplicate arrays to ensure they are wider than the screen
  const companies = [...dict.companies, ...dict.companies]
  const universities = [...dict.universities, ...dict.universities]

  return (
    <section className="py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">
            {dict.title}
          </h2>
        </div>

        {/* Row 1: Companies */}
        <div className="flex overflow-hidden group mb-8">
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 pr-12 md:pr-24">
            {companies.map((name: string, index: number) => (
              <span
                key={`comp-1-${index}`}
                className="text-lg md:text-xl font-bold text-slate-300 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 pr-12 md:pr-24" aria-hidden="true">
            {companies.map((name: string, index: number) => (
              <span
                key={`comp-2-${index}`}
                className="text-lg md:text-xl font-bold text-slate-300 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2: Universities */}
        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 pr-12 md:pr-24" style={{ animationDirection: 'reverse' }}>
            {universities.map((name: string, index: number) => (
              <span
                key={`uni-1-${index}`}
                className="text-lg md:text-xl font-bold text-slate-300 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-12 md:gap-24 pr-12 md:pr-24" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
            {universities.map((name: string, index: number) => (
              <span
                key={`uni-2-${index}`}
                className="text-lg md:text-xl font-bold text-slate-300 hover:text-slate-800 transition-colors duration-300 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
