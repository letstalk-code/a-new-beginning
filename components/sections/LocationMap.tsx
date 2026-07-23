'use client'

import { useState } from 'react'

// Keyless Google Maps embeds. St. Petersburg shows the published street
// address; Tampa and New Port Richey stay at city level until the owner
// releases those addresses (resident privacy).
const MAP_TABS = [
  {
    name: 'Tampa',
    query: 'Tampa, FL',
    zoom: 11,
  },
  {
    name: 'St. Petersburg',
    query: '1651 29th Ave N, St. Petersburg, FL 33713',
    zoom: 14,
  },
  {
    name: 'New Port Richey',
    query: 'New Port Richey, FL',
    zoom: 12,
  },
]

export default function LocationMap() {
  const [active, setActive] = useState(1) // default to St. Pete (real address)
  const tab = MAP_TABS[active]

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-6" role="tablist" aria-label="Location maps">
        {MAP_TABS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === active}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
              i === active
                ? 'bg-terra-700 text-white'
                : 'bg-sand-100 text-forest-900 hover:bg-sand-200/60'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      <div className="rounded-xl overflow-hidden shadow-sm border border-sand-200">
        <iframe
          key={tab.name}
          title={`Map of our ${tab.name} sober living area`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(tab.query)}&z=${tab.zoom}&output=embed`}
          className="w-full h-80 lg:h-96 block"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="text-sm text-olive-700 text-center mt-4">
        To protect resident privacy, exact home addresses for Tampa and New Port
        Richey are shared during the admissions call.
      </p>
    </div>
  )
}
