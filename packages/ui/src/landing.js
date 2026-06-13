import ActionGroup from './components/ActionGroup.vue'
import Alert from './components/Alert.vue'
import Badge from './components/Badge.vue'
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import DatePicker from './components/DatePicker.vue'
import Dialog from './components/Dialog.vue'
import Empty from './components/Empty.vue'
import FormRow from './components/FormRow.vue'
import Icon from './components/Icon.vue'
import Input from './components/Input.vue'
import Phone from './components/Phone.vue'
import Popover from './components/Popover.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Select from './components/Select.vue'
import Skeleton from './components/Skeleton.vue'
import TabList from './components/TabList.vue'
import Tabs from './components/Tabs.vue'
import TabTrigger from './components/TabTrigger.vue'
import en from './locales/en.js'
import tr from './locales/tr.js'
import { applyUiTheme } from './theme/apply-theme.js'

export { applyUiTheme, mergeUiTheme } from './theme/apply-theme.js'

const LOCALE_PACKS = {
  en,
  tr,
}

const GLOBAL_COMPONENTS = [
  ['ui-action-group', ActionGroup],
  ['ui-alert', Alert],
  ['ui-badge', Badge],
  ['ui-button', Button],
  ['ui-card', Card],
  ['ui-date-picker', DatePicker],
  ['ui-dialog', Dialog],
  ['ui-empty', Empty],
  ['ui-form-row', FormRow],
  ['ui-icon', Icon],
  ['ui-input', Input],
  ['ui-phone', Phone],
  ['ui-popover', Popover],
  ['ui-radio', Radio],
  ['ui-radio-group', RadioGroup],
  ['ui-select', Select],
  ['ui-skeleton', Skeleton],
  ['ui-tab-list', TabList],
  ['ui-tabs', Tabs],
  ['ui-tab-trigger', TabTrigger],
]

/**
 * @typedef {import('./theme/apply-theme.js').UiThemeConfig} UiThemeConfig
 */

/**
 * @typedef {object} UiLibInstallOptions
 * @property {import('vue-i18n').I18n} i18n
 * @property {string} [locale]
 * @property {string[]} [locales]
 * @property {UiThemeConfig} [theme]
 */

/**
 * Landing-only Vue plugin: registers the subset of `ui-*` components used on varilbar.com.
 * @param {import('vue').App} app
 * @param {UiLibInstallOptions} options
 */
function install(app, options = {}) {
  const { i18n, locale, locales, theme } = options

  if (theme) {
    applyUiTheme(theme)
  }

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
      }
    }
  }

  for (const [name, component] of GLOBAL_COMPONENTS) {
    app.component(name, component)
  }
}

export default {
  install,
}
