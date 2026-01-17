'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import FormSuccess from './FormSuccess'
import { REFERRER_TYPES, TIMEFRAMES, LOCATIONS } from '@/lib/constants'
import { validateEmail, validatePhone } from '@/lib/utils'

interface FormData {
  referrerType: string
  city: string
  timeframe: string
  notes: string
  name: string
  phone: string
  email: string
  organization: string
}

interface FormErrors {
  [key: string]: string
}

const STEPS = [
  { number: 1, title: 'Who Are You?' },
  { number: 2, title: 'Placement Details' },
  { number: 3, title: 'Your Contact Info' },
]

export default function ReferralFastTrackWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    referrerType: '',
    city: '',
    timeframe: '',
    notes: '',
    name: '',
    phone: '',
    email: '',
    organization: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.referrerType) {
        newErrors.referrerType = 'Please select your role'
      }
    }

    if (step === 2) {
      if (!formData.city) {
        newErrors.city = 'Please select a preferred location'
      }
      if (!formData.timeframe) {
        newErrors.timeframe = 'Please select a timeframe'
      }
    }

    if (step === 3) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required'
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone is required'
      } else if (!validatePhone(formData.phone)) {
        newErrors.phone = 'Please enter a valid phone number'
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
      } else if (!validateEmail(formData.email)) {
        newErrors.email = 'Please enter a valid email'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 3))
    }
  }

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateStep(3)) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'referral',
          ...formData,
        }),
      })

      if (response.ok) {
        setIsSuccess(true)
      }
    } catch {
      // Handle error silently for now
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormData({
      referrerType: '',
      city: '',
      timeframe: '',
      notes: '',
      name: '',
      phone: '',
      email: '',
      organization: '',
    })
    setErrors({})
    setCurrentStep(1)
    setIsSuccess(false)
  }

  if (isSuccess) {
    return (
      <FormSuccess
        title="Referral Submitted!"
        message="Thank you for your referral. Our team will review the information and contact you within 1 hour during business hours."
        onReset={handleReset}
      />
    )
  }

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-between mb-8">
        {STEPS.map((step, index) => (
          <div key={step.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step.number
                    ? 'bg-terra-500 text-white'
                    : 'bg-sand-200 text-olive-700'
                }`}
              >
                {currentStep > step.number ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step.number
                )}
              </div>
              <span className="text-xs mt-2 text-olive-700 hidden sm:block">
                {step.title}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <div
                className={`w-12 sm:w-24 h-1 mx-2 ${
                  currentStep > step.number ? 'bg-terra-500' : 'bg-sand-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-forest-900 mb-3">
                  I am a... *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {REFERRER_TYPES.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, referrerType: type.value })
                      }
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.referrerType === type.value
                          ? 'border-terra-500 bg-terra-500/5'
                          : 'border-sand-200 hover:border-sand-200/80'
                      }`}
                    >
                      <span className="font-medium text-forest-900">{type.label}</span>
                    </button>
                  ))}
                </div>
                {errors.referrerType && (
                  <p className="mt-2 text-sm text-red-500">{errors.referrerType}</p>
                )}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-forest-900 mb-3">
                  Preferred Location *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {LOCATIONS.map((location) => (
                    <button
                      key={location.slug}
                      type="button"
                      onClick={() => setFormData({ ...formData, city: location.slug })}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.city === location.slug
                          ? 'border-terra-500 bg-terra-500/5'
                          : 'border-sand-200 hover:border-sand-200/80'
                      }`}
                    >
                      <span className="font-medium text-forest-900">{location.name}</span>
                    </button>
                  ))}
                </div>
                {errors.city && (
                  <p className="mt-2 text-sm text-red-500">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-forest-900 mb-3">
                  When does the client need placement? *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {TIMEFRAMES.map((tf) => (
                    <button
                      key={tf.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, timeframe: tf.value })}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        formData.timeframe === tf.value
                          ? 'border-terra-500 bg-terra-500/5'
                          : 'border-sand-200 hover:border-sand-200/80'
                      }`}
                    >
                      <span className="font-medium text-forest-900">{tf.label}</span>
                    </button>
                  ))}
                </div>
                {errors.timeframe && (
                  <p className="mt-2 text-sm text-red-500">{errors.timeframe}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-forest-900 mb-2"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent resize-none"
                  placeholder="Any special circumstances or needs..."
                />
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-forest-900 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.name ? 'border-red-500' : 'border-sand-200'
                  } focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                  placeholder="Jane Smith"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-forest-900 mb-2"
                >
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg border border-sand-200 focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent"
                  placeholder="Tampa Recovery Center"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-forest-900 mb-2"
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-sand-200'
                  } focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-forest-900 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-sand-200'
                  } focus:outline-none focus:ring-2 focus:ring-terra-500 focus:border-transparent`}
                  placeholder="jane@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="bg-sand-100 rounded-lg p-4">
                <p className="text-sm text-olive-700">
                  By submitting this form, you agree to be contacted regarding sober
                  living placement services.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-sand-200">
          {currentStep > 1 ? (
            <Button type="button" variant="ghost" onClick={handleBack}>
              Back
            </Button>
          ) : (
            <div />
          )}

          {currentStep < 3 ? (
            <Button type="button" onClick={handleNext}>
              Continue
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Referral'}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
