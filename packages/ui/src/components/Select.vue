<template>
  <div
    :class="rootClass"
  >
    <input
      v-if="name"
      type="hidden"
      :name="name"
      :value="hiddenFieldValue"
    >
    <ui-popover
      v-model:open="menuOpen"
      placement="bottom-start"
      :match-trigger-width="resolvedMatchTriggerWidth"
      :disabled="isDisabled"
      :align-selected-option-to-trigger="alignSelectedToTrigger"
    >
      <template #trigger="{ open, toggle }">
        <button
          type="button"
          :id="resolvedId"
          class="ui-select-field"
          :class="{ 'ui-select-field--values': multiple }"
          :disabled="isDisabled"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-haspopup="listboxRole"
          :aria-controls="listboxId"
          :aria-describedby="ariaDescribedby"
          v-bind="triggerPassthrough"
          @click="onTriggerClick(toggle)"
        >
          <span
            v-if="prefixIcon"
            class="ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground"
            aria-hidden="true"
          >
            <ui-icon
              :name="prefixIcon"
              size="xs"
            />
          </span>
          <div
            v-if="multiple"
            class="ui-select-values-inner"
          >
            <Tag
              v-for="val in selectedValues"
              :key="String(val)"
              variant="secondary"
              size="sm"
              removable
              @remove="removeValue(val)"
            >
              {{ labelForValue(val) }}
            </Tag>
            <input
              v-if="isFilterable"
              ref="searchInput"
              v-model="filterQuery"
              type="text"
              class="ui-select-values-input"
              :class="{ 'ui-select-values-input--solo': !selectedValues.length }"
              :placeholder="multipleInputPlaceholder"
              :aria-label="resolvedFilterPlaceholder"
              autocomplete="off"
              :disabled="isDisabled"
              @click.stop
              @keydown="onSearchKeydown"
            >
          </div>
          <span
            v-else-if="loading"
            class="ui-select-value ui-select-value--placeholder"
            data-popover-align
          >{{ resolvedLoadingLabel }}</span>
          <span
            v-else
            class="ui-select-value"
            :class="{ 'ui-select-value--placeholder': isPlaceholderDisplay }"
            data-popover-align
          >{{ displayLabel }}</span>
          <span class="ui-select-field-suffix">
            <button
              v-if="showClearButton"
              type="button"
              class="ui-select-clear"
              :aria-label="clearAriaLabel"
              @click.stop="clearSelection"
            >
              <ui-icon
                name="xmark"
                size="xs"
              />
            </button>
            <span
              class="ui-select-chevron"
              aria-hidden="true"
            >
              <ui-icon
                name="chevron-down"
                size="xs"
              />
            </span>
          </span>
        </button>
      </template>
      <template
        v-if="showPopoverHeader"
        #header="{ close }"
      >
        <input
          ref="filterInput"
          v-model="filterQuery"
          type="text"
          class="ui-select-filter-input w-full"
          :placeholder="resolvedFilterPlaceholder"
          :aria-label="resolvedFilterPlaceholder"
          autocomplete="off"
          @mousedown.prevent
          @keydown.enter.prevent="pickFirstFiltered(close)"
          @keydown.esc.prevent="close()"
        >
      </template>
      <template #content="{ close }">
        <div
          ref="listbox"
          :id="listboxId"
          class="ui-select-listbox"
          :role="listboxRole"
          :aria-multiselectable="multiple ? 'true' : undefined"
          :aria-labelledby="resolvedId"
        >
          <div
            v-if="loading && !filteredOptions.length"
            class="flex flex-col gap-2 px-1 py-2"
          >
            <ui-skeleton
              v-for="i in 3"
              :key="i"
              variant="line"
              :class="i === 3 ? 'max-w-[72%]' : undefined"
            />
          </div>
          <template v-else-if="filteredOptions.length">
            <ui-button
              v-for="opt in filteredOptions"
              :key="String(opt.value)"
              variant="ghost"
              color="secondary"
              rounded
              fulled
              text-align="left"
              role="option"
              class="ui-select-option"
              :class="{ 'ui-select-option--selected': isSelected(opt) }"
              :suffix-icon="isSelected(opt) ? 'check' : undefined"
              :aria-selected="isSelected(opt) ? 'true' : 'false'"
              @click="pick(opt, close)"
            >
              <span
                data-popover-align
                class="block min-w-0 truncate"
              >{{ opt.label }}</span>
            </ui-button>
          </template>
          <ui-empty
            v-else-if="isFilterable && filterQuery"
            icon="magnifying-glass"
            size="sm"
            :title="noResultsText"
          />
          <ui-empty
            v-else
            icon="table-cells"
            size="sm"
            :title="emptyOptionsText"
          />
        </div>
      </template>
      <template
        v-if="$slots.footer"
        #footer="footerSlot"
      >
        <slot
          name="footer"
          v-bind="footerSlot"
        />
      </template>
    </ui-popover>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import Tag from './Tag.vue'

let selectCounter = 0

const VARIANTS = ['field', 'inline']
const SIZES = ['sm', 'md', 'lg']

export default {
  name: 'Select',
  components: { Tag },
  inheritAttrs: false,
  inject: {
    uiFormRowPrimary: {
      default: false,
    },
  },
  props: {
    variant: {
      type: String,
      default: 'field',
      validator: (v) => VARIANTS.includes(v),
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: undefined,
    },
    /** Çoklu seçim — `modelValue` dizi; tetikleyicide etiketler + arama, listede onay işareti */
    multiple: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    filterPlaceholder: {
      type: String,
      default: '',
    },
    /** Tetikleyici sol ikon (`ui-icon` `name`) */
    prefixIcon: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    ariaDescribedby: {
      type: String,
      default: undefined,
    },
    fulled: {
      type: Boolean,
      default: true,
    },
    matchTriggerWidth: {
      type: Boolean,
      default: true,
    },
    scrollListThreshold: {
      type: Number,
      default: 6,
    },
    /** Sunucu tarafı arama — liste yerel filtrelenmez; `filterChange` yayınlanır */
    remoteFilter: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change', 'dropdownOpenChange', 'filterChange'],
  data() {
    selectCounter += 1
    const id = selectCounter
    return {
      fallbackId: `ui-select-${id}`,
      listboxId: `ui-select-listbox-${id}`,
      menuOpen: false,
      filterQuery: '',
      filterDebounceTimer: null,
    }
  },
  computed: {
    resolvedSize() {
      if (this.size !== 'md') return this.size
      const fromRow = typeof this.uiFormRowPrimary === 'function'
        ? this.uiFormRowPrimary()
        : this.uiFormRowPrimary
      return fromRow ? 'lg' : 'md'
    },
    rootClass() {
      const isInline = this.variant === 'inline'
      return cn(
        'ui-select',
        isInline && 'ui-select--inline',
        !isInline && this.fulled && 'ui-select--fulled w-full',
        !isInline && !this.fulled && 'w-auto shrink-0',
        this.resolvedSize !== 'md' && `ui-select--${this.resolvedSize}`,
        this.multiple && 'ui-select--multiple',
        this.isFilterable && 'ui-select--filterable',
        this.isDisabled && 'pointer-events-none opacity-50',
        this.$attrs.class,
      )
    },
    isFilterable() {
      return this.filterable || this.multiple
    },
    showPopoverHeader() {
      return this.isFilterable && !this.multiple
    },
    listboxRole() {
      return this.multiple ? 'listbox' : 'listbox'
    },
    resolvedMatchTriggerWidth() {
      if (this.variant === 'inline') return false
      return this.matchTriggerWidth
    },
    isDisabled() {
      return this.disabled
    },
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    resolvedPlaceholder() {
      if (this.placeholder !== undefined && this.placeholder !== null) {
        return this.placeholder
      }
      if (typeof this.$t === 'function') {
        return this.$t('ui.select.placeholder')
      }
      return 'Seçiniz'
    },
    normalizedOptions() {
      const ph = this.resolvedPlaceholder
      return (this.options || [])
        .map((o) => {
          if (o != null && typeof o === 'object' && 'value' in o && 'label' in o) {
            return { value: o.value, label: o.label }
          }
          return { value: o, label: String(o) }
        })
        .filter((o) => {
          if (o.value === '' || o.value == null) return false
          const label = String(o.label)
          const value = String(o.value)
          return label !== ph && value !== ph
        })
    },
    filteredOptions() {
      if (!this.isFilterable || this.remoteFilter) {
        return this.normalizedOptions
      }
      const q = this.normalizeFilter(this.filterQuery)
      if (!q) {
        return this.normalizedOptions
      }
      return this.normalizedOptions.filter(
        (o) =>
          this.normalizeFilter(o.label).includes(q)
          || this.normalizeFilter(String(o.value)).includes(q),
      )
    },
    selectedValues() {
      if (!this.multiple) return []
      if (!Array.isArray(this.modelValue)) return []
      return this.modelValue.filter((v) => v !== '' && v != null)
    },
    stringValue() {
      if (this.multiple) return ''
      if (this.modelValue === '' || this.modelValue == null) {
        return ''
      }
      return String(this.modelValue)
    },
    hiddenFieldValue() {
      if (this.multiple) {
        return this.selectedValues.map((v) => String(v)).join(',')
      }
      return this.stringValue
    },
    isPlaceholderDisplay() {
      if (this.multiple) return false
      return this.stringValue === ''
    },
    displayLabel() {
      if (this.isPlaceholderDisplay) {
        return this.resolvedPlaceholder
      }
      const m = this.normalizedOptions.find((o) => String(o.value) === this.stringValue)
      return m ? m.label : this.stringValue
    },
    multipleInputPlaceholder() {
      if (this.selectedValues.length > 0) {
        return ''
      }
      return this.resolvedPlaceholder
    },
    showClearButton() {
      if (this.isDisabled) return false
      if (this.multiple) {
        return this.clearable && this.selectedValues.length > 0
      }
      return this.clearable && this.stringValue !== ''
    },
    clearAriaLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.select.clear')
      }
      return 'Clear selection'
    },
    resolvedFilterPlaceholder() {
      if (this.filterPlaceholder) return this.filterPlaceholder
      if (typeof this.$t === 'function') {
        return this.$t('ui.select.filterPlaceholder')
      }
      return 'Search…'
    },
    noResultsText() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.select.noResults')
      }
      return 'No results'
    },
    emptyOptionsText() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.select.empty')
      }
      return 'No options'
    },
    resolvedLoadingLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.select.loading')
      }
      return 'Loading…'
    },
    triggerPassthrough() {
      const skip = new Set(['class', 'style', 'id', 'disabled', 'name'])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) {
          out[key] = val
        }
      }
      return out
    },
    optionCount() {
      return this.normalizedOptions.length
    },
    useScrollListMode() {
      if (this.isFilterable) return true
      return this.optionCount > this.scrollListThreshold
    },
    alignSelectedToTrigger() {
      return !this.useScrollListMode
    },
  },
  watch: {
    filterQuery(q) {
      if (!this.remoteFilter) return
      if (this.filterDebounceTimer) {
        clearTimeout(this.filterDebounceTimer)
      }
      this.filterDebounceTimer = setTimeout(() => {
        this.$emit('filterChange', String(q ?? '').trim())
      }, 300)
    },
    menuOpen(open) {
      this.$emit('dropdownOpenChange', open)
      if (!open) {
        if (this.filterDebounceTimer) {
          clearTimeout(this.filterDebounceTimer)
          this.filterDebounceTimer = null
        }
        this.filterQuery = ''
        return
      }
      this.$nextTick(() => {
        if (this.isFilterable) {
          this.focusSearch()
        }
        if (this.useScrollListMode || this.isListboxScrollable()) {
          this.scrollSelectedIntoView()
        }
      })
    },
  },
  methods: {
    normalizeFilter(value) {
      return String(value ?? '')
        .trim()
        .toLocaleLowerCase()
    },
    focusSearch() {
      const el = this.multiple ? this.$refs.searchInput : this.$refs.filterInput
      if (el && typeof el.focus === 'function') {
        el.focus()
        el.select?.()
      }
    },
    onTriggerClick(toggle) {
      toggle()
      if (this.multiple && this.menuOpen) {
        this.$nextTick(() => this.focusSearch())
      }
    },
    isListboxScrollable() {
      const listbox = this.$refs.listbox
      if (!listbox) return false
      return listbox.scrollHeight > listbox.clientHeight + 2
    },
    scrollSelectedIntoView() {
      const listbox = this.$refs.listbox
      if (!listbox) return
      const selected = listbox.querySelector('[role="option"][aria-selected="true"]')
      if (!selected) return
      selected.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    },
    labelForValue(val) {
      const m = this.normalizedOptions.find((o) => String(o.value) === String(val))
      return m ? m.label : String(val)
    },
    isSelected(opt) {
      if (this.multiple) {
        return this.selectedValues.some((v) => String(v) === String(opt.value))
      }
      return String(opt.value) === this.stringValue
    },
    pick(opt, close) {
      if (this.multiple) {
        this.toggleValue(opt)
        this.$nextTick(() => this.focusSearch())
        return
      }
      this.$emit('update:modelValue', opt.value)
      this.$emit('change', { type: 'change', target: { value: String(opt.value) } })
      close()
    },
    toggleValue(opt) {
      const cur = Array.isArray(this.modelValue) ? [...this.modelValue] : []
      const idx = cur.findIndex((v) => String(v) === String(opt.value))
      if (idx >= 0) {
        cur.splice(idx, 1)
      } else {
        cur.push(opt.value)
      }
      this.$emit('update:modelValue', cur)
      this.$emit('change', { type: 'change', target: { value: cur.map(String).join(',') } })
    },
    removeValue(val) {
      if (!this.multiple) return
      const cur = Array.isArray(this.modelValue) ? [...this.modelValue] : []
      const idx = cur.findIndex((v) => String(v) === String(val))
      if (idx < 0) return
      cur.splice(idx, 1)
      this.$emit('update:modelValue', cur)
      this.$emit('change', { type: 'change', target: { value: cur.map(String).join(',') } })
    },
    clearSelection() {
      if (this.multiple) {
        this.$emit('update:modelValue', [])
        this.$emit('change', { type: 'change', target: { value: '' } })
      } else {
        this.$emit('update:modelValue', '')
        this.$emit('change', { type: 'change', target: { value: '' } })
      }
      this.menuOpen = false
    },
    pickFirstFiltered(close) {
      if (this.filteredOptions.length === 0) return
      const first = this.filteredOptions[0]
      if (this.multiple) {
        if (!this.isSelected(first)) {
          this.toggleValue(first)
        }
        return
      }
      this.pick(first, close)
    },
    onSearchKeydown(e) {
      if (e.key === 'Enter') {
        e.preventDefault()
        this.pickFirstFiltered(() => {})
        return
      }
      if (e.key === 'Escape') {
        e.preventDefault()
        this.menuOpen = false
        return
      }
      if (
        this.multiple &&
        e.key === 'Backspace' &&
        !this.filterQuery &&
        this.selectedValues.length > 0
      ) {
        e.preventDefault()
        const last = this.selectedValues[this.selectedValues.length - 1]
        this.removeValue(last)
      }
    },
  },
}
</script>
