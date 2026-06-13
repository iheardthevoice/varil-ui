import { _ as g, m as S, d as Me, o as Re, t as Oe, l as Fe, n as Ye, A as We, a as Ge, B as He, b as Ke, C as Ue, D as je, c as qe, F as Ze, I as Qe, e as Xe, P as Je, R as et, f as tt, S as it, g as rt, j as st, T as nt, i as lt, h as at, k as ot } from "./apply-theme-Gyy2vWE9.js";
import { p as fa } from "./apply-theme-Gyy2vWE9.js";
import { openBlock as n, createBlock as _, resolveDynamicComponent as W, mergeProps as C, withCtx as k, createElementBlock as a, toDisplayString as m, resolveComponent as b, normalizeClass as v, createVNode as y, createElementVNode as d, withModifiers as A, createTextVNode as M, createCommentVNode as p, Fragment as T, renderList as $, normalizeStyle as N, withKeys as de, renderSlot as w, reactive as se, normalizeProps as ct, guardReactiveProps as ut, Teleport as J, Transition as ne, withDirectives as Ee, vShow as De, TransitionGroup as dt } from "vue";
const ht = ["sm", "md", "lg"], he = {
  sm: "ui-avatar--sm",
  md: "ui-avatar--md",
  lg: "ui-avatar--lg"
}, fe = Object.freeze({
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
}), pe = Object.freeze({
  Ç: "C",
  Ğ: "G",
  İ: "I",
  I: "I",
  Ö: "O",
  Ş: "S",
  Ü: "U"
});
function ft(e) {
  if (!e || typeof e != "string") return "default";
  let t = e.toLocaleUpperCase("tr-TR");
  return pe[t] && (t = pe[t]), t >= "A" && t <= "Z" ? t : "default";
}
function pt(e) {
  var l;
  const t = (e || "").trim();
  if (!t) return "?";
  const r = t.split(/\s+/).filter(Boolean);
  if (r.length >= 2) {
    const s = r[0][0] || "", i = r[r.length - 1][0] || "";
    return `${s}${i}`.toLocaleUpperCase("tr-TR");
  }
  return (((l = r[0]) == null ? void 0 : l[0]) || "?").toLocaleUpperCase("tr-TR");
}
const mt = {
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
      validator: (e) => ht.includes(e)
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
      return S(
        "ui-avatar",
        he[this.size] || he.md,
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
      return pt(this.initialsSource);
    },
    colorLetterKey() {
      const e = this.initialsSource;
      return e ? ft(e[0]) : "default";
    },
    letterColors() {
      return fe[this.colorLetterKey] || fe.default;
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
}, gt = ["src", "alt"], bt = ["role", "aria-label", "aria-hidden"];
function yt(e, t, r, l, s, i) {
  return n(), _(W(i.rootTag), C({
    type: r.interactive ? "button" : void 0,
    class: i.rootClass,
    style: i.rootStyle
  }, i.rootBind, { onClick: i.onRootClick }), {
    default: k(() => [
      r.src && !s.imageFailed ? (n(), a("img", {
        key: 0,
        src: r.src,
        alt: i.resolvedAlt,
        class: "ui-avatar-img",
        loading: "lazy",
        decoding: "async",
        onError: t[0] || (t[0] = (c) => s.imageFailed = !0)
      }, null, 40, gt)) : (n(), a("span", {
        key: 1,
        class: "ui-avatar-fallback",
        role: r.interactive ? void 0 : "img",
        "aria-label": r.interactive ? void 0 : i.resolvedAlt,
        "aria-hidden": r.interactive ? "true" : void 0
      }, m(i.displayInitials), 9, bt))
    ]),
    _: 1
  }, 16, ["type", "class", "style", "onClick"]);
}
const vt = /* @__PURE__ */ g(mt, [["render", yt]]), _t = [
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
], kt = {
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
      presetColors: _t
    };
  },
  computed: {
    rootClass() {
      return S(
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
}, wt = ["disabled", "aria-expanded", "onClick"], xt = {
  class: "ui-select-prefix inline-flex shrink-0 items-center",
  "aria-hidden": "true"
}, St = { class: "ui-select-field-suffix" }, Ct = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Tt = { class: "ui-color-picker-panel" }, It = { class: "ui-color-picker-panel__header" }, Lt = { class: "ui-color-picker-panel__title" }, $t = { class: "ui-color-picker-swatches" }, At = ["title", "onClick"], Pt = { class: "ui-color-picker-custom" }, zt = { class: "ui-color-picker-panel__title" }, Vt = { class: "ui-color-picker-custom__row" };
function Mt(e, t, r, l, s, i) {
  const c = b("ui-icon"), u = b("ui-button"), o = b("ui-input"), h = b("ui-popover");
  return n(), a("div", {
    class: v(i.rootClass)
  }, [
    y(h, {
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => s.popoverOpen = f),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: r.disabled
    }, {
      trigger: k(({ open: f, toggle: x }) => [
        d("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": f ? "true" : "false",
          "aria-haspopup": !0,
          onClick: x
        }, [
          d("span", xt, [
            i.localColor ? (n(), a("span", {
              key: 0,
              class: "ui-color-picker-swatch ui-color-picker-swatch--trigger",
              style: N({ backgroundColor: i.localColor })
            }, null, 4)) : (n(), _(c, {
              key: 1,
              name: "palette",
              size: "xs",
              class: "text-muted-foreground"
            }))
          ]),
          d("span", {
            class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localColor }])
          }, m(i.displayValue), 3),
          d("span", St, [
            d("span", Ct, [
              y(c, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, wt)
      ]),
      content: k(() => [
        d("div", Tt, [
          d("div", It, [
            d("span", Lt, m(i.popoverTitleLabel), 1),
            i.localColor ? (n(), _(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: A(i.clearColor, ["stop"])
            }, {
              default: k(() => [
                M(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : p("", !0)
          ]),
          d("div", $t, [
            (n(!0), a(T, null, $(s.presetColors, (f) => (n(), a("button", {
              key: f,
              type: "button",
              class: v(["ui-color-picker-swatch ui-color-picker-swatch--preset", { "ui-color-picker-swatch--selected": i.localColor === f }]),
              style: N({ backgroundColor: f }),
              title: f,
              onClick: (x) => i.selectColor(f)
            }, [
              i.localColor === f ? (n(), _(c, {
                key: 0,
                name: "check",
                type: "solid",
                size: "xs",
                class: "text-white mix-blend-difference"
              })) : p("", !0)
            ], 14, At))), 128))
          ]),
          d("div", Pt, [
            d("span", zt, m(i.customColorLabelText), 1),
            d("div", Vt, [
              y(o, {
                modelValue: i.localColor,
                "onUpdate:modelValue": t[0] || (t[0] = (f) => i.localColor = f),
                block: "",
                autocomplete: "off",
                placeholder: "#000000",
                onBlur: i.normalizeHex
              }, null, 8, ["modelValue", "onBlur"]),
              d("span", {
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
const Ot = /* @__PURE__ */ g(kt, [["render", Mt]]), me = {
  "₺": "TRY",
  $: "USD",
  "€": "EUR",
  TRY: "TRY",
  USD: "USD",
  EUR: "EUR"
}, U = {
  TRY: "₺",
  USD: "$",
  EUR: "€"
};
function le(e, t = "TRY") {
  if (e == null || String(e).trim() === "")
    return t in U ? t : "TRY";
  const r = String(e).trim();
  if (me[r])
    return me[r];
  const l = r.toUpperCase();
  return U[l] ? l : t in U ? t : "TRY";
}
function Ne(e) {
  var r;
  const t = le(e);
  if (U[t])
    return U[t];
  try {
    const s = new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: t,
      currencyDisplay: "narrowSymbol"
    }).formatToParts(0).find((i) => i.type === "currency");
    return ((r = s == null ? void 0 : s.value) == null ? void 0 : r.trim()) || t;
  } catch {
    return t;
  }
}
function sa(e, t, r = "tr-TR") {
  const l = Number(e) || 0, s = le(t);
  try {
    return new Intl.NumberFormat(r, { style: "currency", currency: s }).format(l);
  } catch {
    return `${Ne(s)}${l.toFixed(2)}`;
  }
}
function Et(e) {
  let t = String(e ?? "").replace(",", ".");
  t = t.replace(/[^\d.]/g, "");
  const r = t.indexOf(".");
  if (r !== -1) {
    const l = t.slice(0, r), s = t.slice(r + 1).replace(/\./g, "");
    t = `${l}.${s}`;
  }
  return t;
}
let ge = 0;
const Dt = ["sm", "md", "lg"], Nt = {
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
      validator: (e) => Dt.includes(e)
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
    return ge += 1, { fallbackId: `ui-currency-input-${ge}` };
  },
  computed: {
    displaySymbol() {
      return Ne(this.currency);
    },
    resolvedCurrencyCode() {
      return le(this.currency);
    },
    innerValue: {
      get() {
        return this.modelValue == null ? "" : String(this.modelValue);
      },
      set(e) {
        const t = Et(e);
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
}, Bt = {
  class: "ui-currency-symbol shrink-0 select-none font-medium tabular-nums text-muted-foreground",
  "aria-hidden": "true"
};
function Rt(e, t, r, l, s, i) {
  const c = b("ui-input");
  return n(), _(c, C({
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
      d("span", Bt, m(i.displaySymbol), 1)
    ]),
    _: 1
  }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "aria-describedby", "onBlur"]);
}
const Ft = /* @__PURE__ */ g(Nt, [["render", Rt]]), Yt = {
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
        const t = e.target.checked, r = this.uiCheckboxGroup.modelValue, l = Array.isArray(r) ? [...r] : [], s = l.findIndex((i) => Object.is(i, this.value));
        t && s === -1 ? l.push(this.value) : !t && s !== -1 && l.splice(s, 1), this.uiCheckboxGroup.$emit("update:modelValue", l);
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
}, Wt = ["type", "name", "value", "checked"], Gt = {
  class: "ui-checkbox-box",
  "aria-hidden": "true"
}, Ht = { class: "ui-checkbox-body" }, Kt = {
  key: 0,
  class: "ui-checkbox-label"
}, Ut = {
  key: 1,
  class: "ui-checkbox-description"
};
function jt(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("label", {
    class: v(i.checkboxClasses),
    onKeydown: [
      t[1] || (t[1] = de(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = de(A((...u) => i.toggle && i.toggle(...u), ["prevent"]), ["space"]))
    ]
  }, [
    d("input", {
      type: i.nativeType,
      name: i.nativeName,
      value: i.groupValueString,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.onNativeChange && i.onNativeChange(...u))
    }, null, 40, Wt),
    d("span", Gt, [
      i.isChecked ? (n(), _(c, {
        key: 0,
        name: "check",
        size: "xs",
        class: "ui-checkbox-check-icon text-primary-foreground"
      })) : p("", !0)
    ]),
    d("span", Ht, [
      e.$slots.label || r.label ? (n(), a("span", Kt, [
        w(e.$slots, "label", {}, () => [
          M(m(r.label), 1)
        ])
      ])) : p("", !0),
      r.description ? (n(), a("span", Ut, m(r.description), 1)) : p("", !0)
    ])
  ], 34);
}
const qt = /* @__PURE__ */ g(Yt, [["render", jt]]), Zt = ["list", "button", "List", "Button"];
let be = 0;
const Qt = {
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
      validator: (e) => Zt.includes(e)
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return be += 1, { groupName: `ui-checkbox-group-${be}` };
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
}, Xt = ["aria-label"];
function Jt(e, t, r, l, s, i) {
  return n(), a("div", {
    class: v(["ui-checkbox-group", `ui-checkbox-group--${i.normalizedVariant}`]),
    role: "group",
    "aria-label": r.ariaLabel || void 0
  }, [
    w(e.$slots, "default")
  ], 10, Xt);
}
const ei = /* @__PURE__ */ g(Qt, [["render", Jt]]), I = se({
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
function ti(e = {}) {
  return new Promise((t) => {
    I.title = e.title ?? "", I.description = e.description ?? "", I.confirmLabel = e.confirmLabel ?? "", I.cancelLabel = e.cancelLabel ?? "", I.destructive = !!e.destructive, I._resolve = t, I.open = !0;
  });
}
function ee(e) {
  const t = I._resolve;
  I.open = !1, I._resolve = null, t && t(!!e);
}
const ii = {
  name: "ConfirmDialog",
  computed: {
    confirmState() {
      return I;
    },
    syncOpen: {
      get() {
        return I.open;
      },
      set(e) {
        e ? I.open = !0 : I._resolve ? ee(!1) : I.open = !1;
      }
    },
    confirmText() {
      return I.confirmLabel ? I.confirmLabel : typeof this.$t == "function" ? this.$t("ui.confirm.ok") : "Tamam";
    },
    cancelText() {
      return I.cancelLabel ? I.cancelLabel : typeof this.$t == "function" ? this.$t("ui.confirm.cancel") : "İptal";
    },
    fallbackAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.confirm.fallbackAria") : "Onay";
    }
  },
  methods: {
    onConfirm() {
      ee(!0);
    },
    onCancel() {
      ee(!1);
    }
  }
};
function ri(e, t, r, l, s, i) {
  const c = b("ui-button"), u = b("ui-dialog");
  return n(), _(u, {
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
      y(c, {
        color: "secondary",
        rounded: "",
        onClick: i.onCancel
      }, {
        default: k(() => [
          M(m(i.cancelText), 1)
        ]),
        _: 1
      }, 8, ["onClick"]),
      y(c, {
        rounded: "",
        color: i.confirmState.destructive ? "warning" : "primary",
        onClick: i.onConfirm
      }, {
        default: k(() => [
          M(m(i.confirmText), 1)
        ]),
        _: 1
      }, 8, ["color", "onClick"])
    ]),
    _: 1
  }, 8, ["open", "title", "description", "aria-label"]);
}
const si = /* @__PURE__ */ g(ii, [["render", ri]]);
let ye = 0;
function j(e) {
  return String(e).padStart(2, "0");
}
function F(e) {
  return `${e.getFullYear()}-${j(e.getMonth() + 1)}-${j(e.getDate())}`;
}
function q(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const r = Number(t[1]), l = Number(t[2]) - 1, s = Number(t[3]), i = new Date(r, l, s);
  return i.getFullYear() !== r || i.getMonth() !== l || i.getDate() !== s ? null : i;
}
function D(e, t) {
  return e === t ? 0 : e < t ? -1 : 1;
}
function te(e, t, r) {
  return new Date(e, t, 1).toLocaleString(r, { month: "long" });
}
function ve(e, t, r, l) {
  const s = `${e}-${j(t + 1)}-01`, i = new Date(e, t + 1, 0).getDate();
  let c = `${e}-${j(t + 1)}-${j(i)}`;
  if (r && c > r && (c = r), l && s < l && c < l) return null;
  let u = s;
  return l && u < l && (u = l), D(u, c) > 0 ? null : [u, c];
}
const ni = {
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
    var l, s;
    ye += 1;
    const e = ye, t = ((l = this.modelValue) == null ? void 0 : l[0]) || "", r = q(t) || q((s = this.modelValue) == null ? void 0 : s[1]) || /* @__PURE__ */ new Date();
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
        return D(e, t) <= 0 ? t : e;
      }
      return this.pickingStart ? this.pickingStart : this.endYmd;
    },
    quickPresets() {
      const e = /* @__PURE__ */ new Date(), t = F(e), r = new Date(e);
      r.setDate(r.getDate() - 1);
      const l = F(r), s = e.getMonth(), i = e.getFullYear(), c = new Date(i, s - 1, 1), u = c.getFullYear(), o = c.getMonth(), h = (x, L) => typeof this.$t == "function" ? this.$t(x, L) : x;
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
            month: te(i, s, this.locale)
          }),
          range: ve(i, s, this.maxYmd, this.minYmd)
        },
        {
          key: "lastMonth",
          label: h("ui.dateRangePicker.lastMonth", {
            month: te(u, o, this.locale)
          }),
          range: ve(u, o, this.maxYmd, this.minYmd)
        }
      ].map((x) => ({
        ...x,
        disabled: !x.range || this.isRangeDisabled(x.range[0], x.range[1])
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
        title: te(r.year, r.month, this.locale),
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
      const e = q(this.startYmd) || q(this.endYmd);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    },
    formatDisplay(e, t) {
      const r = (l) => {
        if (!l) return "…";
        const [s, i, c] = String(l).split("-");
        return `${c}.${i}.${s}`;
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
      const r = new Date(e, t, 1), l = new Date(e, t, 1 - r.getDay()), s = this.previewStart, i = this.previewEnd, c = s && i, u = [];
      for (let o = 0; o < 42; o += 1) {
        const h = new Date(l.getFullYear(), l.getMonth(), l.getDate() + o), f = h.getMonth() === t && h.getFullYear() === e, x = h.getDate(), L = F(h), V = `${h.getFullYear()}-${h.getMonth()}-${h.getDate()}-${t}`, R = F(/* @__PURE__ */ new Date()) === L, z = !!(this.minYmd && L < this.minYmd) || !!(this.maxYmd && L > this.maxYmd);
        let O = !1, E = !1;
        if (c) {
          const P = D(s, i) <= 0 ? s : i, G = D(s, i) <= 0 ? i : s;
          O = D(L, P) >= 0 && D(L, G) <= 0, E = L === P || L === G;
        }
        u.push({
          key: V,
          d: x,
          date: h,
          today: R,
          inMonth: f,
          disabled: z,
          inRange: O,
          endpoint: E
        });
      }
      return u;
    },
    onCellHover(e) {
      !e.date || e.disabled || this.pickingStart && !this.pickingEnd && (this.hoverYmd = F(e.date));
    },
    applyQuick(e, t) {
      if (e.disabled || !e.range) return;
      const [r, l] = e.range;
      this.pickingStart = r, this.pickingEnd = l, this.$emit("update:modelValue", [r, l]), this.$emit("change", [r, l]), t();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const r = F(e.date);
      if (!this.pickingStart || this.pickingStart && this.pickingEnd) {
        this.pickingStart = r, this.pickingEnd = "", this.hoverYmd = "";
        return;
      }
      let l = this.pickingStart, s = r;
      if (D(s, l) < 0) {
        const i = l;
        l = s, s = i;
      }
      this.pickingStart = l, this.pickingEnd = s, this.$emit("update:modelValue", [l, s]), this.$emit("change", [l, s]), t();
    },
    dayVariant(e) {
      return e.endpoint ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.endpoint || e.today && !e.inRange ? "primary" : "secondary";
    }
  }
}, li = { class: "min-w-0 flex-1 truncate text-foreground" }, ai = { class: "ui-datepicker-panel ui-daterangepicker-panel p-2" }, oi = { class: "ui-daterangepicker-layout" }, ci = ["aria-label"], ui = { class: "ui-daterangepicker-calendars" }, di = {
  key: 0,
  class: "mb-2 text-xs text-muted-foreground"
}, hi = { class: "ui-daterangepicker-month-row" }, fi = { class: "mb-2 flex items-center justify-between gap-2" }, pi = {
  key: 1,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, mi = { class: "min-w-0 flex-1 text-center text-sm font-medium tabular-nums text-foreground" }, gi = {
  key: 3,
  class: "size-9 shrink-0",
  "aria-hidden": "true"
}, bi = { class: "ui-datepicker-grid" };
function yi(e, t, r, l, s, i) {
  const c = b("ui-button"), u = b("ui-popover");
  return n(), a("div", {
    class: v(["ui-daterangepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    y(u, {
      open: s.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (o) => s.menuOpen = o),
      placement: "bottom-end",
      "match-trigger-width": !1,
      width: i.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: o, toggle: h }) => [
        y(c, {
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
            d("span", li, m(i.displayText), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: k(({ close: o }) => [
        d("div", ai, [
          d("div", oi, [
            d("aside", {
              class: "ui-daterangepicker-quick",
              "aria-label": i.resolvedQuickAriaLabel
            }, [
              (n(!0), a(T, null, $(i.quickPresets, (h) => (n(), _(c, {
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
                  M(m(h.label), 1)
                ]),
                _: 2
              }, 1032, ["disabled", "onClick"]))), 128))
            ], 8, ci),
            d("div", ui, [
              i.rangeHint ? (n(), a("p", di, m(i.rangeHint), 1)) : p("", !0),
              d("div", hi, [
                (n(!0), a(T, null, $(i.calendarPanes, (h) => (n(), a("section", {
                  key: h.key,
                  class: "ui-daterangepicker-month"
                }, [
                  d("div", fi, [
                    h.showPrev ? (n(), _(c, {
                      key: 0,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-left",
                      "aria-label": i.resolvedPrevMonthLabel,
                      onClick: t[0] || (t[0] = A((f) => i.shiftMonth(-1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (n(), a("span", pi)),
                    d("span", mi, m(h.title), 1),
                    h.showNext ? (n(), _(c, {
                      key: 2,
                      variant: "ghost",
                      color: "primary",
                      cubed: "",
                      "prefix-icon": "chevron-right",
                      "aria-label": i.resolvedNextMonthLabel,
                      onClick: t[1] || (t[1] = A((f) => i.shiftMonth(1), ["stop"]))
                    }, null, 8, ["aria-label"])) : (n(), a("span", gi))
                  ]),
                  t[3] || (t[3] = d("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
                    d("span", null, "Su"),
                    d("span", null, "Mo"),
                    d("span", null, "Tu"),
                    d("span", null, "We"),
                    d("span", null, "Th"),
                    d("span", null, "Fr"),
                    d("span", null, "Sa")
                  ], -1)),
                  d("div", bi, [
                    (n(!0), a(T, null, $(h.cells, (f) => (n(), _(c, {
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
                      onMouseenter: (x) => i.onCellHover(f),
                      onClick: (x) => i.pick(f, o)
                    }, {
                      default: k(() => [
                        M(m(f.d), 1)
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
const vi = /* @__PURE__ */ g(ni, [["render", yi]]), _i = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], ki = {
  name: "Dropdown",
  components: { Divider: Me },
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
      validator: (e) => _i.includes(e)
    },
    matchTriggerWidth: {
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
function wi(e, t, r, l, s, i) {
  const c = b("Divider"), u = b("ui-button"), o = b("ui-popover");
  return n(), _(o, {
    open: i.isOpen,
    placement: r.placement,
    "match-trigger-width": r.matchTriggerWidth,
    "close-on-outside-click": r.closeOnOutsideClick,
    "close-on-escape": r.closeOnEscape,
    "outside-click-ignore-selector": r.outsideClickIgnoreSelector,
    "onUpdate:open": i.onOpenChange
  }, {
    trigger: k((h) => [
      w(e.$slots, "trigger", ct(ut(h)))
    ]),
    content: k(({ close: h }) => [
      d("div", {
        class: "ui-dropdown-menu min-w-[10rem] p-3",
        role: "menu",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        e.$slots.menu ? w(e.$slots, "menu", {
          key: 0,
          close: h
        }) : (n(!0), a(T, { key: 1 }, $(r.items, (f, x) => (n(), a(T, { key: x }, [
          f.divider ? (n(), _(c, {
            key: 0,
            spacing: "sm"
          })) : (n(), _(u, {
            key: 1,
            variant: "ghost",
            color: "secondary",
            rounded: "",
            fulled: "",
            "text-align": "left",
            role: "menuitem",
            "prefix-icon": f.icon || null,
            disabled: f.disabled,
            onClick: A((L) => i.onItem(f, h), ["stop"])
          }, {
            default: k(() => [
              M(m(f.label), 1)
            ]),
            _: 2
          }, 1032, ["prefix-icon", "disabled", "onClick"]))
        ], 64))), 128))
      ])
    ]),
    _: 3
  }, 8, ["open", "placement", "match-trigger-width", "close-on-outside-click", "close-on-escape", "outside-click-ignore-selector", "onUpdate:open"]);
}
const xi = /* @__PURE__ */ g(ki, [["render", wi]]), Si = ["solid", "regular", "brands", "light", "duotone", "thin"], Ci = ["sm", "md", "lg"], Ti = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, Ii = {
  name: "Empty",
  inheritAttrs: !1,
  props: {
    /** `ui-icon` `name` (örn. `plus`). Boş string → ikon kutusu gösterilmez. */
    icon: {
      type: String,
      default: "plus"
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** `ui-icon` `type` */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Si.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Ci.includes(e)
    }
  },
  computed: {
    iconSize() {
      return Ti[this.size] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return S("ui-empty", `ui-empty--${this.size}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Li = {
  key: 0,
  class: "ui-empty-icon"
}, $i = {
  key: 1,
  class: "ui-empty-title"
}, Ai = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Pi = {
  key: 3,
  class: "ui-empty-actions"
};
function zi(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("div", C({ class: i.rootClass }, i.passthroughAttrs), [
    i.resolvedIcon ? (n(), a("div", Li, [
      y(c, {
        name: i.resolvedIcon,
        type: r.iconType,
        size: i.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : p("", !0),
    r.title ? (n(), a("h2", $i, m(r.title), 1)) : p("", !0),
    r.description ? (n(), a("p", Ai, m(r.description), 1)) : p("", !0),
    e.$slots.default ? (n(), a("div", Pi, [
      w(e.$slots, "default")
    ])) : p("", !0)
  ], 16);
}
const Vi = /* @__PURE__ */ g(Ii, [["render", zi]]), Mi = ["solid", "regular", "brands", "light", "duotone", "thin"], Oi = {
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
      validator: (e) => Mi.includes(e)
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
      return S("ui-field", this.card && "ui-field--card", this.$attrs.class);
    }
  }
}, Ei = {
  key: 0,
  class: "ui-field__title-row"
}, Di = {
  key: 0,
  class: "ui-field__title-icon",
  "aria-hidden": "true"
}, Ni = {
  key: 1,
  class: "ui-field__title"
}, Bi = {
  key: 1,
  class: "ui-field__value"
}, Ri = {
  key: 2,
  class: "ui-field__subtitle"
};
function Fi(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("div", C({ class: i.rootClass }, i.passthroughAttrs), [
    r.title || i.showIcon ? (n(), a("div", Ei, [
      i.showIcon ? (n(), a("span", Di, [
        y(c, {
          name: r.icon,
          type: r.iconType,
          size: "md"
        }, null, 8, ["name", "type"])
      ])) : p("", !0),
      r.title ? (n(), a("span", Ni, m(r.title), 1)) : p("", !0)
    ])) : p("", !0),
    i.hasValue ? (n(), a("div", Bi, [
      w(e.$slots, "default")
    ])) : p("", !0),
    r.subtitle ? (n(), a("p", Ri, m(r.subtitle), 1)) : p("", !0)
  ], 16);
}
const Yi = /* @__PURE__ */ g(Oi, [["render", Fi]]), Wi = ["auto", "file", "folder"], Gi = ["sm", "md", "lg"], Hi = { icon: "folder", color: "text-sky-500" }, Ki = { icon: "file-lines", color: "text-muted-foreground" }, Ui = {
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
}, _e = {
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
function X(e) {
  return String(e ?? "").trim();
}
function ji(e) {
  const t = X(e);
  return /[/\\]\s*$/.test(t);
}
function Be(e) {
  const t = X(e).replace(/[/\\]+$/, "");
  if (!t) return "";
  const r = t.split(/[/\\]/);
  return r[r.length - 1] || t;
}
function qi(e) {
  const t = Be(e), r = t.lastIndexOf(".");
  return r <= 0 || r === t.length - 1 ? "" : t.slice(r + 1).toLowerCase();
}
const ke = {
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
}, Zi = {
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
      validator: (e) => Wi.includes(e)
    },
    /** Finder tarzı düzen ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Gi.includes(e)
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
      return _e[this.size] || _e.md;
    },
    ariaLabel() {
      const e = this.resolvedKind === "folder" ? "Folder" : "File";
      return `${this.fullLabel || this.displayLabel}, ${e}`;
    },
    resolvedKind() {
      return this.kind === "folder" ? "folder" : this.kind === "file" ? "file" : ji(this.name) ? "folder" : "file";
    },
    displayLabel() {
      const e = X(this.name);
      return e ? this.basenameOnly ? Be(e) : e.replace(/[/\\]+$/, "") : "";
    },
    fullLabel() {
      return X(this.name) || this.displayLabel;
    },
    inferredMeta() {
      if (this.resolvedKind === "folder") return Hi;
      const e = qi(this.name);
      return Ui[e] || Ki;
    },
    resolvedIcon() {
      return this.icon ? this.icon : this.inferredMeta.icon;
    },
    resolvedIconType() {
      return this.icon ? this.iconType : this.inferredMeta.type || "light";
    },
    resolvedColorClass() {
      return this.color ? ke[this.color] !== void 0 ? ke[this.color] || "" : this.color : this.inferredMeta.color || "text-foreground";
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
}, Qi = ["aria-label"], Xi = ["title"];
function Ji(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("div", {
    class: v(["ui-file group inline-flex max-w-full flex-col items-center gap-2 text-center select-none", i.rootSizeClass]),
    role: "img",
    "aria-label": i.ariaLabel
  }, [
    d("div", {
      class: v(["ui-file-icon-shell flex items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-0.5", [i.shellClasses, i.folderShellClass]])
    }, [
      y(c, {
        name: i.resolvedIcon,
        type: i.resolvedIconType,
        size: i.iconSizeToken,
        class: v(i.iconClasses)
      }, null, 8, ["name", "type", "size", "class"])
    ], 2),
    d("span", {
      class: v(["ui-file-name w-full truncate px-0.5 text-center font-medium leading-snug tracking-tight text-foreground", i.labelClass]),
      "aria-hidden": "true",
      title: i.fullLabel
    }, m(i.displayLabel), 11, Xi)
  ], 10, Qi);
}
const er = /* @__PURE__ */ g(Zi, [["render", Ji]]), tr = ["solid", "regular", "brands", "light", "duotone", "thin"], ir = {
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
      validator: (e) => tr.includes(e)
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
      return S(
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
}, rr = ["disabled", "aria-expanded", "onClick"], sr = {
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, nr = { class: "ui-select-field-suffix" }, lr = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, ar = { class: "ui-icon-picker-panel" }, or = { class: "ui-icon-picker-panel__header" }, cr = { class: "ui-icon-picker-panel__title" }, ur = { class: "ui-icon-picker-panel__search" }, dr = {
  key: 0,
  class: "ui-icon-picker-panel__empty"
}, hr = {
  key: 1,
  class: "ui-icon-picker-grid"
}, fr = ["title", "onClick"];
function pr(e, t, r, l, s, i) {
  const c = b("ui-icon"), u = b("ui-button"), o = b("ui-input"), h = b("ui-popover");
  return n(), a("div", {
    class: v(i.rootClass)
  }, [
    y(h, {
      open: s.popoverOpen,
      "onUpdate:open": t[1] || (t[1] = (f) => s.popoverOpen = f),
      placement: "bottom-start",
      width: r.panelWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: f, toggle: x }) => [
        d("button", {
          type: "button",
          class: "ui-select-field",
          disabled: r.disabled,
          "aria-expanded": f ? "true" : "false",
          "aria-haspopup": !0,
          onClick: x
        }, [
          d("span", sr, [
            y(c, {
              name: i.localIcon || "grid",
              type: r.iconType,
              size: "xs"
            }, null, 8, ["name", "type"])
          ]),
          d("span", {
            class: v(["ui-select-value", { "ui-select-value--placeholder": !i.localIcon }])
          }, m(i.localIcon || i.triggerLabel), 3),
          d("span", nr, [
            d("span", lr, [
              y(c, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 8, rr)
      ]),
      content: k(() => [
        d("div", ar, [
          d("div", or, [
            d("span", cr, m(i.popoverTitleLabel), 1),
            i.localIcon ? (n(), _(u, {
              key: 0,
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              "prefix-icon": "eraser",
              onClick: A(i.clearIcon, ["stop"])
            }, {
              default: k(() => [
                M(m(i.clearLabelText), 1)
              ]),
              _: 1
            }, 8, ["onClick"])) : p("", !0)
          ]),
          d("div", ur, [
            y(o, {
              modelValue: s.searchQuery,
              "onUpdate:modelValue": t[0] || (t[0] = (f) => s.searchQuery = f),
              block: "",
              "prefix-icon": "magnifying-glass",
              placeholder: i.searchPlaceholderLabel,
              autocomplete: "off"
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          i.filteredIcons.length ? (n(), a("div", hr, [
            (n(!0), a(T, null, $(i.filteredIcons, (f) => (n(), a("button", {
              key: f,
              type: "button",
              class: v(["ui-icon-picker-cell", { "ui-icon-picker-cell--selected": i.localIcon === f }]),
              title: f,
              onClick: (x) => i.selectIcon(f)
            }, [
              y(c, {
                name: f,
                type: r.iconType,
                size: "sm"
              }, null, 8, ["name", "type"])
            ], 10, fr))), 128))
          ])) : (n(), a("div", dr, m(i.resolvedNoResultsLabel), 1))
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const mr = /* @__PURE__ */ g(ir, [["render", pr]]);
function gr(e) {
  const t = String(e ?? "");
  if (!t)
    return { score: 0, percent: 0, label: "empty" };
  let r = 0;
  t.length >= 8 && (r += 1), t.length >= 12 && (r += 1), /[a-z]/.test(t) && /[A-Z]/.test(t) ? r += 1 : /[a-zA-Z]/.test(t) && (r += 0.5), /\d/.test(t) && (r += 1), /[^a-zA-Z0-9]/.test(t) && (r += 1);
  const l = Math.min(4, Math.round(r)), s = ["weak", "fair", "good", "strong"], i = l <= 0 ? "weak" : s[Math.min(l - 1, 3)];
  return {
    score: l,
    percent: l / 4 * 100,
    label: i
  };
}
let ie = 0;
const br = ["sm", "md", "lg"], yr = {
  name: "Password",
  inheritAttrs: !1,
  props: {
    size: {
      type: String,
      default: "md",
      validator: (e) => br.includes(e)
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
    return ie += 1, {
      fallbackId: `ui-password-${ie}`,
      fallbackStrengthId: `ui-password-strength-${ie}`,
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
      return gr(this.modelValue);
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
}, vr = ["aria-label", "aria-pressed", "disabled"], _r = ["id", "aria-live"];
function kr(e, t, r, l, s, i) {
  const c = b("ui-icon"), u = b("ui-input"), o = b("ui-progress");
  return n(), a("div", {
    class: v(["ui-password", [e.$attrs.class]])
  }, [
    y(u, C({
      id: i.resolvedId,
      modelValue: i.innerValue,
      "onUpdate:modelValue": t[1] || (t[1] = (h) => i.innerValue = h),
      type: s.visible ? "text" : "password",
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
        d("button", {
          type: "button",
          class: "ui-password-toggle",
          "aria-label": i.toggleAriaLabel,
          "aria-pressed": s.visible ? "true" : "false",
          disabled: r.disabled,
          onClick: t[0] || (t[0] = (h) => s.visible = !s.visible)
        }, [
          y(c, {
            name: s.visible ? "eye-slash" : "eye",
            size: "xs"
          }, null, 8, ["name"])
        ], 8, vr)
      ]),
      _: 1
    }, 16, ["id", "modelValue", "type", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"]),
    i.showStrengthMeter ? (n(), a("div", {
      key: 0,
      id: s.fallbackStrengthId,
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
      i.strength.label !== "empty" ? (n(), a("span", {
        key: 0,
        class: v(["ui-password-strength-label", `ui-password-strength-label--${i.strength.label}`])
      }, m(i.strengthText), 3)) : p("", !0)
    ], 8, _r)) : p("", !0)
  ], 2);
}
const wr = /* @__PURE__ */ g(yr, [["render", kr]]), xr = ["numeric", "alphanumeric"], Sr = {
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
      validator: (e) => xr.includes(e)
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
      const s = [...this.cells];
      let i = e;
      for (const u of l) {
        if (i >= this.length) break;
        s[i] = u, i += 1;
      }
      this.emitValue(s);
      const c = Math.min(i, this.length - 1);
      this.$nextTick(() => {
        var u, o;
        (u = this.cellEl(c)) == null || u.focus(), (o = this.cellEl(c)) == null || o.select();
      });
    },
    onCellKeydown(e, t) {
      var r, l;
      if (t.key === "Backspace") {
        t.preventDefault();
        const s = [...this.cells];
        if (s[e]) {
          s[e] = "", this.emitValue(s);
          return;
        }
        e > 0 && (s[e - 1] = "", this.emitValue(s), this.$nextTick(() => {
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
      var s;
      e.preventDefault();
      const t = ((s = e.clipboardData) == null ? void 0 : s.getData("text")) ?? "", r = this.normalizeValue(t);
      if (!r) return;
      this.emitValue(r.split(""));
      const l = Math.min(r.length, this.length) - 1;
      this.$nextTick(() => {
        var i;
        (i = this.cellEl(Math.max(0, l))) == null || i.focus();
      });
    }
  }
}, Cr = ["aria-label"], Tr = ["value", "type", "inputmode", "pattern", "disabled", "readonly", "autocomplete", "aria-label", "onInput", "onKeydown", "onFocus"];
function Ir(e, t, r, l, s, i) {
  return n(), a("div", {
    role: "group",
    "aria-label": i.resolvedAriaLabel,
    class: v([
      "ui-pin",
      i.isDisabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    (n(!0), a(T, null, $(r.length, (c, u) => (n(), a("input", {
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
    }, null, 40, Tr))), 128))
  ], 10, Cr);
}
const Lr = /* @__PURE__ */ g(Sr, [["render", Ir]]), $r = ["ul", "ol", "div"], Ar = {
  name: "List",
  inheritAttrs: !1,
  props: {
    /** Anlamsal etiket: `ul` | `ol` | `div` (rol `list` kalır). */
    tag: {
      type: String,
      default: "ul",
      validator: (e) => $r.includes(e)
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
      return S("ui-list", e, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
};
function Pr(e, t, r, l, s, i) {
  return n(), _(W(r.tag), C({
    class: i.listClass,
    role: "list"
  }, i.passthroughAttrs), {
    default: k(() => [
      w(e.$slots, "default")
    ]),
    _: 3
  }, 16, ["class"]);
}
const zr = /* @__PURE__ */ g(Ar, [["render", Pr]]), Vr = ["solid", "regular", "brands", "light", "duotone", "thin"], Mr = {
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
      validator: (e) => Vr.includes(e)
    }
  }
}, Or = {
  class: "ui-list-item",
  role: "listitem"
}, Er = {
  key: 0,
  class: "ui-list-item-prefix",
  "aria-hidden": "true"
}, Dr = {
  key: 1,
  class: "ui-list-item-prefix-slot shrink-0"
}, Nr = { class: "ui-list-item-content min-w-0 flex-1" };
function Br(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("li", Or, [
    r.prefixIcon ? (n(), a("span", Er, [
      y(c, {
        name: r.prefixIcon,
        type: r.prefixIconType,
        size: "xs",
        class: "ui-list-item-prefix-icon"
      }, null, 8, ["name", "type"])
    ])) : e.$slots.prefix ? (n(), a("span", Dr, [
      w(e.$slots, "prefix")
    ])) : p("", !0),
    d("div", Nr, [
      w(e.$slots, "default")
    ])
  ]);
}
const Rr = /* @__PURE__ */ g(Mr, [["render", Br]]), Fr = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], we = 10, xe = 260, Yr = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], Wr = {
  name: "Popover",
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "bottom-start",
      validator: (e) => Fr.includes(e)
    },
    /** Tetikleyici ile aynı minimum genişlik */
    matchTriggerWidth: {
      type: Boolean,
      default: !1
    },
    /**
     * Panel genişliği (örn. `13rem`, `208px`). Verildiğinde katman sabitlenir; `matchTriggerWidth` ile birlikteyse bu önceliklidir.
     */
    width: {
      type: [String, Number],
      default: void 0
    },
    disabled: {
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
    /**
     * Ek `closest` seçicileri (iç içe Select / DatePicker / TimePicker).
     */
    outsideClickIgnoreSelector: {
      type: String,
      default: ""
    },
    /**
     * true: bu popover, üst (ata) popover paneline tıklanınca da açık kalır.
     * false (varsayılan): üst panelde ama kendi panelinin dışında tıklanınca kapanır.
     */
    keepOpenOnAncestorPopoverClick: {
      type: Boolean,
      default: !1
    },
    /**
     * true: panel içinde `[role="option"][aria-selected="true"]` satırının üstü,
     * tetikleyicinin üstü ile aynı hizada olacak şekilde katman kaydırılır (Select).
     */
    alignSelectedOptionToTrigger: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:open"],
  data() {
    return {
      layerStyle: {},
      rafId: 0,
      mobileCenteredActive: !1
    };
  },
  computed: {
    resolvedWidth() {
      const e = this.width;
      return e == null || e === "" ? null : typeof e == "number" ? `${e}px` : String(e);
    }
  },
  watch: {
    open(e) {
      e ? this.$nextTick(() => {
        this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
      }) : this.teardownGlobalListeners();
    },
    width() {
      this.open && this.schedulePosition();
    }
  },
  mounted() {
    this.open && this.$nextTick(() => {
      this.updatePosition(), this.schedulePosition(), this.bindGlobalListeners();
    });
  },
  beforeUnmount() {
    this.teardownGlobalListeners(), this.rafId && cancelAnimationFrame(this.rafId);
  },
  methods: {
    toggle() {
      this.disabled || this.$emit("update:open", !this.open);
    },
    close() {
      this.open && this.$emit("update:open", !1);
    },
    schedulePosition() {
      this.rafId && cancelAnimationFrame(this.rafId), this.rafId = requestAnimationFrame(() => {
        this.rafId = requestAnimationFrame(() => {
          this.rafId = 0, this.updatePosition();
        });
      });
    },
    resolveLayerZIndex() {
      if (typeof document > "u") return xe;
      let e = xe;
      for (const t of document.querySelectorAll(".ui-dialog-root")) {
        const r = Number.parseInt(getComputedStyle(t).zIndex, 10);
        Number.isFinite(r) && (e = Math.max(e, r + 10));
      }
      return e;
    },
    withLayerZIndex(e) {
      return {
        ...e,
        zIndex: String(this.resolveLayerZIndex())
      };
    },
    updatePosition() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef;
      if (!e || !t) return;
      const r = window.innerWidth, l = window.innerHeight, s = we, i = this.resolvedWidth, c = e.getBoundingClientRect(), u = i != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? c.width : 200), o = t.offsetHeight || 120;
      if (Re()) {
        this.mobileCenteredActive = !0;
        const V = Math.max(s, Math.round((r - u) / 2)), z = {
          top: `${Math.max(s, Math.round((l - o) / 2))}px`,
          left: `${V}px`
        };
        i != null ? (z.width = i, z.minWidth = i) : (z.width = `${Math.min(u, r - s * 2)}px`, z.maxWidth = `calc(100vw - ${s * 2}px)`), this.layerStyle = this.withLayerZIndex(z);
        return;
      }
      this.mobileCenteredActive = !1;
      let h, f;
      switch (this.placement) {
        case "right-start":
          h = c.top, f = c.right + s;
          break;
        case "right-end":
          h = c.bottom - o, f = c.right + s;
          break;
        case "left-start":
          h = c.top, f = c.left - s - u;
          break;
        case "left-end":
          h = c.bottom - o, f = c.left - s - u;
          break;
        case "top-start":
          h = c.top - s - o, f = c.left;
          break;
        case "top-end":
          h = c.top - s - o, f = c.right - u;
          break;
        case "bottom-end":
          h = c.bottom + s, f = c.right - u;
          break;
        case "bottom":
          h = c.bottom + s, f = c.left + (c.width - u) / 2;
          break;
        case "bottom-start":
        default:
          h = c.bottom + s, f = c.left;
          break;
      }
      if (this.placement.startsWith("right") && f + u > r - s && (f = c.left - s - u), this.placement.startsWith("left") && f < s && (f = c.right + s), this.placement.startsWith("top") && h < s && (h = c.bottom + s), f + u > r - s && (f = Math.max(s, r - s - u)), f < s && (f = s), this.placement.startsWith("bottom") && h + o > l - s) {
        const V = c.top - s - o;
        V >= s && (h = V);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (h + o > l - s && (h = Math.max(s, l - s - o)), h < s && (h = s));
      const x = this.matchTriggerWidth && i == null ? `${Math.ceil(c.width)}px` : void 0, L = {
        top: `${Math.round(h)}px`,
        left: `${Math.round(f)}px`,
        minWidth: x
      };
      i != null && (L.width = i, L.minWidth = i), this.layerStyle = this.withLayerZIndex(L), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef, r = this.$refs.layerRef;
      if (!e || !t || !r) return;
      const l = t.querySelector('[role="listbox"]');
      if (l && l.scrollHeight > l.clientHeight + 2)
        return;
      const s = t.querySelector('[role="option"][aria-selected="true"]');
      if (!s) return;
      const i = e.querySelector("[data-popover-align]") || e, c = s.querySelector("[data-popover-align]") || s, u = i.getBoundingClientRect(), o = c.getBoundingClientRect(), h = o.top - u.top, f = o.left - u.left, x = r.getBoundingClientRect(), L = this.layerStyle.top, V = this.layerStyle.left;
      let R = typeof L == "string" && L !== "" ? parseFloat(L) : x.top, z = typeof V == "string" && V !== "" ? parseFloat(V) : x.left;
      Number.isNaN(R) && (R = x.top), Number.isNaN(z) && (z = x.left);
      let O = R - h, E = z - f;
      const P = we, G = window.innerHeight, oe = window.innerWidth, ce = x.height, ue = x.width;
      O + ce > G - P && (O = Math.max(P, G - P - ce)), O < P && (O = P), E + ue > oe - P && (E = Math.max(P, oe - P - ue)), E < P && (E = P), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(O)}px`,
        left: `${Math.round(E)}px`
      });
    },
    bindGlobalListeners() {
      window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("pointerdown", this.onDocPointerDown, !0), document.addEventListener("keydown", this.onDocKeydown, !0);
    },
    teardownGlobalListeners() {
      window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("pointerdown", this.onDocPointerDown, !0), document.removeEventListener("keydown", this.onDocKeydown, !0);
    },
    onScrollResize(e) {
      if (!this.open) return;
      const t = this.$refs.panelRef, r = e == null ? void 0 : e.target;
      t && r && r !== document && r !== document.documentElement && t.contains(r) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, r = this.$refs.triggerRef, l = this.$refs.panelRef;
      r != null && r.contains(t) || l != null && l.contains(t) || this.shouldIgnoreOutsideClick(t) || this.close();
    },
    isOpenedInsidePopoverLayer(e) {
      const t = this.$refs.rootRef;
      return !!(e && t && e.contains(t));
    },
    shouldIgnoreOutsideClick(e) {
      var s;
      if (typeof (e == null ? void 0 : e.closest) != "function") return !1;
      const t = this.$refs.layerRef, r = e.closest("[data-ui-popover-layer]");
      if (r && r !== t)
        return this.isOpenedInsidePopoverLayer(r) ? this.keepOpenOnAncestorPopoverClick : !0;
      for (const i of Yr)
        if (e.closest(i)) return !0;
      const l = (s = this.outsideClickIgnoreSelector) == null ? void 0 : s.trim();
      return !!(l && e.closest(l));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, Gr = {
  ref: "triggerRef",
  class: "ui-popover-trigger inline-flex shrink-0"
}, Hr = ["data-popover-align-active", "data-ui-popover-mobile-centered"], Kr = {
  key: 0,
  class: "ui-popover-header"
}, Ur = { class: "ui-popover-body min-h-0 min-w-0" }, jr = {
  key: 1,
  class: "ui-popover-footer"
};
function qr(e, t, r, l, s, i) {
  return n(), a("div", {
    ref: "rootRef",
    class: v(["ui-popover relative shrink-0", e.$attrs.class])
  }, [
    d("div", Gr, [
      w(e.$slots, "trigger", {
        open: r.open,
        toggle: i.toggle,
        close: i.close
      })
    ], 512),
    (n(), _(J, { to: "body" }, [
      y(ne, { name: "ui-overlay-popover" }, {
        default: k(() => [
          Ee(d("div", {
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: N(s.layerStyle),
            "data-popover-align-active": r.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": s.mobileCenteredActive ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            d("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[0] || (t[0] = (...c) => i.onPanelKeydown && i.onPanelKeydown(...c))
            }, [
              e.$slots.header ? (n(), a("div", Kr, [
                w(e.$slots, "header", { close: i.close })
              ])) : p("", !0),
              d("div", Ur, [
                w(e.$slots, "content", { close: i.close })
              ]),
              e.$slots.footer ? (n(), a("div", jr, [
                w(e.$slots, "footer", { close: i.close })
              ])) : p("", !0)
            ], 544)
          ], 12, Hr), [
            [De, r.open]
          ])
        ]),
        _: 3
      })
    ]))
  ], 2);
}
const Zr = /* @__PURE__ */ g(Wr, [["render", qr]]), Qr = ["bar", "circle"], Se = ["sm", "md", "lg"], Ce = ["thin", "md"], Xr = ["default", "weak", "fair", "good", "strong"], Z = { sm: 16, md: 20, lg: 24 }, Jr = { sm: 1.5, md: 2, lg: 2 }, es = {
  name: "Progress",
  inheritAttrs: !1,
  props: {
    /** `bar` — yatay çizgi; `circle` — halka (12 yönünden saat yönü) */
    type: {
      type: String,
      default: "bar",
      validator: (e) => Qr.includes(e)
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
      validator: (e) => Xr.includes(e)
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
      const e = this.type === "circle" ? Se.includes(this.size) ? this.size : "sm" : Ce.includes(this.size) ? this.size : "md";
      return S(
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
      return Se.includes(this.size) ? this.size : "sm";
    },
    barSizeKey() {
      return Ce.includes(this.size) ? this.size : "md";
    },
    circleRootStyle() {
      if (this.type !== "circle") return;
      const e = Z[this.circleSizeKey] ?? Z.sm;
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
      const e = Z[this.circleSizeKey] ?? Z.sm, t = Jr[this.circleSizeKey] ?? 2, r = (e - t) / 2, l = e / 2, s = 2 * Math.PI * r, i = s * (1 - this.clampedPercent / 100);
      return { size: e, stroke: t, radius: r, center: l, circumference: s, offset: i };
    },
    resolvedAriaLabel() {
      return this.ariaLabel ? this.ariaLabel : typeof this.$t == "function" ? this.$t("ui.progress.ariaLabel") : "Progress";
    }
  }
}, ts = ["role", "aria-valuenow", "aria-valuemin", "aria-valuemax", "aria-label", "aria-valuetext"], is = ["width", "height", "viewBox"], rs = ["cx", "cy", "r", "stroke-width"], ss = ["cx", "cy", "r", "stroke-width", "stroke-dasharray", "stroke-dashoffset"], ns = {
  key: 1,
  class: "ui-progress-bar-track",
  "aria-hidden": "true"
};
function ls(e, t, r, l, s, i) {
  return n(), a("div", {
    class: v(i.rootClass),
    style: N(i.circleRootStyle),
    role: r.presentational ? void 0 : "progressbar",
    "aria-valuenow": r.presentational || r.indeterminate ? void 0 : i.ariaValueNow,
    "aria-valuemin": r.presentational ? void 0 : 0,
    "aria-valuemax": r.presentational ? void 0 : r.max,
    "aria-label": r.presentational ? void 0 : i.resolvedAriaLabel,
    "aria-valuetext": r.presentational ? void 0 : r.ariaValuetext
  }, [
    r.type === "circle" ? (n(), a("svg", {
      key: 0,
      class: "ui-progress-circle-svg",
      width: i.circleMetrics.size,
      height: i.circleMetrics.size,
      viewBox: `0 0 ${i.circleMetrics.size} ${i.circleMetrics.size}`,
      "aria-hidden": "true",
      focusable: "false"
    }, [
      d("circle", {
        class: "ui-progress-circle-track",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke
      }, null, 8, rs),
      d("circle", {
        class: "ui-progress-circle-indicator",
        cx: i.circleMetrics.center,
        cy: i.circleMetrics.center,
        r: i.circleMetrics.radius,
        "stroke-width": i.circleMetrics.stroke,
        "stroke-dasharray": i.circleMetrics.circumference,
        "stroke-dashoffset": i.circleMetrics.offset
      }, null, 8, ss)
    ], 8, is)) : (n(), a("div", ns, [
      d("div", {
        class: "ui-progress-bar-indicator",
        style: N({ width: `${i.clampedPercent}%` })
      }, null, 4)
    ]))
  ], 14, ts);
}
const as = /* @__PURE__ */ g(es, [["render", ls]]), os = ["sm", "md", "lg", "full"], Te = {
  sm: "w-52 max-w-full",
  md: "w-56 max-w-full",
  lg: "w-64 max-w-full",
  full: "w-full max-w-full"
}, cs = {
  name: "Menu",
  inheritAttrs: !1,
  props: {
    width: {
      type: String,
      default: "md",
      validator: (e) => os.includes(e)
    }
  },
  computed: {
    rootClass() {
      return S(
        "ui-menu",
        Te[this.width] || Te.md,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, us = {
  key: 0,
  class: "ui-menu-header"
}, ds = { class: "ui-menu-body" }, hs = {
  key: 1,
  class: "ui-menu-footer"
};
function fs(e, t, r, l, s, i) {
  return n(), a("nav", C({ class: i.rootClass }, i.passthroughAttrs), [
    e.$slots.header ? (n(), a("div", us, [
      w(e.$slots, "header")
    ])) : p("", !0),
    d("div", ds, [
      w(e.$slots, "default")
    ]),
    e.$slots.footer ? (n(), a("div", hs, [
      w(e.$slots, "footer")
    ])) : p("", !0)
  ], 16);
}
const ps = /* @__PURE__ */ g(cs, [["render", fs]]), ms = {
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
      return S("ui-menu-group", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, gs = {
  key: 0,
  class: "ui-menu-group-label"
}, bs = { class: "ui-menu-group-items" };
function ys(e, t, r, l, s, i) {
  return n(), a("div", C({ class: i.groupClass }, i.passthroughAttrs), [
    r.label ? (n(), a("p", gs, m(r.label), 1)) : p("", !0),
    d("div", bs, [
      w(e.$slots, "default")
    ])
  ], 16);
}
const vs = /* @__PURE__ */ g(ms, [["render", ys]]), _s = {
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
      return S(
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
function ks(e, t, r, l, s, i) {
  const c = b("ui-button");
  return n(), _(c, C({
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
const ws = /* @__PURE__ */ g(_s, [["render", ks]]), xs = {
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
      return S("ui-menu-nav", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ss = ["aria-label"];
function Cs(e, t, r, l, s, i) {
  return n(), a("div", C({
    class: i.navClass,
    role: "navigation",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, Ss);
}
const Ts = /* @__PURE__ */ g(xs, [["render", Cs]]), Is = {
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
}, Ls = ["aria-checked", "disabled"], $s = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, As = {
  key: 1,
  class: "ui-segment-label"
}, Ps = {
  key: 2,
  class: "sr-only"
}, zs = {
  key: 0,
  class: "ui-segment-icon",
  "aria-hidden": "true"
}, Vs = {
  key: 1,
  class: "ui-segment-label"
}, Ms = {
  key: 2,
  class: "sr-only"
};
function Os(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("button", {
    type: "button",
    role: "radio",
    class: v(i.segmentClass),
    "aria-checked": i.isSelected ? "true" : "false",
    disabled: r.disabled,
    onClick: t[2] || (t[2] = (...u) => i.select && i.select(...u))
  }, [
    i.hasAffixes ? (n(), a(T, { key: 0 }, [
      i.hasPrepend ? (n(), a("span", {
        key: 0,
        class: "ui-segment-affix ui-segment-affix--prepend",
        onClick: t[0] || (t[0] = A(() => {
        }, ["stop"]))
      }, [
        w(e.$slots, "prepend")
      ])) : p("", !0),
      d("span", {
        class: v(["ui-segment-main", { "ui-segment-main--with-icon": r.icon }])
      }, [
        r.icon ? (n(), a("span", $s, [
          y(c, {
            name: r.icon,
            size: i.iconSize
          }, null, 8, ["name", "size"])
        ])) : p("", !0),
        i.showLabel ? (n(), a("span", As, m(r.label), 1)) : r.label ? (n(), a("span", Ps, m(r.label), 1)) : p("", !0)
      ], 2),
      i.hasAppend ? (n(), a("span", {
        key: 1,
        class: "ui-segment-affix ui-segment-affix--append",
        onClick: t[1] || (t[1] = A(() => {
        }, ["stop"]))
      }, [
        w(e.$slots, "append")
      ])) : p("", !0)
    ], 64)) : (n(), a(T, { key: 1 }, [
      r.icon ? (n(), a("span", zs, [
        y(c, {
          name: r.icon,
          size: i.iconSize
        }, null, 8, ["name", "size"])
      ])) : p("", !0),
      i.showLabel ? (n(), a("span", Vs, m(r.label), 1)) : r.label ? (n(), a("span", Ms, m(r.label), 1)) : p("", !0)
    ], 64))
  ], 10, Ls);
}
const Es = /* @__PURE__ */ g(Is, [["render", Os]]), Ds = ["sm", "md", "lg"], Ns = ["horizontal", "vertical"], Bs = {
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
      validator: (e) => Ds.includes(e)
    },
    /** `horizontal` (varsayılan) veya `vertical` — dar yan menü gibi düzenler */
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ns.includes(e)
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
      return S(
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
}, Rs = ["aria-label"];
function Fs(e, t, r, l, s, i) {
  return n(), a("div", C({
    class: i.rootClass,
    role: "radiogroup",
    "aria-label": r.ariaLabel || void 0
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, Rs);
}
const Ys = /* @__PURE__ */ g(Bs, [["render", Fs]]), Ws = ["horizontal", "vertical"], Gs = ["default", "pills"], Hs = {
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
      validator: (e) => Gs.includes(e)
    },
    direction: {
      type: String,
      default: "horizontal",
      validator: (e) => Ws.includes(e)
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
      return S(
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
}, Ks = ["aria-label"], Us = { class: "ui-stepper-pills-track" }, js = {
  key: 0,
  class: "ui-stepper-pills-label"
}, qs = { class: "flex w-full min-w-0 items-center justify-center" }, Zs = {
  key: 1,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Qs = {
  key: 1,
  class: "tabular-nums"
}, Xs = {
  key: 3,
  class: "ui-stepper-rail-spacer w-4 shrink-0",
  "aria-hidden": "true"
}, Js = { class: "ui-stepper-title ui-stepper-title--horizontal" }, en = {
  key: 0,
  class: "ui-stepper-description ui-stepper-description--horizontal"
}, tn = { class: "flex flex-col items-center" }, rn = {
  key: 1,
  class: "tabular-nums"
}, sn = { class: "ui-stepper-copy ui-stepper-copy--vertical min-w-0 flex-1" }, nn = { class: "ui-stepper-title" }, ln = {
  key: 0,
  class: "ui-stepper-description"
};
function an(e, t, r, l, s, i) {
  const c = b("ui-icon");
  return n(), a("div", C({
    class: i.rootClass,
    role: "list",
    "aria-label": r.ariaLabel
  }, i.passthroughAttrs), [
    r.variant === "pills" ? (n(), a(T, { key: 0 }, [
      d("div", Us, [
        (n(!0), a(T, null, $(i.normalizedSteps, (u, o) => (n(), _(W(r.interactive ? "button" : "span"), C({
          key: o,
          class: ["ui-stepper-pill", i.pillClass(o)],
          role: "listitem",
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), null, 16, ["class", "aria-current", "aria-label", "onClick"]))), 128))
      ]),
      r.showLabel ? (n(), a("p", js, m(i.pillsLabel), 1)) : p("", !0)
    ], 64)) : r.direction === "horizontal" ? (n(!0), a(T, { key: 1 }, $(i.normalizedSteps, (u, o) => (n(), a("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--horizontal flex min-w-0 flex-1 flex-col items-center text-center",
      role: "listitem"
    }, [
      d("div", qs, [
        o > 0 ? (n(), a("span", {
          key: 0,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railBeforeClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (n(), a("span", Zs)),
        (n(), _(W(r.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: k(() => [
            u.icon ? (n(), _(c, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (n(), a("span", Qs, m(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (n(), a("span", {
          key: 2,
          class: v(["ui-stepper-rail ui-stepper-rail--h", i.railAfterClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : (n(), a("span", Xs))
      ]),
      d("p", Js, m(u.title), 1),
      u.description ? (n(), a("p", en, m(u.description), 1)) : p("", !0)
    ]))), 128)) : (n(!0), a(T, { key: 2 }, $(i.normalizedSteps, (u, o) => (n(), a("div", {
      key: o,
      class: "ui-stepper-item ui-stepper-item--vertical flex gap-3",
      role: "listitem"
    }, [
      d("div", tn, [
        (n(), _(W(r.interactive ? "button" : "div"), C({
          class: ["ui-stepper-indicator shrink-0", i.indicatorClass(o)],
          "aria-current": o === r.modelValue ? "step" : void 0,
          "aria-label": u.title
        }, { ref_for: !0 }, r.interactive ? { type: "button" } : {}, {
          onClick: (h) => r.interactive ? i.go(o) : void 0
        }), {
          default: k(() => [
            u.icon ? (n(), _(c, {
              key: 0,
              name: u.icon,
              type: u.iconType || "light",
              size: "sm"
            }, null, 8, ["name", "type"])) : (n(), a("span", rn, m(o + 1), 1))
          ]),
          _: 2
        }, 1040, ["class", "aria-current", "aria-label", "onClick"])),
        o < i.normalizedSteps.length - 1 ? (n(), a("span", {
          key: 0,
          class: v(["ui-stepper-vrail", i.verticalRailClass(o)]),
          "aria-hidden": "true"
        }, null, 2)) : p("", !0)
      ]),
      d("div", sn, [
        d("p", nn, m(u.title), 1),
        u.description ? (n(), a("p", ln, m(u.description), 1)) : p("", !0)
      ])
    ]))), 128))
  ], 16, Ks);
}
const on = /* @__PURE__ */ g(Hs, [["render", an]]);
let Ie = 0;
const cn = {
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
    return Ie += 1, { fallbackId: `ui-slider-${Ie}` };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    hasValue() {
      return this.valueText != null && this.valueText !== "";
    },
    rootClass() {
      return S("ui-slider", this.disabled && "ui-slider--disabled", this.$attrs.class);
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
}, un = {
  key: 0,
  class: "ui-slider-header"
}, dn = {
  key: 0,
  class: "ui-form-label"
}, hn = {
  key: 1,
  class: "ui-slider-value"
}, fn = { class: "ui-slider-rail" }, pn = ["id", "value", "min", "max", "step", "disabled", "aria-valuemin", "aria-valuemax", "aria-valuenow", "aria-valuetext", "aria-describedby"], mn = {
  key: 1,
  class: "ui-slider-scale"
}, gn = { key: 0 }, bn = { key: 1 };
function yn(e, t, r, l, s, i) {
  const c = b("ui-progress");
  return n(), a("div", {
    class: v(i.rootClass)
  }, [
    r.label || i.hasValue ? (n(), a("div", un, [
      r.label ? (n(), a("span", dn, m(r.label), 1)) : p("", !0),
      i.hasValue ? (n(), a("span", hn, m(r.valueText), 1)) : p("", !0)
    ])) : p("", !0),
    d("div", fn, [
      y(c, {
        type: "bar",
        size: "md",
        class: "ui-slider-progress",
        value: i.fillPercent,
        presentational: ""
      }, null, 8, ["value"]),
      d("input", C(i.passthroughAttrs, {
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
      }), null, 16, pn)
    ]),
    r.minLabel || r.maxLabel ? (n(), a("div", mn, [
      r.minLabel ? (n(), a("span", gn, m(r.minLabel), 1)) : p("", !0),
      r.maxLabel ? (n(), a("span", bn, m(r.maxLabel), 1)) : p("", !0)
    ])) : p("", !0)
  ], 2);
}
const vn = /* @__PURE__ */ g(cn, [["render", yn]]);
let Le = 0;
const _n = {
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
    return Le += 1, { fallbackId: `ui-switch-${Le}` };
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
}, kn = ["id", "aria-checked", "disabled", "aria-describedby"];
function wn(e, t, r, l, s, i) {
  return n(), a("button", C({
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
    onClick: t[0] || (t[0] = (...c) => i.toggle && i.toggle(...c)),
    onKeydown: t[1] || (t[1] = (...c) => i.onKeydown && i.onKeydown(...c))
  }), [
    d("span", {
      class: v(["ui-switch-track", r.modelValue ? "ui-switch-track--on" : ""]),
      "aria-hidden": "true"
    }, [
      d("span", {
        class: v(["ui-switch-thumb", r.modelValue ? "ui-switch-thumb--on" : ""])
      }, null, 2)
    ], 2)
  ], 16, kn);
}
const xn = /* @__PURE__ */ g(_n, [["render", wn]]), Sn = {
  name: "Table",
  inheritAttrs: !1,
  computed: {
    rootClass() {
      return S("ui-table", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Cn = { class: "ui-table-scroll" };
function Tn(e, t, r, l, s, i) {
  return n(), a("div", Cn, [
    d("table", C({ class: i.rootClass }, i.passthroughAttrs), [
      w(e.$slots, "default")
    ], 16)
  ]);
}
const In = /* @__PURE__ */ g(Sn, [["render", Tn]]), Ln = {
  name: "TableBody"
}, $n = { class: "ui-table-body" };
function An(e, t, r, l, s, i) {
  return n(), a("tbody", $n, [
    w(e.$slots, "default")
  ]);
}
const Pn = /* @__PURE__ */ g(Ln, [["render", An]]), zn = ["left", "center", "right"], Vn = ["title", "secondary", "body"], Mn = {
  name: "TableCell",
  props: {
    colspan: {
      type: Number,
      default: 0
    },
    align: {
      type: String,
      default: "left",
      validator: (e) => zn.includes(e)
    },
    tone: {
      type: String,
      default: "",
      validator: (e) => e === "" || Vn.includes(e)
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
      return S(
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
}, On = ["colspan"];
function En(e, t, r, l, s, i) {
  return n(), a("td", {
    colspan: r.colspan > 0 ? r.colspan : void 0,
    class: v(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 10, On);
}
const Dn = /* @__PURE__ */ g(Mn, [["render", En]]), Nn = ["left", "center", "right"], Bn = ["sm", "md", "lg"], Rn = {
  name: "TableHead",
  props: {
    align: {
      type: String,
      default: "left",
      validator: (e) => Nn.includes(e)
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
      return S(
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
      if (!(this.iconCol || Bn.includes(this.width)) && this.width)
        return { width: this.width, minWidth: this.width };
    }
  }
};
function Fn(e, t, r, l, s, i) {
  return n(), a("th", {
    class: v(i.rootClass),
    style: N(i.widthStyle)
  }, [
    w(e.$slots, "default")
  ], 6);
}
const Yn = /* @__PURE__ */ g(Rn, [["render", Fn]]), Wn = {
  name: "TableHeader",
  props: {
    sticky: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    rootClass() {
      return S(this.sticky && "ui-table-header--sticky", this.$attrs.class);
    }
  }
};
function Gn(e, t, r, l, s, i) {
  return n(), a("thead", {
    class: v(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 2);
}
const Hn = /* @__PURE__ */ g(Wn, [["render", Gn]]), Kn = {
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
}, Un = { class: "ui-table-pagination" }, jn = { class: "ui-table-pagination-meta" }, qn = { class: "ui-table-pagination-nav" }, Zn = { class: "ui-table-pagination-page" };
function Qn(e, t, r, l, s, i) {
  const c = b("ui-button");
  return n(), a("div", Un, [
    d("div", jn, [
      w(e.$slots, "meta", {}, () => [
        M(m(r.metaText), 1)
      ])
    ]),
    d("div", qn, [
      y(c, {
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
      d("div", Zn, m(r.pageLabel), 1),
      y(c, {
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
const Xn = /* @__PURE__ */ g(Kn, [["render", Qn]]), Jn = ["soft", "strong"], el = {
  name: "TableRow",
  props: {
    hover: {
      type: String,
      default: void 0,
      validator: (e) => e == null || Jn.includes(e)
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
      return S(
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
function tl(e, t, r, l, s, i) {
  return n(), a("tr", {
    class: v(i.rootClass)
  }, [
    w(e.$slots, "default")
  ], 2);
}
const il = /* @__PURE__ */ g(el, [["render", tl]]), rl = {
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
      return S("ui-tab-panel min-w-0 flex-1 outline-none", this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  }
}, sl = ["id", "aria-labelledby"];
function nl(e, t, r, l, s, i) {
  return Ee((n(), a("div", C({
    role: "tabpanel",
    id: i.panelDomId,
    "aria-labelledby": i.triggerDomId,
    class: i.panelClass
  }, i.passthroughAttrs), [
    w(e.$slots, "default")
  ], 16, sl)), [
    [De, i.isActive]
  ]);
}
const ll = /* @__PURE__ */ g(rl, [["render", nl]]);
let $e = 0;
const Y = 40;
function H(e) {
  return String(e).padStart(2, "0");
}
const al = {
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
    return $e += 1, {
      fallbackId: `ui-timepicker-${$e}`,
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
      return this.menuOpen ? `${H(this.draftHour)}:${H(this.draftMinute)}` : this.hasValue ? String(this.modelValue) : this.placeholder;
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
    pad2: H,
    applyModelToDraft() {
      const e = this.modelValue;
      let t = 0, r = 0;
      const l = /^(\d{1,2}):(\d{2})$/.exec(String(e ?? "").trim());
      l && (t = Math.min(23, Math.max(0, parseInt(l[1], 10))), r = Math.min(59, Math.max(0, parseInt(l[2], 10))));
      const s = this.minuteValues;
      let i = s[0] ?? 0, c = 999;
      for (const u of s) {
        const o = Math.abs(u - r);
        o < c && (c = o, i = u);
      }
      this.draftHour = t, this.draftMinute = i;
    },
    wheelSpacerTop(e) {
      if (!e) return 0;
      const t = e.querySelector(".ui-timepicker-wheel-spacer");
      if (!t) return (e.clientHeight - Y) / 2;
      const r = parseFloat(window.getComputedStyle(t).paddingTop);
      return Number.isFinite(r) ? r : (e.clientHeight - Y) / 2;
    },
    indexFromScroll(e, t) {
      const r = this.wheelSpacerTop(e), l = e.scrollTop + e.clientHeight / 2, s = Math.round((l - r - Y / 2) / Y);
      return Math.min(t, Math.max(0, s));
    },
    scrollTopForIndex(e, t) {
      const r = this.wheelSpacerTop(e);
      return Math.max(0, r + t * Y + Y / 2 - e.clientHeight / 2);
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
      const e = `${H(this.draftHour)}:${H(this.draftMinute)}`;
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
}, ol = { class: "min-w-0 flex-1 truncate text-foreground" }, cl = { class: "ui-timepicker-panel w-full p-2" }, ul = { class: "relative" }, dl = { class: "relative z-[1] flex items-stretch gap-0.5" }, hl = ["aria-valuenow"], fl = {
  ref: "hourWheel",
  class: "ui-timepicker-wheel-viewport"
}, pl = { class: "ui-timepicker-wheel-spacer" }, ml = ["onClick"], gl = ["aria-valuenow"], bl = {
  ref: "minuteWheel",
  class: "ui-timepicker-wheel-viewport"
}, yl = { class: "ui-timepicker-wheel-spacer" }, vl = ["onClick"];
function _l(e, t, r, l, s, i) {
  const c = b("ui-button"), u = b("ui-popover");
  return n(), a("div", {
    class: v(["ui-timepicker", r.disabled ? "pointer-events-none opacity-50" : "", e.$attrs.class])
  }, [
    y(u, {
      open: s.menuOpen,
      "onUpdate:open": t[0] || (t[0] = (o) => s.menuOpen = o),
      placement: "bottom-start",
      "match-trigger-width": !1,
      width: r.popoverWidth,
      disabled: r.disabled
    }, {
      trigger: k(({ open: o, toggle: h }) => [
        y(c, {
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
            d("span", ol, m(i.display), 1)
          ]),
          _: 1
        }, 8, ["id", "disabled", "aria-expanded", "onClick"])
      ]),
      content: k(() => [
        d("div", cl, [
          d("div", ul, [
            t[2] || (t[2] = d("div", {
              class: "pointer-events-none absolute inset-x-0 top-1/2 z-0 h-10 -translate-y-1/2 rounded-lg bg-secondary/35 ring-1 ring-border",
              "aria-hidden": "true"
            }, null, -1)),
            d("div", dl, [
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftHour,
                "aria-valuemin": "0",
                "aria-valuemax": "23",
                "aria-label": "Saat"
              }, [
                d("div", fl, [
                  d("div", pl, [
                    (n(!0), a(T, null, $(i.hourOptions, (o) => (n(), a("button", {
                      key: "h-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (h) => i.selectHour(o)
                    }, m(i.pad2(o)), 9, ml))), 128))
                  ])
                ], 512)
              ], 8, hl),
              t[1] || (t[1] = d("span", {
                class: "flex w-4 shrink-0 select-none items-center justify-center self-stretch text-sm font-normal leading-5 tabular-nums text-muted-foreground",
                "aria-hidden": "true"
              }, ":", -1)),
              d("div", {
                class: "min-h-0 min-w-0 flex-1",
                role: "spinbutton",
                "aria-valuenow": s.draftMinute,
                "aria-valuemin": "0",
                "aria-valuemax": "59",
                "aria-label": "Dakika"
              }, [
                d("div", bl, [
                  d("div", yl, [
                    (n(!0), a(T, null, $(i.minuteValues, (o, h) => (n(), a("button", {
                      key: "m-" + o,
                      type: "button",
                      tabindex: "-1",
                      class: "ui-timepicker-wheel-item",
                      onClick: (f) => i.selectMinute(h)
                    }, m(i.pad2(o)), 9, vl))), 128))
                  ])
                ], 512)
              ], 8, gl)
            ])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "width", "disabled"])
  ], 2);
}
const kl = /* @__PURE__ */ g(al, [["render", _l]]), B = se({
  /** @type {ToastItem[]} */
  items: []
});
let Ae = 0;
function K(e = {}) {
  Ae += 1;
  const t = Ae, r = {
    id: t,
    title: e.title ?? "",
    description: e.description ?? "",
    variant: e.variant ?? "info",
    duration: e.duration !== void 0 ? e.duration : 4500,
    _timer: null
  };
  return B.items.push(r), r.duration > 0 && (r._timer = setTimeout(() => ae(t), r.duration)), t;
}
function ae(e) {
  const t = B.items.findIndex((l) => l.id === e);
  if (t === -1) return;
  const r = B.items[t];
  r._timer && (clearTimeout(r._timer), r._timer = null), B.items.splice(t, 1);
}
function wl() {
  for (const e of B.items)
    e._timer && clearTimeout(e._timer);
  B.items.splice(0);
}
const Pe = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, ze = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, xl = {
  name: "Toast",
  computed: {
    items() {
      return B.items;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    queueDismissToast: ae,
    iconFor(e) {
      return Pe[e] || Pe.info;
    },
    iconToneClass(e) {
      return ze[e] || ze.info;
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
}, Sl = { class: "ui-toast-host" }, Cl = { class: "ui-alert-body" }, Tl = {
  key: 0,
  class: "ui-alert-title"
}, Il = {
  key: 1,
  class: "ui-alert-description ui-text-default"
};
function Ll(e, t, r, l, s, i) {
  const c = b("ui-icon"), u = b("ui-button");
  return n(), _(J, { to: "body" }, [
    d("div", Sl, [
      y(dt, {
        name: "ui-toast",
        tag: "div",
        class: "ui-toast-stack"
      }, {
        default: k(() => [
          (n(!0), a(T, null, $(i.items, (o) => (n(), a("div", {
            key: o.id,
            class: "pointer-events-auto flex w-full justify-center"
          }, [
            d("div", C({
              class: i.toastClasses(o)
            }, { ref_for: !0 }, i.toastA11y(o)), [
              d("span", {
                class: v(["ui-alert-icon", i.iconToneClass(o.variant)]),
                "aria-hidden": "true"
              }, [
                y(c, {
                  name: i.iconFor(o.variant),
                  size: "sm"
                }, null, 8, ["name"])
              ], 2),
              d("div", Cl, [
                o.title ? (n(), a("p", Tl, m(o.title), 1)) : p("", !0),
                o.description ? (n(), a("p", Il, m(o.description), 1)) : p("", !0)
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
const $l = /* @__PURE__ */ g(xl, [["render", Ll]]), Al = ["square", "video", "auto"], Pl = ["fill", "sm", "md", "lg"], Ve = {
  fill: "ui-photo--size-fill",
  sm: "ui-photo--size-sm",
  md: "ui-photo--size-md",
  lg: "ui-photo--size-lg"
}, zl = {
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
      validator: (e) => Al.includes(e)
    },
    size: {
      type: String,
      default: "fill",
      validator: (e) => Pl.includes(e)
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
      return S(
        "ui-photo",
        `ui-photo--aspect-${this.aspect}`,
        Ve[this.size] || Ve.fill,
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
}, Vl = ["src", "alt"], Ml = ["aria-hidden"], Ol = {
  key: 2,
  class: "ui-photo__favorite",
  "aria-hidden": "true"
}, El = {
  key: 3,
  class: "ui-photo__overflow"
}, Dl = ["aria-label"], Nl = ["aria-label"], Bl = { class: "ui-photo-preview__panel" }, Rl = ["src", "alt"], Fl = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Yl(e, t, r, l, s, i) {
  const c = b("ui-icon"), u = b("ui-button");
  return n(), a(T, null, [
    (n(), _(W(i.rootTag), C({
      type: r.interactive ? "button" : void 0,
      class: i.rootClass
    }, i.rootBind, { onClick: i.onClick }), {
      default: k(() => [
        r.src && !s.imageFailed ? (n(), a("img", {
          key: 0,
          src: r.src,
          alt: i.resolvedAlt,
          class: "ui-photo__img",
          loading: "lazy",
          decoding: "async",
          onError: t[0] || (t[0] = (o) => s.imageFailed = !0)
        }, null, 40, Vl)) : (n(), a("span", {
          key: 1,
          class: "ui-photo__empty",
          "aria-hidden": r.interactive ? "true" : void 0
        }, [
          y(c, {
            name: "image",
            type: "light",
            class: "ui-photo__empty-icon"
          })
        ], 8, Ml)),
        r.favorite ? (n(), a("span", Ol, [
          y(c, {
            name: "star",
            type: "light",
            size: "xs"
          })
        ])) : p("", !0),
        r.overflowLabel ? (n(), a("span", El, m(r.overflowLabel), 1)) : p("", !0)
      ]),
      _: 1
    }, 16, ["type", "class", "onClick"])),
    (n(), _(J, { to: "body" }, [
      y(ne, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: k(() => [
          s.previewOpen ? (n(), a("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[2] || (t[2] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[1] || (t[1] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, Nl),
            d("div", Bl, [
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
              i.showPrev ? (n(), _(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: A(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.activeSrc ? (n(), a("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Rl)) : p("", !0),
              i.showNext ? (n(), _(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: A(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.counterLabel ? (n(), a("p", Fl, m(i.counterLabel), 1)) : p("", !0)
            ])
          ], 40, Dl)) : p("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Wl = /* @__PURE__ */ g(zl, [["render", Yl]]), Gl = ["square", "video", "auto"], Hl = {
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
      validator: (e) => Gl.includes(e)
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
      return S(
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
}, Kl = ["data-count"], Ul = ["aria-label"], jl = ["aria-label"], ql = { class: "ui-photo-preview__panel" }, Zl = ["src", "alt"], Ql = {
  key: 3,
  class: "ui-photo-preview__counter"
};
function Xl(e, t, r, l, s, i) {
  const c = b("ui-photo"), u = b("ui-button");
  return n(), a(T, null, [
    d("div", {
      class: v(["ui-photos", i.layoutClass]),
      "data-count": i.displayCount
    }, [
      (n(!0), a(T, null, $(i.visibleItems, (o, h) => (n(), _(c, {
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
    ], 10, Kl),
    (n(), _(J, { to: "body" }, [
      y(ne, {
        name: "ui-photo-preview",
        appear: ""
      }, {
        default: k(() => [
          s.previewOpen ? (n(), a("div", {
            key: 0,
            class: "ui-photo-preview",
            role: "dialog",
            "aria-modal": "true",
            "aria-label": i.previewAriaLabel,
            onKeydown: t[1] || (t[1] = (...o) => i.onPreviewKeydown && i.onPreviewKeydown(...o))
          }, [
            d("button", {
              type: "button",
              class: "ui-photo-preview__backdrop",
              "aria-label": i.closeLabel,
              onClick: t[0] || (t[0] = (...o) => i.closePreview && i.closePreview(...o))
            }, null, 8, jl),
            d("div", ql, [
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
              i.showPrev ? (n(), _(u, {
                key: 0,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-left",
                class: "ui-photo-preview__nav ui-photo-preview__nav--prev",
                "aria-label": i.prevLabel,
                onClick: A(i.goPrev, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.activeSrc ? (n(), a("img", {
                key: 1,
                src: i.activeSrc,
                alt: i.activeAlt,
                class: "ui-photo-preview__img"
              }, null, 8, Zl)) : p("", !0),
              i.showNext ? (n(), _(u, {
                key: 2,
                type: "button",
                variant: "solid",
                color: "secondary",
                cubed: "",
                "prefix-icon": "chevron-right",
                class: "ui-photo-preview__nav ui-photo-preview__nav--next",
                "aria-label": i.nextLabel,
                onClick: A(i.goNext, ["stop"])
              }, null, 8, ["aria-label", "onClick"])) : p("", !0),
              i.counterLabel ? (n(), a("p", Ql, m(i.counterLabel), 1)) : p("", !0)
            ])
          ], 40, Ul)) : p("", !0)
        ]),
        _: 1
      })
    ]))
  ], 64);
}
const Jl = /* @__PURE__ */ g(Hl, [["render", Xl]]);
function Q(e) {
  return e == null ? {} : typeof e == "string" ? { title: e } : typeof e == "object" ? e : {};
}
function na() {
  return {
    push: K,
    dismiss: ae,
    clear: wl,
    info: (e) => K({ ...Q(e), variant: "info" }),
    success: (e) => K({ ...Q(e), variant: "success" }),
    warning: (e) => K({ ...Q(e), variant: "warning" }),
    error: (e) => K({ ...Q(e), variant: "error" })
  };
}
function la(e = !1) {
  return se({
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
function aa() {
  return {
    confirm: ti
  };
}
const re = {
  en: Ye,
  tr: Oe
};
function oa(e = "tr") {
  return re[e] ?? re.tr;
}
const ca = Oe, ea = [
  ["ui-action-group", We],
  ["ui-alert", Ge],
  ["ui-avatar", vt],
  ["ui-badge", He],
  ["ui-button", Ke],
  ["ui-card", Ue],
  ["ui-checkbox", qt],
  ["ui-checkbox-group", ei],
  ["ui-color-picker", Ot],
  ["ui-currency-input", Ft],
  ["ui-confirm-dialog", si],
  ["ui-date-picker", je],
  ["ui-date-range-picker", vi],
  ["ui-dialog", qe],
  ["ui-divider", Me],
  ["ui-dropdown", xi],
  ["ui-empty", Vi],
  ["ui-field", Yi],
  ["ui-file", er],
  ["ui-form-row", Ze],
  ["ui-icon", Qe],
  ["ui-icon-picker", mr],
  ["ui-input", Xe],
  ["ui-password", wr],
  ["ui-phone", Je],
  ["ui-pin", Lr],
  ["ui-list", zr],
  ["ui-list-item", Rr],
  ["ui-popover", Zr],
  ["ui-progress", as],
  ["ui-radio", et],
  ["ui-radio-group", tt],
  ["ui-select", it],
  ["ui-menu", ps],
  ["ui-menu-group", vs],
  ["ui-menu-item", ws],
  ["ui-menu-nav", Ts],
  ["ui-segment", Es],
  ["ui-segment-group", Ys],
  ["ui-skeleton", rt],
  ["ui-slider", vn],
  ["ui-stepper", on],
  ["ui-switch", xn],
  ["ui-table", In],
  ["ui-table-body", Pn],
  ["ui-table-cell", Dn],
  ["ui-table-head", Yn],
  ["ui-table-header", Hn],
  ["ui-table-pagination", Xn],
  ["ui-table-row", il],
  ["ui-tag", st],
  ["ui-tab-list", nt],
  ["ui-tab-panel", ll],
  ["ui-tabs", lt],
  ["ui-tab-trigger", at],
  ["ui-time-picker", kl],
  ["ui-tooltip", ot],
  ["ui-toast", $l],
  ["ui-photo", Wl],
  ["ui-photos", Jl]
];
function ta(e, t = {}) {
  var c, u;
  const { i18n: r, locale: l, locales: s, theme: i } = t;
  if (i && Fe(i), (c = r == null ? void 0 : r.global) != null && c.mergeLocaleMessage) {
    const o = s ?? (l != null ? [l] : [
      typeof r.global.locale == "string" ? r.global.locale : ((u = r.global.locale) == null ? void 0 : u.value) ?? "tr"
    ]);
    for (const h of o) {
      const f = re[h];
      f && r.global.mergeLocaleMessage(h, f);
    }
  }
  for (const [o, h] of ea)
    e.component(o, h);
}
const ua = {
  install: ta
};
export {
  We as ActionGroup,
  Ge as Alert,
  vt as Avatar,
  He as Badge,
  Ke as Button,
  Ue as Card,
  qt as Checkbox,
  ei as CheckboxGroup,
  Ot as ColorPicker,
  si as ConfirmDialog,
  Ft as CurrencyInput,
  je as DatePicker,
  vi as DateRangePicker,
  qe as Dialog,
  Me as Divider,
  xi as Dropdown,
  Vi as Empty,
  Yi as Field,
  er as File,
  Ze as FormRow,
  Qe as Icon,
  mr as IconPicker,
  Xe as Input,
  zr as List,
  Rr as ListItem,
  ps as Menu,
  vs as MenuGroup,
  ws as MenuItem,
  Ts as MenuNav,
  wr as Password,
  Je as Phone,
  Wl as Photo,
  Jl as Photos,
  Lr as Pin,
  Zr as Popover,
  as as Progress,
  et as Radio,
  tt as RadioGroup,
  Es as Segment,
  Ys as SegmentGroup,
  it as Select,
  rt as Skeleton,
  vn as Slider,
  on as Stepper,
  xn as Switch,
  nt as TabList,
  ll as TabPanel,
  at as TabTrigger,
  In as Table,
  Pn as TableBody,
  Dn as TableCell,
  Yn as TableHead,
  Hn as TableHeader,
  Xn as TablePagination,
  il as TableRow,
  lt as Tabs,
  st as Tag,
  kl as TimePicker,
  $l as Toast,
  ot as Tooltip,
  Fe as applyUiTheme,
  wl as clearToasts,
  ua as default,
  ae as dismissToast,
  sa as formatCurrencyAmount,
  Ne as getCurrencySymbol,
  oa as getUiMessages,
  fa as mergeUiTheme,
  K as pushToast,
  ti as requestConfirm,
  le as resolveCurrencyCode,
  Et as sanitizeMoneyInput,
  ca as uiMessagesTr,
  aa as useConfirm,
  la as useDialog,
  na as useToast
};
//# sourceMappingURL=index.js.map
