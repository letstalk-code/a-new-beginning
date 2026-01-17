'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { LOCATIONS } from '@/lib/constants'

interface LocationCardsProps {
  title?: string
  subtitle?: string
  showLinks?: boolean
}

export default function LocationCards({
  title = 'Our Locations',
  subtitle = 'We have sober living homes throughout Tampa Bay to serve you.',
  showLinks = true,
}: LocationCardsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {LOCATIONS.map((location, index) => (
            <AnimatedSection key={location.slug} delay={index * 0.1}>
              <div className="group bg-sand-100 h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Location header */}
                <div className="bg-forest-900 p-6">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {location.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-olive-700 mb-6 flex-1">{location.description}</p>

                  <ul className="space-y-3 mb-6">
                    {location.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-olive-700">
                        <span className="w-1.5 h-1.5 bg-terra-500 rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {showLinks && (
                    <div className="flex gap-3 mt-auto">
                      <Button
                        href={`/locations/${location.slug}`}
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs"
                      >
                        Learn More
                      </Button>
                      <Button href="/for-referrers" size="sm" className="flex-1 text-xs">
                        Refer Here
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {showLinks && (
          <AnimatedSection className="text-center mt-12" delay={0.3}>
            <Link
              href="/locations"
              className="text-terra-500 hover:text-terra-500/80 font-semibold inline-flex items-center uppercase tracking-wide text-sm"
            >
              View All Locations
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
