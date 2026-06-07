# Tasarım ve bileşen kullanım notları

Bu belge **@ui/lib** ile geliştirdiğimiz arayüz dilini, token’ları ve tekrar kullanım kalıplarını özetler. Ayrıntılı sınıflar için `packages/ui/themes/components.css` ve `packages/ui/themes/default.css` kaynak kabul edilir.

---

## 1. Tema ve token’lar

- **Font:** Inter (`--font-sans`), `default.css` ile yüklenir.
- **Renkler:** `:root` ve `.dark` altında **OKLCH / özel değerler**; nötr skala `--base-50` … `--base-950` (Tailwind `neutral` ile uyumlu uçlar).
- **Semantik çiftler:** `background` / `foreground`, `surface` / `surface-foreground`, `control` / `control-foreground`, `primary`, `secondary`, `muted`, `muted-foreground`, `border`, `ring`.
- **Özel yüzey:** `surface-input` (`--input-background`) — input / select / segment izi gibi “konteyner içi” dolgular için.
- **`--radius`:** 26px; `rounded-lg` ile eşlenen kontrol kabuğu için referans.
- **Klavye odak:** `--ui-focus-ring` = `color-mix(ring, 45% transparent)` — `ring-2`, `ring-offset-2` ile birlikte kullanılır.

**Koyu tema:** Sayfa `background` daha derin; kart ve paneller `surface` ile hizalanır. Border ve `surface-input` yüzeyden ayrışır, kart üzerinde gereksiz çift çerçeve oluşmaz.

---

## 2. Tipografi

| Sınıf | Kullanım |
|--------|-----------|
| `ui-heading-1` … `ui-heading-6` | Sayfa / bölüm hiyerarşisi |
| `ui-heading-3` | Kart veya bölüm başlığı (16px / medium / 24px satır) |
| `ui-text-default` | Gövde / yardımcı metin (`text-sm`, `text-muted-foreground`) |

Kart gövdesi (`ui-card-body`) varsayılan olarak bu tabanı kullanır.

---

## 3. Yüzeyler ve layout

| Kavram | Davranış |
|--------|-----------|
| **`ui-surface`** | `rounded-3xl`, `border-border`, `bg-surface`, `shadow-lg` — **Card**, **Popover** paneli, **Dialog** paneli aynı kabuk. |
| **`ui-card`** | `ui-surface` + iç `gap-6`, `p-6`, flex kolon; header / body / footer slot düzeni. |
| **`ui-empty`** | Gölgeli kart kabuğu yok; içerik ortalanmış boş durum. |

---

## 4. Kontrol ölçüsü ve köşeler

- **Standart kontrol yüksekliği (md):** `h-9` (36px), metin ~14px/20px, yatay padding ~12px, `rounded-lg` (→ `--radius` preset üzerinden).
- **Input / Select tek satır kabuğu:** ~36px yükseklik, **`rounded-[22px]`**, `border-transparent`, `bg-surface-input`, odakta `--ui-focus-ring`.
- **`ui-control-h-*`:** Button ve benzeri `ui-button` için sm / md / lg ölçüleri — **köşe yuvarlaklığı buradan gelir**; MenuItem vb. için ek `rounded-*` sınıfları yazma, `Button`’ın kendi yapısına güvenilir.

---

## 5. Odak ve kart içi kontroller

- Odak ring’i: çoğu kontrol `focus-visible:ring-2 ring-offset-2`.
- **Kart içinde:** `ring-offset-background` yerine **`ring-offset-surface`** kullanılıyorsa çift çerçeve oluşmaz — `components.css` içinde `.ui-card …` seçicileriyle hizalı (input, tags, pin, select filter, bazı buton / stepper / **segmented tab** tetikleyicileri).

---

## 6. Button

- **Variants:** `solid` | `outline` | `ghost` | `link`
- **Colors:** `primary` | `secondary` | `warning` | `success` | `info`
- **`rounded` prop:** Ekstra olarak `rounded-full` (pill) — yalnızca prop ile; rastgele `rounded-xl` ile ezme.
- **Metin yoğunluğu (outline / ghost):** Renkli durumlarda yazı **`text-*` semantik renginde** tutulur (ör. `outline` + `warning` → `text-warning`); **`text-*-foreground`** yalnızca dolu zemin için — açık/koyu zeminde kontrast kaybını önlemek için.
- **Loading / disabled:** Opacity ve `cursor-not-allowed`; tıklama engellenir.
- **`fulled`, `text-align`, `cubed`:** Geniş blok, sol hizalı metin, ikon kutusu için.

---

## 7. İkonlar

- **`Icon`** = Font Awesome **webfont** (`fa-solid`, …); uygulama `all.min.css` yüklemelidir.
- **Varsayılan ağırlık:** **`light`** (`ui-icon` ve `iconType` prop’ları); segmented tab tetikleyicileri görünürlük için **`solid`** kalır.
- **`TabTrigger` segmented:** İkon tipi otomatik **`solid`**, boyut **`md`** — üst-alt (ikon / etiket) düzen için.

---

## 8. Form

- **`FormRow`:** Etiket + açıklama + kontrol; `direction` horizontal / vertical; **`variant="card"`** kenarlıklı satır için `rounded-[22px]` ile input kabuğu ile uyumlu.
- **`Input`:** Tek/çok satır; multiline `ui-input--multiline`.
- **`Password`:** Güç göstergesi `Progress` ile; zayıf / orta / güçlü için semantik renkler.
- **`Pin`:** Hücreler `rounded-[22px]`, input ile aynı kabuk hissi.
- **`Phone`:** `Input` + inline `Select` birleşimi (ülke + numara).
- **`Select`:** `filterable`, uzun listelerde scroll; kısa listelerde panel hizası davranışı.
- **`Tags`:** Etiket girişi; boş durumda `--solo` ile yükseklik uyumu.

---

## 9. Tabs

- **Variants:** `line` | `segmented` (eski **pills** tab varyantı kaldırıldı; **Stepper** `variant="pills"` ayrı bileşen).
- **`line`:** Alt çizgi seçimi; yatayda border-bottom çizgisi; dikeyde solda ince gösterge çubuğu.
- **`segmented`:** Yalnızca **yatay** anlamlı; dikey + `segmented` kullanılırsa liste `line` düzenine düşer.
- **Segmented görünüm:** Dış iz `rounded-full`; açık temada iz **`bg-control` + `border-border`**, koyuda **`bg-surface-input`**; seçili hücre **`bg-surface`**, ince `border-border`, hafif gölge. İkon **üstte**, etiket **altta** (`text-[11px]`). Pasif metin açıkta **`text-base-600`**, koyuda **`text-muted-foreground`**. **Line** sekmelerde pasif metin/ikon için aynı ayrım uygulanır.

---

## 10. SegmentGroup (dil, küçük ikili seçim)

- İz: **`rounded-full`**, açık temada **`bg-control` + `border-border`**, koyuda **`bg-surface-input`** — segmented tab ile aynı “gri iz” mantığı.
- Pasif segment: açıkta **`text-base-600`**, koyuda **`text-muted-foreground`**.
- Seçili: **`bg-primary` + `text-primary-foreground`** (vurgulu ana aksiyon).

---

## 11. Menu

- **Kabuksuz** liste: `Menu` kendi başına `ui-card` gibi border/gölge/padding taşımaz; **kart içinde** veya düz layout’ta kullanılır.
- **`MenuItem`:** `Button` (`variant="ghost"`, `color="secondary"`, `fulled`, `text-align="left"`) — köşe `ui-control-h-md` / `rounded-lg` ile sistemle uyumlu; özel `rounded-xl` kuralı yok.

---

## 12. Diğer bileşen notları

- **Progress:** `type="circle" | "bar"` — şifre gücü, slider izi vb.
- **Slider:** Şeffaf native track; dolgu `Progress` bar ile.
- **Stepper:** `default` ve `pills` (bu “pills” **Tabs** değil).
- **Dialog / Toast / Confirm:** Programatik API’ler (`useDialog`, `useConfirm`, `useToast`); kökte ilgili portal bileşenleri gerekir.
- **ListItem, Badge, Alert, Radio, Checkbox, Switch:** Ortak input/foreground/border token’ları; checkbox’ta köşe “hap” değil, kontrollü küçük radius.

---

## 13. Önizleme uygulaması (docs)

- Örnekler mümkün olduğunca **gerçek ekran senaryolarına** yakın (kayıt, giriş, profil, etkinlik formu, hesap sekmeleri); saf “API demo” metinlerinden kaçınılır.
- Tema / dil: header’da segment ile `light` / `dark`, `TR` / `EN`.

---

## 14. i18n

- Bileşen metinleri **`$t('ui.…')`** ile; locale paketleri `app.use(UiLib, { i18n, locale: 'tr' })` ile birleştirilir. Ayrıntı: `packages/ui/README.md`.

---

## 15. Tüketim özeti

```js
import UiLib from '@ui/lib'
import '@ui/lib/style.css' // default.css + components.css zinciri
app.use(UiLib, { i18n, locale: 'tr' })
```

Tailwind: `packages/ui/tailwind-preset.cjs` — `base` / `neutral`, semantik renkler ve `borderRadius.lg` → `var(--radius)`.

---

*Son güncelleme: depodaki `components.css` / `default.css` ile uyumlu tutulmalı; stil değişikliklerinde bu dosyayı güncellemek faydalıdır.*
