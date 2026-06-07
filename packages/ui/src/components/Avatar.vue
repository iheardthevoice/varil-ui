<template>
  <component
    :is="rootTag"
    :type="interactive ? 'button' : undefined"
    :class="rootClass"
    :style="rootStyle"
    v-bind="rootBind"
    @click="onRootClick"
  >
    <img
      v-if="src && !imageFailed"
      :src="src"
      :alt="resolvedAlt"
      class="ui-avatar-img"
      loading="lazy"
      decoding="async"
      @error="imageFailed = true"
    >
    <span
      v-else
      class="ui-avatar-fallback"
      :role="interactive ? undefined : 'img'"
      :aria-label="interactive ? undefined : resolvedAlt"
      :aria-hidden="interactive ? 'true' : undefined"
    >{{ displayInitials }}</span>
  </component>
</template>

<script>
import { cn } from '../utils/cn.js'

const SIZES = ['sm', 'md', 'lg']

const SIZE_CLASS = {
  sm: 'ui-avatar--sm',
  md: 'ui-avatar--md',
  lg: 'ui-avatar--lg',
}

/** A–Z; Türkçe harfler Latin karşılığına eşlenir (renk tutarlılığı). */
const AVATAR_LETTER_COLORS = Object.freeze({
  A: { bg: 'hsla(0, 72%, 52%, 0.18)', fg: 'hsl(0, 65%, 48%)' },
  B: { bg: 'hsla(25, 88%, 52%, 0.18)', fg: 'hsl(25, 75%, 45%)' },
  C: { bg: 'hsla(38, 92%, 50%, 0.18)', fg: 'hsl(38, 80%, 42%)' },
  D: { bg: 'hsla(48, 96%, 48%, 0.18)', fg: 'hsl(48, 85%, 40%)' },
  E: { bg: 'hsla(58, 90%, 46%, 0.18)', fg: 'hsl(58, 78%, 38%)' },
  F: { bg: 'hsla(75, 72%, 42%, 0.18)', fg: 'hsl(75, 65%, 36%)' },
  G: { bg: 'hsla(88, 62%, 42%, 0.18)', fg: 'hsl(88, 55%, 36%)' },
  H: { bg: 'hsla(100, 58%, 40%, 0.18)', fg: 'hsl(100, 52%, 34%)' },
  I: { bg: 'hsla(142, 58%, 40%, 0.18)', fg: 'hsl(142, 52%, 34%)' },
  J: { bg: 'hsla(158, 62%, 38%, 0.18)', fg: 'hsl(158, 55%, 32%)' },
  K: { bg: 'hsla(168, 64%, 38%, 0.18)', fg: 'hsl(168, 58%, 32%)' },
  L: { bg: 'hsla(175, 68%, 40%, 0.18)', fg: 'hsl(175, 60%, 34%)' },
  M: { bg: 'hsla(186, 72%, 42%, 0.18)', fg: 'hsl(186, 65%, 36%)' },
  N: { bg: 'hsla(198, 76%, 44%, 0.18)', fg: 'hsl(198, 68%, 38%)' },
  O: { bg: 'hsla(210, 78%, 48%, 0.18)', fg: 'hsl(210, 70%, 42%)' },
  P: { bg: 'hsla(225, 76%, 52%, 0.18)', fg: 'hsl(225, 68%, 46%)' },
  Q: { bg: 'hsla(238, 72%, 56%, 0.18)', fg: 'hsl(238, 65%, 50%)' },
  R: { bg: 'hsla(252, 68%, 58%, 0.18)', fg: 'hsl(252, 62%, 52%)' },
  S: { bg: 'hsla(268, 64%, 58%, 0.18)', fg: 'hsl(268, 58%, 52%)' },
  T: { bg: 'hsla(282, 62%, 56%, 0.18)', fg: 'hsl(282, 56%, 50%)' },
  U: { bg: 'hsla(296, 58%, 54%, 0.18)', fg: 'hsl(296, 52%, 48%)' },
  V: { bg: 'hsla(310, 62%, 52%, 0.18)', fg: 'hsl(310, 56%, 46%)' },
  W: { bg: 'hsla(322, 66%, 50%, 0.18)', fg: 'hsl(322, 60%, 44%)' },
  X: { bg: 'hsla(334, 70%, 50%, 0.18)', fg: 'hsl(334, 64%, 44%)' },
  Y: { bg: 'hsla(346, 74%, 52%, 0.18)', fg: 'hsl(346, 68%, 46%)' },
  Z: { bg: 'hsla(358, 78%, 52%, 0.18)', fg: 'hsl(358, 72%, 46%)' },
  default: { bg: 'hsla(220, 14%, 50%, 0.15)', fg: 'hsl(220, 12%, 45%)' },
})

const TURKISH_LETTER_TO_LATIN = Object.freeze({
  Ç: 'C',
  Ğ: 'G',
  İ: 'I',
  I: 'I',
  Ö: 'O',
  Ş: 'S',
  Ü: 'U',
})

/**
 * @param {string} char
 * @returns {keyof typeof AVATAR_LETTER_COLORS | 'default'}
 */
function resolveAvatarLetterKey(char) {
  if (!char || typeof char !== 'string') return 'default'
  let letter = char.toLocaleUpperCase('tr-TR')
  if (TURKISH_LETTER_TO_LATIN[letter]) {
    letter = TURKISH_LETTER_TO_LATIN[letter]
  }
  if (letter >= 'A' && letter <= 'Z') return letter
  return 'default'
}

/**
 * @param {string} raw
 * @returns {string}
 */
export function initialsFromDisplayName(raw) {
  const trimmed = (raw || '').trim()
  if (!trimmed) return '?'
  const parts = trimmed.split(/\s+/).filter(Boolean)
  if (parts.length >= 2) {
    const first = parts[0][0] || ''
    const last = parts[parts.length - 1][0] || ''
    return `${first}${last}`.toLocaleUpperCase('tr-TR')
  }
  return (parts[0]?.[0] || '?').toLocaleUpperCase('tr-TR')
}

export default {
  name: 'Avatar',
  inheritAttrs: false,
  props: {
    /** Görsel URL; yüklenemezse baş harf yedeği gösterilir. */
    src: {
      type: String,
      default: '',
    },
    /** Tam ad; baş harf ve renk üretimi için birincil kaynak. */
    name: {
      type: String,
      default: '',
    },
    /** `img` alt metni. */
    alt: {
      type: String,
      default: '',
    },
    /** Harf yedek metni (ör. `JD`). Boşsa `name` / `alt` kullanılır. */
    fallback: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    ring: {
      type: Boolean,
      default: false,
    },
    interactive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  data() {
    return {
      imageFailed: false,
    }
  },
  computed: {
    rootTag() {
      return this.interactive ? 'button' : 'span'
    },
    rootClass() {
      return cn(
        'ui-avatar',
        SIZE_CLASS[this.size] || SIZE_CLASS.md,
        this.ring ? 'ui-avatar--ring' : '',
        this.interactive ? 'ui-avatar--interactive' : '',
        this.showLetterTone ? 'ui-avatar--letter' : '',
        this.$attrs.class,
      )
    },
    passthroughAttrs() {
      const skip = new Set(['class'])
      const out = {}
      for (const [key, val] of Object.entries(this.$attrs)) {
        if (!skip.has(key)) {
          out[key] = val
        }
      }
      return out
    },
    rootBind() {
      if (!this.interactive) {
        return this.passthroughAttrs
      }
      const label =
        this.passthroughAttrs['aria-label'] != null && this.passthroughAttrs['aria-label'] !== ''
          ? this.passthroughAttrs['aria-label']
          : this.resolvedAlt
      return {
        ...this.passthroughAttrs,
        'aria-label': label,
      }
    },
    initialsSource() {
      if (this.name != null && this.name.trim() !== '') return this.name.trim()
      if (this.fallback != null && this.fallback.trim() !== '') return this.fallback.trim()
      return (this.alt || '').trim()
    },
    displayInitials() {
      return initialsFromDisplayName(this.initialsSource)
    },
    colorLetterKey() {
      const source = this.initialsSource
      if (!source) return 'default'
      return resolveAvatarLetterKey(source[0])
    },
    letterColors() {
      return AVATAR_LETTER_COLORS[this.colorLetterKey] || AVATAR_LETTER_COLORS.default
    },
    showLetterTone() {
      return (!this.src || this.imageFailed) && this.displayInitials !== '?'
    },
    rootStyle() {
      if (!this.showLetterTone) return undefined
      return {
        backgroundColor: this.letterColors.bg,
        color: this.letterColors.fg,
      }
    },
    resolvedAlt() {
      if (this.alt != null && this.alt !== '') return this.alt
      if (this.initialsSource) return this.initialsSource
      return this.displayInitials !== '?' ? `Avatar: ${this.displayInitials}` : 'Avatar'
    },
  },
  watch: {
    src() {
      this.imageFailed = false
    },
  },
  methods: {
    onRootClick(event) {
      if (this.interactive) {
        this.$emit('click', event)
      }
    },
  },
}
</script>
