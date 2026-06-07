<template>
  <div
    :class="rootClass"
    :style="circleRootStyle"
    :role="presentational ? undefined : 'progressbar'"
    :aria-valuenow="presentational || indeterminate ? undefined : ariaValueNow"
    :aria-valuemin="presentational ? undefined : 0"
    :aria-valuemax="presentational ? undefined : max"
    :aria-label="presentational ? undefined : resolvedAriaLabel"
    :aria-valuetext="presentational ? undefined : ariaValuetext"
  >
    <svg
      v-if="type === 'circle'"
      class="ui-progress-circle-svg"
      :width="circleMetrics.size"
      :height="circleMetrics.size"
      :viewBox="`0 0 ${circleMetrics.size} ${circleMetrics.size}`"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        class="ui-progress-circle-track"
        :cx="circleMetrics.center"
        :cy="circleMetrics.center"
        :r="circleMetrics.radius"
        :stroke-width="circleMetrics.stroke"
      />
      <circle
        class="ui-progress-circle-indicator"
        :cx="circleMetrics.center"
        :cy="circleMetrics.center"
        :r="circleMetrics.radius"
        :stroke-width="circleMetrics.stroke"
        :stroke-dasharray="circleMetrics.circumference"
        :stroke-dashoffset="circleMetrics.offset"
      />
    </svg>
    <div
      v-else
      class="ui-progress-bar-track"
      aria-hidden="true"
    >
      <div
        class="ui-progress-bar-indicator"
        :style="{ width: `${clampedPercent}%` }"
      />
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const TYPES = ['bar', 'circle']
const CIRCLE_SIZES = ['sm', 'md', 'lg']
const BAR_SIZES = ['thin', 'md']
const VARIANTS = ['default', 'weak', 'fair', 'good', 'strong']

const CIRCLE_PX = { sm: 16, md: 20, lg: 24 }
const CIRCLE_STROKE = { sm: 1.5, md: 2, lg: 2 }

export default {
  name: 'Progress',
  inheritAttrs: false,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: 'bar',
      validator: (v) => TYPES.includes(v),
    },
    /** 0 … `max` */
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    /**
     * Daire: sm 16px, md 20px, lg 24px.
     * Çubuk: thin 4px (şifre gücü), md 8px (slider izi).
     */
    size: {
      type: String,
      default: 'md',
    },
    /** Çubuk / halka dolgu rengi — şifre gücü vb. */
    variant: {
      type: String,
      default: 'default',
      validator: (v) => VARIANTS.includes(v),
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    /** Slider izi gibi — progressbar rolü / aria yok */
    presentational: {
      type: Boolean,
      default: false,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
    ariaValuetext: {
      type: String,
      default: '',
    },
  },
  computed: {
    rootClass() {
      const sizeKey =
        this.type === 'circle'
          ? (CIRCLE_SIZES.includes(this.size) ? this.size : 'sm')
          : (BAR_SIZES.includes(this.size) ? this.size : 'md')

      return cn(
        'ui-progress',
        `ui-progress--${this.type}`,
        this.type === 'circle' && `ui-progress--circle-${sizeKey}`,
        this.type === 'bar' && `ui-progress--bar-${sizeKey}`,
        this.variant !== 'default' && `ui-progress--${this.variant}`,
        this.indeterminate && 'ui-progress--indeterminate',
        this.$attrs.class,
      )
    },
    circleSizeKey() {
      return CIRCLE_SIZES.includes(this.size) ? this.size : 'sm'
    },
    barSizeKey() {
      return BAR_SIZES.includes(this.size) ? this.size : 'md'
    },
    circleRootStyle() {
      if (this.type !== 'circle') return undefined
      const px = CIRCLE_PX[this.circleSizeKey] ?? CIRCLE_PX.sm
      return { width: `${px}px`, height: `${px}px` }
    },
    clampedPercent() {
      if (this.indeterminate) return 0
      const max = Number(this.max)
      if (!Number.isFinite(max) || max <= 0) return 0
      const val = Number(this.value)
      if (!Number.isFinite(val)) return 0
      return Math.min(100, Math.max(0, (val / max) * 100))
    },
    ariaValueNow() {
      const max = Number(this.max)
      if (!Number.isFinite(max) || max <= 0) return 0
      return Math.round((this.clampedPercent / 100) * max)
    },
    circleMetrics() {
      const size = CIRCLE_PX[this.circleSizeKey] ?? CIRCLE_PX.sm
      const stroke = CIRCLE_STROKE[this.circleSizeKey] ?? 2
      const radius = (size - stroke) / 2
      const center = size / 2
      const circumference = 2 * Math.PI * radius
      const offset = circumference * (1 - this.clampedPercent / 100)
      return { size, stroke, radius, center, circumference, offset }
    },
    resolvedAriaLabel() {
      if (this.ariaLabel) return this.ariaLabel
      if (typeof this.$t === 'function') {
        return this.$t('ui.progress.ariaLabel')
      }
      return 'Progress'
    },
  },
}
</script>
