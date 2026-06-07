<template>
  <li
    class="ui-list-item"
    role="listitem"
  >
    <span
      v-if="prefixIcon"
      class="ui-list-item-prefix"
      aria-hidden="true"
    >
      <ui-icon
        :name="prefixIcon"
        :type="prefixIconType"
        size="xs"
        class="ui-list-item-prefix-icon"
      />
    </span>
    <span
      v-else-if="$slots.prefix"
      class="ui-list-item-prefix-slot shrink-0"
    >
      <slot name="prefix" />
    </span>
    <div class="ui-list-item-content min-w-0 flex-1">
      <slot />
    </div>
  </li>
</template>

<script>
const ICON_TYPES = ['solid', 'regular', 'brands', 'light', 'duotone', 'thin']

export default {
  name: 'ListItem',
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null,
    },
    prefixIconType: {
      type: String,
      default: 'light',
      validator: (v) => ICON_TYPES.includes(v),
    },
  },
}
</script>
