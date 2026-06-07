<template>
  <Badge
    :variant="variant"
    :size="size"
    class="ui-tag max-w-[min(100%,14rem)] shrink-0"
  >
    <template
      v-if="removable"
      #append
    >
      <Tooltip
        :label="removeLabel"
        placement="bottom"
      >
        <button
          type="button"
          class="ui-tag-remove"
          :aria-label="removeLabel"
          @click.stop="$emit('remove')"
        >
          <ui-icon
            name="xmark"
            size="xs"
          />
        </button>
      </Tooltip>
    </template>
    <slot />
  </Badge>
</template>

<script>
import Badge from './Badge.vue'
import Tooltip from './Tooltip.vue'

export default {
  name: 'Tag',
  components: { Badge, Tooltip },
  props: {
    variant: {
      type: String,
      default: 'secondary',
      validator: (v) => ['solid', 'secondary', 'outline'].includes(v),
    },
    size: {
      type: String,
      default: 'sm',
      validator: (v) => ['sm', 'md', 'lg'].includes(v),
    },
    removable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['remove'],
  computed: {
    removeLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.tag.remove')
      }
      return 'Kaldır'
    },
  },
}
</script>
