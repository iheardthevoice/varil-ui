const FIELD_SELECTOR = [
  'textarea.ui-input-field:not([disabled])',
  'input.ui-input-field:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])',
].join(',')

/** Select / benzeri tetikleyiciler — gövdede metin alanı yoksa */
const FIELD_FALLBACK_SELECTOR = [
  'button.ui-select-field:not([disabled])',
  'button.ui-pin-cell:not([disabled])',
].join(',')

/** Odak hedefi — dialog giriş animasyonunda opacity geçici 0 olabilir; opacity kontrolü yapılmaz */
function isFocusable(el) {
  if (!(el instanceof HTMLElement)) return false
  if (el.disabled) return false
  if (el.getAttribute('aria-hidden') === 'true') return false
  const style = getComputedStyle(el)
  if (style.display === 'none' || style.visibility === 'hidden') return false
  return el.getClientRects().length > 0
}

function pickFirst(scope, selector, { skipFooter = false } = {}) {
  if (!scope) return null
  for (const el of scope.querySelectorAll(selector)) {
    if (!isFocusable(el)) continue
    if (skipFooter && el.closest('.ui-card-footer')) continue
    return el
  }
  return null
}

function scopesFor(root) {
  const ordered = [
    root.querySelector('.ui-card-body'),
    root.querySelector('.ui-card-toolbar'),
    root,
  ].filter(Boolean)
  const unique = []
  for (const scope of ordered) {
    if (!unique.includes(scope)) unique.push(scope)
  }
  return unique
}

function focusWithinScope(scope, { skipFooter = false } = {}) {
  const field = pickFirst(scope, FIELD_SELECTOR, { skipFooter })
  if (field) {
    field.focus()
    return true
  }
  const fallback = pickFirst(scope, FIELD_FALLBACK_SELECTOR, { skipFooter })
  if (fallback) {
    fallback.focus()
    return true
  }
  return false
}

/**
 * Dialog / panel içinde ilk form alanına odaklanır (gövde öncelikli, footer atlanır).
 * @param {HTMLElement | null | undefined} root
 * @returns {boolean}
 */
export function focusFirstField(root) {
  if (!root) return false

  const primaryRow = root.querySelector('[data-primary-field]')
  if (primaryRow && focusWithinScope(primaryRow)) {
    return true
  }

  for (const scope of scopesFor(root)) {
    const skipFooter = scope === root
    if (focusWithinScope(scope, { skipFooter })) {
      return true
    }
  }

  return false
}
