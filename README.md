# ui

Monorepo: **`@ui/lib`** (`Button`, `Icon`, tema, Tailwind preset, vue-i18n) ve **`apps/docs`** önizleme uygulaması.

**Tasarım dili ve bileşen kalıpları:** [`DESIGN.md`](DESIGN.md)

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `pnpm docs:dev` | Önizleme (Vite) |
| `pnpm docs:build` / `pnpm docs:preview` | Üretim build / statik önizleme |
| `pnpm build` | `@ui/lib` kütüphane bundle |

## Tüketim

```js
import { createI18n } from 'vue-i18n'
import UiLib from '@ui/lib'
import '@ui/lib/style.css'

const i18n = createI18n({
  legacy: true,
  locale: 'tr',
  fallbackLocale: 'tr',
  globalInjection: true,
  messages: { tr: {} },
})

app.use(i18n)
app.use(UiLib, { i18n, locale: 'tr' })
```

Ayrıntı: [`packages/ui/README.md`](packages/ui/README.md).
