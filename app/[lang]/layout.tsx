import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../globals.css'
import { getDictionary } from '@/lib/dictionaries'
import { SITE_URL } from '@/lib/seo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const viewport: Viewport = {
  width: 'device-width,shrink-to-fit=no',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
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
      apple: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/apple-touch-icon.png',
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
  const dict = await getDictionary(lang as 'en' | 'zh')
  
  return (
    <html lang={lang} className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="renderer" content="webkit" />
        <meta name="layoutmode" content="standard" />
        <meta name="imagemode" content="force" />
        <meta name="wap-font-scale" content="no" />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar dict={dict.nav} modalDict={dict.contactModal} lang={lang} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={{ ...dict.footer, emails: dict.contactModal.emails }} lang={lang} />
      </body>
    </html>
  )
}
