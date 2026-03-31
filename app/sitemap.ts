import type { MetadataRoute } from 'next'
import { LOCALES, buildAbsoluteLanguageAlternates, getLocalizedUrl } from '@/lib/seo'

interface RouteConfig {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

const ROUTES: RouteConfig[] = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/industry/education', priority: 0.7, changeFrequency: 'monthly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.flatMap((route) =>
    LOCALES.map((locale) => ({
      url: getLocalizedUrl(locale, route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: buildAbsoluteLanguageAlternates(route.path),
      },
    }))
  )
}
