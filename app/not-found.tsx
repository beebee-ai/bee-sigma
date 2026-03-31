import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 - Page Not Found | BEE Sigma',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center px-4">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="BEE Sigma Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-2xl tracking-tight">BEE Sigma</span>
          </div>

          <h1 className="text-7xl font-bold mb-4 text-amber-500">404</h1>

          <p className="text-xl text-slate-300 mb-2">Page Not Found</p>
          <p className="text-lg text-slate-500 mb-10">
            页面未找到
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/en"
              className="px-6 py-3 rounded-full bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
            >
              English Home
            </Link>
            <Link
              href="/zh"
              className="px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10"
            >
              中文首页
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
