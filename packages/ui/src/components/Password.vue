<template>
  <div
    class="ui-password"
    :class="[$attrs.class]"
  >
    <ui-input
      :id="resolvedId"
      v-model="innerValue"
      :type="visible ? 'text' : 'password'"
      class="w-full"
      :size="size"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      :aria-describedby="strengthDescribedby"
      v-bind="passthroughAttrs"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
      <template #append>
        <button
          type="button"
          class="ui-password-toggle"
          :aria-label="toggleAriaLabel"
          :aria-pressed="visible ? 'true' : 'false'"
          :disabled="disabled"
          @click="visible = !visible"
        >
          <ui-icon
            :name="visible ? 'eye-slash' : 'eye'"
            size="xs"
          />
        </button>
      </template>
    </ui-input>

    <div
      v-if="showStrengthMeter"
      :id="fallbackStrengthId"
      class="ui-password-strength"
      role="status"
      :aria-live="innerValue ? 'polite' : 'off'"
    >
      <ui-progress
        type="bar"
        size="md"
        :value="strength.percent"
        :variant="strengthVariant"
        :aria-valuetext="strengthText"
      />
      <span
        v-if="strength.label !== 'empty'"
        class="ui-password-strength-label"
        :class="`ui-password-strength-label--${strength.label}`"
      >
        {{ strengthText }}
      </span>
    </div>
  </div>
</template>

<script>
import { scorePassword } from '../utils/passwordStrength.js'

let passwordCounter = 0

const SIZES = ['sm', 'md', 'lg']

export default {
  name: 'Password',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    modelValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: 'new-password',
    },
    maxlength: {
      type: [Number, String],
      default: undefined,
    },
    /** Güç çubuğu ve etiket */
    showStrength: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['update:modelValue', 'focus', 'blur'],
  data() {
    passwordCounter += 1
    return {
      fallbackId: `ui-password-${passwordCounter}`,
      fallbackStrengthId: `ui-password-strength-${passwordCounter}`,
      visible: false,
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.modelValue
      },
      set(v) {
        this.$emit('update:modelValue', v)
      },
    },
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    strength() {
      return scorePassword(this.modelValue)
    },
    strengthVariant() {
      const label = this.strength.label
      return label === 'empty' ? 'default' : label
    },
    hasPasswordValue() {
      return String(this.modelValue ?? '').length > 0
    },
    showStrengthMeter() {
      return this.showStrength && this.hasPasswordValue
    },
    strengthDescribedby() {
      if (!this.showStrengthMeter) {
        return this.$attrs['aria-describedby'] || undefined
      }
      const extra = this.$attrs['aria-describedby']
      return extra ? `${extra} ${this.fallbackStrengthId}` : this.fallbackStrengthId
    },
    strengthText() {
      const key = this.strength.label
      if (typeof this.$t === 'function') {
        return this.$t(`ui.password.strength.${key}`)
      }
      const fallback = { weak: 'Weak', fair: 'Fair', good: 'Good', strong: 'Strong' }
      return fallback[key] || key
    },
    toggleAriaLabel() {
      if (typeof this.$t === 'function') {
        return this.visible ? this.$t('ui.password.hide') : this.$t('ui.password.show')
      }
      return this.visible ? 'Hide password' : 'Show password'
    },
    passthroughAttrs() {
      const skip = new Set(['class', 'style', 'id', 'aria-describedby'])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) {
          out[key] = val
        }
      }
      return out
    },
  },
}
</script>
