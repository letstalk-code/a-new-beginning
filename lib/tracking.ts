// Fires a lead conversion event to GA4 / Google Ads (no-op if gtag isn't loaded).
export function trackFormLead(form: 'contact' | 'referral') {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('event', 'generate_lead', {
    event_category: 'form',
    form_type: form,
    page_path: window.location.pathname,
  })
}
