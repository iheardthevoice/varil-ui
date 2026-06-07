<template>
  <div
    :class="rootClasses"
    :role="alertRole"
    v-bind="passthroughAttrs"
  >
    <span
      v-if="showIcon"
      :class="['ui-alert-icon', iconToneClass]"
      aria-hidden="true"
    >
      <slot name="icon">
        <ui-icon
          :name="resolvedIcon"
          size="sm"
        />
      </slot>
    </span>
    <div class="ui-alert-body">
      <p
        v-if="title"
        class="ui-alert-title"
      >
        {{ title }}
      </p>
      <p
        v-if="description"
        class="ui-alert-description ui-text-default"
      >
        {{ description }}
      </p>
      <div
        v-if="$slots.default"
        class="ui-alert-slot"
      >
        <slot />
      </div>
    </div>
    <ui-button
      v-if="dismissible"
      native-type="button"
      variant="ghost"
      color="secondary"
      cubed
      size="sm"
      class="ui-alert-dismiss shrink-0"
      prefix-icon="xmark"
      :aria-label="dismissLabel"
      @click="onDismiss"
    />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const VARIANTS = ['info', 'success', 'warning', 'error']

const VARIANT_ICON = {
  info: 'circle-info',
  success: 'circle-check',
  warning: 'triangle-exclamation',
  error: 'circle-xmark',
}

const VARIANT_ICON_CLASS = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
}

export default {
  name: 'Alert',
  inheritAttrs: false,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: 'info',
      validator: (v) => VARIANTS.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** Varsayılan ikon yerine `circle-info` vb. */
    icon: {
      type: String,
      default: null,
    },
    /** `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir */
    showIcon: {
      type: Boolean,
      default: true,
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['dismiss'],
  computed: {
    alertRole() {
      return this.variant === 'error' || this.variant === 'warning' ? 'alert' : 'status'
    },
    resolvedIcon() {
      return this.icon || VARIANT_ICON[this.variant] || VARIANT_ICON.info
    },
    iconToneClass() {
      return VARIANT_ICON_CLASS[this.variant] || VARIANT_ICON_CLASS.info
    },
    rootClasses() {
      return cn(`ui-alert ui-alert--${this.variant}`, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    dismissLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.alert.dismiss')
      }
      return 'Kapat'
    },
  },
  methods: {
    onDismiss() {
      this.$emit('dismiss')
    },
  },
}
</script>
