<template>
  <button
    type="button"
    role="radio"
    :class="segmentClass"
    :aria-checked="isSelected ? 'true' : 'false'"
    :disabled="disabled"
    @click="select"
  >
    <template v-if="hasAffixes">
      <span
        v-if="hasPrepend"
        class="ui-segment-affix ui-segment-affix--prepend"
        @click.stop
      >
        <slot name="prepend" />
      </span>
      <span
        class="ui-segment-main"
        :class="{ 'ui-segment-main--with-icon': icon }"
      >
        <span
          v-if="icon"
          class="ui-segment-icon"
          aria-hidden="true"
        >
          <ui-icon
            :name="icon"
            :size="iconSize"
          />
        </span>
        <span
          v-if="showLabel"
          class="ui-segment-label"
        >{{ label }}</span>
        <span
          v-else-if="label"
          class="sr-only"
        >{{ label }}</span>
      </span>
      <span
        v-if="hasAppend"
        class="ui-segment-affix ui-segment-affix--append"
        @click.stop
      >
        <slot name="append" />
      </span>
    </template>
    <template v-else>
      <span
        v-if="icon"
        class="ui-segment-icon"
        aria-hidden="true"
      >
        <ui-icon
          :name="icon"
          :size="iconSize"
        />
      </span>
      <span
        v-if="showLabel"
        class="ui-segment-label"
      >{{ label }}</span>
      <span
        v-else-if="label"
        class="sr-only"
      >{{ label }}</span>
    </template>
  </button>
</template>

<script>
export default {
  name: 'Segment',
  inject: {
    uiSegmentGroup: {
      default: null,
    },
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    /** Font Awesome ikon adı; `iconOnly` veya dar düzenlerde yalnız ikon gösterilir */
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    hasPrepend() {
      return Boolean(this.$slots.prepend)
    },
    hasAppend() {
      return Boolean(this.$slots.append)
    },
    hasAffixes() {
      return this.hasPrepend || this.hasAppend
    },
    isSelected() {
      if (!this.uiSegmentGroup) return false
      return Object.is(this.uiSegmentGroup.modelValue, this.value)
    },
    iconOnly() {
      return Boolean(this.uiSegmentGroup?.iconOnly)
    },
    showLabel() {
      return !this.iconOnly
    },
    iconSize() {
      const size = this.uiSegmentGroup?.size || 'md'
      if (this.iconOnly) {
        return size === 'lg' ? 'sm' : 'xs'
      }
      return size === 'lg' ? 'sm' : 'xs'
    },
    segmentClass() {
      return [
        'ui-segment',
        { 'ui-segment--selected': this.isSelected },
        this.icon && !this.hasAffixes && 'ui-segment--with-icon',
        this.iconOnly && 'ui-segment--icon-only',
        this.hasAffixes && 'ui-segment--affixed',
      ]
    },
  },
  mounted() {
    if (!this.uiSegmentGroup && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[Segment] Yalnızca <ui-segment-group> içinde kullanılmalı.')
    }
  },
  methods: {
    select() {
      if (this.disabled || !this.uiSegmentGroup) return
      this.uiSegmentGroup.$emit('update:modelValue', this.value)
    },
  },
}
</script>
