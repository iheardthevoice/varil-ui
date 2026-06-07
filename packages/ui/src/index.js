import ActionGroup from './components/ActionGroup.vue'
import Alert from './components/Alert.vue'
import Avatar from './components/Avatar.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import ColorPicker from './components/ColorPicker.vue'
import CurrencyInput from './components/CurrencyInput.vue'
import Checkbox from './components/Checkbox.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import ConfirmDialog from './components/ConfirmDialog.vue'
import DatePicker from './components/DatePicker.vue'
import DateRangePicker from './components/DateRangePicker.vue'
import Dialog from './components/Dialog.vue'
import Divider from './components/Divider.vue'
import Dropdown from './components/Dropdown.vue'
import Empty from './components/Empty.vue'
import Field from './components/Field.vue'
import File from './components/File.vue'
import FormRow from './components/FormRow.vue'
import Icon from './components/Icon.vue'
import Input from './components/Input.vue'
import Password from './components/Password.vue'
import Phone from './components/Phone.vue'
import Pin from './components/Pin.vue'
import List from './components/List.vue'
import ListItem from './components/ListItem.vue'
import Popover from './components/Popover.vue'
import Progress from './components/Progress.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Select from './components/Select.vue'
import Menu from './components/Menu.vue'
import MenuGroup from './components/MenuGroup.vue'
import MenuItem from './components/MenuItem.vue'
import MenuNav from './components/MenuNav.vue'
import Segment from './components/Segment.vue'
import SegmentGroup from './components/SegmentGroup.vue'
import Stepper from './components/Stepper.vue'
import Skeleton from './components/Skeleton.vue'
import Slider from './components/Slider.vue'
import Switch from './components/Switch.vue'
import Table from './components/Table.vue'
import TableBody from './components/TableBody.vue'
import TableCell from './components/TableCell.vue'
import TableHead from './components/TableHead.vue'
import TableHeader from './components/TableHeader.vue'
import TablePagination from './components/TablePagination.vue'
import TableRow from './components/TableRow.vue'
import Tag from './components/Tag.vue'
import TabList from './components/TabList.vue'
import TabPanel from './components/TabPanel.vue'
import Tabs from './components/Tabs.vue'
import TabTrigger from './components/TabTrigger.vue'
import TimePicker from './components/TimePicker.vue'
import Toast from './components/Toast.vue'
import Tooltip from './components/Tooltip.vue'
import Photo from './components/Photo.vue'
import Photos from './components/Photos.vue'
import en from './locales/en.js'
import tr from './locales/tr.js'

export { pushToast, dismissToast, clearToasts } from './toast-queue.js'
export { requestConfirm } from './confirm-state.js'
export {
  resolveCurrencyCode,
  getCurrencySymbol,
  formatCurrencyAmount,
  sanitizeMoneyInput,
} from './utils/currency.js'

export { useToast } from './composables/useToast.js'
export { useDialog } from './composables/useDialog.js'
export { useConfirm } from './composables/useConfirm.js'

export {
  ActionGroup,
  Alert,
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  CheckboxGroup,
  ColorPicker,
  CurrencyInput,
  ConfirmDialog,
  DatePicker,
  DateRangePicker,
  Dialog,
  Divider,
  Dropdown,
  Empty,
  Field,
  File,
  FormRow,
  Icon,
  Input,
  Password,
  Phone,
  Pin,
  List,
  ListItem,
  Popover,
  Progress,
  Radio,
  RadioGroup,
  Select,
  Menu,
  MenuGroup,
  MenuItem,
  MenuNav,
  Segment,
  SegmentGroup,
  Skeleton,
  Slider,
  Stepper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TablePagination,
  TableRow,
  Tag,
  TabList,
  TabPanel,
  Tabs,
  TabTrigger,
  TimePicker,
  Toast,
  Tooltip,
  Photo,
  Photos,
}

/** `LOCALE_PACKS` anahtarları — `getUiMessages` / `app.use(UiLib, { locales })` */
const LOCALE_PACKS = {
  en,
  tr,
}

/**
 * Kütüphane UI mesajlarını verilen locale koduna göre döndürür (manuel `mergeLocaleMessage` için).
 * @param {string} [locale='tr']
 */
export function getUiMessages(locale = 'tr') {
  return LOCALE_PACKS[locale] ?? LOCALE_PACKS.tr
}

/** @deprecated Tercih: `getUiMessages('tr')` veya `app.use(UiLib, { i18n, locale: 'tr' })` */
export const uiMessagesTr = tr

/** Global tag names (`<ui-button>`, `<ui-card>`, …). */
const GLOBAL_COMPONENTS = [
  ['ui-action-group', ActionGroup],
  ['ui-alert', Alert],
  ['ui-avatar', Avatar],
  ['ui-badge', Badge],
  ['ui-button', Button],
  ['ui-card', Card],
  ['ui-checkbox', Checkbox],
  ['ui-checkbox-group', CheckboxGroup],
  ['ui-color-picker', ColorPicker],
  ['ui-currency-input', CurrencyInput],
  ['ui-confirm-dialog', ConfirmDialog],
  ['ui-date-picker', DatePicker],
  ['ui-date-range-picker', DateRangePicker],
  ['ui-dialog', Dialog],
  ['ui-divider', Divider],
  ['ui-dropdown', Dropdown],
  ['ui-empty', Empty],
  ['ui-field', Field],
  ['ui-file', File],
  ['ui-form-row', FormRow],
  ['ui-icon', Icon],
  ['ui-input', Input],
  ['ui-password', Password],
  ['ui-phone', Phone],
  ['ui-pin', Pin],
  ['ui-list', List],
  ['ui-list-item', ListItem],
  ['ui-popover', Popover],
  ['ui-progress', Progress],
  ['ui-radio', Radio],
  ['ui-radio-group', RadioGroup],
  ['ui-select', Select],
  ['ui-menu', Menu],
  ['ui-menu-group', MenuGroup],
  ['ui-menu-item', MenuItem],
  ['ui-menu-nav', MenuNav],
  ['ui-segment', Segment],
  ['ui-segment-group', SegmentGroup],
  ['ui-skeleton', Skeleton],
  ['ui-slider', Slider],
  ['ui-stepper', Stepper],
  ['ui-switch', Switch],
  ['ui-table', Table],
  ['ui-table-body', TableBody],
  ['ui-table-cell', TableCell],
  ['ui-table-head', TableHead],
  ['ui-table-header', TableHeader],
  ['ui-table-pagination', TablePagination],
  ['ui-table-row', TableRow],
  ['ui-tag', Tag],
  ['ui-tab-list', TabList],
  ['ui-tab-panel', TabPanel],
  ['ui-tabs', Tabs],
  ['ui-tab-trigger', TabTrigger],
  ['ui-time-picker', TimePicker],
  ['ui-tooltip', Tooltip],
  ['ui-toast', Toast],
  ['ui-photo', Photo],
  ['ui-photos', Photos],
]

/**
 * @typedef {object} UiLibInstallOptions
 * @property {import('vue-i18n').I18n} i18n vue-i18n örneği (zorunlu — UI metinleri buraya yazılır)
 * @property {string} [locale] Birleştirilecek paket kodu (`LOCALE_PACKS` anahtarı). Verilmezse `i18n.global.locale` kullanılır.
 * @property {string[]} [locales] Birden fazla dil paketini aynı anda birleştir (örn. `['tr','en']`). Verilirse `locale` yok sayılır.
 */

/**
 * Vue plugin: `ui-*` bileşenlerini kaydeder; seçilen dil paket(ler)ini i18n’e `mergeLocaleMessage` ile ekler.
 * @param {import('vue').App} app
 * @param {UiLibInstallOptions} options
 */
function install(app, options = {}) {
  const { i18n, locale, locales } = options

  if (i18n?.global?.mergeLocaleMessage) {
    const list =
      locales ??
      (locale != null
        ? [locale]
        : [
            typeof i18n.global.locale === 'string'
              ? i18n.global.locale
              : i18n.global.locale?.value ?? 'tr',
          ])

    for (const loc of list) {
      const pack = LOCALE_PACKS[loc]
      if (pack) {
        i18n.global.mergeLocaleMessage(loc, pack)
      } else if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
        console.warn(`[@ui/lib] Bilinmeyen locale paketi: "${loc}". Mevcut: ${Object.keys(LOCALE_PACKS).join(', ')}`)
      }
    }
  } else if (typeof import.meta !== 'undefined' && import.meta.env?.DEV) {
    console.warn(
      '[@ui/lib] app.use(UiLib, { i18n, locale: "tr" }) şeklinde i18n ve locale verin; aksi halde $t anahtarları çözülmez.',
    )
  }

  for (const [name, component] of GLOBAL_COMPONENTS) {
    app.component(name, component)
  }
}

export default {
  install,
}
