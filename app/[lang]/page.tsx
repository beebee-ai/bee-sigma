import { getDictionary } from '@/lib/dictionaries'
import Hero from '@/components/Hero'
import ServedClients from '@/components/ServedClients'
import TrustedBy from '@/components/TrustedBy'
import About from '@/components/About'
import PainPoints from '@/components/PainPoints'
import Services from '@/components/Services'
import Solutions from '@/components/Solutions'
import Testimonials from '@/components/Testimonials'

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')

  return (
    <>
      <Hero dict={dict.hero} lang={lang} />
      <ServedClients dict={dict.servedClients} />
      <TrustedBy dict={dict.trustedBy} />
      <About dict={dict.about} />
      <PainPoints dict={dict.generalPainPoints} />
      <Services dict={dict.services} />
      <Solutions dict={dict.solutions} />
      <Testimonials dict={dict.testimonials} />
    </>
  )
}
