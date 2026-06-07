<template>
  <div class="ui-table-scroll">
    <table
      :class="rootClass"
      v-bind="passthroughAttrs"
    >
      <slot />
    </table>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'Table',
  inheritAttrs: false,
  computed: {
    rootClass() {
      return cn('ui-table', this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
