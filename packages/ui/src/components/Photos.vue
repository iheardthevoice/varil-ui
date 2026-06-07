<template>
  <div
    class="ui-photos"
    :class="layoutClass"
    :data-count="displayCount"
  >
    <ui-photo
      v-for="(item, index) in visibleItems"
      :key="item.key || `${item.src}-${index}`"
      :src="item.src"
      :alt="item.alt || ''"
      :favorite="Boolean(item.favorite)"
      :aspect="aspect"
      :preview="preview"
      :gallery-index="index"
      :overflow-label="index === visibleItems.length - 1 && overflowCount > 0 ? overflowLabel : ''"
      :aria-label="item.alt || undefined"
      @open-preview="openPreviewAt"
    />
  </div>

  <Teleport to="body">
    <Transition
      name="ui-photo-preview"
      appear
    >
      <div
        v-if="previewOpen"
        class="ui-photo-preview"
        role="dialog"
        aria-modal="true"
        :aria-label="previewAriaLabel"
        @keydown="onPreviewKeydown"
      >
        <button
          type="button"
          class="ui-photo-preview__backdrop"
          :aria-label="closeLabel"
          @click="closePreview"
        />
        <div class="ui-photo-preview__panel">
          <ui-button
            type="button"
            variant="solid"
            color="secondary"
            cubed
            prefix-icon="xmark"
            class="ui-photo-preview__close"
            :aria-label="closeLabel"
            @click="closePreview"
          />
          <ui-button
            v-if="showPrev"
            type="button"
            variant="solid"
            color="secondary"
            cubed
            prefix-icon="chevron-left"
            class="ui-photo-preview__nav ui-photo-preview__nav--prev"
            :aria-label="prevLabel"
            @click.stop="goPrev"
          />
          <img
            v-if="activeSrc"
            :src="activeSrc"
            :alt="activeAlt"
            class="ui-photo-preview__img"
          >
          <ui-button
            v-if="showNext"
            type="button"
            variant="solid"
            color="secondary"
            cubed
            prefix-icon="chevron-right"
            class="ui-photo-preview__nav ui-photo-preview__nav--next"
            :aria-label="nextLabel"
            @click.stop="goNext"
          />
          <p
            v-if="counterLabel"
            class="ui-photo-preview__counter"
          >
            {{ counterLabel }}
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { cn } from '../utils/cn.js'

const ASPECTS = ['square', 'video', 'auto']

export default {
  name: 'Photos',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    max: {
      type: Number,
      default: 4,
    },
    aspect: {
      type: String,
      default: 'square',
      validator: (v) => ASPECTS.includes(v),
    },
    preview: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      previewOpen: false,
      previewIndex: 0,
    }
  },
  computed: {
    normalizedItems() {
      return (this.items || [])
        .map((item, index) => {
          const src = String(item?.src ?? item?.url ?? '').trim()
          if (!src) return null
          return {
            key: item?.id ?? item?.key ?? null,
            src,
            alt: item?.alt ?? '',
            favorite: Boolean(item?.favorite ?? item?.isFavorite ?? item?.is_favorite),
          }
        })
        .filter(Boolean)
    },
    displayCount() {
      return Math.min(this.normalizedItems.length, this.max)
    },
    overflowCount() {
      return Math.max(0, this.normalizedItems.length - this.max)
    },
    visibleItems() {
      if (!this.normalizedItems.length) return []
      return this.normalizedItems.slice(0, this.max)
    },
    overflowLabel() {
      return this.$t('ui.photos.more', { count: this.overflowCount })
    },
    layoutClass() {
      const count = this.visibleItems.length
      return cn(
        count ? `ui-photos--count-${Math.min(count, 4)}` : 'ui-photos--empty',
        this.overflowCount > 0 && count >= this.max ? 'ui-photos--has-overflow' : '',
      )
    },
    activeItem() {
      return this.normalizedItems[this.previewIndex] ?? null
    },
    activeSrc() {
      return this.activeItem?.src ?? ''
    },
    activeAlt() {
      return this.activeItem?.alt || this.$t('ui.photo.fallbackAlt')
    },
    showPrev() {
      return this.normalizedItems.length > 1 && this.previewIndex > 0
    },
    showNext() {
      return this.normalizedItems.length > 1 && this.previewIndex < this.normalizedItems.length - 1
    },
    counterLabel() {
      if (this.normalizedItems.length <= 1) return ''
      return this.$t('ui.photo.counter', {
        current: this.previewIndex + 1,
        total: this.normalizedItems.length,
      })
    },
    closeLabel() {
      return this.$t('ui.dialog.close')
    },
    prevLabel() {
      return this.$t('ui.photo.prev')
    },
    nextLabel() {
      return this.$t('ui.photo.next')
    },
    previewAriaLabel() {
      return this.$t('ui.photo.previewAria')
    },
  },
  watch: {
    previewOpen(open) {
      if (typeof document === 'undefined') return
      document.body.style.overflow = open ? 'hidden' : ''
    },
  },
  beforeUnmount() {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  },
  methods: {
    openPreviewAt(index) {
      if (!this.preview || !this.normalizedItems.length) return
      this.previewIndex = Math.max(0, Math.min(index, this.normalizedItems.length - 1))
      this.previewOpen = true
    },
    closePreview() {
      this.previewOpen = false
    },
    goPrev() {
      if (this.showPrev) this.previewIndex -= 1
    },
    goNext() {
      if (this.showNext) this.previewIndex += 1
    },
    onPreviewKeydown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        this.closePreview()
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        this.goPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        this.goNext()
      }
    },
  },
}
</script>
