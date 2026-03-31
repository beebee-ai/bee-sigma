import { SITE_URL, type Locale } from './seo'

interface ServiceItem {
  title: string
  description: string
}

interface Dictionary {
  metadata: { title: string; description: string }
  services: { items: ServiceItem[] }
}

const CONTACT_POINTS = [
  { region: 'New Zealand, Australia', email: 'brinny@beebee.ai' },
  { region: 'China, Hong Kong, Taiwan', email: 'amielyang@2brain.cn' },
  { region: 'Thailand, Southeast Asia', email: 'anna@2brain.ai' },
]

const LOCATIONS = [
  {
    name: 'New Zealand Office',
    streetAddress: 'B:Hive, 74 Taharoto Road, Smales Farm',
    addressLocality: 'Takapuna, Auckland',
    addressCountry: 'NZ',
  },
  {
    name: 'China Office',
    streetAddress: '成都高新孵化园 1 号楼 A 座',
    addressLocality: '成都市高新区',
    addressRegion: '四川省',
    addressCountry: 'CN',
  },
]

export function buildOrganizationJsonLd(locale: Locale, dict: Dictionary) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'BEE Sigma',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: dict.metadata.description,
    parentOrganization: {
      '@type': 'Organization',
      name: 'BEEBEE AI',
    },
    founder: {
      '@type': 'Person',
      name: 'Pin Zhou',
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'Auckland, New Zealand',
    },
    knowsLanguage: ['en', 'zh-CN'],
    location: LOCATIONS.map((loc) => ({
      '@type': 'Place',
      name: loc.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: loc.streetAddress,
        addressLocality: loc.addressLocality,
        ...(loc.addressRegion && { addressRegion: loc.addressRegion }),
        addressCountry: loc.addressCountry,
      },
    })),
    contactPoint: CONTACT_POINTS.map((cp) => ({
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: cp.email,
      areaServed: cp.region,
      availableLanguage: locale === 'zh' ? 'Chinese' : 'English',
    })),
  }
}

export function buildServiceJsonLd(locale: Locale, dict: Dictionary) {
  return dict.services.items.map((item, index) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-${index}`,
    name: item.title,
    description: item.description,
    serviceType: 'AI Consulting',
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'BEE Sigma',
    },
    areaServed: [
      { '@type': 'Country', name: 'New Zealand' },
      { '@type': 'Country', name: 'China' },
      { '@type': 'Country', name: 'Thailand' },
    ],
  }))
}
