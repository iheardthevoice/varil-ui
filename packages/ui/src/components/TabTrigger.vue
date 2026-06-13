<template>
  <button
    type="button"
    role="tab"
    :id="triggerDomId"
    :class="triggerClass"
    :aria-selected="isSelected ? 'true' : 'false'"
    :aria-controls="panelDomId"
    :tabindex="isSelected ? 0 : -1"
    :disabled="disabled"
    @click="select"
  >
    <ui-icon
      v-if="icon"
      :name="icon"
      :type="tabIconType"
      :size="tabIconSize"
      class="ui-tab-trigger-icon"
      aria-hidden="true"
    />
    <span class="ui-tab-trigger-label min-w-0 truncate">
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>

<script>
import { cn } from '../utils/cn.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

export default {
  name: 'TabTrigger',
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
    /** Slot kullanılmazsa gösterilen metin. */
    label: {
      type: String,
      default: '',
    },
    /** `ui-icon` `name` — doluysa ikon + metin (veya yalnız ikon). */
    icon: {
      type: String,
      default: null,
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    /** `segmented` yalnızca yatay `ui-tabs` içinde geçerlidir. */
    triggerKind() {
      if (!this.uiTabs) return 'line'
      const v = this.uiTabs.variant
      const vertical = this.uiTabs.orientation === 'vertical'
      if (v === 'segmented' && !vertical) return 'segmented'
      return 'line'
    },
    tabIconSize() {
      return this.triggerKind === 'segmented' ? 'md' : 'xs'
    },
    /** FA Pro: segment kartlarında da varsayılan `light` kullanılır. */
    tabIconType() {
      return this.iconType
    },
    isSelected() {
      if (!this.uiTabs) return false
      return this.uiTabs.isSelected(this.value)
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : undefined
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : undefined
    },
    triggerClass() {
      const kind = this.triggerKind
      return cn(
        'ui-tab-trigger',
        kind === 'segmented' ? 'ui-tab-trigger--segmented' : 'ui-tab-trigger--line',
        this.isSelected &&
          (kind === 'segmented'
            ? 'ui-tab-trigger--segmented-selected'
            : 'ui-tab-trigger--line-selected'),
        this.disabled ? 'ui-tab-trigger--disabled' : '',
        this.$attrs.class,
      )
    },
  },
  mounted() {
    if (!this.uiTabs && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[TabTrigger] Yalnızca <ui-tabs> içinde kullanılmalı.')
    }
  },
  methods: {
    select() {
      if (this.disabled || !this.uiTabs) return
      this.uiTabs.setValue(this.value)
    },
  },
}
</script>
