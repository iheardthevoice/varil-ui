<template>
  <div
    :class="navClass"
    role="navigation"
    :aria-label="ariaLabel || undefined"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'MenuNav',
  inheritAttrs: false,
  props: {
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    navClass() {
      return cn('ui-menu-nav', this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
