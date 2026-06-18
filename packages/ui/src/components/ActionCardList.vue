<template>
  <div
    class="ui-action-card-list"
    role="list"
    :aria-label="ariaLabel || undefined"
    :style="listStyle"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ActionCardList',
  props: {
    ariaLabel: {
      type: String,
      default: '',
    },
    maxHeight: {
      type: String,
      default: '',
    },
  },
  computed: {
    listStyle() {
      if (!this.maxHeight) return undefined
      return { maxHeight: this.maxHeight }
    },
  },
}
</script>
