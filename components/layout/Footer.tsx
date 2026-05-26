import Link from 'next/link'
import Image from 'next/image'
import { PHONE_NUMBER, PHONE_LINK, EMAIL, EMAIL_LINK, FOOTER_LINKS } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-forest-900 text-white pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="A New Beginning Sober Living"
              width={100}
              height={100}
              className="h-20 w-auto mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Providing safe, structured sober living environments in Tampa Bay.
              Supporting recovery one day at a time.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={PHONE_LINK} className="text-white/70 hover:text-terra-500 transition-colors">
                {PHONE_NUMBER}
              </a>
              <a href={EMAIL_LINK} className="text-white/70 hover:text-terra-500 transition-colors">
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-terra-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-white">
              Our Locations
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.locations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-terra-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Help */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider mb-6 text-white">
              Get Help Now
            </h4>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Ready to take the next step? We&apos;re here 24/7 to help.
            </p>
            <Link
              href="/for-referrers"
              className="inline-block bg-terra-500 text-white px-6 py-3 font-semibold text-sm uppercase tracking-wider hover:bg-terra-500/90 transition-colors"
            >
              Refer a Client
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              &copy; {currentYear} A New Beginning Sober Living. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-terra-500 font-medium">Est. 2015</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
