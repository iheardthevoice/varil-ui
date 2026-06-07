<template>
  <label
    :class="[
      'ui-radio',
      `ui-radio--${groupVariant}`,
      {
        'ui-radio--checked': isChecked,
        'ui-radio--highlight': highlight && isChecked,
      },
    ]"
    @keydown.enter.prevent="select"
    @keydown.space.prevent="select"
  >
    <input
      type="radio"
      :name="uiRadioGroup?.groupName"
      :value="stringValue"
      :checked="isChecked"
      class="sr-only"
      @change="select"
    />
    <span
      class="ui-radio-indicator"
      aria-hidden="true"
    ></span>
    <span class="ui-radio-body">
      <span class="ui-radio-label">{{ label }}</span>
      <span
        v-if="description"
        class="ui-radio-description"
      >{{ description }}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  inject: {
    uiRadioGroup: {
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
    description: {
      type: String,
      default: '',
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca seçiliyken). */
    highlight: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    groupVariant() {
      return this.uiRadioGroup?.normalizedVariant || 'list'
    },
    isChecked() {
      if (!this.uiRadioGroup) return false
      return this.uiRadioGroup.modelValue === this.value
    },
    stringValue() {
      return String(this.value)
    },
  },
  mounted() {
    if (!this.uiRadioGroup && typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
      console.warn('[Radio] Yalnızca <ui-radio-group> içinde kullanılmalı.')
    }
  },
  methods: {
    select() {
      if (this.uiRadioGroup) {
        this.uiRadioGroup.$emit('update:modelValue', this.value)
      }
    },
  },
}
</script>
