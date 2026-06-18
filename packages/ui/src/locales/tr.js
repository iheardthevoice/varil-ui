/**
 * Varsayılan Türkçe metinler (@ui/lib bileşenleri).
 * İleride `en.js` vb. eklenebilir; `createI18n` messages ile birleştirilir.
 */
export default {
  ui: {
    button: {
      /** Yükleme sırasında ekran okuyucu / varsayılan `loading-text` */
      loading: 'Yükleniyor',
    },
    icon: {
      /** `show-accessible-name` açıkken `aria-label` (name = ikon adı, fa- öneki yok) */
      accessible: '{name} ikon',
    },
    alert: {
      /** Alert / Toast kapat düğmesi */
      dismiss: 'Kapat',
    },
    dialog: {
      close: 'Kapat',
    },
    confirm: {
      ok: 'Tamam',
      cancel: 'İptal',
      /** Başlık yokken diyalog erişilebilir adı */
      fallbackAria: 'Onay',
    },
    tag: {
      /** Tag kapat düğmesi `aria-label` */
      remove: 'Etiketi kaldır',
    },
    phone: {
      countryAria: 'Ülke kodu',
      placeholder: '5XX XXX XX XX',
    },
    password: {
      show: 'Şifreyi göster',
      hide: 'Şifreyi gizle',
      strength: {
        weak: 'Zayıf',
        fair: 'Orta',
        good: 'İyi',
        strong: 'Güçlü',
      },
    },
    pin: {
      ariaLabel: 'Doğrulama kodu',
      cell: '{n}. hane, toplam {total}',
    },
    progress: {
      ariaLabel: 'İlerleme',
    },
    select: {
      placeholder: 'Seçiniz',
      filterPlaceholder: 'Ara…',
      noResults: 'Sonuç bulunamadı',
      empty: 'Seçenek yok',
      loading: 'Yükleniyor…',
      clear: 'Seçimi temizle',
    },
    colorPicker: {
      triggerPlaceholder: 'Renk seçin',
      popoverTitle: 'Renk paleti',
      clear: 'Temizle',
      customHex: 'Özel renk (hex)',
    },
    iconPicker: {
      triggerPlaceholder: 'İkon seçin',
      popoverTitle: 'İkonlar',
      clear: 'Temizle',
      searchPlaceholder: 'İkon ara…',
      noResults: 'Sonuç bulunamadı',
    },
    datePicker: {
      today: 'Bugün',
      yesterday: 'Dün',
    },
    dateRangePicker: {
      placeholder: 'Tarih aralığı seçin',
      selectEnd: 'Bitiş tarihini seçin',
      prevMonth: 'Önceki ay',
      nextMonth: 'Sonraki ay',
      quickAria: 'Hızlı tarih aralığı',
      today: 'Bugün',
      yesterday: 'Dün',
      thisMonth: 'Bu ay ({month})',
      lastMonth: 'Geçen ay ({month})',
    },
    timePicker: {
      placeholder: 'Saat seçin',
      hourAria: 'Saat',
      minuteAria: 'Dakika',
    },
    photo: {
      fallbackAlt: 'Görsel',
      previewAria: 'Görsel önizleme',
      prev: 'Önceki görsel',
      next: 'Sonraki görsel',
      counter: '{current} / {total}',
    },
    photos: {
      more: '+{count}',
    },
  },
}
