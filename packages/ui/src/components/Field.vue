<template>
  <div
    :class="rootClass"
    v-bind="passthroughAttrs"
  >
    <div
      v-if="title || showIcon"
      class="ui-field__title-row"
    >
      <span
        v-if="showIcon"
        class="ui-field__title-icon"
        aria-hidden="true"
      >
        <ui-icon
          :name="icon"
          :type="iconType"
          size="md"
        />
      </span>
      <span
        v-if="title"
        class="ui-field__title"
      >
        {{ title }}
      </span>
    </div>
    <div
      v-if="hasValue"
      class="ui-field__value"
    >
      <slot />
    </div>
    <p
      v-if="subtitle"
      class="ui-field__subtitle"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

export default {
  name: 'Field',
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    /** true: yuvarlatılmış arka plan (kenarlık yok). */
    card: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: '',
    },
    iconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
  },
  computed: {
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    hasValue() {
      return Boolean(this.$slots.default)
    },
    showIcon() {
      return Boolean(this.icon)
    },
    rootClass() {
      return cn('ui-field', this.card && 'ui-field--card', this.$attrs.class)
    },
  },
}
</script>
