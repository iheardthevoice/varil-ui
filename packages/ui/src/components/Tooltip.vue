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
          class="ui-tooltip-panel pointer-events-none fixed"
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
const VIEW_MARGIN = 8

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
      const gap = VIEW_MARGIN
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      let placement = this.placement
      let style = {}
      switch (placement) {
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
      this.$nextTick(() => {
        this.clampToViewport(rect, placement, gap)
      })
    },
    clampToViewport(triggerRect, placement, gap) {
      const panel = this.$refs.panelRef
      if (!panel) return

      const vw = window.innerWidth
      const vh = window.innerHeight
      let panelRect = panel.getBoundingClientRect()

      if (placement === 'top' && panelRect.top < VIEW_MARGIN) {
        this.panelStyle = {
          left: `${triggerRect.left + triggerRect.width / 2}px`,
          top: `${triggerRect.bottom + gap}px`,
          transform: 'translate(-50%, 0)',
        }
        panelRect = panel.getBoundingClientRect()
      } else if (placement === 'bottom' && panelRect.bottom > vh - VIEW_MARGIN) {
        this.panelStyle = {
          left: `${triggerRect.left + triggerRect.width / 2}px`,
          top: `${triggerRect.top - gap}px`,
          transform: 'translate(-50%, -100%)',
        }
        panelRect = panel.getBoundingClientRect()
      }

      let dx = 0
      let dy = 0
      if (panelRect.left < VIEW_MARGIN) {
        dx = VIEW_MARGIN - panelRect.left
      } else if (panelRect.right > vw - VIEW_MARGIN) {
        dx = vw - VIEW_MARGIN - panelRect.right
      }
      if (panelRect.top < VIEW_MARGIN) {
        dy = VIEW_MARGIN - panelRect.top
      } else if (panelRect.bottom > vh - VIEW_MARGIN) {
        dy = vh - VIEW_MARGIN - panelRect.bottom
      }

      if (dx === 0 && dy === 0) return

      const left = parseFloat(this.panelStyle.left)
      const top = parseFloat(this.panelStyle.top)
      if (!Number.isFinite(left) || !Number.isFinite(top)) return

      this.panelStyle = {
        ...this.panelStyle,
        left: `${left + dx}px`,
        top: `${top + dy}px`,
      }
    },
  },
}
</script>
