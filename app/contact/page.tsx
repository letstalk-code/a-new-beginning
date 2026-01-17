import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Card from '@/components/ui/Card'
import ContactForm from '@/components/forms/ContactForm'
import ContactPanel from '@/components/sections/ContactPanel'
import { LOCATIONS, PHONE_NUMBER, EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | A New Beginning Sober Living',
  description: 'Contact A New Beginning Sober Living. Call, text, or email us for referrals, tours, or questions. Available 24/7.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-sand-100 to-white">
        <div className="container-custom">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-forest-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-olive-700">
              Have questions about our sober living homes? Need to make a referral?
              We&apos;re here to help 24/7. Reach out by phone, text, or email.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ContactPanel />

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-sand-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="font-heading text-3xl font-bold text-forest-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-olive-700 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
                For urgent matters, please call us directly.
              </p>
              <Card>
                <ContactForm />
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="font-heading text-3xl font-bold text-forest-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card>
                  <h3 className="font-heading font-semibold text-forest-900 mb-4">
                    Main Office
                  </h3>
                  <div className="space-y-3 text-olive-700">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-terra-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {PHONE_NUMBER}
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-terra-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {EMAIL}
                    </p>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-heading font-semibold text-forest-900 mb-4">
                    Our Locations
                  </h3>
                  <div className="space-y-4">
                    {LOCATIONS.map((location) => (
                      <div key={location.slug} className="flex items-start">
                        <svg className="w-5 h-5 mr-3 text-terra-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div>
                          <p className="font-medium text-forest-900">{location.name}</p>
                          <p className="text-sm text-olive-700">{location.address}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="font-heading font-semibold text-forest-900 mb-4">
                    Office Hours
                  </h3>
                  <div className="space-y-2 text-olive-700">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8:00 AM - 8:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </p>
                    <p className="text-sm text-terra-500 mt-4">
                      * 24/7 emergency line available
                    </p>
                  </div>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
