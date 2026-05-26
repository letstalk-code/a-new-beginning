import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import ProcessSteps from '@/components/sections/ProcessSteps'
import CalloutBanner from '@/components/sections/CalloutBanner'
import ContactPanel from '@/components/sections/ContactPanel'

export const metadata: Metadata = {
  title: 'Admissions | A New Beginning Sober Living',
  description: 'Learn about our admissions process. Private-pay sober living for men and women in Tampa Bay. Same-day move-in available — arrive by 8 PM.',
}

const ADMISSION_REQUIREMENTS = [
  {
    title: 'Commitment to Sobriety',
    description: 'You must be willing to maintain a drug and alcohol-free lifestyle.',
  },
  {
    title: 'Recent Treatment or Support',
    description: 'We typically require completion of detox or treatment, or active participation in a recovery program.',
  },
  {
    title: 'Financial Responsibility',
    description: 'We\'re a private-pay program. Residents (or their family/sponsor) need to be able to cover weekly rent. Admissions will walk through pricing and options on the call.',
  },
  {
    title: 'Follow House Rules',
    description: 'Agreement to abide by house rules including curfew, meetings, and drug testing.',
  },
]

const PAYMENT_OPTIONS = [
  {
    title: 'Private Pay',
    description: 'We\'re a private-pay sober living program. Admissions walks through pricing on the phone so it fits your situation.',
  },
  {
    title: 'No Move-In Fee',
    description: 'No deposit or move-in fee. Utilities and weekly drug testing are included.',
  },
  {
    title: 'Weekly or Monthly',
    description: 'Pay weekly or monthly — we\'ll work out a schedule that makes sense.',
  },
  {
    title: 'Family & Sponsor Support',
    description: 'Many families or sponsors help cover the cost of recovery housing. We can talk through how that works.',
  },
]

export default function AdmissionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Start Your Journey Today
            </h1>
            <p className="text-lg text-olive-700">
              Our admissions process is simple and straightforward. We&apos;re here to help
              you find the right sober living environment for your recovery journey.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ProcessSteps
        title="Admissions Process"
        subtitle="From first contact to move-in, we make the process as smooth as possible."
      />

      {/* Requirements */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Admission Requirements
            </h2>
            <p className="text-lg text-olive-700 max-w-2xl mx-auto">
              To ensure a safe environment for all residents, we have a few basic requirements.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ADMISSION_REQUIREMENTS.map((req, index) => (
              <AnimatedSection key={req.title} delay={index * 0.05}>
                <Card hover className="h-full">
                  <CardTitle className="mb-3">{req.title}</CardTitle>
                  <CardDescription>{req.description}</CardDescription>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Payment Options
            </h2>
            <p className="text-lg text-olive-700 max-w-2xl mx-auto">
              We believe finances shouldn&apos;t be a barrier to recovery. We offer multiple
              payment options to make sober living accessible.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PAYMENT_OPTIONS.map((option, index) => (
              <AnimatedSection key={option.title} delay={index * 0.05}>
                <Card hover className="h-full text-center">
                  <CardTitle className="mb-3">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CalloutBanner
        title="Ready to Apply?"
        description="Take the first step toward your recovery. Our team is ready to help."
        ctaText="Start Your Application"
        ctaHref="/for-referrers"
        secondaryCtaText="Call Us Now"
        secondaryCtaHref="tel:+17272027307"
      />

      <ContactPanel />
    </>
  )
}
