import { requestConfirm } from '../confirm-state.js'

/**
 * Programatik onay — `ConfirmDialog` (`<ui-confirm-dialog />`) kökte bir kez eklenmelidir.
 * @returns {{ confirm: typeof requestConfirm }}
 */
export function useConfirm() {
  return {
    confirm: requestConfirm,
  }
}
