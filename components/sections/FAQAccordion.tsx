'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { FAQS } from '@/lib/constants'

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title?: string
  subtitle?: string
  faqs?: FAQItem[]
}

export default function FAQAccordion({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our sober living homes.',
  faqs = FAQS,
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-sand-100">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="border-b border-gray-200 bg-white mb-2">
                <button
                  type="button"
                  className="w-full py-6 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading font-semibold text-forest-900 pr-8">
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index ? 'bg-terra-500 text-white' : 'bg-sand-100 text-forest-900'
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-olive-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
