<template>
  <component
    :is="rootTag"
    :type="interactive ? 'button' : undefined"
    :class="rootClass"
    v-bind="rootBind"
    @click="onClick"
  >
    <img
      v-if="src && !imageFailed"
      :src="src"
      :alt="resolvedAlt"
      class="ui-photo__img"
      loading="lazy"
      decoding="async"
      @error="imageFailed = true"
    >
    <span
      v-else
      class="ui-photo__empty"
      :aria-hidden="interactive ? 'true' : undefined"
    >
      <ui-icon
        name="image"
        type="light"
        class="ui-photo__empty-icon"
      />
    </span>
    <span
      v-if="favorite"
      class="ui-photo__favorite"
      aria-hidden="true"
    >
      <ui-icon
        name="star"
        type="solid"
        size="xs"
      />
    </span>
    <span
      v-if="overflowLabel"
      class="ui-photo__overflow"
    >
      {{ overflowLabel }}
    </span>
  </component>

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
const SIZES = ['fill', 'sm', 'md', 'lg']

const SIZE_CLASS = {
  fill: 'ui-photo--size-fill',
  sm: 'ui-photo--size-sm',
  md: 'ui-photo--size-md',
  lg: 'ui-photo--size-lg',
}

export default {
  name: 'Photo',
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    aspect: {
      type: String,
      default: 'square',
      validator: (v) => ASPECTS.includes(v),
    },
    size: {
      type: String,
      default: 'fill',
      validator: (v) => SIZES.includes(v),
    },
    interactive: {
      type: Boolean,
      default: true,
    },
    preview: {
      type: Boolean,
      default: true,
    },
    overflowLabel: {
      type: String,
      default: '',
    },
    galleryIndex: {
      type: Number,
      default: -1,
    },
  },
  emits: ['click', 'open-preview'],
  data() {
    return {
      imageFailed: false,
      previewOpen: false,
      previewIndex: 0,
    }
  },
  computed: {
    rootTag() {
      return this.interactive ? 'button' : 'div'
    },
    rootClass() {
      return cn(
        'ui-photo',
        `ui-photo--aspect-${this.aspect}`,
        SIZE_CLASS[this.size] || SIZE_CLASS.fill,
        this.interactive && this.preview && this.src ? 'ui-photo--interactive' : '',
        this.overflowLabel ? 'ui-photo--overflow' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const skip = new Set(['class'])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) out[key] = val
      }
      return out
    },
    rootBind() {
      if (!this.interactive) return this.passthroughAttrs
      const label =
        this.passthroughAttrs['aria-label'] != null && this.passthroughAttrs['aria-label'] !== ''
          ? this.passthroughAttrs['aria-label']
          : this.resolvedAlt
      return {
        ...this.passthroughAttrs,
        'aria-label': label,
      }
    },
    resolvedAlt() {
      if (this.alt) return this.alt
      return this.$t('ui.photo.fallbackAlt')
    },
    galleryList() {
      if (this.src) {
        return [{ src: this.src, alt: this.resolvedAlt }]
      }
      return []
    },
    activeItem() {
      return this.galleryList[this.previewIndex] ?? null
    },
    activeSrc() {
      return this.activeItem?.src ?? ''
    },
    activeAlt() {
      return this.activeItem?.alt || this.resolvedAlt
    },
    showPrev() {
      return this.galleryList.length > 1 && this.previewIndex > 0
    },
    showNext() {
      return this.galleryList.length > 1 && this.previewIndex < this.galleryList.length - 1
    },
    counterLabel() {
      if (this.galleryList.length <= 1) return ''
      return this.$t('ui.photo.counter', {
        current: this.previewIndex + 1,
        total: this.galleryList.length,
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
    src() {
      this.imageFailed = false
    },
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
    onClick(event) {
      this.$emit('click', event)
      if (!this.interactive || !this.preview || !this.src) return
      if (this.galleryIndex >= 0) {
        this.$emit('open-preview', this.galleryIndex)
        return
      }
      this.previewIndex = 0
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
