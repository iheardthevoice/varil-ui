import { resolveComponent as b, openBlock as s, createElementBlock as n, normalizeClass as y, renderSlot as w, createBlock as _, createCommentVNode as m, createElementVNode as c, toDisplayString as p, normalizeStyle as M, resolveDynamicComponent as O, mergeProps as S, withCtx as k, createVNode as v, withModifiers as A, createTextVNode as V, Fragment as C, renderList as I, withKeys as le, reactive as Q, normalizeProps as ze, guardReactiveProps as Me, withDirectives as De, vShow as Ee, Teleport as X, TransitionGroup as Oe, Transition as Ce } from "vue";
import { _ as g, n as x, t as z, d as Le, p as Ne, u as Te, m as Be, q as Re, A as Fe, a as Ye, B as He, b as We, C as Ue, D as Ge, c as Ke, E as je, F as qe, I as Ze, e as Qe, P as Xe, f as Je, R as et, g as tt, S as it, h as rt, k as st, T as lt, j as at, i as nt, l as ot } from "./apply-theme-D-laL1ze.js";
import { o as rn, r as sn, s as ln } from "./apply-theme-D-laL1ze.js";
const ut = ["solid", "regular", "brands", "light", "duotone", "thin"], ct = {
  name: "ActionCard",
  props: {
    title: {
      type: String,
      required: !0
    },
    description: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "light",
      validator: (e) => ut.includes(e)
    },
    selected: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    showTrailing: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  computed: {
    hasLeadingSlot() {
      return !!this.$slots.leading;
    },
    showDefaultLeading() {
      return this.icon && !this.hasLeadingSlot;
    }
  }
}, dt = ["disabled"], ht = { class: "ui-action-card__content" }, ft = { class: "ui-action-card__title" }, pt = {
  key: 0,
  class: "ui-action-card__description"
};
function mt(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("button", {
    type: "button",
    class: y(["ui-action-card", { "ui-action-card--selected": r.selected }]),
    disabled: r.disabled,
    onClick: t[0] || (t[0] = (u) => e.$emit("click", u))
  }, [
    w(e.$slots, "leading", {}, () => [
      i.showDefaultLeading ? (s(), _(d, {
        key: 0,
        name: r.icon,
        type: r.iconType,
        size: "md",
        class: "ui-action-card__icon",
        "aria-hidden": "true"
      }, null, 8, ["name", "type"])) : m("", !0)
    ]),
    c("span", ht, [
      c("span", ft, p(r.title), 1),
      r.description ? (s(), n("span", pt, p(r.description), 1)) : m("", !0)
    ]),
    w(e.$slots, "trailing", {}, () => [
      r.showTrailing ? (s(), _(d, {
        key: 0,
        name: "chevron-right",
        type: "light",
        size: "xs",
        class: "ui-action-card__trailing",
        "aria-hidden": "true"
      })) : m("", !0)
    ])
  ], 10, dt);
}
const gt = /* @__PURE__ */ g(ct, [["render", mt]]), bt = {
  name: "ActionCardList",
  props: {
    ariaLabel: {
      type: String,
      default: ""
    },
    maxHeight: {
      type: String,
      default: ""
    }
  },
  computed: {
    listStyle() {
      if (this.maxHeight)
        return { maxHeight: this.maxHeight };
    }
  }
}, yt = ["aria-label"];
function vt(e, t, r, l, a, i) {
  return s(), n("div", {
    class: "ui-action-card-list",
    role: "list",
    "aria-label": r.ariaLabel || void 0,
    style: M(i.listStyle)
  }, [
    w(e.$slots, "default")
  ], 12, yt);
}
const _t = /* @__PURE__ */ g(bt, [["render", vt]]), kt = ["sm", "md", "lg"], ae = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg"
}, ne = Object.freeze({
  A: { bg: "hsla(0, 72%, 52%, 0.18)", fg: "hsl(0, 65%, 48%)" },
  B: { bg: "hsla(25, 88%, 52%, 0.18)", fg: "hsl(25, 75%, 45%)" },
  C: { bg: "hsla(38, 92%, 50%, 0.18)", fg: "hsl(38, 80%, 42%)" },
  D: { bg: "hsla(48, 96%, 48%, 0.18)", fg: "hsl(48, 85%, 40%)" },
  E: { bg: "hsla(58, 90%, 46%, 0.18)", fg: "hsl(58, 78%, 38%)" },
  F: { bg: "hsla(75, 72%, 42%, 0.18)", fg: "hsl(75, 65%, 36%)" },
  G: { bg: "hsla(88, 62%, 42%, 0.18)", fg: "hsl(88, 55%, 36%)" },
  H: { bg: "hsla(100, 58%, 40%, 0.18)", fg: "hsl(100, 52%, 34%)" },
  I: { bg: "hsla(142, 58%, 40%, 0.18)", fg: "hsl(142, 52%, 34%)" },
  J: { bg: "hsla(158, 62%, 38%, 0.18)", fg: "hsl(158, 55%, 32%)" },
  K: { bg: "hsla(168, 64%, 38%, 0.18)", fg: "hsl(168, 58%, 32%)" },
  L: { bg: "hsla(175, 68%, 40%, 0.18)", fg: "hsl(175, 60%, 34%)" },
  M: { bg: "hsla(186, 72%, 42%, 0.18)", fg: "hsl(186, 65%, 36%)" },
  N: { bg: "hsla(198, 76%, 44%, 0.18)", fg: "hsl(198, 68%, 38%)" },
  O: { bg: "hsla(210, 78%, 48%, 0.18)", fg: "hsl(210, 70%, 42%)" },
  P: { bg: "hsla(225, 76%, 52%, 0.18)", fg: "hsl(225, 68%, 46%)" },
  Q: { bg: "hsla(238, 72%, 56%, 0.18)", fg: "hsl(238, 65%, 50%)" },
  R: { bg: "hsla(252, 68%, 58%, 0.18)", fg: "hsl(252, 62%, 52%)" },
  S: { bg: "hsla(268, 64%, 58%, 0.18)", fg: "hsl(268, 58%, 52%)" },
  T: { bg: "hsla(282, 62%, 56%, 0.18)", fg: "hsl(282, 56%, 50%)" },
  U: { bg: "hsla(296, 58%, 54%, 0.18)", fg: "hsl(296, 52%, 48%)" },
  V: { bg: "hsla(310, 62%, 52%, 0.18)", fg: "hsl(310, 56%, 46%)" },
  W: { bg: "hsla(322, 66%, 50%, 0.18)", fg: "hsl(322, 60%, 44%)" },
  X: { bg: "hsla(334, 70%, 50%, 0.18)", fg: "hsl(334, 64%, 44%)" },
  Y: { bg: "hsla(346, 74%, 52%, 0.18)", fg: "hsl(346, 68%, 46%)" },
  Z: { bg: "hsla(358, 78%, 52%, 0.18)", fg: "hsl(358, 72%, 46%)" },
  default: { bg: "hsla(220, 14%, 50%, 0.15)", fg: "hsl(220, 12%, 45%)" }
}), oe = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function wt(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return oe[t] && (t = oe[t]), t >= "A" && t <= "Z" ? t : "default";
}
function xt(e) {
  var l;
  const t = (e || "").trim();
  if (!t) return "?";
  const r = t.split(/\s+/).filter(Boolean);
  if (r.length >= 2) {
    const a = r[0][0] || "", i = r[r.length - 1][0] || "";
    return `${a}${i}`.toLocaleUpperCase("tr-TR");
  }
  return (((l = r[0]) == null ? void 0 : l[0]) || "?").toLocaleUpperCase("tr-TR");
}
const St = {
  name: "Avatar",
  inheritAttrs: !1,
  props: {
    /** Görsel URL; yüklenemezse baş harf yedeği gösterilir. */
    src: {
      type: String,
      default: ""
    },
    /** Tam ad; baş harf ve renk üretimi için birincil kaynak. */
    name: {
      type: String,
      default: ""
    },
    /** `img` alt metni. */
    alt: {
      type: String,
      default: ""
    },
    /** Harf yedek metni (ör. `JD`). Boşsa `name` / `alt` kullanılır. */
    fallback: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => kt.includes(e)
    },
    ring: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  data() {
    return {
      imageFailed: !1
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "span";
    },
    rootClass() {
      return x(
        "ui-avatar",
        ae[this.size] || ae.md,
        this.ring ? "ui-avatar--ring" : "",
        this.interactive ? "ui-avatar--interactive" : "",
        this.showLetterTone ? "ui-avatar--letter" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    },
    rootBind() {
      if (!this.interactive)
        return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    initialsSource() {
      return this.name != null && this.name.trim() !== "" ? this.name.trim() : this.fallback != null && this.fallback.trim() !== "" ? this.fallback.trim() : (this.alt || "").trim();
    },
    displayInitials() {
      return xt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? wt(e[0]) : "default";
    },
    letterColors() {
      return ne[this.colorLetterKey] || ne.default;
    },
    showLetterTone() {
      return (!this.src || this.imageFailed) && this.displayInitials !== "?";
    },
    rootStyle() {
      if (this.showLetterTone)
        return {
          backgroundColor: this.letterColors.bg,
          color: this.letterColors.fg
        };
    },
    resolvedAlt() {
      return this.alt != null && this.alt !== "" ? this.alt : this.initialsSource ? this.initialsSource : this.displayInitials !== "?" ? `Avatar: ${this.displayInitials}` : "Avatar";
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    }
  },
  methods: {
    onRootClick(e) {
      this.interactive && this.$emit("click", e);
    }
  }
}, Ct = ["src", "alt"], Lt = ["role", "aria-label", "aria-hidden"];
function Tt(e, t, r, l, a, i) {
  return s(), _(O(i.rootTag), S({
    type: r.interactive ? "button" : void 0,
    class: i.rootClass,
    style: i.rootStyle
  }, i.rootBind, { onClick: i.onRootClick }), {
    default: k(() => [
      r.src && !a.imageFailed ? (s(), n("img", {
        key: 0,
        src: r.src,
        alt: i.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (d) => a.imageFailed = !0)
      }, null, 40, Ct)) : (s(), n("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, p(i.displayInitials), 9, Lt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const It = /* @__PURE__ */ g(St, [["render", Tt]]), At = [
  "#f87171",
  "#fb923c",
  "#fbbf24",
  "#facc15",
  "#a3e635",
  "#4ade80",
  "#34d399",
  "#2dd4bf",
  "#22d3ee",
  "#38bdf8",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#c084fc",
  "#e879f9",
  "#f472b6",
  "#fb7185",
  "#ef4444",
  "#f97316",
  "#eab308",
  "#84cc16",
  "#22c55e",
  "#10b981",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
  "#ec4899",
  "#f43f5e",
  "#b91c1c",
  "#c2410c",
  "#b45309",
  "#4d7c0f",
  "#15803d",
  "#047857",
  "#0f766e",
  "#0e7490",
  "#0369a1",
  "#1d4ed8",
  "#4338ca",
  "#6d28d9",
  "#7e22ce",
  "#a21caf",
  "#be185d"
], $t = {
  name: "ColorPicker",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    triggerPlaceholder: {
      type: String,
      default: ""
    },
    popoverTitle: {
      type: String,
      default: ""
    },
    clearLabel: {
      type: String,
      default: ""
    },
    customColorLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      presetColors: At
    };
  },
  computed: {
    rootClass() {
      return x(
        "ui-color-picker ui-color-picker--fulled w-full min-w-0",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localColor: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder ? this.triggerPlaceholder : z(this, "ui.colorPicker.triggerPlaceholder", "Pick a color");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle ? this.popoverTitle : z(this, "ui.colorPicker.popoverTitle", "Color palette");
    },
    clearLabelText() {
      return this.clearLabel ? this.clearLabel : z(this, "ui.colorPicker.clear", "Clear");
    },
    customColorLabelText() {
      return this.customColorLabel ? this.customColorLabel : z(this, "ui.colorPicker.customHex", "Custom color (hex)");
    }
  },
  methods: {
    selectColor(e) {
      this.localColor = e;
    },
    clearColor() {
      this.localColor = "", this.$emit("update:modelValue", null), this.popoverOpen = !1;
    },
    normalizeHex() {
      const e = String(this.localColor || "").trim();
      if (!e) return;
      let t = e.startsWith("#") ? e : `#${e}`;
      /^#[0-9A-Fa-f]{3}$/.test(t) && (t = `#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`), /^#[0-9A-Fa-f]{6}$/.test(t) && (this.localColor = t.toUpperCase());
    }
  }
}, Vt = ["disabled", "aria-expanded", "onClick"], Pt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, zt = { class: "ui-select-field-suffix" }, Mt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Dt = { class: "ui-color-picker-panel" }, Et = { class: "ui-color-picker-panel__header" }, Ot = { class: "ui-color-picker-panel__title" }, Nt = { class: "ui-color-picker-swatches" }, Bt = ["title", "onClick"], Rt = { class: "ui-color-picker-custom" }, Ft = { class: "ui-color-picker-panel__title" }, Yt = { class: "ui-color-picker-custom__row" };
function Ht(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button"), o = b("ui-input"), h = b("ui-popover");
  return s(), n("div", {
    class: y(i.rootClass)
  }, [
    v(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => a.popoverOpen = f),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: r.disabled
    }, {
      trigger: k(({ open: f, toggle: L }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": f ? "true" : "false",
          "aria-haspopup": !0,
          onClick: L
        }, [
          c("span", Pt, [
            i.localColor ? (s(), n("span", {
              key: 0,
              class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
              style: M({ backgroundColor: i.localColor })
            }, null, 4)) : (s(), _(d, {
              key: 1,
              name: "palette",
              size: "xs",
              class: "text-muted-foreground"
            }))
          ]),
          c("span", {
            class: y(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
          }, p(i.displayValue), 3),
          c("span", zt, [
            c("span", Mt, [
              v(d, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, Vt)
      ]),
      content: k(() => [
        c("div", Dt, [
          c("div", Et, [
            c("span", Ot, p(i.popoverTitleLabel), 1),
            i.localColor ? (s(), _(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: A(i.clearColor, ["stop"])
            }, {
              default: k(() => [
                V(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ]),
          c("div", Nt, [
            (s(!0), n(C, null, I(a.presetColors, (f) => (s(), n("button", {
              key: f,
              type: "button",
              class: y(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === f }]),
              style: M({ backgroundColor: f }),
              title: f,
              onClick: (L) => i.selectColor(f)
            }, [
              i.localColor === f ? (s(), _(d, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : m("", !0)
            ], 14, Bt))), 128))
          ]),
          c("div", Rt, [
            c("span", Ft, p(i.customColorLabelText), 1),
            c("div", Yt, [
              v(o, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (f) => i.localColor = f),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: M({ backgroundColor: i.localColor || "transparent" }),
                "aria-hidden": "true"
              }, null, 4)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "disabled"])
  ], 2);
}
const Wt = /* @__PURE__ */ g($t, [["render", Ht]]), ue = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, R = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function J(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in R ? t : "TRY";
  const r = String(e).trim();
  if (ue[r])
    return ue[r];
  const l = r.toUpperCase();
  return R[l] ? l : t in R ? t : "TRY";
}
function Ie(e) {
  var r;
  const t = J(e);
  if (R[t])
    return R[t];
  try {
    const a = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((r = a == null ? void 0 : a.value) == null ? void 0 : r.trim()) || t;
  } catch {
    return t;
  }
}
function Ka(e, t, r = "tr-TR") {
  const l = Number(e) || 0, a = J(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: a }).format(l);
  } catch {
    return `${Ie(a)}${l.toFixed(2)}`;
  }
}
function Ut(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const l = t.slice(0, r), a = t.slice(r + 1).replace(/\./g, "");
    t = `${l}.${a}`;
  }
  return t;
}
let ce = 0;
const Gt = ["sm", "md", "lg"], Kt = {
  name: "CurrencyInput",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** ISO veya sembol (TRY, ₺, …); verilmezse `TRY` (seeder varsayılanı). */
    currency: {
      type: String,
      default: "TRY"
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Gt.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "off"
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  data() {
    return ce += 1, { fallbackId: `ui-currency-input-${ce}` };
  },
  computed: {
    displaySymbol() {
      return Ie(this.currency);
    },
    resolvedCurrencyCode() {
      return J(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = Ut(e);
        this.$emit("update:modelValue", t);
      }
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "value",
        "id",
        "disabled",
        "readonly",
        "placeholder",
        "name",
        "autocomplete",
        "currency",
        "size"
      ]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    }
  },
  methods: {
    onBlur(e) {
      this.$emit("blur", e);
    }
  }
}, jt = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function qt(e, t, r, l, a, i) {
  const d = b("ui-input");
  return s(), _(d, S({
    id: i.resolvedId,
    modelValue: i.innerValue,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => i.innerValue = u),
    type: "text",
    inputmode: "decimal",
    class: "w-full",
    size: r.size,
    disabled: r.disabled,
    readonly: r.readonly,
    placeholder: r.placeholder,
    name: r.name,
    autocomplete: r.autocomplete,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onFocus: t[1] || (t[1] = (u) => e.$emit("focus", u)),
    onBlur: i.onBlur
  }), {
    prepend: k(() => [
      c("span", jt, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Zt = /* @__PURE__ */ g(Kt, [["render", qt]]), Qt = {
  name: "Checkbox",
  inject: {
    uiCheckboxGroup: {
      default: null
    }
  },
  props: {
    /** Grup modunda seçenek kimliği. */
    value: {
      type: [String, Number, Boolean],
      default: void 0
    },
    /** Tekil mod: `v-model` boolean. */
    modelValue: {
      type: Boolean,
      default: void 0
    },
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca işaretliyken). */
    highlight: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue"],
  computed: {
    inGroup() {
      return this.uiCheckboxGroup != null;
    },
    isChecked() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue;
        return Array.isArray(e) ? e.some((t) => Object.is(t, this.value)) : !1;
      }
      return !!this.modelValue;
    },
    nativeType() {
      return "checkbox";
    },
    nativeName() {
      return this.inGroup ? this.uiCheckboxGroup.groupName : void 0;
    },
    groupValueString() {
      if (this.inGroup)
        return String(this.value);
    },
    checkboxClasses() {
      return [
        "ui-checkbox",
        `ui-checkbox--${this.inGroup && this.uiCheckboxGroup != null ? this.uiCheckboxGroup.normalizedVariant : "list"}`,
        {
          "ui-checkbox--checked": this.isChecked,
          "ui-checkbox--highlight": this.highlight && this.isChecked
        }
      ];
    }
  },
  methods: {
    onNativeChange(e) {
      if (this.inGroup) {
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, l = Array.isArray(r) ? [...r] : [], a = l.findIndex((i) => Object.is(i, this.value));
        t && a === -1 ? l.push(this.value) : !t && a !== -1 && l.splice(a, 1), this.uiCheckboxGroup.$emit("update:modelValue", l);
      } else
        this.$emit("update:modelValue", e.target.checked);
    },
    toggle() {
      if (this.inGroup) {
        const e = this.uiCheckboxGroup.modelValue, t = Array.isArray(e) ? [...e] : [], r = t.findIndex((l) => Object.is(l, this.value));
        r === -1 ? t.push(this.value) : t.splice(r, 1), this.uiCheckboxGroup.$emit("update:modelValue", t);
      } else
        this.$emit("update:modelValue", !this.modelValue);
    }
  }
}, Xt = ["type", "name", "value", "checked"], Jt = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, ei = { class: "ui-checkbox-body" }, ti = {
  key: 0,
  class: "ui-checkbox-label"
}, ii = {
  key: 1,
  class: "ui-checkbox-description"
};
function ri(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("label", {
    class: y(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = le(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = le(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.onNativeChange && i.onNativeChange(...u))
    }, null, 40, Xt),
    c("span", Jt, [
      i.isChecked ? (s(), _(d, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : m("", !0)
    ]),
    c("span", ei, [
      e.$slots.label || r.label ? (s(), n("span", ti, [
        w(e.$slots, "label", {}, () => [
          V(p(r.label), 1)
        ])
      ])) : m("", !0),
      r.description ? (s(), n("span", ii, p(r.description), 1)) : m("", !0)
    ])
  ], 34);
}
const si = /* @__PURE__ */ g(Qt, [["render", ri]]), li = ["list", "button", "List", "Button"];
let de = 0;
const ai = {
  name: "CheckboxGroup",
  props: {
    /** Seçili değerler dizisi (ilkel karşılaştırma). */
    modelValue: {
      type: Array,
      default: () => []
    },
    /** `list` — dikey liste; `button` — yan yana kart seçenekleri (RadioGroup `button` ile aynı yüzey). */
    variant: {
      type: String,
      default: "list",
      validator: (e) => li.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return de += 1, { groupName: `ui-checkbox-group-${de}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    }
  },
  provide() {
    return {
      uiCheckboxGroup: this
    };
  }
}, ni = ["aria-label"];
function oi(e, t, r, l, a, i) {
  return s(), n("div", {
    class: y(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    w(e.$slots, "default")
  ], 10, ni);
}
const ui = /* @__PURE__ */ g(ai, [["render", oi]]), T = Q({
  open: !1,
  title: "",
  description: "",
  /** Boşsa i18n `ui.confirm.ok` */
  confirmLabel: "",
  /** Boşsa i18n `ui.confirm.cancel` */
  cancelLabel: "",
  destructive: !1,
  /** @type {((value: boolean) => void) | null} */
  _resolve: null
});
function ci(e = {}) {
  return new Promise((t) => {
    T.title = e.title ?? "", T.description = e.description ?? "", T.confirmLabel = e.confirmLabel ?? "", T.cancelLabel = e.cancelLabel ?? "", T.destructive = !!e.destructive, T._resolve = t, T.open = !0;
  });
}
function G(e) {
  const t = T._resolve;
  T.open = !1, T._resolve = null, t && t(!!e);
}
const di = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return T;
    },
    syncOpen: {
      get() {
        return T.open;
      },
      set(e) {
        e ? T.open = !0 : T._resolve ? G(!1) : T.open = !1;
      }
    },
    confirmText() {
      return T.confirmLabel ? T.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return T.cancelLabel ? T.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      G(!0);
    },
    onCancel() {
      G(!1);
    }
  }
};
function hi(e, t, r, l, a, i) {
  const d = b("ui-button"), u = b("ui-dialog");
  return s(), _(u, {
    open: i.syncOpen,
    "onUpdate:open": t[0] || (t[0] = (o) => i.syncOpen = o),
    "stack-layer": "confirm",
    "max-width": "sm",
    title: i.confirmState.title,
    description: i.confirmState.description,
    "header-divider": "",
    "close-on-backdrop": !0,
    "close-on-escape": !0,
    "aria-label": i.confirmState.title || i.fallbackAriaLabel
  }, {
    footer: k(() => [
      v(d, {
        color: "secondary",
        rounded: "",
        onClick: i.onCancel
      }, {
        default: k(() => [
          V(p(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      v(d, {
        rounded: "",
        color: i.confirmState.destructive ? "warning" : "primary",
        onClick: i.onConfirm
      }, {
        default: k(() => [
          V(p(i.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const fi = /* @__PURE__ */ g(di, [["render", hi]]);
let he = 0;
function F(e) {
  return String(e).padStart(2, "0");
}
function E(e) {
  return `${e.getFullYear()}-${F(e.getMonth() + 1)}-${F(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), l = Number(t[2]) - 1, a = Number(t[3]), i = new Date(r, l, a);
  return i.getFullYear() !== r || i.getMonth() !== l || i.getDate() !== a ? null : i;
}
function P(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function K(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function fe(e, t, r, l) {
  const a = `${e}-${F(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let d = `${e}-${F(t + 1)}-${F(i)}`;
  if (r && d > r && (d = r), l && a < l && d < l) return null;
  let u = a;
  return l && u < l && (u = l), P(u, d) > 0 ? null : [u, d];
}
const pi = {
  name: "DateRangePicker",
  inheritAttrs: !1,
  props: {
    /** `[startYmd, endYmd]` */
    modelValue: {
      type: Array,
      default: () => ["", ""]
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    min: {
      type: String,
      default: ""
    },
    max: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    var l, a;
    he += 1;
    const e = he, t = ((l = this.modelValue) == null ? void 0 : l[0]) || "", r = Y(t) || Y((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-daterangepicker-${e}`,
      menuOpen: !1,
      viewYear: r.getFullYear(),
      viewMonth: r.getMonth(),
      pickingStart: "",
      pickingEnd: "",
      hoverYmd: ""
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    popoverWidth() {
      return "min(calc(100vw - 2rem), 50rem)";
    },
    locale() {
      var e;
      return ((e = this.$i18n) == null ? void 0 : e.locale) || "tr";
    },
    startYmd() {
      var e;
      return String(((e = this.modelValue) == null ? void 0 : e[0]) || "").trim();
    },
    endYmd() {
      var e;
      return String(((e = this.modelValue) == null ? void 0 : e[1]) || "").trim();
    },
    resolvedPlaceholder() {
      return this.placeholder ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.dateRangePicker.placeholder") : "Select date range";
    },
    displayText() {
      return !this.startYmd && !this.endYmd ? this.resolvedPlaceholder : this.formatDisplay(this.startYmd, this.endYmd);
    },
    rightView() {
      const e = new Date(this.viewYear, this.viewMonth + 1, 1);
      return { year: e.getFullYear(), month: e.getMonth() };
    },
    minYmd() {
      return this.min ? String(this.min).trim() : "";
    },
    maxYmd() {
      return this.max ? String(this.max).trim() : "";
    },
    resolvedPrevMonthLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.prevMonth") : "Previous month";
    },
    resolvedNextMonthLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.nextMonth") : "Next month";
    },
    resolvedQuickAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.dateRangePicker.quickAria") : "Quick range presets";
    },
    rangeHint() {
      return !this.pickingStart || this.pickingEnd ? "" : typeof this.$t == "function" ? this.$t("ui.dateRangePicker.selectEnd") : "Select end date";
    },
    previewStart() {
      return this.pickingStart || this.startYmd;
    },
    previewEnd() {
      if (this.pickingEnd) return this.pickingEnd;
      if (this.pickingStart && this.hoverYmd) {
        const e = this.pickingStart, t = this.hoverYmd;
        return P(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), t = E(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const l = E(r), a = e.getMonth(), i = e.getFullYear(), d = new Date(i, a - 1, 1), u = d.getFullYear(), o = d.getMonth(), h = (L, $) => typeof this.$t == "function" ? this.$t(L, $) : L;
      return [
        {
          key: "today",
          label: h("ui.dateRangePicker.today"),
          range: [t, t]
        },
        {
          key: "yesterday",
          label: h("ui.dateRangePicker.yesterday"),
          range: [l, l]
        },
        {
          key: "thisMonth",
          label: h("ui.dateRangePicker.thisMonth", {
            month: K(i, a, this.locale)
          }),
          range: fe(i, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: K(u, o, this.locale)
          }),
          range: fe(u, o, this.maxYmd, this.minYmd)
        }
      ].map((L) => ({
        ...L,
        disabled: !L.range || this.isRangeDisabled(L.range[0], L.range[1])
      }));
    },
    calendarPanes() {
      const e = {
        key: "left",
        year: this.viewYear,
        month: this.viewMonth,
        showPrev: !0,
        showNext: !1
      }, t = {
        key: "right",
        year: this.rightView.year,
        month: this.rightView.month,
        showPrev: !1,
        showNext: !0
      };
      return [e, t].map((r) => ({
        ...r,
        title: K(r.year, r.month, this.locale),
        cells: this.buildCellsForMonth(r.year, r.month)
      }));
    }
  },
  watch: {
    modelValue: {
      deep: !0,
      handler() {
        this.syncViewFromValue(), this.menuOpen || (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
      }
    },
    menuOpen(e) {
      e ? (this.pickingStart = this.startYmd, this.pickingEnd = this.endYmd, this.hoverYmd = "", this.syncViewFromValue()) : (this.pickingStart = "", this.pickingEnd = "", this.hoverYmd = "");
    }
  },
  methods: {
    syncViewFromValue() {
      const e = Y(this.startYmd) || Y(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = (l) => {
        if (!l) return "…";
        const [a, i, d] = String(l).split("-");
        return `${d}.${i}.${a}`;
      };
      return !e && !t ? this.resolvedPlaceholder : e === t || !t ? r(e || t) : `${r(e)} – ${r(t)}`;
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    isRangeDisabled(e, t) {
      return !!(!e || !t || this.minYmd && t < this.minYmd || this.maxYmd && e > this.maxYmd);
    },
    buildCellsForMonth(e, t) {
      const r = new Date(e, t, 1), l = new Date(e, t, 1 - r.getDay()), a = this.previewStart, i = this.previewEnd, d = a && i, u = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(l.getFullYear(), l.getMonth(), l.getDate() + o), f = h.getMonth() === t && h.getFullYear() === e, L = h.getDate(), $ = E(h), $e = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, Ve = E(/* @__PURE__ */ new Date()) === $, Pe = !!(this.minYmd && $ < this.minYmd) || !!(this.maxYmd && $ > this.maxYmd);
        let te = !1, ie = !1;
        if (d) {
          const re = P(a, i) <= 0 ? a : i, se = P(a, i) <= 0 ? i : a;
          te = P($, re) >= 0 && P($, se) <= 0, ie = $ === re || $ === se;
        }
        u.push({
          key: $e,
          d: L,
          date: h,
          today: Ve,
          inMonth: f,
          disabled: Pe,
          inRange: te,
          endpoint: ie
        });
      }
      return u;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = E(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, l] = e.range;
      this.pickingStart = r, this.pickingEnd = l, this.$emit("update:modelValue", [r, l]), this.$emit("change", [r, l]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = E(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let l = this.pickingStart, a = r;
      if (P(a, l) < 0) {
        const i = l;
        l = a, a = i;
      }
      this.pickingStart = l, this.pickingEnd = a, this.$emit("update:modelValue", [l, a]), this.$emit("change", [l, a]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, mi = { class: "min-w-0 flex-1 truncate text-foreground" }, gi = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, bi = { class: "ui-daterangepicker-layout" }, yi = ["aria-label"], vi = { class: "ui-daterangepicker-calendars" }, _i = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, ki = { class: "ui-daterangepicker-month-row" }, wi = { class: "mb-2 flex items-center justify-between gap-2" }, xi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Si = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, Ci = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, Li = { class: "ui-datepicker-grid" };
function Ti(e, t, r, l, a, i) {
  const d = b("ui-button"), u = b("ui-popover");
  return s(), n("div", {
    class: y(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    v(u, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (o) => a.menuOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: o, toggle: h }) => [
        v(d, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: r.disabled,
          "aria-expanded": o ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: k(() => [
            c("span", mi, p(i.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: k(({ close: o }) => [
        c("div", gi, [
          c("div", bi, [
            c("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (s(!0), n(C, null, I(i.quickPresets, (h) => (s(), _(d, {
                key: h.key,
                type: "button",
                variant: "ghost",
                color: "secondary",
                size: "sm",
                fulled: "",
                disabled: h.disabled,
                onClick: (f) => i.applyQuick(h, o)
              }, {
                default: k(() => [
                  V(p(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, yi),
            c("div", vi, [
              i.rangeHint ? (s(), n("p", _i, p(i.rangeHint), 1)) : m("", !0),
              c("div", ki, [
                (s(!0), n(C, null, I(i.calendarPanes, (h) => (s(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", wi, [
                    h.showPrev ? (s(), _(d, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = A((f) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), n("span", xi)),
                    c("span", Si, p(h.title), 1),
                    h.showNext ? (s(), _(d, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = A((f) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), n("span", Ci))
                  ]),
                  t[3] || (t[3] = c("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
                    c("span", null, "Su"),
                    c("span", null, "Mo"),
                    c("span", null, "Tu"),
                    c("span", null, "We"),
                    c("span", null, "Th"),
                    c("span", null, "Fr"),
                    c("span", null, "Sa")
                  ], -1)),
                  c("div", Li, [
                    (s(!0), n(C, null, I(h.cells, (f) => (s(), _(d, {
                      key: f.key,
                      variant: i.dayVariant(f),
                      color: i.dayColor(f),
                      size: "sm",
                      disabled: f.disabled,
                      "aria-selected": f.endpoint ? "true" : "false",
                      "aria-disabled": f.disabled ? "true" : void 0,
                      "data-outside": f.inMonth ? void 0 : "true",
                      "data-today": f.today ? "true" : void 0,
                      "data-in-range": f.inRange && !f.endpoint ? "true" : void 0,
                      "data-range-endpoint": f.endpoint ? "true" : void 0,
                      onMouseenter: (L) => i.onCellHover(f),
                      onClick: (L) => i.pick(f, o)
                    }, {
                      default: k(() => [
                        V(p(f.d), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "data-in-range", "data-range-endpoint", "onMouseenter", "onClick"]))), 128))
                  ])
                ]))), 128))
              ])
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Ii = /* @__PURE__ */ g(pi, [["render", Ti]]), Ai = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], $i = {
  name: "Dropdown",
  components: { Divider: Le },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` — verilmezse bileşen kendi iç durumunu yönetir */
    open: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Ai.includes(e)
    },
    matchTriggerWidth: {
      type: Boolean,
      default: !1
    },
    /** Tetikleyici tam genişlik */
    block: {
      type: Boolean,
      default: !1
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    outsideClickIgnoreSelector: {
      type: String,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:open", "select"],
  data() {
    return {
      internalOpen: !1
    };
  },
  computed: {
    isOpen: {
      get() {
        return this.open !== void 0 ? this.open : this.internalOpen;
      },
      set(e) {
        this.open !== void 0 ? this.$emit("update:open", e) : this.internalOpen = e;
      }
    }
  },
  methods: {
    onOpenChange(e) {
      this.isOpen = e;
    },
    onItem(e, t) {
      e.disabled || (this.$emit("select", e), t());
    }
  }
};
function Vi(e, t, r, l, a, i) {
  const d = b("Divider"), u = b("ui-button"), o = b("ui-popover");
  return s(), _(o, {
    open: i.isOpen,
    placement: r.placement,
    "match-trigger-width": r.matchTriggerWidth,
    block: r.block,
    "close-on-outside-click": r.closeOnOutsideClick,
    "close-on-escape": r.closeOnEscape,
    "outside-click-ignore-selector": r.outsideClickIgnoreSelector,
    "onUpdate:open": i.onOpenChange
  }, {
    trigger: k((h) => [
      w(e.$slots, "trigger", ze(Me(h)))
    ]),
    content: k(({ close: h }) => [
      c("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? w(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (s(!0), n(C, { key: 1 }, I(r.items, (f, L) => (s(), n(C, { key: L }, [
          f.divider ? (s(), _(d, {
            key: 0,
            spacing: "sm"
          })) : (s(), _(u, {
            key: 1,
            variant: "ghost",
            color: "secondary",
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": f.icon || null,
            disabled: f.disabled,
            onClick: A(($) => i.onItem(f, h), ["stop"])
          }, {
            default: k(() => [
              V(p(f.label), 1)
            ]),
            _: 2
          }, 1032, ["prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "block", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const Pi = /* @__PURE__ */ g($i, [["render", Vi]]), zi = ["solid", "regular", "brands", "light", "duotone", "thin"], Mi = {
  name: "Field",
  inheritAttrs: !1,
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    /** true: yuvarlatılmış arka plan (kenarlık yok). */
    card: {
      type: Boolean,
      default: !1
    },
    icon: {
      type: String,
      default: ""
    },
    iconType: {
      type: String,
      default: "light",
      validator: (e) => zi.includes(e)
    }
  },
  computed: {
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    hasValue() {
      return !!this.$slots.default;
    },
    showIcon() {
      return !!this.icon;
    },
    rootClass() {
      return x("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, Di = {
  key: 0,
  class: "ui-field__title-row"
}, Ei = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Oi = {
  key: 1,
  class: "ui-field__title"
}, Ni = {
  key: 1,
  class: "ui-field__value"
}, Bi = {
  key: 2,
  class: "ui-field__subtitle"
};
function Ri(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("div", S({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (s(), n("div", Di, [
      i.showIcon ? (s(), n("span", Ei, [
        v(d, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : m("", !0),
      r.title ? (s(), n("span", Oi, p(r.title), 1)) : m("", !0)
    ])) : m("", !0),
    i.hasValue ? (s(), n("div", Ni, [
      w(e.$slots, "default")
    ])) : m("", !0),
    r.subtitle ? (s(), n("p", Bi, p(r.subtitle), 1)) : m("", !0)
  ], 16);
}
const Fi = /* @__PURE__ */ g(Mi, [["render", Ri]]), Yi = ["auto", "file", "folder"], Hi = ["sm", "md", "lg"], Wi = { icon: "folder", color: "text-sky-500" }, Ui = { icon: "file-lines", color: "text-muted-foreground" }, Gi = {
  pdf: { icon: "file-pdf", color: "text-red-500" },
  doc: { icon: "file-word", color: "text-blue-600" },
  docx: { icon: "file-word", color: "text-blue-600" },
  xls: { icon: "file-excel", color: "text-green-600" },
  xlsx: { icon: "file-excel", color: "text-green-600" },
  csv: { icon: "file-lines", color: "text-emerald-600" },
  ppt: { icon: "file-powerpoint", color: "text-orange-600" },
  pptx: { icon: "file-powerpoint", color: "text-orange-600" },
  png: { icon: "file-image", color: "text-violet-500" },
  jpg: { icon: "file-image", color: "text-violet-500" },
  jpeg: { icon: "file-image", color: "text-violet-500" },
  gif: { icon: "file-image", color: "text-violet-500" },
  webp: { icon: "file-image", color: "text-violet-500" },
  svg: { icon: "file-image", color: "text-orange-500" },
  ico: { icon: "file-image", color: "text-amber-600" },
  mp4: { icon: "file-video", color: "text-purple-600" },
  mov: { icon: "file-video", color: "text-purple-600" },
  webm: { icon: "file-video", color: "text-purple-600" },
  mkv: { icon: "file-video", color: "text-purple-600" },
  mp3: { icon: "file-audio", color: "text-pink-500" },
  wav: { icon: "file-audio", color: "text-pink-500" },
  flac: { icon: "file-audio", color: "text-pink-500" },
  zip: { icon: "file-zipper", color: "text-amber-600" },
  rar: { icon: "file-zipper", color: "text-amber-600" },
  "7z": { icon: "file-zipper", color: "text-amber-600" },
  gz: { icon: "file-zipper", color: "text-amber-600" },
  tar: { icon: "file-zipper", color: "text-amber-600" },
  js: { icon: "file-code", color: "text-yellow-500" },
  mjs: { icon: "file-code", color: "text-yellow-500" },
  ts: { icon: "file-code", color: "text-blue-500" },
  vue: { icon: "file-code", color: "text-green-500" },
  jsx: { icon: "file-code", color: "text-cyan-500" },
  tsx: { icon: "file-code", color: "text-sky-400" },
  json: { icon: "file-code", color: "text-slate-500" },
  yaml: { icon: "file-code", color: "text-slate-500" },
  yml: { icon: "file-code", color: "text-slate-500" },
  html: { icon: "file-code", color: "text-orange-600" },
  htm: { icon: "file-code", color: "text-orange-600" },
  css: { icon: "file-code", color: "text-blue-500" },
  scss: { icon: "file-code", color: "text-pink-600" },
  md: { icon: "file-lines", color: "text-foreground" },
  txt: { icon: "file-lines", color: "text-muted-foreground" },
  rtf: { icon: "file-lines", color: "text-muted-foreground" },
  log: { icon: "file-lines", color: "text-muted-foreground" }
}, pe = {
  sm: {
    shell: "min-h-[3.25rem] min-w-[3.25rem] rounded-xl px-2.5 py-2.5",
    icon: "md",
    iconBoost: "",
    label: "text-[11px] leading-4",
    root: "max-w-[6rem]"
  },
  md: {
    shell: "min-h-[4.25rem] min-w-[4.25rem] rounded-2xl px-3.5 py-3.5",
    icon: "lg",
    iconBoost: "",
    label: "text-xs leading-4",
    root: "max-w-[9rem]"
  },
  lg: {
    shell: "min-h-[5.75rem] min-w-[5.75rem] rounded-[1.25rem] px-5 py-5",
    icon: "lg",
    iconBoost: "scale-[1.4]",
    label: "text-sm leading-5",
    root: "max-w-[12rem]"
  }
};
function U(e) {
  return String(e ?? "").trim();
}
function Ki(e) {
  const t = U(e);
  return /[/\\]\s*$/.test(t);
}
function Ae(e) {
  const t = U(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function ji(e) {
  const t = Ae(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
}
const me = {
  default: "",
  foreground: "text-foreground",
  muted: "text-muted-foreground",
  primary: "text-primary",
  secondary: "text-secondary-foreground",
  sky: "text-sky-500",
  blue: "text-blue-500",
  red: "text-red-500",
  green: "text-green-600",
  amber: "text-amber-600",
  violet: "text-violet-500",
  purple: "text-purple-600",
  orange: "text-orange-600",
  pink: "text-pink-500",
  yellow: "text-yellow-500",
  cyan: "text-cyan-500",
  emerald: "text-emerald-600"
}, qi = {
  name: "File",
  props: {
    /** Dosya veya klasör adı (veya yol — `basename-only` ile yalnız son parça gösterilir) */
    name: {
      type: String,
      required: !0
    },
    /** `auto`: sonda `/` veya `\\` → klasör; aksi dosya */
    kind: {
      type: String,
      default: "auto",
      validator: (e) => Yi.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Hi.includes(e)
    },
    /** Font Awesome `name` (önek yok); verilirse uzantı eşlemesi yok sayılır */
    icon: {
      type: String,
      default: ""
    },
    /** FA ağırlığı — çoğu ikon `solid`; gerekirse `brands` vb. */
    iconType: {
      type: String,
      default: "light"
    },
    /** İkon rengi: `NAMED_ICON_COLORS` anahtarı veya doğrudan Tailwind sınıfı (`text-red-500`) */
    color: {
      type: String,
      default: ""
    },
    /** true: etikette yalnızca yolun son segmenti */
    basenameOnly: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    preset() {
      return pe[this.size] || pe.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Ki(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = U(this.name);
      return e ? this.basenameOnly ? Ae(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return U(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Wi;
      const e = ji(this.name);
      return Gi[e] || Ui;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? me[this.color] !== void 0 ? me[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
    },
    iconClasses() {
      const e = this.preset.iconBoost;
      return [this.resolvedColorClass, e].filter(Boolean);
    },
    iconSizeToken() {
      return this.preset.icon;
    },
    shellClasses() {
      return this.preset.shell;
    },
    folderShellClass() {
      return this.resolvedKind === "folder" ? "ui-file-icon-shell--folder" : "";
    },
    labelClass() {
      return this.preset.label;
    },
    rootSizeClass() {
      return this.preset.root;
    }
  }
}, Zi = ["aria-label"], Qi = ["title"];
function Xi(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("div", {
    class: y(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c("div", {
      class: y(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      v(d, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: y(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    c("span", {
      class: y(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Qi)
  ], 10, Zi);
}
const Ji = /* @__PURE__ */ g(qi, [["render", Xi]]), er = ["solid", "regular", "brands", "light", "duotone", "thin"], tr = {
  name: "IconPicker",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    icons: {
      type: Array,
      default: () => []
    },
    iconType: {
      type: String,
      default: "light",
      validator: (e) => er.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    triggerPlaceholder: {
      type: String,
      default: ""
    },
    popoverTitle: {
      type: String,
      default: ""
    },
    clearLabel: {
      type: String,
      default: ""
    },
    searchPlaceholder: {
      type: String,
      default: ""
    },
    noResultsLabel: {
      type: String,
      default: ""
    },
    maxResults: {
      type: Number,
      default: 180
    },
    panelWidth: {
      type: String,
      default: "22rem"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      popoverOpen: !1,
      searchQuery: ""
    };
  },
  computed: {
    rootClass() {
      return x(
        "ui-icon-picker ui-icon-picker--fulled w-full min-w-0",
        this.disabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    localIcon: {
      get() {
        return this.modelValue || "";
      },
      set(e) {
        this.$emit("update:modelValue", e || null);
      }
    },
    triggerLabel() {
      return this.triggerPlaceholder || this.$t("ui.iconPicker.triggerPlaceholder");
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t("ui.iconPicker.popoverTitle");
    },
    clearLabelText() {
      return this.clearLabel || this.$t("ui.iconPicker.clear");
    },
    searchPlaceholderLabel() {
      return this.searchPlaceholder || this.$t("ui.iconPicker.searchPlaceholder");
    },
    resolvedNoResultsLabel() {
      return this.noResultsLabel || this.$t("ui.iconPicker.noResults");
    },
    filteredIcons() {
      const e = String(this.searchQuery || "").trim().toLowerCase(), t = Array.isArray(this.icons) ? this.icons : [];
      let r = t;
      return e && (r = t.filter((l) => String(l).toLowerCase().includes(e))), r.slice(0, this.maxResults);
    }
  },
  watch: {
    popoverOpen(e) {
      e || (this.searchQuery = "");
    }
  },
  methods: {
    selectIcon(e) {
      this.localIcon = e, this.popoverOpen = !1;
    },
    clearIcon() {
      this.localIcon = "", this.$emit("update:modelValue", null), this.popoverOpen = !1;
    }
  }
}, ir = ["disabled", "aria-expanded", "onClick"], rr = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, sr = { class: "ui-select-field-suffix" }, lr = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ar = { class: "ui-icon-picker-panel" }, nr = { class: "ui-icon-picker-panel__header" }, or = { class: "ui-icon-picker-panel__title" }, ur = { class: "ui-icon-picker-panel__search" }, cr = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, dr = {
  key: 1,
  class: "ui-icon-picker-grid"
}, hr = ["title", "onClick"];
function fr(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button"), o = b("ui-input"), h = b("ui-popover");
  return s(), n("div", {
    class: y(i.rootClass)
  }, [
    v(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => a.popoverOpen = f),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: f, toggle: L }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": f ? "true" : "false",
          "aria-haspopup": !0,
          onClick: L
        }, [
          c("span", rr, [
            v(d, {
              name: i.localIcon || "grid",
              type: r.iconType,
              size: "xs"
            }, null, 8, ["name", "type"])
          ]),
          c("span", {
            class: y(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
          }, p(i.localIcon || i.triggerLabel), 3),
          c("span", sr, [
            c("span", lr, [
              v(d, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, ir)
      ]),
      content: k(() => [
        c("div", ar, [
          c("div", nr, [
            c("span", or, p(i.popoverTitleLabel), 1),
            i.localIcon ? (s(), _(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: A(i.clearIcon, ["stop"])
            }, {
              default: k(() => [
                V(p(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : m("", !0)
          ]),
          c("div", ur, [
            v(o, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => a.searchQuery = f),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (s(), n("div", dr, [
            (s(!0), n(C, null, I(i.filteredIcons, (f) => (s(), n("button", {
              key: f,
              type: "button",
              class: y(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === f }]),
              title: f,
              onClick: (L) => i.selectIcon(f)
            }, [
              v(d, {
                name: f,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, hr))), 128))
          ])) : (s(), n("div", cr, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const pr = /* @__PURE__ */ g(tr, [["render", fr]]);
function mr(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const l = Math.min(4, Math.round(r)), a = ["weak", "fair", "good", "strong"], i = l <= 0 ? "weak" : a[Math.min(l - 1, 3)];
  return {
    score: l,
    percent: l / 4 * 100,
    label: i
  };
}
let j = 0;
const gr = ["sm", "md", "lg"], br = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => gr.includes(e)
    },
    modelValue: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "new-password"
    },
    maxlength: {
      type: [Number, String],
      default: void 0
    },
    /** Güç çubuğu ve etiket */
    showStrength: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "focus", "blur"],
  data() {
    return j += 1, {
      fallbackId: `ui-password-${j}`,
      fallbackStrengthId: `ui-password-strength-${j}`,
      visible: !1
    };
  },
  computed: {
    innerValue: {
      get() {
        return this.modelValue;
      },
      set(e) {
        this.$emit("update:modelValue", e);
      }
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    strength() {
      return mr(this.modelValue);
    },
    strengthVariant() {
      const e = this.strength.label;
      return e === "empty" ? "default" : e;
    },
    hasPasswordValue() {
      return String(this.modelValue ?? "").length > 0;
    },
    showStrengthMeter() {
      return this.showStrength && this.hasPasswordValue;
    },
    strengthDescribedby() {
      if (!this.showStrengthMeter)
        return this.$attrs["aria-describedby"] || void 0;
      const e = this.$attrs["aria-describedby"];
      return e ? `${e} ${this.fallbackStrengthId}` : this.fallbackStrengthId;
    },
    strengthText() {
      const e = this.strength.label;
      return typeof this.$t == "function" ? this.$t(`ui.password.strength.${e}`) : { weak: "Weak", fair: "Fair", good: "Good", strong: "Strong" }[e] || e;
    },
    toggleAriaLabel() {
      return typeof this.$t == "function" ? this.visible ? this.$t("ui.password.hide") : this.$t("ui.password.show") : this.visible ? "Hide password" : "Show password";
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "aria-describedby"]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    }
  }
}, yr = ["aria-label", "aria-pressed", "disabled"], vr = ["id", "aria-live"];
function _r(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-input"), o = b("ui-progress");
  return s(), n("div", {
    class: y(["ui-password", [e.$attrs.class]])
  }, [
    v(u, S({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerValue = h),
      type: a.visible ? "text" : "password",
      class: "w-full",
      size: r.size,
      disabled: r.disabled,
      readonly: r.readonly,
      placeholder: r.placeholder,
      name: r.name,
      autocomplete: r.autocomplete,
      maxlength: r.maxlength,
      "aria-describedby": i.strengthDescribedby
    }, i.passthroughAttrs, {
      onFocus: t[2] || (t[2] = (h) => e.$emit("focus", h)),
      onBlur: t[3] || (t[3] = (h) => e.$emit("blur", h))
    }), {
      append: k(() => [
        c("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": a.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => a.visible = !a.visible)
        }, [
          v(d, {
            name: a.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, yr)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (s(), n("div", {
      key: 0,
      id: a.fallbackStrengthId,
      class: "ui-password-strength",
      role: "status",
      "aria-live": i.innerValue ? "polite" : "off"
    }, [
      v(o, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (s(), n("span", {
        key: 0,
        class: y(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : m("", !0)
    ], 8, vr)) : m("", !0)
  ], 2);
}
const kr = /* @__PURE__ */ g(br, [["render", _r]]), wr = ["numeric", "alphanumeric"], xr = {
  name: "Pin",
  inheritAttrs: !1,
  props: {
    /** Tam kod — `v-model` */
    modelValue: {
      type: String,
      default: ""
    },
    /** Hane sayısı */
    length: {
      type: Number,
      default: 6,
      validator: (e) => e >= 1 && e <= 12
    },
    /** `numeric` yalnızca rakam; `alphanumeric` harf + rakam */
    type: {
      type: String,
      default: "numeric",
      validator: (e) => wr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    autocomplete: {
      type: String,
      default: "one-time-code"
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "complete", "focus", "blur"],
  data() {
    return {
      activeIndex: 0
    };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    cells() {
      return String(this.modelValue ?? "").slice(0, this.length).split("");
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.pin.ariaLabel") : "Verification code";
    }
  },
  watch: {
    modelValue(e) {
      const t = this.normalizeValue(e);
      if (t !== e) {
        this.$emit("update:modelValue", t);
        return;
      }
      t.length === this.length && this.$emit("complete", t);
    }
  },
  methods: {
    cellEl(e) {
      const t = this.$refs.cells;
      return Array.isArray(t) ? t[e] : t;
    },
    cellAriaLabel(e) {
      return typeof this.$t == "function" ? this.$t("ui.pin.cell", { n: e + 1, total: this.length }) : `Digit ${e + 1} of ${this.length}`;
    },
    normalizeChar(e) {
      if (!e) return "";
      if (this.type === "numeric")
        return /\d/.test(e) ? e : "";
      const t = e.toUpperCase();
      return /^[A-Z0-9]$/.test(t) ? t : "";
    },
    normalizeValue(e) {
      return String(e ?? "").split("").map((r) => this.normalizeChar(r)).filter(Boolean).slice(0, this.length).join("");
    },
    emitValue(e) {
      var r;
      const t = e.join("").slice(0, this.length);
      this.$emit("update:modelValue", t), t.length === this.length && (this.$emit("complete", t), (r = this.cellEl(this.length - 1)) == null || r.blur());
    },
    onCellInput(e, t) {
      const l = t.target.value.split("").map((u) => this.normalizeChar(u)).filter(Boolean);
      if (l.length === 0) {
        const u = [...this.cells];
        u[e] = "", this.emitValue(u);
        return;
      }
      const a = [...this.cells];
      let i = e;
      for (const u of l) {
        if (i >= this.length) break;
        a[i] = u, i += 1;
      }
      this.emitValue(a);
      const d = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var u, o;
        (u = this.cellEl(d)) == null || u.focus(), (o = this.cellEl(d)) == null || o.select();
      });
    },
    onCellKeydown(e, t) {
      var r, l;
      if (t.key === "Backspace") {
        t.preventDefault();
        const a = [...this.cells];
        if (a[e]) {
          a[e] = "", this.emitValue(a);
          return;
        }
        e > 0 && (a[e - 1] = "", this.emitValue(a), this.$nextTick(() => {
          var i;
          (i = this.cellEl(e - 1)) == null || i.focus();
        }));
        return;
      }
      t.key === "ArrowLeft" && e > 0 && (t.preventDefault(), (r = this.cellEl(e - 1)) == null || r.focus()), t.key === "ArrowRight" && e < this.length - 1 && (t.preventDefault(), (l = this.cellEl(e + 1)) == null || l.focus());
    },
    onCellFocus(e) {
      this.activeIndex = e, this.$emit("focus", e), this.$nextTick(() => {
        var t;
        (t = this.cellEl(e)) == null || t.select();
      });
    },
    onPaste(e) {
      var a;
      e.preventDefault();
      const t = ((a = e.clipboardData) == null ? void 0 : a.getData("text")) ?? "", r = this.normalizeValue(t);
      if (!r) return;
      this.emitValue(r.split(""));
      const l = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, l))) == null || i.focus();
      });
    }
  }
}, Sr = ["aria-label"], Cr = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Lr(e, t, r, l, a, i) {
  return s(), n("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: y([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (s(!0), n(C, null, I(r.length, (d, u) => (s(), n("input", {
      key: u,
      ref_for: !0,
      ref: "cells",
      class: "ui-pin-cell",
      value: i.cells[u] ?? "",
      type: r.type === "numeric" ? "tel" : "text",
      inputmode: r.type === "numeric" ? "numeric" : "text",
      pattern: r.type === "numeric" ? "[0-9]*" : void 0,
      disabled: r.disabled,
      readonly: r.readonly,
      autocomplete: u === 0 ? r.autocomplete : "off",
      maxlength: "1",
      "aria-label": i.cellAriaLabel(u),
      onInput: (o) => i.onCellInput(u, o),
      onKeydown: (o) => i.onCellKeydown(u, o),
      onFocus: (o) => i.onCellFocus(u),
      onPaste: t[0] || (t[0] = (...o) => i.onPaste && i.onPaste(...o))
    }, null, 40, Cr))), 128))
  ], 10, Sr);
}
const Tr = /* @__PURE__ */ g(xr, [["render", Lr]]), Ir = ["ul", "ol", "div"], Ar = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => Ir.includes(e)
    },
    /** Öğeler arası dikey boşluk (`gap-3` | `gap-4`). */
    density: {
      type: String,
      default: "normal",
      validator: (e) => ["compact", "normal", "relaxed"].includes(e)
    }
  },
  computed: {
    listClass() {
      const e = this.density === "compact" ? "gap-3" : this.density === "relaxed" ? "gap-5" : "gap-4";
      return x("ui-list", e, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function $r(e, t, r, l, a, i) {
  return s(), _(O(r.tag), S({
    class: i.listClass,
    role: "list"
  }, i.passthroughAttrs), {
    default: k(() => [
      w(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const Vr = /* @__PURE__ */ g(Ar, [["render", $r]]), Pr = ["solid", "regular", "brands", "light", "duotone", "thin"], zr = {
  name: "ListItem",
  props: {
    /** Dolu daire içinde `ui-icon` (ör. `check`). */
    prefixIcon: {
      type: String,
      default: null
    },
    prefixIconType: {
      type: String,
      default: "light",
      validator: (e) => Pr.includes(e)
    }
  }
}, Mr = {
  class: "ui-list-item",
  role: "listitem"
}, Dr = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Er = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Or = { class: "ui-list-item-content min-w-0 flex-1" };
function Nr(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("li", Mr, [
    r.prefixIcon ? (s(), n("span", Dr, [
      v(d, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (s(), n("span", Er, [
      w(e.$slots, "prefix")
    ])) : m("", !0),
    c("div", Or, [
      w(e.$slots, "default")
    ])
  ]);
}
const Br = /* @__PURE__ */ g(zr, [["render", Nr]]), Rr = ["bar", "circle"], ge = ["sm", "md", "lg"], be = ["thin", "md"], Fr = ["default", "weak", "fair", "good", "strong"], H = { sm: 16, md: 20, lg: 24 }, Yr = { sm: 1.5, md: 2, lg: 2 }, Hr = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Rr.includes(e)
    },
    /** 0 … `max` */
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    /**
     * Daire: sm 16px, md 20px, lg 24px.
     * Çubuk: thin 4px (şifre gücü), md 8px (slider izi).
     */
    size: {
      type: String,
      default: "md"
    },
    /** Çubuk / halka dolgu rengi — şifre gücü vb. */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Fr.includes(e)
    },
    indeterminate: {
      type: Boolean,
      default: !1
    },
    /** Slider izi gibi — progressbar rolü / aria yok */
    presentational: {
      type: Boolean,
      default: !1
    },
    ariaLabel: {
      type: String,
      default: ""
    },
    ariaValuetext: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      const e = this.type === "circle" ? ge.includes(this.size) ? this.size : "sm" : be.includes(this.size) ? this.size : "md";
      return x(
        "ui-progress",
        `ui-progress--${this.type}`,
        this.type === "circle" && `ui-progress--circle-${e}`,
        this.type === "bar" && `ui-progress--bar-${e}`,
        this.variant !== "default" && `ui-progress--${this.variant}`,
        this.indeterminate && "ui-progress--indeterminate",
        this.$attrs.class
      );
    },
    circleSizeKey() {
      return ge.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return be.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = H[this.circleSizeKey] ?? H.sm;
      return { width: `${e}px`, height: `${e}px` };
    },
    clampedPercent() {
      if (this.indeterminate) return 0;
      const e = Number(this.max);
      if (!Number.isFinite(e) || e <= 0) return 0;
      const t = Number(this.value);
      return Number.isFinite(t) ? Math.min(100, Math.max(0, t / e * 100)) : 0;
    },
    ariaValueNow() {
      const e = Number(this.max);
      return !Number.isFinite(e) || e <= 0 ? 0 : Math.round(this.clampedPercent / 100 * e);
    },
    circleMetrics() {
      const e = H[this.circleSizeKey] ?? H.sm, t = Yr[this.circleSizeKey] ?? 2, r = (e - t) / 2, l = e / 2, a = 2 * Math.PI * r, i = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: l, circumference: a, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Wr = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], Ur = ["width", "height", "viewBox"], Gr = ["cx", "cy", "r", "stroke-width"], Kr = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], jr = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function qr(e, t, r, l, a, i) {
  return s(), n("div", {
    class: y(i.rootClass),
    style: M(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (s(), n("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: i.circleMetrics.size,
      height: i.circleMetrics.size,
      viewBox: `0 0 ${i.circleMetrics.size} ${i.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      c("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, Gr),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Kr)
    ], 8, Ur)) : (s(), n("div", jr, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: M({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Wr);
}
const Zr = /* @__PURE__ */ g(Hr, [["render", qr]]), Qr = ["sm", "md", "lg", "full"], ye = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Xr = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Qr.includes(e)
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-menu",
        ye[this.width] || ye.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Jr = {
  key: 0,
  class: "ui-menu-header"
}, es = { class: "ui-menu-body" }, ts = {
  key: 1,
  class: "ui-menu-footer"
};
function is(e, t, r, l, a, i) {
  return s(), n("nav", S({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (s(), n("div", Jr, [
      w(e.$slots, "header")
    ])) : m("", !0),
    c("div", es, [
      w(e.$slots, "default")
    ]),
    e.$slots.footer ? (s(), n("div", ts, [
      w(e.$slots, "footer")
    ])) : m("", !0)
  ], 16);
}
const rs = /* @__PURE__ */ g(Xr, [["render", is]]), ss = {
  name: "MenuGroup",
  inheritAttrs: !1,
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  computed: {
    groupClass() {
      return x("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ls = {
  key: 0,
  class: "ui-menu-group-label"
}, as = { class: "ui-menu-group-items" };
function ns(e, t, r, l, a, i) {
  return s(), n("div", S({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (s(), n("p", ls, p(r.label), 1)) : m("", !0),
    c("div", as, [
      w(e.$slots, "default")
    ])
  ], 16);
}
const os = /* @__PURE__ */ g(ss, [["render", ns]]), us = {
  name: "MenuItem",
  inheritAttrs: !1,
  props: {
    /** `vue-router` hedefi; verildiğinde menü öğesi bağlantı olarak davranır. */
    to: {
      type: [String, Object],
      default: null
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    active: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  computed: {
    itemClass() {
      return x(
        "ui-menu-item",
        this.active && "ui-menu-item--active",
        this.$attrs.class
      );
    },
    forwardedAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    onClick(e) {
      this.disabled || this.loading || this.$emit("click", e);
    }
  }
};
function cs(e, t, r, l, a, i) {
  const d = b("ui-button");
  return s(), _(d, S({
    type: "button",
    variant: "ghost",
    color: "secondary",
    fulled: "",
    "text-align": "left",
    to: r.to,
    "prefix-icon": r.prefixIcon,
    "suffix-icon": r.suffixIcon,
    disabled: r.disabled,
    loading: r.loading,
    class: i.itemClass,
    "aria-current": r.active ? "page" : void 0
  }, i.forwardedAttrs, { onClick: i.onClick }), {
    default: k(() => [
      w(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["to", "prefix-icon", "suffix-icon", "disabled", "loading", "class", "aria-current", "onClick"]);
}
const ds = /* @__PURE__ */ g(us, [["render", cs]]), hs = {
  name: "MenuNav",
  inheritAttrs: !1,
  props: {
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    navClass() {
      return x("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, fs = ["aria-label"];
function ps(e, t, r, l, a, i) {
  return s(), n("div", S({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, fs);
}
const ms = /* @__PURE__ */ g(hs, [["render", ps]]), gs = {
  name: "Segment",
  inject: {
    uiSegmentGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      required: !0
    },
    label: {
      type: String,
      required: !0
    },
    /** Font Awesome ikon adı; `iconOnly` veya dar düzenlerde yalnız ikon gösterilir */
    icon: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    hasPrepend() {
      return !!this.$slots.prepend;
    },
    hasAppend() {
      return !!this.$slots.append;
    },
    hasAffixes() {
      return this.hasPrepend || this.hasAppend;
    },
    isSelected() {
      return this.uiSegmentGroup ? Object.is(this.uiSegmentGroup.modelValue, this.value) : !1;
    },
    iconOnly() {
      var e;
      return !!((e = this.uiSegmentGroup) != null && e.iconOnly);
    },
    showLabel() {
      return !this.iconOnly;
    },
    iconSize() {
      var t;
      const e = ((t = this.uiSegmentGroup) == null ? void 0 : t.size) || "md";
      return this.iconOnly, e === "lg" ? "sm" : "xs";
    },
    segmentClass() {
      return [
        "ui-segment",
        { "ui-segment--selected": this.isSelected },
        this.icon && !this.hasAffixes && "ui-segment--with-icon",
        this.iconOnly && "ui-segment--icon-only",
        this.hasAffixes && "ui-segment--affixed"
      ];
    }
  },
  mounted() {
    !this.uiSegmentGroup && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.disabled || !this.uiSegmentGroup || this.uiSegmentGroup.$emit("update:modelValue", this.value);
    }
  }
}, bs = ["aria-checked", "disabled"], ys = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, vs = {
  key: 1,
  class: "ui-segment-label"
}, _s = {
  key: 2,
  class: "sr-only"
}, ks = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, ws = {
  key: 1,
  class: "ui-segment-label"
}, xs = {
  key: 2,
  class: "sr-only"
};
function Ss(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("button", {
    type: "button",
    role: "radio",
    class: y(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...u) => i.select && i.select(...u))
  }, [
    i.hasAffixes ? (s(), n(C, { key: 0 }, [
      i.hasPrepend ? (s(), n("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        w(e.$slots, "prepend")
      ])) : m("", !0),
      c("span", {
        class: y(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (s(), n("span", ys, [
          v(d, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : m("", !0),
        i.showLabel ? (s(), n("span", vs, p(r.label), 1)) : r.label ? (s(), n("span", _s, p(r.label), 1)) : m("", !0)
      ], 2),
      i.hasAppend ? (s(), n("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = A(() => {
        }, ["stop"]))
      }, [
        w(e.$slots, "append")
      ])) : m("", !0)
    ], 64)) : (s(), n(C, { key: 1 }, [
      r.icon ? (s(), n("span", ks, [
        v(d, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : m("", !0),
      i.showLabel ? (s(), n("span", ws, p(r.label), 1)) : r.label ? (s(), n("span", xs, p(r.label), 1)) : m("", !0)
    ], 64))
  ], 10, bs);
}
const Cs = /* @__PURE__ */ g(gs, [["render", Ss]]), Ls = ["sm", "md", "lg"], Ts = ["horizontal", "vertical"], Is = {
  name: "SegmentGroup",
  inheritAttrs: !1,
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ls.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ts.includes(e)
    },
    /** Yalnız ikon; etiketler ekran okuyucu için gizli kalır */
    iconOnly: {
      type: Boolean,
      default: !1
    },
    /** false: başlık çubuğu gibi içeriğe göre genişlik (`w-full` değil) */
    block: {
      type: Boolean,
      default: !0
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  provide() {
    return {
      uiSegmentGroup: this
    };
  },
  computed: {
    rootClass() {
      return x(
        "ui-segment-group",
        this.block ? "ui-segment-group--block" : "ui-segment-group--fit",
        this.direction === "vertical" && "ui-segment-group--vertical",
        this.iconOnly && "ui-segment-group--icon-only",
        !this.block && this.direction !== "vertical" && "ui-segment-group--inline",
        this.size !== "md" && `ui-segment-group--${this.size}`,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, As = ["aria-label"];
function $s(e, t, r, l, a, i) {
  return s(), n("div", S({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, As);
}
const Vs = /* @__PURE__ */ g(Is, [["render", $s]]), Ps = ["horizontal", "vertical"], zs = ["default", "pills"], Ms = {
  name: "Stepper",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    steps: {
      type: Array,
      required: !0
    },
    /**
     * `default` — daire + başlık (yatay / dikey).
     * `pills` — hap ilerleme + `2/5 - Adım` etiketi (modal / kayıt formları için tercih).
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => zs.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ps.includes(e)
    },
    interactive: {
      type: Boolean,
      default: !1
    },
    /** `pills` varyantında sağdaki `1/5 - Adım` metni */
    showLabel: {
      type: Boolean,
      default: !0
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  computed: {
    normalizedSteps() {
      return (Array.isArray(this.steps) ? this.steps : []).map((t) => ({
        title: (t == null ? void 0 : t.title) ?? "",
        description: (t == null ? void 0 : t.description) ?? "",
        icon: (t == null ? void 0 : t.icon) ?? null,
        iconType: (t == null ? void 0 : t.iconType) ?? "light"
      }));
    },
    rootClass() {
      return x(
        "ui-stepper",
        this.variant === "pills" && "ui-stepper--pills",
        this.variant === "default" && this.direction === "vertical" && "ui-stepper--vertical",
        this.variant === "default" && this.direction === "horizontal" && "ui-stepper--horizontal",
        this.$attrs.class
      );
    },
    currentStep() {
      const e = Math.min(this.normalizedSteps.length - 1, Math.max(0, this.modelValue));
      return this.normalizedSteps[e] ?? { title: "" };
    },
    pillsLabel() {
      const e = this.normalizedSteps.length;
      return `${Math.min(e, Math.max(1, this.modelValue + 1))}/${e} - ${this.currentStep.title}`;
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    go(e) {
      if (!this.interactive) return;
      const t = this.normalizedSteps.length - 1, r = Math.min(t, Math.max(0, e));
      this.$emit("update:modelValue", r);
    },
    pillClass(e) {
      const t = this.modelValue;
      return e < t ? "ui-stepper-pill--complete" : e === t ? "ui-stepper-pill--current" : "ui-stepper-pill--upcoming";
    },
    indicatorClass(e) {
      const t = this.modelValue;
      return e < t ? "ui-stepper-indicator--complete" : e === t ? "ui-stepper-indicator--current" : "ui-stepper-indicator--upcoming";
    },
    railBeforeClass(e) {
      return this.modelValue >= e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    },
    railAfterClass(e) {
      return this.modelValue > e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    },
    verticalRailClass(e) {
      return this.modelValue > e ? "ui-stepper-rail--done" : "ui-stepper-rail--todo";
    }
  }
}, Ds = ["aria-label"], Es = { class: "ui-stepper-pills-track" }, Os = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Ns = { class: "flex w-full min-w-0 items-center justify-center" }, Bs = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Rs = {
  key: 1,
  class: "tabular-nums"
}, Fs = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Ys = { class: "ui-stepper-title ui-stepper-title--horizontal" }, Hs = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Ws = { class: "flex flex-col items-center" }, Us = {
  key: 1,
  class: "tabular-nums"
}, Gs = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Ks = { class: "ui-stepper-title" }, js = {
  key: 0,
  class: "ui-stepper-description"
};
function qs(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("div", S({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (s(), n(C, { key: 0 }, [
      c("div", Es, [
        (s(!0), n(C, null, I(i.normalizedSteps, (u, o) => (s(), _(O(r.interactive ? "button" : "span"), S({
          key: o,
          class: ["ui-stepper-pill", i.pillClass(o)],
          role: "listitem",
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (s(), n("p", Os, p(i.pillsLabel), 1)) : m("", !0)
    ], 64)) : r.direction === "horizontal" ? (s(!0), n(C, { key: 1 }, I(i.normalizedSteps, (u, o) => (s(), n("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", Ns, [
        o > 0 ? (s(), n("span", {
          key: 0,
          class: y(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), n("span", Bs)),
        (s(), _(O(r.interactive ? "button" : "div"), S({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: k(() => [
            u.icon ? (s(), _(d, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), n("span", Rs, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (s(), n("span", {
          key: 2,
          class: y(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), n("span", Fs))
      ]),
      c("p", Ys, p(u.title), 1),
      u.description ? (s(), n("p", Hs, p(u.description), 1)) : m("", !0)
    ]))), 128)) : (s(!0), n(C, { key: 2 }, I(i.normalizedSteps, (u, o) => (s(), n("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", Ws, [
        (s(), _(O(r.interactive ? "button" : "div"), S({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: k(() => [
            u.icon ? (s(), _(d, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (s(), n("span", Us, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (s(), n("span", {
          key: 0,
          class: y(["ui-stepper-vrail", i.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : m("", !0)
      ]),
      c("div", Gs, [
        c("p", Ks, p(u.title), 1),
        u.description ? (s(), n("p", js, p(u.description), 1)) : m("", !0)
      ])
    ]))), 128))
  ], 16, Ds);
}
const Zs = /* @__PURE__ */ g(Ms, [["render", qs]]);
let ve = 0;
const Qs = {
  name: "Slider",
  inheritAttrs: !1,
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    label: {
      type: String,
      default: ""
    },
    /** Sağ üstte gösterilen biçimlendirilmiş değer (örn. para string’i). */
    valueText: {
      type: String,
      default: ""
    },
    minLabel: {
      type: String,
      default: ""
    },
    maxLabel: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change"],
  data() {
    return ve += 1, { fallbackId: `ui-slider-${ve}` };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return x("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
    },
    fillPercent() {
      const e = Number(this.max) - Number(this.min);
      if (e <= 0 || !Number.isFinite(Number(this.modelValue)))
        return 0;
      const t = (Number(this.modelValue) - Number(this.min)) / e * 100;
      return Math.min(100, Math.max(0, t));
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set([
        "class",
        "style",
        "id",
        "type",
        "value",
        "min",
        "max",
        "step",
        "disabled"
      ]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    }
  },
  methods: {
    onNativeInput(e) {
      const t = Number(e.target.value);
      this.$emit("update:modelValue", Number.isNaN(t) ? this.min : t), this.$emit("input", e);
    },
    onChange(e) {
      this.$emit("change", e);
    }
  }
}, Xs = {
  key: 0,
  class: "ui-slider-header"
}, Js = {
  key: 0,
  class: "ui-form-label"
}, el = {
  key: 1,
  class: "ui-slider-value"
}, tl = { class: "ui-slider-rail" }, il = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], rl = {
  key: 1,
  class: "ui-slider-scale"
}, sl = { key: 0 }, ll = { key: 1 };
function al(e, t, r, l, a, i) {
  const d = b("ui-progress");
  return s(), n("div", {
    class: y(i.rootClass)
  }, [
    r.label || i.hasValue ? (s(), n("div", Xs, [
      r.label ? (s(), n("span", Js, p(r.label), 1)) : m("", !0),
      i.hasValue ? (s(), n("span", el, p(r.valueText), 1)) : m("", !0)
    ])) : m("", !0),
    c("div", tl, [
      v(d, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      c("input", S(i.passthroughAttrs, {
        id: i.resolvedId,
        value: r.modelValue,
        type: "range",
        class: "ui-slider-input",
        min: r.min,
        max: r.max,
        step: r.step,
        disabled: r.disabled,
        "aria-valuemin": r.min,
        "aria-valuemax": r.max,
        "aria-valuenow": r.modelValue,
        "aria-valuetext": r.valueText || String(r.modelValue),
        "aria-describedby": r.ariaDescribedby,
        onInput: t[0] || (t[0] = (...u) => i.onNativeInput && i.onNativeInput(...u)),
        onChange: t[1] || (t[1] = (...u) => i.onChange && i.onChange(...u))
      }), null, 16, il)
    ]),
    r.minLabel || r.maxLabel ? (s(), n("div", rl, [
      r.minLabel ? (s(), n("span", sl, p(r.minLabel), 1)) : m("", !0),
      r.maxLabel ? (s(), n("span", ll, p(r.maxLabel), 1)) : m("", !0)
    ])) : m("", !0)
  ], 2);
}
const nl = /* @__PURE__ */ g(Qs, [["render", al]]);
let _e = 0;
const ol = {
  name: "Switch",
  inheritAttrs: !1,
  props: {
    /** `v-model` */
    modelValue: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return _e += 1, { fallbackId: `ui-switch-${_e}` };
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled"]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    }
  },
  methods: {
    onKeydown(e) {
      this.isDisabled || (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.toggle());
    },
    toggle() {
      if (this.isDisabled) return;
      const e = !this.modelValue;
      this.$emit("update:modelValue", e), this.$emit("change", e);
    }
  }
}, ul = ["id", "aria-checked", "disabled", "aria-describedby"];
function cl(e, t, r, l, a, i) {
  return s(), n("button", S({
    type: "button",
    role: "switch",
    id: i.resolvedId,
    class: [
      "ui-switch",
      i.isDisabled ? "ui-switch--disabled" : "",
      e.$attrs.class
    ],
    "aria-checked": r.modelValue ? "true" : "false",
    disabled: r.disabled,
    "aria-describedby": r.ariaDescribedby
  }, i.passthroughAttrs, {
    onClick: t[0] || (t[0] = (...d) => i.toggle && i.toggle(...d)),
    onKeydown: t[1] || (t[1] = (...d) => i.onKeydown && i.onKeydown(...d))
  }), [
    c("span", {
      class: y(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      c("span", {
        class: y(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, ul);
}
const dl = /* @__PURE__ */ g(ol, [["render", cl]]), hl = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return x("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, fl = { class: "ui-table-scroll" };
function pl(e, t, r, l, a, i) {
  return s(), n("div", fl, [
    c("table", S({ class: i.rootClass }, i.passthroughAttrs), [
      w(e.$slots, "default")
    ], 16)
  ]);
}
const ml = /* @__PURE__ */ g(hl, [["render", pl]]), gl = {
  name: "TableBody"
}, bl = { class: "ui-table-body" };
function yl(e, t, r, l, a, i) {
  return s(), n("tbody", bl, [
    w(e.$slots, "default")
  ]);
}
const vl = /* @__PURE__ */ g(gl, [["render", yl]]), _l = ["left", "center", "right"], kl = ["title", "secondary", "body"], wl = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => _l.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || kl.includes(e)
    },
    iconCol: {
      type: Boolean,
      default: !1
    },
    empty: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-table-cell",
        this.iconCol && "ui-table-cell--icon-col",
        this.empty && "ui-table-cell--empty",
        this.align === "center" && "ui-table-cell--align-center",
        this.align === "right" && "ui-table-cell--align-end",
        this.tone === "title" && "ui-table-cell--tone-title",
        this.tone === "secondary" && "ui-table-cell--tone-secondary",
        this.tone === "body" && "ui-table-cell--tone-body",
        this.$attrs.class
      );
    }
  }
}, xl = ["colspan"];
function Sl(e, t, r, l, a, i) {
  return s(), n("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: y(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 10, xl);
}
const Cl = /* @__PURE__ */ g(wl, [["render", Sl]]), Ll = ["left", "center", "right"], Tl = ["sm", "md", "lg"], Il = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Ll.includes(e)
    },
    width: {
      type: String,
      default: ""
    },
    iconCol: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-table-head",
        this.iconCol && "ui-table-head--icon-col",
        this.align === "center" && "ui-table-head--align-center",
        this.align === "right" && "ui-table-head--align-end",
        !this.iconCol && this.width === "sm" && "ui-table-head--w-sm",
        !this.iconCol && this.width === "md" && "ui-table-head--w-md",
        !this.iconCol && this.width === "lg" && "ui-table-head--w-lg",
        this.$attrs.class
      );
    },
    widthStyle() {
      if (!(this.iconCol || Tl.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Al(e, t, r, l, a, i) {
  return s(), n("th", {
    class: y(i.rootClass),
    style: M(i.widthStyle)
  }, [
    w(e.$slots, "default")
  ], 6);
}
const $l = /* @__PURE__ */ g(Il, [["render", Al]]), Vl = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return x(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function Pl(e, t, r, l, a, i) {
  return s(), n("thead", {
    class: y(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 2);
}
const zl = /* @__PURE__ */ g(Vl, [["render", Pl]]), Ml = {
  name: "TablePagination",
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    lastPage: {
      type: Number,
      default: 1
    },
    metaText: {
      type: String,
      default: ""
    },
    pageLabel: {
      type: String,
      default: ""
    },
    prevAriaLabel: {
      type: String,
      default: ""
    },
    nextAriaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["prev", "next"],
  computed: {
    canPrev() {
      return this.currentPage > 1;
    },
    canNext() {
      return this.currentPage < this.lastPage;
    }
  }
}, Dl = { class: "ui-table-pagination" }, El = { class: "ui-table-pagination-meta" }, Ol = { class: "ui-table-pagination-nav" }, Nl = { class: "ui-table-pagination-page" };
function Bl(e, t, r, l, a, i) {
  const d = b("ui-button");
  return s(), n("div", Dl, [
    c("div", El, [
      w(e.$slots, "meta", {}, () => [
        V(p(r.metaText), 1)
      ])
    ]),
    c("div", Ol, [
      v(d, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-left",
        disabled: !i.canPrev,
        "aria-label": r.prevAriaLabel,
        onClick: t[0] || (t[0] = (u) => e.$emit("prev"))
      }, null, 8, ["disabled", "aria-label"]),
      c("div", Nl, p(r.pageLabel), 1),
      v(d, {
        type: "button",
        variant: "outline",
        color: "secondary",
        size: "sm",
        cubed: "",
        "prefix-icon": "chevron-right",
        disabled: !i.canNext,
        "aria-label": r.nextAriaLabel,
        onClick: t[1] || (t[1] = (u) => e.$emit("next"))
      }, null, 8, ["disabled", "aria-label"])
    ])
  ]);
}
const Rl = /* @__PURE__ */ g(Ml, [["render", Bl]]), Fl = ["soft", "strong"], Yl = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Fl.includes(e)
    },
    clickable: {
      type: Boolean,
      default: !1
    },
    interactive: {
      type: Boolean,
      default: !1
    },
    selected: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-table-row",
        this.hover === "soft" && "ui-table-row--soft-hover",
        this.hover === "strong" && "ui-table-row--strong-hover",
        this.interactive && "ui-table-row--interactive",
        this.clickable && "ui-table-row--clickable",
        this.selected && "ui-table-row--selected",
        this.$attrs.class
      );
    }
  }
};
function Hl(e, t, r, l, a, i) {
  return s(), n("tr", {
    class: y(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 2);
}
const Wl = /* @__PURE__ */ g(Yl, [["render", Hl]]), Ul = {
  name: "TabPanel",
  inheritAttrs: !1,
  inject: {
    uiTabs: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number],
      required: !0
    }
  },
  computed: {
    isActive() {
      return this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : void 0;
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : void 0;
    },
    panelClass() {
      return x("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, Gl = ["id", "aria-labelledby"];
function Kl(e, t, r, l, a, i) {
  return De((s(), n("div", S({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, Gl)), [
    [Ee, i.isActive]
  ]);
}
const jl = /* @__PURE__ */ g(Ul, [["render", Kl]]), ql = Ne("ui-timepicker"), q = 40;
function N(e) {
  return String(e).padStart(2, "0");
}
const Zl = {
  name: "TimePicker",
  inheritAttrs: !1,
  props: {
    /** `HH:mm` (24 saat) */
    modelValue: {
      type: String,
      default: ""
    },
    /** Adım (dakika) */
    stepMinutes: {
      type: Number,
      default: 15
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    id: {
      type: String,
      default: void 0
    },
    /** `ui-popover` panel genişliği — dar zaman seçici için */
    popoverWidth: {
      type: [String, Number],
      default: "12.5rem"
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    return {
      fallbackId: ql(),
      menuOpen: !1,
      draftHour: 0,
      draftMinute: 0,
      wheelSyncing: !1,
      _hourScrollTimer: null,
      _minuteScrollTimer: null,
      _wheelUnsub: null
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hourOptions() {
      return Array.from({ length: 24 }, (e, t) => t);
    },
    minuteValues() {
      const e = Math.min(60, Math.max(1, Math.round(this.stepMinutes))), t = [];
      for (let r = 0; r < 60; r += e)
        t.push(r);
      return t;
    },
    hasValue() {
      return this.modelValue != null && this.modelValue !== "";
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : z(this, "ui.timePicker.placeholder", "Select time");
    },
    hourAriaLabel() {
      return z(this, "ui.timePicker.hourAria", "Hour");
    },
    minuteAriaLabel() {
      return z(this, "ui.timePicker.minuteAria", "Minute");
    },
    display() {
      return this.menuOpen ? `${N(this.draftHour)}:${N(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.resolvedPlaceholder;
    },
    supportsScrollEnd() {
      return typeof window > "u" ? !1 : "onscrollend" in window;
    }
  },
  watch: {
    menuOpen(e) {
      e ? (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      })) : this.unbindWheelListeners();
    },
    stepMinutes() {
      this.menuOpen && (this.applyModelToDraft(), this.$nextTick(() => {
        this.$nextTick(() => {
          this.scrollWheelsToDraft(), this.bindWheelListeners();
        });
      }));
    }
  },
  beforeUnmount() {
    clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer), this.unbindWheelListeners();
  },
  methods: {
    pad2: N,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const l = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      l && (t = Math.min(23, Math.max(0, parseInt(l[1], 10))), r = Math.min(59, Math.max(0, parseInt(l[2], 10))));
      const a = this.minuteValues;
      let i = a[0] ?? 0, d = 999;
      for (const u of a) {
        const o = Math.abs(u - r);
        o < d && (d = o, i = u);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelItemHeight(e) {
      if (!e) return q;
      const t = e.querySelector(".ui-timepicker-wheel-item");
      if (!t) return q;
      const r = t.getBoundingClientRect().height;
      return r > 0 ? r : q;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer"), r = this.wheelItemHeight(e);
      if (!t) return (e.clientHeight - r) / 2;
      const l = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(l) ? l : (e.clientHeight - r) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelItemHeight(e), l = this.wheelSpacerTop(e), a = e.scrollTop + e.clientHeight / 2, i = Math.round((a - l - r / 2) / r);
      return Math.min(t, Math.max(0, i));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelItemHeight(e), l = this.wheelSpacerTop(e);
      return Math.max(0, l + t * r + r / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t, { smooth: r = !1 } = {}) {
      if (!e) return;
      const l = this.scrollTopForIndex(e, t);
      r && typeof e.scrollTo == "function" ? e.scrollTo({ top: l, behavior: "smooth" }) : e.scrollTop = l;
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = !0;
      const e = this.draftHour;
      let r = this.minuteValues.indexOf(this.draftMinute);
      r === -1 && (r = 0), this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r), requestAnimationFrame(() => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r), requestAnimationFrame(() => {
          this.wheelSyncing = !1;
        });
      });
    },
    selectHour(e) {
      this.draftHour = e, this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.hourWheel, e, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    selectMinute(e) {
      const t = this.minuteValues;
      if (!t.length) return;
      const r = Math.min(t.length - 1, Math.max(0, e));
      this.draftMinute = t[r], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, r, { smooth: !0 }), window.setTimeout(() => {
        this.wheelSyncing = !1, this.emitDraft();
      }, 220);
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, t = this.$refs.minuteWheel;
      !e || !t || (this.supportsScrollEnd ? (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scrollend", this.onHourScrollEnd), t.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), t.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scrollend", this.onHourScrollEnd), t.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollLive, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollLive, { passive: !0 }), e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollLive), t.removeEventListener("scroll", this.onMinuteScrollLive), e.removeEventListener("scroll", this.onHourScrollDebounced), t.removeEventListener("scroll", this.onMinuteScrollDebounced);
      }));
    },
    unbindWheelListeners() {
      typeof this._wheelUnsub == "function" && (this._wheelUnsub(), this._wheelUnsub = null), clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer);
    },
    onHourScrollLive() {
      if (this.wheelSyncing) return;
      const e = this.$refs.hourWheel;
      e && (this.draftHour = this.indexFromScroll(e, 23));
    },
    onMinuteScrollLive() {
      if (this.wheelSyncing) return;
      const e = this.$refs.minuteWheel, t = this.minuteValues;
      if (!e || !t.length) return;
      const r = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[r];
    },
    onHourScrollDebounced() {
      this.wheelSyncing || (clearTimeout(this._hourScrollTimer), this._hourScrollTimer = setTimeout(() => this.finalizeHourScroll(), 240));
    },
    onMinuteScrollDebounced() {
      this.wheelSyncing || (clearTimeout(this._minuteScrollTimer), this._minuteScrollTimer = setTimeout(() => this.finalizeMinuteScroll(), 240));
    },
    onHourScrollEnd() {
      this.wheelSyncing || (clearTimeout(this._hourScrollTimer), this.finalizeHourScroll());
    },
    onMinuteScrollEnd() {
      this.wheelSyncing || (clearTimeout(this._minuteScrollTimer), this.finalizeMinuteScroll());
    },
    emitDraft() {
      const e = `${N(this.draftHour)}:${N(this.draftMinute)}`;
      e !== this.modelValue && (this.$emit("update:modelValue", e), this.$emit("change", e));
    },
    finalizeHourScroll() {
      const e = this.$refs.hourWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.indexFromScroll(e, 23);
      this.draftHour = t;
      const r = this.scrollTopForIndex(e, t);
      Math.abs(e.scrollTop - r) > 0.5 && (e.scrollTop = r), this.emitDraft();
    },
    finalizeMinuteScroll() {
      const e = this.$refs.minuteWheel;
      if (!e || this.wheelSyncing) return;
      const t = this.minuteValues;
      if (!t.length) return;
      const r = this.indexFromScroll(e, t.length - 1);
      this.draftMinute = t[r];
      const l = this.scrollTopForIndex(e, r);
      Math.abs(e.scrollTop - l) > 0.5 && (e.scrollTop = l), this.emitDraft();
    }
  }
}, Ql = { class: "min-w-0 flex-1 truncate text-foreground" }, Xl = { class: "ui-timepicker-panel w-full p-2" }, Jl = { class: "ui-timepicker-wheels" }, ea = { class: "ui-timepicker-wheels-row" }, ta = ["aria-valuenow", "aria-label"], ia = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, ra = { class: "ui-timepicker-wheel-spacer" }, sa = ["onClick"], la = ["aria-valuenow", "aria-label"], aa = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, na = { class: "ui-timepicker-wheel-spacer" }, oa = ["onClick"];
function ua(e, t, r, l, a, i) {
  const d = b("ui-button"), u = b("ui-popover");
  return s(), n("div", {
    class: y(["ui-timepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    v(u, {
      open: a.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (o) => a.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: o, toggle: h }) => [
        v(d, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "clock",
          disabled: r.disabled,
          "aria-expanded": o ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: k(() => [
            c("span", Ql, p(i.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: k(() => [
        c("div", Xl, [
          c("div", Jl, [
            t[2] || (t[2] = c("div", {
              class: "ui-timepicker-selection-band",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", ea, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": i.hourAriaLabel
              }, [
                c("div", ia, [
                  c("div", ra, [
                    (s(!0), n(C, null, I(i.hourOptions, (o) => (s(), n("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: y([
                        "ui-timepicker-wheel-item",
                        o === a.draftHour ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (h) => i.selectHour(o)
                    }, p(i.pad2(o)), 11, sa))), 128))
                  ])
                ], 512)
              ], 8, ta),
              t[1] || (t[1] = c("span", {
                class: "ui-timepicker-colon",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": i.minuteAriaLabel
              }, [
                c("div", aa, [
                  c("div", na, [
                    (s(!0), n(C, null, I(i.minuteValues, (o, h) => (s(), n("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: y([
                        "ui-timepicker-wheel-item",
                        o === a.draftMinute ? "ui-timepicker-wheel-item--selected" : ""
                      ]),
                      onClick: (f) => i.selectMinute(h)
                    }, p(i.pad2(o)), 11, oa))), 128))
                  ])
                ], 512)
              ], 8, la)
            ]),
            t[3] || (t[3] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--top",
              "aria-hidden": "true"
            }, null, -1)),
            t[4] || (t[4] = c("div", {
              class: "ui-timepicker-wheels-fade ui-timepicker-wheels-fade--bottom",
              "aria-hidden": "true"
            }, null, -1))
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const ca = /* @__PURE__ */ g(Zl, [["render", ua]]), D = Q({
  /** @type {ToastItem[]} */
  items: []
});
let ke = 0;
function B(e = {}) {
  ke += 1;
  const t = ke, r = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return D.items.push(r), r.duration > 0 && (r._timer = setTimeout(() => ee(t), r.duration)), t;
}
function ee(e) {
  const t = D.items.findIndex((l) => l.id === e);
  if (t === -1) return;
  const r = D.items[t];
  r._timer && (clearTimeout(r._timer), r._timer = null), D.items.splice(t, 1);
}
function da() {
  for (const e of D.items)
    e._timer && clearTimeout(e._timer);
  D.items.splice(0);
}
const we = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, xe = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, ha = {
  name: "Toast",
  computed: {
    items() {
      return D.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: ee,
    iconFor(e) {
      return we[e] || we.info;
    },
    iconToneClass(e) {
      return xe[e] || xe.info;
    },
    toastClasses(e) {
      return [`ui-alert ui-alert--${e.variant ?? "info"} ui-alert--toast`];
    },
    toastA11y(e) {
      const t = e.variant === "error";
      return {
        role: t ? "alert" : "status",
        "aria-live": t ? "assertive" : "polite"
      };
    }
  }
}, fa = { class: "ui-toast-host" }, pa = { class: "ui-alert-body" }, ma = {
  key: 0,
  class: "ui-alert-title"
}, ga = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function ba(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button");
  return s(), _(X, { to: "body" }, [
    c("div", fa, [
      v(Oe, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack"
      }, {
        default: k(() => [
          (s(!0), n(C, null, I(i.items, (o) => (s(), n("div", {
            key: o.id,
            class: "pointer-events-auto flex w-full justify-center"
          }, [
            c("div", S({
              class: i.toastClasses(o)
            }, { ref_for: !0 }, i.toastA11y(o)), [
              c("span", {
                class: y(["ui-alert-icon", i.iconToneClass(o.variant)]),
                "aria-hidden": "true"
              }, [
                v(d, {
                  name: i.iconFor(o.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              c("div", pa, [
                o.title ? (s(), n("p", ma, p(o.title), 1)) : m("", !0),
                o.description ? (s(), n("p", ga, p(o.description), 1)) : m("", !0)
              ]),
              v(u, {
                "native-type": "button",
                variant: "ghost",
                color: "secondary",
                cubed: "",
                size: "sm",
                class: "ui-toast-dismiss shrink-0",
                "prefix-icon": "xmark",
                "aria-label": i.dismissLabel,
                onClick: (h) => i.queueDismissToast(o.id)
              }, null, 8, ["aria-label", "onClick"])
            ], 16)
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const ya = /* @__PURE__ */ g(ha, [["render", ba]]), va = ["square", "video", "auto"], _a = ["fill", "sm", "md", "lg"], Se = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, ka = {
  name: "Photo",
  inheritAttrs: !1,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    favorite: {
      type: Boolean,
      default: !1
    },
    aspect: {
      type: String,
      default: "square",
      validator: (e) => va.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => _a.includes(e)
    },
    interactive: {
      type: Boolean,
      default: !0
    },
    preview: {
      type: Boolean,
      default: !0
    },
    overflowLabel: {
      type: String,
      default: ""
    },
    galleryIndex: {
      type: Number,
      default: -1
    }
  },
  emits: ["click", "open-preview"],
  data() {
    return {
      imageFailed: !1,
      previewOpen: !1,
      previewIndex: 0
    };
  },
  computed: {
    rootTag() {
      return this.interactive ? "button" : "div";
    },
    rootClass() {
      return x(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Se[this.size] || Se.fill,
        this.interactive && this.preview && this.src ? "ui-photo--interactive" : "",
        this.overflowLabel ? "ui-photo--overflow" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const e = /* @__PURE__ */ new Set(["class"]), t = {};
      for (const [r, l] of Object.entries(this.$attrs))
        e.has(r) || (t[r] = l);
      return t;
    },
    rootBind() {
      if (!this.interactive) return this.passthroughAttrs;
      const e = this.passthroughAttrs["aria-label"] != null && this.passthroughAttrs["aria-label"] !== "" ? this.passthroughAttrs["aria-label"] : this.resolvedAlt;
      return {
        ...this.passthroughAttrs,
        "aria-label": e
      };
    },
    resolvedAlt() {
      return this.alt ? this.alt : this.$t("ui.photo.fallbackAlt");
    },
    galleryList() {
      return this.src ? [{ src: this.src, alt: this.resolvedAlt }] : [];
    },
    activeItem() {
      return this.galleryList[this.previewIndex] ?? null;
    },
    activeSrc() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.src) ?? "";
    },
    activeAlt() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.alt) || this.resolvedAlt;
    },
    showPrev() {
      return this.galleryList.length > 1 && this.previewIndex > 0;
    },
    showNext() {
      return this.galleryList.length > 1 && this.previewIndex < this.galleryList.length - 1;
    },
    counterLabel() {
      return this.galleryList.length <= 1 ? "" : this.$t("ui.photo.counter", {
        current: this.previewIndex + 1,
        total: this.galleryList.length
      });
    },
    closeLabel() {
      return this.$t("ui.dialog.close");
    },
    prevLabel() {
      return this.$t("ui.photo.prev");
    },
    nextLabel() {
      return this.$t("ui.photo.next");
    },
    previewAriaLabel() {
      return this.$t("ui.photo.previewAria");
    }
  },
  watch: {
    src() {
      this.imageFailed = !1;
    },
    previewOpen(e) {
      typeof document > "u" || (document.body.style.overflow = e ? "hidden" : "");
    }
  },
  beforeUnmount() {
    typeof document < "u" && (document.body.style.overflow = "");
  },
  methods: {
    onClick(e) {
      if (this.$emit("click", e), !(!this.interactive || !this.preview || !this.src)) {
        if (this.galleryIndex >= 0) {
          this.$emit("open-preview", this.galleryIndex);
          return;
        }
        this.previewIndex = 0, this.previewOpen = !0;
      }
    },
    closePreview() {
      this.previewOpen = !1;
    },
    goPrev() {
      this.showPrev && (this.previewIndex -= 1);
    },
    goNext() {
      this.showNext && (this.previewIndex += 1);
    },
    onPreviewKeydown(e) {
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : e.key === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : e.key === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, wa = ["src", "alt"], xa = ["aria-hidden"], Sa = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, Ca = {
  key: 3,
  class: "ui-photo__overflow"
}, La = ["aria-label"], Ta = ["aria-label"], Ia = { class: "ui-photo-preview__panel" }, Aa = ["src", "alt"], $a = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Va(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button");
  return s(), n(C, null, [
    (s(), _(O(i.rootTag), S({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: k(() => [
        r.src && !a.imageFailed ? (s(), n("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (o) => a.imageFailed = !0)
        }, null, 40, wa)) : (s(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          v(d, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, xa)),
        r.favorite ? (s(), n("span", Sa, [
          v(d, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : m("", !0),
        r.overflowLabel ? (s(), n("span", Ca, p(r.overflowLabel), 1)) : m("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (s(), _(X, { to: "body" }, [
      v(Ce, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: k(() => [
          a.previewOpen ? (s(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, Ta),
            c("div", Ia, [
              v(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (s(), _(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: A(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.activeSrc ? (s(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Aa)) : m("", !0),
              i.showNext ? (s(), _(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: A(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.counterLabel ? (s(), n("p", $a, p(i.counterLabel), 1)) : m("", !0)
            ])
          ], 40, La)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Pa = /* @__PURE__ */ g(ka, [["render", Va]]), za = ["square", "video", "auto"], Ma = {
  name: "Photos",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number,
      default: 4
    },
    aspect: {
      type: String,
      default: "square",
      validator: (e) => za.includes(e)
    },
    preview: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      previewOpen: !1,
      previewIndex: 0
    };
  },
  computed: {
    normalizedItems() {
      return (this.items || []).map((e, t) => {
        const r = String((e == null ? void 0 : e.src) ?? (e == null ? void 0 : e.url) ?? "").trim();
        return r ? {
          key: (e == null ? void 0 : e.id) ?? (e == null ? void 0 : e.key) ?? null,
          src: r,
          alt: (e == null ? void 0 : e.alt) ?? "",
          favorite: !!((e == null ? void 0 : e.favorite) ?? (e == null ? void 0 : e.isFavorite) ?? (e == null ? void 0 : e.is_favorite))
        } : null;
      }).filter(Boolean);
    },
    displayCount() {
      return Math.min(this.normalizedItems.length, this.max);
    },
    overflowCount() {
      return Math.max(0, this.normalizedItems.length - this.max);
    },
    visibleItems() {
      return this.normalizedItems.length ? this.normalizedItems.slice(0, this.max) : [];
    },
    overflowLabel() {
      return this.$t("ui.photos.more", { count: this.overflowCount });
    },
    layoutClass() {
      const e = this.visibleItems.length;
      return x(
        e ? `ui-photos--count-${Math.min(e, 4)}` : "ui-photos--empty",
        this.overflowCount > 0 && e >= this.max ? "ui-photos--has-overflow" : ""
      );
    },
    activeItem() {
      return this.normalizedItems[this.previewIndex] ?? null;
    },
    activeSrc() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.src) ?? "";
    },
    activeAlt() {
      var e;
      return ((e = this.activeItem) == null ? void 0 : e.alt) || this.$t("ui.photo.fallbackAlt");
    },
    showPrev() {
      return this.normalizedItems.length > 1 && this.previewIndex > 0;
    },
    showNext() {
      return this.normalizedItems.length > 1 && this.previewIndex < this.normalizedItems.length - 1;
    },
    counterLabel() {
      return this.normalizedItems.length <= 1 ? "" : this.$t("ui.photo.counter", {
        current: this.previewIndex + 1,
        total: this.normalizedItems.length
      });
    },
    closeLabel() {
      return this.$t("ui.dialog.close");
    },
    prevLabel() {
      return this.$t("ui.photo.prev");
    },
    nextLabel() {
      return this.$t("ui.photo.next");
    },
    previewAriaLabel() {
      return this.$t("ui.photo.previewAria");
    }
  },
  watch: {
    previewOpen(e) {
      typeof document > "u" || (document.body.style.overflow = e ? "hidden" : "");
    }
  },
  beforeUnmount() {
    typeof document < "u" && (document.body.style.overflow = "");
  },
  methods: {
    openPreviewAt(e) {
      !this.preview || !this.normalizedItems.length || (this.previewIndex = Math.max(0, Math.min(e, this.normalizedItems.length - 1)), this.previewOpen = !0);
    },
    closePreview() {
      this.previewOpen = !1;
    },
    goPrev() {
      this.showPrev && (this.previewIndex -= 1);
    },
    goNext() {
      this.showNext && (this.previewIndex += 1);
    },
    onPreviewKeydown(e) {
      e.key === "Escape" ? (e.preventDefault(), this.closePreview()) : e.key === "ArrowLeft" ? (e.preventDefault(), this.goPrev()) : e.key === "ArrowRight" && (e.preventDefault(), this.goNext());
    }
  }
}, Da = ["data-count"], Ea = ["aria-label"], Oa = ["aria-label"], Na = { class: "ui-photo-preview__panel" }, Ba = ["src", "alt"], Ra = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Fa(e, t, r, l, a, i) {
  const d = b("ui-photo"), u = b("ui-button");
  return s(), n(C, null, [
    c("div", {
      class: y(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (s(!0), n(C, null, I(i.visibleItems, (o, h) => (s(), _(d, {
        key: o.key || `${o.src}-${h}`,
        src: o.src,
        alt: o.alt || "",
        favorite: !!o.favorite,
        aspect: r.aspect,
        preview: r.preview,
        "gallery-index": h,
        "overflow-label": h === i.visibleItems.length - 1 && i.overflowCount > 0 ? i.overflowLabel : "",
        "aria-label": o.alt || void 0,
        onOpenPreview: i.openPreviewAt
      }, null, 8, ["src", "alt", "favorite", "aspect", "preview", "gallery-index", "overflow-label", "aria-label", "onOpenPreview"]))), 128))
    ], 10, Da),
    (s(), _(X, { to: "body" }, [
      v(Ce, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: k(() => [
          a.previewOpen ? (s(), n("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            c("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, Oa),
            c("div", Na, [
              v(u, {
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "xmark",
                class: "ui-photo-preview__close",
                "aria-label": i.closeLabel,
                onClick: i.closePreview
              }, null, 8, ["aria-label", "onClick"]),
              i.showPrev ? (s(), _(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: A(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.activeSrc ? (s(), n("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Ba)) : m("", !0),
              i.showNext ? (s(), _(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: A(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : m("", !0),
              i.counterLabel ? (s(), n("p", Ra, p(i.counterLabel), 1)) : m("", !0)
            ])
          ], 40, Ea)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Ya = /* @__PURE__ */ g(Ma, [["render", Fa]]);
function W(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function ja() {
  return {
    push: B,
    dismiss: ee,
    clear: da,
    info: (e) => B({ ...W(e), variant: "info" }),
    success: (e) => B({ ...W(e), variant: "success" }),
    warning: (e) => B({ ...W(e), variant: "warning" }),
    error: (e) => B({ ...W(e), variant: "error" })
  };
}
function qa(e = !1) {
  return Q({
    open: !!e,
    show() {
      this.open = !0;
    },
    hide() {
      this.open = !1;
    },
    toggle() {
      this.open = !this.open;
    }
  });
}
function Za() {
  return {
    confirm: ci
  };
}
const Z = {
  en: Re,
  tr: Te
};
function Qa(e = "tr") {
  return Z[e] ?? Z.tr;
}
const Xa = Te, Ha = [
  ["ui-action-card", gt],
  ["ui-action-card-list", _t],
  ["ui-action-group", Fe],
  ["ui-alert", Ye],
  ["ui-avatar", It],
  ["ui-badge", He],
  ["ui-button", We],
  ["ui-card", Ue],
  ["ui-checkbox", si],
  ["ui-checkbox-group", ui],
  ["ui-color-picker", Wt],
  ["ui-currency-input", Zt],
  ["ui-confirm-dialog", fi],
  ["ui-date-picker", Ge],
  ["ui-date-range-picker", Ii],
  ["ui-dialog", Ke],
  ["ui-divider", Le],
  ["ui-dropdown", Pi],
  ["ui-empty", je],
  ["ui-field", Fi],
  ["ui-file", Ji],
  ["ui-form-row", qe],
  ["ui-icon", Ze],
  ["ui-icon-picker", pr],
  ["ui-input", Qe],
  ["ui-password", kr],
  ["ui-phone", Xe],
  ["ui-pin", Tr],
  ["ui-list", Vr],
  ["ui-list-item", Br],
  ["ui-popover", Je],
  ["ui-progress", Zr],
  ["ui-radio", et],
  ["ui-radio-group", tt],
  ["ui-select", it],
  ["ui-menu", rs],
  ["ui-menu-group", os],
  ["ui-menu-item", ds],
  ["ui-menu-nav", ms],
  ["ui-segment", Cs],
  ["ui-segment-group", Vs],
  ["ui-skeleton", rt],
  ["ui-slider", nl],
  ["ui-stepper", Zs],
  ["ui-switch", dl],
  ["ui-table", ml],
  ["ui-table-body", vl],
  ["ui-table-cell", Cl],
  ["ui-table-head", $l],
  ["ui-table-header", zl],
  ["ui-table-pagination", Rl],
  ["ui-table-row", Wl],
  ["ui-tag", st],
  ["ui-tab-list", lt],
  ["ui-tab-panel", jl],
  ["ui-tabs", at],
  ["ui-tab-trigger", nt],
  ["ui-time-picker", ca],
  ["ui-tooltip", ot],
  ["ui-toast", ya],
  ["ui-photo", Pa],
  ["ui-photos", Ya]
];
function Wa(e, t = {}) {
  var d, u;
  const { i18n: r, locale: l, locales: a, theme: i } = t;
  if (i && Be(i), (d = r == null ? void 0 : r.global) != null && d.mergeLocaleMessage) {
    const o = a ?? (l != null ? [l] : [
      typeof r.global.locale == "string" ? r.global.locale : ((u = r.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const h of o) {
      const f = Z[h];
      f && r.global.mergeLocaleMessage(h, f);
    }
  }
  for (const [o, h] of Ha)
    e.component(o, h);
}
const Ja = {
  install: Wa
};
export {
  gt as ActionCard,
  _t as ActionCardList,
  Fe as ActionGroup,
  Ye as Alert,
  It as Avatar,
  He as Badge,
  We as Button,
  Ue as Card,
  si as Checkbox,
  ui as CheckboxGroup,
  Wt as ColorPicker,
  fi as ConfirmDialog,
  Zt as CurrencyInput,
  Ge as DatePicker,
  Ii as DateRangePicker,
  Ke as Dialog,
  Le as Divider,
  Pi as Dropdown,
  je as Empty,
  Fi as Field,
  Ji as File,
  qe as FormRow,
  Ze as Icon,
  pr as IconPicker,
  Qe as Input,
  Vr as List,
  Br as ListItem,
  rs as Menu,
  os as MenuGroup,
  ds as MenuItem,
  ms as MenuNav,
  kr as Password,
  Xe as Phone,
  Pa as Photo,
  Ya as Photos,
  Tr as Pin,
  Je as Popover,
  Zr as Progress,
  et as Radio,
  tt as RadioGroup,
  Cs as Segment,
  Vs as SegmentGroup,
  it as Select,
  rt as Skeleton,
  nl as Slider,
  Zs as Stepper,
  dl as Switch,
  lt as TabList,
  jl as TabPanel,
  nt as TabTrigger,
  ml as Table,
  vl as TableBody,
  Cl as TableCell,
  $l as TableHead,
  zl as TableHeader,
  Rl as TablePagination,
  Wl as TableRow,
  at as Tabs,
  st as Tag,
  ca as TimePicker,
  ya as Toast,
  ot as Tooltip,
  Be as applyUiTheme,
  da as clearToasts,
  rn as createUiId,
  Ne as createUiIdFactory,
  Ja as default,
  ee as dismissToast,
  Ka as formatCurrencyAmount,
  Ie as getCurrencySymbol,
  Qa as getUiMessages,
  sn as mergeUiTheme,
  ln as pickPassthroughAttrs,
  B as pushToast,
  ci as requestConfirm,
  J as resolveCurrencyCode,
  z as resolveUiText,
  Ut as sanitizeMoneyInput,
  Xa as uiMessagesTr,
  Za as useConfirm,
  qa as useDialog,
  ja as useToast
};
//# sourceMappingURL=index.js.map
