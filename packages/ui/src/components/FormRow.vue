<template>
  <div
    class="ui-form-row"
    :class="rootLayoutClass"
    :data-primary-field="primary ? '' : undefined"
  >
    <div
      v-if="hasTextBlock"
      class="ui-form-row-text"
    >
      <div
        v-if="label || $slots.action"
        :class="labelLineClass"
      >
        <label
          v-if="label"
          class="ui-form-label min-w-0"
          :for="controlId"
        >
          {{ label }}
        </label>
        <div
          v-if="$slots.action"
          class="ui-form-row-action shrink-0"
        >
          <slot name="action" />
        </div>
      </div>
      <p
        v-if="description"
        :id="descriptionId"
        class="ui-text-default"
      >
        {{ description }}
      </p>
    </div>
    <div class="ui-form-row-control">
      <slot
        :control-id="controlId"
        :description-id="descriptionId"
      />
    </div>
  </div>
</template>

<script>
let rowCounter = 0

const DIRECTIONS = ['vertical', 'horizontal']
const VARIANTS = ['default', 'card']

export default {
  name: 'FormRow',
  props: {
    label: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    /**
     * `vertical`: etiket ve açıklama üstte, kontrol altta (tam genişlik).
     * `horizontal`: metin solda, kontrol sağda (`justify-between`).
     */
    direction: {
      type: String,
      default: 'vertical',
      validator: (v) => DIRECTIONS.includes(v),
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: 'default',
      validator: (v) => VARIANTS.includes(v),
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: undefined,
    },
    /** Dialog oluşturma formlarında ana alan — `lg` boyut ve odak hedefi */
    primary: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      uiFormRowPrimary: () => this.primary,
    }
  },
  data() {
    rowCounter += 1
    const n = rowCounter
    return {
      fallbackId: `ui-form-control-${n}`,
      fallbackDescId: `ui-form-desc-${n}`,
    }
  },
  computed: {
    controlId() {
      if (this.id != null && this.id !== '') {
        return this.id
      }
      return this.fallbackId
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : undefined
    },
    hasTextBlock() {
      return !!(this.label || this.description || this.$slots.action)
    },
    rootLayoutClass() {
      if (this.variant === 'card') {
        return this.direction === 'vertical'
          ? 'ui-form-row--card ui-form-row--card-vertical'
          : 'ui-form-row--card ui-form-row--card-horizontal'
      }
      return this.direction === 'horizontal' ? 'ui-form-row--horizontal' : 'ui-form-row--vertical'
    },
    labelLineClass() {
      const base = 'ui-form-row-label-line'
      if (!this.label && this.$slots.action) {
        return `${base} ui-form-row-label-line--action-only`
      }
      return base
    },
  },
}
</script>
