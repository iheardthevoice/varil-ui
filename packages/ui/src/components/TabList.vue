<template>
  <div
    :class="listClass"
    role="tablist"
    :aria-label="ariaLabel || undefined"
    :aria-orientation="ariaOrientation"
    v-bind="passthroughAttrs"
    @keydown="onKeydown"
  >
    <slot />
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

export default {
  name: 'TabList',
  inheritAttrs: false,
  inject: {
    uiTabs: {
      default: null,
    },
  },
  props: {
    /** `tablist` erişilebilir adı (birden fazla sekme şeridi için önerilir). */
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    ariaOrientation() {
      return this.uiTabs?.orientation === 'vertical' ? 'vertical' : 'horizontal'
    },
    listClass() {
      const vert = this.uiTabs?.orientation === 'vertical'
      const variant = this.uiTabs?.variant
      /** `segmented` yalnızca yatay; dikeyde `line` düzeni kullanılır. */
      const kind = variant === 'segmented' && !vert ? 'segmented' : 'line'

      return cn(
        'ui-tab-list',
        kind === 'segmented' ? 'ui-tab-list--segmented' : 'ui-tab-list--line',
        vert ? 'ui-tab-list--vertical' : 'ui-tab-list--horizontal',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  mounted() {
    if (!this.uiTabs && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[TabList] Yalnızca <ui-tabs> içinde kullanılmalı.')
    }
  },
  methods: {
    /** Klavye: ok tuşları ile tetikleyiciler arasında odak (yatay/dikey). */
    onKeydown(e) {
      if (!this.uiTabs) return
      const vert = this.uiTabs.orientation === 'vertical'
      const triggers = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'))
      if (triggers.length === 0) return

      const keysNext = vert ? ['ArrowDown', 'ArrowRight'] : ['ArrowRight', 'ArrowDown']
      const keysPrev = vert ? ['ArrowUp', 'ArrowLeft'] : ['ArrowLeft', 'ArrowUp']
      const k = e.key

      let delta = 0
      if (keysNext.includes(k)) delta = 1
      else if (keysPrev.includes(k)) delta = -1
      else return

      e.preventDefault()
      const active = document.activeElement
      let idx = triggers.indexOf(active)
      if (idx === -1) idx = triggers.findIndex((el) => el.getAttribute('aria-selected') === 'true')
      if (idx === -1) idx = 0

      let next = idx + delta
      if (next < 0) next = triggers.length - 1
      if (next >= triggers.length) next = 0

      triggers[next]?.focus?.()
    },
  },
}
</script>
