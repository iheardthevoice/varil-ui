<template>
  <div
    class="ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none"
    :class="rootSizeClass"
    role="img"
    :aria-label="ariaLabel"
  >
    <div
      class="ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5"
      :class="[shellClasses, folderShellClass]"
    >
      <ui-icon
        :name="resolvedIcon"
        :type="resolvedIconType"
        :size="iconSizeToken"
        :class="iconClasses"
      />
    </div>
    <span
      class="ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground"
      :class="labelClass"
      aria-hidden="true"
      :title="fullLabel"
    >
      {{ displayLabel }}
    </span>
  </div>
</template>

<script>
/**
 * Uzantı → Font Awesome (Free) ikon + macOS Finder’a yakın tipografi renkleri.
 * `icon` / `color` ile tamamen elle de geçilebilir.
 */
const KINDS = ['auto', 'file', 'folder']
const SIZES = ['sm', 'md', 'lg']

const FOLDER_DEFAULT = { icon: 'folder', color: 'text-sky-500' }
const FALLBACK_FILE = { icon: 'file-lines', color: 'text-muted-foreground' }

/** @type {Record<string, { icon: string; color?: string; type?: string }>} */
const EXTENSION_MAP = {
  pdf: { icon: 'file-pdf', color: 'text-red-500' },
  doc: { icon: 'file-word', color: 'text-blue-600' },
  docx: { icon: 'file-word', color: 'text-blue-600' },
  xls: { icon: 'file-excel', color: 'text-green-600' },
  xlsx: { icon: 'file-excel', color: 'text-green-600' },
  csv: { icon: 'file-lines', color: 'text-emerald-600' },
  ppt: { icon: 'file-powerpoint', color: 'text-orange-600' },
  pptx: { icon: 'file-powerpoint', color: 'text-orange-600' },
  png: { icon: 'file-image', color: 'text-violet-500' },
  jpg: { icon: 'file-image', color: 'text-violet-500' },
  jpeg: { icon: 'file-image', color: 'text-violet-500' },
  gif: { icon: 'file-image', color: 'text-violet-500' },
  webp: { icon: 'file-image', color: 'text-violet-500' },
  svg: { icon: 'file-image', color: 'text-orange-500' },
  ico: { icon: 'file-image', color: 'text-amber-600' },
  mp4: { icon: 'file-video', color: 'text-purple-600' },
  mov: { icon: 'file-video', color: 'text-purple-600' },
  webm: { icon: 'file-video', color: 'text-purple-600' },
  mkv: { icon: 'file-video', color: 'text-purple-600' },
  mp3: { icon: 'file-audio', color: 'text-pink-500' },
  wav: { icon: 'file-audio', color: 'text-pink-500' },
  flac: { icon: 'file-audio', color: 'text-pink-500' },
  zip: { icon: 'file-zipper', color: 'text-amber-600' },
  rar: { icon: 'file-zipper', color: 'text-amber-600' },
  '7z': { icon: 'file-zipper', color: 'text-amber-600' },
  gz: { icon: 'file-zipper', color: 'text-amber-600' },
  tar: { icon: 'file-zipper', color: 'text-amber-600' },
  js: { icon: 'file-code', color: 'text-yellow-500' },
  mjs: { icon: 'file-code', color: 'text-yellow-500' },
  ts: { icon: 'file-code', color: 'text-blue-500' },
  vue: { icon: 'file-code', color: 'text-green-500' },
  jsx: { icon: 'file-code', color: 'text-cyan-500' },
  tsx: { icon: 'file-code', color: 'text-sky-400' },
  json: { icon: 'file-code', color: 'text-slate-500' },
  yaml: { icon: 'file-code', color: 'text-slate-500' },
  yml: { icon: 'file-code', color: 'text-slate-500' },
  html: { icon: 'file-code', color: 'text-orange-600' },
  htm: { icon: 'file-code', color: 'text-orange-600' },
  css: { icon: 'file-code', color: 'text-blue-500' },
  scss: { icon: 'file-code', color: 'text-pink-600' },
  md: { icon: 'file-lines', color: 'text-foreground' },
  txt: { icon: 'file-lines', color: 'text-muted-foreground' },
  rtf: { icon: 'file-lines', color: 'text-muted-foreground' },
  log: { icon: 'file-lines', color: 'text-muted-foreground' },
}

const SIZE_PRESET = {
  sm: {
    shell: 'min-h-[3.25rem] min-w-[3.25rem] rounded-xl px-2.5 py-2.5',
    icon: 'md',
    iconBoost: '',
    label: 'text-[11px] leading-4',
    root: 'max-w-[6rem]',
  },
  md: {
    shell: 'min-h-[4.25rem] min-w-[4.25rem] rounded-2xl px-3.5 py-3.5',
    icon: 'lg',
    iconBoost: '',
    label: 'text-xs leading-4',
    root: 'max-w-[9rem]',
  },
  lg: {
    shell: 'min-h-[5.75rem] min-w-[5.75rem] rounded-[1.25rem] px-5 py-5',
    icon: 'lg',
    iconBoost: 'scale-[1.4]',
    label: 'text-sm leading-5',
    root: 'max-w-[12rem]',
  },
}

function normalizePath(name) {
  return String(name ?? '').trim()
}

function isFolderPath(name) {
  const n = normalizePath(name)
  return /[/\\]\s*$/.test(n)
}

function lastSegment(name) {
  const n = normalizePath(name).replace(/[/\\]+$/, '')
  if (!n) return ''
  const parts = n.split(/[/\\]/)
  return parts[parts.length - 1] || n
}

function extensionOf(fileName) {
  const base = lastSegment(fileName)
  const dot = base.lastIndexOf('.')
  if (dot <= 0 || dot === base.length - 1) return ''
  return base.slice(dot + 1).toLowerCase()
}

/** Kısa renk anahtarı → Tailwind `text-*` (ikon üzerinde) */
const NAMED_ICON_COLORS = {
  default: '',
  foreground: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  secondary: 'text-secondary-foreground',
  sky: 'text-sky-500',
  blue: 'text-blue-500',
  red: 'text-red-500',
  green: 'text-green-600',
  amber: 'text-amber-600',
  violet: 'text-violet-500',
  purple: 'text-purple-600',
  orange: 'text-orange-600',
  pink: 'text-pink-500',
  yellow: 'text-yellow-500',
  cyan: 'text-cyan-500',
  emerald: 'text-emerald-600',
}

export default {
  name: 'File',
  props: {
    /** Dosya veya klasör adı (veya yol — `basename-only` ile yalnız son parça gösterilir) */
    name: {
      type: String,
      required: true,
    },
    /** `auto`: sonda `/` veya `\\` → klasör; aksi dosya */
    kind: {
      type: String,
      default: 'auto',
      validator: (v) => KINDS.includes(v),
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: 'md',
      validator: (v) => SIZES.includes(v),
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: '',
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: {
      type: String,
      default: 'light',
    },
    /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
    color: {
      type: String,
      default: '',
    },
    /** true: etikette yalnızca yolun son segmenti */
    basenameOnly: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    preset() {
      return SIZE_PRESET[this.size] || SIZE_PRESET.md
    },
    ariaLabel() {
      const k = this.resolvedKind === 'folder' ? 'Folder' : 'File'
      const label = this.fullLabel || this.displayLabel
      return `${label}, ${k}`
    },
    resolvedKind() {
      if (this.kind === 'folder') return 'folder'
      if (this.kind === 'file') return 'file'
      return isFolderPath(this.name) ? 'folder' : 'file'
    },
    displayLabel() {
      const raw = normalizePath(this.name)
      if (!raw) return ''
      if (!this.basenameOnly) return raw.replace(/[/\\]+$/, '')
      return lastSegment(raw)
    },
    fullLabel() {
      return normalizePath(this.name) || this.displayLabel
    },
    inferredMeta() {
      if (this.resolvedKind === 'folder') return FOLDER_DEFAULT
      const ext = extensionOf(this.name)
      return EXTENSION_MAP[ext] || FALLBACK_FILE
    },
    resolvedIcon() {
      if (this.icon) return this.icon
      return this.inferredMeta.icon
    },
    resolvedIconType() {
      if (this.icon) return this.iconType
      return this.inferredMeta.type || 'solid'
    },
    resolvedColorClass() {
      if (this.color) {
        if (NAMED_ICON_COLORS[this.color] !== undefined) {
          return NAMED_ICON_COLORS[this.color] || ''
        }
        return this.color
      }
      return this.inferredMeta.color || 'text-foreground'
    },
    iconClasses() {
      const boost = this.preset.iconBoost
      return [this.resolvedColorClass, boost].filter(Boolean)
    },
    iconSizeToken() {
      return this.preset.icon
    },
    shellClasses() {
      return this.preset.shell
    },
    folderShellClass() {
      return this.resolvedKind === 'folder' ? 'ui-file-icon-shell--folder' : ''
    },
    labelClass() {
      return this.preset.label
    },
    rootSizeClass() {
      return this.preset.root
    },
  },
}
</script>
