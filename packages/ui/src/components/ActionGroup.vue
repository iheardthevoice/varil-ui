<template>
  <div
    :class="rootClass"
    role="group"
    :aria-label="ariaLabel || undefined"
    v-bind="passthroughAttrs"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const ORIENTATIONS = ['horizontal', 'vertical']

export default {
  name: 'ActionGroup',
  inheritAttrs: false,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (v) => ORIENTATIONS.includes(v),
    },
    /**
     * true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur).
     * Kapsayıcıya border, arka plan veya divide eklenmez.
     */
    joined: {
      type: Boolean,
      default: false,
    },
    /** Yatayda doğrudan çocuklara `flex-1 min-w-0` (toolbar’da eşit pay) */
    grow: {
      type: Boolean,
      default: false,
    },
    /** `role="group"` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-action-group',
        `ui-action-group--${this.orientation}`,
        this.joined && 'ui-action-group--joined',
        this.grow && 'ui-action-group--grow',
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
