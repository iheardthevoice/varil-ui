<template>
  <div
    :class="['ui-checkbox-group', `ui-checkbox-group--${normalizedVariant}`]"
    role="group"
    :aria-label="ariaLabel || undefined"
  >
    <slot />
  </div>
</template>

<script>
const VARIANTS = ['list', 'button', 'List', 'Button']

let cgCounter = 0

export default {
  name: 'CheckboxGroup',
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => [],
    },
    /** `list` — dikey liste; `button` — yan yana kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: 'list',
      validator: (v) => VARIANTS.includes(v),
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    cgCounter += 1
    return { groupName: `ui-checkbox-group-${cgCounter}` }
  },
  computed: {
    normalizedVariant() {
      const v = (this.variant || 'list').toLowerCase()
      return v === 'button' ? 'button' : 'list'
    },
  },
  provide() {
    return {
      uiCheckboxGroup: this,
    }
  },
}
</script>
