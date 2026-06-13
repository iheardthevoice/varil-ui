import { m as g, t as p, o as m, A as b, a as f, B as d, b as T, C as L, D as h, c as A, E as P, F as k, I as C, e as S, P as y, f as B, R as E, g as O, S as R, h as v, T as D, j as G, i as I } from "./apply-theme-CVUYw3KK.js";
import { p as j } from "./apply-theme-CVUYw3KK.js";
const M = {
  en: m,
  tr: p
}, w = [
  ["ui-action-group", b],
  ["ui-alert", f],
  ["ui-badge", d],
  ["ui-button", T],
  ["ui-card", L],
  ["ui-date-picker", h],
  ["ui-dialog", A],
  ["ui-empty", P],
  ["ui-form-row", k],
  ["ui-icon", C],
  ["ui-input", S],
  ["ui-phone", y],
  ["ui-popover", B],
  ["ui-radio", E],
  ["ui-radio-group", O],
  ["ui-select", R],
  ["ui-skeleton", v],
  ["ui-tab-list", D],
  ["ui-tabs", G],
  ["ui-tab-trigger", I]
];
function x(n, u = {}) {
  var t, l;
  const { i18n: a, locale: i, locales: c, theme: s } = u;
  if (s && g(s), (t = a == null ? void 0 : a.global) != null && t.mergeLocaleMessage) {
    const e = c ?? (i != null ? [i] : [
      typeof a.global.locale == "string" ? a.global.locale : ((l = a.global.locale) == null ? void 0 : l.value) ?? "tr"
    ]);
    for (const o of e) {
      const r = M[o];
      r && a.global.mergeLocaleMessage(o, r);
    }
  }
  for (const [e, o] of w)
    n.component(e, o);
}
const N = {
  install: x
};
export {
  g as applyUiTheme,
  N as default,
  j as mergeUiTheme
};
//# sourceMappingURL=landing.js.map
