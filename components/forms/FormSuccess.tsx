'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { PHONE_NUMBER, PHONE_LINK } from '@/lib/constants'

interface FormSuccessProps {
  title?: string
  message?: string
  onReset?: () => void
}

export default function FormSuccess({
  title = 'Thank You!',
  message = 'We\'ve received your information and will be in touch shortly. For immediate assistance, please call us.',
  onReset,
}: FormSuccessProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12"
    >
      <div className="w-20 h-20 mx-auto mb-6 bg-terra-500/10 rounded-full flex items-center justify-center">
        <svg
          className="w-10 h-10 text-terra-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      <h3 className="font-heading text-2xl font-bold text-forest-900 mb-4">
        {title}
      </h3>

      <p className="text-olive-700 mb-8 max-w-md mx-auto">
        {message}
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button href={PHONE_LINK} variant="primary">
          Call Now: {PHONE_NUMBER}
        </Button>
        {onReset && (
          <Button onClick={onReset} variant="outline">
            Submit Another
          </Button>
        )}
      </div>
    </motion.div>
  )
}
