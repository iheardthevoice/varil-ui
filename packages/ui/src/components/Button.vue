<template>
  <RouterLink
    v-if="hasRouterTo"
    v-slot="{ href, navigate }"
    :to="to"
    custom
  >
    <a
      :href="href"
      :class="buttonClasses"
      :data-variant="variant"
      :data-color="color"
      :aria-disabled="isDisabled ? 'true' : undefined"
      :tabindex="isDisabled ? -1 : undefined"
      @click="onRouterLinkClick($event, navigate)"
    >
      <template v-if="loading && usesCubedCenterLayout">
        <span
          class="ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center"
          aria-hidden="true"
        >
          <ui-icon
            :size="cubedIconSize"
            name="spinner"
            class="fa-spin"
          />
        </span>
      </template>
      <template v-else-if="loading">
        <span
          class="inline-flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <ui-icon
            :size="inlineIconSize"
            name="spinner"
            class="fa-spin"
          />
        </span>
        <span :class="textContentClass">
          <span
            v-if="resolvedLoadingText"
            class="sr-only"
          >{{ resolvedLoadingText }}</span>
          <slot v-else />
        </span>
      </template>
      <template v-else-if="usesCubedCenterLayout">
        <span class="ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none">
          <ui-icon
            v-if="prefixIcon"
            :size="cubedIconSize"
            :name="prefixIcon"
          />
          <ui-icon
            v-else-if="suffixIcon"
            :size="cubedIconSize"
            :name="suffixIcon"
          />
          <slot v-else />
        </span>
      </template>
      <template v-else>
        <span
          v-if="prefixIcon"
          class="inline-flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <ui-icon
            :size="inlineIconSize"
            :name="prefixIcon"
          />
        </span>
        <span :class="textContentClass">
          <slot />
        </span>
        <span
          v-if="suffixIcon"
          class="inline-flex shrink-0 items-center justify-center"
          aria-hidden="true"
        >
          <ui-icon
            :size="inlineIconSize"
            :name="suffixIcon"
          />
        </span>
      </template>
    </a>
  </RouterLink>
  <button
    v-else
    :type="nativeType"
    :disabled="isDisabled"
    :class="buttonClasses"
    :data-variant="variant"
    :data-color="color"
    @click="onClick"
  >
    <template v-if="loading && usesCubedCenterLayout">
      <span
        class="ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center"
        aria-hidden="true"
      >
        <ui-icon
          :size="cubedIconSize"
          name="spinner"
          class="fa-spin"
        />
      </span>
    </template>
    <template v-else-if="loading">
      <span
        class="inline-flex shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <ui-icon
          :size="inlineIconSize"
          name="spinner"
          class="fa-spin"
        />
      </span>
      <span :class="textContentClass">
        <span
          v-if="resolvedLoadingText"
          class="sr-only"
        >{{ resolvedLoadingText }}</span>
        <slot v-else />
      </span>
    </template>
    <template v-else-if="usesCubedCenterLayout">
      <span class="ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none">
        <ui-icon
          v-if="prefixIcon"
          :size="cubedIconSize"
          :name="prefixIcon"
        />
        <ui-icon
          v-else-if="suffixIcon"
          :size="cubedIconSize"
          :name="suffixIcon"
        />
        <slot v-else />
      </span>
    </template>
    <template v-else>
      <span
        v-if="prefixIcon"
        class="inline-flex shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <ui-icon
          :size="inlineIconSize"
          :name="prefixIcon"
        />
      </span>
      <span :class="textContentClass">
        <slot />
      </span>
      <span
        v-if="suffixIcon"
        class="inline-flex shrink-0 items-center justify-center"
        aria-hidden="true"
      >
        <ui-icon
          :size="inlineIconSize"
          :name="suffixIcon"
        />
      </span>
    </template>
  </button>
</template>

<script>
import { RouterLink } from 'vue-router'
import { resolveUiText } from '../utils/resolve-ui-text.js'

const sizes = ['sm', 'md', 'lg']
const variants = ['solid', 'outline', 'ghost', 'link', 'nav']
const colors = ['primary', 'secondary', 'input', 'warning', 'success', 'info']

const NATIVE_TYPES = ['button', 'submit', 'reset']

const sizeClasses = {
  sm: 'ui-control-h-sm',
  md: 'ui-control-h-md',
  lg: 'ui-control-h-lg',
}

/** `cubed` + ikon/kısa metin: kare kutular; `size` ile `ui-control-h-*` ölçüleri hizalanır */
const cubedSizeClasses = {
  sm: 'aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4',
  md: 'aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5',
  lg: 'aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6',
}

const linkSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
}

/**
 * Tam sınıf dizeleri (Tailwind JIT). `variant` × `color`.
 * Renkler `themes/default.css` + `tailwind-preset.cjs` token’larından gelir.
 */
const VARIANT_COLOR_CLASSES = {
  solid: {
    primary:
      'border-0 bg-primary text-primary-foreground shadow-none hover:opacity-90',
    secondary:
      'border-0 bg-secondary text-secondary-foreground shadow-none hover:opacity-90',
    input:
      'border-0 shadow-none',
    warning:
      'border-0 bg-warning text-warning-foreground shadow-none hover:opacity-90',
    success:
      'border-0 bg-success text-success-foreground shadow-none hover:opacity-90',
    info: 'border-0 bg-info text-info-foreground shadow-none hover:opacity-90',
  },
  outline: {
    primary:
      'border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60',
    secondary:
      'border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60',
    warning:
      'shadow-none border border-warning bg-transparent text-warning hover:bg-warning/10',
    success:
      'shadow-none border border-success bg-transparent text-success hover:bg-success/10',
    info: 'shadow-none border border-info bg-transparent text-info hover:bg-info/10',
  },
  ghost: {
    primary:
      'shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground',
    secondary:
      'shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground',
    warning:
      'shadow-none border-0 bg-transparent text-warning hover:bg-warning hover:text-warning-foreground',
    success:
      'shadow-none border-0 bg-transparent text-success hover:bg-success hover:text-success-foreground',
    info:
      'shadow-none border-0 bg-transparent text-info hover:bg-info hover:text-info-foreground',
  },
  link: {
    primary:
      'border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline',
    secondary:
      'border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline',
    warning:
      'border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline',
    success:
      'border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline',
    info: 'border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline',
  },
  nav: {
    primary:
      'shadow-none border-0 bg-transparent text-foreground hover:bg-transparent',
    secondary:
      'shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-transparent',
    input:
      'shadow-none border-0 bg-transparent text-foreground hover:bg-transparent',
    warning:
      'shadow-none border-0 bg-transparent text-warning hover:bg-transparent',
    success:
      'shadow-none border-0 bg-transparent text-success hover:bg-transparent',
    info:
      'shadow-none border-0 bg-transparent text-info hover:bg-transparent',
  },
}

export default {
  name: 'Button',
  components: { RouterLink },
  props: {
    /** `vue-router` hedefi; verildiğinde `<a>` + istemci navigasyonu (`RouterLink` custom). */
    to: {
      type: [String, Object],
      default: null,
    },
    /** Native `<button type="...">` — `to` yokken; forms için `submit` / `reset`. */
    nativeType: {
      type: String,
      default: 'button',
      validator: (value) => NATIVE_TYPES.includes(value),
    },
    variant: {
      type: String,
      default: 'solid',
      validator: (value) => variants.includes(value),
    },
    color: {
      type: String,
      default: 'primary',
      validator: (value) => colors.includes(value),
    },
    size: {
      type: String,
      default: 'md',
      validator: (value) => sizes.includes(value),
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
    loadingText: {
      type: String,
      default: null,
    },
    cubed: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    fulled: {
      type: Boolean,
      default: false,
    },
    /** `fulled` ile aynı — tam genişlik düğme. */
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Metin slot’u (ve `loading` durumunda görünen satır) yatay hizası.
     */
    textAlign: {
      type: String,
      default: 'center',
      validator: (v) => v === 'left' || v === 'center',
    },
  },
  emits: ['click'],
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== ''
    },
    /**
     * Kübik kutu: yalnız ikon veya tek slot (ör. avatar).
     * Slot varken `textContentClass` (`truncate`) kullanılmaz — kesilme olmaz.
     */
    usesCubedCenterLayout() {
      if (!this.cubed) return false
      if (this.prefixIcon && this.suffixIcon) return false
      if (this.prefixIcon || this.suffixIcon) {
        return !this.$slots.default
      }
      return true
    },
    isDisabled() {
      return this.disabled || this.loading
    },
    resolvedLoadingText() {
      if (this.loadingText != null && this.loadingText !== '') {
        return this.loadingText
      }
      return resolveUiText(this, 'ui.button.loading', 'Loading')
    },
    textContentClass() {
      const align = this.textAlign === 'left' ? 'text-left' : 'text-center'
      return ['ui-button-text min-w-0 flex-1 truncate', align].join(' ')
    },
    /** Metin yanı ikonlar — küçük kontrollerde `xs`, `lg` düğmede `sm`. */
    inlineIconSize() {
      return this.size === 'lg' ? 'sm' : 'xs'
    },
    /** Kübik düğme ikonları — kutu boyutuna göre. */
    cubedIconSize() {
      const m = { sm: 'xs', md: 'sm', lg: 'sm' }
      return m[this.size] || 'sm'
    },
    buttonClasses() {
      const isLink = this.variant === 'link'
      const isNav = this.variant === 'nav'
      let sizeOrCubed
      if (this.cubed && !isLink && !isNav) {
        sizeOrCubed = cubedSizeClasses[this.size] || cubedSizeClasses.md
      } else if (isLink) {
        sizeOrCubed = linkSizeClasses[this.size]
      } else if (isNav) {
        sizeOrCubed = 'h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0'
      } else {
        sizeOrCubed = sizeClasses[this.size] || sizeClasses.md
      }

      let roundedClass = ''
      if (!isLink && !isNav) {
        if (this.rounded && !this.cubed) roundedClass = 'rounded-full'
        else if (this.cubed) roundedClass = 'rounded-full'
      }

      const variantColor =
        VARIANT_COLOR_CLASSES[this.variant]?.[this.color] ||
        VARIANT_COLOR_CLASSES.solid.primary

      const isBlock = this.fulled || this.block

      return [
        'ui-button ui-control font-sans',
        variantColor,
        sizeOrCubed,
        isBlock ? 'ui-button--fulled w-full' : '',
        roundedClass,
        this.isDisabled ? 'cursor-not-allowed opacity-50' : '',
        this.hasRouterTo ? 'inline-flex items-center' : '',
      ]
    },
  },
  methods: {
    onClick(e) {
      if (this.isDisabled) return
      this.$emit('click', e)
    },
    onRouterLinkClick(e, navigate) {
      if (this.isDisabled) {
        e.preventDefault()
        return
      }
      this.$emit('click', e)
      navigate(e)
    },
  },
}
</script>
