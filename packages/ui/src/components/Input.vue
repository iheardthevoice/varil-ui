<template>
  <div
    :class="[rootClass, $attrs.class]"
  >
    <div
      v-if="$slots.prepend"
      class="ui-text-default flex shrink-0 items-center"
    >
      <slot name="prepend" />
    </div>
    <span
      v-if="prefixIcon"
      class="inline-flex shrink-0 items-center text-muted-foreground"
      aria-hidden="true"
    >
      <ui-icon
        :name="prefixIcon"
        size="xs"
      />
    </span>
    <textarea
      v-if="multiline"
      :id="resolvedId"
      ref="field"
      class="ui-input-field ui-input-field--textarea"
      :value="modelValue"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      v-bind="passthroughAttrs"
      @input="onInput"
      @change="$emit('change', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <input
      v-else
      :id="resolvedId"
      ref="field"
      class="ui-input-field ui-input-field--single"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      :name="name"
      :autocomplete="autocomplete"
      :maxlength="maxlength"
      v-bind="passthroughAttrs"
      @input="onInput"
      @change="$emit('change', $event)"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    />
    <span
      v-if="suffixIcon"
      class="inline-flex shrink-0 items-center text-muted-foreground"
      aria-hidden="true"
    >
      <ui-icon
        :name="suffixIcon"
        size="xs"
      />
    </span>
    <div
      v-if="$slots.append"
      class="ui-text-default flex shrink-0 items-center"
    >
      <slot name="append" />
    </div>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

let idCounter = 0

const SIZES = ['sm', 'md', 'lg']

export default {
  name: 'Input',
  inheritAttrs: false,
  inject: {
    uiFormRowPrimary: {
      default: false,
    },
  },
  props: {
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /** `v-model` */
    modelValue: {
      type: [String, Number],
      default: '',
    },
    /** Tek satır için native `type`. */
    type: {
      type: String,
      default: 'text',
    },
    /** `<textarea>` kullan. */
    multiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 3,
    },
    prefixIcon: {
      type: String,
      default: null,
    },
    suffixIcon: {
      type: String,
      default: null,
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
      default: undefined,
    },
    maxlength: {
      type: [Number, String],
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'input', 'change', 'focus', 'blur'],
  data() {
    idCounter += 1
    return { fallbackId: `ui-input-${idCounter}` }
  },
  computed: {
    resolvedSize() {
      if (this.size !== 'md') return this.size
      const fromRow = typeof this.uiFormRowPrimary === 'function'
        ? this.uiFormRowPrimary()
        : this.uiFormRowPrimary
      return fromRow ? 'lg' : 'md'
    },
    rootClass() {
      return cn(
        'ui-input',
        this.multiline && 'ui-input--multiline',
        this.resolvedSize !== 'md' && `ui-input--${this.resolvedSize}`,
        this.isDisabled && 'pointer-events-none opacity-50',
      )
    },
    isDisabled() {
      return this.disabled
    },
    resolvedId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    passthroughAttrs() {
      const skip = new Set([
        'class',
        'style',
        'type',
        'value',
        'id',
        'rows',
        'disabled',
        'readonly',
        'placeholder',
        'name',
        'autocomplete',
        'maxlength',
      ])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) {
          out[key] = val
        }
      }
      return out
    },
  },
  methods: {
    onInput(e) {
      this.$emit('update:modelValue', e.target.value)
      this.$emit('input', e)
    },
  },
}
</script>
