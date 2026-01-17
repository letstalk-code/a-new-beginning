'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'

interface InfoCard {
  title: string
  description: string
}

interface InfoCardsGridProps {
  title: string
  subtitle?: string
  cards: InfoCard[]
  columns?: 2 | 3 | 4
  background?: 'white' | 'sand'
}

export default function InfoCardsGrid({
  title,
  subtitle,
  cards,
  columns = 4,
  background = 'sand',
}: InfoCardsGridProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  const bgColor = background === 'sand' ? 'bg-sand-100' : 'bg-white'

  return (
    <section className={`section-padding ${bgColor}`}>
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </AnimatedSection>

        <div className={`grid ${gridCols[columns]} gap-8`}>
          {cards.map((card, index) => (
            <AnimatedSection key={card.title} delay={index * 0.08}>
              <div className="group bg-white p-8 border border-gray-100 hover:border-terra-500/30 hover:shadow-lg transition-all duration-300">
                {/* Accent line */}
                <div className="w-12 h-1 bg-terra-500 mb-6 group-hover:w-16 transition-all duration-300" />

                <h3 className="font-heading text-lg font-semibold text-forest-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-olive-700 leading-relaxed text-sm">
                  {card.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
