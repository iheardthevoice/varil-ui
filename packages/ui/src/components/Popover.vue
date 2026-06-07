<template>
  <div
    ref="rootRef"
    class="ui-popover relative shrink-0"
    :class="$attrs.class"
  >
    <div
      ref="triggerRef"
      class="ui-popover-trigger inline-flex shrink-0"
    >
      <slot
        name="trigger"
        :open="open"
        :toggle="toggle"
        :close="close"
      />
    </div>
    <Teleport to="body">
      <Transition name="ui-overlay-popover">
        <div
          v-show="open"
          ref="layerRef"
          class="ui-popover-layer fixed z-[260]"
          :style="layerStyle"
          :data-popover-align-active="alignSelectedOptionToTrigger ? '' : undefined"
          :data-ui-popover-mobile-centered="mobileCenteredActive ? '' : undefined"
          data-ui-popover-layer
        >
          <div
            ref="panelRef"
            class="ui-surface ui-popover-panel w-full min-w-0 outline-none"
            role="dialog"
            tabindex="-1"
            @keydown="onPanelKeydown"
          >
            <div
              v-if="$slots.header"
              class="ui-popover-header"
            >
              <slot
                name="header"
                :close="close"
              />
            </div>
            <div class="ui-popover-body min-h-0 min-w-0">
              <slot
                name="content"
                :close="close"
              />
            </div>
            <div
              v-if="$slots.footer"
              class="ui-popover-footer"
            >
              <slot
                name="footer"
                :close="close"
              />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script>
import { isMobileViewport } from '../utils/viewport.js'

const PLACEMENTS = ['bottom-start', 'bottom-end', 'bottom']

/** Görünüm kenarı ile panel arası minimum boşluk (px) */
const VIEW_MARGIN = 10

/**
 * Dış tıklama: alt popover katmanına tıklanınca üst popover kapanmaz.
 * Üst katmana tıklanınca alt popover varsayılan olarak kapanır;
 * `keepOpenOnAncestorPopoverClick` ile bu davranış isteğe bağlı kapatılabilir.
 */
const BUILTIN_OUTSIDE_CLICK_IGNORE_SELECTORS = [
  '.ui-select-listbox',
  '.ui-datepicker-panel',
  '.ui-daterangepicker-panel',
  '.ui-timepicker-panel',
]

export default {
  name: 'Popover',
  inheritAttrs: false,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    /** Tetikleyici ile aynı minimum genişlik */
    matchTriggerWidth: {
      type: Boolean,
      default: false,
    },
    /**
     * Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir.
     */
    width: {
      type: [String, Number],
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    /**
     * Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker).
     */
    outsideClickIgnoreSelector: {
      type: String,
      default: '',
    },
    /**
     * true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır.
     * false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır.
     */
    keepOpenOnAncestorPopoverClick: {
      type: Boolean,
      default: false,
    },
    /**
     * true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü,
     * tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select).
     */
    alignSelectedOptionToTrigger: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:open'],
  data() {
    return {
      layerStyle: {},
      rafId: 0,
      mobileCenteredActive: false,
    }
  },
  computed: {
    resolvedWidth() {
      const w = this.width
      if (w == null || w === '') return null
      return typeof w === 'number' ? `${w}px` : String(w)
    },
  },
  watch: {
    open(v) {
      if (v) {
        this.$nextTick(() => {
          this.updatePosition()
          this.schedulePosition()
          this.bindGlobalListeners()
        })
      } else {
        this.teardownGlobalListeners()
      }
    },
    width() {
      if (this.open) this.schedulePosition()
    },
  },
  mounted() {
    if (this.open) {
      this.$nextTick(() => {
        this.updatePosition()
        this.schedulePosition()
        this.bindGlobalListeners()
      })
    }
  },
  beforeUnmount() {
    this.teardownGlobalListeners()
    if (this.rafId) cancelAnimationFrame(this.rafId)
  },
  methods: {
    toggle() {
      if (this.disabled) return
      this.$emit('update:open', !this.open)
    },
    close() {
      if (!this.open) return
      this.$emit('update:open', false)
    },
    schedulePosition() {
      if (this.rafId) cancelAnimationFrame(this.rafId)
      this.rafId = requestAnimationFrame(() => {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = 0
          this.updatePosition()
        })
      })
    },
    updatePosition() {
      const trigger = this.$refs.triggerRef
      const panel = this.$refs.panelRef
      if (!trigger || !panel) return
      const vw = window.innerWidth
      const vh = window.innerHeight
      const margin = VIEW_MARGIN
      const explicitW = this.resolvedWidth
      const r = trigger.getBoundingClientRect()
      const panelW =
        explicitW != null
          ? panel.offsetWidth || 200
          : panel.offsetWidth || (this.matchTriggerWidth ? r.width : 200)
      const panelH = panel.offsetHeight || 120

      if (isMobileViewport()) {
        this.mobileCenteredActive = true
        const left = Math.max(margin, Math.round((vw - panelW) / 2))
        const top = Math.max(margin, Math.round((vh - panelH) / 2))
        const style = {
          top: `${top}px`,
          left: `${left}px`,
        }
        if (explicitW != null) {
          style.width = explicitW
          style.minWidth = explicitW
        } else {
          style.width = `${Math.min(panelW, vw - margin * 2)}px`
          style.maxWidth = `calc(100vw - ${margin * 2}px)`
        }
        this.layerStyle = style
        return
      }

      this.mobileCenteredActive = false
      let top = r.bottom + margin
      let left = r.left

      if (this.placement === 'bottom-end') {
        left = r.right - panelW
      } else if (this.placement === 'bottom') {
        left = r.left + (r.width - panelW) / 2
      }

      if (left + panelW > vw - margin) left = Math.max(margin, vw - margin - panelW)
      if (left < margin) left = margin

      if (top + panelH > vh - margin) {
        const above = r.top - margin - panelH
        if (above >= margin) top = above
      }

      const minW =
        this.matchTriggerWidth && explicitW == null ? `${Math.ceil(r.width)}px` : undefined
      const style = {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        minWidth: minW,
      }
      if (explicitW != null) {
        style.width = explicitW
        style.minWidth = explicitW
      }
      this.layerStyle = style
      if (this.alignSelectedOptionToTrigger) {
        this.$nextTick(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger())
          })
        })
      }
    },
    nudgeAlignSelectedToTrigger() {
      const trigger = this.$refs.triggerRef
      const panel = this.$refs.panelRef
      const layer = this.$refs.layerRef
      if (!trigger || !panel || !layer) return
      const listbox = panel.querySelector('[role="listbox"]')
      if (listbox && listbox.scrollHeight > listbox.clientHeight + 2) {
        return
      }
      const selected = panel.querySelector('[role="option"][aria-selected="true"]')
      if (!selected) return
      /** Metin hizası — Select `[data-popover-align]` span’larında */
      const triggerAlign = trigger.querySelector('[data-popover-align]') || trigger
      const selectedAlign = selected.querySelector('[data-popover-align]') || selected
      const tr = triggerAlign.getBoundingClientRect()
      const sr = selectedAlign.getBoundingClientRect()
      const deltaY = sr.top - tr.top
      const deltaX = sr.left - tr.left

      const lb = layer.getBoundingClientRect()
      const topStr = this.layerStyle.top
      const leftStr = this.layerStyle.left
      let topNum =
        typeof topStr === 'string' && topStr !== ''
          ? parseFloat(topStr)
          : lb.top
      let leftNum =
        typeof leftStr === 'string' && leftStr !== ''
          ? parseFloat(leftStr)
          : lb.left
      if (Number.isNaN(topNum)) topNum = lb.top
      if (Number.isNaN(leftNum)) leftNum = lb.left

      let newTop = topNum - deltaY
      let newLeft = leftNum - deltaX

      const margin = VIEW_MARGIN
      const vh = window.innerHeight
      const vw = window.innerWidth
      const h = lb.height
      const w = lb.width

      if (newTop + h > vh - margin) newTop = Math.max(margin, vh - margin - h)
      if (newTop < margin) newTop = margin

      if (newLeft + w > vw - margin) newLeft = Math.max(margin, vw - margin - w)
      if (newLeft < margin) newLeft = margin

      this.layerStyle = {
        ...this.layerStyle,
        top: `${Math.round(newTop)}px`,
        left: `${Math.round(newLeft)}px`,
      }
    },
    bindGlobalListeners() {
      window.addEventListener('scroll', this.onScrollResize, true)
      window.addEventListener('resize', this.onScrollResize)
      document.addEventListener('pointerdown', this.onDocPointerDown, true)
      document.addEventListener('keydown', this.onDocKeydown, true)
    },
    teardownGlobalListeners() {
      window.removeEventListener('scroll', this.onScrollResize, true)
      window.removeEventListener('resize', this.onScrollResize)
      document.removeEventListener('pointerdown', this.onDocPointerDown, true)
      document.removeEventListener('keydown', this.onDocKeydown, true)
    },
    onScrollResize(e) {
      if (!this.open) return
      const panel = this.$refs.panelRef
      const target = e?.target
      if (
        panel
        && target
        && target !== document
        && target !== document.documentElement
        && panel.contains(target)
      ) {
        return
      }
      this.schedulePosition()
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return
      const t = e.target
      const trigger = this.$refs.triggerRef
      const panel = this.$refs.panelRef
      if (trigger?.contains(t) || panel?.contains(t)) return
      if (this.shouldIgnoreOutsideClick(t)) return
      this.close()
    },
    isOpenedInsidePopoverLayer(layerEl) {
      const root = this.$refs.rootRef
      return Boolean(layerEl && root && layerEl.contains(root))
    },
    shouldIgnoreOutsideClick(target) {
      if (typeof target?.closest !== 'function') return false

      const ownLayer = this.$refs.layerRef
      const foreignLayer = target.closest('[data-ui-popover-layer]')
      if (foreignLayer && foreignLayer !== ownLayer) {
        const insideAncestorPopover = this.isOpenedInsidePopoverLayer(foreignLayer)
        if (insideAncestorPopover) {
          return this.keepOpenOnAncestorPopoverClick
        }
        return true
      }

      for (const sel of BUILTIN_OUTSIDE_CLICK_IGNORE_SELECTORS) {
        if (target.closest(sel)) return true
      }

      const extra = this.outsideClickIgnoreSelector?.trim()
      if (extra && target.closest(extra)) return true

      return false
    },
    onDocKeydown(e) {
      if (!this.open || !this.closeOnEscape) return
      if (e.key === 'Escape') {
        e.preventDefault()
        this.close()
      }
    },
    onPanelKeydown(e) {
      if (e.key === 'Escape') this.close()
    },
  },
}
</script>
