<template>
  <div
    :class="['ui-daterangepicker', disabled ? 'pointer-events-none opacity-50' : '', $attrs.class]"
  >
    <ui-popover
      v-model:open="menuOpen"
      placement="bottom-end"
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
        <div class="ui-datepicker-panel ui-daterangepicker-panel p-2">
          <div class="ui-daterangepicker-layout">
            <aside
              class="ui-daterangepicker-quick"
              :aria-label="resolvedQuickAriaLabel"
            >
              <ui-button
                v-for="preset in quickPresets"
                :key="preset.key"
                type="button"
                variant="outline"
                color="secondary"
                size="sm"
                fulled
                :disabled="preset.disabled"
                @click="applyQuick(preset, close)"
              >
                {{ preset.label }}
              </ui-button>
            </aside>

            <div class="ui-daterangepicker-calendars">
              <p
                v-if="rangeHint"
                class="mb-2 text-xs text-muted-foreground"
              >
                {{ rangeHint }}
              </p>

              <div class="ui-daterangepicker-month-row">
                <section
                  v-for="pane in calendarPanes"
                  :key="pane.key"
                  class="ui-daterangepicker-month"
                >
                  <div class="mb-2 flex items-center justify-between gap-2">
                    <ui-button
                      v-if="pane.showPrev"
                      variant="ghost"
                      color="primary"
                      cubed
                      prefix-icon="chevron-left"
                      :aria-label="resolvedPrevMonthLabel"
                      @click.stop="shiftMonth(-1)"
                    />
                    <span
                      v-else
                      class="size-9 shrink-0"
                      aria-hidden="true"
                    />
                    <span class="min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground">
                      {{ pane.title }}
                    </span>
                    <ui-button
                      v-if="pane.showNext"
                      variant="ghost"
                      color="primary"
                      cubed
                      prefix-icon="chevron-right"
                      :aria-label="resolvedNextMonthLabel"
                      @click.stop="shiftMonth(1)"
                    />
                    <span
                      v-else
                      class="size-9 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                  <div class="mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground">
                    <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                  </div>
                  <div class="ui-datepicker-grid">
                    <ui-button
                      v-for="cell in pane.cells"
                      :key="cell.key"
                      :variant="dayVariant(cell)"
                      :color="dayColor(cell)"
                      cubed
                      size="sm"
                      :disabled="cell.disabled"
                      :aria-selected="cell.endpoint ? 'true' : 'false'"
                      :aria-disabled="cell.disabled ? 'true' : undefined"
                      :data-outside="cell.inMonth ? undefined : 'true'"
                      :data-in-range="cell.inRange && !cell.endpoint ? 'true' : undefined"
                      :data-range-endpoint="cell.endpoint ? 'true' : undefined"
                      @mouseenter="onCellHover(cell)"
                      @click="pick(cell, close)"
                    >
                      {{ cell.d }}
                    </ui-button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
let drpCounter = 0

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

function compareYmd(a, b) {
  if (a === b) return 0
  return a < b ? -1 : 1
}

function monthName(year, monthIndex, locale) {
  return new Date(year, monthIndex, 1).toLocaleString(locale, { month: 'long' })
}

function calendarMonthBounds(year, monthIndex, maxYmd, minYmd) {
  const from = `${year}-${pad2(monthIndex + 1)}-01`
  const lastDay = new Date(year, monthIndex + 1, 0).getDate()
  let to = `${year}-${pad2(monthIndex + 1)}-${pad2(lastDay)}`
  if (maxYmd && to > maxYmd) to = maxYmd
  if (minYmd && from < minYmd && to < minYmd) return null
  let safeFrom = from
  if (minYmd && safeFrom < minYmd) safeFrom = minYmd
  if (compareYmd(safeFrom, to) > 0) return null
  return [safeFrom, to]
}

export default {
  name: 'DateRangePicker',
  inheritAttrs: false,
  props: {
    /** `[startYmd, endYmd]` */
    modelValue: {
      type: Array,
      default: () => ['', ''],
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
    min: {
      type: String,
      default: '',
    },
    max: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue', 'change'],
  data() {
    drpCounter += 1
    const id = drpCounter
    const start = this.modelValue?.[0] || ''
    const initial = parseYmd(start) || parseYmd(this.modelValue?.[1]) || new Date()
    return {
      fallbackId: `ui-daterangepicker-${id}`,
      menuOpen: false,
      viewYear: initial.getFullYear(),
      viewMonth: initial.getMonth(),
      pickingStart: '',
      pickingEnd: '',
      hoverYmd: '',
    }
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== '' ? this.id : this.fallbackId
    },
    popoverWidth() {
      return 'min(calc(100vw - 2rem), 50rem)'
    },
    locale() {
      return this.$i18n?.locale || 'tr'
    },
    startYmd() {
      return String(this.modelValue?.[0] || '').trim()
    },
    endYmd() {
      return String(this.modelValue?.[1] || '').trim()
    },
    resolvedPlaceholder() {
      if (this.placeholder) return this.placeholder
      return typeof this.$t === 'function'
        ? this.$t('ui.dateRangePicker.placeholder')
        : 'Select date range'
    },
    displayText() {
      if (!this.startYmd && !this.endYmd) return this.resolvedPlaceholder
      return this.formatDisplay(this.startYmd, this.endYmd)
    },
    rightView() {
      const d = new Date(this.viewYear, this.viewMonth + 1, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    },
    minYmd() {
      return this.min ? String(this.min).trim() : ''
    },
    maxYmd() {
      return this.max ? String(this.max).trim() : ''
    },
    resolvedPrevMonthLabel() {
      return typeof this.$t === 'function'
        ? this.$t('ui.dateRangePicker.prevMonth')
        : 'Previous month'
    },
    resolvedNextMonthLabel() {
      return typeof this.$t === 'function'
        ? this.$t('ui.dateRangePicker.nextMonth')
        : 'Next month'
    },
    resolvedQuickAriaLabel() {
      return typeof this.$t === 'function'
        ? this.$t('ui.dateRangePicker.quickAria')
        : 'Quick range presets'
    },
    rangeHint() {
      if (!this.pickingStart || this.pickingEnd) return ''
      return typeof this.$t === 'function'
        ? this.$t('ui.dateRangePicker.selectEnd')
        : 'Select end date'
    },
    previewStart() {
      return this.pickingStart || this.startYmd
    },
    previewEnd() {
      if (this.pickingEnd) return this.pickingEnd
      if (this.pickingStart && this.hoverYmd) {
        const a = this.pickingStart
        const b = this.hoverYmd
        return compareYmd(a, b) <= 0 ? b : a
      }
      if (this.pickingStart) return this.pickingStart
      return this.endYmd
    },
    quickPresets() {
      const now = new Date()
      const today = toYmd(now)
      const yesterdayDate = new Date(now)
      yesterdayDate.setDate(yesterdayDate.getDate() - 1)
      const yesterday = toYmd(yesterdayDate)

      const thisMonthIndex = now.getMonth()
      const thisYear = now.getFullYear()
      const lastMonthDate = new Date(thisYear, thisMonthIndex - 1, 1)
      const lastYear = lastMonthDate.getFullYear()
      const lastMonthIndex = lastMonthDate.getMonth()

      const t = (key, params) =>
        typeof this.$t === 'function' ? this.$t(key, params) : key

      const presets = [
        {
          key: 'today',
          label: t('ui.dateRangePicker.today'),
          range: [today, today],
        },
        {
          key: 'yesterday',
          label: t('ui.dateRangePicker.yesterday'),
          range: [yesterday, yesterday],
        },
        {
          key: 'thisMonth',
          label: t('ui.dateRangePicker.thisMonth', {
            month: monthName(thisYear, thisMonthIndex, this.locale),
          }),
          range: calendarMonthBounds(thisYear, thisMonthIndex, this.maxYmd, this.minYmd),
        },
        {
          key: 'lastMonth',
          label: t('ui.dateRangePicker.lastMonth', {
            month: monthName(lastYear, lastMonthIndex, this.locale),
          }),
          range: calendarMonthBounds(lastYear, lastMonthIndex, this.maxYmd, this.minYmd),
        },
      ]

      return presets.map((preset) => ({
        ...preset,
        disabled: !preset.range || this.isRangeDisabled(preset.range[0], preset.range[1]),
      }))
    },
    calendarPanes() {
      const left = {
        key: 'left',
        year: this.viewYear,
        month: this.viewMonth,
        showPrev: true,
        showNext: false,
      }
      const right = {
        key: 'right',
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: false,
        showNext: true,
      }
      return [left, right].map((pane) => ({
        ...pane,
        title: monthName(pane.year, pane.month, this.locale),
        cells: this.buildCellsForMonth(pane.year, pane.month),
      }))
    },
  },
  watch: {
    modelValue: {
      deep: true,
      handler() {
        this.syncViewFromValue()
        if (!this.menuOpen) {
          this.pickingStart = ''
          this.pickingEnd = ''
          this.hoverYmd = ''
        }
      },
    },
    menuOpen(open) {
      if (open) {
        this.pickingStart = this.startYmd
        this.pickingEnd = this.endYmd
        this.hoverYmd = ''
        this.syncViewFromValue()
      } else {
        this.pickingStart = ''
        this.pickingEnd = ''
        this.hoverYmd = ''
      }
    },
  },
  methods: {
    syncViewFromValue() {
      const p = parseYmd(this.startYmd) || parseYmd(this.endYmd)
      if (p) {
        this.viewYear = p.getFullYear()
        this.viewMonth = p.getMonth()
      }
    },
    formatDisplay(from, to) {
      const fmt = (s) => {
        if (!s) return '…'
        const [y, m, d] = String(s).split('-')
        return `${d}.${m}.${y}`
      }
      if (!from && !to) return this.resolvedPlaceholder
      if (from === to || !to) return fmt(from || to)
      return `${fmt(from)} – ${fmt(to)}`
    },
    shiftMonth(delta) {
      const d = new Date(this.viewYear, this.viewMonth + delta, 1)
      this.viewYear = d.getFullYear()
      this.viewMonth = d.getMonth()
    },
    isRangeDisabled(from, to) {
      if (!from || !to) return true
      if (this.minYmd && to < this.minYmd) return true
      if (this.maxYmd && from > this.maxYmd) return true
      return false
    },
    buildCellsForMonth(year, month) {
      const first = new Date(year, month, 1)
      const gridStart = new Date(year, month, 1 - first.getDay())
      const rangeStart = this.previewStart
      const rangeEnd = this.previewEnd
      const hasRange = rangeStart && rangeEnd

      const cells = []
      for (let i = 0; i < 42; i += 1) {
        const cur = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + i)
        const inMonth = cur.getMonth() === month && cur.getFullYear() === year
        const d = cur.getDate()
        const ymd = toYmd(cur)
        const key = `${cur.getFullYear()}-${cur.getMonth()}-${cur.getDate()}-${month}`
        const today = toYmd(new Date()) === ymd
        const disabled =
          Boolean(this.minYmd && ymd < this.minYmd) || Boolean(this.maxYmd && ymd > this.maxYmd)

        let inRange = false
        let endpoint = false
        if (hasRange) {
          const lo = compareYmd(rangeStart, rangeEnd) <= 0 ? rangeStart : rangeEnd
          const hi = compareYmd(rangeStart, rangeEnd) <= 0 ? rangeEnd : rangeStart
          inRange = compareYmd(ymd, lo) >= 0 && compareYmd(ymd, hi) <= 0
          endpoint = ymd === lo || ymd === hi
        }

        cells.push({
          key,
          d,
          date: cur,
          today,
          inMonth,
          disabled,
          inRange,
          endpoint,
        })
      }
      return cells
    },
    onCellHover(cell) {
      if (!cell.date || cell.disabled) return
      if (this.pickingStart && !this.pickingEnd) {
        this.hoverYmd = toYmd(cell.date)
      }
    },
    applyQuick(preset, close) {
      if (preset.disabled || !preset.range) return
      const [start, end] = preset.range
      this.pickingStart = start
      this.pickingEnd = end
      this.$emit('update:modelValue', [start, end])
      this.$emit('change', [start, end])
      close()
    },
    pick(cell, close) {
      if (!cell.date || cell.disabled) return
      const ymd = toYmd(cell.date)

      if (!this.pickingStart || (this.pickingStart && this.pickingEnd)) {
        this.pickingStart = ymd
        this.pickingEnd = ''
        this.hoverYmd = ''
        return
      }

      let start = this.pickingStart
      let end = ymd
      if (compareYmd(end, start) < 0) {
        const tmp = start
        start = end
        end = tmp
      }

      this.pickingStart = start
      this.pickingEnd = end
      this.$emit('update:modelValue', [start, end])
      this.$emit('change', [start, end])
      close()
    },
    dayVariant(cell) {
      if (cell.endpoint) return 'solid'
      if (cell.inRange) return 'ghost'
      if (cell.today) return 'outline'
      return 'ghost'
    },
    dayColor(cell) {
      if (cell.endpoint) return 'primary'
      if (cell.today && !cell.inRange) return 'primary'
      return 'secondary'
    },
  },
}
</script>
