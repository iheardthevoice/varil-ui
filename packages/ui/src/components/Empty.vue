<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="resolvedIcon"
      class="ui-empty-icon"
    >
      <ui-icon
        :name="resolvedIcon"
        :type="iconType"
        :size="iconSize"
      />
    </div>
    <h2
      v-if="title"
      class="ui-empty-title"
    >
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="ui-empty-description ui-text-default"
    >
      {{ description }}
    </p>
    <div
      v-if="$slots.default"
      class="ui-empty-actions"
    >
      <slot />
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']
const SIZES = ['sm', 'md', 'lg']

const ICON_SIZE_BY_EMPTY = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
}

export default {
  name: 'Empty',
  inheritAttrs: false,
  props: {
    /** `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. */
    icon: {
      type: String,
      default: 'plus',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** `ui-icon` `type` */
    iconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
  },
  computed: {
    iconSize() {
      return ICON_SIZE_BY_EMPTY[this.size] ?? 'md'
    },
    resolvedIcon() {
      if (this.icon == null || this.icon === '') {
        return null
      }
      return this.icon
    },
    rootClass() {
      return cn('ui-empty', `ui-empty--${this.size}`, this.$attrs.class)
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
}
</script>
