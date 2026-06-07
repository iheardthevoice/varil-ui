<template>
  <th
    :class="rootClass"
    :style="widthStyle"
  >
    <slot />
  </th>
</template>

<script>
import { cn } from '../utils/cn.js'

const ALIGNS = ['left', 'center', 'right']
const WIDTHS = ['sm', 'md', 'lg']

export default {
  name: 'TableHead',
  props: {
    align: {
      type: String,
      default: 'left',
      validator: (v) => ALIGNS.includes(v),
    },
    width: {
      type: String,
      default: '',
    },
    iconCol: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootClass() {
      return cn(
        'ui-table-head',
        this.iconCol && 'ui-table-head--icon-col',
        this.align === 'center' && 'ui-table-head--align-center',
        this.align === 'right' && 'ui-table-head--align-end',
        !this.iconCol && this.width === 'sm' && 'ui-table-head--w-sm',
        !this.iconCol && this.width === 'md' && 'ui-table-head--w-md',
        !this.iconCol && this.width === 'lg' && 'ui-table-head--w-lg',
        this.$attrs.class,
      )
    },
    widthStyle() {
      if (this.iconCol || WIDTHS.includes(this.width)) {
        return undefined
      }
      if (this.width) {
        return { width: this.width, minWidth: this.width }
      }
      return undefined
    },
  },
}
</script>
