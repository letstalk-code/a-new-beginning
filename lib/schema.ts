import { SITE_NAME, SITE_URL, PHONE_NUMBER, EMAIL, LOCATIONS } from './constants'

// LocalBusiness JSON-LD for a location page. Street address only exists for
// St. Petersburg today; the others emit locality-level data until the owner
// releases the street addresses.
export function localBusinessSchema(slug: string) {
  const location = LOCATIONS.find((l) => l.slug === slug)!
  const hasStreet = !location.address.includes('call for address')

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${SITE_NAME} — ${location.name}`,
    url: `${SITE_URL}/locations/${slug}`,
    image: `${SITE_URL}/hero-bg.jpg`,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    description: location.description,
    address: {
      '@type': 'PostalAddress',
      ...(hasStreet ? { streetAddress: location.address.split(',')[0] } : {}),
      addressLocality: location.name,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  }
}
