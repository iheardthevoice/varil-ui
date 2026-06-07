<template>
  <div
    role="group"
    :aria-label="resolvedAriaLabel"
    :class="[
      'ui-pin',
      isDisabled ? 'pointer-events-none opacity-50' : '',
      $attrs.class,
    ]"
  >
    <input
      v-for="(_, index) in length"
      :key="index"
      ref="cells"
      class="ui-pin-cell"
      :value="cells[index] ?? ''"
      :type="type === 'numeric' ? 'tel' : 'text'"
      :inputmode="type === 'numeric' ? 'numeric' : 'text'"
      :pattern="type === 'numeric' ? '[0-9]*' : undefined"
      :disabled="disabled"
      :readonly="readonly"
      :autocomplete="index === 0 ? autocomplete : 'off'"
      maxlength="1"
      :aria-label="cellAriaLabel(index)"
      @input="onCellInput(index, $event)"
      @keydown="onCellKeydown(index, $event)"
      @focus="onCellFocus(index)"
      @paste="onPaste"
    >
  </div>
</template>

<script>
const TYPES = ['numeric', 'alphanumeric']

export default {
  name: 'Pin',
  inheritAttrs: false,
  props: {
    /** Tam kod — `v-model` */
    modelValue: {
      type: String,
      default: '',
    },
    /** Hane sayısı */
    length: {
      type: Number,
      default: 6,
      validator: (v) => v >= 1 && v <= 12,
    },
    /** `numeric` yalnızca rakam; `alphanumeric` harf + rakam */
    type: {
      type: String,
      default: 'numeric',
      validator: (v) => TYPES.includes(v),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'one-time-code',
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'complete', 'focus', 'blur'],
  data() {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    cells() {
      const raw = String(this.modelValue ?? '').slice(0, this.length)
      return raw.split('')
    },
    resolvedAriaLabel() {
      if (this.ariaLabel) return this.ariaLabel
      if (typeof this.$t === 'function') {
        return this.$t('ui.pin.ariaLabel')
      }
      return 'Verification code'
    },
  },
  watch: {
    modelValue(v) {
      const normalized = this.normalizeValue(v)
      if (normalized !== v) {
        this.$emit('update:modelValue', normalized)
        return
      }
      if (normalized.length === this.length) {
        this.$emit('complete', normalized)
      }
    },
  },
  methods: {
    cellEl(index) {
      const refs = this.$refs.cells
      if (Array.isArray(refs)) return refs[index]
      return refs
    },
    cellAriaLabel(index) {
      if (typeof this.$t === 'function') {
        return this.$t('ui.pin.cell', { n: index + 1, total: this.length })
      }
      return `Digit ${index + 1} of ${this.length}`
    },
    normalizeChar(char) {
      if (!char) return ''
      if (this.type === 'numeric') {
        return /\d/.test(char) ? char : ''
      }
      const upper = char.toUpperCase()
      return /^[A-Z0-9]$/.test(upper) ? upper : ''
    },
    normalizeValue(value) {
      const chars = String(value ?? '')
        .split('')
        .map((c) => this.normalizeChar(c))
        .filter(Boolean)
      return chars.slice(0, this.length).join('')
    },
    emitValue(nextCells) {
      const value = nextCells.join('').slice(0, this.length)
      this.$emit('update:modelValue', value)
      if (value.length === this.length) {
        this.$emit('complete', value)
        this.cellEl(this.length - 1)?.blur()
      }
    },
    onCellInput(index, e) {
      const raw = e.target.value
      const chars = raw.split('').map((c) => this.normalizeChar(c)).filter(Boolean)

      if (chars.length === 0) {
        const next = [...this.cells]
        next[index] = ''
        this.emitValue(next)
        return
      }

      const next = [...this.cells]
      let cursor = index
      for (const ch of chars) {
        if (cursor >= this.length) break
        next[cursor] = ch
        cursor += 1
      }
      this.emitValue(next)

      const focusIndex = Math.min(cursor, this.length - 1)
      this.$nextTick(() => {
        this.cellEl(focusIndex)?.focus()
        this.cellEl(focusIndex)?.select()
      })
    },
    onCellKeydown(index, e) {
      if (e.key === 'Backspace') {
        e.preventDefault()
        const next = [...this.cells]
        if (next[index]) {
          next[index] = ''
          this.emitValue(next)
          return
        }
        if (index > 0) {
          next[index - 1] = ''
          this.emitValue(next)
          this.$nextTick(() => {
            this.cellEl(index - 1)?.focus()
          })
        }
        return
      }
      if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault()
        this.cellEl(index - 1)?.focus()
      }
      if (e.key === 'ArrowRight' && index < this.length - 1) {
        e.preventDefault()
        this.cellEl(index + 1)?.focus()
      }
    },
    onCellFocus(index) {
      this.activeIndex = index
      this.$emit('focus', index)
      this.$nextTick(() => {
        this.cellEl(index)?.select()
      })
    },
    onPaste(e) {
      e.preventDefault()
      const text = e.clipboardData?.getData('text') ?? ''
      const normalized = this.normalizeValue(text)
      if (!normalized) return
      this.emitValue(normalized.split(''))
      const focusIndex = Math.min(normalized.length, this.length) - 1
      this.$nextTick(() => {
        this.cellEl(Math.max(0, focusIndex))?.focus()
      })
    },
  },
}
</script>
