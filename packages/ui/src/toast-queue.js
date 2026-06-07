import { reactive } from 'vue'

/** @typedef {'info' | 'success' | 'warning' | 'error'} ToastVariant */

/**
 * @typedef {object} ToastItem
 * @property {number} id
 * @property {string} title
 * @property {string} [description]
 * @property {ToastVariant} variant
 * @property {number} duration
 * @property {ReturnType<typeof setTimeout> | null} [_timer]
 */

export const toastState = reactive({
  /** @type {ToastItem[]} */
  items: [],
})

let seq = 0

/**
 * Toast gösterir. `Toast` bileşeni kökte bir kez render edilmelidir (`<ui-toast />`).
 * @param {{ title?: string, description?: string, variant?: ToastVariant, duration?: number }} payload
 * @param {number} [payload.duration] ms; `0` — yalnızca elle kapatma
 * @returns {number} toast id
 */
export function pushToast(payload = {}) {
  seq += 1
  const id = seq
  const item = {
    id,
    title: payload.title ?? '',
    description: payload.description ?? '',
    variant: payload.variant ?? 'info',
    duration: payload.duration !== undefined ? payload.duration : 4500,
    _timer: null,
  }
  toastState.items.push(item)
  if (item.duration > 0) {
    item._timer = setTimeout(() => dismissToast(id), item.duration)
  }
  return id
}

/**
 * @param {number} id
 */
export function dismissToast(id) {
  const idx = toastState.items.findIndex((x) => x.id === id)
  if (idx === -1) return
  const item = toastState.items[idx]
  if (item._timer) {
    clearTimeout(item._timer)
    item._timer = null
  }
  toastState.items.splice(idx, 1)
}

export function clearToasts() {
  for (const item of toastState.items) {
    if (item._timer) clearTimeout(item._timer)
  }
  toastState.items.splice(0)
}
