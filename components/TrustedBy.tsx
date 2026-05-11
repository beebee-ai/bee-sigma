'use client'

import { useState } from 'react'
function LogoItem({
  name,
  logo,
  width,
  height,
  isUniversity = false,
}: {
  name: string
  logo: string
  width?: number
  height?: number
  isUniversity?: boolean
}) {
  const [error, setError] = useState(false)

  if (!logo || error) {
    return (
      <div className="flex items-center justify-center whitespace-nowrap cursor-default group/item">
        <span className="text-lg md:text-xl font-bold text-[#404040] group-hover/item:text-slate-900 transition-colors duration-300">
          {name}
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 whitespace-nowrap">
      {/* Using standard img tag instead of next/image to prevent server-side fetch errors during SSR */}
      <img
        src={logo}
        alt={name}
        width={width}
        height={height}
        className={`${isUniversity ? 'h-8 md:h-10' : 'h-6 md:h-8'} w-auto object-contain`}
        onError={() => setError(true)}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}

export default function TrustedBy({ dict }: { dict: any }) {
  const companies = dict.companies
  const universities = dict.universities

  return (
    <section className="py-10 md:py-16 bg-white border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-widest">
            {dict.title}
          </h2>
        </div>

        {/* Row 1: Companies */}
        <div className="flex overflow-hidden group mb-6 md:mb-8">
          <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-16 pr-8 md:pr-16">
            {companies.map((company: any, index: number) => (
              <LogoItem key={`comp-1-${index}`} name={company.name} logo={company.logo} width={company.width} height={company.height} />
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-16 pr-8 md:pr-16" aria-hidden="true">
            {companies.map((company: any, index: number) => (
              <LogoItem key={`comp-2-${index}`} name={company.name} logo={company.logo} width={company.width} height={company.height} />
            ))}
          </div>
        </div>

        {/* Row 2: Universities */}
        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-16 pr-8 md:pr-16" style={{ animationDirection: 'reverse' }}>
            {universities.map((uni: any, index: number) => (
              <LogoItem key={`uni-1-${index}`} name={uni.name} logo={uni.logo} width={uni.width} height={uni.height} isUniversity={true} />
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-16 pr-8 md:pr-16" aria-hidden="true" style={{ animationDirection: 'reverse' }}>
            {universities.map((uni: any, index: number) => (
              <LogoItem key={`uni-2-${index}`} name={uni.name} logo={uni.logo} width={uni.width} height={uni.height} isUniversity={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
