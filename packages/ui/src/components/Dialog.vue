<template>
  <Teleport to="body">
    <Transition
      name="ui-overlay-dialog"
      appear
      @after-enter="onOverlayAfterEnter"
      @after-leave="onOverlayAfterLeave"
    >
      <div
        v-if="open"
        ref="layerRef"
        :class="rootLayerClasses"
        tabindex="-1"
        role="presentation"
        @keydown="onLayerKeydown"
      >
        <div
          class="ui-dialog-backdrop absolute inset-0 bg-black/50"
          aria-hidden="true"
          @click="onBackdrop"
        />
        <div
          ref="panelRef"
          :class="panelClasses"
          :style="panelStyle"
          role="dialog"
          aria-modal="true"
          tabindex="-1"
          :aria-labelledby="ariaLabelledby"
          :aria-describedby="ariaDescribedby"
          :aria-label="ariaLabelAttr"
          v-bind="passthroughAttrs"
          @click.stop
        >
          <div
            class="ui-dialog-sheet-grab shrink-0"
            @pointerdown="onSheetPointerDown"
          >
            <div
              class="ui-dialog-sheet-handle"
              aria-hidden="true"
            />
          </div>
          <div
            v-if="hasHeaderBlock"
            class="ui-card-header shrink-0"
          >
            <slot name="header">
              <div
                v-if="hasDefaultHeader"
                class="ui-dialog-header"
                :class="{ 'ui-dialog-header--no-icon': !icon }"
              >
                <span
                    v-if="icon"
                    class="ui-dialog-header__icon"
                  >
                    <ui-icon
                      :name="icon"
                      :type="iconType"
                      size="sm"
                    />
                  </span>
                  <h3
                    v-if="title"
                    :id="titleId"
                    class="ui-dialog-header__title ui-heading-3"
                  >
                    {{ title }}
                  </h3>
                  <div
                    v-if="$slots.append || $slots.actions"
                    class="ui-dialog-header__actions"
                  >
                    <slot name="append" />
                    <slot name="actions" />
                  </div>
                  <ui-button
                    v-if="showClose"
                    type="button"
                    variant="solid"
                    color="secondary"
                    size="sm"
                    cubed
                    prefix-icon="xmark"
                    :aria-label="resolvedCloseLabel"
                    @click="close"
                  />
                <p
                  v-if="description"
                  :id="descriptionId"
                  class="ui-dialog-header__description ui-text-default"
                >
                  {{ description }}
                </p>
              </div>
            </slot>
          </div>

          <div
            v-if="$slots.toolbar"
            class="ui-card-toolbar shrink-0"
          >
            <slot name="toolbar" />
          </div>

          <Divider
            v-if="showHeaderDivider"
            spacing="none"
            class="!my-0 shrink-0"
          />

          <div
            v-if="$slots.default"
            class="ui-card-body ui-text-default"
            :class="{
              'ui-card-body--row': row,
              'ui-card-body--flush': bodyPadding === 'none',
              'ui-card-body--flex': bodyLayout === 'flex',
            }"
          >
            <slot />
          </div>

          <div
            v-if="$slots.footer"
            class="ui-card-footer"
          >
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import Divider from './Divider.vue'
import { cn } from '../utils/cn.js'
import { createUiIdFactory } from '../utils/ui-id.js'
import { resolveUiText } from '../utils/resolve-ui-text.js'
import { pickPassthroughAttrs } from '../utils/pick-passthrough-attrs.js'
import { focusFirstField } from '../utils/focus-first-field.js'
import { isMobileViewport } from '../utils/viewport.js'

const nextDialogId = createUiIdFactory('ui-dialog')

const BORDER_TYPES = ['solid', 'dashed', 'dotted', 'double']

const BORDER_TYPE_CLASS = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
}

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

const MAX_WIDTHS = ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl']

const MAX_WIDTH_CLASS = {
  sm: 'ui-dialog-panel--max-sm',
  md: 'ui-dialog-panel--max-md',
  lg: 'ui-dialog-panel--max-lg',
  xl: 'ui-dialog-panel--max-xl',
  '2xl': 'ui-dialog-panel--max-2xl',
  '3xl': 'ui-dialog-panel--max-3xl',
  '4xl': 'ui-dialog-panel--max-4xl',
  '5xl': 'ui-dialog-panel--max-5xl',
}

export default {
  name: 'Dialog',
  components: { Divider },
  inheritAttrs: false,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: false,
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    /** İç panel genişliği (`max-w-*`). */
    maxWidth: {
      type: String,
      default: 'lg',
      validator: (v) => MAX_WIDTHS.includes(v),
    },
    /** Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. */
    border: {
      type: Boolean,
      default: true,
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: 'solid',
      validator: (v) => BORDER_TYPES.includes(v),
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null,
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    /** Sağ üst kapat düğmesi. */
    showClose: {
      type: Boolean,
      default: true,
    },
    /** Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). */
    closeLabel: {
      type: String,
      default: '',
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: false,
    },
    /** Gövde dolgusu — `none`: kenar padding sıfır (POS ödeme vb.). */
    bodyPadding: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'none',
    },
    /** Gövde düzeni — `flex`: dikey flex + taşma kontrolü (içerik paneli). */
    bodyLayout: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'flex',
    },
    /** Panel `max-height` — örn. `min(85vh, 36rem)`. */
    panelMaxHeight: {
      type: String,
      default: '',
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. */
    headerDivider: {
      type: Boolean,
      default: false,
    },
    /**
     * Başlık yokken `role="dialog"` için erişilebilir ad.
     * Başlık varsa `aria-labelledby` önceliklidir.
     */
    ariaLabel: {
      type: String,
      default: '',
    },
    /** Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). */
    initialFocus: {
      type: Boolean,
      default: true,
    },
    /**
     * Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay).
     * @type {'default' | 'confirm'}
     */
    stackLayer: {
      type: String,
      default: 'default',
      validator: (v) => v === 'default' || v === 'confirm',
    },
  },
  emits: ['update:open', 'after-leave'],
  data() {
    const id = nextDialogId()
    return {
      titleId: `ui-dialog-title-${id}`,
      descriptionId: `ui-dialog-desc-${id}`,
      focusFallbackTimer: null,
      sheetDragCleanup: null,
    }
  },
  watch: {
    open: {
      handler(isOpen) {
        if (isOpen) {
          this.scheduleInitialFocus()
        } else {
          this.clearFocusFallback()
          this.teardownSheetDrag()
        }
      },
      flush: 'post',
    },
  },
  beforeUnmount() {
    this.clearFocusFallback()
    this.teardownSheetDrag()
  },
  computed: {
    hasDefaultHeader() {
      return !!(
        this.icon ||
        (this.title != null && this.title !== '') ||
        (this.description != null && this.description !== '') ||
        this.$slots.actions ||
        this.$slots.append ||
        this.showClose
      )
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader
    },
    showHeaderDivider() {
      return (
        this.headerDivider &&
        !!this.$slots.default &&
        (this.hasHeaderBlock || !!this.$slots.toolbar)
      )
    },
    borderStyleClass() {
      return BORDER_TYPE_CLASS[this.borderType] || BORDER_TYPE_CLASS.solid
    },
    maxWidthClass() {
      return MAX_WIDTH_CLASS[this.maxWidth] || MAX_WIDTH_CLASS.lg
    },
    panelClasses() {
      const borderPart = this.border
        ? cn('border', this.borderStyleClass)
        : cn('border-0', 'border-transparent')
      return cn(
        'ui-surface ui-card ui-dialog-panel relative z-[1] w-full',
        this.maxWidthClass,
        borderPart,
        this.bodyLayout === 'flex' ? 'ui-dialog-panel--body-flex' : '',
        this.$attrs.class,
      )
    },
    panelStyle() {
      if (!this.panelMaxHeight) return undefined
      return { maxHeight: this.panelMaxHeight }
    },
    passthroughAttrs() {
      return pickPassthroughAttrs(this.$attrs, ['class'])
    },
    ariaLabelledby() {
      if (this.title != null && this.title !== '') {
        return this.titleId
      }
      return undefined
    },
    ariaDescribedby() {
      if (this.description != null && this.description !== '') {
        return this.descriptionId
      }
      return undefined
    },
    ariaLabelAttr() {
      if (this.ariaLabelledby) return undefined
      if (this.ariaLabel != null && this.ariaLabel !== '') return this.ariaLabel
      return undefined
    },
    resolvedCloseLabel() {
      if (this.closeLabel != null && this.closeLabel !== '') {
        return this.closeLabel
      }
      return resolveUiText(this, 'ui.dialog.close', 'Close')
    },
    rootLayerClasses() {
      return cn(
        'ui-dialog-root fixed inset-0 flex outline-none',
        this.stackLayer === 'confirm' && 'ui-dialog-root--confirm',
      )
    },
  },
  methods: {
    onOverlayAfterEnter() {
      this.scheduleInitialFocus()
    },
    clearFocusFallback() {
      if (this.focusFallbackTimer != null) {
        clearTimeout(this.focusFallbackTimer)
        this.focusFallbackTimer = null
      }
    },
    scheduleInitialFocus() {
      if (!this.open || !this.initialFocus) return
      this.clearFocusFallback()
      this.$nextTick(() => {
        const panel = this.$refs.panelRef
        if (!panel) {
          this.runInitialFocus()
          return
        }
        const onTransitionEnd = (event) => {
          if (event.target !== panel) return
          panel.removeEventListener('transitionend', onTransitionEnd)
          this.clearFocusFallback()
          this.runInitialFocus()
        }
        panel.addEventListener('transitionend', onTransitionEnd)
        this.focusFallbackTimer = setTimeout(() => {
          panel.removeEventListener('transitionend', onTransitionEnd)
          this.focusFallbackTimer = null
          this.runInitialFocus()
        }, 480)
      })
    },
    runInitialFocus() {
      if (!this.open || !this.initialFocus) return
      this.$nextTick(() => {
        this.focusInitialField()
      })
    },
    onOverlayAfterLeave() {
      this.$emit('after-leave')
    },
    focusInitialField() {
      const panel = this.$refs.panelRef
      if (panel && focusFirstField(panel)) return
      panel?.focus?.()
    },
    close() {
      if (!this.open) return
      this.$emit('update:open', false)
    },
    onBackdrop() {
      if (this.closeOnBackdrop) this.close()
    },
    onLayerKeydown(e) {
      if (this.closeOnEscape && e.key === 'Escape') {
        e.preventDefault()
        this.close()
      }
    },
    teardownSheetDrag() {
      if (this.sheetDragCleanup) {
        this.sheetDragCleanup()
        this.sheetDragCleanup = null
      }
      const panel = this.$refs.panelRef
      if (panel) {
        panel.style.transform = ''
        panel.style.transition = ''
      }
    },
    onSheetPointerDown(e) {
      if (!isMobileViewport() || e.button !== 0) return
      const panel = this.$refs.panelRef
      if (!panel) return
      e.preventDefault()
      this.teardownSheetDrag()
      const startY = e.clientY
      const prevTransition = panel.style.transition
      panel.style.transition = 'none'
      const onMove = (ev) => {
        const dy = Math.max(0, ev.clientY - startY)
        panel.style.transform = `translateY(${dy}px)`
      }
      const onUp = (ev) => {
        const dy = Math.max(0, ev.clientY - startY)
        panel.style.transition = prevTransition
        panel.style.transform = ''
        if (dy >= 72) {
          this.close()
        }
        this.teardownSheetDrag()
      }
      const onCancel = () => {
        panel.style.transition = prevTransition
        panel.style.transform = ''
        this.teardownSheetDrag()
      }
      window.addEventListener('pointermove', onMove)
      window.addEventListener('pointerup', onUp)
      window.addEventListener('pointercancel', onCancel)
      this.sheetDragCleanup = () => {
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointerup', onUp)
        window.removeEventListener('pointercancel', onCancel)
      }
    },
  },
}
</script>
