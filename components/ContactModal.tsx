'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import Image from 'next/image'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  dict: any
}

export default function ContactModal({ isOpen, onClose, dict }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="p-6 text-center relative">
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <h3 className="text-xl font-bold text-slate-900 mb-6">{dict.title}</h3>
              <div className="relative w-48 h-48 mx-auto mb-4 bg-slate-50 rounded-xl p-2 border border-slate-100">
                <Image
                  src="https://beebee-s3-sit.s3.us-west-2.amazonaws.com/bee-sigma/customer-service-qrcode.png"
                  alt="WeChat QR Code"
                  fill
                  className="object-contain p-2"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-slate-600 font-medium">{dict.scanText}</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
