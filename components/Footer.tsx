'use client'

import { motion } from 'motion/react'
import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function Footer({ dict, lang }: { dict: any; lang: string }) {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-400 py-10 md:py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center overflow-hidden">
                <Image 
                  src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/logo.png" 
                  alt="BEE Sigma Logo" 
                  width={32} 
                  height={32} 
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                BEE Sigma
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              {dict.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-white font-bold mb-2 uppercase tracking-wider text-sm">
              {dict.contactTitle}
            </p>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col gap-4">
                {dict.emails?.map((item: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <span className="text-slate-400 text-xs">{item.region}</span>
                      <a href={`mailto:${item.email}`} className="hover:text-gold-400 transition-colors break-all sm:break-normal">{item.email}</a>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                {lang === 'zh' ? (
                  <>
                    <div className="bg-white p-2 rounded-xl inline-block mb-2">
                      <Image
                        src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/customer-service-qrcode.png"
                        alt="WeChat QR Code"
                        width={100}
                        height={100}
                        className="object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-slate-500 text-xs">微信扫描二维码进行咨询</p>
                  </>
                ) : null}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p className="text-white font-bold mb-2 uppercase tracking-wider text-sm">
              {dict.locationsTitle}
            </p>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=中国四川省成都市高新区成都高新孵化园1号楼A座" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                中国四川省成都市高新区成都高新孵化园 1 号楼 A 座
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <a 
                href="https://www.google.com/maps/search/?api=1&query=B:Hive,+74+Taharoto+Road,+Smales+Farm,+Takapuna,+Auckland,+New+Zealand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
              >
                B:Hive, 74 Taharoto Road, Smales Farm, Takapuna, Auckland, New Zealand
              </a>
            </div>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex items-center justify-center md:justify-start gap-4 text-sm">
          <div className="flex items-center gap-4">
            <p>{dict.rights.replace('{year}', new Date().getFullYear().toString())}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
