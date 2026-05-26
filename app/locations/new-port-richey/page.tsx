import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card, { CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ContactPanel from '@/components/sections/ContactPanel'
import CalloutBanner from '@/components/sections/CalloutBanner'
import { LOCATIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'New Port Richey Sober Living | A New Beginning',
  description: 'Affordable sober living in New Port Richey, FL. Quiet residential neighborhood perfect for focused recovery. Same-day placement available.',
}

const location = LOCATIONS.find((l) => l.slug === 'new-port-richey')!

const NPR_DETAILS = {
  highlights: [
    'Quiet, family-friendly neighborhood',
    'Most affordable location',
    'Large home with spacious common areas',
    'Strong local recovery meetings',
    'Away from triggers of city life',
  ],
  nearbyResources: [
    { name: 'Medical Center of Trinity', distance: '10 min' },
    { name: 'BayCare Recovery', distance: '15 min' },
    { name: 'NPR Alano Club', distance: '8 min' },
    { name: 'Workforce Center', distance: '12 min' },
  ],
}

export default function NewPortRicheyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 bg-terra-500/10 text-terra-500 rounded-full text-sm font-medium mb-4">
              New Port Richey Location
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Sober Living in New Port Richey
            </h1>
            <p className="text-lg text-olive-700 mb-8">
              {location.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/for-referrers" size="lg">
                Refer to NPR
              </Button>
              <Button href="tel:+17272027307" variant="outline" size="lg">
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
                Why Choose New Port Richey?
              </h2>
              <p className="text-olive-700 mb-6">
                Our New Port Richey location is perfect for those who prefer a quieter,
                more affordable setting. Away from the hustle of the city, this home
                provides a peaceful environment where residents can focus entirely
                on their recovery without distractions.
              </p>
              <ul className="space-y-3">
                {NPR_DETAILS.highlights.map((highlight) => (
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
                  {NPR_DETAILS.nearbyResources.map((resource) => (
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
        title="Affordable Recovery Housing"
        description="Quality sober living at our most affordable rates. Beds available now."
        ctaText="Submit Referral"
        ctaHref="/for-referrers"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+17272027307"
      />

      <ContactPanel />
    </>
  )
}
