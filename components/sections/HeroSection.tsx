import Image from 'next/image'
import Button from '@/components/ui/Button'
import TrustChip from '@/components/ui/TrustChip'
import { HERO_CONTENT, PHONE_LINK, PHONE_NUMBER } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Residents talking together in the living room of a sober living home"
          fill
          className="object-cover"
          priority
          quality={80}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="animate-fade-up bg-forest-900/85 backdrop-blur-sm px-8 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 max-w-3xl text-center">
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
                {HERO_CONTENT.headline}
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed">
                {HERO_CONTENT.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  href={PHONE_LINK}
                  size="lg"
                  className="min-w-[200px] w-full sm:w-auto"
                >
                  {HERO_CONTENT.ctaSecondary}
                </Button>
                <Button
                  href="/for-referrers"
                  variant="outline"
                  size="lg"
                  className="min-w-[200px] w-full sm:w-auto border-white text-white hover:bg-white hover:text-forest-900"
                >
                  {HERO_CONTENT.ctaPrimary}
                </Button>
              </div>

              <a
                href={PHONE_LINK}
                className="inline-block text-white/90 hover:text-white text-lg font-semibold tracking-wide mb-8"
              >
                {PHONE_NUMBER} &mdash; answered 24/7
              </a>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {HERO_CONTENT.trustChips.map((chip) => (
                  <TrustChip key={chip}>{chip}</TrustChip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
