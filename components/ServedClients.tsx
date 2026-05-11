'use client'

import { useState } from 'react'

function ClientLogo({
  name,
  logo,
  width,
  height,
}: {
  name: string
  logo?: string
  width?: number
  height?: number
}) {
  const [error, setError] = useState(false)

  if (!logo || error) {
    return (
      <div className="flex items-center justify-center whitespace-nowrap cursor-default group/item">
        <span className="text-lg md:text-xl font-bold text-[#404040] tracking-wide group-hover/item:text-slate-900 transition-colors duration-300">
          {name}
        </span>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 whitespace-nowrap">
      <img
        src={logo}
        alt={name}
        width={width}
        height={height}
        className="h-8 md:h-10 w-auto object-contain"
        onError={() => setError(true)}
        referrerPolicy="no-referrer"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
      />
    </div>
  )
}

export default function ServedClients({ dict }: { dict: any }) {
  const clients = dict.clients

  return (
    <section className="py-10 md:py-16 bg-slate-50 border-b border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xs md:text-sm font-semibold text-slate-600 uppercase tracking-widest">
            {dict.title}
          </h2>
        </div>

        <div className="flex overflow-hidden group">
          <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-24 pr-8 md:pr-24">
            {clients.map((client: any, index: number) => (
              <ClientLogo key={`client-1-${index}`} name={client.name} logo={client.logo} width={client.width} height={client.height} />
            ))}
          </div>
          <div className="flex shrink-0 animate-marquee items-center gap-8 md:gap-24 pr-8 md:pr-24" aria-hidden="true">
            {clients.map((client: any, index: number) => (
              <ClientLogo key={`client-2-${index}`} name={client.name} logo={client.logo} width={client.width} height={client.height} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
