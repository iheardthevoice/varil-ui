<template>
  <thead :class="rootClass">
    <slot />
  </thead>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'TableHeader',
  props: {
    sticky: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return cn(this.sticky && 'ui-table-header--sticky', this.$attrs.class)
    },
  },
}
</script>
