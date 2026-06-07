<template>
  <div
    :class="['ui-timepicker', disabled ? 'pointer-events-none opacity-50' : '', $attrs.class]"
  >
    <ui-popover
      v-model:open="menuOpen"
      placement="bottom-start"
      :match-trigger-width="false"
      :width="popoverWidth"
      :disabled="disabled"
    >
      <template #trigger="{ open, toggle }">
        <ui-button
          type="button"
          :id="resolvedId"
          variant="solid"
          color="input"
          rounded
          fulled
          text-align="left"
          prefix-icon="clock"
          :disabled="disabled"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-haspopup="true"
          @click="toggle"
        >
          <span class="min-w-0 flex-1 truncate text-foreground">{{ display }}</span>
        </ui-button>
      </template>
      <template #content>
        <div class="ui-timepicker-panel w-full p-2">
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-10 -translate-y-1/2 rounded-lg bg-secondary/35 ring-1 ring-border"
              aria-hidden="true"
            />
            <div class="relative z-[1] flex items-stretch gap-0.5">
              <div
                class="min-h-0 min-w-0 flex-1"
                role="spinbutton"
                :aria-valuenow="draftHour"
                aria-valuemin="0"
                aria-valuemax="23"
                aria-label="Saat"
              >
                <div
                  ref="hourWheel"
                  class="ui-timepicker-wheel-viewport"
                >
                  <div class="ui-timepicker-wheel-spacer">
                    <button
                      v-for="h in hourOptions"
                      :key="'h-' + h"
                      type="button"
                      tabindex="-1"
                      class="ui-timepicker-wheel-item"
                      @click="selectHour(h)"
                    >
                      {{ pad2(h) }}
                    </button>
                  </div>
                </div>
              </div>
              <span
                class="flex w-4 shrink-0 select-none items-center justify-center self-stretch text-sm font-normal leading-5 tabular-nums text-muted-foreground"
                aria-hidden="true"
              >:</span>
              <div
                class="min-h-0 min-w-0 flex-1"
                role="spinbutton"
                :aria-valuenow="draftMinute"
                aria-valuemin="0"
                aria-valuemax="59"
                aria-label="Dakika"
              >
                <div
                  ref="minuteWheel"
                  class="ui-timepicker-wheel-viewport"
                >
                  <div class="ui-timepicker-wheel-spacer">
                    <button
                      v-for="(m, mi) in minuteValues"
                      :key="'m-' + m"
                      type="button"
                      tabindex="-1"
                      class="ui-timepicker-wheel-item"
                      @click="selectMinute(mi)"
                    >
                      {{ pad2(m) }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
let tpCounter = 0

/** Tekerlek satır yüksekliği — `.ui-timepicker-wheel-item` ile eşleşmeli (h-10 = 40px) */
const WHEEL_ITEM_PX = 40

function pad2(n) {
  return String(n).padStart(2, '0')
}

export default {
  name: 'TimePicker',
  inheritAttrs: false,
  props: {
    /** `HH:mm` (24 saat) */
    modelValue: {
      type: String,
      default: '',
    },
    /** Adım (dakika) */
    stepMinutes: {
      type: Number,
      default: 15,
    },
    placeholder: {
      type: String,
      default: 'Select time',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined,
    },
    /** `ui-popover` panel genişliği — dar zaman seçici için */
    popoverWidth: {
      type: [String, Number],
      default: '12.5rem',
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    tpCounter += 1
    return {
      fallbackId: `ui-timepicker-${tpCounter}`,
      menuOpen: false,
      draftHour: 0,
      draftMinute: 0,
      wheelSyncing: false,
      _hourScrollTimer: null,
      _minuteScrollTimer: null,
      _wheelUnsub: null,
    }
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== '' ? this.id : this.fallbackId
    },
    hourOptions() {
      return Array.from({ length: 24 }, (_, i) => i)
    },
    minuteValues() {
      const step = Math.min(60, Math.max(1, Math.round(this.stepMinutes)))
      const out = []
      for (let m = 0; m < 60; m += step) {
        out.push(m)
      }
      return out
    },
    hasValue() {
      return this.modelValue != null && this.modelValue !== ''
    },
    display() {
      if (this.menuOpen) {
        return `${pad2(this.draftHour)}:${pad2(this.draftMinute)}`
      }
      if (!this.hasValue) return this.placeholder
      return String(this.modelValue)
    },
    supportsScrollEnd() {
      if (typeof window === 'undefined') return false
      return 'onscrollend' in window
    },
  },
  watch: {
    menuOpen(open) {
      if (open) {
        this.applyModelToDraft()
        /* Teleport + v-show: refs ikinci tick’te hazır olabiliyor */
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.scrollWheelsToDraft()
            this.bindWheelListeners()
          })
        })
      } else {
        this.unbindWheelListeners()
      }
    },
    stepMinutes() {
      if (this.menuOpen) {
        this.applyModelToDraft()
        this.$nextTick(() => {
          this.$nextTick(() => {
            this.scrollWheelsToDraft()
            this.bindWheelListeners()
          })
        })
      }
    },
  },
  beforeUnmount() {
    clearTimeout(this._hourScrollTimer)
    clearTimeout(this._minuteScrollTimer)
    this.unbindWheelListeners()
  },
  methods: {
    pad2,
    applyModelToDraft() {
      const raw = this.modelValue
      let h = 0
      let minutePart = 0
      const m = /^(\d{1,2}):(\d{2})$/.exec(String(raw ?? '').trim())
      if (m) {
        h = Math.min(23, Math.max(0, parseInt(m[1], 10)))
        minutePart = Math.min(59, Math.max(0, parseInt(m[2], 10)))
      }
      const mv = this.minuteValues
      let best = mv[0] ?? 0
      let bestDiff = 999
      for (const x of mv) {
        const d = Math.abs(x - minutePart)
        if (d < bestDiff) {
          bestDiff = d
          best = x
        }
      }
      this.draftHour = h
      this.draftMinute = best
    },
    wheelSpacerTop(el) {
      if (!el) return 0
      const spacer = el.querySelector('.ui-timepicker-wheel-spacer')
      if (!spacer) return (el.clientHeight - WHEEL_ITEM_PX) / 2
      const pt = parseFloat(window.getComputedStyle(spacer).paddingTop)
      return Number.isFinite(pt) ? pt : (el.clientHeight - WHEEL_ITEM_PX) / 2
    },
    indexFromScroll(el, maxIndex) {
      const spacer = this.wheelSpacerTop(el)
      const center = el.scrollTop + el.clientHeight / 2
      const idx = Math.round((center - spacer - WHEEL_ITEM_PX / 2) / WHEEL_ITEM_PX)
      return Math.min(maxIndex, Math.max(0, idx))
    },
    scrollTopForIndex(el, idx) {
      const spacer = this.wheelSpacerTop(el)
      return Math.max(0, spacer + idx * WHEEL_ITEM_PX + WHEEL_ITEM_PX / 2 - el.clientHeight / 2)
    },
    scrollWheelToIndex(el, idx) {
      if (!el) return
      el.scrollTop = this.scrollTopForIndex(el, idx)
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = true
      const hi = this.draftHour
      const mv = this.minuteValues
      let mi = mv.indexOf(this.draftMinute)
      if (mi === -1) mi = 0
      const apply = () => {
        this.scrollWheelToIndex(this.$refs.hourWheel, hi)
        this.scrollWheelToIndex(this.$refs.minuteWheel, mi)
      }
      apply()
      requestAnimationFrame(() => {
        apply()
        requestAnimationFrame(() => {
          this.wheelSyncing = false
        })
      })
    },
    selectHour(h) {
      this.draftHour = h
      this.wheelSyncing = true
      this.scrollWheelToIndex(this.$refs.hourWheel, h)
      requestAnimationFrame(() => {
        this.wheelSyncing = false
        this.emitDraft()
      })
    },
    selectMinute(mi) {
      const mv = this.minuteValues
      if (!mv.length) return
      const idx = Math.min(mv.length - 1, Math.max(0, mi))
      this.draftMinute = mv[idx]
      this.wheelSyncing = true
      this.scrollWheelToIndex(this.$refs.minuteWheel, idx)
      requestAnimationFrame(() => {
        this.wheelSyncing = false
        this.emitDraft()
      })
    },
    bindWheelListeners() {
      this.unbindWheelListeners()
      const hourEl = this.$refs.hourWheel
      const minuteEl = this.$refs.minuteWheel
      if (!hourEl || !minuteEl) return

      if (this.supportsScrollEnd) {
        hourEl.addEventListener('scrollend', this.onHourScrollEnd)
        minuteEl.addEventListener('scrollend', this.onMinuteScrollEnd)
        this._wheelUnsub = () => {
          hourEl.removeEventListener('scrollend', this.onHourScrollEnd)
          minuteEl.removeEventListener('scrollend', this.onMinuteScrollEnd)
        }
      } else {
        hourEl.addEventListener('scroll', this.onHourScrollDebounced, { passive: true })
        minuteEl.addEventListener('scroll', this.onMinuteScrollDebounced, { passive: true })
        this._wheelUnsub = () => {
          hourEl.removeEventListener('scroll', this.onHourScrollDebounced)
          minuteEl.removeEventListener('scroll', this.onMinuteScrollDebounced)
        }
      }
    },
    unbindWheelListeners() {
      if (typeof this._wheelUnsub === 'function') {
        this._wheelUnsub()
        this._wheelUnsub = null
      }
      clearTimeout(this._hourScrollTimer)
      clearTimeout(this._minuteScrollTimer)
    },
    onHourScrollDebounced() {
      if (this.wheelSyncing) return
      clearTimeout(this._hourScrollTimer)
      this._hourScrollTimer = setTimeout(() => this.finalizeHourScroll(), 240)
    },
    onMinuteScrollDebounced() {
      if (this.wheelSyncing) return
      clearTimeout(this._minuteScrollTimer)
      this._minuteScrollTimer = setTimeout(() => this.finalizeMinuteScroll(), 240)
    },
    onHourScrollEnd() {
      if (this.wheelSyncing) return
      clearTimeout(this._hourScrollTimer)
      this.finalizeHourScroll()
    },
    onMinuteScrollEnd() {
      if (this.wheelSyncing) return
      clearTimeout(this._minuteScrollTimer)
      this.finalizeMinuteScroll()
    },
    emitDraft() {
      const next = `${pad2(this.draftHour)}:${pad2(this.draftMinute)}`
      if (next !== this.modelValue) {
        this.$emit('update:modelValue', next)
        this.$emit('change', next)
      }
    },
    finalizeHourScroll() {
      const el = this.$refs.hourWheel
      if (!el || this.wheelSyncing) return
      const idx = this.indexFromScroll(el, 23)
      this.draftHour = idx
      const target = this.scrollTopForIndex(el, idx)
      if (Math.abs(el.scrollTop - target) > 0.5) {
        el.scrollTop = target
      }
      this.emitDraft()
    },
    finalizeMinuteScroll() {
      const el = this.$refs.minuteWheel
      if (!el || this.wheelSyncing) return
      const mv = this.minuteValues
      if (!mv.length) return
      const idx = this.indexFromScroll(el, mv.length - 1)
      this.draftMinute = mv[idx]
      const target = this.scrollTopForIndex(el, idx)
      if (Math.abs(el.scrollTop - target) > 0.5) {
        el.scrollTop = target
      }
      this.emitDraft()
    },
  },
}
</script>
