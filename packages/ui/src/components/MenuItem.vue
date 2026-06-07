<template>
  <ui-button
    type="button"
    variant="ghost"
    color="secondary"
    fulled
    text-align="left"
    :to="to"
    :prefix-icon="prefixIcon"
    :suffix-icon="suffixIcon"
    :disabled="disabled"
    :loading="loading"
    :class="itemClass"
    :aria-current="active ? 'page' : undefined"
    v-bind="forwardedAttrs"
    @click="onClick"
  >
    <slot />
  </ui-button>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'MenuItem',
  inheritAttrs: false,
  props: {
    /** `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. */
    to: {
      type: [String, Object],
      default: null,
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  computed: {
    itemClass() {
      return cn(
        'ui-menu-item',
        this.active && 'ui-menu-item--active',
        this.$attrs.class,
      )
    },
    forwardedAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  methods: {
    onClick(e) {
      if (this.disabled || this.loading) return
      this.$emit('click', e)
    },
  },
}
</script>
