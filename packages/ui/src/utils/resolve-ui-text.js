/**
 * vue-i18n `$t` ile güvenli metin çözümü.
 * @param {import('vue').ComponentPublicInstance | { $t?: (key: string) => string }} ctx
 * @param {string} key
 * @param {string} fallback
 * @returns {string}
 */
export function resolveUiText(ctx, key, fallback) {
  if (ctx && typeof ctx.$t === 'function') {
    const value = ctx.$t(key)
    if (value != null && value !== '' && value !== key) {
      return value
    }
  }
  return fallback
}
