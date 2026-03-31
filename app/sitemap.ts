import type { MetadataRoute } from 'next'
import { LOCALES, buildAbsoluteLanguageAlternates, getLocalizedUrl } from '@/lib/seo'

const ROUTES = ['/', '/industry/education', '/industry/finance'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: getLocalizedUrl(locale, route),
      lastModified,
      changeFrequency: 'daily' as const,
      priority: route === '/' ? 1 : 0.7,
      alternates: {
        languages: buildAbsoluteLanguageAlternates(route),
      },
    }))
  )
}
