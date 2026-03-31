import type { Metadata } from 'next'

export const LOCALES = ['en', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

const DEFAULT_SITE_URL = 'https://www.bee-sigma.com'

export const SITE_URL =
  process.env.APP_URL && /^https?:\/\//.test(process.env.APP_URL)
    ? process.env.APP_URL
    : DEFAULT_SITE_URL

const HREFLANGS: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
}

function normalizePath(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/'
  }

  const withLeadingSlash = pathname.startsWith('/') ? pathname : `/${pathname}`
  const trimmed = withLeadingSlash.replace(/\/+$/, '')

  return trimmed || '/'
}

export function stripLocaleFromPath(pathname: string): string {
  const normalizedPath = normalizePath(pathname)

  for (const locale of LOCALES) {
    if (normalizedPath === `/${locale}`) {
      return '/'
    }

    const localePrefix = `/${locale}/`
    if (normalizedPath.startsWith(localePrefix)) {
      return normalizePath(normalizedPath.slice(locale.length + 1))
    }
  }

  return normalizedPath
}

export function getLocalizedPath(locale: Locale, pathname = '/'): string {
  const normalizedPath = stripLocaleFromPath(pathname)

  if (normalizedPath === '/') {
    return `/${locale}`
  }

  return `/${locale}${normalizedPath}`
}

export function getLocalizedUrl(locale: Locale, pathname = '/'): string {
  return `${SITE_URL}${getLocalizedPath(locale, pathname)}`
}

export function getDefaultUrl(pathname = '/'): string {
  const normalizedPath = normalizePath(pathname)
  return normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`
}

export function buildLanguageAlternates(pathname = '/'): Record<string, string> {
  const alternates = Object.fromEntries([
    ...LOCALES.map((locale) => [HREFLANGS[locale], getLocalizedPath(locale, pathname)]),
    ['x-default', getDefaultUrl(pathname)],
  ])

  return alternates
}

export function buildAbsoluteLanguageAlternates(pathname = '/'): Record<string, string> {
  const alternates = Object.fromEntries([
    ...LOCALES.map((locale) => [HREFLANGS[locale], getLocalizedUrl(locale, pathname)]),
    ['x-default', getDefaultUrl(pathname)],
  ])

  return alternates
}

export function buildAlternates(locale: Locale, pathname = '/'): Metadata['alternates'] {
  return {
    canonical: getLocalizedPath(locale, pathname),
    languages: buildLanguageAlternates(pathname),
  }
}
