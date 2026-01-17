import { SEO_KEYWORDS } from '@/lib/constants'

interface SEOSectionProps {
  title?: string
  keywords?: string[]
}

export default function SEOSection({
  title = 'Serving Tampa Bay',
  keywords = SEO_KEYWORDS,
}: SEOSectionProps) {
  return (
    <section className="py-12 bg-sand-200/50">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="font-heading text-lg font-semibold text-forest-900 mb-4">
            {title}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {keywords.map((keyword, index) => (
              <span
                key={keyword}
                className="text-sm text-olive-700"
              >
                {keyword}
                {index < keywords.length - 1 && (
                  <span className="mx-2 text-sand-200">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
