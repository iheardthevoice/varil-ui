<template>
  <button
    type="button"
    role="switch"
    :id="resolvedId"
    :class="[
      'ui-switch',
      isDisabled ? 'ui-switch--disabled' : '',
      $attrs.class,
    ]"
    :aria-checked="modelValue ? 'true' : 'false'"
    :disabled="disabled"
    :aria-describedby="ariaDescribedby"
    v-bind="passthroughAttrs"
    @click="toggle"
    @keydown="onKeydown"
  >
    <span
      class="ui-switch-track"
      :class="modelValue ? 'ui-switch-track--on' : ''"
      aria-hidden="true"
    >
      <span
        class="ui-switch-thumb"
        :class="modelValue ? 'ui-switch-thumb--on' : ''"
      />
    </span>
  </button>
</template>

<script>
let switchCounter = 0

export default {
  name: 'Switch',
  inheritAttrs: false,
  props: {
    /** `v-model` */
    modelValue: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined,
    },
    ariaDescribedby: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    switchCounter += 1
    return { fallbackId: `ui-switch-${switchCounter}` }
  },
  computed: {
    isDisabled() {
      return this.disabled
    },
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    passthroughAttrs() {
      const skip = new Set(['class', 'style', 'id', 'disabled'])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) {
          out[key] = val
        }
      }
      return out
    },
  },
  methods: {
    onKeydown(e) {
      if (this.isDisabled) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        this.toggle()
      }
    },
    toggle() {
      if (this.isDisabled) return
      const next = !this.modelValue
      this.$emit('update:modelValue', next)
      this.$emit('change', next)
    },
  },
}
</script>
