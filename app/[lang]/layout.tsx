import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { getDictionary } from '@/lib/dictionaries'
import { SITE_URL } from '@/lib/seo'
import { buildOrganizationJsonLd, buildServiceJsonLd } from '@/lib/jsonld'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')
  
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.metadata.title,
    description: dict.metadata.description,
    robots: {
      index: true,
      follow: true,
    },
    formatDetection: {
      telephone: false,
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon-180x180.png',
    },
    openGraph: {
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['/og-image.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: ['/og-image.png'],
    },
    verification: {
      google: 'GnBKYNf13NrI8hoWx3Ji7xRlNdV4mwrYUqoTUl758vc',
    }
  }
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'zh' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const locale = lang as 'en' | 'zh'
  const dict = await getDictionary(locale)
  const organizationJsonLd = buildOrganizationJsonLd(locale, dict)
  const serviceJsonLd = buildServiceJsonLd(locale, dict)

  return (
    <html lang={lang} className={inter.variable}>
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="renderer" content="webkit" />
        <meta name="layoutmode" content="standard" />
        <meta name="imagemode" content="force" />
        <meta name="wap-font-scale" content="no" />
        <script
          id="organization-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          id="services-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar dict={dict.nav} modalDict={dict.contactModal} lang={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={{ ...dict.footer, emails: dict.contactModal.emails }} lang={locale} />
      </body>
    </html>
  )
}
