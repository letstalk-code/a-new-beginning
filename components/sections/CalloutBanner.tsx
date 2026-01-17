'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

interface CalloutBannerProps {
  title: string
  description?: string
  ctaText: string
  ctaHref: string
  secondaryCtaText?: string
  secondaryCtaHref?: string
}

export default function CalloutBanner({
  title,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: CalloutBannerProps) {
  return (
    <section className="py-16 lg:py-20 bg-terra-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={ctaHref}
              variant="secondary"
              size="lg"
            >
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button
                href={secondaryCtaHref}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-terra-500"
              >
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
