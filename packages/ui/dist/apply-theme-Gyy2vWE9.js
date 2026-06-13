import { openBlock as s, createElementBlock as l, mergeProps as T, renderSlot as m, resolveComponent as b, normalizeClass as p, createVNode as g, createCommentVNode as f, createElementVNode as h, toDisplayString as y, createBlock as k, Teleport as Ce, Transition as Te, withCtx as _, normalizeStyle as Ie, createTextVNode as B, Fragment as D, withModifiers as z, renderList as V, withKeys as P, createSlots as ze, withDirectives as j, vModelText as q, normalizeProps as Be, guardReactiveProps as $e, vShow as Ve, useSlots as Pe, computed as R, ref as L, onMounted as Oe, watch as Ee, nextTick as U } from "vue";
import { RouterLink as Ne } from "vue-router";
function x(...e) {
  const t = [];
  for (const n of e)
    if (n) {
      if (typeof n == "string") {
        t.push(n);
        continue;
      }
      if (typeof n == "object")
        for (const [r, o] of Object.entries(n))
          o && t.push(r);
    }
  return t.join(" ");
}
const S = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Me = ["horizontal", "vertical"], je = {
  name: "ActionGroup",
  inheritAttrs: !1,
  props: {
    /** Satır veya sütun dizilimi */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => Me.includes(e)
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
      return x(
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
}, He = ["aria-label"];
function Ye(e, t, n, r, o, i) {
  return s(), l("div", T({
    class: i.rootClass,
    role: "group",
    "aria-label": n.ariaLabel || void 0
  }, i.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16, He);
}
const dr = /* @__PURE__ */ S(je, [["render", Ye]]), Ke = ["info", "success", "warning", "error"], G = {
  info: "circle-info",
  success: "circle-check",
  warning: "triangle-exclamation",
  error: "circle-xmark"
}, X = {
  info: "text-info",
  success: "text-success",
  warning: "text-warning",
  error: "text-destructive"
}, We = {
  name: "Alert",
  inheritAttrs: !1,
  props: {
    /** Bilgi / başarı / uyarı / hata görünümü */
    variant: {
      type: String,
      default: "info",
      validator: (e) => Ke.includes(e)
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
      return this.icon || G[this.variant] || G.info;
    },
    iconToneClass() {
      return X[this.variant] || X.info;
    },
    rootClasses() {
      return x(`ui-alert ui-alert--${this.variant}`, this.$attrs.class);
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
}, Qe = ["role"], qe = { class: "ui-alert-body" }, Ue = {
  key: 0,
  class: "ui-alert-title"
}, Ge = {
  key: 1,
  class: "ui-alert-description ui-text-default"
}, Xe = {
  key: 2,
  class: "ui-alert-slot"
};
function Ze(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("ui-button");
  return s(), l("div", T({
    class: i.rootClasses,
    role: i.alertRole
  }, i.passthroughAttrs), [
    n.showIcon ? (s(), l("span", {
      key: 0,
      class: p(["ui-alert-icon", i.iconToneClass]),
      "aria-hidden": "true"
    }, [
      m(e.$slots, "icon", {}, () => [
        g(a, {
          name: i.resolvedIcon,
          size: "sm"
        }, null, 8, ["name"])
      ])
    ], 2)) : f("", !0),
    h("div", qe, [
      n.title ? (s(), l("p", Ue, y(n.title), 1)) : f("", !0),
      n.description ? (s(), l("p", Ge, y(n.description), 1)) : f("", !0),
      e.$slots.default ? (s(), l("div", Xe, [
        m(e.$slots, "default")
      ])) : f("", !0)
    ]),
    n.dismissible ? (s(), k(u, {
      key: 1,
      "native-type": "button",
      variant: "ghost",
      color: "secondary",
      cubed: "",
      size: "sm",
      class: "ui-alert-dismiss shrink-0",
      "prefix-icon": "xmark",
      "aria-label": i.dismissLabel,
      onClick: i.onDismiss
    }, null, 8, ["aria-label", "onClick"])) : f("", !0)
  ], 16, Qe);
}
const cr = /* @__PURE__ */ S(We, [["render", Ze]]);
let Je = 0;
const et = ["top", "bottom", "left", "right"], tt = {
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
      validator: (e) => et.includes(e)
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
      tooltipId: `ui-tooltip-${++Je}`,
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
      const t = e.getBoundingClientRect(), n = 8, r = t.left + t.width / 2, o = t.top + t.height / 2;
      let i = {};
      switch (this.placement) {
        case "bottom":
          i = {
            left: `${r}px`,
            top: `${t.bottom + n}px`,
            transform: "translate(-50%, 0)"
          };
          break;
        case "left":
          i = {
            left: `${t.left - n}px`,
            top: `${o}px`,
            transform: "translate(-100%, -50%)"
          };
          break;
        case "right":
          i = {
            left: `${t.right + n}px`,
            top: `${o}px`,
            transform: "translate(0, -50%)"
          };
          break;
        case "top":
        default:
          i = {
            left: `${r}px`,
            top: `${t.top - n}px`,
            transform: "translate(-50%, -100%)"
          };
      }
      this.panelStyle = i;
    }
  }
}, it = ["id"], nt = { class: "ui-tooltip-motion inline-flex max-w-full min-w-0" };
function rt(e, t, n, r, o, i) {
  return s(), l("div", {
    ref: "wrapperRef",
    class: "ui-tooltip inline-flex max-w-full min-w-0",
    onMouseenter: t[0] || (t[0] = (...a) => i.onEnter && i.onEnter(...a)),
    onMouseleave: t[1] || (t[1] = (...a) => i.onLeave && i.onLeave(...a)),
    onFocusin: t[2] || (t[2] = (...a) => i.onFocusIn && i.onFocusIn(...a)),
    onFocusout: t[3] || (t[3] = (...a) => i.onFocusOut && i.onFocusOut(...a))
  }, [
    m(e.$slots, "default"),
    (s(), k(Ce, { to: "body" }, [
      g(Te, { name: "ui-tooltip-fade" }, {
        default: _(() => [
          o.open && !n.disabled && i.hasContent ? (s(), l("div", {
            key: 0,
            id: o.tooltipId,
            ref: "panelRef",
            class: "ui-tooltip-panel pointer-events-none fixed",
            style: Ie(o.panelStyle),
            role: "tooltip"
          }, [
            h("span", nt, [
              m(e.$slots, "content", {}, () => [
                B(y(n.label), 1)
              ])
            ])
          ], 12, it)) : f("", !0)
        ]),
        _: 3
      })
    ]))
  ], 544);
}
const Ae = /* @__PURE__ */ S(tt, [["render", rt]]), st = ["solid", "secondary", "outline"], at = ["sm", "md", "lg"], Z = {
  solid: "border border-transparent bg-primary text-primary-foreground",
  secondary: "border border-transparent bg-secondary text-secondary-foreground",
  outline: "border border-border bg-transparent text-foreground"
}, J = {
  sm: "ui-badge--sm",
  md: "ui-badge--md",
  lg: "ui-badge--lg"
}, E = {
  32: "max-w-32",
  40: "max-w-40",
  48: "max-w-48",
  full: "max-w-full"
};
function lt(e) {
  const t = String(e || "").trim();
  if (!t) return "";
  let n = t.startsWith("#") ? t : `#${t}`;
  return /^#[0-9A-Fa-f]{3}$/.test(n) && (n = `#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`), /^#[0-9A-Fa-f]{6}$/.test(n) ? n.toUpperCase() : "";
}
function ot(e) {
  const t = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), r = parseInt(e.slice(5, 7), 16);
  return (0.299 * t + 0.587 * n + 0.114 * r) / 255 > 0.58 ? "#0a0a0a" : "#ffffff";
}
const ut = {
  name: "Badge",
  components: { Tooltip: Ae },
  props: {
    variant: {
      type: String,
      default: "solid",
      validator: (e) => st.includes(e)
    },
    /** sm — varsayılan kompakt; md / lg daha geniş padding */
    size: {
      type: String,
      default: "sm",
      validator: (e) => at.includes(e)
    },
    /** Uzun metinde kısaltma (…) ve taşma varsa tooltip */
    truncate: {
      type: Boolean,
      default: !0
    },
    /** Tailwind max-w-* anahtarı: 32 (varsayılan), 40, 48, full */
    maxWidth: {
      type: String,
      default: "32",
      validator: (e) => Object.keys(E).includes(e)
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
      return this.truncate ? E[this.maxWidth] || E[32] : "max-w-full";
    },
    hasAdornment() {
      return !!(this.$slots.prepend || this.$slots.append);
    },
    normalizedHex() {
      return lt(this.hex);
    },
    hexBadgeStyle() {
      if (this.normalizedHex)
        return {
          backgroundColor: this.normalizedHex,
          color: ot(this.normalizedHex),
          borderColor: "transparent",
          boxShadow: "0 1px 2px rgb(0 0 0 / 0.12)"
        };
    },
    badgeClasses() {
      return [
        "ui-badge inline-flex max-w-full items-center font-medium",
        this.hasAdornment ? "gap-1" : "justify-center",
        J[this.size] || J.sm,
        !this.normalizedHex && (Z[this.variant] || Z.solid)
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
}, dt = {
  key: 0,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
}, ct = {
  key: 1,
  class: "inline-flex shrink-0 items-center [&_.ui-icon]:leading-none"
};
function ht(e, t, n, r, o, i) {
  const a = b("Tooltip");
  return s(), k(a, {
    label: i.tooltipLabel,
    disabled: !i.showTooltip,
    placement: "top"
  }, {
    default: _(() => [
      h("span", {
        class: p(i.badgeClasses),
        style: Ie(i.hexBadgeStyle)
      }, [
        e.$slots.prepend ? (s(), l("span", dt, [
          m(e.$slots, "prepend")
        ])) : f("", !0),
        h("span", {
          ref: "labelRef",
          class: p(["ui-badge-label", i.labelWidthClass])
        }, [
          m(e.$slots, "default")
        ], 2),
        e.$slots.append ? (s(), l("span", ct, [
          m(e.$slots, "append")
        ])) : f("", !0)
      ], 6)
    ]),
    _: 3
  }, 8, ["label", "disabled"]);
}
const ft = /* @__PURE__ */ S(ut, [["render", ht]]), mt = ["sm", "md", "lg"], pt = ["solid", "outline", "ghost", "link"], gt = ["primary", "secondary", "input", "warning", "success", "info"], bt = ["button", "submit", "reset"], ee = {
  sm: "ui-control-h-sm",
  md: "ui-control-h-md",
  lg: "ui-control-h-lg"
}, te = {
  sm: "aspect-square size-8 shrink-0 p-0 !min-h-0 text-xs leading-4",
  md: "aspect-square size-9 shrink-0 p-0 !min-h-0 text-sm leading-5",
  lg: "aspect-square size-11 shrink-0 p-0 !min-h-0 text-base leading-6"
}, yt = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base"
}, ie = {
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
  }
}, vt = {
  name: "Button",
  components: { RouterLink: Ne },
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
      validator: (e) => bt.includes(e)
    },
    variant: {
      type: String,
      default: "solid",
      validator: (e) => pt.includes(e)
    },
    color: {
      type: String,
      default: "primary",
      validator: (e) => gt.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => mt.includes(e)
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
      return this.loadingText != null && this.loadingText !== "" ? this.loadingText : typeof this.$t == "function" ? this.$t("ui.button.loading") : "";
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
      const e = this.variant === "link";
      let t;
      this.cubed && !e ? t = te[this.size] || te.md : e ? t = yt[this.size] : t = ee[this.size] || ee.md;
      let n = "";
      return e || (this.rounded && !this.cubed || this.cubed) && (n = "rounded-full"), [
        "ui-button ui-control font-sans",
        ie[this.variant][this.color] || ie.solid.primary,
        t,
        this.fulled ? "ui-button--fulled w-full" : "",
        n,
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
}, kt = ["href", "data-variant", "data-color", "aria-disabled", "tabindex", "onClick"], St = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, _t = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, xt = {
  key: 0,
  class: "sr-only"
}, wt = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Ct = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Tt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, It = ["type", "disabled", "data-variant", "data-color"], zt = {
  key: 0,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center",
  "aria-hidden": "true"
}, At = {
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Lt = {
  key: 0,
  class: "sr-only"
}, Dt = {
  key: 2,
  class: "ui-button-cubed-inner inline-flex size-full min-h-0 min-w-0 items-center justify-center rounded-[inherit] [&_.ui-icon]:leading-none"
}, Ft = {
  key: 0,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
}, Rt = {
  key: 1,
  class: "inline-flex shrink-0 items-center justify-center",
  "aria-hidden": "true"
};
function Bt(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("RouterLink");
  return i.hasRouterTo ? (s(), k(u, {
    key: 0,
    to: n.to,
    custom: ""
  }, {
    default: _(({ href: d, navigate: c }) => [
      h("a", {
        href: d,
        class: p(i.buttonClasses),
        "data-variant": n.variant,
        "data-color": n.color,
        "aria-disabled": i.isDisabled ? "true" : void 0,
        tabindex: i.isDisabled ? -1 : void 0,
        onClick: (C) => i.onRouterLinkClick(C, c)
      }, [
        n.loading && i.usesCubedCenterLayout ? (s(), l("span", St, [
          g(a, {
            size: i.cubedIconSize,
            name: "spinner",
            class: "fa-spin"
          }, null, 8, ["size"])
        ])) : n.loading ? (s(), l(D, { key: 1 }, [
          h("span", _t, [
            g(a, {
              size: i.inlineIconSize,
              name: "spinner",
              class: "fa-spin"
            }, null, 8, ["size"])
          ]),
          h("span", {
            class: p(i.textContentClass)
          }, [
            i.resolvedLoadingText ? (s(), l("span", xt, y(i.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
          ], 2)
        ], 64)) : i.usesCubedCenterLayout ? (s(), l("span", wt, [
          n.prefixIcon ? (s(), k(a, {
            key: 0,
            size: i.cubedIconSize,
            name: n.prefixIcon
          }, null, 8, ["size", "name"])) : n.suffixIcon ? (s(), k(a, {
            key: 1,
            size: i.cubedIconSize,
            name: n.suffixIcon
          }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
        ])) : (s(), l(D, { key: 3 }, [
          n.prefixIcon ? (s(), l("span", Ct, [
            g(a, {
              size: i.inlineIconSize,
              name: n.prefixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0),
          h("span", {
            class: p(i.textContentClass)
          }, [
            m(e.$slots, "default")
          ], 2),
          n.suffixIcon ? (s(), l("span", Tt, [
            g(a, {
              size: i.inlineIconSize,
              name: n.suffixIcon
            }, null, 8, ["size", "name"])
          ])) : f("", !0)
        ], 64))
      ], 10, kt)
    ]),
    _: 3
  }, 8, ["to"])) : (s(), l("button", {
    key: 1,
    type: n.nativeType,
    disabled: i.isDisabled,
    class: p(i.buttonClasses),
    "data-variant": n.variant,
    "data-color": n.color,
    onClick: t[0] || (t[0] = (...d) => i.onClick && i.onClick(...d))
  }, [
    n.loading && i.usesCubedCenterLayout ? (s(), l("span", zt, [
      g(a, {
        size: i.cubedIconSize,
        name: "spinner",
        class: "fa-spin"
      }, null, 8, ["size"])
    ])) : n.loading ? (s(), l(D, { key: 1 }, [
      h("span", At, [
        g(a, {
          size: i.inlineIconSize,
          name: "spinner",
          class: "fa-spin"
        }, null, 8, ["size"])
      ]),
      h("span", {
        class: p(i.textContentClass)
      }, [
        i.resolvedLoadingText ? (s(), l("span", Lt, y(i.resolvedLoadingText), 1)) : m(e.$slots, "default", { key: 1 })
      ], 2)
    ], 64)) : i.usesCubedCenterLayout ? (s(), l("span", Dt, [
      n.prefixIcon ? (s(), k(a, {
        key: 0,
        size: i.cubedIconSize,
        name: n.prefixIcon
      }, null, 8, ["size", "name"])) : n.suffixIcon ? (s(), k(a, {
        key: 1,
        size: i.cubedIconSize,
        name: n.suffixIcon
      }, null, 8, ["size", "name"])) : m(e.$slots, "default", { key: 2 })
    ])) : (s(), l(D, { key: 3 }, [
      n.prefixIcon ? (s(), l("span", Ft, [
        g(a, {
          size: i.inlineIconSize,
          name: n.prefixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0),
      h("span", {
        class: p(i.textContentClass)
      }, [
        m(e.$slots, "default")
      ], 2),
      n.suffixIcon ? (s(), l("span", Rt, [
        g(a, {
          size: i.inlineIconSize,
          name: n.suffixIcon
        }, null, 8, ["size", "name"])
      ])) : f("", !0)
    ], 64))
  ], 10, It));
}
const hr = /* @__PURE__ */ S(vt, [["render", Bt]]), $t = ["none", "sm", "md"], ne = {
  none: "",
  sm: "my-2",
  md: "my-4"
}, Vt = {
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
      validator: (e) => $t.includes(e)
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
      return ["ui-divider", ne[this.spacing] || "", this.$attrs.class].filter(Boolean).join(" ");
    },
    labeledClass() {
      return [
        "ui-divider",
        "ui-divider--labeled",
        ne[this.spacing] || "",
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
}, Pt = { class: "ui-divider__label" }, Ot = {
  key: 1,
  class: "ui-section-label"
};
function Et(e, t, n, r, o, i) {
  const a = b("ui-icon");
  return i.hasLabel ? (s(), l("div", T({
    key: 1,
    class: i.labeledClass
  }, i.labeledAttrs), [
    t[0] || (t[0] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", Pt, [
      n.icon ? (s(), k(a, {
        key: 0,
        name: n.icon,
        size: "sm",
        class: "text-muted-foreground"
      }, null, 8, ["name"])) : f("", !0),
      n.title ? (s(), l("span", Ot, y(n.title), 1)) : f("", !0)
    ]),
    t[1] || (t[1] = h("span", {
      class: "ui-divider__line",
      "aria-hidden": "true"
    }, null, -1))
  ], 16)) : (s(), l("hr", T({
    key: 0,
    class: i.rootClass
  }, i.rootAttrs), null, 16));
}
const Le = /* @__PURE__ */ S(Vt, [["render", Et]]), Nt = ["solid", "dashed", "dotted", "double"], re = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, Mt = ["solid", "regular", "brands", "light", "duotone", "thin"], jt = {
  name: "Card",
  components: { Divider: Le },
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
      validator: (e) => Nt.includes(e)
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
      validator: (e) => Mt.includes(e)
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
      return re[this.borderType] || re.solid;
    },
    rootClasses() {
      const e = [
        "ui-surface",
        "ui-card",
        ...this.border ? ["border", this.borderStyleClass] : ["border-0", "border-transparent"]
      ];
      return this.removePadding && e.push("ui-card--no-padding"), this.transparent && e.push("ui-card--transparent"), x(e.join(" "), this.$attrs.class);
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
    }
  }
}, Ht = {
  key: 0,
  class: "ui-card-toolbar shrink-0"
}, Yt = {
  key: 0,
  class: "ui-header-lead"
}, Kt = { class: "ui-header-lead__main" }, Wt = {
  key: 0,
  class: "ui-header-lead__icon"
}, Qt = { class: "ui-header-lead__text" }, qt = {
  key: 0,
  class: "ui-heading-3"
}, Ut = {
  key: 1,
  class: "ui-text-default"
}, Gt = {
  key: 0,
  class: "ui-header-lead__actions"
};
function Xt(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("Divider");
  return s(), l("div", T({ class: i.rootClasses }, i.passthroughAttrs), [
    e.$slots.toolbar ? (s(), l("div", Ht, [
      m(e.$slots, "toolbar")
    ])) : f("", !0),
    i.hasHeaderBlock ? (s(), l("div", {
      key: 1,
      class: p(["ui-card-header shrink-0", { "ui-card-header--inset": n.removePadding }])
    }, [
      m(e.$slots, "header", {}, () => [
        i.hasDefaultHeader ? (s(), l("div", Yt, [
          h("div", Kt, [
            n.icon ? (s(), l("span", Wt, [
              g(a, {
                name: n.icon,
                type: n.iconType,
                size: "lg"
              }, null, 8, ["name", "type"])
            ])) : f("", !0),
            h("div", Qt, [
              n.title ? (s(), l("h3", qt, y(n.title), 1)) : f("", !0),
              n.description ? (s(), l("p", Ut, y(n.description), 1)) : f("", !0)
            ])
          ]),
          e.$slots.append || e.$slots.actions ? (s(), l("div", Gt, [
            m(e.$slots, "append"),
            m(e.$slots, "actions")
          ])) : f("", !0)
        ])) : f("", !0)
      ])
    ], 2)) : f("", !0),
    i.showHeaderDivider ? (s(), k(u, {
      key: 2,
      spacing: "none",
      class: "!my-0 shrink-0"
    })) : f("", !0),
    e.$slots.default ? (s(), l("div", {
      key: 3,
      class: p(["ui-card-body ui-text-default", {
        "ui-card-body--row": n.row,
        "ui-card-body--flush": n.removePadding
      }])
    }, [
      m(e.$slots, "default")
    ], 2)) : f("", !0),
    e.$slots.footer ? (s(), l("div", {
      key: 4,
      class: p(["ui-card-footer", { "ui-card-footer--inset": n.removePadding }])
    }, [
      m(e.$slots, "footer")
    ], 2)) : f("", !0)
  ], 16);
}
const fr = /* @__PURE__ */ S(jt, [["render", Xt]]);
let se = 0;
function ae(e) {
  return String(e).padStart(2, "0");
}
function F(e) {
  return `${e.getFullYear()}-${ae(e.getMonth() + 1)}-${ae(e.getDate())}`;
}
function N(e) {
  if (e == null || e === "") return null;
  const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(e).trim());
  if (!t) return null;
  const n = Number(t[1]), r = Number(t[2]) - 1, o = Number(t[3]), i = new Date(n, r, o);
  return i.getFullYear() !== n || i.getMonth() !== r || i.getDate() !== o ? null : i;
}
const Zt = {
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
    se += 1;
    const e = se, t = N(this.modelValue) || /* @__PURE__ */ new Date();
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
      return N(this.modelValue);
    },
    displayText() {
      return this.selectedDate ? F(this.selectedDate) : this.placeholder;
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
      const e = this.viewYear, t = this.viewMonth, n = new Date(e, t, 1), r = new Date(e, t, 1 - n.getDay()), o = [];
      for (let i = 0; i < 42; i += 1) {
        const a = new Date(r.getFullYear(), r.getMonth(), r.getDate() + i), u = a.getMonth() === t && a.getFullYear() === e, d = a.getDate(), c = F(a), C = `${a.getFullYear()}-${a.getMonth()}-${a.getDate()}`, A = !!(this.selectedDate && c === F(this.selectedDate)), w = F(/* @__PURE__ */ new Date()) === c, v = !!(this.minYmd && c < this.minYmd);
        o.push({
          key: C,
          d,
          out: !u,
          date: a,
          sel: A,
          today: w,
          inMonth: u,
          disabled: v
        });
      }
      return o;
    }
  },
  watch: {
    modelValue() {
      const e = N(this.modelValue);
      e && (this.viewYear = e.getFullYear(), this.viewMonth = e.getMonth());
    }
  },
  methods: {
    isQuickDateDisabled(e) {
      if (!e) return !0;
      const t = F(e);
      return !!(this.minYmd && t < this.minYmd);
    },
    shiftMonth(e) {
      const t = new Date(this.viewYear, this.viewMonth + e, 1);
      this.viewYear = t.getFullYear(), this.viewMonth = t.getMonth();
    },
    pick(e, t) {
      if (!e.date || e.disabled) return;
      const n = F(e.date);
      this.$emit("update:modelValue", n), this.$emit("change", n), t();
    },
    pickQuick(e, t) {
      const n = /* @__PURE__ */ new Date();
      if (e === "yesterday" && n.setDate(n.getDate() - 1), this.isQuickDateDisabled(n)) return;
      const r = F(n);
      this.viewYear = n.getFullYear(), this.viewMonth = n.getMonth(), this.$emit("update:modelValue", r), this.$emit("change", r), t();
    },
    dayVariant(e) {
      return e.sel ? "solid" : "ghost";
    },
    dayColor(e) {
      return e.sel || e.today && !e.sel ? "primary" : "secondary";
    }
  }
}, Jt = { class: "ui-datepicker-panel w-full min-w-[17rem] p-2" }, ei = { class: "mb-2 flex items-center justify-between gap-2" }, ti = { class: "text-sm font-medium tabular-nums text-foreground" }, ii = { class: "ui-datepicker-grid" }, ni = { class: "ui-datepicker-quick" };
function ri(e, t, n, r, o, i) {
  const a = b("ui-button"), u = b("ui-popover");
  return s(), l("div", {
    class: p([
      "ui-datepicker",
      n.fulled ? "ui-datepicker--fulled w-full" : "w-auto shrink-0",
      n.disabled ? "pointer-events-none opacity-50" : "",
      e.$attrs.class
    ])
  }, [
    g(u, {
      open: o.menuOpen,
      "onUpdate:open": t[2] || (t[2] = (d) => o.menuOpen = d),
      placement: "bottom-start",
      "match-trigger-width": !0,
      disabled: n.disabled
    }, {
      trigger: _(({ open: d, toggle: c }) => [
        g(a, {
          type: "button",
          id: i.resolvedId,
          variant: "solid",
          color: "input",
          fulled: n.fulled,
          "text-align": "left",
          "prefix-icon": "calendar",
          disabled: n.disabled,
          "aria-expanded": d ? "true" : "false",
          "aria-haspopup": !0,
          onClick: c
        }, {
          default: _(() => [
            h("span", {
              class: p([
                "min-w-0 flex-1 truncate",
                i.selectedDate ? "text-foreground" : "text-muted-foreground"
              ])
            }, y(i.displayText), 3)
          ]),
          _: 1
        }, 8, ["id", "fulled", "disabled", "aria-expanded", "onClick"])
      ]),
      content: _(({ close: d }) => [
        h("div", Jt, [
          h("div", ei, [
            g(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-left",
              "aria-label": "Previous month",
              onClick: t[0] || (t[0] = z((c) => i.shiftMonth(-1), ["stop"]))
            }),
            h("span", ti, y(i.monthTitle), 1),
            g(a, {
              variant: "ghost",
              color: "primary",
              cubed: "",
              "prefix-icon": "chevron-right",
              "aria-label": "Next month",
              onClick: t[1] || (t[1] = z((c) => i.shiftMonth(1), ["stop"]))
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
          h("div", ii, [
            (s(!0), l(D, null, V(i.calendarCells, (c) => (s(), k(a, {
              key: c.key,
              variant: i.dayVariant(c),
              color: i.dayColor(c),
              size: "sm",
              disabled: c.disabled,
              "aria-selected": c.sel ? "true" : "false",
              "aria-disabled": c.disabled ? "true" : void 0,
              "data-outside": c.inMonth ? void 0 : "true",
              "data-today": c.today ? "true" : void 0,
              onClick: (C) => i.pick(c, d)
            }, {
              default: _(() => [
                B(y(c.d), 1)
              ]),
              _: 2
            }, 1032, ["variant", "color", "disabled", "aria-selected", "aria-disabled", "data-outside", "data-today", "onClick"]))), 128))
          ]),
          h("div", ni, [
            g(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: i.todayQuickDisabled,
              onClick: (c) => i.pickQuick("today", d)
            }, {
              default: _(() => [
                B(y(i.resolvedTodayLabel), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]),
            g(a, {
              type: "button",
              variant: "ghost",
              color: "secondary",
              size: "sm",
              fulled: "",
              disabled: i.yesterdayQuickDisabled,
              onClick: (c) => i.pickQuick("yesterday", d)
            }, {
              default: _(() => [
                B(y(i.resolvedYesterdayLabel), 1)
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
const mr = /* @__PURE__ */ S(Zt, [["render", ri]]), si = [
  "textarea.ui-input-field:not([disabled])",
  "input.ui-input-field:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  'input:not([disabled]):not([type="hidden"]):not([type="submit"]):not([type="button"]):not([type="reset"])'
].join(","), ai = [
  "button.ui-select-field:not([disabled])",
  "button.ui-pin-cell:not([disabled])"
].join(",");
function li(e) {
  if (!(e instanceof HTMLElement) || e.disabled || e.getAttribute("aria-hidden") === "true") return !1;
  const t = getComputedStyle(e);
  return t.display === "none" || t.visibility === "hidden" ? !1 : e.getClientRects().length > 0;
}
function le(e, t, { skipFooter: n = !1 } = {}) {
  if (!e) return null;
  for (const r of e.querySelectorAll(t))
    if (li(r) && !(n && r.closest(".ui-card-footer")))
      return r;
  return null;
}
function oi(e) {
  const t = [
    e.querySelector(".ui-card-body"),
    e.querySelector(".ui-card-toolbar"),
    e
  ].filter(Boolean), n = [];
  for (const r of t)
    n.includes(r) || n.push(r);
  return n;
}
function oe(e, { skipFooter: t = !1 } = {}) {
  const n = le(e, si, { skipFooter: t });
  if (n)
    return n.focus(), !0;
  const r = le(e, ai, { skipFooter: t });
  return r ? (r.focus(), !0) : !1;
}
function ui(e) {
  if (!e) return !1;
  const t = e.querySelector("[data-primary-field]");
  if (t && oe(t))
    return !0;
  for (const n of oi(e))
    if (oe(n, { skipFooter: n === e }))
      return !0;
  return !1;
}
const di = "(max-width: 767px)";
function ci() {
  return typeof window > "u" ? !1 : window.matchMedia(di).matches;
}
let ue = 0;
const hi = ["solid", "dashed", "dotted", "double"], de = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
  double: "border-double"
}, fi = ["solid", "regular", "brands", "light", "duotone", "thin"], mi = ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"], ce = {
  sm: "ui-dialog-panel--max-sm",
  md: "ui-dialog-panel--max-md",
  lg: "ui-dialog-panel--max-lg",
  xl: "ui-dialog-panel--max-xl",
  "2xl": "ui-dialog-panel--max-2xl",
  "3xl": "ui-dialog-panel--max-3xl",
  "4xl": "ui-dialog-panel--max-4xl",
  "5xl": "ui-dialog-panel--max-5xl"
}, pi = {
  name: "Dialog",
  components: { Divider: Le },
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
      validator: (e) => mi.includes(e)
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
      validator: (e) => hi.includes(e)
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
      validator: (e) => fi.includes(e)
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
    ue += 1;
    const e = ue;
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
      return de[this.borderType] || de.solid;
    },
    maxWidthClass() {
      return ce[this.maxWidth] || ce.lg;
    },
    panelClasses() {
      const e = this.border ? x("border", this.borderStyleClass) : x("border-0", "border-transparent");
      return x(
        "ui-surface ui-card ui-dialog-panel relative z-[1] w-full",
        this.maxWidthClass,
        e,
        this.$attrs.class
      );
    },
    passthroughAttrs() {
      const { class: e, ...t } = this.$attrs;
      return t;
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
      return this.closeLabel != null && this.closeLabel !== "" ? this.closeLabel : typeof this.$t == "function" ? this.$t("ui.dialog.close") : "Close";
    },
    rootLayerClasses() {
      return x(
        "ui-dialog-root fixed inset-0 flex items-center justify-center p-4 outline-none",
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
        const t = (n) => {
          n.target === e && (e.removeEventListener("transitionend", t), this.clearFocusFallback(), this.runInitialFocus());
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
      e && ui(e) || (t = e == null ? void 0 : e.focus) == null || t.call(e);
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
      if (!ci() || e.button !== 0) return;
      const t = this.$refs.panelRef;
      if (!t) return;
      e.preventDefault(), this.teardownSheetDrag();
      const n = e.clientY, r = t.style.transition;
      t.style.transition = "none";
      const o = (u) => {
        const d = Math.max(0, u.clientY - n);
        t.style.transform = `translateY(${d}px)`;
      }, i = (u) => {
        const d = Math.max(0, u.clientY - n);
        t.style.transition = r, t.style.transform = "", d >= 72 && this.close(), this.teardownSheetDrag();
      }, a = () => {
        t.style.transition = r, t.style.transform = "", this.teardownSheetDrag();
      };
      window.addEventListener("pointermove", o), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", a), this.sheetDragCleanup = () => {
        window.removeEventListener("pointermove", o), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", a);
      };
    }
  }
}, gi = ["aria-labelledby", "aria-describedby", "aria-label"], bi = {
  key: 0,
  class: "ui-card-header shrink-0"
}, yi = {
  key: 0,
  class: "ui-dialog-header__icon"
}, vi = ["id"], ki = {
  key: 2,
  class: "ui-dialog-header__actions"
}, Si = ["id"], _i = {
  key: 1,
  class: "ui-card-toolbar shrink-0"
}, xi = {
  key: 4,
  class: "ui-card-footer"
};
function wi(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("ui-button"), d = b("Divider");
  return s(), k(Ce, { to: "body" }, [
    g(Te, {
      name: "ui-overlay-dialog",
      appear: "",
      onAfterEnter: i.onOverlayAfterEnter,
      onAfterLeave: i.onOverlayAfterLeave
    }, {
      default: _(() => [
        n.open ? (s(), l("div", {
          key: 0,
          ref: "layerRef",
          class: p(i.rootLayerClasses),
          tabindex: "-1",
          role: "presentation",
          onKeydown: t[3] || (t[3] = (...c) => i.onLayerKeydown && i.onLayerKeydown(...c))
        }, [
          h("div", {
            class: "ui-dialog-backdrop absolute inset-0 bg-black/50",
            "aria-hidden": "true",
            onClick: t[0] || (t[0] = (...c) => i.onBackdrop && i.onBackdrop(...c))
          }),
          h("div", T({
            ref: "panelRef",
            class: i.panelClasses,
            role: "dialog",
            "aria-modal": "true",
            tabindex: "-1",
            "aria-labelledby": i.ariaLabelledby,
            "aria-describedby": i.ariaDescribedby,
            "aria-label": i.ariaLabelAttr
          }, i.passthroughAttrs, {
            onClick: t[2] || (t[2] = z(() => {
            }, ["stop"]))
          }), [
            h("div", {
              class: "ui-dialog-sheet-grab shrink-0",
              onPointerdown: t[1] || (t[1] = (...c) => i.onSheetPointerDown && i.onSheetPointerDown(...c))
            }, [...t[4] || (t[4] = [
              h("div", {
                class: "ui-dialog-sheet-handle",
                "aria-hidden": "true"
              }, null, -1)
            ])], 32),
            i.hasHeaderBlock ? (s(), l("div", bi, [
              m(e.$slots, "header", {}, () => [
                i.hasDefaultHeader ? (s(), l("div", {
                  key: 0,
                  class: p(["ui-dialog-header", { "ui-dialog-header--no-icon": !n.icon }])
                }, [
                  n.icon ? (s(), l("span", yi, [
                    g(a, {
                      name: n.icon,
                      type: n.iconType,
                      size: "sm"
                    }, null, 8, ["name", "type"])
                  ])) : f("", !0),
                  n.title ? (s(), l("h3", {
                    key: 1,
                    id: o.titleId,
                    class: "ui-dialog-header__title ui-heading-3"
                  }, y(n.title), 9, vi)) : f("", !0),
                  e.$slots.append || e.$slots.actions ? (s(), l("div", ki, [
                    m(e.$slots, "append"),
                    m(e.$slots, "actions")
                  ])) : f("", !0),
                  n.showClose ? (s(), k(u, {
                    key: 3,
                    type: "button",
                    variant: "solid",
                    color: "secondary",
                    size: "sm",
                    cubed: "",
                    "prefix-icon": "xmark",
                    "aria-label": i.resolvedCloseLabel,
                    onClick: i.close
                  }, null, 8, ["aria-label", "onClick"])) : f("", !0),
                  n.description ? (s(), l("p", {
                    key: 4,
                    id: o.descriptionId,
                    class: "ui-dialog-header__description ui-text-default"
                  }, y(n.description), 9, Si)) : f("", !0)
                ], 2)) : f("", !0)
              ])
            ])) : f("", !0),
            e.$slots.toolbar ? (s(), l("div", _i, [
              m(e.$slots, "toolbar")
            ])) : f("", !0),
            i.showHeaderDivider ? (s(), k(d, {
              key: 2,
              spacing: "none",
              class: "!my-0 shrink-0"
            })) : f("", !0),
            e.$slots.default ? (s(), l("div", {
              key: 3,
              class: p(["ui-card-body ui-text-default", { "ui-card-body--row": n.row }])
            }, [
              m(e.$slots, "default")
            ], 2)) : f("", !0),
            e.$slots.footer ? (s(), l("div", xi, [
              m(e.$slots, "footer")
            ])) : f("", !0)
          ], 16, gi)
        ], 34)) : f("", !0)
      ]),
      _: 3
    }, 8, ["onAfterEnter", "onAfterLeave"])
  ]);
}
const pr = /* @__PURE__ */ S(pi, [["render", wi]]);
let he = 0;
const Ci = ["vertical", "horizontal"], Ti = ["default", "card"], Ii = {
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
      validator: (e) => Ci.includes(e)
    },
    /**
     * `default`: mevcut `direction` düzeni.
     * `card`: kenarlıklı, yuvarlatılmış yüzey; küçük ekranda dikey, `sm+` yatay `space-between`.
     */
    variant: {
      type: String,
      default: "default",
      validator: (e) => Ti.includes(e)
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
    he += 1;
    const e = he;
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
}, zi = ["data-primary-field"], Ai = {
  key: 0,
  class: "ui-form-row-text"
}, Li = ["for"], Di = {
  key: 1,
  class: "ui-form-row-action shrink-0"
}, Fi = ["id"], Ri = { class: "ui-form-row-control" };
function Bi(e, t, n, r, o, i) {
  return s(), l("div", {
    class: p(["ui-form-row", i.rootLayoutClass]),
    "data-primary-field": n.primary ? "" : void 0
  }, [
    i.hasTextBlock ? (s(), l("div", Ai, [
      n.label || e.$slots.action ? (s(), l("div", {
        key: 0,
        class: p(i.labelLineClass)
      }, [
        n.label ? (s(), l("label", {
          key: 0,
          class: "ui-form-label min-w-0",
          for: i.controlId
        }, y(n.label), 9, Li)) : f("", !0),
        e.$slots.action ? (s(), l("div", Di, [
          m(e.$slots, "action")
        ])) : f("", !0)
      ], 2)) : f("", !0),
      n.description ? (s(), l("p", {
        key: 1,
        id: i.descriptionId,
        class: "ui-text-default"
      }, y(n.description), 9, Fi)) : f("", !0)
    ])) : f("", !0),
    h("div", Ri, [
      m(e.$slots, "default", {
        controlId: i.controlId,
        descriptionId: i.descriptionId
      })
    ])
  ], 10, zi);
}
const gr = /* @__PURE__ */ S(Ii, [["render", Bi]]), $i = ["solid", "regular", "brands", "light", "duotone", "thin"], fe = {
  solid: "fa-solid",
  regular: "fa-regular",
  brands: "fa-brands",
  light: "fa-light",
  duotone: "fa-duotone",
  thin: "fa-thin"
}, Vi = ["xs", "sm", "md", "lg"], Pi = {
  xs: "text-xs leading-none",
  sm: "text-sm leading-none",
  md: "text-base leading-none",
  lg: "text-lg leading-none"
}, Oi = {
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
      validator: (e) => $i.includes(e)
    },
    /** Visual size (maps to Tailwind `text-*`). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Vi.includes(e)
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
      return fe[this.type] || fe.light;
    },
    iconClass() {
      return x(
        "ui-icon fa not-italic inline-block shrink-0",
        this.faWeightClass,
        this.name ? `fa-${this.name}` : "",
        Pi[this.size],
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
function Ei(e, t, n, r, o, i) {
  return s(), l("i", T({ class: i.iconClass }, i.rootAttrs), null, 16);
}
const br = /* @__PURE__ */ S(Oi, [["render", Ei]]);
let me = 0;
const Ni = ["sm", "md", "lg"], Mi = {
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
      validator: (e) => Ni.includes(e)
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
    return me += 1, { fallbackId: `ui-input-${me}` };
  },
  computed: {
    resolvedSize() {
      return this.size !== "md" ? this.size : (typeof this.uiFormRowPrimary == "function" ? this.uiFormRowPrimary() : this.uiFormRowPrimary) ? "lg" : "md";
    },
    rootClass() {
      return x(
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
      const e = /* @__PURE__ */ new Set([
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
      ]), t = {};
      for (const [n, r] of Object.entries(this.$attrs))
        e.has(n) || (t[n] = r);
      return t;
    }
  },
  methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value), this.$emit("input", e);
    }
  }
}, ji = {
  key: 0,
  class: "ui-text-default flex shrink-0 items-center"
}, Hi = {
  key: 1,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Yi = ["id", "value", "rows", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Ki = ["id", "type", "value", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength"], Wi = {
  key: 4,
  class: "inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, Qi = {
  key: 5,
  class: "ui-text-default flex shrink-0 items-center"
};
function qi(e, t, n, r, o, i) {
  const a = b("ui-icon");
  return s(), l("div", {
    class: p([i.rootClass, e.$attrs.class])
  }, [
    e.$slots.prepend ? (s(), l("div", ji, [
      m(e.$slots, "prepend")
    ])) : f("", !0),
    n.prefixIcon ? (s(), l("span", Hi, [
      g(a, {
        name: n.prefixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    n.multiline ? (s(), l("textarea", T({
      key: 2,
      id: i.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--textarea",
      value: n.modelValue,
      rows: n.rows,
      disabled: n.disabled,
      readonly: n.readonly,
      placeholder: n.placeholder,
      name: n.name,
      autocomplete: n.autocomplete,
      maxlength: n.maxlength
    }, i.passthroughAttrs, {
      onInput: t[0] || (t[0] = (...u) => i.onInput && i.onInput(...u)),
      onChange: t[1] || (t[1] = (u) => e.$emit("change", u)),
      onFocus: t[2] || (t[2] = (u) => e.$emit("focus", u)),
      onBlur: t[3] || (t[3] = (u) => e.$emit("blur", u))
    }), null, 16, Yi)) : (s(), l("input", T({
      key: 3,
      id: i.resolvedId,
      ref: "field",
      class: "ui-input-field ui-input-field--single",
      type: n.type,
      value: n.modelValue,
      disabled: n.disabled,
      readonly: n.readonly,
      placeholder: n.placeholder,
      name: n.name,
      autocomplete: n.autocomplete,
      maxlength: n.maxlength
    }, i.passthroughAttrs, {
      onInput: t[4] || (t[4] = (...u) => i.onInput && i.onInput(...u)),
      onChange: t[5] || (t[5] = (u) => e.$emit("change", u)),
      onFocus: t[6] || (t[6] = (u) => e.$emit("focus", u)),
      onBlur: t[7] || (t[7] = (u) => e.$emit("blur", u))
    }), null, 16, Ki)),
    n.suffixIcon ? (s(), l("span", Wi, [
      g(a, {
        name: n.suffixIcon,
        size: "xs"
      }, null, 8, ["name"])
    ])) : f("", !0),
    e.$slots.append ? (s(), l("div", Qi, [
      m(e.$slots, "append")
    ])) : f("", !0)
  ], 2);
}
const yr = /* @__PURE__ */ S(Mi, [["render", qi]]);
let pe = 0;
const Ui = ["sm", "md", "lg"], ge = [
  { value: "+90", label: "+90" },
  { value: "+1", label: "+1" },
  { value: "+44", label: "+44" },
  { value: "+49", label: "+49" }
], Gi = {
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
      default: () => ge
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => Ui.includes(e)
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
    return pe += 1, { fallbackId: `ui-phone-number-${pe}` };
  },
  computed: {
    countryOptions() {
      var e;
      return (e = this.countries) != null && e.length ? this.countries : ge;
    },
    isSingleCountry() {
      return this.countryOptions.length === 1;
    },
    rootClass() {
      return x(
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
      for (const [n, r] of Object.entries(this.$attrs))
        e.has(n) || (t[n] = r);
      return t;
    }
  }
}, Xi = { class: "ui-phone-prepend" }, Zi = {
  key: 0,
  class: "ui-phone-country-static"
};
function Ji(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("ui-select"), d = b("ui-input");
  return s(), l("div", {
    class: p(i.rootClass)
  }, [
    g(d, T({
      id: i.resolvedNumberId,
      modelValue: i.innerNumber,
      "onUpdate:modelValue": t[1] || (t[1] = (c) => i.innerNumber = c),
      type: "tel",
      inputmode: "tel",
      class: "w-full",
      size: n.size,
      disabled: n.disabled,
      readonly: n.readonly,
      placeholder: i.resolvedPlaceholder,
      name: n.numberName,
      autocomplete: n.autocomplete,
      maxlength: n.numberMaxlength,
      "aria-describedby": n.ariaDescribedby
    }, i.numberPassthrough, {
      onFocus: t[2] || (t[2] = (c) => e.$emit("focus", c)),
      onBlur: t[3] || (t[3] = (c) => e.$emit("blur", c))
    }), {
      prepend: _(() => [
        h("div", Xi, [
          g(a, {
            name: "phone",
            size: "xs",
            class: "text-muted-foreground",
            "aria-hidden": "true"
          }),
          i.isSingleCountry ? (s(), l("span", Zi, y(i.innerCountry), 1)) : (s(), k(u, {
            key: 1,
            modelValue: i.innerCountry,
            "onUpdate:modelValue": t[0] || (t[0] = (c) => i.innerCountry = c),
            variant: "inline",
            size: n.size,
            options: i.countryOptions,
            disabled: n.disabled,
            "aria-label": i.resolvedCountryAria
          }, null, 8, ["modelValue", "size", "options", "disabled", "aria-label"]))
        ])
      ]),
      _: 1
    }, 16, ["id", "modelValue", "size", "disabled", "readonly", "placeholder", "name", "autocomplete", "maxlength", "aria-describedby"])
  ], 2);
}
const vr = /* @__PURE__ */ S(Gi, [["render", Ji]]), en = {
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
}, tn = ["name", "value", "checked"], nn = { class: "ui-radio-body" }, rn = { class: "ui-radio-label" }, sn = {
  key: 0,
  class: "ui-radio-description"
};
function an(e, t, n, r, o, i) {
  var a;
  return s(), l("label", {
    class: p([
      "ui-radio",
      `ui-radio--${i.groupVariant}`,
      {
        "ui-radio--checked": i.isChecked,
        "ui-radio--highlight": n.highlight && i.isChecked
      }
    ]),
    onKeydown: [
      t[1] || (t[1] = P(z((...u) => i.select && i.select(...u), ["prevent"]), ["enter"])),
      t[2] || (t[2] = P(z((...u) => i.select && i.select(...u), ["prevent"]), ["space"]))
    ]
  }, [
    h("input", {
      type: "radio",
      name: (a = i.uiRadioGroup) == null ? void 0 : a.groupName,
      value: i.stringValue,
      checked: i.isChecked,
      class: "sr-only",
      onChange: t[0] || (t[0] = (...u) => i.select && i.select(...u))
    }, null, 40, tn),
    t[3] || (t[3] = h("span", {
      class: "ui-radio-indicator",
      "aria-hidden": "true"
    }, null, -1)),
    h("span", nn, [
      h("span", rn, y(n.label), 1),
      n.description ? (s(), l("span", sn, y(n.description), 1)) : f("", !0)
    ])
  ], 34);
}
const kr = /* @__PURE__ */ S(en, [["render", an]]);
let be = 0;
const ln = ["list", "button", "List", "Button"], on = ["vertical", "horizontal"], un = {
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
      validator: (e) => ln.includes(e)
    },
    /** Yalnız `variant="list"`: `horizontal` ile yan yana dizilim */
    orientation: {
      type: String,
      default: "vertical",
      validator: (e) => on.includes(e)
    },
    /** `radiogroup` erişilebilir adı */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  data() {
    return be += 1, { groupName: `ui-radio-group-${be}` };
  },
  computed: {
    normalizedVariant() {
      return (this.variant || "list").toLowerCase() === "button" ? "button" : "list";
    },
    rootClass() {
      return x(
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
}, dn = ["aria-label"];
function cn(e, t, n, r, o, i) {
  return s(), l("div", {
    class: p(i.rootClass),
    role: "radiogroup",
    "aria-label": n.ariaLabel || void 0
  }, [
    m(e.$slots, "default")
  ], 10, dn);
}
const Sr = /* @__PURE__ */ S(un, [["render", cn]]), hn = {
  name: "Tag",
  components: { Badge: ft, Tooltip: Ae },
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
}, fn = ["aria-label"];
function mn(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("Tooltip"), d = b("Badge");
  return s(), k(d, {
    variant: n.variant,
    size: n.size,
    class: "ui-tag max-w-[min(100%,14rem)] shrink-0"
  }, ze({
    default: _(() => [
      m(e.$slots, "default")
    ]),
    _: 2
  }, [
    n.removable ? {
      name: "append",
      fn: _(() => [
        g(u, {
          label: i.removeLabel,
          placement: "bottom"
        }, {
          default: _(() => [
            h("button", {
              type: "button",
              class: "ui-tag-remove",
              "aria-label": i.removeLabel,
              onClick: t[0] || (t[0] = z((c) => e.$emit("remove"), ["stop"]))
            }, [
              g(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, fn)
          ]),
          _: 1
        }, 8, ["label"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["variant", "size"]);
}
const pn = /* @__PURE__ */ S(hn, [["render", mn]]);
let ye = 0;
const gn = ["field", "inline"], bn = ["sm", "md", "lg"], yn = {
  name: "Select",
  components: { Tag: pn },
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
      validator: (e) => gn.includes(e)
    },
    size: {
      type: String,
      default: "md",
      validator: (e) => bn.includes(e)
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
    ye += 1;
    const e = ye;
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
      return x(
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
        const n = String(t.label), r = String(t.value);
        return n !== e && r !== e;
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
      for (const [n, r] of Object.entries(this.$attrs))
        e.has(n) || (t[n] = r);
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
      const t = this.normalizedOptions.find((n) => String(n.value) === String(e));
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
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], n = t.findIndex((r) => String(r) === String(e.value));
      n >= 0 ? t.splice(n, 1) : t.push(e.value), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } });
    },
    removeValue(e) {
      if (!this.multiple) return;
      const t = Array.isArray(this.modelValue) ? [...this.modelValue] : [], n = t.findIndex((r) => String(r) === String(e));
      n < 0 || (t.splice(n, 1), this.$emit("update:modelValue", t), this.$emit("change", { type: "change", target: { value: t.map(String).join(",") } }));
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
}, vn = ["name", "value"], kn = ["id", "disabled", "aria-expanded", "aria-haspopup", "aria-controls", "aria-describedby", "onClick"], Sn = {
  key: 0,
  class: "ui-select-prefix inline-flex shrink-0 items-center text-muted-foreground",
  "aria-hidden": "true"
}, _n = {
  key: 1,
  class: "ui-select-values-inner"
}, xn = ["placeholder", "aria-label", "disabled"], wn = {
  key: 2,
  class: "ui-select-value ui-select-value--placeholder",
  "data-popover-align": ""
}, Cn = { class: "ui-select-field-suffix" }, Tn = ["aria-label"], In = {
  class: "ui-select-chevron",
  "aria-hidden": "true"
}, zn = ["placeholder", "aria-label", "onKeydown"], An = ["id", "role", "aria-multiselectable", "aria-labelledby"], Ln = {
  key: 0,
  class: "flex flex-col gap-2 px-1 py-2"
}, Dn = {
  "data-popover-align": "",
  class: "block min-w-0 truncate"
};
function Fn(e, t, n, r, o, i) {
  const a = b("ui-icon"), u = b("Tag"), d = b("ui-skeleton"), c = b("ui-button"), C = b("ui-empty"), A = b("ui-popover");
  return s(), l("div", {
    class: p(i.rootClass)
  }, [
    n.name ? (s(), l("input", {
      key: 0,
      type: "hidden",
      name: n.name,
      value: i.hiddenFieldValue
    }, null, 8, vn)) : f("", !0),
    g(A, {
      open: o.menuOpen,
      "onUpdate:open": t[6] || (t[6] = (w) => o.menuOpen = w),
      placement: "bottom-start",
      "match-trigger-width": i.resolvedMatchTriggerWidth,
      disabled: i.isDisabled,
      "align-selected-option-to-trigger": i.alignSelectedToTrigger
    }, ze({
      trigger: _(({ open: w, toggle: v }) => [
        h("button", T({
          type: "button",
          id: i.resolvedId,
          class: ["ui-select-field", { "ui-select-field--values": n.multiple }],
          disabled: i.isDisabled,
          "aria-expanded": w ? "true" : "false",
          "aria-haspopup": i.listboxRole,
          "aria-controls": o.listboxId,
          "aria-describedby": n.ariaDescribedby
        }, i.triggerPassthrough, {
          onClick: (I) => i.onTriggerClick(v)
        }), [
          n.prefixIcon ? (s(), l("span", Sn, [
            g(a, {
              name: n.prefixIcon,
              size: "xs"
            }, null, 8, ["name"])
          ])) : f("", !0),
          n.multiple ? (s(), l("div", _n, [
            (s(!0), l(D, null, V(i.selectedValues, (I) => (s(), k(u, {
              key: String(I),
              variant: "secondary",
              size: "sm",
              removable: "",
              onRemove: (H) => i.removeValue(I)
            }, {
              default: _(() => [
                B(y(i.labelForValue(I)), 1)
              ]),
              _: 2
            }, 1032, ["onRemove"]))), 128)),
            i.isFilterable ? j((s(), l("input", {
              key: 0,
              ref: "searchInput",
              "onUpdate:modelValue": t[0] || (t[0] = (I) => o.filterQuery = I),
              type: "text",
              class: p(["ui-select-values-input", { "ui-select-values-input--solo": !i.selectedValues.length }]),
              placeholder: i.multipleInputPlaceholder,
              "aria-label": i.resolvedFilterPlaceholder,
              autocomplete: "off",
              disabled: i.isDisabled,
              onClick: t[1] || (t[1] = z(() => {
              }, ["stop"])),
              onKeydown: t[2] || (t[2] = (...I) => i.onSearchKeydown && i.onSearchKeydown(...I))
            }, null, 42, xn)), [
              [q, o.filterQuery]
            ]) : f("", !0)
          ])) : n.loading ? (s(), l("span", wn, y(i.resolvedLoadingLabel), 1)) : (s(), l("span", {
            key: 3,
            class: p(["ui-select-value", { "ui-select-value--placeholder": i.isPlaceholderDisplay }]),
            "data-popover-align": ""
          }, y(i.displayLabel), 3)),
          h("span", Cn, [
            i.showClearButton ? (s(), l("button", {
              key: 0,
              type: "button",
              class: "ui-select-clear",
              "aria-label": i.clearAriaLabel,
              onClick: t[3] || (t[3] = z((...I) => i.clearSelection && i.clearSelection(...I), ["stop"]))
            }, [
              g(a, {
                name: "xmark",
                size: "xs"
              })
            ], 8, Tn)) : f("", !0),
            h("span", In, [
              g(a, {
                name: "chevron-down",
                size: "xs"
              })
            ])
          ])
        ], 16, kn)
      ]),
      content: _(({ close: w }) => [
        h("div", {
          ref: "listbox",
          id: o.listboxId,
          class: "ui-select-listbox",
          role: i.listboxRole,
          "aria-multiselectable": n.multiple ? "true" : void 0,
          "aria-labelledby": i.resolvedId
        }, [
          n.loading && !i.filteredOptions.length ? (s(), l("div", Ln, [
            (s(), l(D, null, V(3, (v) => g(d, {
              key: v,
              variant: "line",
              class: p(v === 3 ? "max-w-[72%]" : void 0)
            }, null, 8, ["class"])), 64))
          ])) : i.filteredOptions.length ? (s(!0), l(D, { key: 1 }, V(i.filteredOptions, (v) => (s(), k(c, {
            key: String(v.value),
            variant: i.isSelected(v) ? "solid" : "ghost",
            color: i.isSelected(v) ? "primary" : "secondary",
            size: "sm",
            fulled: "",
            "text-align": "left",
            role: "option",
            class: p(["ui-select-option", { "ui-select-option--selected": i.isSelected(v) }]),
            "suffix-icon": i.isSelected(v) ? "check" : void 0,
            "aria-selected": i.isSelected(v) ? "true" : "false",
            onClick: (I) => i.pick(v, w)
          }, {
            default: _(() => [
              h("span", Dn, y(v.label), 1)
            ]),
            _: 2
          }, 1032, ["variant", "color", "class", "suffix-icon", "aria-selected", "onClick"]))), 128)) : i.isFilterable && o.filterQuery ? (s(), k(C, {
            key: 2,
            icon: "magnifying-glass",
            size: "sm",
            title: i.noResultsText
          }, null, 8, ["title"])) : (s(), k(C, {
            key: 3,
            icon: "table-cells",
            size: "sm",
            title: i.emptyOptionsText
          }, null, 8, ["title"]))
        ], 8, An)
      ]),
      _: 2
    }, [
      i.showPopoverHeader ? {
        name: "header",
        fn: _(({ close: w }) => [
          j(h("input", {
            ref: "filterInput",
            "onUpdate:modelValue": t[4] || (t[4] = (v) => o.filterQuery = v),
            type: "text",
            class: "ui-select-filter-input w-full",
            placeholder: i.resolvedFilterPlaceholder,
            "aria-label": i.resolvedFilterPlaceholder,
            autocomplete: "off",
            onMousedown: t[5] || (t[5] = z(() => {
            }, ["prevent"])),
            onKeydown: [
              P(z((v) => i.pickFirstFiltered(w), ["prevent"]), ["enter"]),
              P(z((v) => w(), ["prevent"]), ["esc"])
            ]
          }, null, 40, zn), [
            [q, o.filterQuery]
          ])
        ]),
        key: "0"
      } : void 0,
      e.$slots.footer ? {
        name: "footer",
        fn: _((w) => [
          m(e.$slots, "footer", Be($e(w)))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["open", "match-trigger-width", "disabled", "align-selected-option-to-trigger"])
  ], 2);
}
const _r = /* @__PURE__ */ S(yn, [["render", Fn]]), Rn = ["line", "circle", "block", "pill"], Bn = ["sm", "md", "lg"], $n = 480, ve = {
  line: "ui-skeleton--line",
  circle: "ui-skeleton--circle",
  block: "ui-skeleton--block",
  pill: "ui-skeleton--pill"
}, ke = {
  sm: "ui-skeleton--size-sm",
  md: "ui-skeleton--size-md",
  lg: "ui-skeleton--size-lg"
}, Vn = {
  name: "Skeleton",
  inheritAttrs: !1,
  props: {
    variant: {
      type: String,
      default: "line",
      validator: (e) => Rn.includes(e)
    },
    loading: {
      type: Boolean,
      default: !1
    },
    /** Yalnızca `variant="line"` için: sm (16px), md (20px), lg (40px, liste/tablo satırı). */
    size: {
      type: String,
      default: "md",
      validator: (e) => Bn.includes(e)
    }
  },
  setup(e) {
    const t = Pe(), n = R(() => !!t.default), r = L(null), o = L(null), i = L(null), a = L(null), u = L(!1), d = L(!1), c = L(!1), C = L(!1), A = R(
      () => e.loading || d.value
    ), w = R(
      () => e.loading || d.value
    );
    Oe(() => {
      C.value = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
    }), Ee(
      () => e.loading,
      async ($, Re) => {
        var K, W, Q;
        if ($) {
          d.value = !1, c.value = !1, a.value = null, u.value = !1;
          return;
        }
        if (Re !== !0) return;
        if (C.value) {
          d.value = !1, a.value = null, u.value = !1;
          return;
        }
        const O = ((K = r.value) == null ? void 0 : K.offsetHeight) ?? ((W = o.value) == null ? void 0 : W.offsetHeight) ?? 0;
        d.value = !0, c.value = !1, u.value = !0, a.value = O, await U();
        const Y = ((Q = i.value) == null ? void 0 : Q.scrollHeight) ?? O;
        if (O <= 0 && Y <= 0) {
          v();
          return;
        }
        await U(), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            a.value = Y, c.value = !0;
          });
        }), setTimeout(v, $n + 40);
      }
    );
    function v() {
      d.value = !1, c.value = !1, a.value = null, u.value = !1;
    }
    function I($) {
      $.target === r.value && $.propertyName === "height" && (e.loading || u.value && v());
    }
    const H = R(() => {
      if (a.value != null)
        return { height: `${a.value}px` };
    }), De = R(() => ({
      "ui-skeleton-placeholder--flow": e.loading && !d.value,
      "ui-skeleton-placeholder--overlay": d.value,
      "ui-skeleton-placeholder--fade-out": d.value
    })), Fe = R(() => ({
      "ui-skeleton-content-wrap--loading": e.loading && !d.value,
      "ui-skeleton-content-wrap--revealing": d.value,
      "ui-skeleton-content-wrap--revealing-visible": d.value && c.value,
      "ui-skeleton-content-wrap--ready": !e.loading && !d.value
    }));
    return {
      hasDefaultSlot: n,
      hostRef: r,
      placeholderRef: o,
      contentWrapRef: i,
      hostStyle: H,
      heightAnimActive: u,
      isRevealing: d,
      showPlaceholder: A,
      isBusy: w,
      placeholderClass: De,
      contentWrapClass: Fe,
      onHostTransitionEnd: I
    };
  },
  computed: {
    variantClass() {
      return ve[this.variant] || ve.line;
    },
    lineSizeClass() {
      if (this.variant === "line")
        return ke[this.size] || ke.md;
    },
    skeletonClass() {
      return x(
        "ui-skeleton",
        this.variantClass,
        this.lineSizeClass,
        this.$attrs.class
      );
    },
    hostClass() {
      return x(
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
}, Pn = ["aria-busy"], On = ["aria-hidden"];
function En(e, t, n, r, o, i) {
  return r.hasDefaultSlot ? (s(), l("div", T({
    key: 1,
    ref: "hostRef",
    class: i.hostClass,
    style: r.hostStyle,
    "aria-busy": r.isBusy ? "true" : void 0
  }, i.passthroughAttrs, {
    onTransitionend: t[0] || (t[0] = (...a) => r.onHostTransitionEnd && r.onHostTransitionEnd(...a))
  }), [
    j(h("div", {
      ref: "placeholderRef",
      class: p(["ui-skeleton-placeholder", r.placeholderClass]),
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
      [Ve, r.showPlaceholder]
    ]),
    h("div", {
      ref: "contentWrapRef",
      class: p(["ui-skeleton-content-wrap", r.contentWrapClass])
    }, [
      h("div", {
        class: "ui-skeleton-content",
        "aria-hidden": r.showPlaceholder && !r.isRevealing ? "true" : void 0
      }, [
        m(e.$slots, "default")
      ], 8, On)
    ], 2)
  ], 16, Pn)) : (s(), l("div", T({
    key: 0,
    class: i.skeletonClass,
    "aria-hidden": "true"
  }, i.passthroughAttrs), null, 16));
}
const xr = /* @__PURE__ */ S(Vn, [["render", En]]), Nn = {
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
      var r, o;
      const e = ((r = this.uiTabs) == null ? void 0 : r.orientation) === "vertical", n = ((o = this.uiTabs) == null ? void 0 : o.variant) === "segmented" && !e ? "segmented" : "line";
      return x(
        "ui-tab-list",
        n === "segmented" ? "ui-tab-list--segmented" : "ui-tab-list--line",
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
      var C, A;
      if (!this.uiTabs) return;
      const t = this.uiTabs.orientation === "vertical", n = Array.from(this.$el.querySelectorAll('[role="tab"]:not([disabled])'));
      if (n.length === 0) return;
      const r = t ? ["ArrowDown", "ArrowRight"] : ["ArrowRight", "ArrowDown"], o = t ? ["ArrowUp", "ArrowLeft"] : ["ArrowLeft", "ArrowUp"], i = e.key;
      let a = 0;
      if (r.includes(i)) a = 1;
      else if (o.includes(i)) a = -1;
      else return;
      e.preventDefault();
      const u = document.activeElement;
      let d = n.indexOf(u);
      d === -1 && (d = n.findIndex((w) => w.getAttribute("aria-selected") === "true")), d === -1 && (d = 0);
      let c = d + a;
      c < 0 && (c = n.length - 1), c >= n.length && (c = 0), (A = (C = n[c]) == null ? void 0 : C.focus) == null || A.call(C);
    }
  }
}, Mn = ["aria-label", "aria-orientation"];
function jn(e, t, n, r, o, i) {
  return s(), l("div", T({
    class: i.listClass,
    role: "tablist",
    "aria-label": n.ariaLabel || void 0,
    "aria-orientation": i.ariaOrientation
  }, i.passthroughAttrs, {
    onKeydown: t[0] || (t[0] = (...a) => i.onKeydown && i.onKeydown(...a))
  }), [
    m(e.$slots, "default")
  ], 16, Mn);
}
const wr = /* @__PURE__ */ S(Nn, [["render", jn]]);
let Se = 0;
const Hn = ["line", "segmented"], Yn = {
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
      validator: (e) => Hn.includes(e)
    },
    /** `horizontal` — yan yana tetikleyiciler; `vertical` — sol şerit + içerik. */
    orientation: {
      type: String,
      default: "horizontal",
      validator: (e) => e === "horizontal" || e === "vertical"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return Se += 1, {
      baseId: `ui-tabs-${Se}`
    };
  },
  provide() {
    return {
      uiTabs: this
    };
  },
  computed: {
    rootClass() {
      return x(
        "ui-tabs flex min-w-0 flex-col gap-4",
        this.variant === "segmented" ? "ui-tabs--segmented" : "ui-tabs--line",
        this.orientation === "vertical" ? "ui-tabs--vertical" : "",
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
function Kn(e, t, n, r, o, i) {
  return s(), l("div", T({ class: i.rootClass }, i.passthroughAttrs), [
    m(e.$slots, "default")
  ], 16);
}
const Cr = /* @__PURE__ */ S(Yn, [["render", Kn]]), Wn = ["solid", "regular", "brands", "light", "duotone", "thin"], Qn = {
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
      validator: (e) => Wn.includes(e)
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
      return x(
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
}, qn = ["id", "aria-selected", "aria-controls", "tabindex", "disabled"], Un = { class: "ui-tab-trigger-label min-w-0 truncate" };
function Gn(e, t, n, r, o, i) {
  const a = b("ui-icon");
  return s(), l("button", {
    type: "button",
    role: "tab",
    id: i.triggerDomId,
    class: p(i.triggerClass),
    "aria-selected": i.isSelected ? "true" : "false",
    "aria-controls": i.panelDomId,
    tabindex: i.isSelected ? 0 : -1,
    disabled: n.disabled,
    onClick: t[0] || (t[0] = (...u) => i.select && i.select(...u))
  }, [
    n.icon ? (s(), k(a, {
      key: 0,
      name: n.icon,
      type: i.tabIconType,
      size: i.tabIconSize,
      class: "ui-tab-trigger-icon",
      "aria-hidden": "true"
    }, null, 8, ["name", "type", "size"])) : f("", !0),
    h("span", Un, [
      m(e.$slots, "default", {}, () => [
        B(y(n.label), 1)
      ])
    ])
  ], 10, qn);
}
const Tr = /* @__PURE__ */ S(Qn, [["render", Gn]]), Ir = {
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
}, zr = {
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
}, Xn = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950], Zn = "ui-sans-serif, system-ui, sans-serif", _e = {
  none: "0",
  sm: "4px",
  DEFAULT: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, xe = {
  surface: "var(--surface)",
  foreground: "var(--foreground)",
  background: "var(--background)",
  control: "var(--control)"
};
function Jn(e) {
  return typeof document > "u" ? null : e ? typeof e == "string" ? document.querySelector(e) : e : document.documentElement;
}
function er(e) {
  const t = String(e).trim();
  return !t || t.includes(",") ? t : `${t}, ${Zn}`;
}
function tr(e) {
  const t = e.trim().replace("#", "");
  return t.length === 3 ? [0, 1, 2].map((n) => parseInt(t[n] + t[n], 16)) : t.length === 6 ? [
    parseInt(t.slice(0, 2), 16),
    parseInt(t.slice(2, 4), 16),
    parseInt(t.slice(4, 6), 16)
  ] : null;
}
function ir(e, t, n) {
  const [r, o, i] = [e, t, n].map((a) => {
    const u = a / 255;
    return u <= 0.03928 ? u / 12.92 : ((u + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * o + 0.0722 * i;
}
function nr(e, t = "#ffffff", n = "#0a0a0b") {
  const r = tr(e);
  return r && ir(...r) > 0.4 ? n : t;
}
function rr(e) {
  return e.startsWith("--") ? e : `--${e.replace(/([A-Z])/g, "-$1").replace(/_/g, "-").toLowerCase()}`;
}
function sr(e) {
  if (e == null || e === "")
    return null;
  const t = Number(e);
  if (Number.isNaN(t))
    return null;
  const n = t <= 1 ? Math.round(t * 100) : Math.round(t);
  return `${Math.min(100, Math.max(0, n))}%`;
}
function ar(e) {
  if (e == null || e === "")
    return null;
  if (typeof e == "number")
    return `${e}px`;
  const t = String(e).trim();
  return _e[t] != null ? _e[t] : /^\d+$/.test(t) ? `${t}px` : t;
}
function lr(e) {
  return e == null || e === "" ? null : xe[e] ? xe[e] : String(e);
}
function M(e, t, n) {
  if (!n || typeof n != "object")
    return;
  const r = sr(n.opacity ?? n.bgOpacity);
  r && (e[`--ui-${t}-opacity`] = r);
  const o = ar(n.backdropBlur ?? n.backdropFilter);
  o && (e[`--ui-${t}-backdrop-blur`] = o);
  const i = lr(n.mixFrom);
  i && (e[`--ui-${t}-mix-from`] = i);
}
function we(e, t, n) {
  const r = e[t];
  if (r != null && r !== "")
    return String(r);
  const o = e[n];
  if (o != null && o !== "")
    return String(o);
}
function Ar(e = {}, t = {}) {
  const n = Jn(e.root ?? t.root);
  if (!n || typeof e != "object")
    return {};
  e.mode === "dark" ? n.classList.add("dark") : e.mode === "light" && n.classList.remove("dark");
  const r = {};
  if (e.fontFamily && (r["--font-sans"] = er(e.fontFamily)), e.baseColor && typeof e.baseColor == "object")
    for (const u of Xn) {
      const d = e.baseColor[u];
      d != null && d !== "" && (r[`--base-${u}`] = String(d));
    }
  const o = [
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
  for (const [u, d] of o) {
    const c = e[u];
    c != null && c !== "" && (r[d] = String(c));
  }
  const i = we(e, "primaryColor", "primary");
  i && (r["--primary"] = i, e.primaryForeground || (r["--primary-foreground"] = nr(i)), e.ring || (r["--ring"] = `color-mix(in oklab, ${i} 55%, transparent)`));
  const a = we(e, "secondaryColor", "secondary");
  if (a && (r["--secondary"] = a), M(r, "surface", e.surfaceStyle), M(r, "control", e.controlStyle), M(r, "input", e.inputStyle), e.colors && typeof e.colors == "object")
    for (const [u, d] of Object.entries(e.colors))
      d != null && d !== "" && (r[rr(u)] = String(d));
  for (const [u, d] of Object.entries(r))
    n.style.setProperty(u, d);
  return { ...r };
}
function Lr(e, t) {
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
  dr as A,
  ft as B,
  fr as C,
  mr as D,
  gr as F,
  br as I,
  vr as P,
  kr as R,
  _r as S,
  wr as T,
  S as _,
  cr as a,
  hr as b,
  pr as c,
  Le as d,
  yr as e,
  Sr as f,
  xr as g,
  Tr as h,
  Cr as i,
  pn as j,
  Ae as k,
  Ar as l,
  x as m,
  Ir as n,
  ci as o,
  Lr as p,
  zr as t
};
//# sourceMappingURL=apply-theme-Gyy2vWE9.js.map
