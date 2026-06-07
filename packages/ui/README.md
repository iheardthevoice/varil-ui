# @ui/lib

Vue 3: **`Icon`**, **`Button`** (Font Awesome `ui-icon` ile) + **`themes/default.css`** + **`tailwind-preset.cjs`** + **vue-i18n** dil paketleri.

## Dil (i18n) — tek kaynak, `main`’de seçim

Çeviriler **`src/locales/<kod>.js`** dosyalarındadır (şimdilik yalnız **`tr.js`**). Bileşenler **yalnızca `$t('ui.…')`** kullanır; dil dosyasını **doğrudan import etmezler**.

Kullanım sırası:

1. `createI18n` ile uygulama `i18n` örneğini oluşturun (`messages` içinde ilgili locale anahtarları olabilir veya boş `{}` başlayabilir).
2. `app.use(i18n)` — aktif dil `i18n.global.locale` (ör. `'tr'`).
3. **`app.use(UiLib, { i18n, locale: 'tr' })`** — kütüphane, **`tr`** paketini `mergeLocaleMessage('tr', …)` ile i18n’e ekler. Böylece hangi dil paketinin yükleneceği **burada** seçilir; bileşenler aktif locale’e göre `$t` ile çözüm alır.

```js
import { createApp } from 'vue'
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

const app = createApp(App)
app.use(i18n)
app.use(UiLib, { i18n, locale: 'tr' })
```

İleride `en.js` eklendiğinde: `messages: { tr: {}, en: {} }`, ardından `app.use(UiLib, { i18n, locales: ['tr', 'en'] })` veya dil değişiminde sadece `i18n.global.locale = 'en'` (mesajlar önceden birleştirilmiş olmalı).

Programatik erişim: **`getUiMessages('tr')`** — manuel `mergeLocaleMessage` için.

## Global kayıt (`ui-*`)

```js
app.use(UiLib, { i18n, locale: 'tr' })
```

Önizleme: `apps/docs/src/main.js` + `i18n.js`.
