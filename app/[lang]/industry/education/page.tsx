import { getDictionary } from '@/lib/dictionaries'
import type { Metadata } from 'next'
import { buildAlternates, type Locale } from '@/lib/seo'
import PainPoints from '@/components/PainPoints'
import Process from '@/components/Process'
import EduResults from '@/components/EduResults'
import EduCaseStudy from '@/components/EduCaseStudy'
import EduMethodology from '@/components/EduMethodology'
import EduCooperation from '@/components/EduCooperation'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')
  
  return {
    title: `${dict.nav.education} | BEE Sigma`,
    description: lang === 'zh' ? '针对教育机构的定制化 AI 落地解决方案，解决获客、交付与经验复制难题。' : 'Customized AI implementation solutions for educational institutions, solving acquisition, delivery, and experience replication challenges.',
    alternates: buildAlternates(lang as Locale, '/industry/education'),
  }
}

export default async function EducationIndustryPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')

  return (
    <main className="pt-16 md:pt-20">
      <section className="py-16 md:py-24 bg-slate-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-600/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-amber-500/10 blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{dict.nav.education}</h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto">
            {lang === 'zh' ? '针对教育机构的定制化 AI 落地解决方案，解决获客、交付与经验复制难题。' : 'Customized AI implementation solutions for educational institutions, solving acquisition, delivery, and experience replication challenges.'}
          </p>
        </div>
      </section>
      
      <PainPoints dict={dict.eduPainPoints} />
      <EduMethodology dict={dict.eduMethodology} />
      <Process dict={dict.eduProcess} />
      <EduResults dict={dict.eduResults} />
      <EduCaseStudy dict={dict.eduCaseStudy} />
      <EduCooperation dict={dict.eduCooperation} />
    </main>
  )
}
