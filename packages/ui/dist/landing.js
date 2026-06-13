import { l as g, t as p, n as b, A as f, a as m, B as d, b as T, C as L, D as h, c as A, F as k, I as C, e as P, P as S, R as B, f as O, S as R, g as D, T as G, i as I, h as M } from "./apply-theme-Gyy2vWE9.js";
import { p as _ } from "./apply-theme-Gyy2vWE9.js";
const w = {
  en: b,
  tr: p
}, x = [
  ["ui-action-group", f],
  ["ui-alert", m],
  ["ui-badge", d],
  ["ui-button", T],
  ["ui-card", L],
  ["ui-date-picker", h],
  ["ui-dialog", A],
  ["ui-form-row", k],
  ["ui-icon", C],
  ["ui-input", P],
  ["ui-phone", S],
  ["ui-radio", B],
  ["ui-radio-group", O],
  ["ui-select", R],
  ["ui-skeleton", D],
  ["ui-tab-list", G],
  ["ui-tabs", I],
  ["ui-tab-trigger", M]
];
function y(r, c = {}) {
  var t, l;
  const { i18n: a, locale: i, locales: u, theme: s } = c;
  if (s && g(s), (t = a == null ? void 0 : a.global) != null && t.mergeLocaleMessage) {
    const e = u ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((l = a.global.locale) == null ? void 0 : l.value) ?? "tr"
    ]);
    for (const o of e) {
      const n = w[o];
      n && a.global.mergeLocaleMessage(o, n);
    }
  }
  for (const [e, o] of x)
    r.component(e, o);
}
const F = {
  install: y
};
export {
  g as applyUiTheme,
  F as default,
  _ as mergeUiTheme
};
//# sourceMappingURL=landing.js.map
