import type { Metadata } from 'next'
import { getDictionary } from '@/lib/dictionaries'
import { buildAlternates, type Locale } from '@/lib/seo'
import Hero from '@/components/Hero'
import ServedClients from '@/components/ServedClients'
import TrustedBy from '@/components/TrustedBy'
import About from '@/components/About'
import PainPoints from '@/components/PainPoints'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'

const HERO_BG_IMAGE = 'https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/705-1920x1080-blur_4.jpg'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  return {
    alternates: buildAlternates(lang as Locale, '/'),
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')

  return (
    <>
      <link
        rel="preload"
        as="image"
        href={HERO_BG_IMAGE}
        fetchPriority="high"
      />
      <Hero dict={dict.hero} modalDict={dict.contactModal} lang={lang} />
      <ServedClients dict={dict.servedClients} />
      <TrustedBy dict={dict.trustedBy} />
      <PainPoints dict={dict.generalPainPoints} />
      <Solutions dict={dict.solutions} />
      <Services dict={dict.services} />
      <About dict={dict.about} />
      <Testimonials dict={dict.testimonials} />
    </>
  )
}
