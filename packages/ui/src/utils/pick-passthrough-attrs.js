/**
 * `$attrs` içinden `class` / `style` ve skip listesindekileri ayırır.
 * @param {Record<string, unknown>} attrs
 * @param {string[]} [skipKeys=['class', 'style']]
 * @returns {Record<string, unknown>}
 */
export function pickPassthroughAttrs(attrs, skipKeys = ['class', 'style']) {
  const skip = new Set(skipKeys)
  const out = {}
  for (const [key, value] of Object.entries(attrs || {})) {
    if (skip.has(key)) continue
    out[key] = value
  }
  return out
}
