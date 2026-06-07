/**
 * CommonJS preset for Tailwind v3 — semantic colors from `themes/default.css` via var().
 *
 * Düzen: `border` / `ring` tek değer; sayfa `background` + `foreground` (bg-background, text-foreground);
 * yüzey çiftleri hep `{ DEFAULT, foreground }` → `bg-surface`, `text-surface-foreground`, `bg-control`, …
 * Gri skala: `base` ve `neutral` aynı token’lar (`--base-50` … `--base-950`, OKLCH); Tailwind `neutral` paleti ile aynı uç noktalar.
 * `white` → `var(--white)` (Tailwind varsayılan #fff ile uyumlu).
 *
 * @type {import('tailwindcss').Config}
 */
const baseScale = {
  50: 'var(--base-50)',
  100: 'var(--base-100)',
  200: 'var(--base-200)',
  300: 'var(--base-300)',
  400: 'var(--base-400)',
  500: 'var(--base-500)',
  600: 'var(--base-600)',
  700: 'var(--base-700)',
  800: 'var(--base-800)',
  900: 'var(--base-900)',
  950: 'var(--base-950)',
}

module.exports = {
  theme: {
    extend: {
      colors: {
        base: baseScale,
        neutral: baseScale,

        white: 'var(--white)',

        border: 'var(--border)',
        ring: 'var(--ring)',

        background: 'var(--background)',
        foreground: 'var(--foreground)',

        surface: {
          DEFAULT: 'var(--surface)',
          foreground: 'var(--surface-foreground)',
          /** Input / select kabuğu (`default.css` `--input-background`) */
          input: 'var(--input-background)',
        },
        control: {
          DEFAULT: 'var(--control)',
          foreground: 'var(--control-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          foreground: 'var(--warning-foreground)',
        },
        success: {
          DEFAULT: 'var(--success)',
          foreground: 'var(--success-foreground)',
        },
        info: {
          DEFAULT: 'var(--info)',
          foreground: 'var(--info-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
      },
      ringWidth: {
        3: '3px',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
      },
    },
  },
}
