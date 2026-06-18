<template>
  <Tooltip
    :label="tooltipLabel"
    :disabled="!showTooltip"
    placement="top"
  >
    <span
      :class="badgeClasses"
      :style="hexBadgeStyle"
    >
      <span
        v-if="$slots.prepend"
        class="inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
      >
        <slot name="prepend" />
      </span>
      <span
        ref="labelRef"
        class="ui-badge-label"
        :class="labelWidthClass"
      >
        <slot />
      </span>
      <span
        v-if="$slots.append"
        class="inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
      >
        <slot name="append" />
      </span>
    </span>
  </Tooltip>
</template>

<script>
import Tooltip from './Tooltip.vue'

const VARIANTS = ['solid', 'secondary', 'outline']

const SIZES = ['sm', 'md', 'lg']

const variantClasses = {
  solid: 'border border-transparent bg-primary text-primary-foreground',
  secondary: 'border border-transparent bg-secondary text-secondary-foreground',
  outline: 'border border-border bg-transparent text-foreground',
}

const sizeClasses = {
  sm: 'ui-badge--sm',
  md: 'ui-badge--md',
  lg: 'ui-badge--lg',
}

const LABEL_WIDTH_CLASSES = {
  '32': 'max-w-32',
  '40': 'max-w-40',
  '48': 'max-w-48',
  full: 'max-w-full',
}

/** @param {string} raw */
function normalizeHexColor(raw) {
  const value = String(raw || '').trim()
  if (!value) return ''
  let hex = value.startsWith('#') ? value : `#${value}`
  if (/^#[0-9A-Fa-f]{3}$/.test(hex)) {
    hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
  }
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) return ''
  return hex.toUpperCase()
}

/** @param {string} hex */
function contrastTextForHex(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.58 ? '#0a0a0a' : '#ffffff'
}

export default {
  name: 'Badge',
  components: { Tooltip },
  props: {
    variant: {
      type: String,
      default: 'solid',
      validator: (v) => VARIANTS.includes(v),
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: 'sm',
      validator: (v) => SIZES.includes(v),
    },
    /** Uzun metinde kısaltma (…) ve taşma varsa tooltip */
    truncate: {
      type: Boolean,
      default: true,
    },
    /** Tailwind max-w-* anahtarı: full (varsayılan), 32, 40, 48 */
    maxWidth: {
      type: String,
      default: 'full',
      validator: (v) => Object.keys(LABEL_WIDTH_CLASSES).includes(v),
    },
    /** Tooltip metni; boşsa slot metni kullanılır */
    tooltip: {
      type: String,
      default: '',
    },
    /** Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır */
    hex: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isTruncated: false,
      labelText: '',
      resizeObserver: null,
    }
  },
  computed: {
    labelWidthClass() {
      if (!this.truncate) return 'max-w-full'
      return LABEL_WIDTH_CLASSES[this.maxWidth] || LABEL_WIDTH_CLASSES['32']
    },
    hasAdornment() {
      return Boolean(this.$slots.prepend || this.$slots.append)
    },
    normalizedHex() {
      return normalizeHexColor(this.hex)
    },
    hexBadgeStyle() {
      if (!this.normalizedHex) return undefined
      return {
        backgroundColor: this.normalizedHex,
        color: contrastTextForHex(this.normalizedHex),
        borderColor: 'transparent',
        boxShadow: '0 1px 2px rgb(0 0 0 / 0.12)',
      }
    },
    badgeClasses() {
      return [
        'ui-badge inline-flex max-w-full items-center font-medium',
        this.hasAdornment ? 'gap-1' : 'justify-center',
        sizeClasses[this.size] || sizeClasses.sm,
        !this.normalizedHex && (variantClasses[this.variant] || variantClasses.solid),
      ]
    },
    tooltipLabel() {
      return (this.tooltip || this.labelText || '').trim()
    },
    showTooltip() {
      return this.truncate && this.isTruncated && Boolean(this.tooltipLabel)
    },
  },
  watch: {
    tooltip() {
      this.$nextTick(() => this.measureLabel())
    },
  },
  mounted() {
    this.$nextTick(() => this.observeLabel())
  },
  updated() {
    this.$nextTick(() => this.measureLabel())
  },
  beforeUnmount() {
    this.resizeObserver?.disconnect()
    this.resizeObserver = null
  },
  methods: {
    observeLabel() {
      const el = this.$refs.labelRef
      if (!el || typeof ResizeObserver === 'undefined') {
        this.measureLabel()
        return
      }
      this.resizeObserver?.disconnect()
      this.measureLabel()
      this.resizeObserver = new ResizeObserver(() => this.measureLabel())
      this.resizeObserver.observe(el)
    },
    measureLabel() {
      const el = this.$refs.labelRef
      if (!el) {
        this.isTruncated = false
        this.labelText = ''
        return
      }
      this.labelText = (el.textContent || '').trim()
      if (!this.truncate) {
        this.isTruncated = false
        return
      }
      this.isTruncated = el.scrollWidth > el.clientWidth + 1
    },
  },
}
</script>
