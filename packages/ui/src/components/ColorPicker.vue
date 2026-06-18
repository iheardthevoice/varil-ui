<template>
  <div :class="rootClass">
    <ui-popover
      v-model:open="popoverOpen"
      placement="bottom-start"
      :match-trigger-width="true"
      :disabled="disabled"
    >
      <template #trigger="{ open, toggle }">
        <button
          type="button"
          class="ui-select-field"
          :disabled="disabled"
          :aria-expanded="open ? 'true' : 'false'"
          :aria-haspopup="true"
          @click="toggle"
        >
          <span
            class="ui-select-prefix inline-flex shrink-0 items-center"
            aria-hidden="true"
          >
            <span
              v-if="localColor"
              class="ui-color-picker-swatch ui-color-picker-swatch--trigger"
              :style="{ backgroundColor: localColor }"
            />
            <ui-icon
              v-else
              name="palette"
              size="xs"
              class="text-muted-foreground"
            />
          </span>
          <span
            class="ui-select-value"
            :class="{ 'ui-select-value--placeholder': !localColor }"
          >
            {{ displayValue }}
          </span>
          <span class="ui-select-field-suffix">
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
      <template #content>
        <div class="ui-color-picker-panel">
          <div class="ui-color-picker-panel__header">
            <span class="ui-color-picker-panel__title">
              {{ popoverTitleLabel }}
            </span>
            <ui-button
              v-if="localColor"
              type="button"
              variant="ghost"
              color="secondary"
              size="sm"
              prefix-icon="eraser"
              @click.stop="clearColor"
            >
              {{ clearLabelText }}
            </ui-button>
          </div>

          <div class="ui-color-picker-swatches">
            <button
              v-for="color in presetColors"
              :key="color"
              type="button"
              class="ui-color-picker-swatch ui-color-picker-swatch--preset"
              :class="{ 'ui-color-picker-swatch--selected': localColor === color }"
              :style="{ backgroundColor: color }"
              :title="color"
              @click="selectColor(color)"
            >
              <ui-icon
                v-if="localColor === color"
                name="check"
                type="solid"
                size="xs"
                class="text-white mix-blend-difference"
              />
            </button>
          </div>

          <div class="ui-color-picker-custom">
            <span class="ui-color-picker-panel__title">
              {{ customColorLabelText }}
            </span>
            <div class="ui-color-picker-custom__row">
              <ui-input
                v-model="localColor"
                block
                autocomplete="off"
                placeholder="#000000"
                @blur="normalizeHex"
              />
              <span
                class="ui-color-picker-swatch ui-color-picker-swatch--preview"
                :style="{ backgroundColor: localColor || 'transparent' }"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </template>
    </ui-popover>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'

const PRESET_COLORS = [
  '#f87171', '#fb923c', '#fbbf24', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf',
  '#22d3ee', '#38bdf8', '#60a5fa', '#818cf8', '#a78bfa', '#c084fc', '#e879f9', '#f472b6',
  '#fb7185', '#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e', '#10b981', '#14b8a6',
  '#06b6d4', '#0ea5e9', '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef', '#ec4899',
  '#f43f5e', '#b91c1c', '#c2410c', '#b45309', '#4d7c0f', '#15803d', '#047857', '#0f766e',
  '#0e7490', '#0369a1', '#1d4ed8', '#4338ca', '#6d28d9', '#7e22ce', '#a21caf', '#be185d',
]

export default {
  name: 'ColorPicker',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    triggerPlaceholder: {
      type: String,
      default: '',
    },
    popoverTitle: {
      type: String,
      default: '',
    },
    clearLabel: {
      type: String,
      default: '',
    },
    customColorLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  data() {
    return {
      popoverOpen: false,
      presetColors: PRESET_COLORS,
    }
  },
  computed: {
    rootClass() {
      return cn(
        'ui-color-picker ui-color-picker--fulled w-full min-w-0',
        this.disabled && 'pointer-events-none opacity-50',
        this.$attrs.class,
      )
    },
    localColor: {
      get() {
        return this.modelValue || ''
      },
      set(val) {
        this.$emit('update:modelValue', val || null)
      },
    },
    triggerLabel() {
      if (this.triggerPlaceholder) return this.triggerPlaceholder
      return resolveUiText(this, 'ui.colorPicker.triggerPlaceholder', 'Pick a color')
    },
    displayValue() {
      return this.localColor || this.triggerLabel
    },
    popoverTitleLabel() {
      if (this.popoverTitle) return this.popoverTitle
      return resolveUiText(this, 'ui.colorPicker.popoverTitle', 'Color palette')
    },
    clearLabelText() {
      if (this.clearLabel) return this.clearLabel
      return resolveUiText(this, 'ui.colorPicker.clear', 'Clear')
    },
    customColorLabelText() {
      if (this.customColorLabel) return this.customColorLabel
      return resolveUiText(this, 'ui.colorPicker.customHex', 'Custom color (hex)')
    },
  },
  methods: {
    selectColor(color) {
      this.localColor = color
    },
    clearColor() {
      this.localColor = ''
      this.$emit('update:modelValue', null)
      this.popoverOpen = false
    },
    normalizeHex() {
      const raw = String(this.localColor || '').trim()
      if (!raw) return
      let hex = raw.startsWith('#') ? raw : `#${raw}`
      if (/^#[0-9A-Fa-f]{3}$/.test(hex)) {
        hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
      }
      if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
        this.localColor = hex.toUpperCase()
      }
    },
  },
}
</script>
