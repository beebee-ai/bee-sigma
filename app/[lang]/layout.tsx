import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import '../globals.css'
import { getDictionary } from '@/lib/dictionaries'
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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: {
      icon: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/favicon.ico',
      apple: 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/apple-touch-icon.png',
    },
    openGraph: {
      images: ['https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/opengraph-image.png'],
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
