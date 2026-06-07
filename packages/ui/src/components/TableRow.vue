<template>
  <tr :class="rootClass">
    <slot />
  </tr>
</template>

<script>
import { cn } from '../utils/cn.js'

const HOVERS = ['soft', 'strong']

export default {
  name: 'TableRow',
  props: {
    hover: {
      type: String,
      default: undefined,
      validator: (v) => v == null || HOVERS.includes(v),
    },
    clickable: {
      type: Boolean,
      default: false,
    },
    interactive: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-table-row',
        this.hover === 'soft' && 'ui-table-row--soft-hover',
        this.hover === 'strong' && 'ui-table-row--strong-hover',
        this.interactive && 'ui-table-row--interactive',
        this.clickable && 'ui-table-row--clickable',
        this.selected && 'ui-table-row--selected',
        this.$attrs.class,
      )
    },
  },
}
</script>
