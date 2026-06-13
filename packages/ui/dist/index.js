import { _ as g, n as x, d as Ce, t as Te, m as Pe, o as Me, A as De, a as Oe, B as Ne, b as Ee, C as Be, D as Re, c as Fe, E as Ye, F as Ge, I as He, e as We, P as Ue, f as Ke, R as je, g as qe, S as Ze, h as Qe, k as Xe, T as Je, j as et, i as tt, l as it } from "./apply-theme-CVUYw3KK.js";
import { p as Ya } from "./apply-theme-CVUYw3KK.js";
import { openBlock as s, createBlock as _, resolveDynamicComponent as O, mergeProps as S, withCtx as k, createElementBlock as n, toDisplayString as p, resolveComponent as b, normalizeClass as v, createVNode as y, createElementVNode as c, withModifiers as A, createTextVNode as V, createCommentVNode as m, Fragment as C, renderList as I, normalizeStyle as N, withKeys as se, renderSlot as w, reactive as Z, normalizeProps as rt, guardReactiveProps as st, withDirectives as lt, vShow as at, Teleport as Q, TransitionGroup as nt, Transition as Le } from "vue";
const ot = ["sm", "md", "lg"], le = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg"
}, ae = Object.freeze({
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
}), ne = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function ut(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return ne[t] && (t = ne[t]), t >= "A" && t <= "Z" ? t : "default";
}
function ct(e) {
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
const dt = {
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
      validator: (e) => ot.includes(e)
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
        le[this.size] || le.md,
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
      return ct(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? ut(e[0]) : "default";
    },
    letterColors() {
      return ae[this.colorLetterKey] || ae.default;
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
}, ht = ["src", "alt"], ft = ["role", "aria-label", "aria-hidden"];
function pt(e, t, r, l, a, i) {
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
      }, null, 40, ht)) : (s(), n("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, p(i.displayInitials), 9, ft))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const mt = /* @__PURE__ */ g(dt, [["render", pt]]), gt = [
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
], bt = {
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
      presetColors: gt
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
      return this.triggerPlaceholder || this.$t("ui.colorPicker.triggerPlaceholder");
    },
    displayValue() {
      return this.localColor || this.triggerLabel;
    },
    popoverTitleLabel() {
      return this.popoverTitle || this.$t("ui.colorPicker.popoverTitle");
    },
    clearLabelText() {
      return this.clearLabel || this.$t("ui.colorPicker.clear");
    },
    customColorLabelText() {
      return this.customColorLabel || this.$t("ui.colorPicker.customHex");
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
}, yt = ["disabled", "aria-expanded", "onClick"], vt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, _t = { class: "ui-select-field-suffix" }, kt = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, wt = { class: "ui-color-picker-panel" }, xt = { class: "ui-color-picker-panel__header" }, St = { class: "ui-color-picker-panel__title" }, Ct = { class: "ui-color-picker-swatches" }, Tt = ["title", "onClick"], Lt = { class: "ui-color-picker-custom" }, It = { class: "ui-color-picker-panel__title" }, At = { class: "ui-color-picker-custom__row" };
function $t(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button"), o = b("ui-input"), h = b("ui-popover");
  return s(), n("div", {
    class: v(i.rootClass)
  }, [
    y(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => a.popoverOpen = f),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: r.disabled
    }, {
      trigger: k(({ open: f, toggle: T }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": f ? "true" : "false",
          "aria-haspopup": !0,
          onClick: T
        }, [
          c("span", vt, [
            i.localColor ? (s(), n("span", {
              key: 0,
              class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
              style: N({ backgroundColor: i.localColor })
            }, null, 4)) : (s(), _(d, {
              key: 1,
              name: "palette",
              size: "xs",
              class: "text-muted-foreground"
            }))
          ]),
          c("span", {
            class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
          }, p(i.displayValue), 3),
          c("span", _t, [
            c("span", kt, [
              y(d, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, yt)
      ]),
      content: k(() => [
        c("div", wt, [
          c("div", xt, [
            c("span", St, p(i.popoverTitleLabel), 1),
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
          c("div", Ct, [
            (s(!0), n(C, null, I(a.presetColors, (f) => (s(), n("button", {
              key: f,
              type: "button",
              class: v(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === f }]),
              style: N({ backgroundColor: f }),
              title: f,
              onClick: (T) => i.selectColor(f)
            }, [
              i.localColor === f ? (s(), _(d, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : m("", !0)
            ], 14, Tt))), 128))
          ]),
          c("div", Lt, [
            c("span", It, p(i.customColorLabelText), 1),
            c("div", At, [
              y(o, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (f) => i.localColor = f),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              c("span", {
                class: "ui-color-picker-swatch ui-color-picker-swatch--preview",
                style: N({ backgroundColor: i.localColor || "transparent" }),
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
const Vt = /* @__PURE__ */ g(bt, [["render", $t]]), oe = {
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
function X(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in R ? t : "TRY";
  const r = String(e).trim();
  if (oe[r])
    return oe[r];
  const l = r.toUpperCase();
  return R[l] ? l : t in R ? t : "TRY";
}
function Ie(e) {
  var r;
  const t = X(e);
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
function Pa(e, t, r = "tr-TR") {
  const l = Number(e) || 0, a = X(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: a }).format(l);
  } catch {
    return `${Ie(a)}${l.toFixed(2)}`;
  }
}
function zt(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const l = t.slice(0, r), a = t.slice(r + 1).replace(/\./g, "");
    t = `${l}.${a}`;
  }
  return t;
}
let ue = 0;
const Pt = ["sm", "md", "lg"], Mt = {
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
      validator: (e) => Pt.includes(e)
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
    return ue += 1, { fallbackId: `ui-currency-input-${ue}` };
  },
  computed: {
    displaySymbol() {
      return Ie(this.currency);
    },
    resolvedCurrencyCode() {
      return X(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = zt(e);
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
}, Dt = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Ot(e, t, r, l, a, i) {
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
      c("span", Dt, p(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Nt = /* @__PURE__ */ g(Mt, [["render", Ot]]), Et = {
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
}, Bt = ["type", "name", "value", "checked"], Rt = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Ft = { class: "ui-checkbox-body" }, Yt = {
  key: 0,
  class: "ui-checkbox-label"
}, Gt = {
  key: 1,
  class: "ui-checkbox-description"
};
function Ht(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("label", {
    class: v(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = se(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = se(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    c("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.onNativeChange && i.onNativeChange(...u))
    }, null, 40, Bt),
    c("span", Rt, [
      i.isChecked ? (s(), _(d, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : m("", !0)
    ]),
    c("span", Ft, [
      e.$slots.label || r.label ? (s(), n("span", Yt, [
        w(e.$slots, "label", {}, () => [
          V(p(r.label), 1)
        ])
      ])) : m("", !0),
      r.description ? (s(), n("span", Gt, p(r.description), 1)) : m("", !0)
    ])
  ], 34);
}
const Wt = /* @__PURE__ */ g(Et, [["render", Ht]]), Ut = ["list", "button", "List", "Button"];
let ce = 0;
const Kt = {
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
      validator: (e) => Ut.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return ce += 1, { groupName: `ui-checkbox-group-${ce}` };
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
}, jt = ["aria-label"];
function qt(e, t, r, l, a, i) {
  return s(), n("div", {
    class: v(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    w(e.$slots, "default")
  ], 10, jt);
}
const Zt = /* @__PURE__ */ g(Kt, [["render", qt]]), L = Z({
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
function Qt(e = {}) {
  return new Promise((t) => {
    L.title = e.title ?? "", L.description = e.description ?? "", L.confirmLabel = e.confirmLabel ?? "", L.cancelLabel = e.cancelLabel ?? "", L.destructive = !!e.destructive, L._resolve = t, L.open = !0;
  });
}
function U(e) {
  const t = L._resolve;
  L.open = !1, L._resolve = null, t && t(!!e);
}
const Xt = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return L;
    },
    syncOpen: {
      get() {
        return L.open;
      },
      set(e) {
        e ? L.open = !0 : L._resolve ? U(!1) : L.open = !1;
      }
    },
    confirmText() {
      return L.confirmLabel ? L.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return L.cancelLabel ? L.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      U(!0);
    },
    onCancel() {
      U(!1);
    }
  }
};
function Jt(e, t, r, l, a, i) {
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
      y(d, {
        color: "secondary",
        rounded: "",
        onClick: i.onCancel
      }, {
        default: k(() => [
          V(p(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      y(d, {
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
const ei = /* @__PURE__ */ g(Xt, [["render", Jt]]);
let de = 0;
function F(e) {
  return String(e).padStart(2, "0");
}
function M(e) {
  return `${e.getFullYear()}-${F(e.getMonth() + 1)}-${F(e.getDate())}`;
}
function Y(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), l = Number(t[2]) - 1, a = Number(t[3]), i = new Date(r, l, a);
  return i.getFullYear() !== r || i.getMonth() !== l || i.getDate() !== a ? null : i;
}
function z(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function K(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function he(e, t, r, l) {
  const a = `${e}-${F(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let d = `${e}-${F(t + 1)}-${F(i)}`;
  if (r && d > r && (d = r), l && a < l && d < l) return null;
  let u = a;
  return l && u < l && (u = l), z(u, d) > 0 ? null : [u, d];
}
const ti = {
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
    de += 1;
    const e = de, t = ((l = this.modelValue) == null ? void 0 : l[0]) || "", r = Y(t) || Y((a = this.modelValue) == null ? void 0 : a[1]) || /* @__PURE__ */ new Date();
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
        return z(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), t = M(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const l = M(r), a = e.getMonth(), i = e.getFullYear(), d = new Date(i, a - 1, 1), u = d.getFullYear(), o = d.getMonth(), h = (T, $) => typeof this.$t == "function" ? this.$t(T, $) : T;
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
          range: he(i, a, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: K(u, o, this.locale)
          }),
          range: he(u, o, this.maxYmd, this.minYmd)
        }
      ].map((T) => ({
        ...T,
        disabled: !T.range || this.isRangeDisabled(T.range[0], T.range[1])
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
        const h = new Date(l.getFullYear(), l.getMonth(), l.getDate() + o), f = h.getMonth() === t && h.getFullYear() === e, T = h.getDate(), $ = M(h), $e = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, Ve = M(/* @__PURE__ */ new Date()) === $, ze = !!(this.minYmd && $ < this.minYmd) || !!(this.maxYmd && $ > this.maxYmd);
        let ee = !1, te = !1;
        if (d) {
          const ie = z(a, i) <= 0 ? a : i, re = z(a, i) <= 0 ? i : a;
          ee = z($, ie) >= 0 && z($, re) <= 0, te = $ === ie || $ === re;
        }
        u.push({
          key: $e,
          d: T,
          date: h,
          today: Ve,
          inMonth: f,
          disabled: ze,
          inRange: ee,
          endpoint: te
        });
      }
      return u;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = M(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, l] = e.range;
      this.pickingStart = r, this.pickingEnd = l, this.$emit("update:modelValue", [r, l]), this.$emit("change", [r, l]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = M(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let l = this.pickingStart, a = r;
      if (z(a, l) < 0) {
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
}, ii = { class: "min-w-0 flex-1 truncate text-foreground" }, ri = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, si = { class: "ui-daterangepicker-layout" }, li = ["aria-label"], ai = { class: "ui-daterangepicker-calendars" }, ni = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, oi = { class: "ui-daterangepicker-month-row" }, ui = { class: "mb-2 flex items-center justify-between gap-2" }, ci = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, di = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, hi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, fi = { class: "ui-datepicker-grid" };
function pi(e, t, r, l, a, i) {
  const d = b("ui-button"), u = b("ui-popover");
  return s(), n("div", {
    class: v(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    y(u, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (o) => a.menuOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: o, toggle: h }) => [
        y(d, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          rounded: "",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: r.disabled,
          "aria-expanded": o ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: k(() => [
            c("span", ii, p(i.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: k(({ close: o }) => [
        c("div", ri, [
          c("div", si, [
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
            ], 8, li),
            c("div", ai, [
              i.rangeHint ? (s(), n("p", ni, p(i.rangeHint), 1)) : m("", !0),
              c("div", oi, [
                (s(!0), n(C, null, I(i.calendarPanes, (h) => (s(), n("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  c("div", ui, [
                    h.showPrev ? (s(), _(d, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = A((f) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), n("span", ci)),
                    c("span", di, p(h.title), 1),
                    h.showNext ? (s(), _(d, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = A((f) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (s(), n("span", hi))
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
                  c("div", fi, [
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
                      onMouseenter: (T) => i.onCellHover(f),
                      onClick: (T) => i.pick(f, o)
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
const mi = /* @__PURE__ */ g(ti, [["render", pi]]), gi = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], bi = {
  name: "Dropdown",
  components: { Divider: Ce },
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
      validator: (e) => gi.includes(e)
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
function yi(e, t, r, l, a, i) {
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
      w(e.$slots, "trigger", rt(st(h)))
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
        }) : (s(!0), n(C, { key: 1 }, I(r.items, (f, T) => (s(), n(C, { key: T }, [
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
const vi = /* @__PURE__ */ g(bi, [["render", yi]]), _i = ["solid", "regular", "brands", "light", "duotone", "thin"], ki = {
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
      validator: (e) => _i.includes(e)
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
}, wi = {
  key: 0,
  class: "ui-field__title-row"
}, xi = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Si = {
  key: 1,
  class: "ui-field__title"
}, Ci = {
  key: 1,
  class: "ui-field__value"
}, Ti = {
  key: 2,
  class: "ui-field__subtitle"
};
function Li(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("div", S({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (s(), n("div", wi, [
      i.showIcon ? (s(), n("span", xi, [
        y(d, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : m("", !0),
      r.title ? (s(), n("span", Si, p(r.title), 1)) : m("", !0)
    ])) : m("", !0),
    i.hasValue ? (s(), n("div", Ci, [
      w(e.$slots, "default")
    ])) : m("", !0),
    r.subtitle ? (s(), n("p", Ti, p(r.subtitle), 1)) : m("", !0)
  ], 16);
}
const Ii = /* @__PURE__ */ g(ki, [["render", Li]]), Ai = ["auto", "file", "folder"], $i = ["sm", "md", "lg"], Vi = { icon: "folder", color: "text-sky-500" }, zi = { icon: "file-lines", color: "text-muted-foreground" }, Pi = {
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
}, fe = {
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
function W(e) {
  return String(e ?? "").trim();
}
function Mi(e) {
  const t = W(e);
  return /[/\\]\s*$/.test(t);
}
function Ae(e) {
  const t = W(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function Di(e) {
  const t = Ae(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
}
const pe = {
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
}, Oi = {
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
      validator: (e) => Ai.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => $i.includes(e)
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
      return fe[this.size] || fe.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : Mi(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = W(this.name);
      return e ? this.basenameOnly ? Ae(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return W(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Vi;
      const e = Di(this.name);
      return Pi[e] || zi;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? pe[this.color] !== void 0 ? pe[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, Ni = ["aria-label"], Ei = ["title"];
function Bi(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("div", {
    class: v(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    c("div", {
      class: v(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      y(d, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: v(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    c("span", {
      class: v(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, p(i.displayLabel), 11, Ei)
  ], 10, Ni);
}
const Ri = /* @__PURE__ */ g(Oi, [["render", Bi]]), Fi = ["solid", "regular", "brands", "light", "duotone", "thin"], Yi = {
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
      validator: (e) => Fi.includes(e)
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
}, Gi = ["disabled", "aria-expanded", "onClick"], Hi = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Wi = { class: "ui-select-field-suffix" }, Ui = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Ki = { class: "ui-icon-picker-panel" }, ji = { class: "ui-icon-picker-panel__header" }, qi = { class: "ui-icon-picker-panel__title" }, Zi = { class: "ui-icon-picker-panel__search" }, Qi = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, Xi = {
  key: 1,
  class: "ui-icon-picker-grid"
}, Ji = ["title", "onClick"];
function er(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button"), o = b("ui-input"), h = b("ui-popover");
  return s(), n("div", {
    class: v(i.rootClass)
  }, [
    y(h, {
      open: a.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => a.popoverOpen = f),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: f, toggle: T }) => [
        c("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": f ? "true" : "false",
          "aria-haspopup": !0,
          onClick: T
        }, [
          c("span", Hi, [
            y(d, {
              name: i.localIcon || "grid",
              type: r.iconType,
              size: "xs"
            }, null, 8, ["name", "type"])
          ]),
          c("span", {
            class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
          }, p(i.localIcon || i.triggerLabel), 3),
          c("span", Wi, [
            c("span", Ui, [
              y(d, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, Gi)
      ]),
      content: k(() => [
        c("div", Ki, [
          c("div", ji, [
            c("span", qi, p(i.popoverTitleLabel), 1),
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
          c("div", Zi, [
            y(o, {
              modelValue: a.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => a.searchQuery = f),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (s(), n("div", Xi, [
            (s(!0), n(C, null, I(i.filteredIcons, (f) => (s(), n("button", {
              key: f,
              type: "button",
              class: v(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === f }]),
              title: f,
              onClick: (T) => i.selectIcon(f)
            }, [
              y(d, {
                name: f,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, Ji))), 128))
          ])) : (s(), n("div", Qi, p(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const tr = /* @__PURE__ */ g(Yi, [["render", er]]);
function ir(e) {
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
const rr = ["sm", "md", "lg"], sr = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => rr.includes(e)
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
      return ir(this.modelValue);
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
}, lr = ["aria-label", "aria-pressed", "disabled"], ar = ["id", "aria-live"];
function nr(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-input"), o = b("ui-progress");
  return s(), n("div", {
    class: v(["ui-password", [e.$attrs.class]])
  }, [
    y(u, S({
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
          y(d, {
            name: a.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, lr)
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
      y(o, {
        type: "bar",
        size: "md",
        value: i.strength.percent,
        variant: i.strengthVariant,
        "aria-valuetext": i.strengthText
      }, null, 8, ["value", "variant", "aria-valuetext"]),
      i.strength.label !== "empty" ? (s(), n("span", {
        key: 0,
        class: v(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, p(i.strengthText), 3)) : m("", !0)
    ], 8, ar)) : m("", !0)
  ], 2);
}
const or = /* @__PURE__ */ g(sr, [["render", nr]]), ur = ["numeric", "alphanumeric"], cr = {
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
      validator: (e) => ur.includes(e)
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
}, dr = ["aria-label"], hr = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function fr(e, t, r, l, a, i) {
  return s(), n("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: v([
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
    }, null, 40, hr))), 128))
  ], 10, dr);
}
const pr = /* @__PURE__ */ g(cr, [["render", fr]]), mr = ["ul", "ol", "div"], gr = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => mr.includes(e)
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
function br(e, t, r, l, a, i) {
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
const yr = /* @__PURE__ */ g(gr, [["render", br]]), vr = ["solid", "regular", "brands", "light", "duotone", "thin"], _r = {
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
      validator: (e) => vr.includes(e)
    }
  }
}, kr = {
  class: "ui-list-item",
  role: "listitem"
}, wr = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, xr = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Sr = { class: "ui-list-item-content min-w-0 flex-1" };
function Cr(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("li", kr, [
    r.prefixIcon ? (s(), n("span", wr, [
      y(d, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (s(), n("span", xr, [
      w(e.$slots, "prefix")
    ])) : m("", !0),
    c("div", Sr, [
      w(e.$slots, "default")
    ])
  ]);
}
const Tr = /* @__PURE__ */ g(_r, [["render", Cr]]), Lr = ["bar", "circle"], me = ["sm", "md", "lg"], ge = ["thin", "md"], Ir = ["default", "weak", "fair", "good", "strong"], G = { sm: 16, md: 20, lg: 24 }, Ar = { sm: 1.5, md: 2, lg: 2 }, $r = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Lr.includes(e)
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
      validator: (e) => Ir.includes(e)
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
      const e = this.type === "circle" ? me.includes(this.size) ? this.size : "sm" : ge.includes(this.size) ? this.size : "md";
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
      return me.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return ge.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = G[this.circleSizeKey] ?? G.sm;
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
      const e = G[this.circleSizeKey] ?? G.sm, t = Ar[this.circleSizeKey] ?? 2, r = (e - t) / 2, l = e / 2, a = 2 * Math.PI * r, i = a * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: l, circumference: a, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, Vr = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], zr = ["width", "height", "viewBox"], Pr = ["cx", "cy", "r", "stroke-width"], Mr = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], Dr = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function Or(e, t, r, l, a, i) {
  return s(), n("div", {
    class: v(i.rootClass),
    style: N(i.circleRootStyle),
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
      }, null, 8, Pr),
      c("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, Mr)
    ], 8, zr)) : (s(), n("div", Dr, [
      c("div", {
        class: "ui-progress-bar-indicator",
        style: N({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, Vr);
}
const Nr = /* @__PURE__ */ g($r, [["render", Or]]), Er = ["sm", "md", "lg", "full"], be = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, Br = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => Er.includes(e)
    }
  },
  computed: {
    rootClass() {
      return x(
        "ui-menu",
        be[this.width] || be.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Rr = {
  key: 0,
  class: "ui-menu-header"
}, Fr = { class: "ui-menu-body" }, Yr = {
  key: 1,
  class: "ui-menu-footer"
};
function Gr(e, t, r, l, a, i) {
  return s(), n("nav", S({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (s(), n("div", Rr, [
      w(e.$slots, "header")
    ])) : m("", !0),
    c("div", Fr, [
      w(e.$slots, "default")
    ]),
    e.$slots.footer ? (s(), n("div", Yr, [
      w(e.$slots, "footer")
    ])) : m("", !0)
  ], 16);
}
const Hr = /* @__PURE__ */ g(Br, [["render", Gr]]), Wr = {
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
}, Ur = {
  key: 0,
  class: "ui-menu-group-label"
}, Kr = { class: "ui-menu-group-items" };
function jr(e, t, r, l, a, i) {
  return s(), n("div", S({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (s(), n("p", Ur, p(r.label), 1)) : m("", !0),
    c("div", Kr, [
      w(e.$slots, "default")
    ])
  ], 16);
}
const qr = /* @__PURE__ */ g(Wr, [["render", jr]]), Zr = {
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
function Qr(e, t, r, l, a, i) {
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
const Xr = /* @__PURE__ */ g(Zr, [["render", Qr]]), Jr = {
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
}, es = ["aria-label"];
function ts(e, t, r, l, a, i) {
  return s(), n("div", S({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, es);
}
const is = /* @__PURE__ */ g(Jr, [["render", ts]]), rs = {
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
}, ss = ["aria-checked", "disabled"], ls = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, as = {
  key: 1,
  class: "ui-segment-label"
}, ns = {
  key: 2,
  class: "sr-only"
}, os = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, us = {
  key: 1,
  class: "ui-segment-label"
}, cs = {
  key: 2,
  class: "sr-only"
};
function ds(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("button", {
    type: "button",
    role: "radio",
    class: v(i.segmentClass),
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
        class: v(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (s(), n("span", ls, [
          y(d, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : m("", !0),
        i.showLabel ? (s(), n("span", as, p(r.label), 1)) : r.label ? (s(), n("span", ns, p(r.label), 1)) : m("", !0)
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
      r.icon ? (s(), n("span", os, [
        y(d, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : m("", !0),
      i.showLabel ? (s(), n("span", us, p(r.label), 1)) : r.label ? (s(), n("span", cs, p(r.label), 1)) : m("", !0)
    ], 64))
  ], 10, ss);
}
const hs = /* @__PURE__ */ g(rs, [["render", ds]]), fs = ["sm", "md", "lg"], ps = ["horizontal", "vertical"], ms = {
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
      validator: (e) => fs.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => ps.includes(e)
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
}, gs = ["aria-label"];
function bs(e, t, r, l, a, i) {
  return s(), n("div", S({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, gs);
}
const ys = /* @__PURE__ */ g(ms, [["render", bs]]), vs = ["horizontal", "vertical"], _s = ["default", "pills"], ks = {
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
      validator: (e) => _s.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => vs.includes(e)
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
}, ws = ["aria-label"], xs = { class: "ui-stepper-pills-track" }, Ss = {
  key: 0,
  class: "ui-stepper-pills-label"
}, Cs = { class: "flex w-full min-w-0 items-center justify-center" }, Ts = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Ls = {
  key: 1,
  class: "tabular-nums"
}, Is = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, As = { class: "ui-stepper-title ui-stepper-title--horizontal" }, $s = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, Vs = { class: "flex flex-col items-center" }, zs = {
  key: 1,
  class: "tabular-nums"
}, Ps = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, Ms = { class: "ui-stepper-title" }, Ds = {
  key: 0,
  class: "ui-stepper-description"
};
function Os(e, t, r, l, a, i) {
  const d = b("ui-icon");
  return s(), n("div", S({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (s(), n(C, { key: 0 }, [
      c("div", xs, [
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
      r.showLabel ? (s(), n("p", Ss, p(i.pillsLabel), 1)) : m("", !0)
    ], 64)) : r.direction === "horizontal" ? (s(!0), n(C, { key: 1 }, I(i.normalizedSteps, (u, o) => (s(), n("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      c("div", Cs, [
        o > 0 ? (s(), n("span", {
          key: 0,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), n("span", Ts)),
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
            }, null, 8, ["name", "type"])) : (s(), n("span", Ls, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (s(), n("span", {
          key: 2,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (s(), n("span", Is))
      ]),
      c("p", As, p(u.title), 1),
      u.description ? (s(), n("p", $s, p(u.description), 1)) : m("", !0)
    ]))), 128)) : (s(!0), n(C, { key: 2 }, I(i.normalizedSteps, (u, o) => (s(), n("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      c("div", Vs, [
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
            }, null, 8, ["name", "type"])) : (s(), n("span", zs, p(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (s(), n("span", {
          key: 0,
          class: v(["ui-stepper-vrail", i.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : m("", !0)
      ]),
      c("div", Ps, [
        c("p", Ms, p(u.title), 1),
        u.description ? (s(), n("p", Ds, p(u.description), 1)) : m("", !0)
      ])
    ]))), 128))
  ], 16, ws);
}
const Ns = /* @__PURE__ */ g(ks, [["render", Os]]);
let ye = 0;
const Es = {
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
    return ye += 1, { fallbackId: `ui-slider-${ye}` };
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
}, Bs = {
  key: 0,
  class: "ui-slider-header"
}, Rs = {
  key: 0,
  class: "ui-form-label"
}, Fs = {
  key: 1,
  class: "ui-slider-value"
}, Ys = { class: "ui-slider-rail" }, Gs = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], Hs = {
  key: 1,
  class: "ui-slider-scale"
}, Ws = { key: 0 }, Us = { key: 1 };
function Ks(e, t, r, l, a, i) {
  const d = b("ui-progress");
  return s(), n("div", {
    class: v(i.rootClass)
  }, [
    r.label || i.hasValue ? (s(), n("div", Bs, [
      r.label ? (s(), n("span", Rs, p(r.label), 1)) : m("", !0),
      i.hasValue ? (s(), n("span", Fs, p(r.valueText), 1)) : m("", !0)
    ])) : m("", !0),
    c("div", Ys, [
      y(d, {
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
      }), null, 16, Gs)
    ]),
    r.minLabel || r.maxLabel ? (s(), n("div", Hs, [
      r.minLabel ? (s(), n("span", Ws, p(r.minLabel), 1)) : m("", !0),
      r.maxLabel ? (s(), n("span", Us, p(r.maxLabel), 1)) : m("", !0)
    ])) : m("", !0)
  ], 2);
}
const js = /* @__PURE__ */ g(Es, [["render", Ks]]);
let ve = 0;
const qs = {
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
    return ve += 1, { fallbackId: `ui-switch-${ve}` };
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
}, Zs = ["id", "aria-checked", "disabled", "aria-describedby"];
function Qs(e, t, r, l, a, i) {
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
      class: v(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      c("span", {
        class: v(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, Zs);
}
const Xs = /* @__PURE__ */ g(qs, [["render", Qs]]), Js = {
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
}, el = { class: "ui-table-scroll" };
function tl(e, t, r, l, a, i) {
  return s(), n("div", el, [
    c("table", S({ class: i.rootClass }, i.passthroughAttrs), [
      w(e.$slots, "default")
    ], 16)
  ]);
}
const il = /* @__PURE__ */ g(Js, [["render", tl]]), rl = {
  name: "TableBody"
}, sl = { class: "ui-table-body" };
function ll(e, t, r, l, a, i) {
  return s(), n("tbody", sl, [
    w(e.$slots, "default")
  ]);
}
const al = /* @__PURE__ */ g(rl, [["render", ll]]), nl = ["left", "center", "right"], ol = ["title", "secondary", "body"], ul = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => nl.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || ol.includes(e)
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
}, cl = ["colspan"];
function dl(e, t, r, l, a, i) {
  return s(), n("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: v(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 10, cl);
}
const hl = /* @__PURE__ */ g(ul, [["render", dl]]), fl = ["left", "center", "right"], pl = ["sm", "md", "lg"], ml = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => fl.includes(e)
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
      if (!(this.iconCol || pl.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function gl(e, t, r, l, a, i) {
  return s(), n("th", {
    class: v(i.rootClass),
    style: N(i.widthStyle)
  }, [
    w(e.$slots, "default")
  ], 6);
}
const bl = /* @__PURE__ */ g(ml, [["render", gl]]), yl = {
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
function vl(e, t, r, l, a, i) {
  return s(), n("thead", {
    class: v(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 2);
}
const _l = /* @__PURE__ */ g(yl, [["render", vl]]), kl = {
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
}, wl = { class: "ui-table-pagination" }, xl = { class: "ui-table-pagination-meta" }, Sl = { class: "ui-table-pagination-nav" }, Cl = { class: "ui-table-pagination-page" };
function Tl(e, t, r, l, a, i) {
  const d = b("ui-button");
  return s(), n("div", wl, [
    c("div", xl, [
      w(e.$slots, "meta", {}, () => [
        V(p(r.metaText), 1)
      ])
    ]),
    c("div", Sl, [
      y(d, {
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
      c("div", Cl, p(r.pageLabel), 1),
      y(d, {
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
const Ll = /* @__PURE__ */ g(kl, [["render", Tl]]), Il = ["soft", "strong"], Al = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Il.includes(e)
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
function $l(e, t, r, l, a, i) {
  return s(), n("tr", {
    class: v(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 2);
}
const Vl = /* @__PURE__ */ g(Al, [["render", $l]]), zl = {
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
}, Pl = ["id", "aria-labelledby"];
function Ml(e, t, r, l, a, i) {
  return lt((s(), n("div", S({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, Pl)), [
    [at, i.isActive]
  ]);
}
const Dl = /* @__PURE__ */ g(zl, [["render", Ml]]);
let _e = 0;
const D = 40;
function E(e) {
  return String(e).padStart(2, "0");
}
const Ol = {
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
      default: "Select time"
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
    return _e += 1, {
      fallbackId: `ui-timepicker-${_e}`,
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
    display() {
      return this.menuOpen ? `${E(this.draftHour)}:${E(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.placeholder;
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
    pad2: E,
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
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer");
      if (!t) return (e.clientHeight - D) / 2;
      const r = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(r) ? r : (e.clientHeight - D) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelSpacerTop(e), l = e.scrollTop + e.clientHeight / 2, a = Math.round((l - r - D / 2) / D);
      return Math.min(t, Math.max(0, a));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelSpacerTop(e);
      return Math.max(0, r + t * D + D / 2 - e.clientHeight / 2);
    },
    scrollWheelToIndex(e, t) {
      e && (e.scrollTop = this.scrollTopForIndex(e, t));
    },
    scrollWheelsToDraft() {
      this.wheelSyncing = !0;
      const e = this.draftHour;
      let r = this.minuteValues.indexOf(this.draftMinute);
      r === -1 && (r = 0);
      const l = () => {
        this.scrollWheelToIndex(this.$refs.hourWheel, e), this.scrollWheelToIndex(this.$refs.minuteWheel, r);
      };
      l(), requestAnimationFrame(() => {
        l(), requestAnimationFrame(() => {
          this.wheelSyncing = !1;
        });
      });
    },
    selectHour(e) {
      this.draftHour = e, this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.hourWheel, e), requestAnimationFrame(() => {
        this.wheelSyncing = !1, this.emitDraft();
      });
    },
    selectMinute(e) {
      const t = this.minuteValues;
      if (!t.length) return;
      const r = Math.min(t.length - 1, Math.max(0, e));
      this.draftMinute = t[r], this.wheelSyncing = !0, this.scrollWheelToIndex(this.$refs.minuteWheel, r), requestAnimationFrame(() => {
        this.wheelSyncing = !1, this.emitDraft();
      });
    },
    bindWheelListeners() {
      this.unbindWheelListeners();
      const e = this.$refs.hourWheel, t = this.$refs.minuteWheel;
      !e || !t || (this.supportsScrollEnd ? (e.addEventListener("scrollend", this.onHourScrollEnd), t.addEventListener("scrollend", this.onMinuteScrollEnd), this._wheelUnsub = () => {
        e.removeEventListener("scrollend", this.onHourScrollEnd), t.removeEventListener("scrollend", this.onMinuteScrollEnd);
      }) : (e.addEventListener("scroll", this.onHourScrollDebounced, { passive: !0 }), t.addEventListener("scroll", this.onMinuteScrollDebounced, { passive: !0 }), this._wheelUnsub = () => {
        e.removeEventListener("scroll", this.onHourScrollDebounced), t.removeEventListener("scroll", this.onMinuteScrollDebounced);
      }));
    },
    unbindWheelListeners() {
      typeof this._wheelUnsub == "function" && (this._wheelUnsub(), this._wheelUnsub = null), clearTimeout(this._hourScrollTimer), clearTimeout(this._minuteScrollTimer);
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
      const e = `${E(this.draftHour)}:${E(this.draftMinute)}`;
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
}, Nl = { class: "min-w-0 flex-1 truncate text-foreground" }, El = { class: "ui-timepicker-panel w-full p-2" }, Bl = { class: "relative" }, Rl = { class: "relative z-[1] flex items-stretch gap-0.5" }, Fl = ["aria-valuenow"], Yl = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, Gl = { class: "ui-timepicker-wheel-spacer" }, Hl = ["onClick"], Wl = ["aria-valuenow"], Ul = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, Kl = { class: "ui-timepicker-wheel-spacer" }, jl = ["onClick"];
function ql(e, t, r, l, a, i) {
  const d = b("ui-button"), u = b("ui-popover");
  return s(), n("div", {
    class: v(["ui-timepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    y(u, {
      open: a.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (o) => a.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: o, toggle: h }) => [
        y(d, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          rounded: "",
          fulled: "",
          "text-align": "left",
          "prefix-icon": "clock",
          disabled: r.disabled,
          "aria-expanded": o ? "true" : "false",
          "aria-haspopup": !0,
          onClick: h
        }, {
          default: k(() => [
            c("span", Nl, p(i.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: k(() => [
        c("div", El, [
          c("div", Bl, [
            t[2] || (t[2] = c("div", {
              class: "pointer-events-none absolute inset-x-0 top-1/2 z-0 h-10 -translate-y-1/2 rounded-lg bg-secondary/35 ring-1 ring-border",
              "aria-hidden": "true"
            }, null, -1)),
            c("div", Rl, [
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": "Saat"
              }, [
                c("div", Yl, [
                  c("div", Gl, [
                    (s(!0), n(C, null, I(i.hourOptions, (o) => (s(), n("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (h) => i.selectHour(o)
                    }, p(i.pad2(o)), 9, Hl))), 128))
                  ])
                ], 512)
              ], 8, Fl),
              t[1] || (t[1] = c("span", {
                class: "flex w-4 shrink-0 select-none items-center justify-center self-stretch text-sm font-normal leading-5 tabular-nums text-muted-foreground",
                "aria-hidden": "true"
              }, ":", -1)),
              c("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": a.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": "Dakika"
              }, [
                c("div", Ul, [
                  c("div", Kl, [
                    (s(!0), n(C, null, I(i.minuteValues, (o, h) => (s(), n("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (f) => i.selectMinute(h)
                    }, p(i.pad2(o)), 9, jl))), 128))
                  ])
                ], 512)
              ], 8, Wl)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const Zl = /* @__PURE__ */ g(Ol, [["render", ql]]), P = Z({
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
  return P.items.push(r), r.duration > 0 && (r._timer = setTimeout(() => J(t), r.duration)), t;
}
function J(e) {
  const t = P.items.findIndex((l) => l.id === e);
  if (t === -1) return;
  const r = P.items[t];
  r._timer && (clearTimeout(r._timer), r._timer = null), P.items.splice(t, 1);
}
function Ql() {
  for (const e of P.items)
    e._timer && clearTimeout(e._timer);
  P.items.splice(0);
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
}, Xl = {
  name: "Toast",
  computed: {
    items() {
      return P.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: J,
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
}, Jl = { class: "ui-toast-host" }, ea = { class: "ui-alert-body" }, ta = {
  key: 0,
  class: "ui-alert-title"
}, ia = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function ra(e, t, r, l, a, i) {
  const d = b("ui-icon"), u = b("ui-button");
  return s(), _(Q, { to: "body" }, [
    c("div", Jl, [
      y(nt, {
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
                class: v(["ui-alert-icon", i.iconToneClass(o.variant)]),
                "aria-hidden": "true"
              }, [
                y(d, {
                  name: i.iconFor(o.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              c("div", ea, [
                o.title ? (s(), n("p", ta, p(o.title), 1)) : m("", !0),
                o.description ? (s(), n("p", ia, p(o.description), 1)) : m("", !0)
              ]),
              y(u, {
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
const sa = /* @__PURE__ */ g(Xl, [["render", ra]]), la = ["square", "video", "auto"], aa = ["fill", "sm", "md", "lg"], Se = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, na = {
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
      validator: (e) => la.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => aa.includes(e)
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
}, oa = ["src", "alt"], ua = ["aria-hidden"], ca = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, da = {
  key: 3,
  class: "ui-photo__overflow"
}, ha = ["aria-label"], fa = ["aria-label"], pa = { class: "ui-photo-preview__panel" }, ma = ["src", "alt"], ga = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function ba(e, t, r, l, a, i) {
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
        }, null, 40, oa)) : (s(), n("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          y(d, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, ua)),
        r.favorite ? (s(), n("span", ca, [
          y(d, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : m("", !0),
        r.overflowLabel ? (s(), n("span", da, p(r.overflowLabel), 1)) : m("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (s(), _(Q, { to: "body" }, [
      y(Le, {
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
            }, null, 8, fa),
            c("div", pa, [
              y(u, {
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
              }, null, 8, ma)) : m("", !0),
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
              i.counterLabel ? (s(), n("p", ga, p(i.counterLabel), 1)) : m("", !0)
            ])
          ], 40, ha)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const ya = /* @__PURE__ */ g(na, [["render", ba]]), va = ["square", "video", "auto"], _a = {
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
      validator: (e) => va.includes(e)
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
}, ka = ["data-count"], wa = ["aria-label"], xa = ["aria-label"], Sa = { class: "ui-photo-preview__panel" }, Ca = ["src", "alt"], Ta = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function La(e, t, r, l, a, i) {
  const d = b("ui-photo"), u = b("ui-button");
  return s(), n(C, null, [
    c("div", {
      class: v(["ui-photos", i.layoutClass]),
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
    ], 10, ka),
    (s(), _(Q, { to: "body" }, [
      y(Le, {
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
            }, null, 8, xa),
            c("div", Sa, [
              y(u, {
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
              }, null, 8, Ca)) : m("", !0),
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
              i.counterLabel ? (s(), n("p", Ta, p(i.counterLabel), 1)) : m("", !0)
            ])
          ], 40, wa)) : m("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Ia = /* @__PURE__ */ g(_a, [["render", La]]);
function H(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function Ma() {
  return {
    push: B,
    dismiss: J,
    clear: Ql,
    info: (e) => B({ ...H(e), variant: "info" }),
    success: (e) => B({ ...H(e), variant: "success" }),
    warning: (e) => B({ ...H(e), variant: "warning" }),
    error: (e) => B({ ...H(e), variant: "error" })
  };
}
function Da(e = !1) {
  return Z({
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
function Oa() {
  return {
    confirm: Qt
  };
}
const q = {
  en: Me,
  tr: Te
};
function Na(e = "tr") {
  return q[e] ?? q.tr;
}
const Ea = Te, Aa = [
  ["ui-action-group", De],
  ["ui-alert", Oe],
  ["ui-avatar", mt],
  ["ui-badge", Ne],
  ["ui-button", Ee],
  ["ui-card", Be],
  ["ui-checkbox", Wt],
  ["ui-checkbox-group", Zt],
  ["ui-color-picker", Vt],
  ["ui-currency-input", Nt],
  ["ui-confirm-dialog", ei],
  ["ui-date-picker", Re],
  ["ui-date-range-picker", mi],
  ["ui-dialog", Fe],
  ["ui-divider", Ce],
  ["ui-dropdown", vi],
  ["ui-empty", Ye],
  ["ui-field", Ii],
  ["ui-file", Ri],
  ["ui-form-row", Ge],
  ["ui-icon", He],
  ["ui-icon-picker", tr],
  ["ui-input", We],
  ["ui-password", or],
  ["ui-phone", Ue],
  ["ui-pin", pr],
  ["ui-list", yr],
  ["ui-list-item", Tr],
  ["ui-popover", Ke],
  ["ui-progress", Nr],
  ["ui-radio", je],
  ["ui-radio-group", qe],
  ["ui-select", Ze],
  ["ui-menu", Hr],
  ["ui-menu-group", qr],
  ["ui-menu-item", Xr],
  ["ui-menu-nav", is],
  ["ui-segment", hs],
  ["ui-segment-group", ys],
  ["ui-skeleton", Qe],
  ["ui-slider", js],
  ["ui-stepper", Ns],
  ["ui-switch", Xs],
  ["ui-table", il],
  ["ui-table-body", al],
  ["ui-table-cell", hl],
  ["ui-table-head", bl],
  ["ui-table-header", _l],
  ["ui-table-pagination", Ll],
  ["ui-table-row", Vl],
  ["ui-tag", Xe],
  ["ui-tab-list", Je],
  ["ui-tab-panel", Dl],
  ["ui-tabs", et],
  ["ui-tab-trigger", tt],
  ["ui-time-picker", Zl],
  ["ui-tooltip", it],
  ["ui-toast", sa],
  ["ui-photo", ya],
  ["ui-photos", Ia]
];
function $a(e, t = {}) {
  var d, u;
  const { i18n: r, locale: l, locales: a, theme: i } = t;
  if (i && Pe(i), (d = r == null ? void 0 : r.global) != null && d.mergeLocaleMessage) {
    const o = a ?? (l != null ? [l] : [
      typeof r.global.locale == "string" ? r.global.locale : ((u = r.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const h of o) {
      const f = q[h];
      f && r.global.mergeLocaleMessage(h, f);
    }
  }
  for (const [o, h] of Aa)
    e.component(o, h);
}
const Ba = {
  install: $a
};
export {
  De as ActionGroup,
  Oe as Alert,
  mt as Avatar,
  Ne as Badge,
  Ee as Button,
  Be as Card,
  Wt as Checkbox,
  Zt as CheckboxGroup,
  Vt as ColorPicker,
  ei as ConfirmDialog,
  Nt as CurrencyInput,
  Re as DatePicker,
  mi as DateRangePicker,
  Fe as Dialog,
  Ce as Divider,
  vi as Dropdown,
  Ye as Empty,
  Ii as Field,
  Ri as File,
  Ge as FormRow,
  He as Icon,
  tr as IconPicker,
  We as Input,
  yr as List,
  Tr as ListItem,
  Hr as Menu,
  qr as MenuGroup,
  Xr as MenuItem,
  is as MenuNav,
  or as Password,
  Ue as Phone,
  ya as Photo,
  Ia as Photos,
  pr as Pin,
  Ke as Popover,
  Nr as Progress,
  je as Radio,
  qe as RadioGroup,
  hs as Segment,
  ys as SegmentGroup,
  Ze as Select,
  Qe as Skeleton,
  js as Slider,
  Ns as Stepper,
  Xs as Switch,
  Je as TabList,
  Dl as TabPanel,
  tt as TabTrigger,
  il as Table,
  al as TableBody,
  hl as TableCell,
  bl as TableHead,
  _l as TableHeader,
  Ll as TablePagination,
  Vl as TableRow,
  et as Tabs,
  Xe as Tag,
  Zl as TimePicker,
  sa as Toast,
  it as Tooltip,
  Pe as applyUiTheme,
  Ql as clearToasts,
  Ba as default,
  J as dismissToast,
  Pa as formatCurrencyAmount,
  Ie as getCurrencySymbol,
  Na as getUiMessages,
  Ya as mergeUiTheme,
  B as pushToast,
  Qt as requestConfirm,
  X as resolveCurrencyCode,
  zt as sanitizeMoneyInput,
  Ea as uiMessagesTr,
  Oa as useConfirm,
  Da as useDialog,
  Ma as useToast
};
//# sourceMappingURL=index.js.map
