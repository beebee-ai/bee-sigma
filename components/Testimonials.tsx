'use client'

import { useState, useEffect, useRef, type PointerEvent } from 'react'
import { motion } from 'motion/react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials({ dict }: { dict: any }) {
  const items = dict.items || []
  const itemsLength = items.length || 1

  const [currentIndex, setCurrentIndex] = useState(itemsLength)
  const [isAnimating, setIsAnimating] = useState(false)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const swipeStartX = useRef<number | null>(null)

  // Duplicate items to create infinite loop effect: [0..N, 0..N, 0..N]
  const duplicatedItems = [...items, ...items, ...items]
  const totalItems = duplicatedItems.length

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTransitionEnabled(true)
    setCurrentIndex((prev: number) => prev + 1)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTransitionEnabled(true)
    setCurrentIndex((prev: number) => prev - 1)
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (isAnimating) return
    swipeStartX.current = event.clientX
    event.currentTarget.setPointerCapture?.(event.pointerId)
  }

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (swipeStartX.current === null) return

    const offsetX = event.clientX - swipeStartX.current
    const threshold = 50
    swipeStartX.current = null
    event.currentTarget.releasePointerCapture?.(event.pointerId)

    if (offsetX < -threshold) {
      next()
    } else if (offsetX > threshold) {
      prev()
    }
  }

  const handlePointerCancel = () => {
    swipeStartX.current = null
  }

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setTransitionEnabled(true)
        setCurrentIndex((prev: number) => prev + 1)
      }
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, isAnimating])

  const handleAnimationComplete = () => {
    setIsAnimating(false)
    if (currentIndex >= itemsLength * 2) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex - itemsLength)
    } else if (currentIndex <= 0) {
      setTransitionEnabled(false)
      setCurrentIndex(currentIndex + itemsLength)
    }
  }

  const activeDotIndex = ((currentIndex % itemsLength) + itemsLength) % itemsLength

  return (
    <section className="py-12 md:py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
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
            <style>{`
              .testimonial-track {
                --items-per-view: 1;
              }
              @media (min-width: 768px) {
                .testimonial-track {
                  --items-per-view: 2;
                }
              }
              @media (min-width: 1024px) {
                .testimonial-track {
                  --items-per-view: 3;
                }
              }
            `}</style>
            <motion.div
              className="flex testimonial-track touch-pan-y cursor-grab active:cursor-grabbing"
              style={{ width: `calc(${totalItems} * 100% / var(--items-per-view))` }}
              animate={{ x: `-${(currentIndex * 100) / totalItems}%` }}
              transition={{
                duration: transitionEnabled ? 0.5 : 0,
                ease: 'easeInOut'
              }}
              onAnimationComplete={handleAnimationComplete}
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
            >
              {duplicatedItems.map((item: any, index: number) => (
                <div
                  key={index}
                  style={{ width: `${100 / totalItems}%` }}
                  className="flex-shrink-0 px-3 md:px-4"
                >
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 relative h-full flex flex-col select-none cursor-grab active:cursor-grabbing">
                    <Quote className="absolute top-4 left-4 md:top-6 md:left-6 w-6 h-6 md:w-10 md:h-10 text-gold-100 -z-0" />
                    <div className="relative z-10 flex-grow flex flex-col">
                      <p className="text-sm md:text-base lg:text-sm xl:text-base text-slate-700 font-medium leading-relaxed mb-6 md:mb-8 italic flex-grow">
                        <span
                          className="[&>strong]:text-gold-700 [&>strong]:font-bold"
                          dangerouslySetInnerHTML={{ __html: item.quote }}
                        />
                      </p>
                      <div className="mt-auto pt-6 border-t border-slate-100">
                        <p className="text-sm md:text-base font-semibold text-slate-900">{item.author}</p>
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          {item.industry && (
                            <span className="text-[10px] md:text-xs font-medium text-gold-800 bg-gold-100 px-2 py-0.5 rounded-full">
                              {item.industry}
                            </span>
                          )}
                          {item.supplementary && (
                            <span className="text-[10px] md:text-xs text-slate-500">
                              {item.supplementary}
                            </span>
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
        <div className="flex items-center justify-center gap-0 mt-4 md:mt-8">
          {Array.from({ length: itemsLength }).map((_, idx) => {
            const isActive = activeDotIndex === idx

            return (
              <button
                key={idx}
                onClick={() => {
                  if (isAnimating || isActive) return
                  setIsAnimating(true)
                  setTransitionEnabled(true)
                  setCurrentIndex(itemsLength + idx)
                }}
                className="flex items-center justify-center rounded-full px-2 py-2"
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={`block h-2 rounded-full transition-all duration-300 ${
                    isActive ? 'w-8 bg-gold-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
