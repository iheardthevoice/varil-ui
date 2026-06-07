<template>
  <ui-dialog
    v-model:open="syncOpen"
    stack-layer="confirm"
    max-width="sm"
    :title="confirmState.title"
    :description="confirmState.description"
    header-divider
    :close-on-backdrop="true"
    :close-on-escape="true"
    :aria-label="confirmState.title || fallbackAriaLabel"
  >
    <template #footer>
      <ui-button
        color="secondary"
        rounded
        @click="onCancel"
      >
        {{ cancelText }}
      </ui-button>
      <ui-button
        rounded
        :color="confirmState.destructive ? 'warning' : 'primary'"
        @click="onConfirm"
      >
        {{ confirmText }}
      </ui-button>
    </template>
  </ui-dialog>
</template>

<script>
import { confirmState, answerConfirm } from '../confirm-state.js'

export default {
  name: 'ConfirmDialog',
  computed: {
    confirmState() {
      return confirmState
    },
    syncOpen: {
      get() {
        return confirmState.open
      },
      set(v) {
        if (!v) {
          if (confirmState._resolve) answerConfirm(false)
          else confirmState.open = false
        } else {
          confirmState.open = true
        }
      },
    },
    confirmText() {
      if (confirmState.confirmLabel) return confirmState.confirmLabel
      if (typeof this.$t === 'function') return this.$t('ui.confirm.ok')
      return 'Tamam'
    },
    cancelText() {
      if (confirmState.cancelLabel) return confirmState.cancelLabel
      if (typeof this.$t === 'function') return this.$t('ui.confirm.cancel')
      return 'İptal'
    },
    fallbackAriaLabel() {
      if (typeof this.$t === 'function') return this.$t('ui.confirm.fallbackAria')
      return 'Onay'
    },
  },
  methods: {
    onConfirm() {
      answerConfirm(true)
    },
    onCancel() {
      answerConfirm(false)
    },
  },
}
</script>
