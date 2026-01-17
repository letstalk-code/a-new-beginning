'use client'

import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { PROCESS_STEPS } from '@/lib/constants'

interface ProcessStepsProps {
  title?: string
  subtitle?: string
}

export default function ProcessSteps({
  title = 'How Placement Works',
  subtitle = 'We make the referral process simple and fast so your clients can get the help they need.',
}: ProcessStepsProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section header with logo accent */}
        <AnimatedSection className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.png"
              alt=""
              width={60}
              height={60}
              className="opacity-60"
            />
          </div>
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {PROCESS_STEPS.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.15}>
              <div className="text-center group">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8">
                  <div className="absolute inset-0 bg-terra-500/10 rounded-full group-hover:scale-110 transition-transform duration-300" />
                  <span className="relative text-3xl font-heading font-bold text-terra-500">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-forest-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-olive-700 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
