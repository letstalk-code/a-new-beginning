'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { HERO_CONTENT, PHONE_LINK } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Supportive group meeting"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 lg:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-forest-900/85 backdrop-blur-sm px-8 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 max-w-3xl text-center"
            >
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                {HERO_CONTENT.headline}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
                {HERO_CONTENT.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/for-referrers" size="lg" className="min-w-[200px]">
                  {HERO_CONTENT.ctaPrimary}
                </Button>
                <Button
                  href={PHONE_LINK}
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] border-white text-white hover:bg-white hover:text-forest-900"
                >
                  {HERO_CONTENT.ctaSecondary}
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Carousel dots (decorative) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <span className="w-3 h-3 rounded-full bg-terra-500" />
        <span className="w-3 h-3 rounded-full bg-white/50" />
        <span className="w-3 h-3 rounded-full bg-white/50" />
        <span className="w-3 h-3 rounded-full bg-white/50" />
      </div>
    </section>
  )
}
