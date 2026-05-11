import Link from 'next/link'
import Image from 'next/image'
import DesktopNavActions from './NavbarDesktopActions'
import MobileMenu from './NavbarMobileMenu'
import NavbarState from './NavbarState'

export default function Navbar({ dict, modalDict, lang }: { dict: any; modalDict: any; lang: string }) {
  const navLinks = [
    { name: dict.home, href: `/${lang}` },
    { name: dict.about, href: `/${lang}#about` },
    { name: dict.solutions, href: `/${lang}#solutions` },
    { name: dict.industry, href: `/${lang}/industry/education` },
  ]

  return (
    <header
      id="site-navbar"
      data-solid="false"
      className="group/navbar fixed top-0 left-0 right-0 z-50 bg-transparent py-5 transition-all duration-300 data-[solid=true]:bg-white/90 data-[solid=true]:py-3 data-[solid=true]:shadow-sm data-[solid=true]:backdrop-blur-md"
    >
      <NavbarState lang={lang} />

      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href={`/${lang}#home`} className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-slate-900 flex items-center justify-center overflow-hidden shrink-0">
            <Image
              src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/logo.png"
              alt="BEE Sigma Logo"
              width={36}
              height={36}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-3">
            <span className="font-bold text-lg md:text-xl tracking-tight leading-none text-white group-data-[solid=true]/navbar:text-slate-900">
              BEE Sigma
            </span>
            <span className="hidden md:block w-px h-4 bg-white/30 group-data-[solid=true]/navbar:bg-slate-300" />
            <span className="text-[10px] md:text-xs font-medium tracking-wide mt-0.5 md:mt-0 text-white/80 group-data-[solid=true]/navbar:text-slate-500">
              {dict.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-white group-data-[solid=true]/navbar:text-slate-600 group-data-[solid=true]/navbar:hover:text-gold-500"
            >
              {link.name}
            </Link>
          ))}

          <DesktopNavActions dict={dict} modalDict={modalDict} lang={lang} />
        </nav>

        <MobileMenu dict={dict} modalDict={modalDict} lang={lang} navLinks={navLinks} />
      </div>
    </header>
  )
}
