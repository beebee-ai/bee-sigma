'use client'

import { useState, useEffect } from 'react'
import { motion, PanInfo } from 'motion/react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials({ dict }: { dict: any }) {
  const [currentIndex, setCurrentIndex] = useState(5)
  const [isAnimating, setIsAnimating] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const items = dict.items || []
  // Duplicate items to create infinite loop effect: [0..4, 0..4, 0..4]
  const duplicatedItems = [...items, ...items, ...items]
  const totalItems = duplicatedItems.length

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTransitionEnabled(true)
    setCurrentIndex((prev) => prev + 1)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTransitionEnabled(true)
    setCurrentIndex((prev) => prev - 1)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      next()
    } else if (info.offset.x > threshold) {
      prev()
    }
  }

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setTransitionEnabled(true)
        setCurrentIndex((prev) => prev + 1)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, isAnimating])

  const handleAnimationComplete = () => {
    setIsAnimating(false)
    if (currentIndex >= 10) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex - 5)
    } else if (currentIndex <= 0) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex + 5)
    }
  }

  const activeDotIndex = ((currentIndex % 5) + 5) % 5

  return (
    <section className="py-12 md:py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 md:mb-6"
          >
            {dict.title}
          </motion.h2>
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-md border border-slate-200 items-center justify-center text-slate-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur shadow-md border border-slate-200 items-center justify-center text-slate-600 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Track Wrapper */}
          <div className="overflow-hidden -mx-4 md:mx-0 px-4 md:px-0 py-4">
            <motion.div
              className="flex w-[1500%] md:w-[750%] lg:w-[500%]"
              animate={{ x: `-${(currentIndex * 100) / totalItems}%` }}
              transition={{ 
                duration: transitionEnabled ? 0.5 : 0, 
                ease: 'easeInOut' 
              }}
              onAnimationComplete={handleAnimationComplete}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {duplicatedItems.map((item: any, index: number) => (
                <div
                  key={index}
                  style={{ width: `${100 / totalItems}%` }}
                  className="flex-shrink-0 px-3 md:px-4"
                >
                  <div className="bg-white p-6 md:p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 relative h-full flex flex-col select-none cursor-grab active:cursor-grabbing">
                    <Quote className="absolute top-4 left-4 md:top-8 md:left-8 w-6 h-6 md:w-12 md:h-12 text-gold-100 -z-0" />
                    <div className="relative z-10 flex-grow flex flex-col">
                      <p className="text-sm md:text-lg text-slate-700 font-medium leading-relaxed mb-6 md:mb-8 italic flex-grow">
                        &quot;<span 
                          className="[&>strong]:text-gold-500 [&>strong]:font-bold" 
                          dangerouslySetInnerHTML={{ __html: item.quote }} 
                        />&quot;
                      </p>
                      <div className="flex items-center gap-3 md:gap-4 mt-auto">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs md:text-sm flex-shrink-0">
                          {item.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs md:text-sm font-semibold text-slate-900">{item.author}</p>
                          {item.industry && (
                            <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">{item.industry}</p>
                          )}
                          {item.supplementary && (
                            <p className="text-[10px] md:text-xs text-slate-500 mt-0.5">{item.supplementary}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 md:mt-8">
          {[0, 1, 2, 3, 4].map((idx) => (
            <button
              key={idx}
              onClick={() => {
                if (isAnimating || activeDotIndex === idx) return
                setIsAnimating(true)
                setTransitionEnabled(true)
                setCurrentIndex(5 + idx)
              }}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                activeDotIndex === idx ? 'w-6 md:w-8 bg-gold-500' : 'w-2 md:w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
