import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import LocationCards from '@/components/sections/LocationCards'
import CalloutBanner from '@/components/sections/CalloutBanner'
import ContactPanel from '@/components/sections/ContactPanel'

export const metadata: Metadata = {
  title: 'Locations | A New Beginning Sober Living',
  description: 'Sober living homes throughout Tampa Bay including Tampa, St. Petersburg, and New Port Richey. Find the right location for your recovery.',
}

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Our Tampa Bay Locations
            </h1>
            <p className="text-lg text-olive-700">
              We operate sober living homes across the Tampa Bay area. Each location
              offers the same high standards of care and support, with unique
              characteristics to fit different needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <LocationCards
        title="Find Your New Home"
        subtitle="Explore our locations and find the one that's right for you."
        showLinks={true}
      />

      {/* Map Placeholder */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold text-forest-900 mb-4">
              Service Area
            </h2>
            <p className="text-olive-700 max-w-2xl mx-auto">
              We serve clients throughout the Tampa Bay metropolitan area including
              Hillsborough, Pinellas, and Pasco counties.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-sand-100 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-sage-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-olive-700">Interactive map coming soon</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CalloutBanner
        title="Not Sure Which Location?"
        description="Our team can help you find the best fit based on your needs and preferences."
        ctaText="Talk to Our Team"
        ctaHref="/contact"
        secondaryCtaText="Submit Referral"
        secondaryCtaHref="/for-referrers"
      />

      <ContactPanel />
    </>
  )
}
