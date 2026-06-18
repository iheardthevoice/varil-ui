<template>
  <button
    type="button"
    class="ui-action-card"
    :class="{ 'ui-action-card--selected': selected }"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot name="leading">
      <ui-icon
        v-if="showDefaultLeading"
        :name="icon"
        :type="iconType"
        size="md"
        class="ui-action-card__icon"
        aria-hidden="true"
      />
    </slot>

    <span class="ui-action-card__content">
      <span class="ui-action-card__title">
        {{ title }}
      </span>
      <span
        v-if="description"
        class="ui-action-card__description"
      >
        {{ description }}
      </span>
    </span>

    <slot name="trailing">
      <ui-icon
        v-if="showTrailing"
        name="chevron-right"
        type="light"
        size="xs"
        class="ui-action-card__trailing"
        aria-hidden="true"
      />
    </slot>
  </button>
</template>

<script>
const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

export default {
  name: 'ActionCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
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
    selected: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showTrailing: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['click'],
  computed: {
    hasLeadingSlot() {
      return Boolean(this.$slots.leading)
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot
    },
  },
}
</script>
