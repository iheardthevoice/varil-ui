import { reactive } from 'vue'

/**
 * Yerel diyalog görünürlüğü (`<ui-dialog v-model:open="dialog.open">`).
 * Tek bir reactive nesne döner — `open` özelliği doğrudan `v-model:open` ile bağlanır (iç içe `ref` + `v-model` ref özelliğinin ezilmesini önler).
 * `const { open } = useDialog()` kullanmayın; `open` reaktivitesi kopar — nesneyi olduğu gibi tutun (`const d = useDialog()` → `d.open`).
 * @param {boolean} [initial=false]
 */
export function useDialog(initial = false) {
  return reactive({
    open: !!initial,
    show() {
      this.open = true
    },
    hide() {
      this.open = false
    },
    toggle() {
      this.open = !this.open
    },
  })
}
