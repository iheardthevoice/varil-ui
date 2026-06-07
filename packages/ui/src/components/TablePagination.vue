<template>
  <div class="ui-table-pagination">
    <div class="ui-table-pagination-meta">
      <slot name="meta">
        {{ metaText }}
      </slot>
    </div>
    <div class="ui-table-pagination-nav">
      <ui-button
        type="button"
        variant="outline"
        color="secondary"
        size="sm"
        cubed
        prefix-icon="chevron-left"
        :disabled="!canPrev"
        :aria-label="prevAriaLabel"
        @click="$emit('prev')"
      />
      <div class="ui-table-pagination-page">
        {{ pageLabel }}
      </div>
      <ui-button
        type="button"
        variant="outline"
        color="secondary"
        size="sm"
        cubed
        prefix-icon="chevron-right"
        :disabled="!canNext"
        :aria-label="nextAriaLabel"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TablePagination',
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    lastPage: {
      type: Number,
      default: 1,
    },
    metaText: {
      type: String,
      default: '',
    },
    pageLabel: {
      type: String,
      default: '',
    },
    prevAriaLabel: {
      type: String,
      default: '',
    },
    nextAriaLabel: {
      type: String,
      default: '',
    },
  },
  emits: ['prev', 'next'],
  computed: {
    canPrev() {
      return this.currentPage > 1
    },
    canNext() {
      return this.currentPage < this.lastPage
    },
  },
}
</script>
