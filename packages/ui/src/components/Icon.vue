<template>
  <i
    :class="iconClass"
    v-bind="rootAttrs"
  />
</template>

<script>
import { cn } from '../utils/cn.js'

/**
 * Font Awesome webfont (`<i class="fa-…">`) — Lucide/Heroicons değil.
 * Tüketen uygulama FA web CSS + webfont yüklemelidir (`all.css` / `all.min.css`).
 * Varsayılan ağırlık `light` (Pro webfont). Free pakette yalnızca `solid` / `regular` / `brands` vardır.
 */
const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

const typeToFaPrefix = {
  solid: 'fa-solid',
  regular: 'fa-regular',
  brands: 'fa-brands',
  light: 'fa-light',
  duotone: 'fa-duotone',
  thin: 'fa-thin',
}

const SIZES = ['xs', 'sm', 'md', 'lg']

const sizeClasses = {
  xs: 'text-xs leading-none',
  sm: 'text-sm leading-none',
  md: 'text-base leading-none',
  lg: 'text-lg leading-none',
}

export default {
  name: 'Icon',
  inheritAttrs: false,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: true,
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /**
     * true: `aria-label` i18n `ui.icon.accessible` ile, `role="img"`.
     * false: dekoratif — `aria-hidden="true"`.
     */
    showAccessibleName: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    faWeightClass() {
      return typeToFaPrefix[this.type] || typeToFaPrefix.light
    },
    iconClass() {
      return cn(
        'ui-icon not-italic inline-block shrink-0',
        this.faWeightClass,
        this.name ? `fa-${this.name}` : '',
        sizeClasses[this.size],
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    accessibleLabel() {
      if (!this.showAccessibleName) return null
      if (typeof this.$t === 'function') {
        return this.$t('ui.icon.accessible', { name: this.name })
      }
      return this.name
    },
    rootAttrs() {
      const base = { ...this.passthroughAttrs }
      if (this.showAccessibleName) {
        base.role = 'img'
        if (base['aria-label'] == null || base['aria-label'] === '') {
          base['aria-label'] = this.accessibleLabel
        }
        base['aria-hidden'] = false
      } else {
        base['aria-hidden'] = true
      }
      return base
    },
  },
}
</script>
