<template>
  <Teleport to="body">
    <div class="ui-toast-host">
      <TransitionGroup
        name="ui-toast"
        tag="div"
        class="ui-toast-stack"
      >
        <div
          v-for="item in items"
          :key="item.id"
          class="pointer-events-auto flex w-full justify-center"
        >
          <div
            :class="toastClasses(item)"
            v-bind="toastA11y(item)"
          >
            <span
              :class="['ui-alert-icon', iconToneClass(item.variant)]"
              aria-hidden="true"
            >
              <ui-icon
                :name="iconFor(item.variant)"
                size="sm"
              />
            </span>
            <div class="ui-alert-body">
              <p
                v-if="item.title"
                class="ui-alert-title"
              >
                {{ item.title }}
              </p>
              <p
                v-if="item.description"
                class="ui-alert-description ui-text-default"
              >
                {{ item.description }}
              </p>
            </div>
            <ui-button
              native-type="button"
              variant="ghost"
              color="secondary"
              cubed
              size="sm"
              class="ui-toast-dismiss shrink-0"
              prefix-icon="xmark"
              :aria-label="dismissLabel"
              @click="queueDismissToast(item.id)"
            />
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script>
import { toastState, dismissToast as queueDismissToast } from '../toast-queue.js'

const VARIANT_ICON = {
  info: 'circle-info',
  success: 'circle-check',
  warning: 'triangle-exclamation',
  error: 'circle-xmark',
}

const VARIANT_ICON_CLASS = {
  info: 'text-info',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-destructive',
}

export default {
  name: 'Toast',
  computed: {
    items() {
      return toastState.items
    },
    dismissLabel() {
      if (typeof this.$t === 'function') {
        return this.$t('ui.alert.dismiss')
      }
      return 'Kapat'
    },
  },
  methods: {
    queueDismissToast,
    iconFor(variant) {
      return VARIANT_ICON[variant] || VARIANT_ICON.info
    },
    iconToneClass(variant) {
      return VARIANT_ICON_CLASS[variant] || VARIANT_ICON_CLASS.info
    },
    toastClasses(item) {
      const v = item.variant ?? 'info'
      return [`ui-alert ui-alert--${v} ui-alert--toast`]
    },
    toastA11y(item) {
      const assertive = item.variant === 'error'
      return {
        role: assertive ? 'alert' : 'status',
        'aria-live': assertive ? 'assertive' : 'polite',
      }
    },
  },
}
</script>
