<script setup>
import { computed, ref, watch } from 'vue'
import { useToast, useDialog, useConfirm } from '@ui/lib'
import { i18n } from './i18n.js'

const toastUi = useToast()
const dialogProg = useDialog()
const { confirm } = useConfirm()

const demoSkeletonLoading = ref(true)
const demoStepHorizontal = ref(1)
const demoStepVertical = ref(0)
const demoStepPills = ref(1)
const demoSteps = [
  { title: 'Hesap', description: 'Profil ve güvenlik', icon: 'user' },
  { title: 'Ödeme', description: 'Kart ve adres', icon: 'credit-card' },
  { title: 'Yayın', description: 'Dağıtım kanalları', icon: 'rocket' },
]
const demoStepsPills = [
  { title: 'Hesap' },
  { title: 'Abonelik' },
  { title: 'Restoran' },
  { title: 'Ödeme' },
  { title: 'Onay' },
]

function showToastVariant(variant) {
  const payload = {
    title: 'Toast',
    description: `variant="${variant}"`,
  }
  if (variant === 'info') toastUi.info(payload)
  else if (variant === 'success') toastUi.success(payload)
  else if (variant === 'warning') toastUi.warning(payload)
  else toastUi.error(payload)
}

async function runConfirmDemo() {
  const ok = await confirm({
    title: 'Kalıcı olarak silinsin mi?',
    description: 'Bu işlem geri alınamaz.',
    destructive: true,
  })
  if (ok) toastUi.success({ title: 'Silindi' })
  else toastUi.info({ title: 'İptal edildi' })
}

const THEME_KEY = 'ui-preview-theme'
const LOCALE_KEY = 'ui-preview-locale'

function readStoredLocale() {
  if (typeof localStorage === 'undefined') return null
  const v = localStorage.getItem(LOCALE_KEY)
  return v === 'tr' || v === 'en' ? v : null
}

function readStoredTheme() {
  if (typeof localStorage === 'undefined') return null
  const v = localStorage.getItem(THEME_KEY)
  return v === 'dark' || v === 'light' ? v : null
}

function applyI18nLocale(code) {
  const g = i18n.global
  if (typeof g.locale === 'string') {
    g.locale = code
  } else if (g.locale && typeof g.locale === 'object' && 'value' in g.locale) {
    g.locale.value = code
  }
}

const previewLocale = ref(readStoredLocale() ?? (typeof i18n.global.locale === 'string' ? i18n.global.locale : i18n.global.locale?.value ?? 'tr'))
const previewTheme = ref(readStoredTheme() ?? 'dark')

watch(
  previewLocale,
  (v) => {
    applyI18nLocale(v)
    if (typeof localStorage !== 'undefined') localStorage.setItem(LOCALE_KEY, v)
  },
  { immediate: true },
)

watch(
  previewTheme,
  (mode) => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    if (typeof localStorage !== 'undefined') localStorage.setItem(THEME_KEY, mode)
  },
  { immediate: true },
)

const currencyOptions = [
  { value: 'usd', label: 'USD — United States Dollar' },
  { value: 'eur', label: 'EUR — Euro' },
  { value: 'try', label: 'TRY — Turkish Lira' },
  { value: 'gbp', label: 'GBP — British Pound' },
  { value: 'jpy', label: 'JPY — Japanese Yen' },
  { value: 'chf', label: 'CHF — Swiss Franc' },
  { value: 'cad', label: 'CAD — Canadian Dollar' },
  { value: 'aud', label: 'AUD — Australian Dollar' },
]

const demoFilterableCity = ref('istanbul')
const cityOptions = [
  { value: 'istanbul', label: 'İstanbul' },
  { value: 'ankara', label: 'Ankara' },
  { value: 'izmir', label: 'İzmir' },
  { value: 'bursa', label: 'Bursa' },
  { value: 'antalya', label: 'Antalya' },
  { value: 'adana', label: 'Adana' },
  { value: 'konya', label: 'Konya' },
  { value: 'gaziantep', label: 'Gaziantep' },
  { value: 'mersin', label: 'Mersin' },
  { value: 'kayseri', label: 'Kayseri' },
  { value: 'eskisehir', label: 'Eskişehir' },
  { value: 'diyarbakir', label: 'Diyarbakır' },
  { value: 'samsun', label: 'Samsun' },
  { value: 'denizli', label: 'Denizli' },
  { value: 'trabzon', label: 'Trabzon' },
]

const demoFilterableCityLabel = computed(() => {
  const hit = cityOptions.find((o) => o.value === demoFilterableCity.value)
  return hit?.label ?? demoFilterableCity.value
})
const payoutMin = 50
const payoutMax = 10000
const payoutAmount = ref(2850)
const payoutNotes = ref('')
const payoutCurrency = ref('usd')

const prefsCurrency = ref('usd')
const prefsPublicStats = ref(false)
const prefsEmailNotif = ref(false)

const socialSpotify = ref('spotify.com/artist/3jxExample2k')
const socialInstagram = ref('@julianduryea_music')
const socialSoundcloud = ref('')
const socialWebsite = ref('')

const payoutPrefsAccount = ref('Julian Duryea')
const payoutPrefsReceiving = ref('bank')
const payoutPrefsIban = ref('')

const NOTIF_IDS = ['transaction', 'security', 'goal', 'market']
const notifSelected = ref(['transaction'])
const notifSelectAll = computed({
  get: () => NOTIF_IDS.length > 0 && NOTIF_IDS.every((id) => notifSelected.value.includes(id)),
  set: (v) => {
    notifSelected.value = v ? [...NOTIF_IDS] : []
  },
})

const payoutFormatted = computed(() =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(payoutAmount.value),
)

const loginEmail = ref('')
const loginPassword = ref('')
const loginRemember = ref(false)

const profileMonthlyLimit = ref(35)

const progressDemo = [
  { label: 'Edge Requests', value: 95, display: '9.5M / 10M' },
  { label: 'Fast Data Transfer', value: 72, display: '720 GB / 1 TB' },
  { label: 'Monitoring data points', value: 48, display: '48K / 100K' },
  { label: 'Web Analytics Events', value: 28, display: '280K / 1M' },
  { label: 'ISR Writes', value: 6, display: '6 / 100' },
  { label: 'Function Duration', value: 2, display: '2s / 100s' },
]
const profileName = ref('Julian Duryea')
const profileBio = ref('')
const accountDisplayName = ref('Julian Duryea')
const accountEmail = ref('julian@example.com')
const accountCurrentPassword = ref('')
const accountNewPassword = ref('')
const eventTitle = ref('')
const demoTagOptions = [
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'vue', label: 'Vue' },
  { value: 'design-system', label: 'Design system' },
]
const demoTags = ref(['html', 'css'])
const kitRadio = ref('a')
const kitSwitch = ref(false)

const codespaceMode = ref('cloud')

const overlayMenuOpen = ref(false)
const overlayMenuItems = [
  { label: 'New with options…', icon: 'plus', value: 'new' },
  { label: 'Configure dev container', icon: 'cube', value: 'devcontainer' },
  { label: 'Set up prebuilds', icon: 'bolt', value: 'prebuilds' },
  { divider: true },
  { label: 'Manage codespaces', icon: 'layer-group', value: 'manage' },
  { label: 'Share deep link', icon: 'share-nodes', value: 'share' },
  { label: 'What are codespaces?', icon: 'circle-info', value: 'help' },
]
const overlayLastPick = ref('')

const demoOverlayDate = ref('2026-05-01')
const demoOverlayTime = ref('09:30')
const demoOverlaySelect = ref('try')
const rawPopoverOpen = ref(false)
const demoDialogStandardOpen = ref(false)
const demoDialogCompactOpen = ref(false)
const demoDialogRichOpen = ref(false)
const demoDialogExportRange = ref('7d')

const demoTabsLine = ref('account')
const demoTabsSegmented = ref('overview')
const demoTabsVertical = ref('general')

const contributorAvatars = Array.from({ length: 16 }, (_, i) => ({
  src: `https://i.pravatar.cc/128?img=${(i % 70) + 1}`,
  alt: `Contributor ${i + 1}`,
}))

function onOverlayMenuSelect(it) {
  overlayLastPick.value = String(it.value ?? it.label ?? '')
}

const registerName = ref('')
const registerPhoneCountry = ref('+90')
const registerPhoneNumber = ref('')
const registerPassword = ref('')
const registerOtp = ref('')

function onRegisterOtpComplete(code) {
  toastUi.success({ title: 'OTP', description: `Kod alındı: ${code}` })
}

function submitRegister() {
  toastUi.info({
    title: 'Kayıt',
    description: registerName.value || 'Form gönderildi',
  })
}

function submitLogin() {
  toastUi.info({
    title: 'Giriş',
    description: loginEmail.value || 'E-posta girilmedi',
  })
}
</script>

<template>
  <div class="min-h-screen bg-background text-foreground antialiased">

    <header
      class="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div class="mx-auto flex max-w-[88rem] flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10 lg:px-12">
        <span class="text-sm font-semibold tracking-tight text-foreground">UI Preview</span>
        <div class="flex flex-wrap items-center justify-end gap-3 sm:gap-4">
          <ui-segment-group v-model="previewLocale" :block="false" aria-label="Language">
            <ui-segment value="tr" label="TR" />
            <ui-segment value="en" label="EN" />
          </ui-segment-group>
          <ui-segment-group v-model="previewTheme" :block="false" aria-label="Color mode">
            <ui-segment value="light" label="Light" />
            <ui-segment value="dark" label="Dark" />
          </ui-segment-group>
        </div>
      </div>
    </header>

    <main class="p-6 md:p-10 lg:p-12">
      <div
        class="mx-auto w-full max-w-[88rem] columns-1 [column-gap:2rem] [column-fill:balance] sm:columns-2 xl:columns-3">
        <ui-card class="mb-8 break-inside-avoid w-full" title="Kayıt ol"
          description="Hesap oluşturmak için bilgilerinizi girin.">
          <form class="flex flex-col gap-5" @submit.prevent="submitRegister">
            <ui-form-row label="Ad Soyad" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="registerName" autocomplete="name"
                placeholder="Adınız Soyadınız" />
            </ui-form-row>

            <ui-form-row label="Telefon" description="Ülke kodu ve cep numaranız" v-slot="{ controlId, descriptionId }">
              <ui-phone :id="controlId" :aria-describedby="descriptionId" v-model:country="registerPhoneCountry"
                v-model:number="registerPhoneNumber" />
            </ui-form-row>

            <ui-form-row label="Şifre" v-slot="{ controlId, descriptionId }">
              <ui-password :id="controlId" :aria-describedby="descriptionId" v-model="registerPassword"
                autocomplete="new-password" placeholder="En az 8 karakter" />
            </ui-form-row>

            <ui-form-row label="Doğrulama kodu (OTP)" description="SMS ile gelen 6 haneli kod"
              v-slot="{ controlId, descriptionId }">
              <ui-pin :id="controlId" :aria-describedby="descriptionId" v-model="registerOtp" :length="6" type="numeric"
                @complete="onRegisterOtpComplete" />
            </ui-form-row>

            <ui-button type="submit" fulled rounded>
              Kayıt ol
            </ui-button>
          </form>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Giriş yap"
          description="Hesabınıza erişmek için e-posta ve şifrenizi girin.">
          <form class="flex flex-col gap-5" @submit.prevent="submitLogin">
            <ui-form-row label="E-posta" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="loginEmail" type="email"
                autocomplete="email" placeholder="ornek@eposta.com" />
            </ui-form-row>

            <ui-form-row label="Şifre" v-slot="{ controlId, descriptionId }">
              <ui-password :id="controlId" :aria-describedby="descriptionId" v-model="loginPassword"
                autocomplete="current-password" placeholder="Şifreniz" />
            </ui-form-row>

            <div class="flex flex-wrap items-center justify-between gap-3">
              <ui-checkbox v-model="loginRemember" label="Beni hatırla" />
              <ui-button variant="link" color="secondary" size="sm" type="button">
                Şifremi unuttum
              </ui-button>
            </div>

            <ui-button type="submit" fulled rounded>
              Giriş yap
            </ui-button>
          </form>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Profil düzenle"
          description="Sanatçı profilinizi ve görünürlük ayarlarınızı güncelleyin.">
          <form class="flex flex-col gap-5">
            <ui-form-row label="Görünen ad" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="profileName" autocomplete="name"
                placeholder="Sahne adınız veya tam adınız" />
            </ui-form-row>

            <ui-form-row label="Biyografi" description="Kısa tanıtım metni; dinleyiciler profilinizde görür."
              v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="profileBio" multiline :rows="4"
                placeholder="Kendinizi birkaç cümleyle tanıtın…" />
            </ui-form-row>

            <ui-form-row variant="card" label="İki adımlı doğrulama"
              description="Hesabınıza ek güvenlik için SMS veya e-posta ile doğrulama açın."
              v-slot="{ controlId, descriptionId }">
              <ui-button color="secondary" :id="controlId" :aria-describedby="descriptionId" type="button">
                Etkinleştir
              </ui-button>
            </ui-form-row>

            <ui-form-row label="Aylık harcama limiti" description="Bildirim eşiği (yüzde)."
              v-slot="{ controlId, descriptionId }">
              <ui-slider :id="controlId" :aria-describedby="descriptionId" v-model="profileMonthlyLimit" :min="0"
                :max="100" :step="5" aria-label="Aylık harcama limiti" />
            </ui-form-row>

            <div class="flex flex-col gap-3">
              <p class="ui-form-label m-0">Platform kotası</p>
              <ul class="m-0 flex list-none flex-col gap-3 p-0">
                <li v-for="item in progressDemo" :key="item.label" class="flex min-w-0 items-center gap-3">
                  <ui-progress type="circle" size="sm" :value="item.value" :aria-label="item.label" />
                  <span class="min-w-0 flex-1 truncate text-sm text-foreground">{{ item.label }}</span>
                  <span class="shrink-0 text-sm tabular-nums text-muted-foreground">{{ item.display }}</span>
                </li>
              </ul>
            </div>

            <ui-form-row label="Şehir" description="Konser ve etkinlik önerileri için."
              v-slot="{ controlId, descriptionId }">
              <ui-select :id="controlId" :aria-describedby="descriptionId" v-model="demoFilterableCity" filterable
                placeholder="Şehir seçin" filter-placeholder="Şehir ara…" :options="cityOptions" aria-label="Şehir" />
            </ui-form-row>

            <ui-form-row label="Tür etiketleri" v-slot="{ controlId, descriptionId }">
              <ui-select
                :id="controlId"
                :aria-describedby="descriptionId"
                v-model="demoTags"
                multiple
                filterable
                :options="demoTagOptions"
                placeholder="Etiket seçin veya arayın…"
                filter-placeholder="Ara…"
                aria-label="Tür etiketleri"
                class="w-full max-w-xl"
              />
            </ui-form-row>

            <ui-form-row label="Profil görünürlüğü" direction="horizontal"
              v-slot="{ controlId, descriptionId }">
              <ui-radio-group :id="controlId" :aria-describedby="descriptionId" v-model="kitRadio"
                orientation="horizontal" aria-label="Profil görünürlüğü">
                <ui-radio value="a" label="Herkese açık" />
                <ui-radio value="b" label="Yalnızca bağlantılar" />
              </ui-radio-group>
            </ui-form-row>

            <ui-form-row label="E-posta özeti" description="Haftalık dinlenme ve gelir özeti."
              direction="horizontal" v-slot="{ controlId, descriptionId }">
              <ui-switch :id="controlId" :aria-describedby="descriptionId" v-model="kitSwitch"
                aria-label="E-posta özeti" />
            </ui-form-row>

            <ui-button type="button" fulled rounded @click="toastUi.success({ title: 'Profil kaydedildi' })">
              Değişiklikleri kaydet
            </ui-button>
          </form>
        </ui-card>

        <ui-card
          class="mb-8 break-inside-avoid w-full"
          title="Hesap işlemleri"
          description="Onay, uyarı ve bilgi düğmeleri — ödeme ve güvenlik akışlarında."
        >
          <div class="flex flex-col gap-6">
            <div class="flex flex-col gap-2">
              <p class="ui-text-muted m-0 text-xs font-medium uppercase tracking-wide">
                Dolu
              </p>
              <div class="flex flex-wrap gap-2">
                <ui-button color="warning">
                  Ödemeyi onayla
                </ui-button>
                <ui-button color="success">
                  Başarılı
                </ui-button>
                <ui-button color="info">
                  Bilgi
                </ui-button>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <p class="ui-text-muted m-0 text-xs font-medium uppercase tracking-wide">
                Çerçeveli
              </p>
              <div class="flex flex-wrap gap-2">
                <ui-button variant="outline" color="warning">
                  Uyarı
                </ui-button>
                <ui-button variant="outline" color="success">
                  Onaylandı
                </ui-button>
                <ui-button variant="outline" color="info">
                  Bilgi
                </ui-button>
                <ui-button variant="outline" color="primary" rounded>
                  Devam
                </ui-button>
                <ui-button variant="outline" color="secondary" rounded>
                  Vazgeç
                </ui-button>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <p class="ui-text-muted m-0 text-xs font-medium uppercase tracking-wide">
                Metin
              </p>
              <div class="flex flex-wrap gap-2">
                <ui-button variant="ghost" color="warning">
                  Uyarı
                </ui-button>
                <ui-button variant="ghost" color="success">
                  Onaylandı
                </ui-button>
                <ui-button variant="ghost" color="info">
                  Bilgi
                </ui-button>
              </div>
            </div>
            <div class="flex flex-col gap-2">
              <p class="ui-text-muted m-0 text-xs font-medium uppercase tracking-wide">
                Diyalog
              </p>
              <div class="flex flex-wrap gap-2">
                <ui-button variant="outline" color="primary" rounded @click="dialogProg.show()">
                  Sipariş detayı
                </ui-button>
                <ui-button variant="outline" color="warning" rounded @click="runConfirmDemo">
                  Siparişi iptal et
                </ui-button>
              </div>
            </div>
          </div>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Dosyalarım"
          description="Projeleriniz, raporlarınız ve medya dosyalarınız.">
          <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
              <span class="ui-text-muted text-xs">Klasörler ve dosyalar</span>
              <div
                class="grid grid-cols-2 justify-items-center gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <ui-file name="Projects/" />
                <ui-file kind="folder" name="Documents" />
                <ui-file name="Annual_Report.pdf" />
                <ui-file name="Budget.xlsx" />
                <ui-file name="Interview.mp4" />
                <ui-file name="mixtape.mp3" />
                <ui-file name="bundle.zip" />
                <ui-file name="App.tsx" />
                <ui-file name="notes.txt" />
                <ui-file name="unknown.bin" />
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <span class="ui-text-muted text-xs">Önizleme boyutu</span>
              <div class="flex flex-wrap items-end justify-start gap-12 gap-y-8">
                <ui-file name="preview-sm.pdf" size="sm" />
                <ui-file name="preview-md.pdf" size="md" />
                <ui-file name="preview-lg.pdf" size="lg" />
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <span class="ui-text-muted text-xs">Özel ikon</span>
              <div class="flex flex-wrap items-end gap-10 gap-y-8">
                <ui-file name="pinned.item" icon="thumbtack" color="orange" />
                <ui-file name="github-mark.svg" icon="github" icon-type="brands" color="foreground" />
                <ui-file name="custom.text-red-500" icon="heart" color="text-red-500" />
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <span class="ui-text-muted text-xs">Tam yol</span>
              <div class="flex justify-center sm:justify-start">
                <ui-file name="/Users/demo/Documents/Exports/Q4/summary.csv" class="max-w-full sm:max-w-md"
                  :basename-only="false" />
              </div>
            </div>
          </div>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Hesap ayarları"
          description="Profil, güvenlik ve bildirim tercihlerinizi sekmeler arasında yönetin.">
          <div class="flex flex-col gap-8">
            <ui-tabs v-model="demoTabsLine" variant="line">
              <ui-tab-list aria-label="Hesap ayarları">
                <ui-tab-trigger value="account" label="Profil" icon="user" />
                <ui-tab-trigger value="password" label="Güvenlik" icon="lock" />
                <ui-tab-trigger value="notifications" label="Bildirimler" icon="bell" />
              </ui-tab-list>
              <ui-tab-panel value="account">
                <form class="flex max-w-md flex-col gap-4">
                  <ui-form-row label="Görünen ad" v-slot="{ controlId, descriptionId }">
                    <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="accountDisplayName"
                      autocomplete="name" />
                  </ui-form-row>
                  <ui-form-row label="E-posta" v-slot="{ controlId, descriptionId }">
                    <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="accountEmail" type="email"
                      autocomplete="email" />
                  </ui-form-row>
                  <ui-button type="button" rounded @click="toastUi.success({ title: 'Profil güncellendi' })">
                    Kaydet
                  </ui-button>
                </form>
              </ui-tab-panel>
              <ui-tab-panel value="password">
                <form class="flex max-w-md flex-col gap-4">
                  <ui-form-row label="Mevcut şifre" v-slot="{ controlId, descriptionId }">
                    <ui-password :id="controlId" :aria-describedby="descriptionId" v-model="accountCurrentPassword"
                      autocomplete="current-password" />
                  </ui-form-row>
                  <ui-form-row label="Yeni şifre" v-slot="{ controlId, descriptionId }">
                    <ui-password :id="controlId" :aria-describedby="descriptionId" v-model="accountNewPassword"
                      autocomplete="new-password" />
                  </ui-form-row>
                  <ui-button type="button" rounded>
                    Şifreyi güncelle
                  </ui-button>
                </form>
              </ui-tab-panel>
              <ui-tab-panel value="notifications">
                <div class="flex max-w-md flex-col gap-3">
                  <ui-checkbox v-model="prefsEmailNotif" label="Ürün güncellemeleri" />
                  <ui-checkbox v-model="prefsPublicStats" label="Haftalık özet e-postası" />
                </div>
              </ui-tab-panel>
            </ui-tabs>

            <ui-tabs v-model="demoTabsSegmented" variant="segmented">
              <ui-tab-list aria-label="Dağıtım durumu">
                <ui-tab-trigger value="overview" label="Özet" icon="chart-simple" />
                <ui-tab-trigger value="api" label="Mağazalar" icon="store" />
                <ui-tab-trigger value="limits" label="Kotalar" icon="chart-pie" />
              </ui-tab-list>
              <ui-tab-panel value="overview">
                <p class="ui-text-default m-0">
                  Son 30 günde 12.400 dinlenme; 3 parça mağaza incelemesinde.
                </p>
              </ui-tab-panel>
              <ui-tab-panel value="api">
                <p class="ui-text-default m-0">
                  Spotify, Apple Music ve YouTube Music bağlantılarınızı yönetin.
                </p>
              </ui-tab-panel>
              <ui-tab-panel value="limits">
                <p class="ui-text-default m-0">
                  Aylık yükleme kotanızın %68'ini kullandınız.
                </p>
              </ui-tab-panel>
            </ui-tabs>

            <ui-tabs v-model="demoTabsVertical" variant="line" orientation="vertical">
              <div class="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
                <ui-tab-list aria-label="Ayarlar bölümleri">
                  <ui-tab-trigger value="general" label="Genel" />
                  <ui-tab-trigger value="billing" label="Faturalama" />
                </ui-tab-list>
                <div class="min-w-0 flex-1">
                  <ui-tab-panel value="general">
                    <form class="flex flex-col gap-4">
                      <ui-form-row label="Para birimi" v-slot="{ controlId, descriptionId }">
                        <ui-select :id="controlId" :aria-describedby="descriptionId" v-model="prefsCurrency"
                          :options="currencyOptions" aria-label="Para birimi" />
                      </ui-form-row>
                      <ui-form-row label="Dil" direction="horizontal" v-slot="{ controlId, descriptionId }">
                        <ui-segment-group :id="controlId" :aria-describedby="descriptionId" v-model="previewLocale"
                          :block="false" aria-label="Dil">
                          <ui-segment value="tr" label="TR" />
                          <ui-segment value="en" label="EN" />
                        </ui-segment-group>
                      </ui-form-row>
                    </form>
                  </ui-tab-panel>
                  <ui-tab-panel value="billing">
                    <p class="ui-text-default m-0">
                      Fatura adresi ve kayıtlı ödeme yöntemleriniz burada listelenir.
                    </p>
                  </ui-tab-panel>
                </div>
              </div>
            </ui-tabs>
          </div>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Sipariş ve bildirimler"
          description="Restoran kaydı, ödeme adımları ve sistem bildirimleri.">
          <div class="flex flex-col gap-8">
            <div class="space-y-3">
              <p class="ui-heading-4 m-0">Ödeme adımları</p>
              <ui-stepper v-model="demoStepHorizontal" direction="horizontal" interactive aria-label="Checkout"
                :steps="demoSteps" />
            </div>
            <div class="max-w-md space-y-3">
              <p class="ui-heading-4 m-0">Restoran kaydı</p>
              <ui-stepper v-model="demoStepPills" variant="pills" interactive aria-label="Restoran kaydı"
                :steps="demoStepsPills" />
            </div>
            <div class="max-w-md space-y-3">
              <p class="ui-heading-4 m-0">Kurulum sihirbazı</p>
              <ui-stepper v-model="demoStepVertical" direction="vertical" interactive aria-label="Kurulum"
                :steps="demoSteps" />
            </div>
            <div class="flex flex-col gap-3">
              <p class="ui-heading-4 m-0">Sistem mesajları</p>
              <ui-alert variant="info" title="Bilgi" description="İşlem arka planda devam ediyor." />
              <ui-alert variant="success" title="Tamamlandı" description="Kayıt güncellendi." dismissible />
              <ui-alert variant="warning" title="Dikkat" description="Kota dolmak üzere." />
              <ui-alert variant="error" title="Hata" description="Bağlantı kurulamadı." />
            </div>
            <div class="flex flex-wrap gap-2">
              <ui-button variant="outline" color="secondary" rounded @click="showToastVariant('info')">
                Bilgi bildirimi gönder
              </ui-button>
              <ui-button variant="outline" color="secondary" rounded @click="showToastVariant('success')">
                Başarı bildirimi gönder
              </ui-button>
              <ui-button variant="outline" color="secondary" rounded @click="showToastVariant('warning')">
                Uyarı bildirimi gönder
              </ui-button>
              <ui-button variant="outline" color="secondary" rounded @click="showToastVariant('error')">
                Hata bildirimi gönder
              </ui-button>
            </div>
            <div class="flex flex-wrap gap-2">
              <ui-button variant="outline" color="primary" rounded @click="dialogProg.show()">
                Sipariş detayı
              </ui-button>
              <ui-button variant="outline" color="warning" rounded @click="runConfirmDemo">
                Siparişi iptal et
              </ui-button>
            </div>
          </div>
        </ui-card>

        <ui-dialog v-model:open="dialogProg.open" title="Sipariş detayı"
          description="Ödeme özeti ve teslimat bilgileri." max-width="sm" header-divider>
          <p class="ui-text-default m-0">
            Siparişiniz hazırlanıyor. Tahmini teslimat 25–30 dakika.
          </p>
          <template #footer>
            <ui-button color="secondary" rounded @click="dialogProg.hide()">
              Kapat
            </ui-button>
          </template>
        </ui-dialog>

        <ui-card
          class="mb-8 break-inside-avoid w-full"
          title="Finans"
          description="Hesap özeti ve planlama menüsü."
        >
          <ui-menu width="md">
            <ui-menu-nav aria-label="Finans menüsü">
              <ui-menu-group label="Genel bakış">
                <ui-menu-item prefix-icon="table-cells" active>
                  Dashboard
                </ui-menu-item>
                <ui-menu-item prefix-icon="arrow-right-arrow-left">
                  Transactions
                </ui-menu-item>
                <ui-menu-item prefix-icon="chart-line">
                  Investments
                </ui-menu-item>
              </ui-menu-group>
              <ui-divider spacing="sm" />
              <ui-menu-group label="Planlama">
                <ui-menu-item prefix-icon="bullseye">
                  Goals
                </ui-menu-item>
                <ui-menu-item prefix-icon="wallet">
                  Budget
                </ui-menu-item>
                <ui-menu-item prefix-icon="chart-column">
                  Reports
                </ui-menu-item>
                <ui-menu-item prefix-icon="file-lines">
                  Documents
                </ui-menu-item>
              </ui-menu-group>
            </ui-menu-nav>
          </ui-menu>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Codespaces" description="Your workspaces in the cloud"
          header-divider>
          <template #toolbar>
            <ui-segment-group v-model="codespaceMode" aria-label="Workspace type">
              <ui-segment value="cloud" label="Codespaces" />
              <ui-segment value="local" label="Local" />
            </ui-segment-group>
          </template>
          <template #append>
            <ui-button variant="solid" color="primary" cubed prefix-icon="plus" aria-label="Create codespace" />
            <ui-button variant="outline" color="info" cubed prefix-icon="terminal" aria-label="Open in terminal" />
          </template>

          <ui-empty icon="server" title="No codespaces"
            description="You don't have any codespaces with this repository checked out">
            <ui-button rounded>Create Codespace</ui-button>
            <ui-button variant="link" color="secondary" size="sm"
              class="text-muted-foreground underline decoration-muted-foreground/60 underline-offset-2 hover:text-foreground">
              Learn more about codespaces
            </ui-button>
          </ui-empty>

          <template #footer>
            <div class="flex w-full min-w-0 flex-col items-stretch gap-3">
              <ui-divider spacing="none" class="!my-0 w-full min-w-0 shrink-0 self-stretch" />
              <p class="m-0 text-left text-xs leading-4 text-muted-foreground">
                Codespace usage for this repository is paid for by shadcn.
              </p>
            </div>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Etkinlik oluştur"
          description="Yeni bir konser veya lansman etkinliği planlayın.">
          <form class="flex flex-col gap-6">
            <ui-form-row label="Etkinlik adı" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="eventTitle"
                placeholder="Örn. Akustik gece — İstanbul" />
            </ui-form-row>

            <ui-form-row label="Ek işlemler">
              <div class="flex flex-wrap items-center gap-3">
                <ui-dropdown v-model:open="overlayMenuOpen" placement="bottom-start" :items="overlayMenuItems"
                  @select="onOverlayMenuSelect">
                  <template #trigger="{ toggle, open }">
                    <ui-button variant="outline" color="primary" cubed prefix-icon="ellipsis"
                      :aria-expanded="open ? 'true' : 'false'" aria-haspopup="menu" aria-label="Diğer seçenekler"
                      @click="toggle" />
                  </template>
                </ui-dropdown>
                <span v-if="overlayLastPick" class="text-sm text-muted-foreground">Seçilen: {{ overlayLastPick }}</span>
              </div>
            </ui-form-row>

            <ui-divider />

            <ui-form-row label="Para birimi" v-slot="{ controlId, descriptionId }">
              <ui-select :id="controlId" :aria-describedby="descriptionId" v-model="demoOverlaySelect"
                placeholder="Para birimi" :options="currencyOptions" />
            </ui-form-row>

            <div class="grid gap-4 sm:grid-cols-2">
              <ui-form-row label="Tarih" v-slot="{ controlId }">
                <ui-date-picker :id="controlId" v-model="demoOverlayDate" />
              </ui-form-row>
              <ui-form-row label="Saat" v-slot="{ controlId }">
                <ui-time-picker :id="controlId" v-model="demoOverlayTime" :step-minutes="15" />
              </ui-form-row>
            </div>

            <ui-form-row label="Şehir" v-slot="{ controlId, descriptionId }">
              <ui-select :id="controlId" :aria-describedby="descriptionId" v-model="demoFilterableCity" filterable
                placeholder="Şehir seçin" filter-placeholder="Şehir ara…" :options="cityOptions" aria-label="Şehir" />
            </ui-form-row>

            <ui-form-row label="Bilet notu" description="Katılımcılara gösterilecek kısa bilgi.">
              <ui-popover v-model:open="rawPopoverOpen" placement="bottom-start">
                <template #trigger="{ toggle }">
                  <ui-button variant="outline" color="primary" size="sm" type="button" @click="toggle">
                    Not ekle
                  </ui-button>
                </template>
                <template #content="{ close }">
                  <div class="max-w-xs space-y-3 p-3 text-sm">
                    <p class="m-0 text-muted-foreground">
                      Kapı açılış 19:00; kimlik zorunludur.
                    </p>
                    <ui-button size="sm" type="button" @click="close">
                      Tamam
                    </ui-button>
                  </div>
                </template>
              </ui-popover>
            </ui-form-row>

            <ui-form-row label="Onay diyalogları">
              <div class="flex min-w-0 flex-col gap-4">
                <div class="flex flex-wrap items-center gap-2">
                  <ui-button variant="outline" color="primary" size="sm" type="button"
                    @click="demoDialogStandardOpen = true">
                    Etkinlik özeti
                  </ui-button>
                  <ui-button variant="outline" color="primary" size="sm" type="button"
                    @click="demoDialogCompactOpen = true">
                    Taslağı sil
                  </ui-button>
                  <ui-button variant="outline" color="primary" size="sm" type="button"
                    @click="demoDialogRichOpen = true">
                    Rapor dışa aktar
                  </ui-button>
                </div>

                <ui-dialog v-model:open="demoDialogStandardOpen" title="Etkinlik özeti"
                  description="Yayınlamadan önce bilgileri kontrol edin." header-divider>
                  <p class="ui-text-default m-0">
                    {{ eventTitle || 'Başlıksız etkinlik' }} — {{ demoOverlayDate }} {{ demoOverlayTime }}
                  </p>
                  <template #footer>
                    <ui-button variant="outline" color="secondary" size="sm" type="button"
                      @click="demoDialogStandardOpen = false">
                      Vazgeç
                    </ui-button>
                    <ui-button size="sm" type="button" @click="demoDialogStandardOpen = false">
                      Yayınla
                    </ui-button>
                  </template>
                </ui-dialog>

                <ui-dialog v-model:open="demoDialogCompactOpen" max-width="sm" title="Taslağı sil"
                  description="Bu etkinlik taslağı kalıcı olarak silinecek.">
                  <template #footer>
                    <ui-button variant="outline" color="secondary" size="sm" type="button"
                      @click="demoDialogCompactOpen = false">
                      İptal
                    </ui-button>
                    <ui-button size="sm" color="warning" type="button" @click="demoDialogCompactOpen = false">
                      Sil
                    </ui-button>
                  </template>
                </ui-dialog>

                <ui-dialog v-model:open="demoDialogRichOpen" title="Katılım raporu"
                  description="Dışa aktarılacak tarih aralığını seçin." icon="file-export" header-divider
                  max-width="xl">
                  <template #toolbar>
                    <div class="flex flex-wrap items-center justify-end gap-2">
                      <ui-segment-group v-model="demoDialogExportRange" :block="false" aria-label="Tarih aralığı">
                        <ui-segment value="7d" label="7 gün" />
                        <ui-segment value="30d" label="30 gün" />
                        <ui-segment value="90d" label="90 gün" />
                      </ui-segment-group>
                    </div>
                  </template>
                  <p class="ui-text-default m-0">
                    Seçilen aralık için bilet satışları ve giriş listesi PDF olarak indirilir.
                  </p>
                  <template #footer>
                    <ui-button variant="outline" color="secondary" size="sm" type="button"
                      @click="demoDialogRichOpen = false">
                      Kapat
                    </ui-button>
                    <ui-button size="sm" type="button" @click="demoDialogRichOpen = false">
                      Dışa aktar
                    </ui-button>
                  </template>
                </ui-dialog>
              </div>
            </ui-form-row>

            <ui-button type="button" fulled rounded @click="toastUi.success({ title: 'Etkinlik kaydedildi' })">
              Etkinliği kaydet
            </ui-button>
          </form>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Contributors">
          <template #append>
            <ui-badge variant="secondary">312</ui-badge>
          </template>
          <div class="grid grid-cols-4 gap-2 sm:grid-cols-8">
            <ui-avatar v-for="(a, i) in contributorAvatars" :key="i" :src="a.src" :alt="a.alt" size="md" ring />
          </div>
          <template #footer>
            <div class="flex w-full min-w-0 justify-start">
              <ui-button variant="link" color="secondary" size="sm"
                class="px-0 underline decoration-muted-foreground/60 underline-offset-4 hover:text-foreground">
                + 810 contributors
              </ui-button>
            </div>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Ship faster & safer with Vercel Agent"
          description="Your use is subject to fair use limits. Enable to automate reviews and triage.">
          <div class="flex flex-col gap-5">
            <ui-list density="relaxed">
              <ui-list-item prefix-icon="check">
                <p class="m-0">
                  <span class="font-semibold text-foreground">Code reviews</span>
                  <span class="text-muted-foreground"> in GitHub with context from your codebase and deployment
                    history.</span>
                </p>
              </ui-list-item>
              <ui-list-item prefix-icon="check">
                <p class="m-0 text-muted-foreground">
                  Catch <span class="font-semibold text-foreground">hard-to-find</span> issues before they reach
                  production.
                </p>
              </ui-list-item>
              <ui-list-item prefix-icon="check">
                <div class="flex flex-col gap-2">
                  <p class="m-0 text-muted-foreground">
                    Route incidents to the right owner with suggested runbooks.
                  </p>
                  <span
                    class="inline-flex w-fit items-center rounded-full bg-success px-2.5 py-0.5 text-xs font-medium text-success-foreground">
                    Requires Observability Plus
                  </span>
                </div>
              </ui-list-item>
            </ui-list>
            <div class="rounded-xl border border-border bg-muted/20 px-4 py-3 text-sm leading-5 text-muted-foreground">
              Pro teams get $100 in Vercel Agent trial credit when they enable this feature during the promotional
              window.
            </div>
          </div>
          <template #footer>
            <ui-button variant="outline" color="primary" rounded>
              Cancel
            </ui-button>
            <ui-button rounded>
              Enable with $100 credits
            </ui-button>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" :border="true">
          <template #header>
            <div class="flex w-full min-w-0 items-start gap-3">
              <ui-skeleton variant="circle" class="h-12 w-12 shrink-0" />
              <div class="min-w-0 flex-1 space-y-2 pt-0.5">
                <ui-skeleton variant="line" class="h-4 w-[72%]" />
                <ui-skeleton variant="line" class="h-3 w-[44%]" />
              </div>
            </div>
          </template>
          <div class="flex flex-col gap-3">
            <ui-skeleton variant="line" class="h-3 w-full" />
            <ui-skeleton variant="line" class="h-3 w-full" />
            <ui-skeleton variant="line" class="h-3 w-[92%]" />
          </div>
          <template #footer>
            <div class="flex w-full flex-wrap gap-2">
              <ui-skeleton variant="pill" class="h-9 w-24" />
              <ui-skeleton variant="pill" class="h-9 w-36" />
            </div>
          </template>
        </ui-card>

        <ui-card
          class="mb-8 break-inside-avoid w-full"
          title="Skeleton loading"
          description=":loading + default slot — içerik ↔ iskelet geçişi bileşen içinde."
          :border="true"
        >
          <div class="mb-4 flex flex-wrap gap-2">
            <ui-button
              size="sm"
              :variant="demoSkeletonLoading ? 'solid' : 'outline'"
              @click="demoSkeletonLoading = true"
            >
              Loading
            </ui-button>
            <ui-button
              size="sm"
              :variant="!demoSkeletonLoading ? 'solid' : 'outline'"
              @click="demoSkeletonLoading = false"
            >
              Ready
            </ui-button>
          </div>
          <ui-skeleton
            :loading="demoSkeletonLoading"
            variant="block"
            class="min-h-24 w-full"
          >
            <p class="m-0 text-sm text-foreground">
              Gerçek içerik — yükleme bittiğinde yumuşak geçişle görünür.
            </p>
          </ui-skeleton>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Payout Threshold"
          description="Set the minimum balance required before a payout is triggered.">
          <template #actions>
            <ui-button color="secondary" cubed prefix-icon="xmark" aria-label="Close" />
          </template>

          <div class="flex flex-col">
            <ui-form-row label="Preferred Currency" v-slot="{ controlId, descriptionId }">
              <ui-select :id="controlId" :aria-describedby="descriptionId" v-model="payoutCurrency"
                :options="currencyOptions" />
            </ui-form-row>

            <ui-divider />

            <ui-slider v-model="payoutAmount" label="Minimum Payout Amount" :min="payoutMin" :max="payoutMax" :step="10"
              :value-text="payoutFormatted" min-label="$50 (MIN)" max-label="$10,000 (MAX)"
              aria-label="Minimum payout amount" />

            <ui-divider />

            <ui-form-row label="Notes" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="payoutNotes" multiline :rows="4"
                placeholder="Add any notes for this payout configuration…" />
            </ui-form-row>
          </div>

          <template #footer>
            <ui-button fulled>
              Save Threshold
            </ui-button>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Preferences"
          description="Manage your account settings and notifications.">
          <template #actions>
            <ui-button color="secondary" cubed prefix-icon="xmark" aria-label="Close" />
          </template>

          <div class="flex flex-col">
            <ui-form-row label="Default Currency" v-slot="{ controlId, descriptionId }">
              <ui-select :id="controlId" :aria-describedby="descriptionId" v-model="prefsCurrency"
                :options="currencyOptions" />
            </ui-form-row>

            <ui-divider />

            <ui-form-row label="Public Statistics"
              description="Allow others to see your total stream count and listening activity." direction="horizontal"
              v-slot="{ controlId, descriptionId }">
              <ui-switch :id="controlId" :aria-describedby="descriptionId" v-model="prefsPublicStats" />
            </ui-form-row>

            <ui-divider />

            <ui-form-row label="Email Notifications" description="Monthly royalty reports and distribution updates."
              direction="horizontal" v-slot="{ controlId, descriptionId }">
              <ui-switch :id="controlId" :aria-describedby="descriptionId" v-model="prefsEmailNotif" />
            </ui-form-row>
          </div>

          <template #footer>
            <div class="flex w-full min-w-0 flex-wrap items-center justify-between gap-3">
              <ui-button variant="outline" color="primary" rounded>
                Reset
              </ui-button>
              <ui-button rounded>
                Save Preferences
              </ui-button>
            </div>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Social Links">
          <div class="flex flex-col gap-6">
            <ui-form-row label="Spotify Artist URL" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="socialSpotify" class="rounded-full">
                <template #prepend>
                  <ui-icon name="spotify" type="brands" size="sm" />
                </template>
              </ui-input>
            </ui-form-row>

            <ui-form-row label="Instagram Handle" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="socialInstagram"
                class="rounded-full">
                <template #prepend>
                  <ui-icon name="instagram" type="brands" size="sm" />
                </template>
              </ui-input>
            </ui-form-row>

            <ui-form-row label="SoundCloud URL" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="socialSoundcloud"
                class="rounded-full" placeholder="soundcloud.com/username">
                <template #prepend>
                  <ui-icon name="soundcloud" type="brands" size="sm" />
                </template>
              </ui-input>
            </ui-form-row>

            <ui-form-row label="Website" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="socialWebsite" class="rounded-full"
                placeholder="https://yoursite.com">
                <template #prepend>
                  <ui-icon name="globe" size="sm" />
                </template>
              </ui-input>
            </ui-form-row>
          </div>

          <template #footer>
            <ui-button color="secondary" rounded>
              Discard
            </ui-button>
            <ui-button rounded>
              Save Changes
            </ui-button>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" description="Manage your payout preferences and settings.">
          <template #actions>
            <ui-button color="secondary" cubed prefix-icon="xmark" aria-label="Close" />
          </template>

          <div class="flex flex-col gap-5">
            <ui-form-row label="Account Holder Name" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="payoutPrefsAccount"
                class="rounded-full" />
            </ui-form-row>

            <ui-radio-group v-model="payoutPrefsReceiving" variant="button" aria-label="Receiving method">
              <ui-radio value="bank" label="Bank Transfer" description="SWIFT / IBAN" />
              <ui-radio value="paypal" label="PayPal" description="Instant Payout" />
            </ui-radio-group>

            <ui-form-row label="IBAN / Account Number" v-slot="{ controlId, descriptionId }">
              <ui-input :id="controlId" :aria-describedby="descriptionId" v-model="payoutPrefsIban" class="rounded-full"
                placeholder="TR00 0000 0000 0000 0000 0000 00" />
            </ui-form-row>
          </div>

          <template #footer>
            <ui-button color="secondary" fulled rounded>
              Save Payout Settings
            </ui-button>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Notifications"
          description="Choose what you want to be notified about.">
          <div class="flex flex-col gap-4">
            <ui-checkbox v-model="notifSelectAll" label="Select all" />
            <ui-checkbox-group v-model="notifSelected" variant="list" aria-label="Notification types">
              <ui-checkbox value="transaction" label="Transaction alerts"
                description="Deposits, withdrawals, and transfers." />
              <ui-checkbox value="security" label="Security alerts" description="Login attempts and account changes." />
              <ui-checkbox value="goal" label="Goal milestones" description="Updates at 25%, 50%, 75%, and 100%." />
              <ui-checkbox value="market" label="Market updates"
                description="Daily portfolio summary and price alerts." />
            </ui-checkbox-group>
          </div>

          <template #footer>
            <ui-button fulled rounded>
              Save Preferences
            </ui-button>
          </template>
        </ui-card>

        <ui-card class="mb-8 break-inside-avoid w-full" title="Distribute Track"
          description="Upload your first master to start reaching listeners on Spotify, Apple Music, and more.">
          <ui-empty icon="plus" title="Distribute Track"
            description="Upload your first master to start reaching listeners on Spotify, Apple Music, and more.">
            <ui-button rounded>
              Create Release
            </ui-button>
          </ui-empty>
        </ui-card>
      </div>
    </main>

    <ui-toast />
    <ui-confirm-dialog />
  </div>
</template>
