<template>
  <div
    ref="wrapperRef"
    class="ui-tooltip inline-flex max-w-full min-w-0"
    @mouseenter="onEnter"
    @mouseleave="onLeave"
    @focusin="onFocusIn"
    @focusout="onFocusOut"
  >
    <slot />
    <Teleport to="body">
      <Transition name="ui-tooltip-fade">
        <div
          v-if="open && !disabled && hasContent"
          :id="tooltipId"
          ref="panelRef"
          class="ui-tooltip-panel pointer-events-none fixed z-[300]"
          :style="panelStyle"
          role="tooltip"
        >
          <span class="ui-tooltip-motion inline-flex max-w-full min-w-0">
            <slot name="content">{{ label }}</slot>
          </span>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
let tooltipUid = 0

const PLACEMENTS = ['top', 'bottom', 'left', 'right']

export default {
  name: 'Tooltip',
  inheritAttrs: false,
  props: {
    /** Boşsa yalnızca `content` slot’u kullanılabilir */
    label: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'top',
      validator: (v) => PLACEMENTS.includes(v),
    },
    /** Gecikme (ms) */
    showDelay: {
      type: Number,
      default: 0,
    },
    hideDelay: {
      type: Number,
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
      panelStyle: {},
      tooltipId: `ui-tooltip-${++tooltipUid}`,
      showTimer: null,
      hideTimer: null,
    }
  },
  computed: {
    hasContent() {
      return Boolean(this.label || this.$slots.content)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollResize, true)
    window.addEventListener('resize', this.onScrollResize)
    document.addEventListener('keydown', this.onDocumentKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScrollResize, true)
    window.removeEventListener('resize', this.onScrollResize)
    document.removeEventListener('keydown', this.onDocumentKeydown)
    this.clearTimers()
  },
  methods: {
    clearTimers() {
      if (this.showTimer) {
        clearTimeout(this.showTimer)
        this.showTimer = null
      }
      if (this.hideTimer) {
        clearTimeout(this.hideTimer)
        this.hideTimer = null
      }
    },
    scheduleShow() {
      if (this.disabled || !this.hasContent) return
      this.clearTimers()
      const run = () => {
        this.open = true
        this.$nextTick(() => this.updatePosition())
      }
      if (this.showDelay > 0) {
        this.showTimer = setTimeout(run, this.showDelay)
      } else {
        run()
      }
    },
    scheduleHide() {
      this.clearTimers()
      const run = () => {
        this.open = false
      }
      if (this.hideDelay > 0) {
        this.hideTimer = setTimeout(run, this.hideDelay)
      } else {
        run()
      }
    },
    onEnter() {
      this.scheduleShow()
    },
    onLeave() {
      this.scheduleHide()
    },
    onFocusIn() {
      this.scheduleShow()
    },
    onFocusOut(e) {
      const root = this.$refs.wrapperRef
      if (root && e.relatedTarget && root.contains(e.relatedTarget)) return
      this.scheduleHide()
    },
    onScrollResize() {
      if (this.open) this.updatePosition()
    },
    onDocumentKeydown(e) {
      if (e.key === 'Escape' && this.open) {
        this.open = false
        this.clearTimers()
      }
    },
    updatePosition() {
      const root = this.$refs.wrapperRef
      if (!root) return
      const rect = root.getBoundingClientRect()
      const gap = 8
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      let style = {}
      switch (this.placement) {
        case 'bottom':
          style = {
            left: `${cx}px`,
            top: `${rect.bottom + gap}px`,
            transform: 'translate(-50%, 0)',
          }
          break
        case 'left':
          style = {
            left: `${rect.left - gap}px`,
            top: `${cy}px`,
            transform: 'translate(-100%, -50%)',
          }
          break
        case 'right':
          style = {
            left: `${rect.right + gap}px`,
            top: `${cy}px`,
            transform: 'translate(0, -50%)',
          }
          break
        case 'top':
        default:
          style = {
            left: `${cx}px`,
            top: `${rect.top - gap}px`,
            transform: 'translate(-50%, -100%)',
          }
      }
      this.panelStyle = style
    },
  },
}
</script>
