<template>
  <div
    :class="rootClass"
    role="list"
    :aria-label="ariaLabel"
    v-bind="passthroughAttrs"
  >
  <template v-if="variant === 'pills'">
      <div class="ui-stepper-pills-track">
        <component
          v-for="(step, index) in normalizedSteps"
          :key="index"
          :is="interactive ? 'button' : 'span'"
          class="ui-stepper-pill"
          :class="pillClass(index)"
          role="listitem"
          :aria-current="index === modelValue ? 'step' : undefined"
          :aria-label="step.title"
          v-bind="interactive ? { type: 'button' } : {}"
          @click="interactive ? go(index) : undefined"
        />
      </div>
      <p
        v-if="showLabel"
        class="ui-stepper-pills-label"
      >
        {{ pillsLabel }}
      </p>
    </template>

    <!-- horizontal (default) -->
    <template v-else-if="direction === 'horizontal'">
      <div
        v-for="(step, index) in normalizedSteps"
        :key="index"
        class="ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center"
        role="listitem"
      >
        <div class="flex w-full min-w-0 items-center justify-center">
          <span
            v-if="index > 0"
            class="ui-stepper-rail ui-stepper-rail--h"
            :class="railBeforeClass(index)"
            aria-hidden="true"
          />
          <span
            v-else
            class="ui-stepper-rail-spacer w-4 shrink-0"
            aria-hidden="true"
          />
          <component
            :is="interactive ? 'button' : 'div'"
            class="ui-stepper-indicator shrink-0"
            :class="indicatorClass(index)"
            :aria-current="index === modelValue ? 'step' : undefined"
            :aria-label="step.title"
            v-bind="interactive ? { type: 'button' } : {}"
            @click="interactive ? go(index) : undefined"
          >
            <ui-icon
              v-if="step.icon"
              :name="step.icon"
              :type="step.iconType || 'light'"
              size="sm"
            />
            <span
              v-else
              class="tabular-nums"
            >{{ index + 1 }}</span>
          </component>
          <span
            v-if="index < normalizedSteps.length - 1"
            class="ui-stepper-rail ui-stepper-rail--h"
            :class="railAfterClass(index)"
            aria-hidden="true"
          />
          <span
            v-else
            class="ui-stepper-rail-spacer w-4 shrink-0"
            aria-hidden="true"
          />
        </div>
        <p class="ui-stepper-title ui-stepper-title--horizontal">
          {{ step.title }}
        </p>
        <p
          v-if="step.description"
          class="ui-stepper-description ui-stepper-description--horizontal"
        >
          {{ step.description }}
        </p>
      </div>
    </template>

    <!-- vertical -->
    <template v-else>
      <div
        v-for="(step, index) in normalizedSteps"
        :key="index"
        class="ui-stepper-item ui-stepper-item--vertical flex gap-3"
        role="listitem"
      >
        <div class="flex flex-col items-center">
          <component
            :is="interactive ? 'button' : 'div'"
            class="ui-stepper-indicator shrink-0"
            :class="indicatorClass(index)"
            :aria-current="index === modelValue ? 'step' : undefined"
            :aria-label="step.title"
            v-bind="interactive ? { type: 'button' } : {}"
            @click="interactive ? go(index) : undefined"
          >
            <ui-icon
              v-if="step.icon"
              :name="step.icon"
              :type="step.iconType || 'light'"
              size="sm"
            />
            <span
              v-else
              class="tabular-nums"
            >{{ index + 1 }}</span>
          </component>
          <span
            v-if="index < normalizedSteps.length - 1"
            class="ui-stepper-vrail"
            :class="verticalRailClass(index)"
            aria-hidden="true"
          />
        </div>
        <div class="ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1">
          <p class="ui-stepper-title">
            {{ step.title }}
          </p>
          <p
            v-if="step.description"
            class="ui-stepper-description"
          >
            {{ step.description }}
          </p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { cn } from '../utils/cn.js'

const DIRECTIONS = ['horizontal', 'vertical']
const VARIANTS = ['default', 'pills']

export default {
  name: 'Stepper',
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
    steps: {
      type: Array,
      required: true,
    },
    /**
     * `default` — daire + başlık (yatay / dikey).
     * `pills` — hap ilerleme + `2/5 - Adım` etiketi (modal / kayıt formları için tercih).
     */
    variant: {
      type: String,
      default: 'default',
      validator: (v) => VARIANTS.includes(v),
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: (v) => DIRECTIONS.includes(v),
    },
    interactive: {
      type: Boolean,
      default: false,
    },
    /** `pills` varyantında sağdaki `1/5 - Adım` metni */
    showLabel: {
      type: Boolean,
      default: true,
    },
    ariaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    normalizedSteps() {
      const raw = Array.isArray(this.steps) ? this.steps : []
      return raw.map((s) => ({
        title: s?.title ?? '',
        description: s?.description ?? '',
        icon: s?.icon ?? null,
        iconType: s?.iconType ?? 'light',
      }))
    },
    rootClass() {
      return cn(
        'ui-stepper',
        this.variant === 'pills' && 'ui-stepper--pills',
        this.variant === 'default' && this.direction === 'vertical' && 'ui-stepper--vertical',
        this.variant === 'default' && this.direction === 'horizontal' && 'ui-stepper--horizontal',
        this.$attrs.class,
      )
    },
    currentStep() {
      const i = Math.min(this.normalizedSteps.length - 1, Math.max(0, this.modelValue))
      return this.normalizedSteps[i] ?? { title: '' }
    },
    pillsLabel() {
      const total = this.normalizedSteps.length
      const n = Math.min(total, Math.max(1, this.modelValue + 1))
      return `${n}/${total} - ${this.currentStep.title}`
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
  },
  methods: {
    go(index) {
      if (!this.interactive) return
      const max = this.normalizedSteps.length - 1
      const i = Math.min(max, Math.max(0, index))
      this.$emit('update:modelValue', i)
    },
    pillClass(index) {
      const mv = this.modelValue
      if (index < mv) return 'ui-stepper-pill--complete'
      if (index === mv) return 'ui-stepper-pill--current'
      return 'ui-stepper-pill--upcoming'
    },
    indicatorClass(index) {
      const mv = this.modelValue
      if (index < mv) return 'ui-stepper-indicator--complete'
      if (index === mv) return 'ui-stepper-indicator--current'
      return 'ui-stepper-indicator--upcoming'
    },
    railBeforeClass(index) {
      return this.modelValue >= index ? 'ui-stepper-rail--done' : 'ui-stepper-rail--todo'
    },
    railAfterClass(index) {
      return this.modelValue > index ? 'ui-stepper-rail--done' : 'ui-stepper-rail--todo'
    },
    verticalRailClass(index) {
      return this.modelValue > index ? 'ui-stepper-rail--done' : 'ui-stepper-rail--todo'
    },
  },
}
</script>
