<template>
  <td
    :colspan="colspan > 0 ? colspan : undefined"
    :class="rootClass"
  >
    <slot />
  </td>
</template>

<script>
import { cn } from '../utils/cn.js'

const ALIGNS = ['left', 'center', 'right']
const TONES = ['title', 'secondary', 'body']

export default {
  name: 'TableCell',
  props: {
    colspan: {
      type: Number,
      default: 0,
    },
    align: {
      type: String,
      default: 'left',
      validator: (v) => ALIGNS.includes(v),
    },
    tone: {
      type: String,
      default: '',
      validator: (v) => v === '' || TONES.includes(v),
    },
    iconCol: {
      type: Boolean,
      default: false,
    },
    empty: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-table-cell',
        this.iconCol && 'ui-table-cell--icon-col',
        this.empty && 'ui-table-cell--empty',
        this.align === 'center' && 'ui-table-cell--align-center',
        this.align === 'right' && 'ui-table-cell--align-end',
        this.tone === 'title' && 'ui-table-cell--tone-title',
        this.tone === 'secondary' && 'ui-table-cell--tone-secondary',
        this.tone === 'body' && 'ui-table-cell--tone-body',
        this.$attrs.class,
      )
    },
  },
}
</script>
