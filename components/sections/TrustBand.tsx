import AnimatedSection from '@/components/ui/AnimatedSection'

const TRUST_FACTS = [
  {
    stat: '2015',
    label: 'Serving Tampa Bay since',
    description: 'Over a decade of structured recovery housing as a Florida non-profit.',
  },
  {
    stat: '3',
    label: 'Locations',
    description: 'Homes in Tampa, St. Petersburg, and New Port Richey — men\'s and women\'s houses.',
  },
  {
    stat: '24/7',
    label: 'Support',
    description: 'House managers on-site and an admissions line that answers around the clock.',
  },
  {
    stat: 'Same Day',
    label: 'Placement',
    description: 'Qualified residents can move in the day they call — arrive by 8:00 PM.',
  },
]

export default function TrustBand({
  title = 'Why Families and Professionals Trust Us',
}: {
  title?: string
}) {
  return (
    <section className="section-padding bg-forest-900">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            {title}
          </h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {TRUST_FACTS.map((fact, index) => (
            <AnimatedSection key={fact.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="font-heading text-4xl lg:text-5xl font-bold text-sand-200 mb-2">
                  {fact.stat}
                </p>
                <p className="text-white font-semibold uppercase tracking-wide text-sm mb-3">
                  {fact.label}
                </p>
                <p className="text-white/70 text-sm leading-relaxed max-w-xs mx-auto">
                  {fact.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
