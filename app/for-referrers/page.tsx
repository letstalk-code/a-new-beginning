import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card, { CardTitle, CardDescription } from '@/components/ui/Card'
import ReferralFastTrackWizard from '@/components/forms/ReferralFastTrackWizard'
import ContactPanel from '@/components/sections/ContactPanel'

export const metadata: Metadata = {
  title: 'For Referrers | A New Beginning Sober Living',
  description: 'Fast, easy referral process for treatment centers, hospitals, case managers, and families. Same-day placement available. Submit a referral online or call us now.',
}

const REFERRER_BENEFITS = [
  {
    title: 'Fast Response',
    description: 'We respond to all referrals within 1 hour during business hours.',
  },
  {
    title: 'Same-Day Placement',
    description: 'Qualified clients can move in the same day their referral is approved.',
  },
  {
    title: 'Clear Communication',
    description: 'Regular updates on your client\'s progress and any concerns.',
  },
  {
    title: 'Insurance Coordination',
    description: 'We handle insurance verification and can work with most payment plans.',
  },
]

const WHAT_WE_NEED = [
  'Client name and contact information',
  'Referrer contact information',
  'Preferred location and move-in timeframe',
  'Brief history and any special needs',
  'Insurance information (if applicable)',
]

export default function ForReferrersPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Easy Referrals, Fast Placement
            </h1>
            <p className="text-lg text-olive-700">
              We make placing your clients simple. Submit a referral in under 2 minutes
              and we&apos;ll handle the rest. Same-day placement available for qualified referrals.
            </p>
          </AnimatedSection>

          {/* Referral Form */}
          <AnimatedSection delay={0.1}>
            <Card className="max-w-2xl mx-auto">
              <h2 className="font-heading text-2xl font-bold text-forest-900 mb-6 text-center">
                Submit a Referral
              </h2>
              <ReferralFastTrackWizard />
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
              Why Refer to Us?
            </h2>
            <p className="text-lg text-olive-700 max-w-2xl mx-auto">
              We understand the urgency of finding safe housing for your clients.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REFERRER_BENEFITS.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.05}>
                <Card hover className="h-full">
                  <CardTitle className="mb-3">{benefit.title}</CardTitle>
                  <CardDescription>{benefit.description}</CardDescription>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What We Need */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
                What We Need From You
              </h2>
              <p className="text-lg text-olive-700">
                To process your referral quickly, please have the following information ready.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card>
                <ul className="space-y-4">
                  {WHAT_WE_NEED.map((item) => (
                    <li key={item} className="flex items-start">
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
                      <span className="text-olive-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ContactPanel
        title="Prefer to Call?"
        subtitle="Our admissions team is available to assist with referrals and answer any questions."
      />
    </>
  )
}
