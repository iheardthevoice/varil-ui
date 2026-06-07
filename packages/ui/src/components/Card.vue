<template>
  <div
    :class="rootClasses"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="$slots.toolbar"
      class="ui-card-toolbar shrink-0"
    >
      <slot name="toolbar" />
    </div>

    <div
      v-if="hasHeaderBlock"
      class="ui-card-header shrink-0"
      :class="{ 'ui-card-header--inset': removePadding }"
    >
      <slot name="header">
        <div
          v-if="hasDefaultHeader"
          class="ui-header-lead"
        >
          <div class="ui-header-lead__main">
            <span
              v-if="icon"
              class="ui-header-lead__icon"
            >
              <ui-icon
                :name="icon"
                :type="iconType"
                size="lg"
              />
            </span>
            <div class="ui-header-lead__text">
              <h3
                v-if="title"
                class="ui-heading-3"
              >
                {{ title }}
              </h3>
              <p
                v-if="description"
                class="ui-text-default"
              >
                {{ description }}
              </p>
            </div>
          </div>
          <div
            v-if="$slots.append || $slots.actions"
            class="ui-header-lead__actions"
          >
            <slot name="append" />
            <slot name="actions" />
          </div>
        </div>
      </slot>
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
        'ui-card-body--flush': removePadding,
      }"
    >
      <slot />
    </div>

    <div
      v-if="$slots.footer"
      class="ui-card-footer"
      :class="{ 'ui-card-footer--inset': removePadding }"
    >
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import Divider from './Divider.vue'
import { cn } from '../utils/cn.js'

const BORDER_TYPES = ['solid', 'dashed', 'dotted', 'double']

const BORDER_TYPE_CLASS = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
}

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

export default {
  name: 'Card',
  components: { Divider },
  inheritAttrs: false,
  props: {
    /** Dış çerçeve (1px `border-border`). */
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
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: false,
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı */
    headerDivider: {
      type: Boolean,
      default: false,
    },
    /** Kök padding ve bölüm aralığını kaldırır; gövde kenara yaslanır. Başlık/alt bilgi için kompakt iç boşluk kalır. */
    removePadding: {
      type: Boolean,
      default: false,
    },
    /** Dolgu ve gölge olmadan yalnızca çerçeve (boş tablo kabuğu vb.). */
    transparent: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasDefaultHeader() {
      return !!(
        this.icon ||
        (this.title != null && this.title !== '') ||
        (this.description != null && this.description !== '') ||
        this.$slots.actions ||
        this.$slots.append
      )
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader
    },
    showHeaderDivider() {
      return this.headerDivider && (!!this.$slots.toolbar || this.hasHeaderBlock)
    },
    borderStyleClass() {
      return BORDER_TYPE_CLASS[this.borderType] || BORDER_TYPE_CLASS.solid
    },
    rootClasses() {
      const base = [
        'ui-surface',
        'ui-card',
        ...(this.border
          ? ['border', this.borderStyleClass]
          : ['border-0', 'border-transparent']),
      ]
      if (this.removePadding) {
        base.push('ui-card--no-padding')
      }
      if (this.transparent) {
        base.push('ui-card--transparent')
      }
      return cn(base.join(' '), this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
