import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card, { CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ContactPanel from '@/components/sections/ContactPanel'
import CalloutBanner from '@/components/sections/CalloutBanner'
import { LOCATIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'St. Petersburg Sober Living | A New Beginning',
  description: 'Sober living near the beach in St. Petersburg, FL. Peaceful recovery environment with outdoor activities and meditation spaces. Same-day placement available.',
}

const location = LOCATIONS.find((l) => l.slug === 'st-petersburg')!

const ST_PETE_DETAILS = {
  highlights: [
    'Minutes from beautiful Gulf beaches',
    'Peaceful, serene neighborhood',
    'On-site meditation garden',
    'Strong recovery community',
    'Outdoor recreation opportunities',
  ],
  nearbyResources: [
    { name: 'Bayfront Health St. Pete', distance: '12 min' },
    { name: 'Suncoast Recovery Center', distance: '8 min' },
    { name: 'St. Pete Beach AA', distance: '10 min' },
    { name: 'Downtown St. Pete', distance: '15 min' },
  ],
}

export default function StPetersburgPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-terra-500/10 text-terra-500 rounded-full text-sm font-medium mb-4">
              St. Petersburg Location
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Sober Living in St. Petersburg
            </h1>
            <p className="text-lg text-olive-700 mb-8">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/for-referrers" size="lg">
                Refer to St. Pete
              </Button>
              <Button href="tel:+18135550123" variant="outline" size="lg">
                Call for Availability
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-forest-900 mb-6">
                Why Choose St. Petersburg?
              </h2>
              <p className="text-olive-700 mb-6">
                Our St. Petersburg location offers a peaceful coastal setting perfect
                for those who find healing in nature. With easy access to beaches,
                parks, and outdoor activities, residents can incorporate healthy
                recreation into their recovery routine.
              </p>
              <ul className="space-y-3">
                {ST_PETE_DETAILS.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start">
                    <svg
                      className="w-5 h-5 mr-3 text-terra-500 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-olive-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="h-full">
                <h3 className="font-heading text-xl font-semibold text-forest-900 mb-6">
                  Nearby Resources
                </h3>
                <div className="space-y-4">
                  {ST_PETE_DETAILS.nearbyResources.map((resource) => (
                    <div
                      key={resource.name}
                      className="flex items-center justify-between py-3 border-b border-sand-100 last:border-0"
                    >
                      <span className="text-forest-900">{resource.name}</span>
                      <span className="text-sm text-olive-700 bg-sand-100 px-3 py-1 rounded-full">
                        {resource.distance}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-forest-900 mb-4">
              Home Features
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {location.features.map((feature, index) => (
              <AnimatedSection key={feature} delay={index * 0.05}>
                <Card hover className="text-center">
                  <CardTitle>{feature}</CardTitle>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CalloutBanner
        title="Find Peace in Your Recovery"
        description="Experience sober living near the beach. Beds available now."
        ctaText="Submit Referral"
        ctaHref="/for-referrers"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+18135550123"
      />

      <ContactPanel />
    </>
  )
}
