<template>
  <nav
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="$slots.header"
      class="ui-menu-header"
    >
      <slot name="header" />
    </div>
    <div class="ui-menu-body">
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      class="ui-menu-footer"
    >
      <slot name="footer" />
    </div>
  </nav>
</template>

<script>
import { cn } from '../utils/cn.js'

const WIDTHS = ['sm', 'md', 'lg', 'full']

const WIDTH_CLASS = {
  sm: 'w-52 max-w-full',
  md: 'w-56 max-w-full',
  lg: 'w-64 max-w-full',
  full: 'w-full max-w-full',
}

export default {
  name: 'Menu',
  inheritAttrs: false,
  props: {
    width: {
      type: String,
      default: 'md',
      validator: (v) => WIDTHS.includes(v),
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-menu',
        WIDTH_CLASS[this.width] || WIDTH_CLASS.md,
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
