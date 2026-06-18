import { openBlock as l, createElementBlock as o, mergeProps as z, renderSlot as m, resolveComponent as v, normalizeClass as b, createVNode as g, createCommentVNode as f, createElementVNode as h, toDisplayString as k, createBlock as _, Teleport as J, Transition as Y, withCtx as x, normalizeStyle as K, createTextVNode as N, Fragment as F, withModifiers as R, renderList as j, withDirectives as q, vShow as $e, withKeys as G, createSlots as Fe, vModelText as ne, normalizeProps as Ne, guardReactiveProps as Me, useSlots as He, computed as V, ref as $, onMounted as We, watch as je, nextTick as re } from "vue";
import { RouterLink as Ye } from "vue-router";
const w = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [r, a] of t)
    i[r] = a;
  return i;
};
function T(...e) {
  const t = [];
  for (const i of e)
    if (i) {
      if (typeof i == "string") {
        t.push(i);
        continue;
      }
      if (typeof i == "object")
        for (const [r, a] of Object.entries(i))
          a && t.push(r);
    }
  return t.join(" ");
}
const Ke = ["horizontal", "vertical"], qe = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Ke.includes(e)
    },
    /**
     * true: doğrudan çocukların bitişik iç köşelerinde border-radius sıfırlanır (dış uçlar korunur).
     * Kapsayıcıya border, arka plan veya divide eklenmez.
     */
    joined: {
      type: Boolean,
      default: !1
    },
    /** Yatayda doğrudan çocuklara `flex-1 min-w-0` (toolbar’da eşit pay) */
    grow: {
      type: Boolean,
      default: !1
    },
    /** `role="group"` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      return T(
        "ui-action-group",
        `ui-action-group--${this.orientation}`,
        this.joined && "ui-action-group--joined",
        this.grow && "ui-action-group--grow",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ge = ["aria-label"];
function Ue(e, t, i, r, a, n) {
  return l(), o("div", z({
    class: n.rootClass,
    role: "group",
    "aria-label": i.ariaLabel || void 0
  }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, Ge);
}
const Fr = /* @__PURE__ */ w(qe, [["render", Ue]]), Qe = ["info", "success", "warning", "error"], se = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, ae = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, Ze = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => Qe.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan ikon yerine `circle-info` vb. */
    icon: {
      type: String,
      default: null
    },
    /** `false` — sol ikon gösterilmez; `#icon` slotu ile özelleştirilebilir */
    showIcon: {
      type: Boolean,
      default: !0
    },
    dismissible: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["dismiss"],
  computed: {
    alertRole() {
      return this.variant === "error" || this.variant === "warning" ? "alert" : "status";
    },
    resolvedIcon() {
      return this.icon || se[this.variant] || se.info;
    },
    iconToneClass() {
      return ae[this.variant] || ae.info;
    },
    rootClasses() {
      return T(`ui-alert ui-alert--${this.variant}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    dismissLabel() {
      return typeof this.$t == "function" ? this.$t("ui.alert.dismiss") : "Kapat";
    }
  },
  methods: {
    onDismiss() {
      this.$emit("dismiss");
    }
  }
}, Xe = ["role"], Je = { class: "ui-alert-body" }, et = {
  key: 0,
  class: "ui-alert-title"
}, tt = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, it = {
  key: 2,
  class: "ui-alert-slot"
};
function nt(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("ui-button");
  return l(), o("div", z({
    class: n.rootClasses,
    role: n.alertRole
  }, n.passthroughAttrs), [
    i.showIcon ? (l(), o("span", {
      key: 0,
      class: b(["ui-alert-icon", n.iconToneClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "icon", {}, () => [
        g(s, {
          name: n.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", Je, [
      i.title ? (l(), o("p", et, k(i.title), 1)) : f("", !0),
      i.description ? (l(), o("p", tt, k(i.description), 1)) : f("", !0),
      e.$slots.default ? (l(), o("div", it, [
        m(e.$slots, "default")
      ])) : f("", !0)
    ]),
    i.dismissible ? (l(), _(d, {
      key: 1,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": n.dismissLabel,
      onClick: n.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : f("", !0)
  ], 16, Xe);
}
const Br = /* @__PURE__ */ w(Ze, [["render", nt]]);
let rt = 0;
const st = ["top", "bottom", "left", "right"], D = 8, at = {
  name: "Tooltip",
  inheritAttrs: !1,
  props: {
    /** Boşsa yalnızca `content` slot’u kullanılabilir */
    label: {
      type: String,
      default: ""
    },
    placement: {
      type: String,
      default: "top",
      validator: (e) => st.includes(e)
    },
    /** Gecikme (ms) */
    showDelay: {
      type: Number,
      default: 0
    },
    hideDelay: {
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      open: !1,
      panelStyle: {},
      tooltipId: `ui-tooltip-${++rt}`,
      showTimer: null,
      hideTimer: null
    };
  },
  computed: {
    hasContent() {
      return !!(this.label || this.$slots.content);
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScrollResize, !0), window.addEventListener("resize", this.onScrollResize), document.addEventListener("keydown", this.onDocumentKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScrollResize, !0), window.removeEventListener("resize", this.onScrollResize), document.removeEventListener("keydown", this.onDocumentKeydown), this.clearTimers();
  },
  methods: {
    clearTimers() {
      this.showTimer && (clearTimeout(this.showTimer), this.showTimer = null), this.hideTimer && (clearTimeout(this.hideTimer), this.hideTimer = null);
    },
    scheduleShow() {
      if (this.disabled || !this.hasContent) return;
      this.clearTimers();
      const e = () => {
        this.open = !0, this.$nextTick(() => this.updatePosition());
      };
      this.showDelay > 0 ? this.showTimer = setTimeout(e, this.showDelay) : e();
    },
    scheduleHide() {
      this.clearTimers();
      const e = () => {
        this.open = !1;
      };
      this.hideDelay > 0 ? this.hideTimer = setTimeout(e, this.hideDelay) : e();
    },
    onEnter() {
      this.scheduleShow();
    },
    onLeave() {
      this.scheduleHide();
    },
    onFocusIn() {
      this.scheduleShow();
    },
    onFocusOut(e) {
      const t = this.$refs.wrapperRef;
      t && e.relatedTarget && t.contains(e.relatedTarget) || this.scheduleHide();
    },
    onScrollResize() {
      this.open && this.updatePosition();
    },
    onDocumentKeydown(e) {
      e.key === "Escape" && this.open && (this.open = !1, this.clearTimers());
    },
    updatePosition() {
      const e = this.$refs.wrapperRef;
      if (!e) return;
      const t = e.getBoundingClientRect(), i = D, r = t.left + t.width / 2, a = t.top + t.height / 2;
      let n = this.placement, s = {};
      switch (n) {
        case "bottom":
          s = {
            left: `${r}px`,
            top: `${t.bottom + i}px`,
            transform: "translate(-50%, 0)"
          };
          break;
        case "left":
          s = {
            left: `${t.left - i}px`,
            top: `${a}px`,
            transform: "translate(-100%, -50%)"
          };
          break;
        case "right":
          s = {
            left: `${t.right + i}px`,
            top: `${a}px`,
            transform: "translate(0, -50%)"
          };
          break;
        case "top":
        default:
          s = {
            left: `${r}px`,
            top: `${t.top - i}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = s, this.$nextTick(() => {
        this.clampToViewport(t, n, i);
      });
    },
    clampToViewport(e, t, i) {
      const r = this.$refs.panelRef;
      if (!r) return;
      const a = window.innerWidth, n = window.innerHeight;
      let s = r.getBoundingClientRect();
      t === "top" && s.top < D ? (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.bottom + i}px`,
        transform: "translate(-50%, 0)"
      }, s = r.getBoundingClientRect()) : t === "bottom" && s.bottom > n - D && (this.panelStyle = {
        left: `${e.left + e.width / 2}px`,
        top: `${e.top - i}px`,
        transform: "translate(-50%, -100%)"
      }, s = r.getBoundingClientRect());
      let d = 0, c = 0;
      if (s.left < D ? d = D - s.left : s.right > a - D && (d = a - D - s.right), s.top < D ? c = D - s.top : s.bottom > n - D && (c = n - D - s.bottom), d === 0 && c === 0) return;
      const u = parseFloat(this.panelStyle.left), p = parseFloat(this.panelStyle.top);
      !Number.isFinite(u) || !Number.isFinite(p) || (this.panelStyle = {
        ...this.panelStyle,
        left: `${u + d}px`,
        top: `${p + c}px`
      });
    }
  }
}, lt = ["id"], ot = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function dt(e, t, i, r, a, n) {
  return l(), o("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...s) => n.onEnter && n.onEnter(...s)),
    onMouseleave: t[1] || (t[1] = (...s) => n.onLeave && n.onLeave(...s)),
    onFocusin: t[2] || (t[2] = (...s) => n.onFocusIn && n.onFocusIn(...s)),
    onFocusout: t[3] || (t[3] = (...s) => n.onFocusOut && n.onFocusOut(...s))
  }, [
    m(e.$slots, "default"),
    (l(), _(J, { to: "body" }, [
      g(Y, { name: "ui-tooltip-fade" }, {
        default: x(() => [
          a.open && !i.disabled && n.hasContent ? (l(), o("div", {
            key: 0,
            id: a.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: K(a.panelStyle),
            role: "tooltip"
          }, [
            h("span", ot, [
              m(e.$slots, "content", {}, () => [
                N(k(i.label), 1)
              ])
            ])
          ], 12, lt)) : f("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const Be = /* @__PURE__ */ w(at, [["render", dt]]), ut = ["solid", "secondary", "outline"], ct = ["sm", "md", "lg"], le = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground"
}, oe = {
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, U = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  full: "max-w-full"
};
function ht(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let i = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(i) && (i = `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`), /^#[0-9A-Fa-f]{6}$/.test(i) ? i.toUpperCase() : "";
}
function ft(e) {
  const t = parseInt(e.slice(1, 3), 16), i = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * i + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const mt = {
  name: "Badge",
  components: { Tooltip: Be },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => ut.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => ct.includes(e)
    },
    /** Uzun metinde kısaltma (…) ve taşma varsa tooltip */
    truncate: {
      type: Boolean,
      default: !0
    },
    /** Tailwind max-w-* anahtarı: full (varsayılan), 32, 40, 48 */
    maxWidth: {
      type: String,
      default: "full",
      validator: (e) => Object.keys(U).includes(e)
    },
    /** Tooltip metni; boşsa slot metni kullanılır */
    tooltip: {
      type: String,
      default: ""
    },
    /** Geçerli hex renk (#RGB / #RRGGBB); arka plan ve metin kontrastı buna göre uygulanır */
    hex: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isTruncated: !1,
      labelText: "",
      resizeObserver: null
    };
  },
  computed: {
    labelWidthClass() {
      return this.truncate ? U[this.maxWidth] || U[32] : "max-w-full";
    },
    hasAdornment() {
      return !!(this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return ht(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: ft(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        oe[this.size] || oe.sm,
        !this.normalizedHex && (le[this.variant] || le.solid)
      ];
    },
    tooltipLabel() {
      return (this.tooltip || this.labelText || "").trim();
    },
    showTooltip() {
      return this.truncate && this.isTruncated && !!this.tooltipLabel;
    }
  },
  watch: {
    tooltip() {
      this.$nextTick(() => this.measureLabel());
    }
  },
  mounted() {
    this.$nextTick(() => this.observeLabel());
  },
  updated() {
    this.$nextTick(() => this.measureLabel());
  },
  beforeUnmount() {
    var e;
    (e = this.resizeObserver) == null || e.disconnect(), this.resizeObserver = null;
  },
  methods: {
    observeLabel() {
      var t;
      const e = this.$refs.labelRef;
      if (!e || typeof ResizeObserver > "u") {
        this.measureLabel();
        return;
      }
      (t = this.resizeObserver) == null || t.disconnect(), this.measureLabel(), this.resizeObserver = new ResizeObserver(() => this.measureLabel()), this.resizeObserver.observe(e);
    },
    measureLabel() {
      const e = this.$refs.labelRef;
      if (!e) {
        this.isTruncated = !1, this.labelText = "";
        return;
      }
      if (this.labelText = (e.textContent || "").trim(), !this.truncate) {
        this.isTruncated = !1;
        return;
      }
      this.isTruncated = e.scrollWidth > e.clientWidth + 1;
    }
  }
}, pt = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, gt = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function bt(e, t, i, r, a, n) {
  const s = v("Tooltip");
  return l(), _(s, {
    label: n.tooltipLabel,
    disabled: !n.showTooltip,
    placement: "top"
  }, {
    default: x(() => [
      h("span", {
        class: b(n.badgeClasses),
        style: K(n.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (l(), o("span", pt, [
          m(e.$slots, "prepend")
        ])) : f("", !0),
        h("span", {
          ref: "labelRef",
          class: b(["ui-badge-label", n.labelWidthClass])
        }, [
          m(e.$slots, "default")
        ], 2),
        e.$slots.append ? (l(), o("span", gt, [
          m(e.$slots, "append")
        ])) : f("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const yt = /* @__PURE__ */ w(mt, [["render", bt]]);
function Pe(e, t, i) {
  if (e && typeof e.$t == "function") {
    const r = e.$t(t);
    if (r != null && r !== "" && r !== t)
      return r;
  }
  return i;
}
const vt = ["sm", "md", "lg"], kt = ["solid", "outline", "ghost", "link", "nav"], St = ["primary", "secondary", "input", "warning", "success", "info"], wt = ["button", "submit", "reset"], de = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, ue = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, xt = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ce = {
  solid: {
    primary: "border-0 bg-primary text-primary-foreground shadow-none hover:opacity-90",
    secondary: "border-0 bg-secondary text-secondary-foreground shadow-none hover:opacity-90",
    input: "border-0 shadow-none",
    warning: "border-0 bg-warning text-warning-foreground shadow-none hover:opacity-90",
    success: "border-0 bg-success text-success-foreground shadow-none hover:opacity-90",
    info: "border-0 bg-info text-info-foreground shadow-none hover:opacity-90"
  },
  outline: {
    primary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    secondary: "border border-border bg-transparent text-foreground shadow-none hover:bg-muted/60",
    warning: "shadow-none border border-warning bg-transparent text-warning hover:bg-warning/10",
    success: "shadow-none border border-success bg-transparent text-success hover:bg-success/10",
    info: "shadow-none border border-info bg-transparent text-info hover:bg-info/10"
  },
  ghost: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-primary hover:text-primary-foreground",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-warning hover:text-warning-foreground",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-success hover:text-success-foreground",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-info hover:text-info-foreground"
  },
  link: {
    primary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none font-medium text-primary underline-offset-4 hover:underline",
    secondary: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-secondary-foreground underline-offset-4 hover:underline",
    warning: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-warning underline-offset-4 hover:underline",
    success: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-success underline-offset-4 hover:underline",
    info: "border-0 bg-transparent p-0 !h-auto !min-h-0 shadow-none text-info underline-offset-4 hover:underline"
  },
  nav: {
    primary: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    secondary: "shadow-none border-0 bg-transparent text-secondary-foreground hover:bg-transparent",
    input: "shadow-none border-0 bg-transparent text-foreground hover:bg-transparent",
    warning: "shadow-none border-0 bg-transparent text-warning hover:bg-transparent",
    success: "shadow-none border-0 bg-transparent text-success hover:bg-transparent",
    info: "shadow-none border-0 bg-transparent text-info hover:bg-transparent"
  }
}, _t = {
  name: "Button",
  components: { RouterLink: Ye },
  props: {
    /** `vue-router` hedefi; verildiğinde `<a>` + istemci navigasyonu (`RouterLink` custom). */
    to: {
      type: [String, Object],
      default: null
    },
    /** Native `<button type="...">` — `to` yokken; forms için `submit` / `reset`. */
    nativeType: {
      type: String,
      default: "button",
      validator: (e) => wt.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => kt.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => St.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => vt.includes(e)
    },
    prefixIcon: {
      type: String,
      default: null
    },
    suffixIcon: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Boş bırakılırsa `ui.button.loading` (i18n) kullanılır */
    loadingText: {
      type: String,
      default: null
    },
    cubed: {
      type: Boolean,
      default: !1
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !1
    },
    /** `fulled` ile aynı — tam genişlik düğme. */
    block: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Metin slot’u (ve `loading` durumunda görünen satır) yatay hizası.
     */
    textAlign: {
      type: String,
      default: "center",
      validator: (e) => e === "left" || e === "center"
    }
  },
  emits: ["click"],
  computed: {
    hasRouterTo() {
      return this.to != null && this.to !== "";
    },
    /**
     * Kübik kutu: yalnız ikon veya tek slot (ör. avatar).
     * Slot varken `textContentClass` (`truncate`) kullanılmaz — kesilme olmaz.
     */
    usesCubedCenterLayout() {
      return !this.cubed || this.prefixIcon && this.suffixIcon ? !1 : this.prefixIcon || this.suffixIcon ? !this.$slots.default : !0;
    },
    isDisabled() {
      return this.disabled || this.loading;
    },
    resolvedLoadingText() {
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : Pe(this, "ui.button.loading", "Loading");
    },
    textContentClass() {
      return ["ui-button-text min-w-0 flex-1 truncate", this.textAlign === "left" ? "text-left" : "text-center"].join(" ");
    },
    /** Metin yanı ikonlar — küçük kontrollerde `xs`, `lg` düğmede `sm`. */
    inlineIconSize() {
      return this.size === "lg" ? "sm" : "xs";
    },
    /** Kübik düğme ikonları — kutu boyutuna göre. */
    cubedIconSize() {
      return { sm: "xs", md: "sm", lg: "sm" }[this.size] || "sm";
    },
    buttonClasses() {
      var s, d;
      const e = this.variant === "link", t = this.variant === "nav";
      let i;
      this.cubed && !e && !t ? i = ue[this.size] || ue.md : e ? i = xt[this.size] : t ? i = "h-auto min-h-0 w-full max-w-full justify-start overflow-hidden p-0 !min-h-0" : i = de[this.size] || de.md;
      let r = "";
      !e && !t && (this.rounded && !this.cubed || this.cubed) && (r = "rounded-full");
      const a = ((s = ce[this.variant]) == null ? void 0 : s[this.color]) || ((d = ce.solid) == null ? void 0 : d.primary), n = this.fulled || this.block;
      return [
        "ui-button ui-control font-sans",
        a,
        i,
        n ? "ui-button--fulled w-full" : "",
        r,
        this.isDisabled ? "cursor-not-allowed opacity-50" : "",
        this.hasRouterTo ? "inline-flex items-center" : ""
      ];
    }
  },
  methods: {
    onClick(e) {
      this.isDisabled || this.$emit("click", e);
    },
    onRouterLinkClick(e, t) {
      if (this.isDisabled) {
        e.preventDefault();
        return;
      }
      this.$emit("click", e), t(e);
    }
  }
}, Ct = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], Tt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, It = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, zt = {
  key: 0,
  class: "sr-only"
}, At = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Lt = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Dt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Rt = ["type", "disabled", "data-variant", "data-color"], $t = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, Ft = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Bt = {
  key: 0,
  class: "sr-only"
}, Pt = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Et = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Ot = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Vt(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("RouterLink");
  return n.hasRouterTo ? (l(), _(d, {
    key: 0,
    to: i.to,
    custom: ""
  }, {
    default: x(({ href: c, navigate: u }) => [
      h("a", {
        href: c,
        class: b(n.buttonClasses),
        "data-variant": i.variant,
        "data-color": i.color,
        "aria-disabled": n.isDisabled ? "true" : void 0,
        tabindex: n.isDisabled ? -1 : void 0,
        onClick: (p) => n.onRouterLinkClick(p, u)
      }, [
        i.loading && n.usesCubedCenterLayout ? (l(), o("span", Tt, [
          g(s, {
            size: n.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : i.loading ? (l(), o(F, { key: 1 }, [
          h("span", It, [
            g(s, {
              size: n.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          h("span", {
            class: b(n.textContentClass)
          }, [
            n.resolvedLoadingText ? (l(), o("span", zt, k(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", At, [
          i.prefixIcon ? (l(), _(s, {
            key: 0,
            size: n.cubedIconSize,
            name: i.prefixIcon
          }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(s, {
            key: 1,
            size: n.cubedIconSize,
            name: i.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (l(), o(F, { key: 3 }, [
          i.prefixIcon ? (l(), o("span", Lt, [
            g(s, {
              size: n.inlineIconSize,
              name: i.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: b(n.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          i.suffixIcon ? (l(), o("span", Dt, [
            g(s, {
              size: n.inlineIconSize,
              name: i.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, Ct)
    ]),
    _: 3
  }, 8, ["to"])) : (l(), o("button", {
    key: 1,
    type: i.nativeType,
    disabled: n.isDisabled,
    class: b(n.buttonClasses),
    "data-variant": i.variant,
    "data-color": i.color,
    onClick: t[0] || (t[0] = (...c) => n.onClick && n.onClick(...c))
  }, [
    i.loading && n.usesCubedCenterLayout ? (l(), o("span", $t, [
      g(s, {
        size: n.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : i.loading ? (l(), o(F, { key: 1 }, [
      h("span", Ft, [
        g(s, {
          size: n.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      h("span", {
        class: b(n.textContentClass)
      }, [
        n.resolvedLoadingText ? (l(), o("span", Bt, k(n.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : n.usesCubedCenterLayout ? (l(), o("span", Pt, [
      i.prefixIcon ? (l(), _(s, {
        key: 0,
        size: n.cubedIconSize,
        name: i.prefixIcon
      }, null, 8, ["size", "name"])) : i.suffixIcon ? (l(), _(s, {
        key: 1,
        size: n.cubedIconSize,
        name: i.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (l(), o(F, { key: 3 }, [
      i.prefixIcon ? (l(), o("span", Et, [
        g(s, {
          size: n.inlineIconSize,
          name: i.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: b(n.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      i.suffixIcon ? (l(), o("span", Ot, [
        g(s, {
          size: n.inlineIconSize,
          name: i.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, Rt));
}
const Pr = /* @__PURE__ */ w(_t, [["render", Vt]]), Nt = ["none", "sm", "md"], he = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Mt = {
  name: "Divider",
  inheritAttrs: !1,
  props: {
    /** Ortada gösterilecek başlık — `icon` ile birlikte etiketli ayırıcı */
    title: {
      type: String,
      default: ""
    },
    /** Başlık yanında gösterilecek ikon (`ui-icon` `name`) */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Dikey boşluk (üst/alt).
     * `none`: yalnızca çizgi — üst bileşenin kendi gap’i ile hizalamak için.
     */
    spacing: {
      type: String,
      default: "md",
      validator: (e) => Nt.includes(e)
    },
    /**
     * true: yalnızca görsel — `role="presentation"`, ekran okuyucu atlar.
     * false: `role="separator"` + `aria-orientation="horizontal"`.
     */
    decorative: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    hasLabel() {
      return !!(this.title && this.title.trim() || this.icon);
    },
    rootClass() {
      return ["ui-divider", he[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        he[this.spacing] || "",
        this.$attrs.class
      ].filter(Boolean).join(" ");
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    rootAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.decorative ? e.role = "presentation" : (e.role = "separator", e["aria-orientation"] = "horizontal"), e;
    },
    labeledAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.decorative ? e.role = "presentation" : (e.role = "separator", e["aria-orientation"] = "horizontal", this.title && (e["aria-label"] = this.title)), e;
    }
  }
}, Ht = { class: "ui-divider__label" }, Wt = {
  key: 1,
  class: "ui-section-label"
};
function jt(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return n.hasLabel ? (l(), o("div", z({
    key: 1,
    class: n.labeledClass
  }, n.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", Ht, [
      i.icon ? (l(), _(s, {
        key: 0,
        name: i.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      i.title ? (l(), o("span", Wt, k(i.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (l(), o("hr", z({
    key: 0,
    class: n.rootClass
  }, n.rootAttrs), null, 16));
}
const Ee = /* @__PURE__ */ w(Mt, [["render", jt]]), Yt = ["solid", "dashed", "dotted", "double"], fe = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Kt = ["solid", "regular", "brands", "light", "duotone", "thin"], qt = {
  name: "Card",
  components: { Divider: Ee },
  inheritAttrs: !1,
  props: {
    /** Dış çerçeve (1px `border-border`). */
    border: {
      type: Boolean,
      default: !0
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: "solid",
      validator: (e) => Yt.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => Kt.includes(e)
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: !1
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı */
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /** Kök padding ve bölüm aralığını kaldırır; gövde kenara yaslanır. Başlık/alt bilgi için kompakt iç boşluk kalır. */
    removePadding: {
      type: Boolean,
      default: !1
    },
    /** Dolgu ve gölge olmadan yalnızca çerçeve (boş tablo kabuğu vb.). */
    transparent: {
      type: Boolean,
      default: !1
    },
    /** `data-table` — sıfır kök padding; toolbar/footer DataTable boşlukları. */
    layout: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "data-table"
    }
  },
  computed: {
    hasDefaultHeader() {
      return !!(this.icon || this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && (!!this.$slots.toolbar || this.hasHeaderBlock);
    },
    borderStyleClass() {
      return fe[this.borderType] || fe.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.layout === "data-table" && e.push("ui-card--data-table"), this.transparent && e.push("ui-card--transparent"), T(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Gt = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Ut = {
  key: 0,
  class: "ui-header-lead"
}, Qt = { class: "ui-header-lead__main" }, Zt = {
  key: 0,
  class: "ui-header-lead__icon"
}, Xt = { class: "ui-header-lead__text" }, Jt = {
  key: 0,
  class: "ui-heading-3"
}, ei = {
  key: 1,
  class: "ui-text-default"
}, ti = {
  key: 0,
  class: "ui-header-lead__actions"
};
function ii(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("Divider");
  return l(), o("div", z({ class: n.rootClasses }, n.passthroughAttrs), [
    e.$slots.toolbar ? (l(), o("div", Gt, [
      m(e.$slots, "toolbar")
    ])) : f("", !0),
    n.hasHeaderBlock ? (l(), o("div", {
      key: 1,
      class: b(["ui-card-header shrink-0", { "ui-card-header--inset": i.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        n.hasDefaultHeader ? (l(), o("div", Ut, [
          h("div", Qt, [
            i.icon ? (l(), o("span", Zt, [
              g(s, {
                name: i.icon,
                type: i.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", Xt, [
              i.title ? (l(), o("h3", Jt, k(i.title), 1)) : f("", !0),
              i.description ? (l(), o("p", ei, k(i.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (l(), o("div", ti, [
            m(e.$slots, "append"),
            m(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    n.showHeaderDivider ? (l(), _(d, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (l(), o("div", {
      key: 3,
      class: b(["ui-card-body ui-text-default", {
        "ui-card-body--row": i.row,
        "ui-card-body--flush": i.removePadding
      }])
    }, [
      m(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (l(), o("div", {
      key: 4,
      class: b(["ui-card-footer", { "ui-card-footer--inset": i.removePadding }])
    }, [
      m(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const Er = /* @__PURE__ */ w(qt, [["render", ii]]);
let me = 0;
function pe(e) {
  return String(e).padStart(2, "0");
}
function E(e) {
  return `${e.getFullYear()}-${pe(e.getMonth() + 1)}-${pe(e.getDate())}`;
}
function Q(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const i = Number(t[1]), r = Number(t[2]) - 1, a = Number(t[3]), n = new Date(i, r, a);
  return n.getFullYear() !== i || n.getMonth() !== r || n.getDate() !== a ? null : n;
}
const ni = {
  name: "DatePicker",
  inheritAttrs: !1,
  props: {
    /** `YYYY-MM-DD` */
    modelValue: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Pick a date"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    fulled: {
      type: Boolean,
      default: !0
    },
    id: {
      type: String,
      default: void 0
    },
    /** En erken seçilebilir gün (`YYYY-MM-DD`) */
    min: {
      type: String,
      default: ""
    },
    /** Boş bırakılırsa `ui.datePicker.today` (i18n) */
    todayLabel: {
      type: String,
      default: ""
    },
    /** Boş bırakılırsa `ui.datePicker.yesterday` (i18n) */
    yesterdayLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "change"],
  data() {
    me += 1;
    const e = me, t = Q(this.modelValue) || /* @__PURE__ */ new Date();
    return {
      fallbackId: `ui-datepicker-${e}`,
      menuOpen: !1,
      viewYear: t.getFullYear(),
      viewMonth: t.getMonth()
    };
  },
  computed: {
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    selectedDate() {
      return Q(this.modelValue);
    },
    displayText() {
      return this.selectedDate ? E(this.selectedDate) : this.placeholder;
    },
    monthTitle() {
      return new Date(this.viewYear, this.viewMonth, 1).toLocaleString("en-US", {
        month: "long",
        year: "numeric"
      });
    },
    minYmd() {
      return this.min ? String(this.min).trim() : "";
    },
    resolvedTodayLabel() {
      return this.todayLabel ? this.todayLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.today") : "Today";
    },
    resolvedYesterdayLabel() {
      return this.yesterdayLabel ? this.yesterdayLabel : typeof this.$t == "function" ? this.$t("ui.datePicker.yesterday") : "Yesterday";
    },
    todayQuickDisabled() {
      return this.isQuickDateDisabled(/* @__PURE__ */ new Date());
    },
    yesterdayQuickDisabled() {
      const e = /* @__PURE__ */ new Date();
      return e.setDate(e.getDate() - 1), this.isQuickDateDisabled(e);
    },
    calendarCells() {
      const e = this.viewYear, t = this.viewMonth, i = new Date(e, t, 1), r = new Date(e, t, 1 - i.getDay()), a = [];
      for (let n = 0; n < 42; n += 1) {
        const s = new Date(r.getFullYear(), r.getMonth(), r.getDate() + n), d = s.getMonth() === t && s.getFullYear() === e, c = s.getDate(), u = E(s), p = `${s.getFullYear()}-${s.getMonth()}-${s.getDate()}`, I = !!(this.selectedDate && u === E(this.selectedDate)), S = E(/* @__PURE__ */ new Date()) === u, y = !!(this.minYmd && u < this.minYmd);
        a.push({
          key: p,
          d: c,
          out: !d,
          date: s,
          sel: I,
          today: S,
          inMonth: d,
          disabled: y
        });
      }
      return a;
    }
  },
  watch: {
    modelValue() {
      const e = Q(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = E(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const i = E(e.date);
      this.$emit("update:modelValue", i), this.$emit("change", i), t();
    },
    pickQuick(e, t) {
      const i = /* @__PURE__ */ new Date();
      if (e === "yesterday" && i.setDate(i.getDate() - 1), this.isQuickDateDisabled(i)) return;
      const r = E(i);
      this.viewYear = i.getFullYear(), this.viewMonth = i.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), t();
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, ri = { class: "ui-datepicker-panel w-full min-w-[17rem] p-2" }, si = { class: "mb-2 flex items-center justify-between gap-2" }, ai = { class: "text-sm font-medium tabular-nums text-foreground" }, li = { class: "ui-datepicker-grid" }, oi = { class: "ui-datepicker-quick" };
function di(e, t, i, r, a, n) {
  const s = v("ui-button"), d = v("ui-popover");
  return l(), o("div", {
    class: b([
      "ui-datepicker",
      i.fulled ? "ui-datepicker--fulled w-full" : "w-auto shrink-0",
      i.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    g(d, {
      open: a.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (c) => a.menuOpen = c),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: i.disabled
    }, {
      trigger: x(({ open: c, toggle: u }) => [
        g(s, {
          type: "button",
          id: n.resolvedId,
          variant: "solid",
          color: "input",
          fulled: i.fulled,
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: i.disabled,
          "aria-expanded": c ? "true" : "false",
          "aria-haspopup": !0,
          onClick: u
        }, {
          default: x(() => [
            h("span", {
              class: b([
                "min-w-0 flex-1 truncate",
                n.selectedDate ? "text-foreground" : "text-muted-foreground"
              ])
            }, k(n.displayText), 3)
          ]),
          _: 1
        }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
      ]),
      content: x(({ close: c }) => [
        h("div", ri, [
          h("div", si, [
            g(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[0] || (t[0] = R((u) => n.shiftMonth(-1), ["stop"]))
            }),
            h("span", ai, k(n.monthTitle), 1),
            g(s, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[1] || (t[1] = R((u) => n.shiftMonth(1), ["stop"]))
            })
          ]),
          t[3] || (t[3] = h("div", { class: "mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase text-muted-foreground" }, [
            h("span", null, "Su"),
            h("span", null, "Mo"),
            h("span", null, "Tu"),
            h("span", null, "We"),
            h("span", null, "Th"),
            h("span", null, "Fr"),
            h("span", null, "Sa")
          ], -1)),
          h("div", li, [
            (l(!0), o(F, null, j(n.calendarCells, (u) => (l(), _(s, {
              key: u.key,
              variant: n.dayVariant(u),
              color: n.dayColor(u),
              size: "sm",
              disabled: u.disabled,
              "aria-selected": u.sel ? "true" : "false",
              "aria-disabled": u.disabled ? "true" : void 0,
              "data-outside": u.inMonth ? void 0 : "true",
              "data-today": u.today ? "true" : void 0,
              onClick: (p) => n.pick(u, c)
            }, {
              default: x(() => [
                N(k(u.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          h("div", oi, [
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.todayQuickDisabled,
              onClick: (u) => n.pickQuick("today", c)
            }, {
              default: x(() => [
                N(k(n.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(s, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: n.yesterdayQuickDisabled,
              onClick: (u) => n.pickQuick("yesterday", c)
            }, {
              default: x(() => [
                N(k(n.resolvedYesterdayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"])
          ])
        ])
      ]),
      _: 1
    }, 8, ["open", "disabled"])
  ], 2);
}
const Or = /* @__PURE__ */ w(ni, [["render", di]]);
let ge = 0;
function Vr(e) {
  return ge += 1, `${e}-${ge}`;
}
function ee(e) {
  let t = 0;
  return () => (t += 1, `${e}-${t}`);
}
function Oe(e, t = ["class", "style"]) {
  const i = new Set(t), r = {};
  for (const [a, n] of Object.entries(e || {}))
    i.has(a) || (r[a] = n);
  return r;
}
const ui = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), ci = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function hi(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function be(e, t, { skipFooter: i = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (hi(r) && !(i && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function fi(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), i = [];
  for (const r of t)
    i.includes(r) || i.push(r);
  return i;
}
function ye(e, { skipFooter: t = !1 } = {}) {
  const i = be(e, ui, { skipFooter: t });
  if (i)
    return i.focus(), !0;
  const r = be(e, ci, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function mi(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && ye(t))
    return !0;
  for (const i of fi(e))
    if (ye(i, { skipFooter: i === e }))
      return !0;
  return !1;
}
const pi = "(max-width: 767px)";
function Ve() {
  return typeof window > "u" ? !1 : window.matchMedia(pi).matches;
}
const gi = ee("ui-dialog"), bi = ["solid", "dashed", "dotted", "double"], ve = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, yi = ["solid", "regular", "brands", "light", "duotone", "thin"], vi = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], ke = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, ki = {
  name: "Dialog",
  components: { Divider: Ee },
  inheritAttrs: !1,
  props: {
    /** `v-model:open` */
    open: {
      type: Boolean,
      default: !1
    },
    closeOnBackdrop: {
      type: Boolean,
      default: !0
    },
    closeOnEscape: {
      type: Boolean,
      default: !0
    },
    /** İç panel genişliği (`max-w-*`). */
    maxWidth: {
      type: String,
      default: "lg",
      validator: (e) => vi.includes(e)
    },
    /** Dış çerçeve (1px `border-border`) — `ui-card` ile aynı. */
    border: {
      type: Boolean,
      default: !0
    },
    /** `border-*` stili. */
    borderType: {
      type: String,
      default: "solid",
      validator: (e) => bi.includes(e)
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /** Varsayılan üst başlıkta gösterilecek ikon (`ui-icon` `name`). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => yi.includes(e)
    },
    /** Sağ üst kapat düğmesi. */
    showClose: {
      type: Boolean,
      default: !0
    },
    /** Kapat düğmesi `aria-label`; boşsa `ui.dialog.close` (i18n). */
    closeLabel: {
      type: String,
      default: ""
    },
    /** Gövde: yatay satır (buton / ikon sıraları). */
    row: {
      type: Boolean,
      default: !1
    },
    /** Gövde dolgusu — `none`: kenar padding sıfır (POS ödeme vb.). */
    bodyPadding: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "none"
    },
    /** Gövde düzeni — `flex`: dikey flex + taşma kontrolü (içerik paneli). */
    bodyLayout: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "flex"
    },
    /** Panel `max-height` — örn. `min(85vh, 36rem)`. */
    panelMaxHeight: {
      type: String,
      default: ""
    },
    /** Üst blok (toolbar + varsayılan başlık) ile gövde arasında ayırıcı. */
    headerDivider: {
      type: Boolean,
      default: !1
    },
    /**
     * Başlık yokken `role="dialog"` için erişilebilir ad.
     * Başlık varsa `aria-labelledby` önceliklidir.
     */
    ariaLabel: {
      type: String,
      default: ""
    },
    /** Açılışta gövdedeki ilk form alanına odaklan (yoksa panele düşer). */
    initialFocus: {
      type: Boolean,
      default: !0
    },
    /**
     * Yığılma katmanı — `confirm`: açık modalların üstünde (programatik onay).
     * @type {'default' | 'confirm'}
     */
    stackLayer: {
      type: String,
      default: "default",
      validator: (e) => e === "default" || e === "confirm"
    }
  },
  emits: ["update:open", "after-leave"],
  data() {
    const e = gi();
    return {
      titleId: `ui-dialog-title-${e}`,
      descriptionId: `ui-dialog-desc-${e}`,
      focusFallbackTimer: null,
      sheetDragCleanup: null
    };
  },
  watch: {
    open: {
      handler(e) {
        e ? this.scheduleInitialFocus() : (this.clearFocusFallback(), this.teardownSheetDrag());
      },
      flush: "post"
    }
  },
  beforeUnmount() {
    this.clearFocusFallback(), this.teardownSheetDrag();
  },
  computed: {
    hasDefaultHeader() {
      return !!(this.icon || this.title != null && this.title !== "" || this.description != null && this.description !== "" || this.$slots.actions || this.$slots.append || this.showClose);
    },
    hasHeaderBlock() {
      return !!this.$slots.header || this.hasDefaultHeader;
    },
    showHeaderDivider() {
      return this.headerDivider && !!this.$slots.default && (this.hasHeaderBlock || !!this.$slots.toolbar);
    },
    borderStyleClass() {
      return ve[this.borderType] || ve.solid;
    },
    maxWidthClass() {
      return ke[this.maxWidth] || ke.lg;
    },
    panelClasses() {
      const e = this.border ? T("border", this.borderStyleClass) : T("border-0", "border-transparent");
      return T(
        "ui-surface ui-card ui-dialog-panel relative z-[1] w-full",
        this.maxWidthClass,
        e,
        this.bodyLayout === "flex" ? "ui-dialog-panel--body-flex" : "",
        this.$attrs.class
      );
    },
    panelStyle() {
      if (this.panelMaxHeight)
        return { maxHeight: this.panelMaxHeight };
    },
    passthroughAttrs() {
      return Oe(this.$attrs, ["class"]);
    },
    ariaLabelledby() {
      if (this.title != null && this.title !== "")
        return this.titleId;
    },
    ariaDescribedby() {
      if (this.description != null && this.description !== "")
        return this.descriptionId;
    },
    ariaLabelAttr() {
      if (!this.ariaLabelledby && this.ariaLabel != null && this.ariaLabel !== "")
        return this.ariaLabel;
    },
    resolvedCloseLabel() {
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : Pe(this, "ui.dialog.close", "Close");
    },
    rootLayerClasses() {
      return T(
        "ui-dialog-root fixed inset-0 flex outline-none",
        this.stackLayer === "confirm" && "ui-dialog-root--confirm"
      );
    }
  },
  methods: {
    onOverlayAfterEnter() {
      this.scheduleInitialFocus();
    },
    clearFocusFallback() {
      this.focusFallbackTimer != null && (clearTimeout(this.focusFallbackTimer), this.focusFallbackTimer = null);
    },
    scheduleInitialFocus() {
      !this.open || !this.initialFocus || (this.clearFocusFallback(), this.$nextTick(() => {
        const e = this.$refs.panelRef;
        if (!e) {
          this.runInitialFocus();
          return;
        }
        const t = (i) => {
          i.target === e && (e.removeEventListener("transitionend", t), this.clearFocusFallback(), this.runInitialFocus());
        };
        e.addEventListener("transitionend", t), this.focusFallbackTimer = setTimeout(() => {
          e.removeEventListener("transitionend", t), this.focusFallbackTimer = null, this.runInitialFocus();
        }, 480);
      }));
    },
    runInitialFocus() {
      !this.open || !this.initialFocus || this.$nextTick(() => {
        this.focusInitialField();
      });
    },
    onOverlayAfterLeave() {
      this.$emit("after-leave");
    },
    focusInitialField() {
      var t;
      const e = this.$refs.panelRef;
      e && mi(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
    },
    close() {
      this.open && this.$emit("update:open", !1);
    },
    onBackdrop() {
      this.closeOnBackdrop && this.close();
    },
    onLayerKeydown(e) {
      this.closeOnEscape && e.key === "Escape" && (e.preventDefault(), this.close());
    },
    teardownSheetDrag() {
      this.sheetDragCleanup && (this.sheetDragCleanup(), this.sheetDragCleanup = null);
      const e = this.$refs.panelRef;
      e && (e.style.transform = "", e.style.transition = "");
    },
    onSheetPointerDown(e) {
      if (!Ve() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const i = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const a = (d) => {
        const c = Math.max(0, d.clientY - i);
        t.style.transform = `translateY(${c}px)`;
      }, n = (d) => {
        const c = Math.max(0, d.clientY - i);
        t.style.transition = r, t.style.transform = "", c >= 72 && this.close(), this.teardownSheetDrag();
      }, s = () => {
        t.style.transition = r, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", a), window.addEventListener("pointerup", n), window.addEventListener("pointercancel", s), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", a), window.removeEventListener("pointerup", n), window.removeEventListener("pointercancel", s);
      };
    }
  }
}, Si = ["aria-labelledby", "aria-describedby", "aria-label"], wi = {
  key: 0,
  class: "ui-card-header shrink-0"
}, xi = {
  key: 0,
  class: "ui-dialog-header__icon"
}, _i = ["id"], Ci = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Ti = ["id"], Ii = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, zi = {
  key: 4,
  class: "ui-card-footer"
};
function Ai(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("ui-button"), c = v("Divider");
  return l(), _(J, { to: "body" }, [
    g(Y, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: n.onOverlayAfterEnter,
      onAfterLeave: n.onOverlayAfterLeave
    }, {
      default: x(() => [
        i.open ? (l(), o("div", {
          key: 0,
          ref: "layerRef",
          class: b(n.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...u) => n.onLayerKeydown && n.onLayerKeydown(...u))
        }, [
          h("div", {
            class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...u) => n.onBackdrop && n.onBackdrop(...u))
          }),
          h("div", z({
            ref: "panelRef",
            class: n.panelClasses,
            style: n.panelStyle,
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            "aria-labelledby": n.ariaLabelledby,
            "aria-describedby": n.ariaDescribedby,
            "aria-label": n.ariaLabelAttr
          }, n.passthroughAttrs, {
            onClick: t[2] || (t[2] = R(() => {
            }, ["stop"]))
          }), [
            h("div", {
              class: "ui-dialog-sheet-grab shrink-0",
              onPointerdown: t[1] || (t[1] = (...u) => n.onSheetPointerDown && n.onSheetPointerDown(...u))
            }, [...t[4] || (t[4] = [
              h("div", {
                class: "ui-dialog-sheet-handle",
                "aria-hidden": "true"
              }, null, -1)
            ])], 32),
            n.hasHeaderBlock ? (l(), o("div", wi, [
              m(e.$slots, "header", {}, () => [
                n.hasDefaultHeader ? (l(), o("div", {
                  key: 0,
                  class: b(["ui-dialog-header", { "ui-dialog-header--no-icon": !i.icon }])
                }, [
                  i.icon ? (l(), o("span", xi, [
                    g(s, {
                      name: i.icon,
                      type: i.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  i.title ? (l(), o("h3", {
                    key: 1,
                    id: a.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, k(i.title), 9, _i)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (l(), o("div", Ci, [
                    m(e.$slots, "append"),
                    m(e.$slots, "actions")
                  ])) : f("", !0),
                  i.showClose ? (l(), _(d, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": n.resolvedCloseLabel,
                    onClick: n.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  i.description ? (l(), o("p", {
                    key: 4,
                    id: a.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, k(i.description), 9, Ti)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (l(), o("div", Ii, [
              m(e.$slots, "toolbar")
            ])) : f("", !0),
            n.showHeaderDivider ? (l(), _(c, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (l(), o("div", {
              key: 3,
              class: b(["ui-card-body ui-text-default", {
                "ui-card-body--row": i.row,
                "ui-card-body--flush": i.bodyPadding === "none",
                "ui-card-body--flex": i.bodyLayout === "flex"
              }])
            }, [
              m(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (l(), o("div", zi, [
              m(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, Si)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const Nr = /* @__PURE__ */ w(ki, [["render", Ai]]), Li = ["solid", "regular", "brands", "light", "duotone", "thin"], Di = ["sm", "md", "lg"], Ri = {
  sm: "sm",
  md: "md",
  lg: "lg"
}, $i = {
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
      validator: (e) => Li.includes(e)
    },
    /** `sm` | `md` | `lg` — padding, ikon kutusu, başlık ve açıklama ölçeği */
    size: {
      type: String,
      default: "md",
      validator: (e) => Di.includes(e)
    }
  },
  computed: {
    iconSize() {
      return Ri[this.size] ?? "md";
    },
    resolvedIcon() {
      return this.icon == null || this.icon === "" ? null : this.icon;
    },
    rootClass() {
      return T("ui-empty", `ui-empty--${this.size}`, this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Fi = {
  key: 0,
  class: "ui-empty-icon"
}, Bi = {
  key: 1,
  class: "ui-empty-title"
}, Pi = {
  key: 2,
  class: "ui-empty-description ui-text-default"
}, Ei = {
  key: 3,
  class: "ui-empty-actions"
};
function Oi(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return l(), o("div", z({ class: n.rootClass }, n.passthroughAttrs), [
    n.resolvedIcon ? (l(), o("div", Fi, [
      g(s, {
        name: n.resolvedIcon,
        type: i.iconType,
        size: n.iconSize
      }, null, 8, ["name", "type", "size"])
    ])) : f("", !0),
    i.title ? (l(), o("h2", Bi, k(i.title), 1)) : f("", !0),
    i.description ? (l(), o("p", Pi, k(i.description), 1)) : f("", !0),
    e.$slots.default ? (l(), o("div", Ei, [
      m(e.$slots, "default")
    ])) : f("", !0)
  ], 16);
}
const Mr = /* @__PURE__ */ w($i, [["render", Oi]]);
let Se = 0;
const Vi = ["vertical", "horizontal"], Ni = ["default", "card"], Mi = {
  name: "FormRow",
  props: {
    label: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    /**
     * `vertical`: etiket ve açıklama üstte, kontrol altta (tam genişlik).
     * `horizontal`: metin solda, kontrol sağda (`justify-between`).
     */
    direction: {
      type: String,
      default: "vertical",
      validator: (e) => Vi.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Ni.includes(e)
    },
    /** Dışarıdan sabit id vermek için (ör. test); verilmezse otomatik üretilir. */
    id: {
      type: String,
      default: void 0
    },
    /** Dialog oluşturma formlarında ana alan — `lg` boyut ve odak hedefi */
    primary: {
      type: Boolean,
      default: !1
    }
  },
  provide() {
    return {
      uiFormRowPrimary: () => this.primary
    };
  },
  data() {
    Se += 1;
    const e = Se;
    return {
      fallbackId: `ui-form-control-${e}`,
      fallbackDescId: `ui-form-desc-${e}`
    };
  },
  computed: {
    controlId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    descriptionId() {
      return this.description ? this.fallbackDescId : void 0;
    },
    hasTextBlock() {
      return !!(this.label || this.description || this.$slots.action);
    },
    rootLayoutClass() {
      return this.variant === "card" ? this.direction === "vertical" ? "ui-form-row--card ui-form-row--card-vertical" : "ui-form-row--card ui-form-row--card-horizontal" : this.direction === "horizontal" ? "ui-form-row--horizontal" : "ui-form-row--vertical";
    },
    labelLineClass() {
      const e = "ui-form-row-label-line";
      return !this.label && this.$slots.action ? `${e} ui-form-row-label-line--action-only` : e;
    }
  }
}, Hi = ["data-primary-field"], Wi = {
  key: 0,
  class: "ui-form-row-text"
}, ji = ["for"], Yi = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Ki = ["id"], qi = { class: "ui-form-row-control" };
function Gi(e, t, i, r, a, n) {
  return l(), o("div", {
    class: b(["ui-form-row", n.rootLayoutClass]),
    "data-primary-field": i.primary ? "" : void 0
  }, [
    n.hasTextBlock ? (l(), o("div", Wi, [
      i.label || e.$slots.action ? (l(), o("div", {
        key: 0,
        class: b(n.labelLineClass)
      }, [
        i.label ? (l(), o("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: n.controlId
        }, k(i.label), 9, ji)) : f("", !0),
        e.$slots.action ? (l(), o("div", Yi, [
          m(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      i.description ? (l(), o("p", {
        key: 1,
        id: n.descriptionId,
        class: "ui-text-default"
      }, k(i.description), 9, Ki)) : f("", !0)
    ])) : f("", !0),
    h("div", qi, [
      m(e.$slots, "default", {
        controlId: n.controlId,
        descriptionId: n.descriptionId
      })
    ])
  ], 10, Hi);
}
const Hr = /* @__PURE__ */ w(Mi, [["render", Gi]]), Ui = ["solid", "regular", "brands", "light", "duotone", "thin"], we = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Qi = ["xs", "sm", "md", "lg"], Zi = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, Xi = {
  name: "Icon",
  inheritAttrs: !1,
  props: {
    /** Font Awesome icon name without the `fa-` prefix (e.g. `house`). */
    name: {
      type: String,
      required: !0
    },
    /** Font Awesome ağırlığı (`fa-light`, `fa-solid`, …). */
    type: {
      type: String,
      default: "light",
      validator: (e) => Ui.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Qi.includes(e)
    },
    /**
     * true: `aria-label` i18n `ui.icon.accessible` ile, `role="img"`.
     * false: dekoratif — `aria-hidden="true"`.
     */
    showAccessibleName: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    faWeightClass() {
      return we[this.type] || we.light;
    },
    iconClass() {
      return T(
        "ui-icon fa not-italic inline-block shrink-0",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Zi[this.size],
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    },
    accessibleLabel() {
      return this.showAccessibleName ? typeof this.$t == "function" ? this.$t("ui.icon.accessible", { name: this.name }) : this.name : null;
    },
    rootAttrs() {
      const e = { ...this.passthroughAttrs };
      return this.showAccessibleName ? (e.role = "img", (e["aria-label"] == null || e["aria-label"] === "") && (e["aria-label"] = this.accessibleLabel), e["aria-hidden"] = !1) : e["aria-hidden"] = !0, e;
    }
  }
};
function Ji(e, t, i, r, a, n) {
  return l(), o("i", z({ class: n.iconClass }, n.rootAttrs), null, 16);
}
const Wr = /* @__PURE__ */ w(Xi, [["render", Ji]]), en = ee("ui-input"), tn = ["sm", "md", "lg"], nn = {
  name: "Input",
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    /** `sm` 32px, `md` 36px (varsayılan), `lg` 44px — select / segment ile hizalı */
    size: {
      type: String,
      default: "md",
      validator: (e) => tn.includes(e)
    },
    /** `v-model` */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /** Tek satır için native `type`. */
    type: {
      type: String,
      default: "text"
    },
    /** `<textarea>` kullan. */
    multiline: {
      type: Boolean,
      default: !1
    },
    rows: {
      type: Number,
      default: 3
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
      default: void 0
    },
    maxlength: {
      type: [Number, String],
      default: void 0
    }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  data() {
    return { fallbackId: en() };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      return T(
        "ui-input",
        this.multiline && "ui-input--multiline",
        this.resolvedSize !== "md" && `ui-input--${this.resolvedSize}`,
        this.isDisabled && "pointer-events-none opacity-50"
      );
    },
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    passthroughAttrs() {
      return Oe(this.$attrs, [
        "class",
        "style",
        "type",
        "value",
        "id",
        "rows",
        "disabled",
        "readonly",
        "placeholder",
        "name",
        "autocomplete",
        "maxlength"
      ]);
    }
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    }
  }
}, rn = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, sn = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, an = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], ln = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], on = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, dn = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function un(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return l(), o("div", {
    class: b([n.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (l(), o("div", rn, [
      m(e.$slots, "prepend")
    ])) : f("", !0),
    i.prefixIcon ? (l(), o("span", sn, [
      g(s, {
        name: i.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    i.multiline ? (l(), o("textarea", z({
      key: 2,
      id: n.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--textarea",
      value: i.modelValue,
      rows: i.rows,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength
    }, n.passthroughAttrs, {
      onInput: t[0] || (t[0] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[1] || (t[1] = (d) => e.$emit("change", d)),
      onFocus: t[2] || (t[2] = (d) => e.$emit("focus", d)),
      onBlur: t[3] || (t[3] = (d) => e.$emit("blur", d))
    }), null, 16, an)) : (l(), o("input", z({
      key: 3,
      id: n.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--single",
      type: i.type,
      value: i.modelValue,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: i.placeholder,
      name: i.name,
      autocomplete: i.autocomplete,
      maxlength: i.maxlength
    }, n.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...d) => n.onInput && n.onInput(...d)),
      onChange: t[5] || (t[5] = (d) => e.$emit("change", d)),
      onFocus: t[6] || (t[6] = (d) => e.$emit("focus", d)),
      onBlur: t[7] || (t[7] = (d) => e.$emit("blur", d))
    }), null, 16, ln)),
    i.suffixIcon ? (l(), o("span", on, [
      g(s, {
        name: i.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (l(), o("div", dn, [
      m(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const jr = /* @__PURE__ */ w(nn, [["render", un]]);
let xe = 0;
const cn = ["sm", "md", "lg"], _e = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], hn = {
  name: "Phone",
  inheritAttrs: !1,
  props: {
    country: {
      type: String,
      default: "+90"
    },
    number: {
      type: String,
      default: ""
    },
    countries: {
      type: Array,
      default: () => _e
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => cn.includes(e)
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
    numberName: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    autocomplete: {
      type: String,
      default: "tel-national"
    },
    numberMaxlength: {
      type: [Number, String],
      default: 15
    },
    countryAriaLabel: {
      type: String,
      default: ""
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    }
  },
  emits: ["update:country", "update:number", "focus", "blur"],
  data() {
    return xe += 1, { fallbackId: `ui-phone-number-${xe}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : _e;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    rootClass() {
      return T(
        "ui-phone",
        this.isSingleCountry && "ui-phone--single-country",
        this.size !== "md" && `ui-phone--${this.size}`
      );
    },
    innerCountry: {
      get() {
        return this.country;
      },
      set(e) {
        this.$emit("update:country", e);
      }
    },
    innerNumber: {
      get() {
        return this.number;
      },
      set(e) {
        this.$emit("update:number", e);
      }
    },
    resolvedNumberId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder != null && this.placeholder !== "" ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.phone.placeholder") : "";
    },
    resolvedCountryAria() {
      return this.countryAriaLabel ? this.countryAriaLabel : typeof this.$t == "function" ? this.$t("ui.phone.countryAria") : "Country code";
    },
    numberPassthrough() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    }
  }
}, fn = { class: "ui-phone-prepend" }, mn = {
  key: 0,
  class: "ui-phone-country-static"
};
function pn(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("ui-select"), c = v("ui-input");
  return l(), o("div", {
    class: b(n.rootClass)
  }, [
    g(c, z({
      id: n.resolvedNumberId,
      modelValue: n.innerNumber,
      "onUpdate:modelValue": t[1] || (t[1] = (u) => n.innerNumber = u),
      type: "tel",
      inputmode: "tel",
      class: "w-full",
      size: i.size,
      disabled: i.disabled,
      readonly: i.readonly,
      placeholder: n.resolvedPlaceholder,
      name: i.numberName,
      autocomplete: i.autocomplete,
      maxlength: i.numberMaxlength,
      "aria-describedby": i.ariaDescribedby
    }, n.numberPassthrough, {
      onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
      onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
    }), {
      prepend: x(() => [
        h("div", fn, [
          g(s, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          n.isSingleCountry ? (l(), o("span", mn, k(n.innerCountry), 1)) : (l(), _(d, {
            key: 1,
            modelValue: n.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (u) => n.innerCountry = u),
            variant: "inline",
            size: i.size,
            options: n.countryOptions,
            disabled: i.disabled,
            "aria-label": n.resolvedCountryAria
          }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
        ])
      ]),
      _: 1
    }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"])
  ], 2);
}
const Yr = /* @__PURE__ */ w(hn, [["render", pn]]), gn = [
  "bottom-start",
  "bottom-end",
  "bottom",
  "right-start",
  "right-end",
  "left-start",
  "left-end",
  "top-start",
  "top-end"
], Ce = 10, Z = 410, bn = [
  ".ui-select-listbox",
  ".ui-datepicker-panel",
  ".ui-daterangepicker-panel",
  ".ui-timepicker-panel"
], yn = {
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
      validator: (e) => gn.includes(e)
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
    },
    /** true: tetikleyici satır genişliğini doldurur (sidebar footer vb.) */
    block: {
      type: Boolean,
      default: !1
    },
    /**
     * Mobil görünümde paneli ekran ortasında aç (varsayılan).
     * false: tetikleyiciye göre konumlanır (Dropdown menüler).
     */
    mobileCentered: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:open"],
  data() {
    return {
      layerStyle: {},
      layerZIndex: Z,
      rafId: 0,
      mobileCenteredActive: !1
    };
  },
  computed: {
    showMobileBackdrop() {
      return this.open && this.mobileCenteredActive;
    },
    backdropStyle() {
      return { zIndex: String(this.layerZIndex) };
    },
    rootShellClass() {
      return this.block ? "ui-popover ui-popover--block relative w-full min-w-0 max-w-full" : "ui-popover relative shrink-0";
    },
    triggerShellClass() {
      return this.block ? "ui-popover-trigger ui-popover-trigger--block flex w-full min-w-0 max-w-full" : "ui-popover-trigger inline-flex shrink-0";
    },
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
      if (typeof document > "u") return Z;
      let e = Z;
      for (const t of document.querySelectorAll(".ui-dialog-root")) {
        const i = Number.parseInt(getComputedStyle(t).zIndex, 10);
        Number.isFinite(i) && (e = Math.max(e, i + 10));
      }
      return e;
    },
    withLayerZIndex(e) {
      const t = this.resolveLayerZIndex();
      return this.layerZIndex = t, {
        ...e,
        zIndex: String(t)
      };
    },
    updatePosition() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef;
      if (!e || !t) return;
      const i = window.innerWidth, r = window.innerHeight, a = Ce, n = this.resolvedWidth, s = e.getBoundingClientRect(), d = n != null ? t.offsetWidth || 200 : t.offsetWidth || (this.matchTriggerWidth ? s.width : 200), c = t.offsetHeight || 120;
      if (Ve() && this.mobileCentered) {
        this.mobileCenteredActive = !0;
        const y = Math.max(a, Math.round((i - d) / 2)), L = {
          top: `${Math.max(a, Math.round((r - c) / 2))}px`,
          left: `${y}px`
        };
        n != null ? (L.width = n, L.minWidth = n) : (L.width = `${Math.min(d, i - a * 2)}px`, L.maxWidth = `calc(100vw - ${a * 2}px)`), this.layerStyle = this.withLayerZIndex(L);
        return;
      }
      this.mobileCenteredActive = !1;
      let u, p;
      switch (this.placement) {
        case "right-start":
          u = s.top, p = s.right + a;
          break;
        case "right-end":
          u = s.bottom - c, p = s.right + a;
          break;
        case "left-start":
          u = s.top, p = s.left - a - d;
          break;
        case "left-end":
          u = s.bottom - c, p = s.left - a - d;
          break;
        case "top-start":
          u = s.top - a - c, p = s.left;
          break;
        case "top-end":
          u = s.top - a - c, p = s.right - d;
          break;
        case "bottom-end":
          u = s.bottom + a, p = s.right - d;
          break;
        case "bottom":
          u = s.bottom + a, p = s.left + (s.width - d) / 2;
          break;
        case "bottom-start":
        default:
          u = s.bottom + a, p = s.left;
          break;
      }
      if (this.placement.startsWith("right") && p + d > i - a && (p = s.left - a - d), this.placement.startsWith("left") && p < a && (p = s.right + a), this.placement.startsWith("top") && u < a && (u = s.bottom + a), p + d > i - a && (p = Math.max(a, i - a - d)), p < a && (p = a), this.placement.startsWith("bottom") && u + c > r - a) {
        const y = s.top - a - c;
        y >= a && (u = y);
      }
      (this.placement.startsWith("right") || this.placement.startsWith("left")) && (u + c > r - a && (u = Math.max(a, r - a - c)), u < a && (u = a));
      const I = this.matchTriggerWidth && n == null ? `${Math.ceil(s.width)}px` : void 0, S = {
        top: `${Math.round(u)}px`,
        left: `${Math.round(p)}px`,
        minWidth: I
      };
      n != null && (S.width = n, S.minWidth = n), this.layerStyle = this.withLayerZIndex(S), this.alignSelectedOptionToTrigger && this.$nextTick(() => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.nudgeAlignSelectedToTrigger());
        });
      });
    },
    nudgeAlignSelectedToTrigger() {
      const e = this.$refs.triggerRef, t = this.$refs.panelRef, i = this.$refs.layerRef;
      if (!e || !t || !i) return;
      const r = t.querySelector('[role="listbox"]');
      if (r && r.scrollHeight > r.clientHeight + 2)
        return;
      const a = t.querySelector('[role="option"][aria-selected="true"]');
      if (!a) return;
      const n = e.querySelector("[data-popover-align]") || e, s = a.querySelector("[data-popover-align]") || a, d = n.getBoundingClientRect(), c = s.getBoundingClientRect(), u = c.top - d.top, p = c.left - d.left, I = i.getBoundingClientRect(), S = this.layerStyle.top, y = this.layerStyle.left;
      let C = typeof S == "string" && S !== "" ? parseFloat(S) : I.top, L = typeof y == "string" && y !== "" ? parseFloat(y) : I.left;
      Number.isNaN(C) && (C = I.top), Number.isNaN(L) && (L = I.left);
      let B = C - u, P = L - p;
      const A = Ce, W = window.innerHeight, O = window.innerWidth, M = I.height, H = I.width;
      B + M > W - A && (B = Math.max(A, W - A - M)), B < A && (B = A), P + H > O - A && (P = Math.max(A, O - A - H)), P < A && (P = A), this.layerStyle = this.withLayerZIndex({
        ...this.layerStyle,
        top: `${Math.round(B)}px`,
        left: `${Math.round(P)}px`
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
      const t = this.$refs.panelRef, i = e == null ? void 0 : e.target;
      t && i && i !== document && i !== document.documentElement && t.contains(i) || this.schedulePosition();
    },
    onDocPointerDown(e) {
      if (!this.open || !this.closeOnOutsideClick) return;
      const t = e.target, i = this.$refs.triggerRef, r = this.$refs.panelRef;
      i != null && i.contains(t) || r != null && r.contains(t) || this.shouldIgnoreOutsideClick(t) || this.close();
    },
    isOpenedInsidePopoverLayer(e) {
      const t = this.$refs.rootRef;
      return !!(e && t && e.contains(t));
    },
    shouldIgnoreOutsideClick(e) {
      var a;
      if (typeof (e == null ? void 0 : e.closest) != "function") return !1;
      const t = this.$refs.layerRef, i = e.closest("[data-ui-popover-layer]");
      if (i && i !== t)
        return this.isOpenedInsidePopoverLayer(i) ? this.keepOpenOnAncestorPopoverClick : !0;
      for (const n of bn)
        if (e.closest(n)) return !0;
      const r = (a = this.outsideClickIgnoreSelector) == null ? void 0 : a.trim();
      return !!(r && e.closest(r));
    },
    onDocKeydown(e) {
      !this.open || !this.closeOnEscape || e.key === "Escape" && (e.preventDefault(), this.close());
    },
    onPanelKeydown(e) {
      e.key === "Escape" && this.close();
    }
  }
}, vn = ["data-popover-align-active", "data-ui-popover-mobile-centered"], kn = {
  key: 0,
  class: "ui-popover-header"
}, Sn = { class: "ui-popover-body min-h-0 min-w-0" }, wn = {
  key: 1,
  class: "ui-popover-footer"
};
function xn(e, t, i, r, a, n) {
  return l(), o("div", {
    ref: "rootRef",
    class: b([n.rootShellClass, e.$attrs.class])
  }, [
    h("div", {
      ref: "triggerRef",
      class: b(n.triggerShellClass)
    }, [
      m(e.$slots, "trigger", {
        open: i.open,
        toggle: n.toggle,
        close: n.close
      })
    ], 2),
    (l(), _(J, { to: "body" }, [
      g(Y, { name: "ui-overlay-popover-backdrop" }, {
        default: x(() => [
          n.showMobileBackdrop ? (l(), o("div", {
            key: 0,
            class: "ui-popover-backdrop fixed inset-0 bg-black/50",
            style: K(n.backdropStyle),
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...s) => n.close && n.close(...s))
          }, null, 4)) : f("", !0)
        ]),
        _: 1
      }),
      g(Y, { name: "ui-overlay-popover" }, {
        default: x(() => [
          q(h("div", {
            ref: "layerRef",
            class: "ui-popover-layer fixed",
            style: K(a.layerStyle),
            "data-popover-align-active": i.alignSelectedOptionToTrigger ? "" : void 0,
            "data-ui-popover-mobile-centered": a.mobileCenteredActive ? "" : void 0,
            "data-ui-popover-layer": ""
          }, [
            h("div", {
              ref: "panelRef",
              class: "ui-surface ui-popover-panel w-full min-w-0 outline-none",
              role: "dialog",
              tabindex: "-1",
              onKeydown: t[1] || (t[1] = (...s) => n.onPanelKeydown && n.onPanelKeydown(...s))
            }, [
              e.$slots.header ? (l(), o("div", kn, [
                m(e.$slots, "header", { close: n.close })
              ])) : f("", !0),
              h("div", Sn, [
                m(e.$slots, "content", { close: n.close })
              ]),
              e.$slots.footer ? (l(), o("div", wn, [
                m(e.$slots, "footer", { close: n.close })
              ])) : f("", !0)
            ], 544)
          ], 12, vn), [
            [$e, i.open]
          ])
        ]),
        _: 3
      })
    ]))
  ], 2);
}
const Kr = /* @__PURE__ */ w(yn, [["render", xn]]), _n = {
  name: "Radio",
  inject: {
    uiRadioGroup: {
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
    description: {
      type: String,
      default: ""
    },
    /** `list` varyantında seçili satır vurgusu (hover değil, yalnızca seçiliyken). */
    highlight: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    groupVariant() {
      var e;
      return ((e = this.uiRadioGroup) == null ? void 0 : e.normalizedVariant) || "list";
    },
    isChecked() {
      return this.uiRadioGroup ? this.uiRadioGroup.modelValue === this.value : !1;
    },
    stringValue() {
      return String(this.value);
    }
  },
  mounted() {
    !this.uiRadioGroup && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.uiRadioGroup && this.uiRadioGroup.$emit("update:modelValue", this.value);
    }
  }
}, Cn = ["name", "value", "checked"], Tn = { class: "ui-radio-body" }, In = { class: "ui-radio-label" }, zn = {
  key: 0,
  class: "ui-radio-description"
};
function An(e, t, i, r, a, n) {
  var s;
  return l(), o("label", {
    class: b([
      "ui-radio",
      `ui-radio--${n.groupVariant}`,
      {
        "ui-radio--checked": n.isChecked,
        "ui-radio--highlight": i.highlight && n.isChecked
      }
    ]),
    onKeydown: [
      t[1] || (t[1] = G(R((...d) => n.select && n.select(...d), ["prevent"]), ["enter"])),
      t[2] || (t[2] = G(R((...d) => n.select && n.select(...d), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (s = n.uiRadioGroup) == null ? void 0 : s.groupName,
      value: n.stringValue,
      checked: n.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...d) => n.select && n.select(...d))
    }, null, 40, Cn),
    t[3] || (t[3] = h("span", {
      class: "ui-radio-indicator",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", Tn, [
      h("span", In, k(i.label), 1),
      i.description ? (l(), o("span", zn, k(i.description), 1)) : f("", !0)
    ])
  ], 34);
}
const qr = /* @__PURE__ */ w(_n, [["render", An]]);
let Te = 0;
const Ln = ["list", "button", "List", "Button"], Dn = ["vertical", "horizontal"], Rn = {
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    },
    /** `list` — satır listesi; `button` — yan yana kart seçenekleri */
    variant: {
      type: String,
      default: "list",
      validator: (e) => Ln.includes(e)
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => Dn.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Te += 1, { groupName: `ui-radio-group-${Te}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    rootClass() {
      return T(
        "ui-radio-group",
        `ui-radio-group--${this.normalizedVariant}`,
        this.normalizedVariant === "list" && this.orientation === "horizontal" ? "ui-radio-group--horizontal" : ""
      );
    }
  },
  provide() {
    return {
      uiRadioGroup: this
    };
  }
}, $n = ["aria-label"];
function Fn(e, t, i, r, a, n) {
  return l(), o("div", {
    class: b(n.rootClass),
    role: "radiogroup",
    "aria-label": i.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, $n);
}
const Gr = /* @__PURE__ */ w(Rn, [["render", Fn]]), Bn = {
  name: "Tag",
  components: { Badge: yt, Tooltip: Be },
  props: {
    variant: {
      type: String,
      default: "secondary",
      validator: (e) => ["solid", "secondary", "outline"].includes(e)
    },
    size: {
      type: String,
      default: "sm",
      validator: (e) => ["sm", "md", "lg"].includes(e)
    },
    removable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["remove"],
  computed: {
    removeLabel() {
      return typeof this.$t == "function" ? this.$t("ui.tag.remove") : "Kaldır";
    }
  }
}, Pn = ["aria-label"];
function En(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("Tooltip"), c = v("Badge");
  return l(), _(c, {
    variant: i.variant,
    size: i.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, Fe({
    default: x(() => [
      m(e.$slots, "default")
    ]),
    _: 2
  }, [
    i.removable ? {
      name: "append",
      fn: x(() => [
        g(d, {
          label: n.removeLabel,
          placement: "bottom"
        }, {
          default: x(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": n.removeLabel,
              onClick: t[0] || (t[0] = R((u) => e.$emit("remove"), ["stop"]))
            }, [
              g(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Pn)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const On = /* @__PURE__ */ w(Bn, [["render", En]]);
let Ie = 0;
const Vn = ["field", "inline"], Nn = ["sm", "md", "lg"], Mn = {
  name: "Select",
  components: { Tag: On },
  inheritAttrs: !1,
  inject: {
    uiFormRowPrimary: {
      default: !1
    }
  },
  props: {
    variant: {
      type: String,
      default: "field",
      validator: (e) => Vn.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Nn.includes(e)
    },
    modelValue: {
      type: [String, Number, Boolean, Array],
      default: void 0
    },
    /** Çoklu seçim — `modelValue` dizi; tetikleyicide etiketler + arama, listede onay işareti */
    multiple: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      default: () => []
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: void 0
    },
    clearable: {
      type: Boolean,
      default: !1
    },
    filterable: {
      type: Boolean,
      default: !1
    },
    filterPlaceholder: {
      type: String,
      default: ""
    },
    /** Tetikleyici sol ikon (`ui-icon` `name`) */
    prefixIcon: {
      type: String,
      default: null
    },
    name: {
      type: String,
      default: void 0
    },
    id: {
      type: String,
      default: void 0
    },
    ariaDescribedby: {
      type: String,
      default: void 0
    },
    fulled: {
      type: Boolean,
      default: !0
    },
    matchTriggerWidth: {
      type: Boolean,
      default: !0
    },
    scrollListThreshold: {
      type: Number,
      default: 6
    },
    /** Sunucu tarafı arama — liste yerel filtrelenmez; `filterChange` yayınlanır */
    remoteFilter: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "change", "dropdownOpenChange", "filterChange"],
  data() {
    Ie += 1;
    const e = Ie;
    return {
      fallbackId: `ui-select-${e}`,
      listboxId: `ui-select-listbox-${e}`,
      menuOpen: !1,
      filterQuery: "",
      filterDebounceTimer: null
    };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      const e = this.variant === "inline";
      return T(
        "ui-select",
        e && "ui-select--inline",
        !e && this.fulled && "ui-select--fulled w-full",
        !e && !this.fulled && "w-auto shrink-0",
        this.resolvedSize !== "md" && `ui-select--${this.resolvedSize}`,
        this.multiple && "ui-select--multiple",
        this.isFilterable && "ui-select--filterable",
        this.isDisabled && "pointer-events-none opacity-50",
        this.$attrs.class
      );
    },
    isFilterable() {
      return this.filterable || this.multiple;
    },
    showPopoverHeader() {
      return this.isFilterable && !this.multiple;
    },
    listboxRole() {
      return this.multiple, "listbox";
    },
    resolvedMatchTriggerWidth() {
      return this.variant === "inline" ? !1 : this.matchTriggerWidth;
    },
    isDisabled() {
      return this.disabled;
    },
    resolvedId() {
      return this.id != null && this.id !== "" ? this.id : this.fallbackId;
    },
    resolvedPlaceholder() {
      return this.placeholder !== void 0 && this.placeholder !== null ? this.placeholder : typeof this.$t == "function" ? this.$t("ui.select.placeholder") : "Seçiniz";
    },
    normalizedOptions() {
      const e = this.resolvedPlaceholder;
      return (this.options || []).map((t) => t != null && typeof t == "object" && "value" in t && "label" in t ? { value: t.value, label: t.label } : { value: t, label: String(t) }).filter((t) => {
        if (t.value === "" || t.value == null) return !1;
        const i = String(t.label), r = String(t.value);
        return i !== e && r !== e;
      });
    },
    filteredOptions() {
      if (!this.isFilterable || this.remoteFilter)
        return this.normalizedOptions;
      const e = this.normalizeFilter(this.filterQuery);
      return e ? this.normalizedOptions.filter(
        (t) => this.normalizeFilter(t.label).includes(e) || this.normalizeFilter(String(t.value)).includes(e)
      ) : this.normalizedOptions;
    },
    selectedValues() {
      return this.multiple ? Array.isArray(this.modelValue) ? this.modelValue.filter((e) => e !== "" && e != null) : [] : [];
    },
    stringValue() {
      return this.multiple || this.modelValue === "" || this.modelValue == null ? "" : String(this.modelValue);
    },
    hiddenFieldValue() {
      return this.multiple ? this.selectedValues.map((e) => String(e)).join(",") : this.stringValue;
    },
    isPlaceholderDisplay() {
      return this.multiple ? !1 : this.stringValue === "";
    },
    displayLabel() {
      if (this.isPlaceholderDisplay)
        return this.resolvedPlaceholder;
      const e = this.normalizedOptions.find((t) => String(t.value) === this.stringValue);
      return e ? e.label : this.stringValue;
    },
    multipleInputPlaceholder() {
      return this.selectedValues.length > 0 ? "" : this.resolvedPlaceholder;
    },
    showClearButton() {
      return this.isDisabled ? !1 : this.multiple ? this.clearable && this.selectedValues.length > 0 : this.clearable && this.stringValue !== "";
    },
    clearAriaLabel() {
      return typeof this.$t == "function" ? this.$t("ui.select.clear") : "Clear selection";
    },
    resolvedFilterPlaceholder() {
      return this.filterPlaceholder ? this.filterPlaceholder : typeof this.$t == "function" ? this.$t("ui.select.filterPlaceholder") : "Search…";
    },
    noResultsText() {
      return typeof this.$t == "function" ? this.$t("ui.select.noResults") : "No results";
    },
    emptyOptionsText() {
      return typeof this.$t == "function" ? this.$t("ui.select.empty") : "No options";
    },
    resolvedLoadingLabel() {
      return typeof this.$t == "function" ? this.$t("ui.select.loading") : "Loading…";
    },
    triggerPassthrough() {
      const e = /* @__PURE__ */ new Set(["class", "style", "id", "disabled", "name"]), t = {};
      for (const [i, r] of Object.entries(this.$attrs))
        e.has(i) || (t[i] = r);
      return t;
    },
    optionCount() {
      return this.normalizedOptions.length;
    },
    useScrollListMode() {
      return this.isFilterable ? !0 : this.optionCount > this.scrollListThreshold;
    },
    alignSelectedToTrigger() {
      return !this.useScrollListMode;
    }
  },
  watch: {
    filterQuery(e) {
      this.remoteFilter && (this.filterDebounceTimer && clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = setTimeout(() => {
        this.$emit("filterChange", String(e ?? "").trim());
      }, 300));
    },
    menuOpen(e) {
      if (this.$emit("dropdownOpenChange", e), !e) {
        this.filterDebounceTimer && (clearTimeout(this.filterDebounceTimer), this.filterDebounceTimer = null), this.filterQuery = "";
        return;
      }
      this.$nextTick(() => {
        this.isFilterable && this.focusSearch(), (this.useScrollListMode || this.isListboxScrollable()) && this.scrollSelectedIntoView();
      });
    }
  },
  methods: {
    normalizeFilter(e) {
      return String(e ?? "").trim().toLocaleLowerCase();
    },
    focusSearch() {
      var t;
      const e = this.multiple ? this.$refs.searchInput : this.$refs.filterInput;
      e && typeof e.focus == "function" && (e.focus(), (t = e.select) == null || t.call(e));
    },
    onTriggerClick(e) {
      e(), this.multiple && this.menuOpen && this.$nextTick(() => this.focusSearch());
    },
    isListboxScrollable() {
      const e = this.$refs.listbox;
      return e ? e.scrollHeight > e.clientHeight + 2 : !1;
    },
    scrollSelectedIntoView() {
      const e = this.$refs.listbox;
      if (!e) return;
      const t = e.querySelector('[role="option"][aria-selected="true"]');
      t && t.scrollIntoView({ block: "nearest", inline: "nearest" });
    },
    labelForValue(e) {
      const t = this.normalizedOptions.find((i) => String(i.value) === String(e));
      return t ? t.label : String(e);
    },
    isSelected(e) {
      return this.multiple ? this.selectedValues.some((t) => String(t) === String(e.value)) : String(e.value) === this.stringValue;
    },
    pick(e, t) {
      if (this.multiple) {
        this.toggleValue(e), this.$nextTick(() => this.focusSearch());
        return;
      }
      this.$emit("update:modelValue", e.value), this.$emit("change", { type: "change", target: { value: String(e.value) } }), t();
    },
    toggleValue(e) {
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((r) => String(r) === String(e.value));
      i >= 0 ? t.splice(i, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], i = t.findIndex((r) => String(r) === String(e));
      i < 0 || (t.splice(i, 1), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } }));
    },
    clearSelection() {
      this.multiple ? (this.$emit("update:modelValue", []), this.$emit("change", { type: "change", target: { value: "" } })) : (this.$emit("update:modelValue", ""), this.$emit("change", { type: "change", target: { value: "" } })), this.menuOpen = !1;
    },
    pickFirstFiltered(e) {
      if (this.filteredOptions.length === 0) return;
      const t = this.filteredOptions[0];
      if (this.multiple) {
        this.isSelected(t) || this.toggleValue(t);
        return;
      }
      this.pick(t, e);
    },
    onSearchKeydown(e) {
      if (e.key === "Enter") {
        e.preventDefault(), this.pickFirstFiltered(() => {
        });
        return;
      }
      if (e.key === "Escape") {
        e.preventDefault(), this.menuOpen = !1;
        return;
      }
      if (this.multiple && e.key === "Backspace" && !this.filterQuery && this.selectedValues.length > 0) {
        e.preventDefault();
        const t = this.selectedValues[this.selectedValues.length - 1];
        this.removeValue(t);
      }
    }
  }
}, Hn = ["name", "value"], Wn = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], jn = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Yn = {
  key: 1,
  class: "ui-select-values-inner"
}, Kn = ["placeholder", "aria-label", "disabled"], qn = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Gn = { class: "ui-select-field-suffix" }, Un = ["aria-label"], Qn = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, Zn = ["placeholder", "aria-label", "onKeydown"], Xn = ["id", "role", "aria-multiselectable", "aria-labelledby"], Jn = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, er = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function tr(e, t, i, r, a, n) {
  const s = v("ui-icon"), d = v("Tag"), c = v("ui-skeleton"), u = v("ui-button"), p = v("ui-empty"), I = v("ui-popover");
  return l(), o("div", {
    class: b(n.rootClass)
  }, [
    i.name ? (l(), o("input", {
      key: 0,
      type: "hidden",
      name: i.name,
      value: n.hiddenFieldValue
    }, null, 8, Hn)) : f("", !0),
    g(I, {
      open: a.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (S) => a.menuOpen = S),
      placement: "bottom-start",
      "match-trigger-width": n.resolvedMatchTriggerWidth,
      disabled: n.isDisabled,
      "align-selected-option-to-trigger": n.alignSelectedToTrigger
    }, Fe({
      trigger: x(({ open: S, toggle: y }) => [
        h("button", z({
          type: "button",
          id: n.resolvedId,
          class: ["ui-select-field", { "ui-select-field--values": i.multiple }],
          disabled: n.isDisabled,
          "aria-expanded": S ? "true" : "false",
          "aria-haspopup": n.listboxRole,
          "aria-controls": a.listboxId,
          "aria-describedby": i.ariaDescribedby
        }, n.triggerPassthrough, {
          onClick: (C) => n.onTriggerClick(y)
        }), [
          i.prefixIcon ? (l(), o("span", jn, [
            g(s, {
              name: i.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : f("", !0),
          i.multiple ? (l(), o("div", Yn, [
            (l(!0), o(F, null, j(n.selectedValues, (C) => (l(), _(d, {
              key: String(C),
              variant: "secondary",
              size: "sm",
              removable: "",
              onRemove: (L) => n.removeValue(C)
            }, {
              default: x(() => [
                N(k(n.labelForValue(C)), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128)),
            n.isFilterable ? q((l(), o("input", {
              key: 0,
              ref: "searchInput",
              "onUpdate:modelValue": t[0] || (t[0] = (C) => a.filterQuery = C),
              type: "text",
              class: b(["ui-select-values-input", { "ui-select-values-input--solo": !n.selectedValues.length }]),
              placeholder: n.multipleInputPlaceholder,
              "aria-label": n.resolvedFilterPlaceholder,
              autocomplete: "off",
              disabled: n.isDisabled,
              onClick: t[1] || (t[1] = R(() => {
              }, ["stop"])),
              onKeydown: t[2] || (t[2] = (...C) => n.onSearchKeydown && n.onSearchKeydown(...C))
            }, null, 42, Kn)), [
              [ne, a.filterQuery]
            ]) : f("", !0)
          ])) : i.loading ? (l(), o("span", qn, k(n.resolvedLoadingLabel), 1)) : (l(), o("span", {
            key: 3,
            class: b(["ui-select-value", { "ui-select-value--placeholder": n.isPlaceholderDisplay }]),
            "data-popover-align": ""
          }, k(n.displayLabel), 3)),
          h("span", Gn, [
            n.showClearButton ? (l(), o("button", {
              key: 0,
              type: "button",
              class: "ui-select-clear",
              "aria-label": n.clearAriaLabel,
              onClick: t[3] || (t[3] = R((...C) => n.clearSelection && n.clearSelection(...C), ["stop"]))
            }, [
              g(s, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Un)) : f("", !0),
            h("span", Qn, [
              g(s, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 16, Wn)
      ]),
      content: x(({ close: S }) => [
        h("div", {
          ref: "listbox",
          id: a.listboxId,
          class: "ui-select-listbox",
          role: n.listboxRole,
          "aria-multiselectable": i.multiple ? "true" : void 0,
          "aria-labelledby": n.resolvedId
        }, [
          i.loading && !n.filteredOptions.length ? (l(), o("div", Jn, [
            (l(), o(F, null, j(3, (y) => g(c, {
              key: y,
              variant: "line",
              class: b(y === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : n.filteredOptions.length ? (l(!0), o(F, { key: 1 }, j(n.filteredOptions, (y) => (l(), _(u, {
            key: String(y.value),
            variant: n.isSelected(y) ? "solid" : "ghost",
            color: n.isSelected(y) ? "primary" : "secondary",
            size: "sm",
            fulled: "",
            "text-align": "left",
            role: "option",
            class: b(["ui-select-option", { "ui-select-option--selected": n.isSelected(y) }]),
            "suffix-icon": n.isSelected(y) ? "check" : void 0,
            "aria-selected": n.isSelected(y) ? "true" : "false",
            onClick: (C) => n.pick(y, S)
          }, {
            default: x(() => [
              h("span", er, k(y.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "color", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : n.isFilterable && a.filterQuery ? (l(), _(p, {
            key: 2,
            icon: "magnifying-glass",
            size: "sm",
            title: n.noResultsText
          }, null, 8, ["title"])) : (l(), _(p, {
            key: 3,
            icon: "table-cells",
            size: "sm",
            title: n.emptyOptionsText
          }, null, 8, ["title"]))
        ], 8, Xn)
      ]),
      _: 2
    }, [
      n.showPopoverHeader ? {
        name: "header",
        fn: x(({ close: S }) => [
          q(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (y) => a.filterQuery = y),
            type: "text",
            class: "ui-select-filter-input w-full",
            placeholder: n.resolvedFilterPlaceholder,
            "aria-label": n.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = R(() => {
            }, ["prevent"])),
            onKeydown: [
              G(R((y) => n.pickFirstFiltered(S), ["prevent"]), ["enter"]),
              G(R((y) => S(), ["prevent"]), ["esc"])
            ]
          }, null, 40, Zn), [
            [ne, a.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: x((S) => [
          m(e.$slots, "footer", Ne(Me(S)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const Ur = /* @__PURE__ */ w(Mn, [["render", tr]]), ir = ["line", "circle", "block", "pill"], nr = ["sm", "md", "lg"], rr = 480, ze = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, Ae = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, sr = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => ir.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => nr.includes(e)
    }
  },
  setup(e) {
    const t = He(), i = V(() => !!t.default), r = $(null), a = $(null), n = $(null), s = $(null), d = $(!1), c = $(!1), u = $(!1), p = $(!1), I = V(
      () => e.loading || c.value
    ), S = V(
      () => e.loading || c.value
    );
    We(() => {
      p.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), je(
      () => e.loading,
      async (A, W) => {
        var H, te, ie;
        if (A) {
          c.value = !1, u.value = !1, s.value = null, d.value = !1;
          return;
        }
        if (W !== !0) return;
        if (p.value) {
          c.value = !1, s.value = null, d.value = !1;
          return;
        }
        const O = ((H = r.value) == null ? void 0 : H.offsetHeight) ?? ((te = a.value) == null ? void 0 : te.offsetHeight) ?? 0;
        c.value = !0, u.value = !1, d.value = !0, s.value = O, await re();
        const M = ((ie = n.value) == null ? void 0 : ie.scrollHeight) ?? O;
        if (O <= 0 && M <= 0) {
          y();
          return;
        }
        await re(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            s.value = M, u.value = !0;
          });
        }), setTimeout(y, rr + 40);
      }
    );
    function y() {
      c.value = !1, u.value = !1, s.value = null, d.value = !1;
    }
    function C(A) {
      A.target === r.value && A.propertyName === "height" && (e.loading || d.value && y());
    }
    const L = V(() => {
      if (s.value != null)
        return { height: `${s.value}px` };
    }), B = V(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !c.value,
      "ui-skeleton-placeholder--overlay": c.value,
      "ui-skeleton-placeholder--fade-out": c.value
    })), P = V(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !c.value,
      "ui-skeleton-content-wrap--revealing": c.value,
      "ui-skeleton-content-wrap--revealing-visible": c.value && u.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !c.value
    }));
    return {
      hasDefaultSlot: i,
      hostRef: r,
      placeholderRef: a,
      contentWrapRef: n,
      hostStyle: L,
      heightAnimActive: d,
      isRevealing: c,
      showPlaceholder: I,
      isBusy: S,
      placeholderClass: B,
      contentWrapClass: P,
      onHostTransitionEnd: C
    };
  },
  computed: {
    variantClass() {
      return ze[this.variant] || ze.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return Ae[this.size] || Ae.md;
    },
    skeletonClass() {
      return T(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return T(
        "ui-skeleton-host",
        this.heightAnimActive && "ui-skeleton-host--height-active",
        (this.loading || this.isRevealing) && "ui-skeleton-host--busy",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, ar = ["aria-busy"], lr = ["aria-hidden"];
function or(e, t, i, r, a, n) {
  return r.hasDefaultSlot ? (l(), o("div", z({
    key: 1,
    ref: "hostRef",
    class: n.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, n.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...s) => r.onHostTransitionEnd && r.onHostTransitionEnd(...s))
  }), [
    q(h("div", {
      ref: "placeholderRef",
      class: b(["ui-skeleton-placeholder", r.placeholderClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "placeholder", {}, () => [
        t[1] || (t[1] = h("div", { class: "ui-skeleton-default-rows" }, [
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--md" }),
          h("div", { class: "ui-skeleton ui-skeleton--line ui-skeleton--size-md ui-skeleton-default-rows__line--sm" })
        ], -1))
      ])
    ], 2), [
      [$e, r.showPlaceholder]
    ]),
    h("div", {
      ref: "contentWrapRef",
      class: b(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      h("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        m(e.$slots, "default")
      ], 8, lr)
    ], 2)
  ], 16, ar)) : (l(), o("div", z({
    key: 0,
    class: n.skeletonClass,
    "aria-hidden": "true"
  }, n.passthroughAttrs), null, 16));
}
const Qr = /* @__PURE__ */ w(sr, [["render", or]]), dr = {
  name: "TabList",
  inheritAttrs: !1,
  inject: {
    uiTabs: {
      default: null
    }
  },
  props: {
    /** `tablist` erişilebilir adı (birden fazla sekme şeridi için önerilir). */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    ariaOrientation() {
      var e;
      return ((e = this.uiTabs) == null ? void 0 : e.orientation) === "vertical" ? "vertical" : "horizontal";
    },
    listClass() {
      var r, a;
      const e = ((r = this.uiTabs) == null ? void 0 : r.orientation) === "vertical", i = ((a = this.uiTabs) == null ? void 0 : a.variant) === "segmented" && !e ? "segmented" : "line";
      return T(
        "ui-tab-list",
        i === "segmented" ? "ui-tab-list--segmented" : "ui-tab-list--line",
        e ? "ui-tab-list--vertical" : "ui-tab-list--horizontal",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  },
  methods: {
    /** Klavye: ok tuşları ile tetikleyiciler arasında odak (yatay/dikey). */
    onKeydown(e) {
      var p, I;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", i = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (i.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], a = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], n = e.key;
      let s = 0;
      if (r.includes(n)) s = 1;
      else if (a.includes(n)) s = -1;
      else return;
      e.preventDefault();
      const d = document.activeElement;
      let c = i.indexOf(d);
      c === -1 && (c = i.findIndex((S) => S.getAttribute("aria-selected") === "true")), c === -1 && (c = 0);
      let u = c + s;
      u < 0 && (u = i.length - 1), u >= i.length && (u = 0), (I = (p = i[u]) == null ? void 0 : p.focus) == null || I.call(p);
    }
  }
}, ur = ["aria-label", "aria-orientation"];
function cr(e, t, i, r, a, n) {
  return l(), o("div", z({
    class: n.listClass,
    role: "tablist",
    "aria-label": i.ariaLabel || void 0,
    "aria-orientation": n.ariaOrientation
  }, n.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...s) => n.onKeydown && n.onKeydown(...s))
  }), [
    m(e.$slots, "default")
  ], 16, ur);
}
const Zr = /* @__PURE__ */ w(dr, [["render", cr]]), hr = ee("ui-tabs"), fr = ["line", "segmented"], mr = {
  name: "Tabs",
  inheritAttrs: !1,
  props: {
    /** Aktif sekme kimliği (`TabTrigger` / `TabPanel` `value` ile eşleşir). */
    modelValue: {
      type: [String, Number],
      default: null
    },
    /** `line` — alt çizgi; `segmented` — Apple tarzı segment kontrolü (ikon + etiket, yatay). */
    variant: {
      type: String,
      default: "line",
      validator: (e) => fr.includes(e)
    },
    /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => e === "horizontal" || e === "vertical"
    },
    /** `full` — segmented tab listesi tam genişlik (hub / show sayfaları). */
    fit: {
      type: String,
      default: "",
      validator: (e) => e === "" || e === "full"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      baseId: hr()
    };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    rootClass() {
      return T(
        "ui-tabs flex min-w-0 flex-col gap-4",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
        this.fit === "full" ? "ui-tabs--fit-full" : "",
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  },
  methods: {
    setValue(e) {
      this.$emit("update:modelValue", e);
    },
    tabSlug(e) {
      return String(e).replace(/[^a-zA-Z0-9_-]/g, "_");
    },
    triggerId(e) {
      return `${this.baseId}-tab-${this.tabSlug(e)}`;
    },
    panelId(e) {
      return `${this.baseId}-panel-${this.tabSlug(e)}`;
    },
    isSelected(e) {
      return Object.is(this.modelValue, e);
    }
  }
};
function pr(e, t, i, r, a, n) {
  return l(), o("div", z({ class: n.rootClass }, n.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Xr = /* @__PURE__ */ w(mr, [["render", pr]]), gr = ["solid", "regular", "brands", "light", "duotone", "thin"], br = {
  name: "TabTrigger",
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
    },
    /** Slot kullanılmazsa gösterilen metin. */
    label: {
      type: String,
      default: ""
    },
    /** `ui-icon` `name` — doluysa ikon + metin (veya yalnız ikon). */
    icon: {
      type: String,
      default: null
    },
    /** `ui-icon` `type` prop’u. */
    iconType: {
      type: String,
      default: "light",
      validator: (e) => gr.includes(e)
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    /** `segmented` yalnızca yatay `ui-tabs` içinde geçerlidir. */
    triggerKind() {
      if (!this.uiTabs) return "line";
      const e = this.uiTabs.variant, t = this.uiTabs.orientation === "vertical";
      return e === "segmented" && !t ? "segmented" : "line";
    },
    tabIconSize() {
      return this.triggerKind === "segmented" ? "md" : "xs";
    },
    /** FA Pro: segment kartlarında da varsayılan `light` kullanılır. */
    tabIconType() {
      return this.iconType;
    },
    isSelected() {
      return this.uiTabs ? this.uiTabs.isSelected(this.value) : !1;
    },
    triggerDomId() {
      return this.uiTabs ? this.uiTabs.triggerId(this.value) : void 0;
    },
    panelDomId() {
      return this.uiTabs ? this.uiTabs.panelId(this.value) : void 0;
    },
    triggerClass() {
      const e = this.triggerKind;
      return T(
        "ui-tab-trigger",
        e === "segmented" ? "ui-tab-trigger--segmented" : "ui-tab-trigger--line",
        this.isSelected && (e === "segmented" ? "ui-tab-trigger--segmented-selected" : "ui-tab-trigger--line-selected"),
        this.disabled ? "ui-tab-trigger--disabled" : "",
        this.$attrs.class
      );
    }
  },
  mounted() {
    !this.uiTabs && typeof import.meta < "u";
  },
  methods: {
    select() {
      this.disabled || !this.uiTabs || this.uiTabs.setValue(this.value);
    }
  }
}, yr = ["id", "aria-selected", "aria-controls", "tabindex", "disabled"], vr = { class: "ui-tab-trigger-label min-w-0 whitespace-nowrap" };
function kr(e, t, i, r, a, n) {
  const s = v("ui-icon");
  return l(), o("button", {
    type: "button",
    role: "tab",
    id: n.triggerDomId,
    class: b(n.triggerClass),
    "aria-selected": n.isSelected ? "true" : "false",
    "aria-controls": n.panelDomId,
    tabindex: n.isSelected ? 0 : -1,
    disabled: i.disabled,
    onClick: t[0] || (t[0] = (...d) => n.select && n.select(...d))
  }, [
    i.icon ? (l(), _(s, {
      key: 0,
      name: i.icon,
      type: n.tabIconType,
      size: n.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : f("", !0),
    h("span", vr, [
      m(e.$slots, "default", {}, () => [
        N(k(i.label), 1)
      ])
    ])
  ], 10, yr);
}
const Jr = /* @__PURE__ */ w(br, [["render", kr]]), es = {
  ui: {
    button: {
      loading: "Loading"
    },
    icon: {
      accessible: "{name} icon"
    },
    alert: {
      dismiss: "Dismiss"
    },
    dialog: {
      close: "Close"
    },
    confirm: {
      ok: "OK",
      cancel: "Cancel",
      fallbackAria: "Confirm"
    },
    tag: {
      remove: "Remove tag"
    },
    phone: {
      countryAria: "Country code",
      placeholder: "555 000 0000"
    },
    password: {
      show: "Show password",
      hide: "Hide password",
      strength: {
        weak: "Weak",
        fair: "Fair",
        good: "Good",
        strong: "Strong"
      }
    },
    pin: {
      ariaLabel: "Verification code",
      cell: "Digit {n} of {total}"
    },
    progress: {
      ariaLabel: "Progress"
    },
    select: {
      placeholder: "Select",
      filterPlaceholder: "Search…",
      noResults: "No results",
      empty: "No options",
      loading: "Loading…",
      clear: "Clear selection"
    },
    colorPicker: {
      triggerPlaceholder: "Pick a color",
      popoverTitle: "Color palette",
      clear: "Clear",
      customHex: "Custom color (hex)"
    },
    iconPicker: {
      triggerPlaceholder: "Pick an icon",
      popoverTitle: "Icons",
      clear: "Clear",
      searchPlaceholder: "Search icons…",
      noResults: "No results"
    },
    datePicker: {
      today: "Today",
      yesterday: "Yesterday"
    },
    dateRangePicker: {
      placeholder: "Select date range",
      selectEnd: "Select end date",
      prevMonth: "Previous month",
      nextMonth: "Next month",
      quickAria: "Quick date ranges",
      today: "Today",
      yesterday: "Yesterday",
      thisMonth: "This month ({month})",
      lastMonth: "Last month ({month})"
    },
    timePicker: {
      placeholder: "Select time",
      hourAria: "Hour",
      minuteAria: "Minute"
    },
    photo: {
      fallbackAlt: "Photo",
      previewAria: "Photo preview",
      prev: "Previous photo",
      next: "Next photo",
      counter: "{current} / {total}"
    },
    photos: {
      more: "+{count}"
    }
  }
}, ts = {
  ui: {
    button: {
      /** Yükleme sırasında ekran okuyucu / varsayılan `loading-text` */
      loading: "Yükleniyor"
    },
    icon: {
      /** `show-accessible-name` açıkken `aria-label` (name = ikon adı, fa- öneki yok) */
      accessible: "{name} ikon"
    },
    alert: {
      /** Alert / Toast kapat düğmesi */
      dismiss: "Kapat"
    },
    dialog: {
      close: "Kapat"
    },
    confirm: {
      ok: "Tamam",
      cancel: "İptal",
      /** Başlık yokken diyalog erişilebilir adı */
      fallbackAria: "Onay"
    },
    tag: {
      /** Tag kapat düğmesi `aria-label` */
      remove: "Etiketi kaldır"
    },
    phone: {
      countryAria: "Ülke kodu",
      placeholder: "5XX XXX XX XX"
    },
    password: {
      show: "Şifreyi göster",
      hide: "Şifreyi gizle",
      strength: {
        weak: "Zayıf",
        fair: "Orta",
        good: "İyi",
        strong: "Güçlü"
      }
    },
    pin: {
      ariaLabel: "Doğrulama kodu",
      cell: "{n}. hane, toplam {total}"
    },
    progress: {
      ariaLabel: "İlerleme"
    },
    select: {
      placeholder: "Seçiniz",
      filterPlaceholder: "Ara…",
      noResults: "Sonuç bulunamadı",
      empty: "Seçenek yok",
      loading: "Yükleniyor…",
      clear: "Seçimi temizle"
    },
    colorPicker: {
      triggerPlaceholder: "Renk seçin",
      popoverTitle: "Renk paleti",
      clear: "Temizle",
      customHex: "Özel renk (hex)"
    },
    iconPicker: {
      triggerPlaceholder: "İkon seçin",
      popoverTitle: "İkonlar",
      clear: "Temizle",
      searchPlaceholder: "İkon ara…",
      noResults: "Sonuç bulunamadı"
    },
    datePicker: {
      today: "Bugün",
      yesterday: "Dün"
    },
    dateRangePicker: {
      placeholder: "Tarih aralığı seçin",
      selectEnd: "Bitiş tarihini seçin",
      prevMonth: "Önceki ay",
      nextMonth: "Sonraki ay",
      quickAria: "Hızlı tarih aralığı",
      today: "Bugün",
      yesterday: "Dün",
      thisMonth: "Bu ay ({month})",
      lastMonth: "Geçen ay ({month})"
    },
    timePicker: {
      placeholder: "Saat seçin",
      hourAria: "Saat",
      minuteAria: "Dakika"
    },
    photo: {
      fallbackAlt: "Görsel",
      previewAria: "Görsel önizleme",
      prev: "Önceki görsel",
      next: "Sonraki görsel",
      counter: "{current} / {total}"
    },
    photos: {
      more: "+{count}"
    }
  }
}, Sr = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], wr = "ui-sans-serif, system-ui, sans-serif", Le = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, De = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function xr(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function _r(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${t}, ${wr}`;
}
function Cr(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((i) => parseInt(t[i] + t[i], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function Tr(e, t, i) {
  const [r, a, n] = [e, t, i].map((s) => {
    const d = s / 255;
    return d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * a + 0.0722 * n;
}
function Ir(e, t = "#ffffff", i = "#0a0a0b") {
  const r = Cr(e);
  return r && Tr(...r) > 0.4 ? i : t;
}
function zr(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function Ar(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const i = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, i))}%`;
}
function Lr(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return Le[t] != null ? Le[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function Dr(e) {
  return e == null || e === "" ? null : De[e] ? De[e] : String(e);
}
function X(e, t, i) {
  if (!i || typeof i != "object")
    return;
  const r = Ar(i.opacity ?? i.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const a = Lr(i.backdropBlur ?? i.backdropFilter);
  a && (e[`--ui-${t}-backdrop-blur`] = a);
  const n = Dr(i.mixFrom);
  n && (e[`--ui-${t}-mix-from`] = n);
}
function Re(e, t, i) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const a = e[i];
  if (a != null && a !== "")
    return String(a);
}
function is(e = {}, t = {}) {
  const i = xr(e.root ?? t.root);
  if (!i || typeof e != "object")
    return {};
  e.mode === "dark" ? i.classList.add("dark") : e.mode === "light" && i.classList.remove("dark");
  const r = {};
  if (e.fontFamily && (r["--font-sans"] = _r(e.fontFamily)), e.baseColor && typeof e.baseColor == "object")
    for (const d of Sr) {
      const c = e.baseColor[d];
      c != null && c !== "" && (r[`--base-${d}`] = String(c));
    }
  const a = [
    ["background", "--background"],
    ["foreground", "--foreground"],
    ["surface", "--surface"],
    ["surfaceForeground", "--surface-foreground"],
    ["control", "--control"],
    ["controlForeground", "--control-foreground"],
    ["primaryForeground", "--primary-foreground"],
    ["secondaryForeground", "--secondary-foreground"],
    ["border", "--border"],
    ["ring", "--ring"],
    ["muted", "--muted"],
    ["mutedForeground", "--muted-foreground"],
    ["accent", "--accent"],
    ["accentForeground", "--accent-foreground"]
  ];
  for (const [d, c] of a) {
    const u = e[d];
    u != null && u !== "" && (r[c] = String(u));
  }
  const n = Re(e, "primaryColor", "primary");
  n && (r["--primary"] = n, e.primaryForeground || (r["--primary-foreground"] = Ir(n)), e.ring || (r["--ring"] = `color-mix(in oklab, ${n} 55%, transparent)`));
  const s = Re(e, "secondaryColor", "secondary");
  if (s && (r["--secondary"] = s), X(r, "surface", e.surfaceStyle), X(r, "control", e.controlStyle), X(r, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [d, c] of Object.entries(e.colors))
      c != null && c !== "" && (r[zr(d)] = String(c));
  for (const [d, c] of Object.entries(r))
    i.style.setProperty(d, c);
  return { ...r };
}
function ns(e, t) {
  return {
    ...e,
    ...t,
    baseColor: {
      ...e.baseColor,
      ...t.baseColor
    },
    surfaceStyle: {
      ...e.surfaceStyle,
      ...t.surfaceStyle
    },
    controlStyle: {
      ...e.controlStyle,
      ...t.controlStyle
    },
    inputStyle: {
      ...e.inputStyle,
      ...t.inputStyle
    },
    colors: {
      ...e.colors,
      ...t.colors
    }
  };
}
export {
  Fr as A,
  yt as B,
  Er as C,
  Or as D,
  Mr as E,
  Hr as F,
  Wr as I,
  Yr as P,
  qr as R,
  Ur as S,
  Zr as T,
  w as _,
  Br as a,
  Pr as b,
  Nr as c,
  Ee as d,
  jr as e,
  Kr as f,
  Gr as g,
  Qr as h,
  Jr as i,
  Xr as j,
  On as k,
  Be as l,
  is as m,
  T as n,
  Vr as o,
  ee as p,
  es as q,
  ns as r,
  Oe as s,
  Pe as t,
  ts as u
};
//# sourceMappingURL=apply-theme-Dp8HgcfI.js.map
