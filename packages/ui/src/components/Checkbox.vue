<template>
  <label
    :class="checkboxClasses"
    @keydown.enter.prevent="toggle"
    @keydown.space.prevent="toggle"
  >
    <input
      :type="nativeType"
      :name="nativeName"
      :value="groupValueString"
      :checked="isChecked"
      class="sr-only"
      @change="onNativeChange"
    />
    <span
      class="ui-checkbox-box"
      aria-hidden="true"
    >
      <ui-icon
        v-if="isChecked"
        name="check"
        size="xs"
        class="ui-checkbox-check-icon text-primary-foreground"
      />
    </span>
    <span class="ui-checkbox-body">
      <span
        v-if="$slots.label || label"
        class="ui-checkbox-label"
      >
        <slot name="label">{{ label }}</slot>
      </span>
      <span
        v-if="description"
        class="ui-checkbox-description"
      >{{ description }}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  inject: {
    uiCheckboxGroup: {
      default: null,
    },
  },
  props: {
    /** Grup modunda seçenek kimliği. */
    value: {
      type: [String, Number, Boolean],
      default: undefined,
    },
    /** Tekil mod: `v-model` boolean. */
    modelValue: {
      type: Boolean,
      default: undefined,
    },
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca işaretliyken). */
    highlight: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null
    },
    isChecked() {
      if (this.inGroup) {
        const list = this.uiCheckboxGroup.modelValue
        if (!Array.isArray(list)) return false
        return list.some((v) => Object.is(v, this.value))
      }
      return !!this.modelValue
    },
    nativeType() {
      return 'checkbox'
    },
    nativeName() {
      return this.inGroup ? this.uiCheckboxGroup.groupName : undefined
    },
    groupValueString() {
      if (!this.inGroup) return undefined
      return String(this.value)
    },
    checkboxClasses() {
      const variant =
        this.inGroup && this.uiCheckboxGroup != null
          ? this.uiCheckboxGroup.normalizedVariant
          : 'list'
      return [
        'ui-checkbox',
        `ui-checkbox--${variant}`,
        {
          'ui-checkbox--checked': this.isChecked,
          'ui-checkbox--highlight': this.highlight && this.isChecked,
        },
      ]
    },
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const checked = e.target.checked
        const raw = this.uiCheckboxGroup.modelValue
        const arr = Array.isArray(raw) ? [...raw] : []
        const i = arr.findIndex((v) => Object.is(v, this.value))
        if (checked && i === -1) {
          arr.push(this.value)
        } else if (!checked && i !== -1) {
          arr.splice(i, 1)
        }
        this.uiCheckboxGroup.$emit('update:modelValue', arr)
      } else {
        this.$emit('update:modelValue', e.target.checked)
      }
    },
    toggle() {
      if (this.inGroup) {
        const raw = this.uiCheckboxGroup.modelValue
        const arr = Array.isArray(raw) ? [...raw] : []
        const i = arr.findIndex((v) => Object.is(v, this.value))
        if (i === -1) {
          arr.push(this.value)
        } else {
          arr.splice(i, 1)
        }
        this.uiCheckboxGroup.$emit('update:modelValue', arr)
      } else {
        this.$emit('update:modelValue', !this.modelValue)
      }
    },
  },
}
</script>
