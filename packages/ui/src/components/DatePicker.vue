<template>
  <div
    :class="['ui-datepicker', disabled ? 'pointer-events-none opacity-50' : '', $attrs.class]"
  >
    <ui-popover
      v-model:open="menuOpen"
      placement="bottom-start"
      :match-trigger-width="true"
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
          prefix-icon="calendar"
          :disabled="disabled"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-haspopup="true"
          @click="toggle"
        >
          <span class="min-w-0 flex-1 truncate text-foreground">{{ displayText }}</span>
        </ui-button>
      </template>
      <template #content="{ close }">
        <div class="ui-datepicker-panel w-full min-w-[17rem] p-2">
          <div class="mb-2 flex items-center justify-between gap-2">
            <ui-button
              variant="ghost"
              color="primary"
              cubed
              prefix-icon="chevron-left"
              aria-label="Previous month"
              @click.stop="shiftMonth(-1)"
            />
            <span class="text-sm font-medium tabular-nums text-foreground">{{ monthTitle }}</span>
            <ui-button
              variant="ghost"
              color="primary"
              cubed
              prefix-icon="chevron-right"
              aria-label="Next month"
              @click.stop="shiftMonth(1)"
            />
          </div>
          <div class="mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div class="ui-datepicker-grid">
            <ui-button
              v-for="cell in calendarCells"
              :key="cell.key"
              :variant="dayVariant(cell)"
              :color="dayColor(cell)"
              cubed
              size="sm"
              :disabled="cell.disabled"
              :aria-selected="cell.sel ? 'true' : 'false'"
              :aria-disabled="cell.disabled ? 'true' : undefined"
              :data-outside="cell.inMonth ? undefined : 'true'"
              @click="pick(cell, close)"
            >
              {{ cell.d }}
            </ui-button>
          </div>
          <div class="ui-datepicker-quick">
            <ui-button
              type="button"
              variant="outline"
              color="secondary"
              size="sm"
              fulled
              :disabled="todayQuickDisabled"
              @click="pickQuick('today', close)"
            >
              {{ resolvedTodayLabel }}
            </ui-button>
            <ui-button
              type="button"
              variant="outline"
              color="secondary"
              size="sm"
              fulled
              :disabled="yesterdayQuickDisabled"
              @click="pickQuick('yesterday', close)"
            >
              {{ resolvedYesterdayLabel }}
            </ui-button>
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
let dpCounter = 0

function pad2(n) {
  return String(n).padStart(2, '0')
}

function toYmd(d) {
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function parseYmd(s) {
  if (s == null || s === '') return null
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(s).trim())
  if (!m) return null
  const y = Number(m[1])
  const mo = Number(m[2]) - 1
  const da = Number(m[3])
  const d = new Date(y, mo, da)
  if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== da) return null
  return d
}

export default {
  name: 'DatePicker',
  inheritAttrs: false,
  props: {
    /** `YYYY-MM-DD` */
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Pick a date',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: undefined,
    },
    /** En erken seçilebilir gün (`YYYY-MM-DD`) */
    min: {
      type: String,
      default: '',
    },
    /** Boş bırakılırsa `ui.datePicker.today` (i18n) */
    todayLabel: {
      type: String,
      default: '',
    },
    /** Boş bırakılırsa `ui.datePicker.yesterday` (i18n) */
    yesterdayLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    dpCounter += 1
    const id = dpCounter
    const initial = parseYmd(this.modelValue) || new Date()
    return {
      fallbackId: `ui-datepicker-${id}`,
      menuOpen: false,
      viewYear: initial.getFullYear(),
      viewMonth: initial.getMonth(),
    }
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== '' ? this.id : this.fallbackId
    },
    selectedDate() {
      return parseYmd(this.modelValue)
    },
    displayText() {
      if (!this.selectedDate) return this.placeholder
      return toYmd(this.selectedDate)
    },
    monthTitle() {
      return new Date(this.viewYear, this.viewMonth, 1).toLocaleString('en-US', {
        month: 'long',
        year: 'numeric',
      })
    },
    minYmd() {
      return this.min ? String(this.min).trim() : ''
    },
    resolvedTodayLabel() {
      if (this.todayLabel) return this.todayLabel
      return typeof this.$t === 'function' ? this.$t('ui.datePicker.today') : 'Today'
    },
    resolvedYesterdayLabel() {
      if (this.yesterdayLabel) return this.yesterdayLabel
      return typeof this.$t === 'function' ? this.$t('ui.datePicker.yesterday') : 'Yesterday'
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(new Date())
    },
    yesterdayQuickDisabled() {
      const d = new Date()
      d.setDate(d.getDate() - 1)
      return this.isQuickDateDisabled(d)
    },
    calendarCells() {
      const y = this.viewYear
      const m = this.viewMonth
      const first = new Date(y, m, 1)
      const start = new Date(y, m, 1 - first.getDay())
      const cells = []
      for (let i = 0; i < 42; i += 1) {
        const cur = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
        const inMonth = cur.getMonth() === m && cur.getFullYear() === y
        const d = cur.getDate()
        const ymd = toYmd(cur)
        const key = `${cur.getFullYear()}-${cur.getMonth()}-${cur.getDate()}`
        const sel = !!(this.selectedDate && ymd === toYmd(this.selectedDate))
        const today = toYmd(new Date()) === ymd
        const disabled = Boolean(this.minYmd && ymd < this.minYmd)
        cells.push({
          key,
          d,
          out: !inMonth,
          date: cur,
          sel,
          today,
          inMonth,
          disabled,
        })
      }
      return cells
    },
  },
  watch: {
    modelValue() {
      const p = parseYmd(this.modelValue)
      if (p) {
        this.viewYear = p.getFullYear()
        this.viewMonth = p.getMonth()
      }
    },
  },
  methods: {
    isQuickDateDisabled(date) {
      if (!date) return true
      const ymd = toYmd(date)
      return Boolean(this.minYmd && ymd < this.minYmd)
    },
    shiftMonth(delta) {
      const d = new Date(this.viewYear, this.viewMonth + delta, 1)
      this.viewYear = d.getFullYear()
      this.viewMonth = d.getMonth()
    },
    pick(cell, close) {
      if (!cell.date || cell.disabled) return
      const ymd = toYmd(cell.date)
      this.$emit('update:modelValue', ymd)
      this.$emit('change', ymd)
      close()
    },
    pickQuick(kind, close) {
      const date = new Date()
      if (kind === 'yesterday') {
        date.setDate(date.getDate() - 1)
      }
      if (this.isQuickDateDisabled(date)) return
      const ymd = toYmd(date)
      this.viewYear = date.getFullYear()
      this.viewMonth = date.getMonth()
      this.$emit('update:modelValue', ymd)
      this.$emit('change', ymd)
      close()
    },
    dayVariant(cell) {
      if (cell.sel) return 'solid'
      if (cell.today && !cell.sel) return 'outline'
      return 'ghost'
    },
    dayColor(cell) {
      if (cell.sel) return 'primary'
      if (cell.today && !cell.sel) return 'primary'
      return 'secondary'
    },
  },
}
</script>
