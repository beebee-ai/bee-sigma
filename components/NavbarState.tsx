'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function NavbarState({ lang }: { lang: string }) {
  const pathname = usePathname()

  useEffect(() => {
    const header = document.getElementById('site-navbar')
    if (!header) return

    let ticking = false
    const updateSolidState = () => {
      const isHome = pathname === `/${lang}` || pathname === `/${lang}/`
      const isSolid = window.scrollY > 20 || !isHome
      header.dataset.solid = isSolid ? 'true' : 'false'
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateSolidState()
        ticking = false
      })
    }

    updateSolidState()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lang, pathname])

  return null
}
