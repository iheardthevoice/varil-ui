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
          <div class="ui-timepicker-wheels">
            <div
              class="ui-timepicker-selection-band"
              aria-hidden="true"
            />
            <div class="ui-timepicker-wheels-row">
              <div
                class="min-h-0 min-w-0 flex-1"
                role="spinbutton"
                :aria-valuenow="draftHour"
                aria-valuemin="0"
                aria-valuemax="23"
                :aria-label="hourAriaLabel"
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
                      :class="[
                        'ui-timepicker-wheel-item',
                        h === draftHour ? 'ui-timepicker-wheel-item--selected' : '',
                      ]"
                      @click="selectHour(h)"
                    >
                      {{ pad2(h) }}
                    </button>
                  </div>
                </div>
              </div>
              <span
                class="ui-timepicker-colon"
                aria-hidden="true"
              >:</span>
              <div
                class="min-h-0 min-w-0 flex-1"
                role="spinbutton"
                :aria-valuenow="draftMinute"
                aria-valuemin="0"
                aria-valuemax="59"
                :aria-label="minuteAriaLabel"
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
                      :class="[
                        'ui-timepicker-wheel-item',
                        m === draftMinute ? 'ui-timepicker-wheel-item--selected' : '',
                      ]"
                      @click="selectMinute(mi)"
                    >
                      {{ pad2(m) }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top"
              aria-hidden="true"
            />
            <div
              class="ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom"
              aria-hidden="true"
            />
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
import { createUiIdFactory } from '../utils/ui-id.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'

const nextTimePickerId = createUiIdFactory('ui-timepicker')

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
      default: '',
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
    return {
      fallbackId: nextTimePickerId(),
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
    resolvedPlaceholder() {
      if (this.placeholder != null && this.placeholder !== '') {
        return this.placeholder
      }
      return resolveUiText(this, 'ui.timePicker.placeholder', 'Select time')
    },
    hourAriaLabel() {
      return resolveUiText(this, 'ui.timePicker.hourAria', 'Hour')
    },
    minuteAriaLabel() {
      return resolveUiText(this, 'ui.timePicker.minuteAria', 'Minute')
    },
    display() {
      if (this.menuOpen) {
        return `${pad2(this.draftHour)}:${pad2(this.draftMinute)}`
      }
      if (!this.hasValue) return this.resolvedPlaceholder
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
    wheelItemHeight(el) {
      if (!el) return WHEEL_ITEM_PX
      const item = el.querySelector('.ui-timepicker-wheel-item')
      if (!item) return WHEEL_ITEM_PX
      const h = item.getBoundingClientRect().height
      return h > 0 ? h : WHEEL_ITEM_PX
    },
    wheelSpacerTop(el) {
      if (!el) return 0
      const spacer = el.querySelector('.ui-timepicker-wheel-spacer')
      const itemH = this.wheelItemHeight(el)
      if (!spacer) return (el.clientHeight - itemH) / 2
      const pt = parseFloat(window.getComputedStyle(spacer).paddingTop)
      return Number.isFinite(pt) ? pt : (el.clientHeight - itemH) / 2
    },
    indexFromScroll(el, maxIndex) {
      const itemH = this.wheelItemHeight(el)
      const spacer = this.wheelSpacerTop(el)
      const center = el.scrollTop + el.clientHeight / 2
      const idx = Math.round((center - spacer - itemH / 2) / itemH)
      return Math.min(maxIndex, Math.max(0, idx))
    },
    scrollTopForIndex(el, idx) {
      const itemH = this.wheelItemHeight(el)
      const spacer = this.wheelSpacerTop(el)
      return Math.max(0, spacer + idx * itemH + itemH / 2 - el.clientHeight / 2)
    },
    scrollWheelToIndex(el, idx, { smooth = false } = {}) {
      if (!el) return
      const top = this.scrollTopForIndex(el, idx)
      if (smooth && typeof el.scrollTo === 'function') {
        el.scrollTo({ top, behavior: 'smooth' })
      } else {
        el.scrollTop = top
      }
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = true
      const hi = this.draftHour
      const mv = this.minuteValues
      let mi = mv.indexOf(this.draftMinute)
      if (mi === -1) mi = 0
      this.scrollWheelToIndex(this.$refs.hourWheel, hi)
      this.scrollWheelToIndex(this.$refs.minuteWheel, mi)
      requestAnimationFrame(() => {
        this.scrollWheelToIndex(this.$refs.hourWheel, hi)
        this.scrollWheelToIndex(this.$refs.minuteWheel, mi)
        requestAnimationFrame(() => {
          this.wheelSyncing = false
        })
      })
    },
    selectHour(h) {
      this.draftHour = h
      this.wheelSyncing = true
      this.scrollWheelToIndex(this.$refs.hourWheel, h, { smooth: true })
      window.setTimeout(() => {
        this.wheelSyncing = false
        this.emitDraft()
      }, 220)
    },
    selectMinute(mi) {
      const mv = this.minuteValues
      if (!mv.length) return
      const idx = Math.min(mv.length - 1, Math.max(0, mi))
      this.draftMinute = mv[idx]
      this.wheelSyncing = true
      this.scrollWheelToIndex(this.$refs.minuteWheel, idx, { smooth: true })
      window.setTimeout(() => {
        this.wheelSyncing = false
        this.emitDraft()
      }, 220)
    },
    bindWheelListeners() {
      this.unbindWheelListeners()
      const hourEl = this.$refs.hourWheel
      const minuteEl = this.$refs.minuteWheel
      if (!hourEl || !minuteEl) return

      if (this.supportsScrollEnd) {
        hourEl.addEventListener('scroll', this.onHourScrollLive, { passive: true })
        minuteEl.addEventListener('scroll', this.onMinuteScrollLive, { passive: true })
        hourEl.addEventListener('scrollend', this.onHourScrollEnd)
        minuteEl.addEventListener('scrollend', this.onMinuteScrollEnd)
        this._wheelUnsub = () => {
          hourEl.removeEventListener('scroll', this.onHourScrollLive)
          minuteEl.removeEventListener('scroll', this.onMinuteScrollLive)
          hourEl.removeEventListener('scrollend', this.onHourScrollEnd)
          minuteEl.removeEventListener('scrollend', this.onMinuteScrollEnd)
        }
      } else {
        hourEl.addEventListener('scroll', this.onHourScrollLive, { passive: true })
        minuteEl.addEventListener('scroll', this.onMinuteScrollLive, { passive: true })
        hourEl.addEventListener('scroll', this.onHourScrollDebounced, { passive: true })
        minuteEl.addEventListener('scroll', this.onMinuteScrollDebounced, { passive: true })
        this._wheelUnsub = () => {
          hourEl.removeEventListener('scroll', this.onHourScrollLive)
          minuteEl.removeEventListener('scroll', this.onMinuteScrollLive)
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
    onHourScrollLive() {
      if (this.wheelSyncing) return
      const el = this.$refs.hourWheel
      if (!el) return
      this.draftHour = this.indexFromScroll(el, 23)
    },
    onMinuteScrollLive() {
      if (this.wheelSyncing) return
      const el = this.$refs.minuteWheel
      const mv = this.minuteValues
      if (!el || !mv.length) return
      const idx = this.indexFromScroll(el, mv.length - 1)
      this.draftMinute = mv[idx]
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
