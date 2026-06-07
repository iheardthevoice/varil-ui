<template>
  <div :class="rootClass">
    <div
      v-if="label || hasValue"
      class="ui-slider-header"
    >
      <span
        v-if="label"
        class="ui-form-label"
      >{{ label }}</span>
      <span
        v-if="hasValue"
        class="ui-slider-value"
      >{{ valueText }}</span>
    </div>
    <div class="ui-slider-rail">
      <ui-progress
        type="bar"
        size="md"
        class="ui-slider-progress"
        :value="fillPercent"
        presentational
      />
      <input
        v-bind="passthroughAttrs"
        :id="resolvedId"
        :value="modelValue"
        type="range"
        class="ui-slider-input"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="modelValue"
        :aria-valuetext="valueText || String(modelValue)"
        :aria-describedby="ariaDescribedby"
        @input="onNativeInput"
        @change="onChange"
      />
    </div>
    <div
      v-if="minLabel || maxLabel"
      class="ui-slider-scale"
    >
      <span v-if="minLabel">{{ minLabel }}</span>
      <span v-if="maxLabel">{{ maxLabel }}</span>
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

let sliderCounter = 0

export default {
  name: 'Slider',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    label: {
      type: String,
      default: '',
    },
    /** Sağ üstte gösterilen biçimlendirilmiş değer (örn. para string’i). */
    valueText: {
      type: String,
      default: '',
    },
    minLabel: {
      type: String,
      default: '',
    },
    maxLabel: {
      type: String,
      default: '',
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
  emits: ['update:modelValue', 'input', 'change'],
  data() {
    sliderCounter += 1
    return { fallbackId: `ui-slider-${sliderCounter}` }
  },
  computed: {
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    hasValue() {
      return this.valueText != null && this.valueText !== ''
    },
    rootClass() {
      return cn('ui-slider', this.disabled && 'ui-slider--disabled', this.$attrs.class)
    },
    fillPercent() {
      const span = Number(this.max) - Number(this.min)
      if (span <= 0 || !Number.isFinite(Number(this.modelValue))) {
        return 0
      }
      const pct = ((Number(this.modelValue) - Number(this.min)) / span) * 100
      return Math.min(100, Math.max(0, pct))
    },
    passthroughAttrs() {
      const skip = new Set([
        'class',
        'style',
        'id',
        'type',
        'value',
        'min',
        'max',
        'step',
        'disabled',
      ])
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
    onNativeInput(e) {
      const v = Number(e.target.value)
      this.$emit('update:modelValue', Number.isNaN(v) ? this.min : v)
      this.$emit('input', e)
    },
    onChange(e) {
      this.$emit('change', e)
    },
  },
}
</script>
