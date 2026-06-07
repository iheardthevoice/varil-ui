/** Tailwind `md` ile uyumlu mobil üst sınır */
export const MOBILE_MAX_WIDTH_MEDIA = '(max-width: 767px)'

export function isMobileViewport() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(MOBILE_MAX_WIDTH_MEDIA).matches
}
