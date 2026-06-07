<template>
  <div
    :class="rootClass"
    role="radiogroup"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

let rgCounter = 0

const VARIANTS = ['list', 'button', 'List', 'Button']
const ORIENTATIONS = ['vertical', 'horizontal']

export default {
  name: 'RadioGroup',
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null,
    },
    /** `list` — satır listesi; `button` — yan yana kart seçenekleri */
    variant: {
      type: String,
      default: 'list',
      validator: (v) => VARIANTS.includes(v),
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: 'vertical',
      validator: (v) => ORIENTATIONS.includes(v),
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    rgCounter += 1
    return { groupName: `ui-radio-group-${rgCounter}` }
  },
  computed: {
    normalizedVariant() {
      const v = (this.variant || 'list').toLowerCase()
      return v === 'button' ? 'button' : 'list'
    },
    rootClass() {
      return cn(
        'ui-radio-group',
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === 'list' && this.orientation === 'horizontal' ? 'ui-radio-group--horizontal' : '',
      )
    },
  },
  provide() {
    return {
      uiRadioGroup: this,
    }
  },
}
</script>
