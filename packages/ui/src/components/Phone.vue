<template>
  <ui-input
    :id="resolvedNumberId"
    v-model="innerNumber"
    type="tel"
    inputmode="tel"
    class="w-full"
    :disabled="disabled"
    :readonly="readonly"
    :placeholder="resolvedPlaceholder"
    :name="numberName"
    :autocomplete="autocomplete"
    :maxlength="numberMaxlength"
    :aria-describedby="ariaDescribedby"
    v-bind="numberPassthrough"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
  >
    <template #prepend>
      <ui-select
        v-model="innerCountry"
        variant="inline"
        :options="countryOptions"
        :disabled="disabled"
        :aria-label="resolvedCountryAria"
      />
    </template>
  </ui-input>
</template>

<script>
let phoneCounter = 0

const DEFAULT_COUNTRIES = [
  { value: '+90', label: '+90' },
  { value: '+1', label: '+1' },
  { value: '+44', label: '+44' },
  { value: '+49', label: '+49' },
]

export default {
  name: 'Phone',
  inheritAttrs: false,
  props: {
    country: {
      type: String,
      default: '+90',
    },
    number: {
      type: String,
      default: '',
    },
    countries: {
      type: Array,
      default: () => DEFAULT_COUNTRIES,
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
    numberName: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    autocomplete: {
      type: String,
      default: 'tel-national',
    },
    numberMaxlength: {
      type: [Number, String],
      default: 15,
    },
    countryAriaLabel: {
      type: String,
      default: '',
    },
    ariaDescribedby: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:country', 'update:number', 'focus', 'blur'],
  data() {
    phoneCounter += 1
    return { fallbackId: `ui-phone-number-${phoneCounter}` }
  },
  computed: {
    countryOptions() {
      return this.countries?.length ? this.countries : DEFAULT_COUNTRIES
    },
    innerCountry: {
      get() {
        return this.country
      },
      set(v) {
        this.$emit('update:country', v)
      },
    },
    innerNumber: {
      get() {
        return this.number
      },
      set(v) {
        this.$emit('update:number', v)
      },
    },
    resolvedNumberId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    resolvedPlaceholder() {
      if (this.placeholder != null && this.placeholder !== '') {
        return this.placeholder
      }
      if (typeof this.$t === 'function') {
        return this.$t('ui.phone.placeholder')
      }
      return ''
    },
    resolvedCountryAria() {
      if (this.countryAriaLabel) return this.countryAriaLabel
      if (typeof this.$t === 'function') {
        return this.$t('ui.phone.countryAria')
      }
      return 'Country code'
    },
    numberPassthrough() {
      const skip = new Set(['class', 'style', 'id'])
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
