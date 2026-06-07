<template>
  <div
    :class="groupClass"
    v-bind="passthroughAttrs"
  >
    <p
      v-if="label"
      class="ui-menu-group-label"
    >
      {{ label }}
    </p>
    <div class="ui-menu-group-items">
      <slot />
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'MenuGroup',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    groupClass() {
      return cn('ui-menu-group', this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
