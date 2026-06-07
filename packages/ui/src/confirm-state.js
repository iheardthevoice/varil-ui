import { reactive } from 'vue'

export const confirmState = reactive({
  open: false,
  title: '',
  description: '',
  /** Boşsa i18n `ui.confirm.ok` */
  confirmLabel: '',
  /** Boşsa i18n `ui.confirm.cancel` */
  cancelLabel: '',
  destructive: false,
  /** @type {((value: boolean) => void) | null} */
  _resolve: null,
})

/**
 * Onay diyaloğu gösterir; `ConfirmDialog` kökte bir kez (`<ui-confirm-dialog />`) olmalıdır.
 * @param {{ title?: string, description?: string, confirmLabel?: string, cancelLabel?: string, destructive?: boolean }} options
 * @returns {Promise<boolean>}
 */
export function requestConfirm(options = {}) {
  return new Promise((resolve) => {
    confirmState.title = options.title ?? ''
    confirmState.description = options.description ?? ''
    confirmState.confirmLabel = options.confirmLabel ?? ''
    confirmState.cancelLabel = options.cancelLabel ?? ''
    confirmState.destructive = !!options.destructive
    confirmState._resolve = resolve
    confirmState.open = true
  })
}

/**
 * @param {boolean} value
 */
export function answerConfirm(value) {
  const fn = confirmState._resolve
  confirmState.open = false
  confirmState._resolve = null
  if (fn) fn(!!value)
}
