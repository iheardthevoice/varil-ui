/**
 * Şifre gücü — 0–4 skor, yüzde ve etiket.
 * @param {string} value
 * @returns {{ score: number, percent: number, label: 'empty' | 'weak' | 'fair' | 'good' | 'strong' }}
 */
export function scorePassword(value) {
  const v = String(value ?? '')
  if (!v) {
    return { score: 0, percent: 0, label: 'empty' }
  }

  let points = 0
  if (v.length >= 8) points += 1
  if (v.length >= 12) points += 1
  if (/[a-z]/.test(v) && /[A-Z]/.test(v)) points += 1
  else if (/[a-zA-Z]/.test(v)) points += 0.5
  if (/\d/.test(v)) points += 1
  if (/[^a-zA-Z0-9]/.test(v)) points += 1

  const score = Math.min(4, Math.round(points))
  const labels = ['weak', 'fair', 'good', 'strong']
  const label = score <= 0 ? 'weak' : labels[Math.min(score - 1, 3)]

  return {
    score,
    percent: (score / 4) * 100,
    label,
  }
}
