<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

let tabsRootCounter = 0

const VARIANTS = ['line', 'segmented']

export default {
  name: 'Tabs',
  inheritAttrs: false,
  props: {
    /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
    modelValue: {
      type: [String, Number],
      default: null,
    },
    /** `line` — alt çizgi; `segmented` — Apple tarzı segment kontrolü (ikon + etiket, yatay). */
    variant: {
      type: String,
      default: 'line',
      validator: (v) => VARIANTS.includes(v),
    },
    /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (v) => v === 'horizontal' || v === 'vertical',
    },
  },
  emits: ['update:modelValue'],
  data() {
    tabsRootCounter += 1
    return {
      baseId: `ui-tabs-${tabsRootCounter}`,
    }
  },
  provide() {
    return {
      uiTabs: this,
    }
  },
  computed: {
    rootClass() {
      return cn(
        'ui-tabs flex min-w-0 flex-col gap-4',
        this.variant === 'segmented' ? 'ui-tabs--segmented' : 'ui-tabs--line',
        this.orientation === 'vertical' ? 'ui-tabs--vertical' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  methods: {
    setValue(v) {
      this.$emit('update:modelValue', v)
    },
    tabSlug(v) {
      return String(v).replace(/[^a-zA-Z0-9_-]/g, '_')
    },
    triggerId(value) {
      return `${this.baseId}-tab-${this.tabSlug(value)}`
    },
    panelId(value) {
      return `${this.baseId}-panel-${this.tabSlug(value)}`
    },
    isSelected(value) {
      return Object.is(this.modelValue, value)
    },
  },
}
</script>
