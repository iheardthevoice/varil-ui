<template>
  <ui-popover
    :open="isOpen"
    :placement="placement"
    :match-trigger-width="matchTriggerWidth"
    :close-on-outside-click="closeOnOutsideClick"
    :close-on-escape="closeOnEscape"
    :outside-click-ignore-selector="outsideClickIgnoreSelector"
    @update:open="onOpenChange"
  >
    <template #trigger="slotProps">
      <slot
        name="trigger"
        v-bind="slotProps"
      />
    </template>
    <template #content="{ close }">
      <div
        class="ui-dropdown-menu min-w-[10rem] p-3"
        role="menu"
        @click.stop
      >
        <template v-if="$slots.menu">
          <slot
            name="menu"
            :close="close"
          />
        </template>
        <template v-else>
          <template
            v-for="(it, idx) in items"
            :key="idx"
          >
            <Divider
              v-if="it.divider"
              spacing="sm"
            />
            <ui-button
              v-else
              variant="ghost"
              color="secondary"
              rounded
              fulled
              text-align="left"
              role="menuitem"
              :prefix-icon="it.icon || null"
              :disabled="it.disabled"
              @click.stop="onItem(it, close)"
            >
              {{ it.label }}
            </ui-button>
          </template>
        </template>
      </div>
    </template>
  </ui-popover>
</template>

<script>
import Divider from './Divider.vue'

const PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'bottom',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
  'top-start',
  'top-end',
]

export default {
  name: 'Dropdown',
  components: { Divider },
  inheritAttrs: false,
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
    open: {
      type: Boolean,
      default: undefined,
    },
    placement: {
      type: String,
      default: 'bottom-start',
      validator: (v) => PLACEMENTS.includes(v),
    },
    matchTriggerWidth: {
      type: Boolean,
      default: false,
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
    outsideClickIgnoreSelector: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['update:open', 'select'],
  data() {
    return {
      internalOpen: false,
    }
  },
  computed: {
    isOpen: {
      get() {
        return this.open !== undefined ? this.open : this.internalOpen
      },
      set(value) {
        if (this.open !== undefined) {
          this.$emit('update:open', value)
        } else {
          this.internalOpen = value
        }
      },
    },
  },
  methods: {
    onOpenChange(value) {
      this.isOpen = value
    },
    onItem(it, close) {
      if (it.disabled) return
      this.$emit('select', it)
      close()
    },
  },
}
</script>
