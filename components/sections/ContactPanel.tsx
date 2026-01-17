'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import { PHONE_NUMBER, PHONE_LINK, TEXT_LINK, EMAIL, EMAIL_LINK } from '@/lib/constants'

interface ContactPanelProps {
  title?: string
  subtitle?: string
}

export default function ContactPanel({
  title = 'Get in Touch',
  subtitle = 'Ready to make a referral or have questions? We\'re here to help 24/7.',
}: ContactPanelProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-forest-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-olive-700 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <a
              href={PHONE_LINK}
              className="flex flex-col items-center p-8 bg-sand-100 rounded-xl hover:bg-sand-200/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-terra-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-forest-900 mb-1">Call Us</h3>
              <p className="text-terra-500 font-medium">{PHONE_NUMBER}</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <a
              href={TEXT_LINK}
              className="flex flex-col items-center p-8 bg-sand-100 rounded-xl hover:bg-sand-200/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-terra-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-forest-900 mb-1">Text Us</h3>
              <p className="text-terra-500 font-medium">{PHONE_NUMBER}</p>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href={EMAIL_LINK}
              className="flex flex-col items-center p-8 bg-sand-100 rounded-xl hover:bg-sand-200/50 transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-terra-500 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-heading font-semibold text-forest-900 mb-1">Email Us</h3>
              <p className="text-terra-500 font-medium text-sm">{EMAIL}</p>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
