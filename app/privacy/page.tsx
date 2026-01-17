import { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { SITE_NAME, EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | A New Beginning Sober Living',
  description: 'Privacy policy for A New Beginning Sober Living. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        <AnimatedSection className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-forest-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-olive max-w-none">
            <p className="text-olive-700 mb-6">
              Last updated: January 2025
            </p>

            <p className="text-olive-700 mb-8">
              {SITE_NAME} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-olive-700 mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-olive-700 space-y-2 mb-6">
              <li>
                <strong>Personal Data:</strong> Name, email address, phone number, and other
                contact information you provide when filling out forms or contacting us.
              </li>
              <li>
                <strong>Referral Information:</strong> Information about clients being referred
                for placement, as provided by referral sources.
              </li>
              <li>
                <strong>Derivative Data:</strong> Information our servers automatically collect
                when you access our website, such as IP address, browser type, and access times.
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              Use of Your Information
            </h2>
            <p className="text-olive-700 mb-4">
              We may use information collected about you to:
            </p>
            <ul className="list-disc pl-6 text-olive-700 space-y-2 mb-6">
              <li>Process referrals and provide sober living services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you information about our services and updates</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              Disclosure of Your Information
            </h2>
            <p className="text-olive-700 mb-6">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc pl-6 text-olive-700 space-y-2 mb-6">
              <li>
                <strong>By Law or to Protect Rights:</strong> If required by law or if we believe
                disclosure is necessary to protect our rights or the safety of others.
              </li>
              <li>
                <strong>Service Providers:</strong> With third-party service providers who perform
                services for us, such as payment processing or data analysis.
              </li>
              <li>
                <strong>With Your Consent:</strong> With your consent for any other purpose.
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              Security of Your Information
            </h2>
            <p className="text-olive-700 mb-6">
              We use administrative, technical, and physical security measures to protect your
              personal information. While we have taken reasonable steps to secure the information
              you provide, please be aware that no security measures are perfect, and we cannot
              guarantee the security of your data.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              HIPAA Compliance
            </h2>
            <p className="text-olive-700 mb-6">
              As a sober living facility, we are committed to protecting the privacy of health
              information in accordance with the Health Insurance Portability and Accountability
              Act (HIPAA). We maintain strict confidentiality of all resident information and
              only disclose information as permitted or required by law.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              Your Rights
            </h2>
            <p className="text-olive-700 mb-6">
              Depending on your location, you may have certain rights regarding your personal
              information, including the right to access, correct, or delete your data. To
              exercise these rights, please contact us using the information below.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-forest-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-olive-700 mb-6">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="text-olive-700">
              <strong>{SITE_NAME}</strong><br />
              Email: {EMAIL}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
