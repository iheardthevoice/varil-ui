<template>
  <div class="ui-color-picker w-full min-w-0">
    <ui-popover
      v-model:open="popoverOpen"
      placement="bottom-start"
      width="18rem"
    >
      <template #trigger="{ toggle }">
        <ui-button
          type="button"
          variant="solid"
          color="input"
          rounded
          fulled
          text-align="left"
          :prefix-icon="localColor ? undefined : 'palette'"
          :disabled="disabled"
          :aria-haspopup="true"
          @click="toggle"
        >
          <span class="inline-flex min-w-0 flex-1 items-center gap-2 text-foreground">
            <span
              v-if="localColor"
              class="size-4 shrink-0 rounded-full border border-border shadow-sm"
              :style="{ backgroundColor: localColor }"
              aria-hidden="true"
            />
            <span class="truncate">{{ localColor || triggerLabel }}</span>
          </span>
        </ui-button>
      </template>
      <template #content>
        <div class="space-y-3 p-3">
          <div class="flex items-center justify-between gap-2">
            <span class="text-xs font-medium uppercase tracking-wider text-muted-foreground">
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

          <div class="grid grid-cols-8 gap-1.5">
            <button
              v-for="color in presetColors"
              :key="color"
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded-md border border-border shadow-sm transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
              :style="{ backgroundColor: color }"
              :title="color"
              @click="selectColor(color)"
            >
              <ui-icon
                v-if="localColor === color"
                name="check"
                type="solid"
                class="text-sm leading-none text-white mix-blend-difference"
              />
            </button>
          </div>

          <div class="border-t border-border pt-3">
            <span class="mb-2 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {{ customColorLabelText }}
            </span>
            <div class="flex items-center gap-2">
              <ui-input
                v-model="localColor"
                block
                autocomplete="off"
                placeholder="#000000"
                @blur="normalizeHex"
              />
              <span
                class="size-9 shrink-0 rounded-lg border border-border shadow-sm"
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
    localColor: {
      get() {
        return this.modelValue || ''
      },
      set(val) {
        this.$emit('update:modelValue', val || null)
      },
    },
    triggerLabel() {
      return this.triggerPlaceholder || this.$t('ui.colorPicker.triggerPlaceholder')
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t('ui.colorPicker.popoverTitle')
    },
    clearLabelText() {
      return this.clearLabel || this.$t('ui.colorPicker.clear')
    },
    customColorLabelText() {
      return this.customColorLabel || this.$t('ui.colorPicker.customHex')
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
