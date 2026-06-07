<template>
  <component
    :is="tag"
    :class="listClass"
    role="list"
    v-bind="passthroughAttrs"
  >
    <slot />
  </component>
</template>

<script>
import { cn } from '../utils/cn.js'

const TAGS = ['ul', 'ol', 'div']

export default {
  name: 'List',
  inheritAttrs: false,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: 'ul',
      validator: (v) => TAGS.includes(v),
    },
    /** Öğeler arası dikey boşluk (`gap-3` | `gap-4`). */
    density: {
      type: String,
      default: 'normal',
      validator: (v) => ['compact', 'normal', 'relaxed'].includes(v),
    },
  },
  computed: {
    listClass() {
      const gap =
        this.density === 'compact'
          ? 'gap-3'
          : this.density === 'relaxed'
            ? 'gap-5'
            : 'gap-4'
      return cn('ui-list', gap, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
