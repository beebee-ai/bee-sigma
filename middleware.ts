import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'zh']
const defaultLocale = 'zh'

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale
  
  // Parse accept-language header
  const languages = acceptLanguage.split(',').map(lang => {
    const [locale, q] = lang.split(';q=')
    return { locale: locale.trim().split('-')[0], q: q ? parseFloat(q) : 1 }
  }).sort((a, b) => b.q - a.q)

  for (const lang of languages) {
    if (locales.includes(lang.locale)) {
      return lang.locale
    }
  }
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (/^\/(en|zh)\/industry\/finance(\/.*)?$/.test(pathname)) {
    const locale = pathname.startsWith('/zh') ? 'zh' : 'en'
    return NextResponse.redirect(new URL(`/${locale}`, request.url))
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|images|.*\\..*).*)',
  ],
}
