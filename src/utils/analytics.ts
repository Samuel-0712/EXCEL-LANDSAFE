import { track } from '@vercel/analytics';

/**
 * Universal Event Tracker for Google Analytics 4 (GA4) and Vercel Analytics
 * @param eventName Name of the action (e.g. 'whatsapp_click', 'inquiry_submitted')
 * @param params Additional event parameters (e.g. { location: 'hero', destination: 'Dubai' })
 */
export function trackEvent(eventName: string, params: Record<string, any> = {}) {
  // 1. Google Analytics 4 (gtag.js)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', eventName, params);
    } catch (e) {
      console.warn('GA4 event error:', e);
    }
  }

  // 2. Vercel Analytics custom events
  try {
    track(eventName, params);
  } catch (e) {
    // Silent catch if Vercel tracker is unavailable or blocked
  }
}
