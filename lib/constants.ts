export const SITE_NAME = 'A New Beginning Sober Living'
export const PHONE_NUMBER = '(813) 555-0123'
export const PHONE_LINK = 'tel:+18135550123'
export const TEXT_LINK = 'sms:+18135550123'
export const EMAIL = 'info@anewbeginningsoberliving.com'
export const EMAIL_LINK = 'mailto:info@anewbeginningsoberliving.com'

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'For Referrers', href: '/for-referrers' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Our Homes', href: '/our-homes' },
  { label: 'Locations', href: '/locations' },
  { label: 'Contact', href: '/contact' },
]

export const LOCATIONS = [
  {
    name: 'Tampa',
    slug: 'tampa',
    description: 'Our flagship location in the heart of Tampa, offering structured sober living in a supportive community environment.',
    address: '123 Recovery Lane, Tampa, FL 33601',
    features: ['Private and shared rooms', 'Near public transit', 'Employment assistance'],
  },
  {
    name: 'St. Petersburg',
    slug: 'st-petersburg',
    description: 'A peaceful coastal setting perfect for those seeking recovery near the waterfront with access to outdoor activities.',
    address: '456 Serenity Street, St. Petersburg, FL 33701',
    features: ['Beach proximity', 'Meditation garden', 'Group meeting space'],
  },
  {
    name: 'New Port Richey',
    slug: 'new-port-richey',
    description: 'A quiet, residential setting ideal for building a strong foundation in early recovery.',
    address: '789 Hope Avenue, New Port Richey, FL 34652',
    features: ['Quiet neighborhood', 'Large common areas', 'Affordable rates'],
  },
]

export const HERO_CONTENT = {
  headline: 'Safe, Structured Sober Living in Tampa Bay',
  subheadline: 'Supportive recovery housing for men and women ready to build a new life. Same-day placement available for qualified referrals.',
  ctaPrimary: 'Refer a Client Now',
  ctaSecondary: 'Call Us Today',
  trustChips: [
    'FARR Certified',
    'Insurance Accepted',
    'Same-Day Placement',
    '24/7 Support',
  ],
}

export const PROCESS_STEPS = [
  {
    number: 1,
    title: 'Submit Referral',
    description: 'Complete our quick referral form or call us directly. We respond within 1 hour during business hours.',
  },
  {
    number: 2,
    title: 'Quick Assessment',
    description: 'We review the client\'s needs, verify insurance or payment, and confirm bed availability.',
  },
  {
    number: 3,
    title: 'Same-Day Move-In',
    description: 'Once approved, clients can move in the same day. We handle the rest to make the transition seamless.',
  },
]

export const WHAT_WE_OFFER = [
  {
    title: 'Structured Environment',
    description: 'Daily schedules, house meetings, and accountability measures that support lasting recovery.',
  },
  {
    title: 'Recovery Support',
    description: 'Connection to local AA/NA meetings, IOP programs, and peer support specialists.',
  },
  {
    title: 'Life Skills Development',
    description: 'Employment assistance, financial literacy workshops, and independent living preparation.',
  },
  {
    title: 'Safe Community',
    description: 'Drug-free living with regular testing, house managers on-site, and 24/7 support available.',
  },
]

export const WHO_WE_HELP = [
  {
    title: 'Treatment Centers',
    description: 'Seamless step-down placement for clients completing residential treatment.',
  },
  {
    title: 'Hospitals & ERs',
    description: 'Safe discharge options for patients needing recovery housing.',
  },
  {
    title: 'Case Managers',
    description: 'Reliable housing partner for your clients in recovery.',
  },
  {
    title: 'Families',
    description: 'Peace of mind knowing your loved one is in a supportive environment.',
  },
]

export const HOME_EXPECTATIONS = [
  {
    title: 'Daily Structure',
    description: 'Wake-up times, chores, curfews, and accountability that builds healthy habits.',
  },
  {
    title: 'Meeting Attendance',
    description: 'Required weekly meeting attendance to support your recovery journey.',
  },
  {
    title: 'Employment or Program',
    description: 'Residents must be working, in school, or attending IOP within 30 days.',
  },
  {
    title: 'Drug Testing',
    description: 'Regular random drug testing to maintain a safe, sober environment.',
  },
  {
    title: 'House Participation',
    description: 'Weekly house meetings and shared responsibilities build community.',
  },
  {
    title: 'Respect & Accountability',
    description: 'Treat others with respect and take responsibility for your recovery.',
  },
]

export const TESTIMONIALS = [
  {
    quote: 'A New Beginning gave me the structure I needed to stay sober. The staff genuinely cares about every resident\'s success.',
    author: 'Michael T.',
    role: 'Former Resident',
  },
  {
    quote: 'As a case manager, I trust A New Beginning with my most challenging clients. Their communication is excellent and placement is always smooth.',
    author: 'Sarah K.',
    role: 'Case Manager, Tampa General',
  },
  {
    quote: 'The transition from treatment to sober living was seamless. I finally feel like I have a real chance at recovery.',
    author: 'Jennifer M.',
    role: 'Current Resident',
  },
  {
    quote: 'Professional, responsive, and truly committed to helping people recover. Our go-to referral partner.',
    author: 'Dr. Robert Chen',
    role: 'Treatment Center Director',
  },
]

export const FAQS = [
  {
    question: 'What is the cost of sober living?',
    answer: 'Rates vary by location and room type, typically ranging from $150-$250 per week. We accept some insurance plans and offer payment plans for those who qualify.',
  },
  {
    question: 'Do you accept insurance?',
    answer: 'Yes, we work with several insurance providers. Contact us to verify your coverage and learn about payment options.',
  },
  {
    question: 'What is the minimum stay requirement?',
    answer: 'We recommend a minimum of 90 days for the best outcomes, but we work with each resident individually based on their needs and circumstances.',
  },
  {
    question: 'Are your homes co-ed?',
    answer: 'We have separate homes for men and women to provide safe, focused recovery environments.',
  },
  {
    question: 'What happens if someone relapses?',
    answer: 'We have a compassionate but firm policy. Residents who relapse are connected with detox and treatment resources. Re-admission is possible after completing appropriate treatment.',
  },
  {
    question: 'Can residents have visitors?',
    answer: 'Yes, during designated visiting hours. All visitors must be approved and sober. Overnight guests are not permitted.',
  },
]

export const REFERRER_TYPES = [
  { value: 'treatment_center', label: 'Treatment Center' },
  { value: 'hospital', label: 'Hospital / ER' },
  { value: 'case_manager', label: 'Case Manager' },
  { value: 'therapist', label: 'Therapist / Counselor' },
  { value: 'family', label: 'Family Member' },
  { value: 'self', label: 'Self-Referral' },
  { value: 'other', label: 'Other' },
]

export const TIMEFRAMES = [
  { value: 'immediate', label: 'Immediate (Today)' },
  { value: 'within_week', label: 'Within 1 Week' },
  { value: 'within_month', label: 'Within 1 Month' },
  { value: 'planning', label: 'Just Planning Ahead' },
]

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'For Referrers', href: '/for-referrers' },
    { label: 'Admissions', href: '/admissions' },
    { label: 'Our Homes', href: '/our-homes' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  locations: [
    { label: 'Tampa', href: '/locations/tampa' },
    { label: 'St. Petersburg', href: '/locations/st-petersburg' },
    { label: 'New Port Richey', href: '/locations/new-port-richey' },
  ],
}

export const SEO_KEYWORDS = [
  'sober living Tampa',
  'recovery housing St Petersburg',
  'halfway house New Port Richey',
  'addiction recovery Tampa Bay',
  'structured sober living Florida',
  'men\'s sober living Tampa',
  'women\'s sober living Tampa',
  'FARR certified sober living',
]
