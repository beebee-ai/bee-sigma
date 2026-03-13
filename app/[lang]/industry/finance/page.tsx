import { getDictionary } from '@/lib/dictionaries'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')
  
  return {
    title: `${dict.nav.finance} | BEE Sigma`,
    description: lang === 'zh' ? '金融行业解决方案正在筹备中，敬请期待。' : 'Financial industry solutions are under preparation. Stay tuned.',
  }
}

export default async function FinanceIndustryPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'zh')

  return (
    <main className="pt-16 md:pt-24 min-h-[80vh] flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
          <span className="text-2xl md:text-3xl">🏦</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">{dict.nav.finance}</h1>
        <p className="text-base md:text-lg text-slate-500">
          {lang === 'zh' ? '金融行业解决方案正在筹备中，敬请期待。' : 'Financial industry solutions are under preparation. Stay tuned.'}
        </p>
      </div>
    </main>
  )
}
