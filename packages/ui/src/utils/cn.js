/**
 * Join class strings; skips falsy values (useful for conditional classes).
 * @param {...(string|undefined|null|false|Record<string, boolean>)} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  const out = []
  for (const input of inputs) {
    if (!input) continue
    if (typeof input === 'string') {
      out.push(input)
      continue
    }
    if (typeof input === 'object') {
      for (const [key, on] of Object.entries(input)) {
        if (on) out.push(key)
      }
    }
  }
  return out.join(' ')
}
