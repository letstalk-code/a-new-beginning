import HeroSection from '@/components/sections/HeroSection'
import ProcessSteps from '@/components/sections/ProcessSteps'
import InfoCardsGrid from '@/components/sections/InfoCardsGrid'
import TestimonialCarousel from '@/components/sections/TestimonialCarousel'
import LocationCards from '@/components/sections/LocationCards'
import FAQAccordion from '@/components/sections/FAQAccordion'
import CalloutBanner from '@/components/sections/CalloutBanner'
import { WHAT_WE_OFFER, WHO_WE_HELP } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <ProcessSteps />

      <InfoCardsGrid
        title="What We Offer"
        subtitle="Our sober living homes provide everything residents need to build a strong foundation in recovery."
        cards={WHAT_WE_OFFER}
        background="sand"
      />

      <LocationCards
        title="Our Locations"
        subtitle="Safe, structured sober living homes throughout Tampa Bay."
      />

      <InfoCardsGrid
        title="Who We Help"
        subtitle="We partner with professionals and families to provide quality recovery housing."
        cards={WHO_WE_HELP}
        background="white"
      />

      <TestimonialCarousel />

      <FAQAccordion />

      <CalloutBanner
        title="Ready to Make a Referral?"
        description="Our team responds within 1 hour during business hours. Same-day placement available."
        ctaText="Refer a Client Now"
        ctaHref="/for-referrers"
        secondaryCtaText="Call Us"
        secondaryCtaHref="tel:+17272027307"
      />
    </>
  )
}
