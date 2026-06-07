<template>
  <hr
    v-if="!hasLabel"
    :class="rootClass"
    v-bind="rootAttrs"
  >
  <div
    v-else
    :class="labeledClass"
    v-bind="labeledAttrs"
  >
    <span
      class="ui-divider__line"
      aria-hidden="true"
    />
    <span class="ui-divider__label">
      <ui-icon
        v-if="icon"
        :name="icon"
        size="sm"
        class="text-muted-foreground"
      />
      <span
        v-if="title"
        class="ui-section-label"
      >{{ title }}</span>
    </span>
    <span
      class="ui-divider__line"
      aria-hidden="true"
    />
  </div>
</template>

<script>
const SPACINGS = ['none', 'sm', 'md']

const spacingClass = {
  none: '',
  sm: 'my-2',
  md: 'my-4',
}

export default {
  name: 'Divider',
  inheritAttrs: false,
  props: {
    /** Ortada gösterilecek başlık — `icon` ile birlikte etiketli ayırıcı */
    title: {
      type: String,
      default: '',
    },
    /** Başlık yanında gösterilecek ikon (`ui-icon` `name`) */
    icon: {
      type: String,
      default: '',
    },
    /**
     * Dikey boşluk (üst/alt).
     * `none`: yalnızca çizgi — üst bileşenin kendi gap’i ile hizalamak için.
     */
    spacing: {
      type: String,
      default: 'md',
      validator: (v) => SPACINGS.includes(v),
    },
    /**
     * true: yalnızca görsel — `role="presentation"`, ekran okuyucu atlar.
     * false: `role="separator"` + `aria-orientation="horizontal"`.
     */
    decorative: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    hasLabel() {
      return Boolean((this.title && this.title.trim()) || this.icon)
    },
    rootClass() {
      return ['ui-divider', spacingClass[this.spacing] || '', this.$attrs.class].filter(Boolean).join(' ')
    },
    labeledClass() {
      return [
        'ui-divider',
        'ui-divider--labeled',
        spacingClass[this.spacing] || '',
        this.$attrs.class,
      ]
        .filter(Boolean)
        .join(' ')
    },
    passthroughAttrs() {
      const { class: _c, ...rest } = this.$attrs
      return rest
    },
    rootAttrs() {
      const base = { ...this.passthroughAttrs }
      if (this.decorative) {
        base.role = 'presentation'
      } else {
        base.role = 'separator'
        base['aria-orientation'] = 'horizontal'
      }
      return base
    },
    labeledAttrs() {
      const base = { ...this.passthroughAttrs }
      if (this.decorative) {
        base.role = 'presentation'
      } else {
        base.role = 'separator'
        base['aria-orientation'] = 'horizontal'
        if (this.title) {
          base['aria-label'] = this.title
        }
      }
      return base
    },
  },
}
</script>
