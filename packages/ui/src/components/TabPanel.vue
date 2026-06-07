<template>
  <div
    v-show="isActive"
    role="tabpanel"
    :id="panelDomId"
    :aria-labelledby="triggerDomId"
    :class="panelClass"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'TabPanel',
  inheritAttrs: false,
  inject: {
    uiTabs: {
      default: null,
    },
  },
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    isActive() {
      if (!this.uiTabs) return false
      return this.uiTabs.isSelected(this.value)
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : undefined
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : undefined
    },
    panelClass() {
      return cn('ui-tab-panel min-w-0 flex-1 outline-none', this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  mounted() {
    if (!this.uiTabs && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[TabPanel] Yalnızca <ui-tabs> içinde kullanılmalı.')
    }
  },
}
</script>
