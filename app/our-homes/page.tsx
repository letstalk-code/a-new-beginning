import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import LocationCards from '@/components/sections/LocationCards'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CalloutBanner from '@/components/sections/CalloutBanner'
import { HOME_EXPECTATIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Our Homes | A New Beginning Sober Living',
  description: 'Tour our sober living homes in Tampa Bay. Clean, comfortable, and supportive environments designed to help you succeed in recovery.',
}

const AMENITIES = [
  {
    title: 'Furnished Rooms',
    description: 'All rooms come fully furnished with bed, dresser, and closet space.',
  },
  {
    title: 'Common Areas',
    description: 'Shared living rooms, kitchens, and outdoor spaces for community building.',
  },
  {
    title: 'Laundry Facilities',
    description: 'On-site washers and dryers available to all residents.',
  },
  {
    title: 'WiFi Included',
    description: 'High-speed internet access throughout the home.',
  },
  {
    title: 'Utilities Covered',
    description: 'All utilities including electric, water, and cable are included.',
  },
  {
    title: 'Safe Neighborhood',
    description: 'All our homes are in quiet, residential neighborhoods.',
  },
]

export default function OurHomesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Safe, Supportive Living
            </h1>
            <p className="text-lg text-olive-700">
              Our homes provide the structure and support you need to build a strong
              foundation in recovery. Each home is carefully maintained and staffed
              with experienced house managers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Home Amenities
            </h2>
            <p className="text-lg text-olive-700 max-w-2xl mx-auto">
              Everything you need for comfortable, focused recovery.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map((amenity, index) => (
              <AnimatedSection key={amenity.title} delay={index * 0.05}>
                <Card hover className="h-full">
                  <CardTitle className="mb-3">{amenity.title}</CardTitle>
                  <CardDescription>{amenity.description}</CardDescription>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* House Expectations */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              House Expectations
            </h2>
            <p className="text-lg text-olive-700 max-w-2xl mx-auto">
              Structure is key to successful recovery. Here&apos;s what to expect as a resident.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_EXPECTATIONS.map((expectation, index) => (
              <AnimatedSection key={expectation.title} delay={index * 0.05}>
                <Card hover className="h-full">
                  <CardTitle className="mb-3">{expectation.title}</CardTitle>
                  <CardDescription>{expectation.description}</CardDescription>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <LocationCards
        title="Explore Our Locations"
        subtitle="Find the right home for your recovery journey."
      />

      <FAQAccordion />

      <CalloutBanner
        title="Schedule a Tour"
        description="See our homes in person and meet our team. Tours available by appointment."
        ctaText="Contact Us"
        ctaHref="/contact"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+17272027307"
      />
    </>
  )
}
