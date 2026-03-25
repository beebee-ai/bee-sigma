'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  dict: any
  lang: string
}

export default function ContactModal({ isOpen, onClose, dict, lang }: ContactModalProps) {
  const [mounted, setMounted] = useState(false)
  const showWechatQr = lang === 'zh'

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 text-center relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{dict.title}</h3>
              {showWechatQr ? (
                <>
                  <div className="relative w-48 h-48 mx-auto mb-4 bg-slate-50 rounded-xl p-2 border border-slate-100">
                    <Image
                      src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/customer-service-qrcode.png"
                      alt="WeChat QR Code"
                      fill
                      className="object-contain p-2"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <p className="text-slate-600 font-medium mb-6">{dict.scanText}</p>
                </>
              ) : null}
              
              <div className="space-y-3 text-left border-t border-slate-100 pt-6">
                {dict.emails?.map((item: any, index: number) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                    <span className="text-slate-500">{item.region}</span>
                    <a href={`mailto:${item.email}`} className="text-gold-600 hover:text-gold-700 font-medium transition-colors">
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}
